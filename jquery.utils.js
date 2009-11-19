;(function($) {  

  // defines a list of behaviors using lowpro like syntax (key, function pairs)
  $.fn.behaviors = function(behaviors) {
    var $this = this;
    $.each(behaviors, function(key, val) {
      $this.bind(key, val);
    });
  };

  // defines a list of live behaviors using lowpro like syntax (key, function pairs)
  $.fn.live_behaviors = function(behaviors) {
    var $this = this;
    $.each(behaviors, function(key, val) {
      $this.live(key, val);
    });
  };
  
  // defines a list of livequery behaviors using lowpro like syntax (key, function pairs)
  $.fn.livequery_behaviors = function(behaviors) {
    var $this = this;
    $.each(behaviors, function(key, val) {
      $this.livequery(key, val);
    });
  };
  
  // Returns whether or not a result set has results in it
  $.fn.outerHTML = function() {
    return $('<div>').append( this.eq(0).clone() ).html();
  };
  
  // observe a form
  $.fn.observe = function( time, callback ){
    return this.each(function(){
       var form = this, change = false;
       var $elements = $(form).find('select,input');
       
       $elements.change(function(){
         change = true;
       });

       $elements.keyup(function(e){
         change = true;
       });

       setInterval(function(){
           if ( change ) callback.call( form );
           change = false;
       }, time * 1000);
    });
  };
  
  // Returns whether a string is not blank
  $.isPresent = function(obj) { 
    if(obj && $.trim(obj) != "")
    {
      return true;
    }
    else
    {
      return false;
    }
  };   

  // Returns whether a string is blank
  $.isBlank = function(obj) { 
    return !$.isPresent(obj);
  };   
  
  // Provides vertical alignment on an element
  $.fn.valign = function(selector) {
    return this.each(function(i){
      var ah = $(this).height();
      var ph = null;
      
      if(selector)
      {
        ph = $(this).parents(selector).eq(0).height();
      }
      else
      {
        ph = $(this).parent().height();
      }
      var mh = (ph - ah) / 2;
      $(this).css({'margin-top': mh});
    });
  };
  
  // Looks within to see if it has any children with a matching filter
  $.fn.has = function(selector) { 
    return this.find(selector).size() > 0;
  }; 
  
  // opposite of is()
  $.fn.isnt = function(selector){
    return !this.is(selector);
  };

  // Find the first element in a jquery collection
  $.fn.first = function() { 
    return this.eq(0);
  }; 

  // Find the first element in a jquery collection
  $.fn.last = function() { 
    return this.eq(this.length - 1);
  }; 
  
  // Returns whether or not a result set has results in it
  $.fn.onPage = function() { 
    return this.size() > 0;
  }; 

  $.fn.notOnPage = function() { 
    return this.size() == 0;
  }; 
  
  // Looks within to see if the element is still in browser's dom
  $.fn.inDom = function() { 
    return this.parents("html").size() > 0;
  }; 
  
  // access a custom data attribute
  $.fn.data_attr = function( name, value, type ) {
    var options = name;

    // Look for the case where we're accessing a style value
    if ( typeof name === "string" )
      if ( value === undefined )
        return this[0] && jQuery[ type || "attr" ]( this[0], "data-"+name );

      else {
        options = {};
        options[ "data-"+name ] = value;
      }

    // Check to see if we're setting style values
    return this.each(function(i){
      // Set all the styles
      for ( name in options )
        jQuery.attr(
          type ?
            this.style :
            this,
          name, jQuery.prop( this, options[ "data-"+name ], type, i, name )
        );
    });
  };
})(jQuery);
