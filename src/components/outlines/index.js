export default new Vue({
  el: '#outlines',
  data() {
    return {
      isLeftSolid: true,
      isTopSolid: true,
      isRightSolid: false,
      isBottomSolid: false,
      isFirstPage: true,
      isExtraExpanded: false,
      isVideoPage: false,
    }
  },
  methods: {
    expand(...sides) {
      this.setAll(sides, false)
    },

    solid(...sides) {
      this.setAll(sides, true)
    },

    setAll(sides, value) {
      for (let side of sides) {
        this[`is${this.capitalize(side)}Solid`] = value
      }
    },

    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },

    setPageOne() {
      this.isFirstPage = true
    },

    setOtherPage() {
      this.isFirstPage = false
    },

    setVideoPage() {
      this.isVideoPage = true
    },

    leaveVideoPage() {
      this.isVideoPage = false
    },

    expandBottomExtra() {
      this.isExtraExpanded = true
    },

    removeBottomExtra() {
      this.isExtraExpanded = false
    }
  }
})