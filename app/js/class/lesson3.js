//正则扩展
//构造函数
{
  let regex = new RegExp('xyz','i');
  let regex2 = new RegExp(/xyz/i);
  let regex3 = new RegExp(/xyz/ig,'i');
  console.log(regex.test('xyz123'),regex2.test('xyz123'),regex3.flags)
}
//修饰符
//y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
{
  let s='bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log('one',a1.exec(s),a2.exec(s))
  console.log('two',a1.exec(s),a2.exec(s))

  console.log(a1.sticky, a2.sticky);
}

//unicode
{
  console.log('u1',/^\uD83D/.test('\uD83D\uDC2A'))
  console.log('u2',/^\uD83D/u.test('\uD83D\uDC2A'))

  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));

  //大于两个字节的
  console.log(`\u{20BB7}`);

  //.匹配小于2个字节的字符，且还有四个符号不能识别：换行，回车，行分隔，段分隔——s修饰符
  let s = '𠮷'
  console.log('u',/^.$/.test(s));
  console.log('u-2',/^.$/u.test(s));
  console.log('test',/𠮷{2}/.test('𠮷𠮷'))
  console.log('test',/𠮷{2}/u.test('𠮷𠮷'))
}