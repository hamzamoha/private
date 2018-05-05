function mycallback(json) {
    for (var i=0,x=json.feed.entry; i < x.length; i++) {
      for (var j = 0; j < x[i].link.length; j++) {
        if (x[i].link[j].rel == 'alternate') {
          var postUrl = x[i].link[j].href;
          break;
        }
      }
    if(x[i].media$thumbnail==(null || undefined)){
    	var content = x[i].content.$t;
	var imgtag = content.indexOf('<img');
	var srcatr = content.indexOf(' src=',imgtag);
	var start = srcatr+6;
	var end = content.indexOf('"',start);
	var src = content.substring(start,end);
	var thmb = src;
    }
    else {
        var sthumbnailurl = x[i].media$thumbnail.url;
	var thumb = sthumbnailurl.replace('s72-c','s1600');
    }
      var postTitle = x[i].title.$t;
      //var postSummary = x[i].summary.$t;
      var item ='<div id="post"><div id="picture"><img src=' + thumb + '><div id="cover"></div></div><div id="title">' + postTitle + '</div><div id="read-more"><a href=' + postUrl + '>Read more</a></div></div>';
      document.write(item);
    }
  }
document.write('<scr'+'ipt type="text/javascript" src="https://'+blogurl+'/feeds/posts/default?max-results='+maxres+'&alt=json-in-script&callback=mycallback" ></scr'+'ipt>');
