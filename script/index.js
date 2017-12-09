 var baseUrl = '/apis';
//点击汽车图片跳转到汽车详情 
            $(".car_item_img img").each(
                function(){
                    var _this = $(this);
                    _this.click(function(){
                        console.log(_this.attr("id"));
                        window.location.href = "./carInfo.html?id="+_this.attr("id");
                    })
                    
                }
            )
//初始化首页
            $(document).ready(function(){
                $.ajax({
                    url:'',
                    type:'get',
                    dataType:'json',
                    success:function(data){
                        data.msg.forEach(function(item,index) {
                            
                        })
                    },
                    error:function(error){
                        alert(error.msg);                                
                    }
                })
            })