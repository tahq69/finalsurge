import corner from '../cornerTopRight'

export default new Vue({
  name: 'video',
  el: '#video',

  data: {
    isExiting: true,
  },

  methods: {
    onEnter() {
      this.isExiting = false
      corner.hideHome()
      corner.black()
    },

    beforeLeave() {
      this.isExiting = true
    },
  }
})