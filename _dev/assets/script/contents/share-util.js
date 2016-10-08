var ShareUtil;

(function(){
	
	ShareUtil = {
		
		getFaceBookLink:function(url){
			
			return $('<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(url) + '" target="new" class="faceBookButton"></a>');
			
		},
		
		getTwitterLink:function(url, title){
			
			var option = encodeURI('url=' + url) + '&' + encodeURI('text=' + title);
			
			return $('<a href="https://twitter.com/share?' + option + '" target="new" class="twitterButton"></a>');
			
		},
		
		getGooglePlusLink:function(url){
	
			return $('<a href="https://plus.google.com/share?url=' + encodeURI(url) + '"  target="new" class="googlePlusButton"></a>');
			
		},
		
		getHatenaLink:function(url){
			
			return $('<a href="http://b.hatena.ne.jp/entry/' + encodeURI(url) + '" target="new" class="hatenaButton"></a>');
			
		},
		
		getLinks:function(url, title){
			
			return{
				'fb':ShareUtil.getFaceBookLink(url),
				'tw':ShareUtil.getTwitterLink(url, title),
				'gp':ShareUtil.getGooglePlusLink(url),
				'hb':ShareUtil.getHatenaLink(url)
			};
			
		},
		
	};
	
})();