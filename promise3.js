
var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
require('rxjs/operators/tap');
var of = require('rxjs/observable/of').of;
var map = require('rxjs/operator/map').map;
var tap = require('rxjs/operators/tap').tap;

let resultA, resultB, resultC

const fetch = require('node-fetch')

function getComments() {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  console.log('inside get comments');
  const promise = fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(x => x.json())
    //.then(data => console.log(data));

    console.log("promoise: " + promise);
  return Observable.fromPromise(promise)
}

// addAsync(1, 2)
//   .do(x => resultA = x)
//   .flatMap(x => addAsync(x, 3))
//   .do(x => resultB = x)
//   .flatMap(x => addAsync(x, 4))
//   .do(x => resultC = x)
//   .subscribe(x => {
//     console.log('total', x)
//     conosle.log(resultA, resultB, resultC)
//   })

// getComments().do(
//     x => console.log(x)
// )

getComments().pipe(
  tap(x=>console.log(x))
).subscribe(x=>x)
;

