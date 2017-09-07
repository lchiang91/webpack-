


var $=require('../lib/jquery-3.2.1.min.js')
var carousel=require('../com/carousel.js')
var gotop=require('../com/gotop.js')
var waterfall=require('../com/waterfall.js')


Carousel1.init($('.carousel'))
gotop.start($('.gotop'))
waterfall.init($('.waterfall'))