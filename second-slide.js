var gens = document.getElementById('genius-slide');
var xwidth = document.documentElement.clientWidth;
var l = 0;
var loopp = 1;
gens.style.width = maxres*xwidth+'px';
for(i=0;i<gens.children.length;i++){
if (gens.children[i].id == 'post'){
gens.children[i].style.width = xwidth+'px';
}}
function myfun(){
gens.style.transform = 'translatex('+l+'px)';
if (l==xwidth*maxres-xwidth){l=0}
else {l=l+xwidth}
if(loopp){setTimeout(myfun, 6000)};
}
setTimeout(myfun, 6000);
