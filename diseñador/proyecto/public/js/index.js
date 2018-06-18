$(document).ready(function () {
    console.log('Init app')

var toggleButton = $('#toggle')

var toggleButtonOff = $('#toggleOff')

    var toggleMenu = $('#toggleMenu')
    toggleButton.click(function(){
        toggleMenu.toggle(200) 
        
    })
    toggleButtonOff.click(function(){
        toggleMenu.toggle(200) 
        
    })


})