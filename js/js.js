
teSt="";
$(".droppp").before("<div class='toggleman'>همه آگهی ها </div>");
   $(".toggleman").click(function(){
       $("ul.droppp").slideToggle("slow");
 })
$(".droppp").addClass("Father1");
$(".Father1 li  ul").addClass("Father2");
$(".Father2 li  ul").addClass("Father3");
$(".Father3").removeClass("Father2");
$(".Father3 li  ul").addClass("Father4");
$(".Father4").removeClass("Father3");
$(".Father4 li  ul").addClass("Father5");
$(".Father5").removeClass("Father4");
$(".Father5 li  ul").addClass("Father6");
$(".Father6").removeClass("Father5");
$(".Father6 li  ul").addClass("Father7");
$(".Father7").removeClass("Father6");
$(".Father7 li  ul").addClass("Father8");
$(".Father8").removeClass("Father7");
$(".Father8 li  ul").addClass("Father9");
$(".Father9").removeClass("Father8");
$("ul li:not(.BackTo)").click(function(){
     className=$(this).parent().attr("class");
     STRClassname=className.slice(-1);
        nextFather=Number(STRClassname)+1;
         $(".Father"+nextFather+"", this).css("right","0%");
        
})
 // $("body").on("click","ul li:not(.BackTo)",function(){

 // vaGo= $("ul .BackTo", this).text();
 //          var textLi=$(this).parent().attr("class");
 //                var newT=textLi.slice(-1);
 //                var ADDD=Number(newT)+1;
 //                var SSSt=($(".Father"+ADDD+" li:nth-of-type(2)" , this).text());
 //                SSSt.substr(0,SSSt.indexOf(' '));
 //                SSSt.substr(SSSt.indexOf(' ')+1); 
 //                $("#demo").text(SSSt)
 // })


$("li").each(function(){
	$(this).prepend("<a   class='name'></a>")
v=$(this).attr("data-dropdown-text");
x=v.split("")
lEn=x.length;
teSt="";
if(lEn>30){
    for(i=0;i<30;i++){
        teSt=teSt+x[i]; 
        }
    teSt=teSt+"...";
    $(".name" ,this).text($(this).attr("data-dropdown-text",teSt));
}
else{
$(".name" ,this).text($(this).attr("data-dropdown-text",v));
}

    $(".name" ,this).text($(this).attr("data-dropdown-text"));
        var texta=$(this).text();
                var textLi=$(this).parent().attr("class");
                var newT=textLi.slice(-1);
                var ADDD=Number(newT)+1;
                 newSS= $(this).parent().find(".BackTo").next("li").attr("data-dropdown-text");
                $(".Father"+ADDD+"", this).prepend("<li class='BackTo' >"+newSS+"</li>");
   

  if($(this).find("ul").length>0){
  $(this).addClass("BOOM")
}
     })
$(".Father2 > li.BackTo").addClass("EXEPT");
$(".Father2 .EXEPT").text("همه آگهی ها");
$("body").on("click",".BackTo",function(){
       var VmS=$(this).parent().attr("class");
       mSmS=className.slice(-1);
     $(this).parent().css("right","150%");
})
$("body").on("click","a[href]",function(){
$(".toggleman").text($(this).text());
$(".droppp").hide();
});
$(".BackTo").click(function(){
  $(".toggleman").text($(this).text())
})
if($("window")<480){
  $(".ul_container").click(function(){
    $(this).toggle();
  })
}
 