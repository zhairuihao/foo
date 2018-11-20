function login() {
    var form = APP.getFormData($('form'))
    var option = {
        url: APP.BASE_URL + "PanoramaHouse/user/userlogin",
        // dataType:"json",
        contentType: "application/json",
        data: JSON.stringify(form),
        type: "POST",
        processData: false
    }
    var jqr = $.ajax(option)
    jqr.done(function (res) {
        console.log(res)
        $('.tip').text(res.msg)
        if (res.success) {
            APP.user.user_type = res.user_type
        }else {

        }
    })
}
