export default new Vue({
  el: '#scroll-wrap',

  mounted() {
    this.show()
  },

  data: {
    isScrollInPlace: false,
  },

  methods: {
    hide() {
      this.isScrollInPlace = false
    },
    show() {
      this.isScrollInPlace = true
    }
  }
})