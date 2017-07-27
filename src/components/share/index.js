export default new Vue({
  name: 'share',
  el: '#social-share',
  data() {
    return {
      isIconsVisible: false,
      isVisible: true,
      url: encodeURIComponent('http://finalsurge.crip.lv'),
      text: encodeURIComponent('Training and coaching platform ')
    }
  },
  methods: {
    show() {
      this.isVisible = true
      this.hideIcons()
    },
    hide() {
      this.isVisible = false
      this.hideIcons()
    },
    hideIcons() {
      this.isIconsVisible = false;
    },
    tweet() {
      let url = `https://twitter.com/home?status=${this.text + this.url}`
      this.window(url)
    },
    facebook() {
      let url = `https://www.facebook.com/sharer/sharer.php?u=${this.url}`
      this.window(url)
    },
    linkedin() {
      let url = `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${this.text}`
        + `&summary=${encodeURIComponent('Empowering athletes and coaches to reach fitness and performance excellence like never before.')}`
      this.window(url)
    },
    window(url) {
      this.hideIcons()
      window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    },
    toggleIcons() {
      this.isIconsVisible = !this.isIconsVisible;
    }
  }
})