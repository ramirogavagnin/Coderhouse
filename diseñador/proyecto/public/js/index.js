$(document).ready(function () {
    console.log('Init app')

    // Menu

    var barsMenuButtonNode = $('#barsMenuButton')


    var menuContainerNode = $('#menuContainer')

    // Codigo medio extraño para mostrar todo el contenido oculto si clickeo 
    // desde los li del menu al cargar la pagina

$('#liBio').one('click',  function show() {
        $('#bio').show(), $('#discography').show(), $('#agenda').show(),
        $('#contacto').show() 
        })

        $('#liDiscography').one('click',  function show() {
            $('#bio').show(), $('#discography').show(), $('#agenda').show(),
            $('#contacto').show() 
            })

            $('#liAgenda').one('click',  function show() {
                $('#bio').show(), $('#discography').show(), $('#agenda').show(),
                $('#contacto').show() 
                })
        
                $('#liContacto').one('click',  function show() {
                    $('#bio').show(), $('#discography').show(), $('#agenda').show(),
                    $('#contacto').show() 
                    })
      
    


    barsMenuButtonNode.click(toggleMenu)


    menuContainerNode.click(toggleMenu)

    function toggleMenu(event) {

        menuContainerNode.toggle(200)


    }

    // === Validar Form =====


    // Función que valida email

    var emailInputNode = $('#email')

    emailInputNode.one('blur', validateEmailField)

    function validateEmailField(event) {

        var inputNode = $(this)

        var value = inputNode.val()

        inputNode.next().remove()

        var errorText = ''

        if (!value) {
            errorText = 'El campo está vacío'
        } else {
            if (value.indexOf('@') === -1) {
                errorText = 'Falta el arroba (@) '
            }
            if (value.indexOf('.') === -1) {
                errorText = errorText + 'Falta el punto (.)'
            }
        }

        if (errorText) {
            var parentNode = inputNode.parent()
            parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

            inputNode.removeClass('is-valid')
            inputNode.addClass('is-invalid')
        } else {
            inputNode.removeClass('is-invalid')
            inputNode.addClass('is-valid')
        }

        if (event.type === 'blur') {
            inputNode.on('input', validateEmailField)
        }
        validateButton()
    }




    // Función que valida el nombre y el textArea



    var firstNameInputNode = $('#firstName')

    firstNameInputNode.one('blur', validateNameAndTextField)

    var textAreaInputNode = $('#comments')

    textAreaInputNode.one('blur', validateNameAndTextField)

    function validateNameAndTextField(event) {

        var inputNode = $(this)

        var value = inputNode.val()

        inputNode.next().remove()

        var errorText = ''

        if (!value) {
            errorText = 'El campo está vacío'
        }

        if (errorText) {
            var parentNode = inputNode.parent()
            parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

            inputNode.removeClass('is-valid')
            inputNode.addClass('is-invalid')
        } else {
            inputNode.removeClass('is-invalid')
            inputNode.addClass('is-valid')
        }

        if (event.type === 'blur') {
            inputNode.on('input', validateNameAndTextField)
        }

        validateButton()
    }


    // Función que valida el botón

    $('#submitButton').attr('disabled', true).addClass('disabled')


    function validateButton() {

        if (firstNameInputNode.hasClass('is-valid') &&
            emailInputNode.hasClass('is-valid') &&
            textAreaInputNode.hasClass('is-valid')
        ) {
            $('#submitButton').attr('disabled', false).removeClass('disabled')
            $('#submitButton').click(disabledButton)

            // Función de desabilita el boton y limpia el form

            function disabledButton(event) {

                var inputNode = $(this)

                inputNode.attr('disabled', true).addClass('disabled')

                firstNameInputNode.removeClass('is-valid').val('')
                emailInputNode.removeClass('is-valid').val('')
                textAreaInputNode.removeClass('is-valid').val('')
                $('#phone').removeClass('is-valid').val('')

            }

        } else {

            $('#submitButton').attr('disabled', true).addClass('disabled')
        }

    }


    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()

    console.log(scrollTop)

    
  

        if(scrollTop > 1300){

            function show() {
                $('#bio').first().show( 500, function showNext() {
                  $( this ).next( "div" ).show( 500, showNext )
                })
              }
              show()
        }
        if (scrollTop > 2100){

            function show() {
                $('#discography').first().show( 500, function showNext() {
                  $( this ).next( "div" ).show( 500, showNext )
                })
                  $('#agenda').first().show( 500, function showNext() {
                    $( this ).next( "div" ).show( 500, showNext )
                })
                    $('#contacto').first().show( 500, function showNext() {
                        $( this ).next( "div" ).show( 500, showNext )
                    })
                        $('#footer').first().show( 500, function showNext() {
                            $( this ).next( "div" ).show( 500, showNext )
                })
              }

              show()
        }

    })
   
    })