const os = require('os');
const {Observable} = require('rxjs');

function checkSystem(){
 console.log('Checking your system');
    if(os.freemem() < 4294967296){
        console.log('This app needs at least 4 GB of RAM, memory' + os.freemem());
    }if(os.cpus().length < 2){
        console.log('Processor is not supported, cpus=' + os.cpus().length);
    }
 console.log('System is checked successfully');
}
//checkSystem();

Observable.create( observer => {
observer.next('Checking your system');
if(os.freemem() < 4294967296){
    observer.next('This app needs at least 4 GB of RAM');
}if(os.cpus().length < 2){
    observer.next('Processor is not supported');
}
observer.next('System is checked successfully');
}).subscribe(m => console.log(m));


