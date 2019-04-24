
window.library.getId("view").routing()
    .route('/', './views/home.html', 'myController', function (){
        library.getCtrl().functionsHome()
    }
    )
    .route('/about-me', './views/about-me.html', 'myController', null, null
    )
    .route('/products', './views/products.html', 'myController',null, null
    )
    .route('/shopping', './views/shopping.html', 'myController', function (){
        library.getCtrl().prueba()
    })
    .route('/login', './views/login.html', 'myController', null, null)

    .route('/contact', './views/contact.html', 'myController',null, null)
