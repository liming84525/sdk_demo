function Sdk() {
    this.StartMonitor = function(callback) {
        __startMonitor(callback)
    }
    this.StopMonitor = function() {
        _stopMonitor()
    }

    var i

    var oObject = null

    function __startMonitor(callback) {
        i = window.setInterval(function() {
            $.ajax({
                url: "http://cntv-front-env.cn-north-1.eb.amazonaws.com.cn/query?time=" + Math.random(),
                dataType: "json",
                timeout: 2000,
                success: function(res) {
                    var nObject = res[0]
                    if (typeof nObject !== "undefined") {
                        console.log(nObject.target.id)
                        console.log(oObject)
                    }
                    if ( typeof nObject  !==  "undefined" && (oObject == null || nObject.target.id !== oObject.target.id) ) {
                        callback(nObject)
                    }
                    oObject = nObject
                }
            })
        }, 1000)
    }

    function _stopMonitor() {
        window.clearInterval(i)
    }

}
