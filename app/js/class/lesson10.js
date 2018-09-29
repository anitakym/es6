//数组本身也可以看成一种集合，set中集合元素不能重复
//优先使用map,如果要求保证唯一性，考虑set,放弃array 和 obj
{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size)
}

{
  let arr = [1,2,3,4,5];
  let list = new Set[arr];
  console.log('size',list.size)
}

//去重
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1)
  console.log(list)
  let arr = [1,2,3,1,2]
  let list2 = new Set(arr);
  console.log(list2)
}

{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);
  console.log('has',list.has('add'))
  console.log('delete',list.delete('add'),list)
  list.clear()
  console.log(list)
}

{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);
  for (let key of list.keys()) {
    console.log(key)
  }
  for (let value of list.values()) {
    console.log(value)
  }
  for (let value of list) {
    console.log(value)
  }
  for (let [key,value] of list.entries()) {
    console.log(key,value)
  }

  list.forEach(function(item){console.log(item)})
}

{
  let weakList = new WeakSet();
  let arg = {};
  weakList.add(arg);
  weakList.add(2);
  console.log(weakList)
}

{
  let map = new Map()
  let arr = [1,2,3]
  map.set(arr, 456);
  console.log('map', map,map.get(arr))
}

{
  let map = new Map([['a',123],['b',456]])
  console.log(map)
  console.log(map.size)
  console.log(map.delete('a'),map)
  console.log(map.clear(),map)
}

{
  //key必须是对象
  let weakmap = new WeakMap();
  let o = {};
  weakmap.set(o,123);
  console.log(weakmap.get(o))
}

{
  //数据结构横向对比：增，查，改，删
  let map = new Map();
  let array = [];
  //增
  map.set('t',1);
  array.push({t:1});

  console.info('map-array', map,array)
  //查
  let map_exist = map.has('t');
  let array_exist = array.find(item=>item.t)

  //改
  map.set('t',2)
  array.forEach(item=>item.t?item.t=2:'')

  //删
  map.delete('t')
  let index = array.findIndex(item=>item.t)
  array.splice(index,1)
}

{
  //set和Array的对比
  let set = new Set();
  let array = [];

  set.add({t:1})
  array.push({t:1})

  let set_exist = set.has({t:1})
  let array_exist = array.find(item=>item.t)

  set.forEach(item=>item.t?item.t=2:'')
  array.forEach(item=>item.t?item.t=2:'')

  set.forEach(item=>item.t?set.delete(item):'')
  let index = array.findIndex(item=>item.t)
}

{
  let item = {t:1};
  let map = new Map();
  let set = new Set();
  let obj = {};
  //增
  map.set('t',1)
  set.add(item)
  obj['t']=1

  map.has('t')
  set.has(item)
  't' in obj

  map.set('t',2)
  item.t =2
  obj['t'] = 2

  map.delete('t')
  map.delete(item)
  delete obj['t']
}