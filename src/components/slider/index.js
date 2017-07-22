import DoSlide from 'do-slide'
import home from '../home'
import video from '../video'

export default function (pager, outlines) {
  var slider = new DoSlide('.ds-container')

  slider.onBeforeChange((curIndex, tarIndex, cur, tar) => {
    pager.leavePage(curIndex + 1, tarIndex + 1)
    switch (curIndex) {
      case 0:
        return home.beforeLeave(curIndex, cur)
      case 1:
        return video.beforeLeave(curIndex, cur)
    }
  })

  slider.onChanged((curIndex, lastIndex, cur, last) => {
    pager.setPage(curIndex + 1, lastIndex + 1)
    switch (curIndex) {
      case 0:
        return home.onEnter(curIndex, cur)
      case 1:
        return video.onEnter(curIndex, cur)
    }
  })
}