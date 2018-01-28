 var baseUrl = '/apis';
//点击汽车图片跳转到汽车详情 
            // $(".car_item_img img").each(
            //     function(){
            //         var _this = $(this);
            //         console.log(_this.attr("id"));
            //         $("body").on('click','.car_item_img img',function(){    
            //             // window.location.href = "./carInfo.html?id="+_this.attr("id");
            //         })
            //     }
            // )
            $("body").on('click','.car_item_img img',function(){ 
                var _this = $(this);
                console.log(_this.attr("id"));
                window.location.href = "./carInfo.html?id="+_this.attr("id");
            })  
                
//初始化首页
            $(document).ready(function(){
                $.ajax({
                    url:baseUrl+'/SecondCar/admin/tg_carSelectAllAction',
                    type:'post',
                    dataType:'json',
                    success:function(data){
                        console.log(data);
                        data.car.forEach(function(item,index) {
                            console.log(item)
                            $("#car").append(`
                                <div class="car_item col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                    <div class="car_item_img">
                                        <img src=${item.pic} class="car_item_img_img" id="${item.cid}">
                                    </div>    
                                    <div class="car_item_type">
                                        <div class="car_item_type_name">${item.brand}</div>    
                                        <div class="car_item_type_time">
                                            <span>年份：</span>
                                            <span>${item.year}</span>
                                        </div>
                                        <div class="car_item_type_price">
                                            <span>价格：</span>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>    
                                    <div class="car_item_intro">
                                        <p>${item.info}</p>    
                                    </div>
                                </div>      
                            `)
                        })
                    },
                    error:function(error){
                        alert("网络请求错误");                                
                    }
                })
            })