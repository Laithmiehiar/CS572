var dns = require('dns');
const { promisify } = require('util')

/* Callback exec*/
const address = dns.resolve4('www.mum.edu', function(err, address){
    console.log('*** resove4 - callback ***');
    console.log(address);
    console.log('***************************');
});

const promisResolver4 = promisify(dns.resolve4);

/* Promis exec*/
promisResolver4('www.mum.edu')
.then(((res) => {    
console.log('*** resove4-Promisify ***');
console.log(res);
console.log('***************************');
}))
.catch((err) => {
    console.log('ERROR: ', err)
}
);

/* Async/Wait exec*/
async function main (){
try {
    const res = await promisResolver4('www.mum.edu');
    console.log('*** resove4-Async/Wait ***');
        console.log(res);
} catch (err) {
    console.log('ERROR: ', err)

}
}
main();
