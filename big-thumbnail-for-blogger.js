var i = document.getElementsByTagName('img');
var arr=[];
  for(var j=0;j<i.length;j++){
    if(i[j].parentElement.id=='thumbnail'){arr.push(i[j])}
}
  for(var j=0;j<arr.length;j++){
	arr[j].src=arr[j].src.replace('s72-c', 's1600');
}
