import corner from '../cornerTopRight'

export default new Vue({
  name: 'testimonials',
  el: '#testimonials',

  data: {
    isExiting: true,
    activeCoach: 3
  },

  computed: {
    coach1() { return this._coachImgClass(1) },
    coach2() { return this._coachImgClass(2) },
    coach3() { return this._coachImgClass(3) },
    coach4() { return this._coachImgClass(4) },
    coach5() { return this._coachImgClass(5) },
  },

  methods: {
    _coachImgClass(coach) {
      let result = ['coach']

      if (this.activeCoach === coach)
        result.push('active')
      else
        result.push('blur')
      
      if(this.activeCoach > coach) {
        result.push(`size-less`)
      }

      for (let i of [1, 2, 3, 4]) {
        if ([coach + i, coach - i].indexOf(this.activeCoach) > -1) {
          result.push(`size-${i}`)
        }
      }

      return result
    },

    active(coach) {
      this.activeCoach = parseInt(coach)
    },

    next() {
      this.activeCoach = this.activeCoach === 5 ? 1 : this.activeCoach + 1
    },

    prew() {
      this.activeCoach = this.activeCoach === 1 ? 5 : this.activeCoach - 1
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