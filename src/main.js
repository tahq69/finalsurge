import outlines from './components/outlines'
import pager from './components/pager'
import slider from './components/slider'

import './sass/styles.scss'

let pagination = pager(outlines)
let slides = slider(pagination, outlines)
