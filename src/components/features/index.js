import corner from '../cornerTopRight'

export default new Vue({
  name: 'features',
  el: '#features',

  data: {
    isExiting: true,
  },

  methods: {
    beforeEnter() {

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