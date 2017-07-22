import outlines from './components/outlines'
import pager from './components/pager'
import slider from './components/slider'
import scroll from './components/scroll'
import corner from './components/cornerTopRight'

import './sass/styles.scss'

let pagination = pager(outlines, scroll, corner)
let slides = slider(pagination, outlines)

var loading = document.getElementById('loading')
loading.style.display = 'none'