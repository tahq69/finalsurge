export default new Vue({
  name: 'logo',
  el:'#page-logo',
  data() {
    return {
      isMinimized: false
    }
  },
  methods: {
    minimize() {
      this.isMinimized = true
    },
    maximize() {
      this.isMinimized = false
    }
  }
})