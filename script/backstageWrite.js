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
            $("#name").val(data.car.brand);
            $("#price").val(data.car.price);
            $("#time").val(data.car.year);
            $("#intro").val(data.car.info);
            $("#file").attr("src",data.car.pic)
            $("#file1").attr("src",data.car.pic)
            $("#file2").attr("src",data.car.pic)
            $("#file3").attr("src",data.car.pic)
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
        var file = $("#pic1").val();    
        var file1 = $("#pic2").val();    
        var file2 = $("#pic3").val();    
        var file3 = $("#pic4").val();
        var data = {
            id:id,
            brand:name,
            price:price,
            year:time,
            info:intro,
            file:file,
            file1:file1,
            file2:file2,
            file3:file3
        };
        console.log(data); 
        $.ajax({
            url:baseUrl + '/SecondCar/admin/tg_carUpdateAllAction',
            type:'post',
            data:data,
            dataType:'json',
            success:function(data){
                console.log("cheng");
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
    })
})