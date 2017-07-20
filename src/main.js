import DoSlide from 'do-slide'

import pager from './pages/pager'
import home from './pages/home'

import './sass/styles.scss'

// assign all pages to global scope
window.app = { home: new Vue(home) }

var slider = new DoSlide('.ds-container')

pager.setPage(1)

slider.onBeforeChange((curIndex, tarIndex, cur, tar) => {
  pager.leavePage()
  switch(curIndex) {
    case 0:
      return home.beforeLeave(curIndex, cur)
  }
})

slider.onChanged((curIndex, lastIndex, cur, last) => {
  pager.setPage(curIndex + 1)
  switch(curIndex) {
    case 0:
      return home.onEnter(curIndex, cur)
  }
})
