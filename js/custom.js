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
    
    $("#submitAddressToZillow").submit(function( event ){
        event.preventDefault();
        console.log("form submitted");
        
        var address = $("input[name=address").val();
        var citystatezip = $("input[name=citystatezip").val();
        console.log(address + citystatezip);
        
        $.get("getDetails.php", {address: address, citystatezip: citystatezip})
        .done(function( data ){
            console.log(data);
        });
    })
});