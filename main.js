var flavors = []

$(document).ready(function() {
    // all custom jQuery will go here
    $.getJSON( "veg_flavorbible.JSON", function( file_data ) {
        var items = [];
        var count=0
        $.each( file_data, function( key, val ) {
            count++;
            items.push( "<li id='" + key + "'>" + count +". "+ val.name + "</li>" );
            flavors.push(val)
        });



        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    });


});

function send_flavors(){}
