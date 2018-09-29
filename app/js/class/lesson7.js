/*ES5:this 指向:函数被调用时的对象所在
ES6:this 指向:定义时的对象所在*/


//默认值后面不能有没有赋默认值的变量
{
  function test (x, y='world') {
    console.log(x,y)
  }
  test('hello')
  test('hello','kill')
}

{
  let x = 'test';
  function test2(x, y=x){
    console.log('作用域',x,y)
  }
  test2('kill')
  test2()
}

{
  function test3(...arg){
    for (let v of arg) {
      console.log('rest',v)
    }
  }
  test3(1,2,3,"a");
}

{
  console.log(...[1,2,4]);
  console.log("a",...[1,2,4]);
}

{
  let arrow = v => v*2
  let arrow2 = () => 5;
  console.log('arrow',arrow(3))
  console.log(arrow2)
}

//尾调用，提升性能
{
  function tail(){
    console.log('tail', x)
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}