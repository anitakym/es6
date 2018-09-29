//数值拓展
{
  console.log(0b111110111)
  console.log(0o767)
}

{
  console.log('15',Number.isFinite(15))
  console.log('NaN',Number.isFinite(NaN))
  console.log('1/0',Number.isFinite('true'/0))
  console.log(Number.isNaN(NaN))

}

{
  //接受的参数必须是一个数
  console.log(Number.isInteger(25))
  console.log(Number.isInteger(25.0))
  console.log(Number.isInteger(25.1))
  console.log(Number.isInteger('25.1'))
  console.log(Number.isInteger('25'))
}

{
  //-2^53~2^53
  //接受的参数必须是一个数
  console.log(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  console.log(Number.isSafeInteger(10));
  console.log(Number.isSafeInteger('a'));
}
{
  console.log(Math.trunc(4.1))
  console.log(Math.trunc(4.9))
}
{
  //接受的参数不一定是数，‘50’可以，'foo'是NaN
  console.log(Math.sign(5))
  console.log(Math.sign(-5))
  console.log(Math.sign(0))
}

{
  //立方根
  console.log(Math.cbrt(-1))
}

//三角函数，对数