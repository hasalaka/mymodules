'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.square = square;
exports.diag = diag;

var _math = require('math');

function square(x) {
    return x * x;
}
function diag(x, y) {
    return (0, _math.sqrt)(square(x) + square(y));
}