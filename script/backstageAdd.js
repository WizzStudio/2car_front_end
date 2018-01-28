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
    // var file = $("#nextview").attr("src");    
    // var file1 = $("#nextview1").attr("src");  
    // var file2 = $("#nextview2").attr("src");    
    // var file3 = $("#nextview3").attr("src");
    var formData = new FormData();
    formData.append('brand', name);
    formData.append('price', price);
    formData.append('year',time);
    formData.append('info', intro);
    // formData.append("file",convertBase64UrlToBlob(file), Date.now()+ '.jpg');
    // formData.append("file1",convertBase64UrlToBlob(file1), Date.now()+ '.jpg');
    // formData.append("file2",convertBase64UrlToBlob(file2), Date.now()+ '.jpg');
    // formData.append("file3",convertBase64UrlToBlob(file3), Date.now()+ '.jpg');
    formData.append('file', file);
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('file3', file3);
    console.log(file);
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
            alert("网络请求错误");     
        }
    })
})
// function convertBase64UrlToBlob(urlData){  
    
//   var bytes=window.atob(urlData.indexOf(',') + 1);        //去掉url的头，并转换为byte  
    
//   //处理异常,将ascii码小于0的转换为大于0  
//   var ab = new ArrayBuffer(bytes.length);  
//   var ia = new Uint8Array(ab);  
//   for (var i = 0; i < bytes.length; i++) {  
//       ia[i] = bytes.charCodeAt(i);  
//   }  

//   return new Blob( [ab] , {type : 'image/jpeg'});  
// }  