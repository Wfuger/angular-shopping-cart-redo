
var CartController = function(teaService){
  var vm = this;

  vm.title = 'Cart';
  vm.cart = teaService.getCart();
  vm.removeItem = teaService.removeItem();
};

CartController.$inject = ['teaService'];
module.exports = CartController;