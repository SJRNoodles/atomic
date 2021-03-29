function drawText(a,t) {
document.write("<p style='"+a+"'>"+t+"</p>");
}
function drawLink(l,a,t) {
document.write("<a href='"+l+"'style='"+a+"'>"+t+"</a>");
}
function drawHeader(h,a,t) {
document.write("<h"+h+" style='"+a+"'>"+t+"</h"+h+">");
}
function insertBreak(){
document.write("<br>");
}
function insertHeadLine(){
document.write("<hr>");
}
function insertCodeSnip(code){
document.write("<code style='color:#ffa;background-color:#260C0C;'>"+code+"</code>");
}
function Bg(color){
document.write("<style>body{background-color:"+color+";}</style>");
}
