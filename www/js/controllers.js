angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.firmalar = [
    { adi: 'Akbank',kategori:'Banka',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo :'https://www.akbank.com/SiteAssets/img/akbfa.jpg', id:0 },
    { adi: 'VakıfBank',kategori:'Banka',tel:'4440222',site:'http://www.vakifbank.com.tr',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo :'https://kayasehiristanbul.net/wp-content/uploads/2015/12/Vakifbank.png', id:1 },
    { adi: 'Yıldız Teknik',kategori:'Üniversite',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo :'https://en.imsad.org/uploads/content/f65ef39b-a18c-4c1a-928c-fc85a52fafb5.png', id: 2 },
    { adi: 'İstanbul Teknik',kategori:'Üniversite',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo :'https://www.turktoyu.com/uploads/logo/2cf656d6a1c0a5761a8b2d1262e043ab.png', id: 3 },
    { adi: 'Jandarma',kategori:'Acil',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo:'https://seeklogo.com/images/J/jandarma-genel-komutanligi-logo-A88E2A480D-seeklogo.com.png', id: 4 },
    { adi: 'Elektrik Arıza',kategori:'Acil',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo:'https://www.baytanelektrik.com/wp-content/uploads/2017/10/kayaba%C5%9F%C4%B1-acil-n%C3%B6bet%C3%A7i-ustas%C4%B1-istanbul-elektrik%C3%A7i.png', id: 5 },
    { adi: 'ABC Hastahanesi',kategori:'Hastane',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo:'https://multiplicamx.com/cliente/2018/cmabc/WP-CMABC/wp-content/uploads/2018/11/logo@3x.png', id: 6 },
    { adi: 'DEF Hastahanesi',kategori:'Hastane',tel:'4440444',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',site:'http://www.akbank.com',adres:'Akbank Genel Müdürlüğü Sabancı Center 4.Levent 34330 İstanbul',logo:'https://static.wixstatic.com/media/d5f6e8_22b98f5647ef4e7780a91583aa4c3eae~mv2.png/v1/fill/w_375,h_375,fp_0.50_0.50/d5f6e8_22b98f5647ef4e7780a91583aa4c3eae~mv2.png', id: 7 }
  ];
  console.log("ID:"+$stateParams.firmaId);
  if($stateParams.firmaId){
    $scope.bilgi=$scope.firmalar[$stateParams.firmaId];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
