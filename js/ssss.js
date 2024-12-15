
    let langEsp = true
    $("#translate").click(function(){
        langEsp = !langEsp
        if(langEsp){
            $.getJSON( "../static/text/es.json", function( data ) {
                $.each( data, function( key, val ) {
                    $("#"+key).html(val);
                });
            });
        }else{
            $.getJSON( "../static/text/en.json", function( data ) {
                $.each( data, function( key, val ) {
                    $("#"+key).html(val);
                });
            });
        }
    })
