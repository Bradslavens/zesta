$(function()
{
    $("#howItWorks").on("click", function(){
        sp = $("html").scrollTop();
        $("html").scrollTop(sp + 165);
        $(".howItWorks").toggle(500);
    });
    
    $("#getStarted").on("click", function(){
        sp = $("html").scrollTop();
        $("html").scrollTop(sp + 165);
        $(".getStarted").toggle(500);
    })
});