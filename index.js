console.log('before')
setTimeout(() => { // setTimeout if async func
  console.log('wait database 2 sec')
}, 2000)
console.log('after')
// test non blocking program