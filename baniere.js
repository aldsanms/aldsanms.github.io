

document.write(
'<div class="bb">'+
'<a href="monparcours.html" class="ban01a" id="l1">mon parcours</a>'+
'<a href="MonCV.html" class="ban01a" id="l2">mon CV</a>'+

'<a href="MesProjets.html" class="ban01a" id="l3">mes projets</a>'+
'<a href="MesCompetences.html" class="ban01a" id="l4">mes compétences</a>'+
'<a href="MeContacter.html" class="ban01a" id="l5">me contacter</a>'+

'</div>'+
'<div class="Lang">'+
    '<button class="drap" id="drap"></button>'+'<img class="drap" src="./img/fbas.png" alt="fleche bas">'+
    '<div class="liDrap">'+
        '<button class="drapli" id="drap1" onclick=changeLang(0)></button>'+
        '<button class="drapli" id="drap2" onclick=changeLang(1)></button>'+
    '</div>'+
'</div>'+

'<style>'+
    '#drap {'+

        'margin-top: 4px;'+
        'cursor: pointer;'+
        'background-position: center;'+
        'background-image: url('+baniere.img01[lan]+');'+
        'background-repeat: no-repeat;'+
        'height: 36px;'+
        'width: 70px;'+
        'background-size: 49px 35px;'+
        'border-style : none;'+
   '}'+
'</style>'

);





var b = document.getElementById("l1");
b.innerHTML=baniere.l1[lan];

b = document.getElementById("l2");
b.innerHTML=baniere.l2[lan];

b = document.getElementById("l3");
b.innerHTML=baniere.l3[lan];

b = document.getElementById("l4");
b.innerHTML=baniere.l4[lan];

b = document.getElementById("l5");
b.innerHTML=baniere.l5[lan];



