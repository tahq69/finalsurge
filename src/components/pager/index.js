
export default function (outlines, scroll) {
  return new Vue({
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
        if (page === 1){
          // make left line solid when entered page 1
          outlines.solid('left', 'top')
          outlines.expand('bottom')
          scroll.show()
        }
        else
          this.isPageAway = false

        if (fromPage === 1)
          this.isInvisible = false

        this.page = page
      },

      leavePage(page, targetPage) {
        if (page === 1) {
          outlines.expand('left', 'top')
          outlines.solid('bottom')
          scroll.hide()
        }

        if (targetPage === 1) {
          // hide pager before go to page 1
          this.isInvisible = true
        }

        this.isPageAway = true
      }
    }
  })
}
