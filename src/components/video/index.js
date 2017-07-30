import corner from '../cornerTopRight'
import outlines from '../outlines'

export default new Vue({
  name: 'video',
  el: '#video',

  mounted() {
    this.img = document.getElementById('video-frame-overlay')
    let iframe = document.getElementById('video-frame')

    this.player = $f(iframe)
  },

  data: {
    isExiting: true,
    player: {},
    img: {},
  },

  methods: {
    beforeEnter() {
      outlines.setVideoPage()
    },

    onEnter() {
      this.isExiting = false
      corner.hideHome()
      corner.black()
    },

    beforeLeave() {
      this.isExiting = true
    },

    afterLeave() {
      outlines.leaveVideoPage()
    },

    playVideo() {
      this.img.setAttribute('style', 'display:none')
      this.player.api("play")
    },

    twitter() {
      let url = `https://twitter.com/home?status=${app.text + app.videoUrl}`
      this.window(url)
    },

    facebook() {
      let url = `https://www.facebook.com/sharer/sharer.php?u=${app.videoUrl}`
      this.window(url)
    },

    linkedin() {
      let url = `https://www.linkedin.com/shareArticle?mini=true&url=${app.videoUrl}&title=${app.text}`
        + `&summary=${app.summary}`
      this.window(url)
    },

    window(url) {
      window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    },
  }
})