function mycallback(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
      for (var j = 0; j < json.feed.entry[i].link.length; j++) {
        if (json.feed.entry[i].link[j].rel == 'alternate') {
          var postUrl = json.feed.entry[i].link[j].href;
          break;
        }
      }
	  var sthumbnailurl = json.feed.entry[i].media$thumbnail.url;
	  var thumb = sthumbnailurl.replace('s72-c','s1600');
      var postTitle = json.feed.entry[i].title.$t;
      //var postSummary = json.feed.entry[i].summary.$t;
      var item ='<div id="post"><div id="picture"><img src=' + thumb + '><div id="cover"/></div><div id="title">' + postTitle + '</div><div id="read-more"><a href=' + postUrl + '>Read more</a></div>';
      document.write(item);
    }
  }
document.write('<scr'+'ipt type="text/javascript" src="https://'+blogurl+'/feeds/posts/summary?max-results='+maxres+'&alt=json-in-script&callback=mycallback" ></scr'+'ipt>');