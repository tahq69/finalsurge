export default new Vue({
  el: '#outlines',
  data() {
    return {
      isLeftSolid: true
    }
  },
  computed: {
    leftClass() {
      if (this.isLeftSolid)
        return ['f']
      return []
    },
  },
  methods: {
    expandLeft() {
      this.isLeftSolid = false
      return true
    },
    solidLeft() {
      this.isLeftSolid = true
      return true
    }
  }
})