
var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
var of = require('rxjs/observable/of').of;
var map = require('rxjs/operator/map').map;



Rx.Observable.of(1,2,3); // etc
map.call(of(1,2,3), function (x) { return x + '!!!'; });
var a = Observable.of(1,2,3).map(function (x) { return x + '!!!'; });

a.subscribe(x => console.log(x));

