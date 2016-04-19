function Sdk() {
    this.StartMonitor = function(callback) {
        _startMonitor(callback)
    }
    this.StopMonitor = function() {
        _stopMonitor()
    }

   function _query() {
        var result
        $.ajax({
            url: "http://btv.tvkou.com:8888/query",
            dataType: "json",
            timeout: 2000,
            success: function(res) {
                result = res
            }
        })
        return result
    }

    var i
    function _startMonitor(callback) {
        i = window.setInterval(function() {
            callback(_query())
        }, 1000)
    }

    function _stopMonitor() {
        window.clearInterval(i)
    }

}
