// scrollToUnlessVisible()
// 
// Call this method on any jquery collection and it will scroll to the first item (if not already visible)
// 
// This scripts requires:
// 
// - jquery.viewport.js
// - jquery.scrollTo.js
// 
// compatible versions found here: http://github.com/merbjedi/jquery-plugins
// 
(function($j) {
  
  $j.fn.scrollToUnlessVisible = function() { 
    
    // verify we have the dependencies
    if(typeof($j.inviewport) != "function" || typeof($j.scrollTo) != "function")
    {
      if(console && typeof(console.log) == "function")
      {
        console.log("scrollToUnlessVisible needs viewport and scrollTo to work correctly. Degrading gracefully..");
      }
      return this;
    }
    
    // find first item and scroll to it if necessary
    var $first = $j(this).eq(0);
    if($first.length > 0 && !$j.inviewport($first, {threshold : 0}))
    {
      $j.scrollTo($first.find(":first"), { duration: 500, axis:'y', offset: -20});
    }
    return this;

  }; 
})(jQuery);