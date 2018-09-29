//解构赋值
//数组机构赋值----start
//可以在控制台点开后面的代码位置，看看编译后的是什么样子
{
  let a,b,rest;
  [a,b] = [1,2];
  console.log(a,b)
}

{
  let a,b,rest;
  [a,b,...rest] = [1,2,3,4,5,6];
  console.log(a,b,rest)
}

{
  let a,b;
  ({a,b}={a:1,b:2});
  console.log(a,b)
}

//默认值，防止没有配对成功的情况
{
  let a,b,c,rest;
  [a,b,c=3] = [1,2];
  console.log(a,b,c)
}

//特别适用于变量交换
{
  let a = 1;
  let b = 2;
  [a,b] = [b,a];
  console.log(a,b)
}

{
  function f() {
    return [1, 2]
  }
  let a,b;
  [a,b] = f();
  console.log(a,b);
}

{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b] = f();
  console.log(a,b);
}

//不知道返回数组长度的情况下，取出第一个元素，后面的放数组，想用可以遍历
{
  function f() {
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,...b] = f();
  console.log(a,b);
}

//数组解构赋值----end

//对象
{
  let o = {p:42,q:true};
  let {p,q} = o;
  console.log(p,q)
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b)
}

{
  let metaData = {
    title: 'abc',
    test:[{
      title: 'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle)
}