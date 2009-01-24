(function($) {  
  // Looks within to see if it has any children with a matching filter
  $.fn.has = function(selector) { 
    return this.find(selector).size() > 0;
  }; 
})(jQuery);
