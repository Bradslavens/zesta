$(function()
{
    // _______________  Scrolls the page when called ________________
    // 
    function resetScrollTop(){
        sp = $("html").scrollTop();
        $("html").scrollTop(sp + 200);
    }
    
    
    // ___________  handle dynamic display ___________________________
    // 
    $("#howItWorks").on("click", function(){
        resetScrollTop();
        $(".howItWorks").toggle(500);
    });
    
    $("#getStarted").on("click", function(){
        resetScrollTop();
        $(".getStarted").toggle(500);
    })
    
    
    
    // ___________  Handle form submission to zillow ________________
    // 
    $("#submitAddressToZillow").submit(function( event ){
        event.preventDefault();
        console.log("form submitted");
        
        var address = $("input[name=address").val();
        var citystatezip = $("input[name=citystatezip").val();
        
        $.get("getDetails.php", {address: address, citystatezip: citystatezip})
        .done(function( data ){
            data = $.parseJSON( data );
            data = data.results.result;
            $(".container").append(data.zpid);
            resetScrollTop();
        });
    })
});
