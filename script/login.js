var baseUrl = '/apis'; 
$("#submit").click(function(){
    console.log("aa");
    var username = $("#username").val();
    var password = $("#password").val();
    if(username == '' || password == ''){
        alert("请输入账号密码");
    }else{
        $.ajax({
            url:baseUrl+'/SecondCar/tg_managerAction.action',
            type:'post',
            data:{
                username:username,
                password:password
            },
            dataType:'json',
            success:function(data){
                if(data.code == 1){
                    alert(data.msg);                                     
                    window.location.href="./backstageIndex.html"; 
                    return false;
                }else{
                    alert(data.msg);                                                                         
                }
                
            },
            error:function(error){
                alert("网络请求错误");     
            }
        })
    }
});