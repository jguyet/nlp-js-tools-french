'use strict';
var adj = require('./adj');
var adv = require('./adv');
var art = require('./art');
var con = require('./conj');
var nom = require('./nom');
var ono = require('./ono');
var pre = require('./pre');
var ver = require('./ver');
var pro = require('./pro');
var nbr = require('./nbr');

module.exports = {
    all: {
        adj,
        adv,
        art,
        con,
        nom,
        ono,
        pre,
        ver,
        pro,
        nbr
    }
}
