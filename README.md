###用法
依赖Jquery, 导入jquery.js和 sdk.js

####startup
```javascript
var sdk = new Sdk()        //新建对象
function callback(res) {   //写一个毁掉方法
  //使用res
}
sdk.StartMonitor(callback) //开始监测
//sdk.StopMonitor()        //停止监测
```

注：见index.html
