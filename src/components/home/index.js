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
    onEnter() {
      this.isExiting = false;
    },

    beforeLeave() {
      setTimeout(() => {
        this.isExiting = true;
      }, 1000)
    },
  }
})
