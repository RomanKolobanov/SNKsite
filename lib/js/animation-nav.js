$(".lili").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("animated")  
})

$(".lili").mouseover(function(){
  $(this).addClass("anim");        
})