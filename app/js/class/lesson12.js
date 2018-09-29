{
  //基本定义和生成实例
  //ES5中，如果通过this来写，就可以生成一个类和实例
  class Parent {
    constructor(name='mukewang') {
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数和实例',v_parent)
}

{
  //继承
  class Parent {
    constructor(name='mukewang') {
      this.name = name;
    }    
  }
  class Child extends Parent {


  }
  console.log(new Child())

}

{
  //继承传递参数
  class Parent {
    constructor(name='mukewang') {
      this.name = name;
    }    
  }
  class Child extends Parent {
    constructor(name='child'){
      super(name);
      this.type = 'child';
    }

  }
  console.log(new Child())
  console.log(new Parent())

}

{
  //getter setter
  class Parent {
    constructor(name='mukewang') {
      this.name = name;
    }

    //这里是属性，不是函数
    get longName() {
      return 'mk'+this.name
    }    
    set longName(value) {
      this.name = value
    }
  }

  let v= new Parent();
  console.log('getter',v.longName)
  v.longName = 'hello'
  console.log('setter',v.longName)
}

{
  //静态方法,用类去调用，而不是用类的实例去调用
  class Parent {
    constructor(name='mukewang') {
      this.name = name;
    }  
    static tell() {
      console.log('tell')
    }  
  }
  Parent.tell();

}

{
  //静态属性
  class Parent {
    constructor(name='mukewang') {
      this.name = name;
    }  
    static tell() {
      console.log('tell')
    }

  }

  Parent.type = 'test';

  console.log(Parent.type)
}