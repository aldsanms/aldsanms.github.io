document.write(
    '<div class="container">'+
        '<div id="header-title">'+
            '<a href="accueil.html"><h1 id="header-title-name">Sanchez Aldryck</h1></a>'+
            '<div class="lang">'+
                '<button class="lang-btn">'+
                    '<img id="lang-img" src="'+baniere.img01[lan]+'" alt="Option" width="49" height="35">'+
                '</button>'+
                '<div class="lang-content">'+
                    '<a onclick="changeLang(0)">'+
                        '<img src="../img/drap/fr/fr.jpg" alt="Option 1">'+
                    '</a>'+
                    '<a onclick="changeLang(1)">'+
                        '<img src="../img/drap/en/en.png" alt="Option 2">'+
                    '</a>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<nav id="bas">'+
            '<ul>'+
                '<li><a href="parcours.html">'+baniere.l1[lan]+'</a></li>'+
                '<li><a href="cv.html">'+baniere.l2[lan]+'</a></li>'+
                '<li><a href="projets.html">'+baniere.l3[lan]+'</a></li>'+
                '<li><a href="competences.html">'+baniere.l4[lan]+'</a></li>'+
                '<li><a href="contact.html">'+baniere.l5[lan]+'</a></li>'+
            '</ul>'+
        '</nav>'+
    '</div>'
);

function changeHeader(){
    document.querySelector('header').style.top = "-"+(document.getElementById("bas").offsetTop -8)+"px";
}

window.addEventListener('resize', changeHeader);

document.addEventListener('DOMContentLoaded', function() {
    changeHeader();
});