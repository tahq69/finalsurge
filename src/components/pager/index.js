import logo from '../logo'
import corner from '../cornerTopRight'

export default new Vue({
  el: '#pager',
  data() {
    return {
      page: 1,
      isPageAway: true,
      isInvisible: true
    }
  },
  methods: {
    setPage(page, fromPage) {
      if (page !== 1) {
        this.isPageAway = false
      }

      if (fromPage === 1)
        this.isInvisible = false

      this.page = page
    },

    leavePage(page, targetPage) {
      if (targetPage === 1) {
        // hide pager before go to page 1
        this.isInvisible = true
      }

      corner.hide()
      this.isPageAway = true
    },
    hide() {
      this.$el.style.display = 'none';
    },
    show() {
      this.$el.style.display = 'block';
    },
  }
})
