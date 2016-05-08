var teas = require('../assets/teas.json');
var HomeController = function(){
  var vm = this;
  vm.view = {};
  vm.teas = teas;
  vm.view.title = 'MEAN Tea';
};

HomeController.$inject = [];
module.exports = HomeController;