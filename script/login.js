var baseUrl = '/apis'; 
$("#submit").click(function(){
    console.log("aa");
                    var username = $("#username").val();
                    var password = $("#password").val();
                    if(username == '' || password == ''){
                        alert("请输入账号密码");
                    }else{
                        $.ajax({
                            url:'',
                            type:'post',
                            data:{
                                username:username,
                                password:password
                            },
                            dataType:'json',
                            success:function(data){
                                alert(data.msg);                                     
                                 window.location.href="./backstageIndex.html"; 
                                 return false;
                            },
                            error:function(error){
                                alert(error.msg);     
                            }
                        })
                    }
                });