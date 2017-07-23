import corner from '../cornerTopRight'

export default new Vue({
  name: 'video',
  el: '#video',

  data: {
    isExiting: true,
  },

  methods: {
    beforeEnter() { },

    onEnter() {
      this.isExiting = false
      corner.red()
    },

    beforeLeave() {
      this.isExiting = true
    },
  }
})