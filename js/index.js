$(document).ready(function () {

   var work= $("#work");
   var worksec= $("#workmin");
   var breaktime= $("#break");
   var add5= $("#add5");
   var sub5= $("#sub5");
   var Badd5= $("#Badd5");
   var Bsub5= $("#Bsub5");
   var start= $("#start");
   var reset=$("#reset");
   $("#resetdiv,#progressdiv").hide();
   var count =25;
   var timerC;
   var Bcount=5;
   var status=false;
   var pauseStatus= false;
   var buzzer = document.getElementById("sound");

    add5.click(function(){
        count+=1;
        count2 = ("0" + count).slice(-2);
        work.html(count2);
    });

    sub5.click(function(){
        if(count >1){
            count-=1;
            count2 = ("0" + count).slice(-2);
            work.html(count2);
        }
    });
    Badd5.click(function(){
        Bcount+=1;
        Bcount2 = ("0" + Bcount).slice(-2);
        breaktime.html(Bcount2);
    });

    Bsub5.click(function(){
        if(Bcount >1){
            Bcount-=1;
            Bcount2 = ("0" + Bcount).slice(-2);
            breaktime.html(Bcount2);
        }
    });

    start.click(function(){
        
        $('.hide-start, #add5, #sub5,#Badd5,#Bsub5,#btime,#breakclock,.inline2').hide(); 
        $("#progressdiv").show();
        $("#timer").addClass("changepointer");
        $('#progressbar').css("width",`100%`);
        $("#container").css("background","rgba(175, 253, 238, 0.365)");
        status=true;  
        count *=60;
        var maxval=count;
        var progresscount=100;
        pauseStatus= true;
        timerC= setInterval(counter, 1000);
        
     
        function counter(){
            if(count>0){
                count--;
                progresscount=progresscount-(100/maxval);
                $('#progressbar').css("width",`${progresscount}%`);
                var min = Math.floor(count/60);
                var min1 =("0" + min).slice(-2);
                work.html(min1);
                var sec=Math.floor(count%60);
                var sec2=("0" + sec).slice(-2);
                worksec.html(sec2);
            }else{
                buzzer.play();
                clearInterval(timerC);
                pauseStatus= false;
                return breaktimef();
            }
           
        }
            $(".changepointer").click(function(){
            if (status===true && pauseStatus===true) {
                clearInterval(timerC);
                $("#resetdiv").show();
                status=false;
            }else if(status===false &&pauseStatus===true){
                timerC = setInterval(counter,1000);
                $("#resetdiv").hide();
                status=true;           
            } 
         });
   });

        function breaktimef(){
            progresscount=100; 
            work.html(Bcount);
            $("#timer").removeClass("changepointer");
            $('#progressbar').css("width",`100%`);
            $('#progressbar').addClass("bg-warning");
            $("#resetdiv").show();
            $("#container").css("background","rgba(171, 223, 245, 0.365)"); 
            $("#header").html("Break");
            Bcount *=60;
            maxval=Bcount;
            var Btimer= setInterval(Bcounter, 1000);
                function Bcounter(){
                    if(Bcount>0){
                        Bcount--;
                        progresscount=progresscount-(100/maxval);
                        $('#progressbar').css("width",`${progresscount}%`);
                        var Bmin = Math.floor(Bcount/60);
                        var Bmin1 =("0" + Bmin).slice(-2);
                        work.html(Bmin1);
                        var Bsec=Math.floor(Bcount%60);
                        var Bsec2=("0" + Bsec).slice(-2);
                        worksec.html(Bsec2);
                    }else{
                        clearInterval(Btimer);
                        buzzer.play();
                        return resetF();
                    }    
                }
            }

            function resetF(){
                $("#resetdiv").show();
                $("#container").css("background","rgba(209, 229, 238, 0.365)");
                $('#progressbar').removeClass("bg-warning");
            }

  

   reset.click(function(){
    location.reload();
    // clearInterval(timerC);
    // console.log(timerC);
    //    count=25;
    //    Bcount=5;
    //    status=false;
    //    console.log(status);
    //     $("#container").css("background","rgba(209, 229, 238, 0.365)");
    //     $('.hide-start, #add5, #sub5,#breakclock,#Badd5,#Bsub5,#btime,.inline2').show();
    //     $("#header").html("Session");
    //     $("#timer").removeClass("changepointer");
    //     $("#progressdiv,#resetdiv").hide();
    //     work.html(count);
    //     worksec.html("00");
    //     breaktime.html(Bcount);
   });

   



});