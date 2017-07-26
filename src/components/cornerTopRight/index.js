export default new Vue({
  name: 'corner-top-right',
  el: '#corner-t-r',
  data() {
    return {
      isHomeVisible: true,
      isBlack: false,
      isWhite: false,
      isHidden: false
    }
  },
  methods: {
    hide() {
      this.isHidden = true
    },
    show() {
      this.isHidden = false
    },
    hideHome() {
      this.isHomeVisible = false
      this.isHidden = false
    },
    showHome() {
      this.isHomeVisible = true
      this.isHidden = false
    },
    black() {
      this.isHomeVisible = false
      this.isBlack = true
      this.isWhite = false
      this.isHidden = false
    },
    white() {
      this.isHomeVisible = false
      this.isBlack = false
      this.isWhite = true
      this.isHidden = false
    }
  }
})