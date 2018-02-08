function bannerHeight(){
    bheight = $(window).height();
    if(bheight>360){
        $('#banner').css('height',bheight-260+'px');
    }else{
        $('#banner').css('height',bheight+'px');
    }
}

$( function() {
    var pictures = [],
        $title = $( '#title' ),
        $pause = $( '#pause' ),
        $flash = $( '#flash' );

    // jScrollPane

    // Vegas Background
    
    bannerHeight();

    $(window).resize(function(){
        console.log(bheight);
        bannerHeight();
    });

    $('#slides').find( 'a' ).each( function() {
        pictures.push({
            src: $( this ).attr( 'href' ),    
            title: $(this).next().html(),
            //$( this ).attr( 'title' ),
            valign: $( this ).data( 'valign' )
        });
        //console.log($(this).next().html());
    })

    $.vegas( 'slideshow', { 
        backgrounds: pictures,
        delay: 4000
     })( 'overlay' );
    $.vegas( 'slideshow' );

    $( '#banner' ).bind( 'vegasload', function( e, img ) {
        var src = $( img ).attr( 'src' ),
            idx = $( 'a[href="' + src + '"]' ).parent( 'li' ).index();
    
        $title.fadeOut( function() {
            $( '#title h1' ).html( pictures[ idx ].title );
            $( this ).fadeIn();
        });            
    });
});