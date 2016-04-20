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
                url: "http://cntv.tvkou.com:8888/query?time=" + Math.random(),
                dataType: "json",
                timeout: 2000,
                success: function(res) {
                    var nObject = res[0]
                    console.log(nObject.target.id)
                    console.log(oObject)
                    if (oObject == null || nObject.target.id !== oObject.target.id) { // typeof nObject.target.id !== "undefined"
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
