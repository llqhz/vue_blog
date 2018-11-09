<template>
  <div>
    <h2 class="title">从摄影作品中获取网页颜色搭配技巧</h2>
    <h4 class="sub-title">使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。</h4>
    <p class="author">
      作者：<span class="name">筱怪</span> &nbsp;
      发表于：<time >2018-10-23</time>
    </p>
    <div class="markdown-body">
      <music></music>
    </div>
    <div ref='demo' style='display:none'>
# Highlight.js

[![Build Status](https://travis-ci.org/highlightjs/highlight.js.svg?branch=master)](https://travis-ci.org/highlightjs/highlight.js)

Highlight.js is a syntax highlighter written in JavaScript. It works in
the browser as well as on the server. It works with pretty much any
markup, doesn’t depend on any framework, and has automatic language
detection.

## Getting Started

The bare minimum for using highlight.js on a web page is linking to the
library along with one of the styles and calling
[`initHighlightingOnLoad`][1]:

This will find and highlight code inside of `<pre><code></code></pre>` tags; it tries
to detect the language automatically. If automatic detection doesn’t
work for you, you can specify the language in the `class` attribute:

```html
<pre><code class="html">...</code></pre>
```

The list of supported language classes is available in the [class
reference][2].  Classes can also be prefixed with either `language-` or
`lang-`.

To make arbitrary text look like code, but without highlighting, use the
`plaintext` class:

```html
<pre><code class="plaintext">...</code></pre>
```

To disable highlighting altogether use the `nohighlight` class:

```html
<pre><code class="nohighlight">...</code></pre>
```

## Custom Initialization

When you need a bit more control over the initialization of
highlight.js, you can use the [`highlightBlock`][3] and [`configure`][4]
functions. This allows you to control *what* to highlight and *when*.

Here’s an equivalent way to calling [`initHighlightingOnLoad`][1] using
jQuery:

```javascript
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
```

```javascript
hljs.configure({useBR: true});

$('div.code').each(function(i, block) {
  hljs.highlightBlock(block);
});
```

For other options refer to the documentation for [`configure`][4].

## Web Workers

You can run highlighting inside a web worker to avoid freezing the browser
window while dealing with very big chunks of code.

In your main script:

```javascript
addEventListener('load', function() {
  var code = document.querySelector('#code');
  var worker = new Worker('worker.js');
  worker.onmessage = function(event) { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
})
```
    </div>
    <textarea name="demo" style='display:none' v-model="demo"></textarea>
    <divider class="divider" />
    <div class="markdown-body" v-html='content'>
    </div>
    <divider class="divider" />
    <div class="label markdown-body">
      <label for="">分类：[<span>网站建设</span>]</label>
      <label for="">浏览：<span>459</span></label>
      <label for="">评论：<span>30</span></label>
    </div>
  </div>
</template>

<script>
// import Stackedit from 'stackedit-js'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/styles/github.css'
import music from '@/views/common/tools/music'

const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
export default {
  name: 'Article',
  data: () => {
    return {
      demo: ''
    }
  },
  computed: {
    content: function () {
      console.log(this.demo)
      var s = md.render(this.demo)
      console.log(s)
      return s
    }
  },
  mounted: function () {
    // hljs.initHighlightingOnLoad()
    this.demo = this.$refs.demo.innerHTML
  },
  components: {
    music
  }
}
</script>

<style scoped>
@import '~@/assets/css/github-markdown.css';
/* @import 'highlight.js/styles/github.css' */

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media screen and  (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
@media screen and (min-width: 768px) {
  h2.title {
    font-size: 35px;
  }
  h4.sub-title {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 15px;
  }
  div.label,p.author {
    font-size: 14px;
  }
}
textarea {
  width: 100%;
}

.title {
  text-align: center;
  margin-top: 20px;
}
.sub-title {
  text-align: center;
  margin: 10px auto;
}
.author {
  text-align: center;
  font-weight: normal;
  font-size: 9px;
  color: #778899;
  margin: 4px;
}
.author .name, .author time {
  font-weight: 900;
  vertical-align: baseline;
}
.divider {
  margin: 10px auto;
  background-color: #ccc;
  width: 90%;
  max-width: 950px;
}

.label {
  margin-top: 3px;
  font-weight: normal;
  font-size: 12px;
  color: #778899;

  padding-top: 10px;
  padding-bottom: 10px;
}
.label label {
  margin-right: 10px;
}
.label label span {
  font-weight: 900;
  cursor: pointer;
}

</style>
