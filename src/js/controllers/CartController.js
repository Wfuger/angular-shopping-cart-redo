
var CartController = function(teaService){
  var vm = this;

  vm.title = 'Cart';
  vm.cart = teaService.getCart();
  console.log(vm.cart)
};

CartController.$inject = ['teaService'];
module.exports = CartController;