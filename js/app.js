// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'corazon rojo',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		{
		path: '/offers/',
    	url: 'offers.html',
    	name: 'offers',
  		},
		{
		path: '/brands/',
    	url: 'brands.html',
    	name: 'brands',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/bag/',
    	url: 'bag.html',
    	name: 'bag',
  		},
		{
		path: '/confirm/',
    	url: 'confirm.html',
    	name: 'confirm',
  		}
		,
		{
		path: '/contenido/',
    	url: 'Policia.html',
    	name: 'policia',
  		},
		
	],
	dialog: {
		title: 'Corazón Rojo',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Bienvenido a Corazón Rojo, Tú Puedes ayudar a salvar una Vida !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





