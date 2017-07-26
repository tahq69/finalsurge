import corner from '../cornerTopRight'

export default new Vue({
  name: 'video',
  el: '#video',

  data: {
    isExiting: true,
  },

  methods: {
    beforeEnter() {
      corner.hideHome()
     },

    onEnter() {
      this.isExiting = false
      corner.black()
    },

    beforeLeave() {
      this.isExiting = true
    },
  }
})