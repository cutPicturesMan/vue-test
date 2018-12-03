/**
 * Created by zhangzhen11 on 2018/11/6.
 */
let uid = 0;

export default class Dep{
  constructor(){
    this.id = uid++;
  }

  log(){
    console.log(this.id);
    console.warn(this.target);
  }
}

Dep.target = uid;
console.log('加载test');
