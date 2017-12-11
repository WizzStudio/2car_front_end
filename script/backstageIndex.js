var baseUrl = '/apis'
//后台首页加载数据
$(document).ready(function(){
    $.ajax({
        url:baseUrl+'/SecondCar/admin/tg_carSelectAllAction',
        type:'post',
        dataType:'json',
        success:function(data){
            data.car.forEach(function(item,index){
                $("tbody").append(`
                    <tr>
                        <td id = '${item.cid}'>${item.brand}</td>
                        <td>${item.price}</td>
                        <td>${item.year}</td>
                        <td><button class="btn btn-warning">删除</button></td>                                                      
                        <td><button class="btn btn-primary">编辑</button></td>
                    </tr>  
                `)
            })
            
        },
        error:function(error){
            alert("网络请求错误");
        }
    })
})
//编辑某个车辆
$("body").on('click','.btn-primary',function(){
    var _this = $(this);
    var id = _this.parent().parent().find("td:eq(0)").attr("id");
    console.log(id);
    window.location.href = '../backstageWrite.html'+"?id="+id;
})
//删除某个车辆