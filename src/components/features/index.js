import corner from '../cornerTopRight'
import logo from '../logo'
import pager from '../pager'

export default new Vue({
  name: 'features',
  el: '#features',

  data: {
    isExiting: true,
    currentFeature: 0,
    isModalOpen: false
  },

  methods: {
    featureClass(feature) {
      if (this.currentFeature == feature)
        return ['active', 'feature']

      return [
        'h',
        'feature',
        feature < this.currentFeature ? 'left' : 'right',
        this.isModalOpen ? '' : 'm'
      ]
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

    beforeEnter() {
      this.currentFeature = 0
    },

    onEnter() {
      this.isExiting = false
      this.currentFeature = 1
      corner.black()
    },

    beforeLeave() {
      this.isExiting = true
    },

    afterLeave() {
      this.currentFeature = 0
    },
  }
})