(function(){
	'use strict';

var div = document.createElement("div")

div.style.height = "64px"
div.style.width = "64px"
div.style.borderRadius = "100%"
div.style.position = "relative"
div.style.transform = "translate(-50%, -50%)"

document.body.appendChild(div)

document.addEventListener("mousemove", function(event) {
    var x = event.clientX
    var y = event.clientY
    div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)'
    div.style.left = x + "px"
    div.style.top = y + "px"
})
}());