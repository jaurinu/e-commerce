
window.library.getId("view").routing()
    .route('/', 'src/views/home.html', 'myController', function (){
        library.getCtrl().functionsHome()
    }
    )
    .route('/about-me', 'src/views/about-me.html', 'myController', null, null
    )
    .route('/products', 'src/views/products.html', 'myController',null, null
    )
    .route('/shopping', 'src/views/shopping.html', 'myController', function (){
        library.getCtrl().prueba()
    })
    .route('/login', 'src/views/login.html', 'myController', null, null)
    
    .route('/contact', 'src/views/contact.html', 'myController',null, null)
    
   




