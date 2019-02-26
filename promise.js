var request = require("request");

var userDetails;

function initialize() {

    // ignore SSL cert mismatch 
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
        console.log('start http get...');
     // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function asyncPro() {
    return new Promise(function(resolve, reject) {
        console.log('test');
        resolve('success');
        reject('failed');

    });
}

function asyncProFailure() {
    return new Promise(function(resolve, reject) {
        console.log('test');        
        reject('failed');
    });
}

function main() {
    console.log('start main.............');

    var initializePromise = initialize();
    // initializePromise.then(function(result) {
    //     userDetails = result;
    //     console.log("Initialized user details 1st");
    //     // Use user details from here
    //     console.log(userDetails)
    // }, function(err) {
    //     console.log(err);
    // })

    asyncPro().then(function(msg){
        console.log(msg);
    });

    console.log('try failure');
    
    asyncProFailure().then(function(msg) {
        console.log(msg);
        
    }).catch(function(msg) {
        console.log('promise rejected: ' + msg)
    });


    console.log('end main.............');
}

main();
