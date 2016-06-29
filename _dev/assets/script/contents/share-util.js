var ShareUtil;

(function(){
	
	ShareUtil = {
		
		getFaceBookLink:function(url){
			
			return $('<a href="https://www.facebook.com/sharer/sharer.php?u=http://' + url + '" target="_blank" class="faceBookButton"></a>');
			
		},
		
		getTwitterLink:function(url, title){
			
			var option = encodeURI('url=http://' + url) + '&' + encodeURI('text=' + title);
			
			return $('<a href="https://twitter.com/share?' + option + '" target="_blank" class="twitterButton"></a>');
			
		},
		
		getGooglePlusLink:function(url){
	
			return $('<a href="https://plus.google.com/share?url=' + url + '"  target="_blank" class="googlePlusButton"></a>');
			
		},
		
		getHatenaLink:function(url){
			
			return $('<a href="http://b.hatena.ne.jp/entry/' + url + '" target="_blank" class="hatenaButton"></a>');
			
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