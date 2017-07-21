export default new Vue({
  el: '#outlines',
  data() {
    return {
      isLeftSolid: true,
      isTopSolid: true,
      isBottomSolid: false
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
    }
  }
})