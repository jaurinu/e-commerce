window.library.getId("view").routing()

  .route('/', './views/home.html', 'myController', null, null)
  .route('/about-me', './views/about-me.html', 'myController', null, null)
  .route('/shop', './views/products.html', 'myController', function () {
    library.getCtrl().functionsHome()
  })
  .route('/shopping', './views/shopping.html', 'myController', function () {
    library.getCtrl().printCart()
  })
  .route('/login', './views/login.html', 'myController', function () {
    library.getCtrl().login()
  })
  .route('/contact', './views/contact.html', 'myController', null, null)