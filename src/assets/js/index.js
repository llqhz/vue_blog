/*
* @Author: llqhz
* @Date:   2017-11-26 10:31:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-05 18:21:13
*/

'use strict'

$(function () {
  // 已经执行到此处

  var mask = $('.mask')

  var sideBar = $('.sideBar')

  var sideBarLi = $('nav ul li:last-of-type')

  var backButton = $('.back-to-top')

  /* 侧边栏 */
  sideBarLi.click(function (event) {
    showSideBar()
  })

  mask.click(function (event) {
    hideSideBar()
  })

  var showSideBar = function () {
    mask.fadeIn('slow')
    sideBar.animate({ 'right': '0' }, '3000')
  }

  var hideSideBar = function () {
    mask.fadeOut('slow')
    sideBar.animate({ 'right': '-300' }, '3000')
  }

  /* 返回顶部 */
  /* 1.监听button的click事件 动画body的scrollTop: 0 */
  backButton.on('click', function (event) {
    event.preventDefault()
    /* Act on the event */
    $('html,body').animate({
      scrollTop: 0
    }, 800)
  })

  /* 2.监听scrollTop的值判断是否显示按钮 */
  $(window).on('scroll', function (event) {
    event.preventDefault()
    /* Act on the event */
    var scrollTop = $(window).scrollTop()
    // 已经滚动偏移的高度 移动端不支持$('html').scrollTop()

    var clientHeight = $('html')[0]['clientHeight']
    // 可见区域的高度

    var offsetHeight = $('html').height() // 元素的总高度
    if ((scrollTop > clientHeight) && ((offsetHeight - scrollTop) >= (50 + clientHeight))) {
      backButton.fadeIn('500')
    } else {
      backButton.fadeOut('500')
    }
  })

  /* 监听more点击事件 */
  $('.more').on('click', function (event) {
    event.preventDefault()
    /* Act on the event */
    $('html,body').animate({
      /* scrollTop:$(window).height() */
      scrollTop: $('.content').offset().top
    }, 1000)
  })
})
