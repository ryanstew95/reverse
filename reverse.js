var input = process.argv[2];

if (input)
  console.log(reverse(input));

  
var reverse = function(original) {
  return original.split('').reverseList().join('');
};
