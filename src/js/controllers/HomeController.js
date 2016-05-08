var teas = require('../assets/teas.json');
var HomeController = function(teaService) {
  var vm = this;
  vm.view = {};
  vm.teas = teas;
  vm.view.title = 'MEAN Tea';
  vm.addToCart = teaService.addToCart;
};

HomeController.$inject = ['teaService'];
module.exports = HomeController;