
$(function () {
    var wait = function () {
        var dtd = $.Deferred();
        var tasks = function () {
            alert("done")
            dtd.resolve()
        };
        setTimeout(tasks,5000);
        return dtd.promise()
    }

    $.when(wait())
        .done(function(){ alert("哈哈，成功了！"); })
        .fail(function(){ alert("出错啦！"); });
})