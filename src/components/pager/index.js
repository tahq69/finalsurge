
export default function (outlines, scroll, corner, logo, share) {
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
        if (page === 1) {
          // make left line solid when entered page 1
          outlines.solid('left', 'top')
          outlines.expand('bottom')
          scroll.show()
          share.show()
          corner.showHome()
        } else {
          corner.hideHome()
          this.isPageAway = false
        }

        if (page === 5) {
          corner.white()
        }

        if (page === 4 || page === 3) {
          corner.black()
        }

        if (page === 2) {
          corner.red()
        }

        if (fromPage === 1)
          this.isInvisible = false

        this.page = page
      },

      leavePage(page, targetPage) {
        if (page === 1) {
          outlines.expand('left', 'top')
          outlines.solid('bottom')
          scroll.hide()
          share.hide()
          logo.minimize()
        }

        if (targetPage === 1) {
          logo.maximize()
          // hide pager before go to page 1
          this.isInvisible = true
        }

        corner.hide()
        this.isPageAway = true
      }
    }
  })
}
