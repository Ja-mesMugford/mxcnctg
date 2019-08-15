exports.a = 'A';
exports.b = 'B';

module.exports.greet = function (name) {
    console.log(`Hi ${name}!`);
  }
  
  module.exports.farewell = function() {
    console.log('Bye!');
  }

  

console.log(module);

