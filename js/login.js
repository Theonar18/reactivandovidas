/* INICIO - REGISTRO */

$('#iniciarSesion').on('click', function() {

    if(!$('#ini-reg').hasClass('inactivo') && !$('#iniciarSesion').hasClass('activo') && !$('#registrarSesion').hasClass('activo')
    && $('.form-inicio-sesion').hasClass('inactivo') && $('.form-registro-sesion').hasClass('inactivo')){

        $('#ini-reg').toggleClass('inactivo');
        $('#iniciarSesion').toggleClass('activo');
        $('.form-inicio-sesion').toggleClass('inactivo');

    }else if($('#ini-reg').hasClass('inactivo') && $('#iniciarSesion').hasClass('activo') && !$('#registrarSesion').hasClass('activo')
    && !$('.form-inicio-sesion').hasClass('inactivo') && $('.form-registro-sesion').hasClass('inactivo')){

        $('#ini-reg').toggleClass('inactivo');
        $('#iniciarSesion').toggleClass('activo');
        $('.form-inicio-sesion').toggleClass('inactivo');

    }else if($('#ini-reg').hasClass('inactivo') && $('#registrarSesion').hasClass('activo') && !$('#iniciarSesion').hasClass('activo')
    && !$('.form-registro-sesion').hasClass('inactivo') && $('.form-inicio-sesion').hasClass('inactivo')){
    
        $('#iniciarSesion').toggleClass('activo');
        $('#registrarSesion').toggleClass('activo');
        $('.form-registro-sesion').toggleClass('inactivo');
        $('.form-inicio-sesion').toggleClass('inactivo');
        
    }

});

$('#registrarSesion').on('click', function() {

    if(!$('#ini-reg').hasClass('inactivo') && !$('#registrarSesion').hasClass('activo') && !$('#iniciarSesion').hasClass('activo')
    && $('.form-inicio-sesion').hasClass('inactivo') && $('.form-registro-sesion').hasClass('inactivo')){

        $('#ini-reg').toggleClass('inactivo');
        $('#registrarSesion').toggleClass('activo');
        $('.form-registro-sesion').toggleClass('inactivo');

    }else if($('#ini-reg').hasClass('inactivo') && $('#registrarSesion').hasClass('activo') && !$('#iniciarSesion').hasClass('activo')
    && !$('.form-registro-sesion').hasClass('inactivo') && $('.form-inicio-sesion').hasClass('inactivo')){

        $('#ini-reg').toggleClass('inactivo');
        $('#registrarSesion').toggleClass('activo');
        $('.form-registro-sesion').toggleClass('inactivo');

    }else if($('#ini-reg').hasClass('inactivo') && $('#iniciarSesion').hasClass('activo') && !$('#registrarSesion').hasClass('activo')
        && !$('.form-inicio-sesion').hasClass('inactivo') && $('.form-registro-sesion').hasClass('inactivo')){
    
            $('#iniciarSesion').toggleClass('activo');
            $('#registrarSesion').toggleClass('activo');
            $('.form-registro-sesion').toggleClass('inactivo');
            $('.form-inicio-sesion').toggleClass('inactivo');
    }

});

/* Mirar Contraseña */
$('#show-password-inicio').on('click', function() {
  const passwordInput = $('#contraseña-inicio');
  if (passwordInput.attr('type') === 'password') {
    passwordInput.attr('type', 'text');
    $(this).text('Ocultar contraseña');
  } else {
    passwordInput.attr('type', 'password');
    $(this).text('Mostrar contraseña');
  }
});

$('#show-password-registro').on('click', function() {
  const passwordInput2 = $('#contraseña-registro');
  const passwordInput3 = $('#contraseña-confirma');
  if (passwordInput2.attr('type') === 'password' && passwordInput3.attr('type') === 'password') {
    passwordInput2.attr('type', 'text');
    passwordInput3.attr('type', 'text');
    $(this).text('Ocultar contraseñas');
  } else {
    passwordInput2.attr('type', 'password');
    passwordInput3.attr('type', 'password');
    $(this).text('Mostrar contraseñas');
  }
});

/* VALIDACIONES */
// Validación del formulario de login
$("#btn-inicio-sesion").click(function(event) {
    event.preventDefault();
  
    let correo = $("#correo-inicio").val();
    let contraseña = $("#contraseña-inicio").val();
  
    // Validación de campos vacíos
    if (correo == "" || contraseña == "") {
        //alert
      alert("Por favor, complete todos los campos");
      return false;
    }
  
    // Validación de formato de correo electrónico
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
      alert("El correo electrónico no es válido");
      return false;
    }
  
    // Si pasa todas las validaciones, se envía el formulario
    $(this).unbind("click").click();
  });
  
  // Validación del formulario de registro
  $("#btn-registro-sesion").click(function(event) {
    event.preventDefault();
  
    let correo = $("#correo-registro").val();
    let nombreUsuario = $("#nombreUsuario").val();
    let contraseña = $("#contraseña-registro").val();
    let confirmContraseña = $("#contraseña-confirma").val();
  
    // Validación de campos vacíos
    if (correo == "" || nombreUsuario == "" || contraseña == "" || confirmContraseña == "") {
      alert("Por favor, complete todos los campos");
      return false;
    }
  
    // Validación de formato de correo electrónico
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
      alert("El correo electrónico no es válido");
      return false;
    }
  
    // Validación de longitud mínima de contraseña
    if (contraseña.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
  
    // Validación de coincidencia de contraseñas
    if (contraseña != confirmContraseña) {
      alert("Las contraseñas no coinciden");
      return false;
    }
  
    // Si pasa todas las validaciones, se envía el formulario
    $(this).unbind("click").click();
  });
