var controlbtn = document.getElementsByClassName("control");
var cmp1=document.getElementById("comp1");
var cmp2=document.getElementById("comp2");
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var regForm=document.getElementById("regForm");


if(controlbtn.value=="Next"){
    console.log(1);
}
var ctn=1;
if(ctn==1){
    $(".control").click(function(){
        ctn++;
        console.log(ctn);
        $("#comp1").fadeOut(1000,function(){
            $(".control").text("One Last Step");
            $("#comp2").fadeIn(1000);
            $("#comp2").css("display","block");
            $("#comp1").css("display","none");
            $("#comp3").css("display","none");
            });

          $(".control").click(function(){
                $("#comp2").fadeOut(1000,function(){
                    $(".control").text("submit the form");
                    $("#comp3").fadeIn(1000);
                });  

                $(".control").click(function(){
                    modal.style.display = "block";

                    
                });

                $(".close").click(function(){
                    modal.style.display = "none";
                });
          });
    });
}











