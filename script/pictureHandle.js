$(function(){
    var _upFile=document.getElementById("pic");
    var _upFile1=document.getElementById("pic1");
    var _upFile2=document.getElementById("pic2");
    var _upFile3=document.getElementById("pic3");

    _upFile.addEventListener("change",function(){
  
    if (_upFile.files.length === 0) {  
        alert("请选择图片");  
        return; }  
    var oFile = _upFile.files[0]; 
    //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }  
  
    /*  if(oFile.size>5*1024*1024){  
     message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})  
     
     return;  
     }*/  
    if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile.type)){  
        alert("照片上传：文件类型必须是JPG、JPEG、PNG");  
        return;  
    }
  
            var reader = new FileReader();  
            reader.onload = function(e) {  
                var base64Img= e.target.result;
                //压缩前预览
                $("#preview").attr("src",base64Img);  
  
                //--执行resize。  
                var _ir=ImageResizer({  
                        resizeMode:"auto"  
                        ,dataSource:base64Img  
                        ,dataSourceType:"base64"  
                        ,maxWidth:1200 //允许的最大宽度  
                        ,maxHeight:600 //允许的最大高度。  
                        ,onTmpImgGenerate:function(img){  
  
                        }  
                        ,success:function(resizeImgBase64,canvas){
                            //压缩后预览
                            $("#nextview").attr("src",resizeImgBase64);   
                        }  
                        ,debug:true  
                });  
  
            };  
            reader.readAsDataURL(oFile);  
  
    },false);  



    _upFile1.addEventListener("change",function(){
        
          if (_upFile1.files.length === 0) {  
              alert("请选择图片");  
              return; }  
          var oFile1 = _upFile1.files[0]; 
          //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }  
        
          /*  if(oFile.size>5*1024*1024){  
           message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})  
           
           return;  
           }*/  
          if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile1.type)){  
              alert("照片上传：文件类型必须是JPG、JPEG、PNG");  
              return;  
          }
        
                  var reader = new FileReader();  
                  reader.onload = function(e) {  
                      var base64Img= e.target.result;
                      //压缩前预览
                      $("#preview1").attr("src",base64Img);  
        
                      //--执行resize。  
                      var _ir=ImageResizer({  
                              resizeMode:"auto"  
                              ,dataSource:base64Img  
                              ,dataSourceType:"base64"  
                              ,maxWidth:1200 //允许的最大宽度  
                              ,maxHeight:600 //允许的最大高度。  
                              ,onTmpImgGenerate:function(img){  
        
                              }  
                              ,success:function(resizeImgBase64,canvas){
                                  //压缩后预览
                                  $("#nextview1").attr("src",resizeImgBase64); 
      
                                  //赋值到隐藏域传给后台
                                  // $('#imgOne').val(resizeImgBase64.substr(22));
      
                                  // $('#upTo').on('click',function(){
                                  //     //alert('传给后台base64文件数据为：'+resizeImgBase64.substr(22));
                                  //     $.ajax({
                                  //         url:'server.php',
                                  //         type:'POST',
                                  //         dataType:'json',
                                  //         data:{
                                  //             imgOne:$('#imgOne').val()
                                  //         },
                                  //         success:function(data){
                                  //             alert(data.msg);
                                  //         }
                                  //     });
                                  // });
        
                              }  
                              ,debug:true  
                      });  
        
                  };  
                  reader.readAsDataURL(oFile1);  
        
          },false);
          
          

          _upFile2.addEventListener("change",function(){
            
              if (_upFile2.files.length === 0) {  
                  alert("请选择图片");  
                  return; }  
              var oFile2 = _upFile2.files[0]; 
              //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }  
            
              /*  if(oFile.size>5*1024*1024){  
               message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})  
               
               return;  
               }*/  
              if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile2.type)){  
                  alert("照片上传：文件类型必须是JPG、JPEG、PNG");  
                  return;  
              }
            
                      var reader = new FileReader();  
                      reader.onload = function(e) {  
                          var base64Img= e.target.result;
                          //压缩前预览
                          $("#preview2").attr("src",base64Img);  
            
                          //--执行resize。  
                          var _ir=ImageResizer({  
                                  resizeMode:"auto"  
                                  ,dataSource:base64Img  
                                  ,dataSourceType:"base64"  
                                  ,maxWidth:1200 //允许的最大宽度  
                                  ,maxHeight:600 //允许的最大高度。  
                                  ,onTmpImgGenerate:function(img){  
            
                                  }  
                                  ,success:function(resizeImgBase64,canvas){
                                      //压缩后预览
                                      $("#nextview2").attr("src",resizeImgBase64); 
          
                                      //赋值到隐藏域传给后台
                                      // $('#imgOne').val(resizeImgBase64.substr(22));
          
                                      // $('#upTo').on('click',function(){
                                      //     //alert('传给后台base64文件数据为：'+resizeImgBase64.substr(22));
                                      //     $.ajax({
                                      //         url:'server.php',
                                      //         type:'POST',
                                      //         dataType:'json',
                                      //         data:{
                                      //             imgOne:$('#imgOne').val()
                                      //         },
                                      //         success:function(data){
                                      //             alert(data.msg);
                                      //         }
                                      //     });
                                      // });
            
                                  }  
                                  ,debug:true  
                          });  
            
                      };  
                      reader.readAsDataURL(oFile2);  
            
              },false);  



              _upFile3.addEventListener("change",function(){
                
                  if (_upFile3.files.length === 0) {  
                      alert("请选择图片");  
                      return; }  
                  var oFile3 = _upFile3.files[0]; 
                  //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }  
                
                  /*  if(oFile.size>5*1024*1024){  
                   message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})  
                   
                   return;  
                   }*/  
                  if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile3.type)){  
                      alert("照片上传：文件类型必须是JPG、JPEG、PNG");  
                      return;  
                  }
                
                          var reader = new FileReader();  
                          reader.onload = function(e) {  
                              var base64Img= e.target.result;
                              //压缩前预览
                              $("#preview3").attr("src",base64Img);  
                
                              //--执行resize。  
                              var _ir=ImageResizer({  
                                      resizeMode:"auto"  
                                      ,dataSource:base64Img  
                                      ,dataSourceType:"base64"  
                                      ,maxWidth:1200 //允许的最大宽度  
                                      ,maxHeight:600 //允许的最大高度。  
                                      ,onTmpImgGenerate:function(img){  
                
                                      }  
                                      ,success:function(resizeImgBase64,canvas){
                                          //压缩后预览
                                          $("#nextview3").attr("src",resizeImgBase64); 
              
                                          //赋值到隐藏域传给后台
                                          // $('#imgOne').val(resizeImgBase64.substr(22));
              
                                          // $('#upTo').on('click',function(){
                                          //     //alert('传给后台base64文件数据为：'+resizeImgBase64.substr(22));
                                          //     $.ajax({
                                          //         url:'server.php',
                                          //         type:'POST',
                                          //         dataType:'json',
                                          //         data:{
                                          //             imgOne:$('#imgOne').val()
                                          //         },
                                          //         success:function(data){
                                          //             alert(data.msg);
                                          //         }
                                          //     });
                                          // });
                
                                      }  
                                      ,debug:true  
                              });  
                
                          };  
                          reader.readAsDataURL(oFile3);  
                
                  },false);  

});