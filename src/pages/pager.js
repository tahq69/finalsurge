class Pager {
  constructor() {
    this.page = 1
    this.element = document.getElementById('pager').childNodes[1]
  }

  setPage(page = 1) {
    // animate page enter
    this.page = page
    this.element.innerHTML = page
  }

  leavePage() {
    // animate page leave
  }
}

export default new Pager()
