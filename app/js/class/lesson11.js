//proxy和reflect 的方法是一样的
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };
  let monitor = new Proxy(obj, {
    //拦截对象属性的读取
    get(target,key) {
      return target[key].replace('2017','2018')
    },
    //拦截对象设置属性
    set(target,key,value){
      if (key === name) {
        return target[key]=value
      }else{
        return target[key];
      }
    },
    //拦截key in object操作
    has(target,key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false;
      }
    },
    //拦截delete
    deleteProperty(target, key){
      if(key.indexOf('_')>0){
        delete target[key];
        return true
      } else {
        return target[key]
      }
    },
    //拦截Obejct.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item=>item!='time')
    }
  })

  /*console.log(monitor.time)
  monitor.time = '2018'
  console.log(monitor.time)
  console.log('name' in monitor,'time' in monitor)
  delete monitor.time*/

  console.log('ownKeys',Object.keys(monitor))
}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };
  Reflect.get(obj,'time')
  Reflect.set(obj,'name','mukewang')
  Reflect.has(obj,'name');
}

{
  //数据类型校验
  //实现和业务解耦的校验模块
  function validator(target, validator) {
    return new Proxy(target,{
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)){
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }
  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this,personValidators)
    }
  }

  const person = new Person('lilei', 30)
  console.info(person)

  person.name = 48;
}