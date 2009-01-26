 
/*
*
* jRails form extras
* <aaron@ennerchi.com> | http://www.ennerchi.com
*
*/
 
;(function($) {
  // reset a form
  $.fn.reset = function() {
    return this.each(function() {
      // guard against an input with the name of 'reset'
      // note that IE reports the reset function as an 'object'
      if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
        this.reset();
    });
  };
  // enable a form element
  $.fn.enable = function() {
    return this.each(function() {
      this.disabled = false;
    });
  };
  // disable a form element
  $.fn.disable = function() {
    return this.each(function() {
      this.disabled = true;
    });
  };
 
})(jQuery);