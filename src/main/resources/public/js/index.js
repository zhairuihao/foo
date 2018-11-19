APP = {
    v:"1.0"
}
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