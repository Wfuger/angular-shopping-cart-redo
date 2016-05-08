var appStoreFactory = function () {
    var teas = require('../assets/teas.json');
    var cart = [];

    var removeTea = function(id) {
        cart.map(function (tea, index) {
            if( tea._id === id ) cart.splice(index, 1)
        })
    };

    var editCartQty = function (action, qty, id) {
        cart.map(function(tea) {
            if (tea.item._id === id) {
                switch (action) {
                    case 'add-more':
                        tea.qty = +tea.qty + +qty;
                        break;
                    case 'incr':
                        ++tea.qty;
                        break;
                    case 'decr':
                        --tea.qty;
                        break;
                }
            }
        })
    };

    return {
        getTeas: function () {
            return teas;
        },
        getCart: function () {
            return cart;
        },
        removeItem: function (id) {
            removeTea(id)
        },
        addToCart: function (qty, item) {
            if (!qty) qty = 1;
            if (cart.length === 0) {
                cart.push({item: item, qty: qty})
            } else {
                cart.forEach(function(tea) {
                    item._id === tea.item._id ? editCartQty('add-more', qty, tea.item._id) : cart.push({item: item, qty: qty})
                });
            }
        },
        incrQty: function (id) {
            editCartQty('incr', 1, id)
        },
        decrQty: function (id) {
            editCartQty('decr', 1, id)
        }
    }
};

module.exports = appStoreFactory;