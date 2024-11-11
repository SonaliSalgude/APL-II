const dns = require('dns');

const domain = 'example.com';

dns.lookup(domain, (err, address, family) => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log(`IP Address: ${address}, Family: IPv${family}`);
  }
});

dns.resolve4(domain, (err, addresses) => {
  if (err) {
    console.error('Error occurred while resolving:', err);
  } else {
    console.log(`All A Records for ${domain}: ${addresses}`);
  }
});

dns.resolveMx(domain, (err, addresses) => {
  if (err) {
    console.error('Error occurred while resolving MX:', err);
  } else {
    console.log(`MX Records for ${domain}:`, addresses);
  }
});

const ip = '93.184.216.34'; 
dns.reverse(ip, (err, hostnames) => {
  if (err) {
    console.error('Error occurred while reverse lookup:', err);
  } else {
    console.log(`Reverse lookup for IP ${ip}: ${hostnames}`);
  }
});
