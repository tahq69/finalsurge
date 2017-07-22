import outlines from './components/outlines'
import pager from './components/pager'
import slider from './components/slider'
import scroll from './components/scroll'
import corner from './components/cornerTopRight'
import logo from './components/logo'
import share from './components/share'

import './sass/styles.scss'

let pagination = pager(outlines, scroll, corner, logo, share)
let slides = slider(pagination, outlines)

var loading = document.getElementById('loading')
loading.style.display = 'none'