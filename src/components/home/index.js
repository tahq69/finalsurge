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
    }, 100)

    let curr = 0
    setInterval(() => {
      curr += 1
      if (!this.bgTextParts[curr])
        curr = 0

      this.bgText = this.bgTextParts[curr]
    }, 3000)
  },

  data: {
    isExiting: true,
    isScrollInPlace: false,
    bgText: 'TRAIN',
    bgTextParts: ['TRAIN', 'WITH A', 'PURPOSE']
  },

  methods: {
    beforeEnter() {
      corner.hide()
      logo.maximize()
      outlines.solid('left', 'top')
      outlines.expand('bottom', 'right')
      outlines.setPageOne()
    },

    onEnter() {
      this.isExiting = false;
      share.show()
      scroll.show()
      corner.show()
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

      corner.hide()
    }
  }
})
