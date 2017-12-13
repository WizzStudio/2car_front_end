 var baseUrl = '/apis'
//添加车辆信息
 $("#submit2").click(function(){
    var name = $("#name").val();
    var price = $("#price").val();
    var time = $("#time").val();
    var intro = $("#intro").val();
    var file = $("#pic").val();    
    var file1 = $("#pic1").val();    
    var file2 = $("#pic2").val();    
    var file3 = $("#pic3").val();
    var data = {
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
        url:baseUrl + '/SecondCar/admin/tg_carAddAction',
        type:'post',
        data:data,
        contentType:"multipart/form-data",
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