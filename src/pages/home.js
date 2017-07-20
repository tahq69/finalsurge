export default {
  name: 'home',
  
  el: '#home',

  data: {
    message: 'Hello Vue!'
  },

  onEnter(index, element) {
    console.log('home.onEnter', {index, element})
  },

  beforeLeave(index, element) {
    console.log('home.beforeLeave', {index, element})
  },
}
