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
            // _______ convert to currency
            var amount = Number(data.zestimate.amount).toLocaleString('en');
            // console.log(data);
            var divs =  '<div class="results">';
                divs += '   <div class="row">';
                divs += '       <p>';
                divs += '           Congratulations! The Zestimate for your home is: $' + amount;
                divs += '       </p>';
                divs += '   </div>';
                divs += '</div>';
            $(".container").append(divs);
            resetScrollTop();
            // _______ add the form to request more info
             var divs =  '<div class="results">';
                divs += '   <div class="row">';
                divs += '       <p>';
                divs += '           If you would like to request more information to please provide your name and email address:';
                divs += '           <form id="requestMoreInfo">';
                divs += '               <label for="name">Name:</label>';     
                divs += '               <input name="name" type="text" placeholder="Chris Jones">';
                divs += '               <label for="email">email:</label>';
                divs += '               <input name="email" type="email" placeholder="myemail@g.com">';
                divs += '               <input id="reqmore" type="submit" value="submit"';
                divs += '           </form>';
                divs += '       </p>';
                divs += '   </div>';
                divs += '</div>';
            $(".container").append(divs);
        });
    })
    
    // _____________  Handle request more info form __________________
    // 
    $(".container").on("click", "#reqmore", function( event ){
        event.preventDefault();
        console.log("request more info submitted.");
    });
});
