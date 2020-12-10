// Add your functions here
 function map(source, callback) {
   let r = []
   for (let i = 0; i < source.length; i ++) {
     let el = source[i]
     r.push(callback(r))
   }
   return r
 }
