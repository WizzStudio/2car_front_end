var baseUrl = '/apis'
//渲染页面
$(document).ready(function(){
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    var id = getUrlParam("id");
    console.log("当前车辆id为："+id);

    $.ajax({
        url:baseUrl+'/SecondCar/admin/tg_carSelectByIdAction',
        type:'post',
        data:{
           id:id
        },
        dataType:'json',
        success:function(data){
            console.log(data);
            $("#name").val(data.car.tg_car.brand);
            $("#price").val(data.car.tg_car.price);
            $("#time").val(data.car.tg_car.year);
            $("#intro").val(data.car.tg_car.info);
            $("#file").attr("src",data.car.urls[0]);
            $("#file1").attr("src",data.car.urls[1]);
            $("#file2").attr("src",data.car.urls[2]);
            $("#file3").attr("src",data.car.urls[3]);
        },
        error:function(error){
            alert("网络请求错误");                                
        }
   })
//修改信息
    $("#change").click(function(){
        var name = $("#name").val();
        var price = $("#price").val();
        var time = $("#time").val();
        var intro = $("#intro").val();
        var file = $("#pic")[0].files[0];    
        var file1 = $("#pic1")[0].files[0];  
        var file2 = $("#pic2")[0].files[0];    
        var file3 = $("#pic3")[0].files[0];
        var formData = new FormData();
        formData.append('brand', name);
        formData.append('id', id);
        formData.append('price', price);
        formData.append('year',time);
        formData.append('info', intro);
        formData.append('pic', file);
        formData.append('pic1', file1);
        formData.append('pic2', file2);
        formData.append('pic3', file3);
        $.ajax({
            url:baseUrl + '/SecondCar/admin/tg_carUpdateAllAction',
            type:'post',
            data:formData,
            contentType: false,
            processData: false,
            dataType:'json',
            success:function(data){
                console.log(data);
                if(data.code == 1){
                    alert(data.msg);                                     
                    window.location.href="./backstageIndex.html"; 
                    return false;
                }else{
                    alert(data.msg);                                                                         
                }
                
            },
            error:function(error){
                alert("网络请求错误了啊");     
            }
        })
    })
//删除图片并添加新图
$(".delete").each(function(){
    var _this = $(this);
    _this.click(function(){
        _this.prev().remove();
        _this.next().css("display","block");
    })
})    
})