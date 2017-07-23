import corner from '../cornerTopRight'
import logo from '../logo'
import pager from '../pager'

export default new Vue({
  name: 'features',
  el: '#features',

  data: {
    isExiting: true,
    currentFeature: 1,
    isModalOpen: false
  },

  methods: {
    featureClass(feature) {
      if (this.currentFeature == feature)
        return ['active', 'feature']

      return ['feature', feature < this.currentFeature ? 'left' : 'right']
    },

    activeClass(feature) {
      if (this.currentFeature == feature)
        return ['active']
      return []
    },

    open(feature) {
      this.currentFeature = feature
    },

    openModal() {
      this.isModalOpen = true
      logo.hide()
      pager.hide()
      corner.hide()
    },

    closeModal() {
      this.isModalOpen = false
      logo.show()
      pager.show()
      corner.show()
    },

    prew() {
      this.currentFeature = this.currentFeature < 2 ? 6 : this.currentFeature - 1
    },

    next() {
      this.currentFeature = this.currentFeature > 5 ? 1 : this.currentFeature + 1
    },

    beforeEnter() { },

    onEnter() {
      this.isExiting = false
      corner.black()
    },

    beforeLeave() {
      this.isExiting = true
    },
  }
})