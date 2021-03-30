function dTex(a,t) {
document.write("<p style='"+a+"'>"+t+"</p>");
}
function dTaggedHTM(z,a,t) {
document.write("<p id='"+z+"'style='"+a+"'>"+t+"</p>");
}
function dLink(l,a,t) {
document.write("<a href='"+l+"'style='"+a+"'>"+t+"</a>");
}
function dHead(h,a,t) {
document.write("<h"+h+" style='"+a+"'>"+t+"</h"+h+">");
}
function br(){
document.write("<br>");
}
function hr(){
document.write("<hr>");
}
function dCode(code){
document.write("<code style='color:#ffa;background-color:#260C0C;'>"+code+"</code>");
}
function dImg(img){
document.write("<img src='"+img+"'>");
}
function Bg(color){
document.write("<style>body{background-color:"+color+";}</style>");
}
