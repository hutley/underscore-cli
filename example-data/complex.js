module.exports = { 
  // Primatives
  num: 9,
  bool: true,
  str1: 'Hello World',

  // Objects
  object0: {},
  object1: {'a': 1, 'b': 2}, 

  // Arrays
  array0: [],
  array1: [1, 2, 3, 4],
  array2: [1, 2, null, undefined,, 6],
  
  // Date Objects
  date1: new Date(1340920945993),
  date2: withProps(new Date(1340920945993)),

  // Error Objects
  err1: (new Error('my err msg')),
  err2: withProps(new Error('my err msg')),

  // RegExp Objects
  regex1: /^78/,
  regex2: withProps(/^78/),
  
  // Functions
  fn1: function () { },
  fn2: function fn_name (a, b, c) { return 4; },
  fn3: withProps(function fn_name(a,b,c){return 4;}),
  fn4: withProps(new Function(['a', 'b', 'c'], 'return a+b+c')),

  null1: null,
  undef1: undefined,

  deep: {a: [ {
    longstr: 'This really long string will force the object containing it to line-wrap.  Underscore-cli is smart about whitespace and only wraps when needed!',
    b: {c: {}}
  }]
  , g: {
    longstr: 'This really long string will force the object containing it to line-wrap.  Underscore-cli is smart about whitespace and only wraps when needed!',
  }},

};

function withProps(obj) {
  obj[3] = 'three';
  obj['prop1'] = 1;
  obj['prop2'] = 2;
  return obj;
}
