!function($){$("#facets").on("mouseenter mouseleave",".button-checkbox",function(e){$(this).parent().find(".facet_link").toggleClass("hover")}),$("#facets").on("mouseenter mouseleave",".facet_link",function(e){$(this).parent().find(".button-checkbox button.btn").toggleClass("hover")})}(jQuery);