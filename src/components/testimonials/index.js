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
        result.push('blur h')

      let diff = 3 - this.activeCoach
      let pos = coach + diff

      if (this.activeCoach === 3) result.push(`pos-${coach}`)
      else {
        if (pos < 1) pos += 5
        if (pos > 5) pos -= 5
        result.push(`pos-${pos}`)
      }
      result.push(`size-${Math.abs(3 - pos)}`)

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