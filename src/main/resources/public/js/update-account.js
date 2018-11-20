(function () {
    function update() {
        var form = APP.getFormData($('form'))
        var option = {
            url: APP.BASE_URL + "PanoramaHouse/user/updateUser",
            // dataType:"json",
            contentType: "application/json",
            data: JSON.stringify(form),
            type: "POST",
            processData: false
        }
        var jqr = $.ajax(option)
        jqr.done(function (res) {
            console.log(res)
           alert(res.msg)
            if (res.success) {
                // APP.user.user_type = res.user_type
            } else {

            }
        })
    }
    debugger
    $('#btnSubmit').on('click', update)
})()
