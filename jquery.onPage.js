(function($) {  
  // Returns whether or not a result set has results in it
  $.fn.onPage = function() { 
    return this.size() > 0;
  }; 

  $.fn.notOnPage = function() { 
    return this.size() == 0;
  }; 
})(jQuery);
