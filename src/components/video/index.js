export default new Vue({
  name: 'video',
  el: '#video',

  data: {
    isExiting: true,
  },

  methods: {
    onEnter() {
      this.isExiting = false;
    },

    beforeLeave() {
      this.isExiting = true;
    },
  }
})