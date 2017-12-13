var baseUrl = '/apis';
//根据路由参数显示信息
        $(document).ready(function(){
            function getUrlParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                if (r != null) return unescape(r[2]); return null; //返回参数值
            }
            var id = getUrlParam("id");
            console.log("当前页面id为："+id);
//后端拿数据
            $.ajax({
                url:baseUrl+'/SecondCar/admin/tg_carSelectByIdAction',
                type:'post',
                data:{
                   id:id
                },
                dataType:'json',
                success:function(data){
                    console.log(data);
                    $("#carInfo").html(`
                        <div class="car_item_img">
                            <img src="${data.car.pic0}"+'_0' class="car_item_img_img" id="bigImg">
                        </div>
                        <div class="car_item_small_img row">
                            <div class="box col-lg-3 col-md-3 col-sm-3 col-xs-3"><img src="${data.car.pic0}" class="car_item_small_img_img "></div>
                            <div class="box col-lg-3 col-md-3 col-sm-3 col-xs-3"><img src="${data.car.pic1}" class="car_item_small_img_img "></div>
                            <div class="box col-lg-3 col-md-3 col-sm-3 col-xs-3"><img src="${data.car.pic2}" class="car_item_small_img_img "></div>
                            <div class="box col-lg-3 col-md-3 col-sm-3 col-xs-3"><img src="${data.car.pic3}" class="car_item_small_img_img "></div>                  
                        </div>    
                        <div class="car_item_type">
                            <span class="car_item_type_name">${data.car.brand}</span>    
                            <span class="car_item_type_time">
                                <span>年份：</span>
                                <span>${data.car.year}</span>
                            </span>
                                <span class="car_item_type_price">
                                <span>价格：</span>
                                <span>${data.car.price}</span>
                            </span>
                        </div>    
                        <div class="car_item_intro">
                            <p>${data.car.info}</p>    
                        </div>
                    `)
                },
                error:function(error){
                    alert("网络请求错误");                                
                }
           })
        })
//小图变大图
        $(".car_item_small_img_img").each(function(){
            var src = $(this).attr("src");
            $(this).click(function(){
                $("#bigImg").attr("src",src);
            })
        })