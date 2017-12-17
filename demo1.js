/**
 * old writing code style
 */
function oldAjaxCodingStyle() {
    $.ajax({
        url: "mockdata/demo1.json",
        success: function () {
            alert("success");
        },
        error: function () {
            alert("failure");
        }
    })
}

/**
 * new writing code style
 * multi chain callback
 */
function newAjaxCodingStyle() {
    $.ajax("mockdata/demo1.json")
        .done(function () {alert("success1");})
        .done(function () {alert("success2");})
        .fail(function () { alert("failure");})
}

function mutiAjaxCall() {
    $.when(
        $.ajax("mockdata/demo1.json"),
        $.ajax("mockdata/demo2.json"))
        .done(function () {alert("success");})
        .fail(function () {alert("failure");})
}

$(function () {
    //oldAjaxCodingStyle();
    //newAjaxCodingStyle()
    mutiAjaxCall()
})