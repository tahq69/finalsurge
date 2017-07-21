export default new Vue({
  name: 'home',

  el: '#home',

  data: {
    message: 'Hello Vue!'
  },

  methods: {
    onEnter(index, element) {
      console.log('home.onEnter', { index, element })
    },

    beforeLeave(index, element) {
      console.log('home.beforeLeave', { index, element })
    },
  }
})
