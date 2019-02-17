var registerurl="http://localhost:8080/user/register"

$("#register-button").click(function () {
    if ($("#firstname").val()=="") {
        $("#firstname").focus();
        alert("请输入你的昵称！")
    }
    else if($("#email").val()==""){
        $("#email").focus();
        alert("请输入正确的帐号！");
    }
    else if($("#password").val()==""){
        $("#password").focus();
        alert("你还没有输入密码！");
    }
    else if ($("#city").val()=="") {
        $("#city").focus();
        alert("请输入你所在的地区！");
    }
    else {
        var firstname = $("#firstname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var sex;
        if ($("#man").val() == "男"){
            sex = $("#man").val();
        } else {
            sex = $("#woman").val();
        }
        var city = $("#city").val();

        var user = {
            userName:firstname,
            userEmail:email,
            userPassword:password,
            userSex:sex,
            userCity:city
        }
        $.ajax({
            type: 'POST',
            url: registerurl,
            data: JSON.stringify(user),
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            contentType:'application/json;charset=UTF-8',
            success: function(data){
                if(data.message == "注册成功"){
                    window.location = "newsfeed-videos.html" ;
                }
                else{
                    alert(data.message);
                };
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
        });
    }

});