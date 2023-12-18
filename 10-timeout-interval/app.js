// settimeout

setTimeout(() => {
    console.log('settimeout')
}, 3000) 

setInterval
a = 1

const setinterval_ = setInterval(() => {
    console.log(a++)
}, 1000);

setTimeout(() => {
    clearInterval(setinterval_)
    console.log('tuggadi')
}, 10000);