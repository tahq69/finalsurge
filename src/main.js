import home from './pages/home'
import DoSlide from 'do-slide'

import './sass/styles.scss'

// assign all pages to global scope
window.app = { home: new Vue(home) }

var slide = new DoSlide('.ds-container', {/* configurations */ })
