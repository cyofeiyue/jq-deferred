/**
 * no deferred object
 */
var wait = function () {
    var tasks = function () {
        alert("done");
    };
    setTimeout(tasks(),5000);
}

$(function () {
    var dtd = $.Deferred();// new a deferred object
    /**
     *wait function returns a deferred object
     */
    var waitWithDeferredObject = function (dtd) {
        var tasks = function () {
            alert("done");
            //change statsu to resolve
            dtd.resolve()
            //dtd.reject()
        }
        setTimeout(tasks,5000);
        return dtd;
    };

    var waitWithDeferredObjectPromise = function (dtd) {
        var tasks = function () {
            alert("done");
            //change statsu to resolve
            dtd.resolve()
            //dtd.reject()
        }
        setTimeout(tasks,5000);
        return dtd.promise();//return a promise object
    };

    var d = waitWithDeferredObjectPromise(dtd);

    $.when(d)
     .done(function(){ alert("哈哈，成功了！"); })
     .fail(function(){ alert("出错啦！"); });

    d.resolve(); // 此时，这个语句是无效的

})