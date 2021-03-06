/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

; (function ($, window, document, undefined) {
  var theRealEvent = null

  var isTouch = 'ontouchstart' in window

  var eStart = isTouch ? 'touchstart' : 'mousedown'

  var eMove = isTouch ? 'touchmove' : 'mousemove'

  var eEnd = isTouch ? 'touchend' : 'mouseup'

  var eCancel = isTouch ? 'touchcancel' : 'mouseup'

  var secondsToTime = function (secs) {
    var hoursDiv = secs / 3600; var hours = Math.floor(hoursDiv); var minutesDiv = secs % 3600 / 60; var minutes = Math.floor(minutesDiv); var seconds = Math.ceil(secs % 3600 % 60)
    if (seconds > 59) { seconds = 0; minutes = Math.ceil(minutesDiv) }
    if (minutes > 59) { minutes = 0; hours = Math.ceil(hoursDiv) }
    return (hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0' + hours + ':' : hours + ':') + (minutes.toString().length < 2 ? '0' + minutes : minutes) + ':' + (seconds.toString().length < 2 ? '0' + seconds : seconds)
  }

  var canPlayType = function (file) {
    var audioElement = document.createElement('audio')
    return !!(audioElement.canPlayType && audioElement.canPlayType('audio/' + file.split('.').pop().toLowerCase() + ';').replace(/no/, ''))
  }

  $.fn.audioPlayer = function (params) {
    var params = $.extend({ classPrefix: 'audioplayer', strPlay: 'Play', strPause: 'Pause', strVolume: 'Volume' }, params)

    var cssClass = {}

    var cssClassSub =
      {
        playPause: 'playpause',
        playing: 'playing',
        stopped: 'stopped',
        time: 'time',
        timeCurrent: 'time-current',
        timeDuration: 'time-duration',
        bar: 'bar',
        barLoaded: 'bar-loaded',
        barPlayed: 'bar-played',
        volume: 'volume',
        volumeButton: 'volume-button',
        volumeAdjust: 'volume-adjust',
        noVolume: 'novolume',
        muted: 'muted',
        mini: 'mini'
      }

    for (var subName in cssClassSub) { cssClass[subName] = params.classPrefix + '-' + cssClassSub[subName] }

    this.each(function () {
      if ($(this).prop('tagName').toLowerCase() != 'audio') { return false }

      var $this = $(this)

      var audioFile = $this.attr('src')

      var isAutoPlay = $this.get(0).getAttribute('autoplay'); var isAutoPlay = !!(isAutoPlay === '' || isAutoPlay === 'autoplay')

      var isLoop = $this.get(0).getAttribute('loop'); var isLoop = !!(isLoop === '' || isLoop === 'loop')

      var isSupport = false

      if (typeof audioFile === 'undefined') {
        $this.find('source').each(function () {
          audioFile = $(this).attr('src')
          if (typeof audioFile !== 'undefined' && canPlayType(audioFile)) {
            isSupport = true
            return false
          }
        })
      } else if (canPlayType(audioFile)) isSupport = true

      var thePlayer = $('<div class="' + params.classPrefix + '">' + (isSupport ? $('<div>').append($this.eq(0).clone()).html() : '<embed src="' + audioFile + '" width="0" height="0" volume="100" autostart="' + isAutoPlay.toString() + '" loop="' + isLoop.toString() + '" />') + '<div class="' + cssClass.playPause + '" title="' + params.strPlay + '"><a href="#">' + params.strPlay + '</a></div></div>')

      var theAudio = isSupport ? thePlayer.find('audio') : thePlayer.find('embed'); var theAudio = theAudio.get(0)

      if (isSupport) {
        thePlayer.find('audio').css({ 'width': 0, 'height': 0, 'visibility': 'hidden' })
        thePlayer.append('<div class="' + cssClass.time + ' ' + cssClass.timeCurrent + '"></div><div class="' + cssClass.bar + '"><div class="' + cssClass.barLoaded + '"></div><div class="' + cssClass.barPlayed + '"></div></div><div class="' + cssClass.time + ' ' + cssClass.timeDuration + '"></div><div class="' + cssClass.volume + '"><div class="' + cssClass.volumeButton + '" title="' + params.strVolume + '"><a href="#">' + params.strVolume + '</a></div><div class="' + cssClass.volumeAdjust + '"><div><div></div></div></div></div>')

        var theBar = thePlayer.find('.' + cssClass.bar)

        var barPlayed = thePlayer.find('.' + cssClass.barPlayed)

        var barLoaded = thePlayer.find('.' + cssClass.barLoaded)

        var timeCurrent = thePlayer.find('.' + cssClass.timeCurrent)

        var timeDuration = thePlayer.find('.' + cssClass.timeDuration)

        var volumeButton = thePlayer.find('.' + cssClass.volumeButton)

        var volumeAdjuster = thePlayer.find('.' + cssClass.volumeAdjust + ' > div')

        var volumeDefault = 0

        var adjustCurrentTime = function (e) {
          theRealEvent = isTouch ? e.originalEvent.touches[0] : e
          theAudio.currentTime = Math.round((theAudio.duration * (theRealEvent.pageX - theBar.offset().left)) / theBar.width())
        }

        var adjustVolume = function (e) {
          theRealEvent = isTouch ? e.originalEvent.touches[0] : e
          theAudio.volume = Math.abs((theRealEvent.pageY - (volumeAdjuster.offset().top + volumeAdjuster.height())) / volumeAdjuster.height())
        }

        var updateLoadBar = function () {
          var interval = setInterval(function () {
            if (theAudio.buffered.length < 1) return true
            barLoaded.width((theAudio.buffered.end(0) / theAudio.duration) * 100 + '%')
            if (Math.floor(theAudio.buffered.end(0)) >= Math.floor(theAudio.duration)) clearInterval(interval)
          }, 2000)
        }

        var volumeTestDefault = theAudio.volume; var volumeTestValue = theAudio.volume = 0.111
        if (Math.round(theAudio.volume * 1000) / 1000 == volumeTestValue) theAudio.volume = volumeTestDefault
        else thePlayer.addClass(cssClass.noVolume)

        timeDuration.html('&hellip;')
        timeCurrent.html(secondsToTime(0))

        theAudio.addEventListener('loadeddata', function () {
          updateLoadBar()
          timeDuration.html($.isNumeric(theAudio.duration) ? secondsToTime(theAudio.duration) : '&hellip;')
          volumeAdjuster.find('div').height(theAudio.volume * 100 + '%')
          volumeDefault = theAudio.volume
        })

        theAudio.addEventListener('timeupdate', function () {
          if ((new Date()).getMilliseconds() > 300 ) {
            return;
          }
          timeCurrent.html(secondsToTime(theAudio.currentTime))
          barPlayed.width((theAudio.currentTime / theAudio.duration) * 100 + '%')
        })

        theAudio.addEventListener('volumechange', function () {
          volumeAdjuster.find('div').height(theAudio.volume * 100 + '%')
          if (theAudio.volume > 0 && thePlayer.hasClass(cssClass.muted)) thePlayer.removeClass(cssClass.muted)
          if (theAudio.volume <= 0 && !thePlayer.hasClass(cssClass.muted)) thePlayer.addClass(cssClass.muted)
        })

        theAudio.addEventListener('ended', function () {
          thePlayer.removeClass(cssClass.playing).addClass(cssClass.stopped)
        })

        theBar.on(eStart, function (e) {
          adjustCurrentTime(e)
          theBar.on(eMove, function (e) { adjustCurrentTime(e) })
        })
          .on(eCancel, function () {
            theBar.unbind(eMove)
          })

        volumeButton.on('click', function () {
          if (thePlayer.hasClass(cssClass.muted)) {
            thePlayer.removeClass(cssClass.muted)
            theAudio.volume = volumeDefault
          } else {
            thePlayer.addClass(cssClass.muted)
            volumeDefault = theAudio.volume
            theAudio.volume = 0
          }
          return false
        })

        volumeAdjuster.on(eStart, function (e) {
          adjustVolume(e)
          volumeAdjuster.on(eMove, function (e) { adjustVolume(e) })
        })
          .on(eCancel, function () {
            volumeAdjuster.unbind(eMove)
          })
      } else thePlayer.addClass(cssClass.mini)

      thePlayer.addClass(isAutoPlay ? cssClass.playing : cssClass.stopped)

      thePlayer.find('.' + cssClass.playPause).on('click', function () {
        if (thePlayer.hasClass(cssClass.playing)) {
          $(this).attr('title', params.strPlay).find('a').html(params.strPlay)
          thePlayer.removeClass(cssClass.playing).addClass(cssClass.stopped)
          isSupport ? theAudio.pause() : theAudio.Stop()
        } else {
          $(this).attr('title', params.strPause).find('a').html(params.strPause)
          thePlayer.addClass(cssClass.playing).removeClass(cssClass.stopped)
          isSupport ? theAudio.play() : theAudio.Play()
        }
        return false
      })

      $this.replaceWith(thePlayer)
    })
    return this
  }
})(jQuery, window, document)
