document.getElementById("ham-btn").addEventListener("click",showMenu);
document.getElementById("cross-btn").addEventListener("click",closeMenu)
function showMenu(){
    document.getElementById('nav-items').classList.add('menu');
    document.getElementById('cross-btn').classList.add("visible")
}

function closeMenu(){
    document.getElementById('nav-items').classList.remove("menu");
    document.getElementById('cross-btn').classList.remove("visible");
}