$( document ).ready( function( e )
{
  // Create + position ripple on click
  
  $( 'body' ).on( 'click' , 'button' , function( e )
  {
    var x = e.pageX - $( this ).offset().left;
    var y = e.pageY - $( this ).offset().top;
    
    $( this ).find( '.button_ripple' ).remove();
    
    $( '<span class="button_ripple"/>' ).appendTo( this ).css( { left:x , top:y } );
  });
  
  // Prevent clicking from applying :focus state style
  
  $( 'body' ).on( 'keydown' , function( e )
  {
    if( e.which == 9 )
    {
      $( 'body' ).addClass( 'keyboardfocus' );
    }
  });

  $( 'body' ).on( 'click' , function( e )
  {
    $( 'body' ).removeClass( 'keyboardfocus' );
  });
});