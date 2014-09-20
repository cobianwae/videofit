(function($){

	$.fn.videofit = function(){
		return this.each(function(){
			var $video = $(this);
			var $container = $video.parent();

			//set overflow hidden to it's container
			$container.css('overflow', 'hidden').css('position', 'relative');

			$video.bind('loadedmetadata', function(){
			    var videoWidth = $(this).prop('videoWidth');
			    var videoHeight = $(this).prop('videoHeight');

    			var videoResize = function(){
    				var containerWidth = $container.width();
    				var containerHeight = $container.height();

    				//compare container aspect ratio and video aspect ratio
    				var containerRatio = containerWidth/containerHeight;
    				var videoRatio  = videoWidth / videoHeight;
    				var adjustment = containerHeight / videoHeight;
    				if ( containerRatio >= videoRatio ) adjustment = containerWidth / videoWidth;

    				//video size adjustment
    				$video.width(adjustment * videoWidth);
    				$video.height(adjustment * videoHeight);

    				// center video
    			  	var centerX = (containerWidth - $video.width() )/2;
    			  	var centerY = (containerHeight - $video.height())/2;
    	    
    	     		$video.css({ 'left': centerX, 'top': centerY });
    			};

    			videoResize();
          		$video.fadeIn();
      		 	$(window).resize(function() { videoResize(); });
		  	
		  	});
		});
	};

	$(document).ready(function(){
		$('.videofit').videofit();
	})

}(jQuery));