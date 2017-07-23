import corner from '../cornerTopRight'

export default new Vue({
  name: 'features',
  el: '#features',

  data: {
    isExiting: true,
    currentFeature: 1,
  },

  methods: {
    featureClass(feature) {
      if (this.currentFeature == feature)
        return ['active', 'feature']

      return ['feature', feature < this.currentFeature ? 'left' : 'right']
    },

    open(feature) {
      this.currentFeature = feature
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