 var baseUrl = '/apis'
//添加车辆信息
 $("#submit2").click(function(){
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
    formData.append('price', price);
    formData.append('year',time);
    formData.append('info', intro);
    formData.append('file', file);
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('file3', file3);
    console.log(formData);
    $.ajax({
        url:baseUrl + '/SecondCar/admin/tg_carAddAction',
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