/* *** Observer *** */
const {Observable, of, from, Subject,BehaviorSubject} = rxjs;
const {map, filter} = rxjs.operators

const obs = Observable.create(function (observer) {
    observer.next(ES6);
    setTimeout(() => { observer.complete(); }, 3000);
});

const subscription = obs.subscribe(
    (x) => { console.log(x()); }
)

/* *** async/wait *** */
async function asyncwait() {
    result = '';
    try {
        result = await ES6(this, words);
    } catch (error) {
        console.log(error);
    }
    return result;
}

/* *** Promis *** */
var replaceAllBannedWords = function () {
    return new Promise(function (resolve, reject) {
        if (true) resolve(ES6());
        else reject(new Error('fail'));
    });
}

var runPromis = function () {
    replaceAllBannedWords()
        .then(function (results) { console.log(results); })
        .catch(function (error) { console.log(error); })

}

/* *** ES6 *** */
function ES6() {
    String.prototype.filterWords = function (words) {
        result = '';
        this.split(' ').map((ow) => {
            words.includes(ow) ? result += '*** ' : result += ow + ' ';
        });
        return result;
    };
    console.log("This house is nice !".filterWords(['house', 'nice']));
}

// runPromis();
// ES6();
// asyncwait();
//observer run direct
//un-comment for which you want to run
