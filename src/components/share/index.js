export default new Vue({
  name: 'share',
  el: '#social-share',
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
})