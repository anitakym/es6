//作用域：ES5: 全局，函数; ES6: +块
// {} 里面就是一个块
// ES6 强制开启严格模式（变量未声明，不得引用）

/*function test() {
  for (let i = 1; i < 3; i++) {
    console.log(i)
  }
  console.log(i)
}*/

//Uncaught Error: Module build failed: Duplicate declaration "a"
/*function test() {
  let a = 1;
  let a = 2;
}*/

//Uncaught Error: Module build failed: SyntaxError: "PI" is read-only
//const 声明时必须赋值， unexpected token
//对象是引用类型，存储的是指针，指针没有变
/*function test() {
  const PI = 3.14;
  PI = 3.145;
}*/

test();