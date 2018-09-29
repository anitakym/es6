//字符串新增的有几个方法是es7提案里面的，所以要安装补丁，不然编译没有办法通过，babel-polyfill
//每两个字节算一个长度
//0xFFF
{
  console.log('a',`\u0061`)
  console.log('s',`\u20BB7`)
  console.log('s',`\u{20BB7}`)

  
}
{
  let s = '𠮷'
  console.log('length',s.length)
  console.log(s.charAt(0));
  console.log(s.charAt(1));
  console.log(s.charCodeAt(0))
  console.log(s.charCodeAt(1))

  let s1 = "𠮷a"
  console.log(s1.codePointAt(0))
  console.log(s1.codePointAt(0).toString(16))
  console.log(s1.codePointAt(1))
  console.log(s1.codePointAt(2))
}

{
  console.log(String.fromCharCode('0x20bb7'))
  console.log(String.fromCodePoint('0x20bb7'))
}

{
  let str = '\u{20bb7}abc';
  for(let i=0; i < str.length;i++){
    console.log('es5', str[i])
  }
  for (let code of str) {
    console.log('es6',code)
  }
}

{
  let str = "string";
  console.log("includes",str.includes("c"))
  console.log("start",str.startsWith("str"))
  console.log("start",str.endsWith("str"))
}

{
  let str = "abc";
  console.log(str.repeat(2))
}

{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m)
}

{
  console.log("1".padStart(2,'0'))
  console.log("1".padEnd(2,'0'))
}
//标签模版
//1.过滤html字符串2.处理多语言转换
{
  let user = {
    name:'list',
    info:'hello world'
  };
  abc`i am ${user.name},${user.info}`;
  function abc(s,v1,v2) {
    console.log(s,v1,v2)
    return s+v1+v2;
  }
}

{
  console.log(String.raw`Hi\n${1+2}`)
  console.log(`Hi\n${1+2}`)
}