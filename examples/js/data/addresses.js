'use strict';

/* eslint-disable require-jsdoc, no-unused-vars */

var AddressList = [];

function AddressInfo() {
    this.id = null;
    this.address = null;
}

function addAddress(addr) {
    AddressList.push(addr);
}

function findAddress(id) {
    var found;

    AddressList.forEach(function(addr) {
        if (addr.id === id) {
            found = addr;
        }
    });

    return found || AddressList[0];
}

(function() {
    var address;
    var id = 0;

    address = new AddressInfo();
    id += 1;
    address.id = String(id);
    address.address = '187A Le Van Luong, Phuoc Kien, Nha Be, HCM';
    addAddress(address);

    address = new AddressInfo();
    id += 1;
    address.id = String(id);
    address.address = '524 Hoang Dieu, Hai Chau, Da Nang';
    addAddress(address);
})();
