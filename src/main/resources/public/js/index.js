
/************************************************************/
APP = {
    v: "1.0",
    user: {}
}
APP.BASE_URL = "https://hongquback.saylooks.com/"
/**
 * 统一获取表单的内容，表单元素必须有name属性
 * @param $form （form的jquery对象）
 */
APP.getFormData = function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
};
/************************************************************/





/****************************************************************/
$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
    });
});

$(document).ajaxSend(function (event, request, settings) {
})

$(document).ajaxError(function (event, request, settings) {
    var res = request.responseText;
    try {
        res = res ? JSON.parse(res) : '';
    } catch (e) {
        // console.error(e)
        return
    }
    console.log(res)
})

$(document).ajaxSuccess(function (event, request, settings) {

})
/****************************************************************/
