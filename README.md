#用法
依赖Jquery, 导入jquery.js和 sdk.js

1. 新建对象
var sdk = new Sdk()

2. 写一个回调函数
function callback(res) {
  //使用res
}

3. 开始监测数据
sdk.StartMonitor(callback)

4. 停止监测数据
sdk.StopMonitor()

注：见index.html
