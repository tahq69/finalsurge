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
      outlines.expand('bottom')
      outlines.expandBottomExtra()
    },
    
    onEnter() {
      this.isExiting = false
      corner.white()
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