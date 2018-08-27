console.log('before')
const user = getUser(1)
console.log('user: ', user) // can't return id because wait 2 sec for return
console.log('after')

function getUser(id){
  setTimeout(() => { // setTimeout if async func
    console.log('wait database 2 sec')
    return { id: id, name: 'top' }
  }, 2000)
  return 1
}