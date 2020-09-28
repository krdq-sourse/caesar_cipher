$("select").on("click", function () {

    $(this).parent(".select-box").toggleClass("open");

});

$(document).mouseup(function (e) {
    var container = $(".select-box");

    if (container.has(e.target).length === 0) {
        container.removeClass("open");
    }
});
var turn = $("input[type='radio']:checked").val();
var instance = new Caesar("ru");
var shift = 1;
var value = "";

$("input[type='radio']").on("change", function (){
    turn = $("input[type='radio']:checked").val();
    $("#res").text(code(value, shift));
});

$("select").on("change", function () {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
    instance = new Caesar($(this).find("option:selected").val());

    label.find(".label-desc").html(selection);

});

$("#data").keyup(function (event) {
    value = $('#data').val();
    $("#res").text(code(value, shift));
}).keydown(function (event) {
    if (event.which === 13) {
        event.preventDefault();
    }
});
$("#num").keyup(function (event) {
    shift = $('#num').val();
    $("#res").text(code(value, shift));
}).keydown(function (event) {
    if (event.which === 13) {
        event.preventDefault();
    }
}).on("change", function () {
    shift = $('#num').val();
    $("#res").text(code(value, shift));
});

function code(val, shift) {
    if (turn == "e")
        return instance.encrypt(val, Math.abs(shift));
    else
        return instance.decrypt(val, Math.abs(shift))
}
