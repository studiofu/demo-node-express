const dns = require('dns');
dns.lookup('www.javatpoint.com', (err, addresses, family) => {
    console.log('addresses:', addresses);
    console.log('family:', family);
});

