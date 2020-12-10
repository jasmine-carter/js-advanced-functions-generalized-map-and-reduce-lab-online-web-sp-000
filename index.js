// Add your functions here
 function map(source, callback) {
   let r = []
   for (let i = 0; i < source.length; i ++) {
     let el = source[i]
     r.push(callback(el))
   }
   return r
 }

function reduce(source, callback, sv=0) {
  let r = source
  let sp = sv
  for (let i=0; i < source.length; i++) {
    let el = source[i]
      callback(el)
  }
  return callback(el)
}
