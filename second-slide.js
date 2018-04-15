var i=1;var y=1;
document.getElementById('slide-style').innerHTML = '#slide #post:nth-of-type(' + i + '){z-index:1;opacity:1;}';
function next(){
if (i==maxres){i=1;document.getElementById('slide-style').innerHTML = '#slide #post{z-index:0;opacity:0;}#slide #post:nth-of-type(' + i + '){z-index:1;opacity:1;}';}else {i=i+1;document.getElementById('slide-style').innerHTML = '#slide #post{z-index:0;opacity:0;}#slide #post:nth-of-type(' + i + '){z-index:1;opacity:1;}';}}
function previous(){
if (i==1){i=maxres;document.getElementById('slide-style').innerHTML = '#slide #post{z-index:0;opacity:0;}#slide #post:nth-of-type(' + i + '){z-index:1;opacity:1;}';}else {i=i-1;document.getElementById('slide-style').innerHTML = '#slide #post{z-index:0;opacity:0;}#slide #post:nth-of-type(' + i + '){z-index:1;opacity:1;}';}}
function stop(){y=0;}
function start(){y=1;setTimeout(refreshData, 3000);}
function refreshData(){if(y){x=3;next();setTimeout(refreshData, x*1000);}}
setTimeout(refreshData, 3000);
