console.log('before')
getUser(1, (user) => {
  getAfterUser(user.name, (after) => {
    console.log('after user', after)
    // callback hell
  })
})
console.log('after')

function getUser(id, callback) {
  setTimeout(() => { // setTimeout if async func
    console.log('wait database 2 sec')
    callback({ id: id, name: 'top' })
  }, 2000)
}

function getAfterUser(user, callback) {
  setTimeout(() => { // setTimeout if async func
    console.log('after call user', user)
    callback(['after1', 'after2', 'after3'])
  }, 2000)
}