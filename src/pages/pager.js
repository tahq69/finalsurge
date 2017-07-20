class Pager {
  constructor() {
    this.page = 1
    this.pager = document.getElementById('pager')
    this.element = this.pager.childNodes[1]

    const leftLine = document.getElementById('line-l')
    console.log(leftLine, leftLine.childNodes)
    this.leftLineTop = leftLine.getElementsByClassName('line-l-t')[0]
    this.leftLineBottom = leftLine.getElementsByClassName('line-l-b')[0]
  }

  setPage(page, fromPage) {
    if (page === 1) {
      // make left line solid when entered page 1
      this.leftLineTop.classList.add('f')
      this.leftLineBottom.classList.add('f')
    } else {
      this.element.classList.remove('l')
    }

    if (fromPage === 1) {
      // show pager if leave page 1
      this.pager.classList.remove('transparent')
    }

    // set current page content
    this.element.innerHTML = page
  }

  leavePage(page, targetPage) {
    if (page === 1) {
      // expand lines before leave page 1
      this.leftLineTop.classList.remove('f')
      this.leftLineBottom.classList.remove('f')
    }

    if (targetPage === 1) {
      // hide pager before go to page 1
      this.pager.classList.add('transparent')
    }

    this.element.classList.add('l')
  }
}

export default new Pager()
