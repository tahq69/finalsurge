import corner from '../cornerTopRight'
import outlines from '../outlines'

export default new Vue({
  name: 'achievement',
  el: '#achievement',

  data: {
    isExiting: true,
  },

  methods: {
    beforeEnter() {

    },
    
    onEnter() {
      this.isExiting = false
      corner.white()
      outlines.expand('bottom')
      outlines.expandBottomExtra()
    },

    beforeLeave() {
      this.isExiting = true
      outlines.solid('bottom')
    },

    afterLeave() {
      outlines.removeBottomExtra()
    }
  }
})