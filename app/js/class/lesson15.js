//异步编程的解决方案
{
  // genertaor基本定义——遍历器生成函数
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

//状态机
{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

//async 是generator的语法糖
// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }
//

//次数没有保存到全局变量中
{
  let draw=function(count){
    //具体抽奖逻辑
    console.info(`剩余${count}次`)
  }

  let residue=function* (count){
    while (count>0) {
      count--;
      yield draw(count);
    }
  }

  let star=residue(5);
  let btn=document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    star.next();
  },false)
}

{
  // 长轮询

  //接口的模拟
  let ajax=function* (){
    yield new Promise(function(resolve,reject){
      //用真实接口代码代替setTimeOut就可以用了
      setTimeout(function () {
        resolve({code:0})
      }, 200);
    })
  }

  let pull=function(){
    //genertaor实例化
    let genertaor=ajax();
    let step=genertaor.next();
    step.value.then(function(d){
      if(d.code!=0){
        setTimeout(function () {
          console.info('wait');
          pull()
        }, 1000);
      }else{
        console.info(d);
      }
    })
  }

  pull();
}
