var baseUrl = '/apis';
console.log(baseUrl); 
$("#submit").click(function(){
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
                                 window.location.href="./manage.html"; 
                                 return false;
                            },
                            error:function(error){
                                alert(error.msg);                                
                            }
                        })
                    }
                });