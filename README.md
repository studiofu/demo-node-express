# demo of using node express server

## tutorial

https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

## initialize the project and install required packages

- express - the server
- body-parser - process the response body
- cookie-parser - populate req.cookies
- multer - middleware for handling multipart/form-data

npm init
npm install express --save
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save


# JWS and JWE

use JWS (RS256) to sign the message required to sent out by using the private key

use JWE (RSA_OAEP_256) to encrypt the signed message by using the receiver's public key

# install node-jose
npm install node-jose

tutorial and specification
https://github.com/cisco/node-jose
https://developer.cisco.com/codeexchange/github/repo/cisco/node-jose/
https://connect2id.com/products/nimbus-jose-jwt/examples/jws-with-rsa-signature


# install typescript and ts-node
npm install typescript ts-node

refer to add.ts as sample
run ts-node add.ts to process the typescript file

