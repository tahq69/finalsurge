import outlines from '../outlines'
import scroll from '../scroll'
import corner from '../cornerTopRight'
import share from '../share'
import logo from '../logo'

export default new Vue({
  name: 'home',

  el: '#home',

  mounted() {
    setTimeout(() => {
      this.isExiting = false;
    }, 100);
  },

  data: {
    isExiting: true,
    isScrollInPlace: false,
  },

  methods: {
    beforeEnter() {
      logo.maximize()
      outlines.solid('left', 'top')
      outlines.expand('bottom', 'right')
    },

    onEnter() {
      this.isExiting = false;
      outlines.setPageOne()
      share.show()
      scroll.show()
      corner.showHome()
    },

    beforeLeave() {
      this.isExiting = true;
      outlines.setOtherPage()
      outlines.expand('left', 'top')
      outlines.solid('bottom', 'right')

      share.hide()

      scroll.hide()

      logo.minimize()
    },

    afterLeave() {
      corner.hideHome()
    }
  }
})
