let ico_menu = document.getElementById('menu_ico');
let liste_page = document.getElementById("liste_page");
let image = document.getElementById("img_down");
let show = false;
let fun = document.getElementById("fun");
let skins=["gif/1.png","gif/2.png","gif/3.png","gif/4.png"];
let index=0;
function hide(){
    if (!show){
        liste_page.style.display = "block";
        show=true
    }
    else{
        liste_page.style.display = "none";
        show = false
}}
function change() {
    image.setAttribute("src", "BoutonDownload2.png");
}
function change2() {
    image.setAttribute("src", "BoutonDownload.png");
} 
function fun_gif(){
    index++
    fun.setAttribute("src", skins[(index%skins.length)]);

}
    
ico_menu.addEventListener("click",hide);
image.addEventListener("mouseover",change);
image.addEventListener("mouseout",change2);

window.setInterval(fun_gif,500);