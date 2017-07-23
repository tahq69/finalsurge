import DoSlide from 'do-slide'
import home from '../home'
import video from '../video'
import achievement from '../achievement'
import features from '../features'
import testimonials from '../testimonials'

import pager from '../pager'
import outlines from '../outlines'

var slider = new DoSlide('.ds-container')
let pages = [home, video, features, testimonials, achievement]

slider.onBeforeChange((curIndex, tarIndex, cur, tar) => {
  pager.leavePage(curIndex + 1, tarIndex + 1)
  pages[curIndex].beforeLeave(curIndex, cur)
  pages[tarIndex].beforeEnter(tarIndex, cur)
})

slider.onChanged((curIndex, lastIndex, cur, last) => {
  pager.setPage(curIndex + 1, lastIndex + 1)
  pages[curIndex].onEnter(curIndex, cur)
  if (typeof pages[lastIndex].afterLeave === 'function') {
    pages[lastIndex].afterLeave(lastIndex, last)
  }
})

export default slider