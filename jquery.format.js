/*
 * jQuery validation plug-in 1.5.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6096 2009-01-12 14:12:04Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

  $.format = function(source, params) {
  	if ( arguments.length == 1 ) 
  		return function() {
  			var args = $.makeArray(arguments);
  			args.unshift(source);
  			return $.format.apply( this, args );
  		};
  	if ( arguments.length > 2 && params.constructor != Array  ) {
  		params = $.makeArray(arguments).slice(1);
  	}
  	if ( params.constructor != Array ) {
  		params = [ params ];
  	}
  	$.each(params, function(i, n) {
  		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
  	});
  	return source;
  };

})(jQuery);
