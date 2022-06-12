var name=document.URL;
var family=document.getElementsByClassName("buy-weight-option");
const familyname=[];
for (let i = 1; i < family.length; i++) {
    family[i]=family[i].className.replaceAll("buy-weight-option buy-weight-option--","")
    familyname[i-1]=family[i].className.replaceAll("buy-weight-option buy-weight-option--","");
}
document.getElementsByClassName("button b-fullwidth b-big b-outline")[0].addEventListener("click", download);
name=name.replace("https://alefalefalef.co.il/font/","")
name=name.replace("/#thebuyarea","")
name=name.replace("/","")
document.getElementsByClassName("button b-fullwidth b-big b-outline")[0].textContent="הורדה"
document.getElementsByClassName("woocommerce-Price-amount amount feat-tnum")[0].textContent="0₪"
document.getElementsByClassName("button b-fullwidth b-big b-outline")[0].href="#"
function download() {
    for (let i = 0; i < familyname.length; i++) {
        window.open("https://alefalefalef.co.il/wp-content/fonts/"+name+"/"+name+"-"+familyname[i]+"-aaa.woff2")
    }
}