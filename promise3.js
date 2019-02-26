
let Observable = Rx.Observable
let resultA, resultB, resultC

const fetch = require('node-fetch')

function getComments() {
  const promise = fetch(`http://jsonplaceholder.typicode.com/comments`)
    .then(x => x.json())
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

getComments().do(
    x => console.log(x)
)