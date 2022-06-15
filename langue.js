

var nombreDeLangues = 2;


var lan= getCookie("Langue");
//alert(lan);

if(lan!=null){
    if(lan>nombreDeLangues-1 || lan<0){
        lan=1;
    }
}else{

    if(navigator.userLanguage){

        var language = navigator.userLanguage ;
    } else {
        var language = navigator.language ;
    }

    if(language.indexOf('fr') > -1){
    
        lan=0;
        document.cookie = "Langue="+lan;
    } else {

    lan=1;
    document.cookie = "Langue="+lan;
    }
    

}
//lan=1;




function getCookie(name) {
  
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
      
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}


  	


var baniere={

    l1: ["Mon parcours","Experiences"],
    l2: ["Mon CV","Resume"],
    l3: ["Mes projets","Projects"],
    l4: ["Mes compétences","Skills"],
    l5: ["Me contacter","Contact me"],

    img01: ["../img/fr.jpg","../img/en/en.png"]

};




/////////////////////////
/////////////////// index
var Index={

    img01 : ["img/site.jpg",
    "img/en/personal.jpg"],
    img02 : ["img/web.jpg",
    "img/en/website.jpg"],
    img03 : ['img/personnel1.jpg',
    "img/gris.jpg"],



    i1: ["Bonjour, et bienvenue sur mon site de présentation. Sur ce site, vous pouvez en savoir un peu plus sur moi. Vous connaîtrez",
        "Hello and welcome to my presentation site. On this site you will be able to know a little more about me. You will know"],
    a1: ["mon parcours",
        "my experience"],
    i2: [" ainsi que des détails sur les différents",
        " as well as details of the various"],
    a2: ["projets",
        "projects"],
    i3: [" que j’ai le plus appréciés et qui m’ont apporté de nouvelles",
        " that I liked the most and that brought me new"],
    a3: ["compétences",
        "skills"],
    i4: [". Il vous est aussi possible d\'y trouver",
        ". You can also find there"],
    a4: ["mon CV",
        "my resume"],
    i5: [" et une page pour",
        " and a page to"],
    a5: ["me contacter",
        "contact me"],
    i6: [" Bonne visite !",
        " Please enjoy your visit to my site."],
    i7: [" Pour en savoir plus sur moi",
        " Learn more about me"],
    a6: ["Mon parcours",
        "My experience"],
    a7: ["Mon CV",
        "My resume"],
    a8: ["Mes projets",
        "My projects"],
    a9: ["Mes compétences",
        "My skills"],
    a10: ["Me contacter",
        "Contact me"],

}
//////////////////////////







///////////////////////////////
/////////////////// MeContacter
var MeContacter={

    img01 : ["img/me.jpg",
    "img/en/contact.jpg"],
    img02 : ["img/contacter.jpg",
    "img/me.jpg"],



    i1: ["Vous pouvez me contacter par :",
        "You can contact me by :"],
    
}
//////////////////////////







//////////////////////////////////
/////////////////// MesCompetences
var MesCompetences={

    img01 : ["img/mes.jpg",
    "img/en/my.jpg"],
    img02 : ["img/competences.jpg",
    "img/en/skills.jpg"],



    i1: ["Tout le long de mon parcours j\'ai développé des compétences dans plusieurs secteurs.",
        "Throughout my career, I have developed skills in several sectors."],
    i2: ["En voici un aperçu:",
        "Here is an overview:"],
    i3: ["les langages de programmation :",
        "Programming languages:"],
    i4: ["Mes différents projets m\'ont permis d\'utiliser plusieurs langages de programmation comme :",
        "My various projects have allowed me to use several programming languages such as:"],
    i5: ["Le C ",
        "The C"],
    i6: [" (Très bonnes compétences en C grâce à plusieurs projets personnels.) ",
        " (Very good C skills thanks to several personal projects.) "],
    i7: ["Le C++",
        "The C++"],
    i8: [" (Bonnes compétences en C++ grâce à des projets scolaires.) ",
        " (Good C++ skills through school projects.) "],
    i9: ["Le Arduino",
        "The Arduino"],
    i10: [" (Très bonnes compétences, c\'est le premier langage de programmation que j\’ai abordé.) ",
        " (Very good skills, it was the first programming language I tackled.) "],
    i11: ["Le HTML/CSS (SCSS/SASS)",
        "The HTML/CSS (SCSS/SASS)"],
    i12: [" (Bonnes compétences, j’ai réalisé ce site en HTML/CSS et JS.) ",
        " (Good skills, I made this site in HTML/CSS and JS.) "],
    i13: ["Le SQL",
        "The SQL"],
    i14: [" (Bonnes compétences en SQL grâce à des projets scolaires et personnels.) ",
        " (Good SQL skills through school and personal projects.) "],
    i15: ["Le PHP",
        "The PHP"],
    i16: [" (Très bonnes compétences en PHP grâce à plusieurs projets scolaires et personnels.) ",
        "(Very good PHP skills thanks to several school and personal projects.)"],
    i17: ["Le javascript",
        "The JavaScript"],
    i18: [" (Très bonnes compétences en javascript grâce à des projets scolaires, personnels, et professionnels) ",
        " (Very good javascript skills thanks to school, personal and professional projects) "],
    i19: ["Le C#",
        "The C#"],
    i20: [" (Bonnes compétences en C# grâce à des projets scolaires.) ",
        " (Good C# skills through school projects.) "],
    i21: ["Le Python",
        "The python"],
    i22: [" (J’y ai développé des connaissances de base.) ",
        " (I developed basic knowledge there.) "],

    i23: ["Prochainement je vais en développer d\'autres:",
        "Soon I will develop others:"],

    i24: ["les Logiciels :",
        "Softwares :"],
    i25: ["Des logiciels me sont régulièrement utiles sur mes projets, en voici les principaux : ",
        "The software is regularly useful to me on my projects, here are the main ones:"],

    i26: ["OpenSCAD",
        "OpenSCAD"],
    i27: [" (Très bonnes compétences sur OpenSCAD grâce à de nombreux projets personnels.) ",
        " (Very good skills on OpenSCAD thanks to many personal projects.) "],
    i28: ["Unreal Engine",
        "Unreal Engine"],
    i29: [" (Très Bonnes compétences sur Unreal Engine grâce à des projets personnels.) ",
        " (Very good skills on Unreal Engine thanks to personal projects.) "],
    i30: ["Arduino",
        "Arduino"],
    i31: [" (Très bonnes compétences sur Arduino c\'est le premier logiciel de programmation que j’ai abordé.) ",
        " (Very good skills on Arduino it's the first programming software I approached.) "],
    i32: ["Pack Office",
        "Office Pack"],
    i33: [" (Bonnes compétences essentiellement sur Excel.) ",
        " (Good skills mainly on Excel.) "],
    i34: ["Visual Studio",
        "Visual Studio"],
    i35: [" (Bonnes compétences, je l\'utilise le plus pour le C/C++ et le web.) ",
        " (Good skills, I use it the most for C/C++ and Web.) "],
    i36: ["Photoshop",
        "Photoshop"],
    i37: [" (Très bonnes compétences.) ",
        " (Very good skills.) "],

    i38: ["Mais aussi:",
        "But also:"],

    i39: ["Solidworks",
        "Solidworks"],
    i40: ["FreeCAD",
        "FreeCAD"],
    i41: ["3D builder",
        "3D builder"],
    i42: ["Fusion 360",
        "Fusion 360"],
    i43: ["Sublime Text",
        "Sublime Text"],
    i44: ["Prochainement je vais en voir d\'autres comme:",
        "Soon I will see others like:"],
    i45: ["Symfony",
        "Symfony"],
    i46: ["Nodejs",
        "Nodejs"],

    
}
//////////////////////////






//////////////////////////////
/////////////////// MesProjets
var MesProjets={

    img01 : ["img/mes.jpg",
    "img/en/my.jpg"],
    img02 : ["img/projets.jpg",
    "img/en/personal.jpg"],
    img03 : ['img/personnel.jpg',
    "img/projets.jpg"],



    i1: ["Vous trouverez sur ces liens des exemples de projets réalisés sur trois de mes Logiciels favoris.",
        "You will find on these links examples of projects carried out on three of my favorite software."],
    i2: ["Mes Projets Arduino.",
        "My Arduino projects."],
    i3: ["Arduino est la marque d\'une plateforme de prototypage open-source qui permet aux utilisateurs de créer des objets électroniques interactifs. Que ce soit sur des projets personnels, scolaires ou même à mon club de robotique à la MJC de Montauban, j\'ai travaillé à de nombreuses reprises avec Arduino.<br> Vous trouverez ci-joint une sélection de certains de mes projets Arduino favoris.",
        "Arduino is the brand of an open-source prototyping platform that allows users to create interactive electronic objects. Whether on personal projects, school or even at my robotics club at the MJC in Montauban, I have worked many times with Arduino.<br> You will find attached a selection of some of my Arduino projects favourites."],
    i4: ["Mes Projets OpenSCAD.",
        "My OpenSCAD Projects."],
    i5: ["OpenSCAD est un logiciel libre de modélisation paramétrique fonctionnant sous Linux, Mac OS et Microsoft Windows. Il y est possible de créer des objets 2D ou 3D et de les animer avec un langage de programmation fonctionnelle. Il m\'a souvent été utile à la programmation de pièces 3D par la suite imprimées (impression 3D) ou intégrées dans un moteur de jeu vidéo comme Unreal Engine.",
        "OpenSCAD is a free parametric modeling software running on Linux, Mac OS, and Microsoft Windows. It is possible to create 2D or 3D objects and animate them with a functional programming language. It has often been useful to me for programming 3D parts which are then printed (3D printing) or integrated into a video game engine like Unreal Engine."],
    i6: ["Voici quelques-uns de mes projets OpenSCAD. ",
        "Here are some of my OpenSCAD projects."],
    i7: ["Mes Projets Unreal Engine.",
        "My Unreal Engine Projects."],
    i8: ["Unreal Engine est un moteur de jeu vidéo propriétaire développé par Epic Games. Il me sert à but récréatif depuis plusieurs années dans la création de jeux vidéo ou de scènes, aussi pour animer des objets 3D. Unreal Engine est un moteur que j\'apprécie vraiment et qui m\'a été utile sur beaucoup de projets dont voici une présentation.",
        "Unreal Engine is a video game engine developed by Epic Games. It has been useful to me but recreationally for several years in the creation of video games or scenes, also to animate 3D objects. Unreal Engine is an engine that I really appreciate and which has been useful to me on many projects, of which here is a presentation."],
    i9: ["Mes Projets Visual Studio Code.",
        "My Visual Studio Code Projects."],
    i10: ["Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS2. Les fonctionnalités incluent la prise en charge du débogage, la mise en évidence de la syntaxe, la complétion intelligente du code, les snippets, la refactorisation du code et Git intégré. Visual Studio Code est un éditeur de code source qui peut être utilisé avec une variété de langages de programmation, notamment Java, JavaScript, Go, Node.js et C++.",
        "Visual Studio Code is an extensible code editor developed by Microsoft for Windows, Linux, and macOS2. Features include debugging support, syntax highlighting, smart code completion, code snippets, code refactoring, and Git built-in. Visual Studio Code is a source code editor that can be used with a variety of programming languages, including Java, JavaScript, Go, Node.js, and C++."],

}
//////////////////////////






//////////////////////////////
/////////////////// MonParcours
var MonParcours={

    img01 : ["img/mon.jpg",
    "img/en/my.jpg"],
    img02 : ["img/parcours.jpg",
    "img/en/experience.jpg"],
    img03 : ['img/personnel1.jpg',
    "img/gris.jpg"],




    i1: ["Formation en école ingénieur au CESI de Toulouse",
        "Training in an engineering school at the CESI in Toulouse"],
    i2: ["Depuis Septembre 2019, je suis une <strong class=\"stro1\">Formation d\'ingénieur</strong> au CESI de Toulouse. C\'est une <strong class=\"stro\">formation d\'ingénieur sur 5 ans</strong> où je me <strong class=\"stro\">spécialise en informatique</strong>. J\'y suit aussi un <strong class=\"stro1\">apprentissage par projets</strong>. Je continue à y développer mon <strong class=\"stro\">travail de groupe</strong> et j\'y acquiére de nouvelles <strong class=\"stro\">compétences techniques et informatiques</strong>.",
        "Since September 2019, I follow a <strong class=\"stro1\">Engineering training</strong> at the CESI in Toulouse. It's an <strong class=\"stro\">five-year engineering training</strong> where I <strong class=\"stro\">majored in computer science</strong>. I also follow <strong class=\"stro1\">project-based learning</strong>. I continue to develop my <strong class=\"stro\">group work</strong> and acquired new <strong class=\"stro\">technical computer skills</strong>. "],

    i3: ["1<sup>ère</sup> année préparatoire école ingénieur",
        "1<sup>st</sup> preparatory year engineering school"],
    i4: ["Durant l\'année scolaire 2018-2019 j\'ai fait une <strong class=\"stro1\">1<sup>ère</sup> année de Cycle Préparatoire Technologique</strong> à l’école d’Ingénieurs (CPTEI A1) du CESI de Toulouse. Cette formation était principalement basée sur l\'électronique embarquée sur un principe <strong class=\"stro1\">d\'apprentissages par projets</strong>. Chaque semaine on a travaillé en groupe sur un projet demandé par un client factice, on trouvait une solution technique et on la présentait à un jury en fin de semaine. J\'y ai développé des compétences en <strong class=\"stro\">travail de groupe</strong> et en <strong class=\"stro\">mathématiques</strong>.<br>",
        "During the 2018-2019 school year I did <strong class=\"stro1\">1<sup>st</sup> year of Technological Preparatory Cycle</strong> at engineering school (CPTEI A1) at CESI in Toulouse. This training was mainly based on embedded electronics based on <strong class=\"stro1\">problem-based learning</strong>. Each week we worked as a group on a project requested by a fictitious client, we found a technical solution and presented it to a jury at the end of the week. I developed skills in <strong class=\"stro\">group work</strong> and <strong class=\"stro\">mathematics</strong>.<br>"],
    i5: ["En fin d\année scolaire je me suis redirigé vers un <strong class=\"stro\">Cycle Préparatoire Intégré (CPI) d\'ingénieur</strong> plus orienté sur l\'informatique et à la même école.",
        "At the end of the school year, I moved on to a <strong class=\"stro\">Integrated Preparatory Cycle (CPI) of engineer</strong> more computer oriented and in the same school."],

    i6: ["Baccalauréat STI2D spécialité SIN avec \"mention BIEN\" au Lycée Antoine Bourdelle de Montauban",
        "Baccalaureate STI2D specialty SIN with \"honors\" at the Antoine Bourdelle high school in Montauban"],
    i7: ["En 2018 j\'ai décroché le diplôme du <strong class=\"stro1\">Baccalauréat STI2D</strong> spécialité SIN(<em>Système d\'information et Numérique</em>) avec <strong class=\"stro1\">mention BIEN</strong>.",
        "In 2018 I graduated from the <strong class=\"stro1\">baccalaureate STI2D</strong> specialty SIN (<em>Information and Digital System</em>) with <strong class=\"stro1\">honors</strong>."],

    i8: ["Formateur Robotique et Programmation à la MJC de Montauban",
        "Trainer in Robotics and Programming at the MJC of Montauban"],
    i9: ["Après 6 ans de robotique on m\'a proposé de former des élèves à la MJC de Montauban. Une après-midi par semaine <strong class=\"stro1\">j\'ai donné des cours de robotique et d\'informatique</strong> à des adhérents de 12 à 17 ans. Ils ont pu apprendre une partie des connaissances que j\'ai acquises sur 6 ans.",
        "After 6 years of robotics, I was offered to train students at the MJC in Montauban. One afternoon a week, <strong class=\"stro1\">I gave robotics and computer lessons</strong> to members aged 12 to 17. They were able to acquire some of the knowledge that I acquired in 6 years."],

    i10: ["Airsoft à Montauban",
        "Airsoft in Montauban"],
    i11: ["Avant les mesures sanitaires de 2020, je participais régulièrement à des Airsofts organisés par MTB82 à Montauban(<em>l\'airsoft est un loisir en groupe où l\'objectif est de simuler des combats avec des armes factices à air comprimé</em>).<br>",
        "Before the health measures of 2020, I regularly participated in Airsofts organized by MTB82 in Montauban (<em>airsoft is a collective leisure activity whose objective is to simulate combat with dummy compressed air weapons</em>).<br>"],
    i12: ["Avec les différentes missions, j\'ai pu développer ma <strong class=\"stro\">communication</strong> et mon <strong class=\"stro1\">esprit d\'équipe</strong>.",
        "Over the course of the missions, I was able to develop my <strong class=\"stro\">communication skills</strong> and my <strong class=\"stro1\">team spirit</strong>."],

    i13: ["Stage au Garage COUSERAND à Montauban",
        "Internship at the COUSERAND garage in Montauban"],
    i14: ["Sur une période de <strong class=\"stro\">15 jours</strong> j\'ai fais un stage au \"garage COUSERAND\" à Montauban. J\'y ai appris la réparation de carrosserie, la préparation et la peinture automobile et la <strong class=\"stro1\">communication clients</strong>.",
        "Over a period of <strong class=\"stro\">15 days</strong> I did an internship at the \"COUSERAND garage\" in Montauban. I learned body repair, car preparation and painting, and <strong class=\"stro1\">customer communication</strong>."],

    i15: ["Stage à la Maison Bonnafous à Montauban",
        "Internship at Maison Bonnafous in Montauban"],
    i16: ["Sur une période de <strong class=\"stro\">15 jours</strong> j\'ai fait un stage d\'entreprise à la \"Maison Bonnafous\" à Montauban. J\'ai suivi mon maitre de stage qui m\'a montré <strong class=\"stro\">l\'organisation des réserves</strong>, la <strong class=\"stro\">préparation des commandes</strong> et la <strong class=\"stro\">livraison client</strong>.",
        "For a period of <strong class=\"stro\">15 days</strong>, I did an internship at the \"Maison Bonnafous\" in Montauban. I followed my tutor who showed me the <strong class=\"stro\">organization of the reserves</strong>, <strong class=\"stro\">preparation of commands</strong> and the <strong class=\"stro\">delivery of the customers</strong>."],

    i17: ["Radio amateur à la MJC de Montauban.",
        "Amateur radio at the MJC of Montauban."],
    i18: ["Intéressé par la notion de <strong class=\"stro\">radio amateur</strong>, j\'ai passé des fins d\'après-midi avec un groupe de radio amateur tenu par mon professeur de robotique. J\'ai pu les observer et apprendre par exemple l\'alphabet international.",
        "Interested in the concept of <strong class=\"stro\">amateur radio</strong>, I spent late afternoons with an amateur radio group led by my robotics teacher. I was able to observe them and learn, for example, the international alphabet."],

    i19: ["Cours de dessin à la MJC de Montauban.",
        "Drawing lessons at the MJC in Montauban."],
    i20: ["Pendant trois ans et trois heures par semaines, j\'ai pris des cours de dessin. J\'y ai appris la gestion des ombres et des proportions.<br>",
        "For three years and three hours a week, I took drawing lessons. I learned there how to manage shadows and proportions.<br>"],
    i21: ["Mais aussi le <strong class=\"stro1\">sens de la critique</strong>, il nous était demandé de donner notre avis sur les réalisations de nos acolytes.",
        "But also the <strong class=\"stro1\">sense of criticism</strong>, we were asked to give our opinion on the achievements of our acolytes."],

    i22: ["Cours de robotique, électronique, informatique à la MJC de Montauban.",
        "Courses in robotics, electronics, and computer science at the MJC in Montauban."],
    i23: ["Passionné depuis très jeune par l\'électronique et la robotique, en 2013 je me suis inscrit à un club de robotique à la MJC (Maison des Jeunes et de la Culture) à Montauban. Pendant trois heures par semaines, j\'ai pu apprendre de nombreux sujets tel que <strong class=\"stro1\">la logique</strong> avec l\'étude des transistors, ou encore  <strong class=\"stro1\">l\'électronique</strong> en approchant le fonctionnement de systèmes sans informatique. Par la suite mon professeur m\'a enseigné le montage de composants et la soudure. Plus tard les premières notions <strong class=\"stro1\">d\'informatique</strong> ont été abordées, à commencer par la programmation <a href=\"arduino.html\" class=\"stroa\">\"Arduino\"</a> et 3D sur <a href=\"openscad.html\" class=\"stroa\">\"OpenSCAD\"</a>. <br>",
        "Passionate about electronics and robotics since my youngest age, in 2013 I joined a robotics club at the MJC (Maison des Jeunes et de la Culture) in Montauban. At the rate of three hours a week, I was able to learn many subjects such as <strong class=\"stro1\">logic</strong> with the study of transistors, or <strong class=\"stro1\">electronics</strong> by approaching the operation of systems without a computer. Subsequently, my teacher taught me component assembly and soldering. Later the first notions of <strong class=\"stro1\">computing</strong> were approached, starting with <a href=\"arduino.html\" class=\"stroa\">\"Arduino\"</a> and 3D programming on <a href=\"openscad.html\" class=\"stroa\">\"OpenSCAD\"</a>. <br>"],
    i24: ["Nous y avons fait plusieurs assemblages (robots télécommandés, maquette d\'ascenseur, clignoteur alternatif de DEL sans programmation, et bien d\'autre ...)",
        "We have made several assemblies (remote-controlled robots, elevator models, alternating LED flashing lights without programming, and many others...)"],


}
//////////////////////////






//////////////////////////////
/////////////////// MonCV
var MonCV={

    img01 : ["img/mon.jpg",
    "img/en/my.jpg"],
    img02 : ["img/cv.jpg",
    "img/en/resume.jpg"],


    i1: ["-> Afficher au format image <-",
        "-> Display in image format <-"],
    a1: ["moncv/CV_4_1_comp.pdf",
    "moncv/CV_4_1en_comp.pdf"],
    

}
//////////////////////////







//////////////////////////////
/////////////////// MonCVimg
var MonCVimg={

    img01 : ["img/mon.jpg",
    "img/en/my.jpg"],
    img02 : ["img/cv.jpg",
    "img/en/resume.jpg"],


    a1: ["moncv/CV_4_1.png",
    "moncv/CV_4_1en.png"],
    

}
//////////////////////////



















////////////////////////////
/////////////////// arduino
var arduino={

    i1: ["Programme d\'une voiture téléguidée.",
        "Programming a remote control car."],
    i2: ["Pour un projet de groupe à mon école d\'ingénieur CESI Toulouse, il nous a été demandé de concevoir une voiture téléguidée. Son châssis et sa direction sont réalisés sur OpenSCAD, et le programme est fait sous Arduino. Le microcontrôleur gère le guidage, la vitesse et la direction.",
        "For a collective project in my engineering school CESI Toulouse, we were asked to design a remote-controlled car. Its chassis and steering are made on OpenSCAD, and the program is made on Arduino. The microcontroller manages guidance, speed, and direction."],
    i3: ["Vous pouvez cliquer ici pour plus de détails. ",
        "You can click here for more details."],
    
    i4: ["Programme de gestion à distance d\'une moto. ",
        "Program for remote management of a motorcycle."],
    i5: ["Captivé par la moto et la programmation Arduino depuis jeune, j\'ai fait un programme et le montage électronique qui permet de gérer à distance une moto. Une application Android envoie des informations à la carte Arduino, elle peut par la suite gérer le contact, le démarrage et le klaxon.",
        "Captivated by motorcycles and Arduino programming from a very young age, I made a program and the electronic assembly that allows the remote management of a motorcycle. An Android application sends information to the Arduino board, it can then manage the ignition, the start, and the horn."],
    i6: ["Voici ici plus de précision sur ce projet. ",
        "Here are more details about this project."],

    i7: ["Programme de sécurité d\'une porte (RFID,bluetooth,Clavier)",
        "Programme de sécurité de porte (RFID, Bluetooth, clavier)"],
    i8: ["Dans le but de réunir plusieurs programmes Arduino, j\'ai réalisé un système de sécurité pour une porte de chambre. Ce système utilise un capteur RFID un module Bluetooth ainsi qu\'un clavier 3*4. Une application Android permet sa gestion à distance.",
        "In order to group together several Arduino programs, I made a security system for a bedroom door. This system uses an RFID sensor, a Bluetooth module, and a 3*4 keypad. An Android application allows its remote management."],
    i9: ["Plus de détails ici.",
        "More details here."],

    

}
//////////////////////////







////////////////////////////
/////////////////// UnrealEngine
var UnrealEngine={

    i1: ["Assemblage d\'une voiture en 3D.(Projet en cours)",
        "Assembly of a 3D car. (Ongoing project)"],
    i2: ["Toutes les pièces de cette voiture sont réalisées sur OpenSCAD et sont toutes indépendantes. Pour les assembler j\'utilise Unreal Engine, les pièces sont faites de manière à pouvoir facilement les interchanger ou juste changer les textures. Mon objectif est de pouvoir la conduire dans un jeu vidéo et avoir la possibilité de changer les pièces ou les textures, par exemple dans un garage présent dans le jeu. ",
        "All parts of this car are made on OpenSCAD and are all independent. To assemble them I use Unreal Engine, the parts are made in such a way that you can easily swap them or just change the textures. My goal is to be able to drive it in a video game and have the possibility to change the parts or the textures, for example in a garage present in the game."],
    i3: ["Ce projet est en cours, et en voici plus de détails. ",
        "This project is ongoing, and here are more details."],
    
    i4: ["Télévision interactive.",
        "Interactive television."],
    i5: ["Durant la création d\'une salle TV sur Unreal Engine, après avoir fait un canapé et quelques meubles je me suis intéressé au téléviseur. Le joueur peut changer de chaine, allumer et éteindre la télé. Il est facile d\'intégrer de nouvelles chaines (il s\'agit d\'une vidéo) grâce à une classe \"chaine\" qui enlève beaucoup de répétitions inutiles dans le programme.",
        "When creating a TV room on Unreal Engine, after making a couch and some furniture, I got interested in TV. The player can change channels and turn the TV on and off. It's easy to embed new strings (it's a video) thanks to a \"channel\" class which removes many unnecessary repetitions in the program."],


    i6: ["Une maison rassemblant plusieurs de mes projets (TV, Meubles, ...)",
        "A house gathering of several of my projects (TV, Furniture, ...)"],
    i7: ["Comme dans une salle d\'exposition, j\'utilise cette maison pour mettre en valeur certaines de mes créations. Nous pouvons y trouver une salle de bain, des toilettes, un salon, des chambres et tous ce qui faut pour vivre dans une maison. Cette maison pourra par la suite être intégrée dans un jeu vidéo où elle sera visitable.",
        "As in a showroom, I use this house to highlight some of my creations. You can find a bathroom, toilet, living room, bedrooms and everything you need to live in a house. This house can then be integrated into a video game where it can be visited."],

    i8: ["Autres projets.",
        "Other projects."],
    i9: ["Voici une sélection d\'autres projets Unreal Engine avec moins de détails.",
        "Here is a selection of other Unreal Engine projects with less detail."],

    

}
//////////////////////////






////////////////////////////
/////////////////// OpenScad
var OpenScad={

    i1: ["Modélisation 3d d\'une voiture. (Projet en cours)  ",
        "3D model of a car. (Ongoing project)"],
    i2: ["Captivé par l\'automobile et passionné par la création 3D, je me suis récemment lancé dans la modélisation d\'une voiture en trois dimensions. Plusieurs logiciels auraient pu être utilisés tel que SolidWorks, FreeCAD ou bien d\'autres... Mais j\'ai toutefois préféré commencer avec OpenSCAD que j\'aime tout particulièrement. Ce projet est en cours, et j\'y travaille parfois dans mon temps libre. ",
        "Captivated by the automobile and passionate about 3D creation, I recently started modeling a car in three dimensions. Several software could have been used such as SolidWorks, FreeCAD, or many others... But I preferred to start with OpenSCAD which I particularly like. This project is ongoing, and I sometimes work on it in my free time."],
    i3: ["Voici plus de détails.",
        "Here are more details."],
    
    i4: ["Casque de vision nocturne binoculaire sur base de Gear VR.",
        "Binocular night vision helmet based on Gear VR."],
    i5: ["Avec OpenSCAD j\'ai réalisé un module adaptable à la place du téléphone sur un Samsung Gear VR. Après avoir retiré les filtres infrarouges des objectifs de deux caméras sport, j\'ai conçu un socle pour accueillir les deux écrans et l\'électronique des caméras. Par la suite toutes les pièces ont été imprimées en 3D puis assemblées.",
        "With OpenSCAD I made an adaptable module in place of the phone on a Samsung Gear VR. After removing the infrared filters from the lenses of two sports cameras, I designed a base to accommodate the two screens and the electronics of the cameras. Subsequently, all the parts were printed in 3D and then assembled."],
    i6: ["Vous pouvez en savoir plus ici.",
        "You can find out more here."],


    i7: ["Châssis et direction d\'une voiture téléguidée.",
        "Chassis and steering of a remote-controlled car."],
    i8: ["Un projet de groupe à mon école d\'ingénieur CESI Toulouse nous demandait de concevoir une voiture téléguidée. Son programme est fait sous Arduino, j\'ai réalisé son châssis et sa direction sur OpenSCAD. Ce projet a été très intéressant, j\'ai donc choisi de le présenter.",
        "A collective project from my engineering school CESI Toulouse asked us to design a remote-controlled car. Its program is made under Arduino, I made its chassis and its direction on OpenSCAD. This project was very interesting, so I chose to present it."],

    i9: ["Autres projets.",
        "Other projects."],
    i10: ["Voici une sélection d\'autres projets Unreal Engine avec moins de détails.",
        "Here is a selection of other Unreal Engine projects with less detail."],

    

}
//////////////////////////






////////////////////////////
/////////////////// VisualStudioCode
var VisualStudioCode={

    i1: ["zz",
        "zz"],
    i2: ["zz",
        "zz"],
    i3: ["zz",
        "zz"],
     

}
//////////////////////////




















/////////////////////////
/////////////////// p1un
var p1un={

    i1: ["Reproduction d\'une voiture en 3 dimensions.",
        "Reproduction of a car in 3 dimensions."],
    i2: ["Ce projet est l\'un de mes favoris. Il utilise OpenSCAD et Unreal Engine dans le but de refaire entièrement un véhicule et l\'intégrer dans un jeu vidéo.",
        "This project is one of my favorites. He uses OpenSCAD and Unreal Engine to completely redo a vehicle and integrate it into a video game."],
    i3: ["OpenSCAD me sert à modéliser toutes les pièces qui constituent la voiture. Elles sont modélisées indépendamment pour pouvoir facilement les démonter et les changer. ",
        "OpenSCAD is used to model all the parts that make up the car. They are modeled independently to be able to disassemble and change them easily."],
    i4: ["Voici quelques exemples de pièces indépendantes : ",
        "Here are some examples of independent parties:"],
    i5: ["Les mesures sont prises sur une Mercedes c200. Les cotes sont à plus ou moins 5mm pour les petits détails et à quelques centimètres près pour les plus grosses pièces. Je note les mesures sur des schémas faits à la main, pour par la suite les reproduire sur OpenSCAD. ",
        "The measurements are taken on a Mercedes c200. The dimensions are plus or minus 5 mm for small details and a few centimeters for large parts. I note the measurements on handmade diagrams, to reproduce them later on OpenSCAD."],
    i6: ["Par la suite je crée les textures et les rajoute aux objets avec des logiciels, souvent j\'utilise \"3D Builder\" que je trouve pratique pour sélectionner les surfaces précisément.",
        "Then I create the textures and add them to the objects with software, often I use \"3D Builder\" which I find useful to precisely select surfaces."],
    i7: ["Voici un exemple d\'évolution d\'une des pièces du projet.",
        "Here is an example of the evolution of one of the parts of the project."],
    i8: ["Certaines pièces ont demandé l’utilisation de fonctions mathématiques, le plus souvent des fonctions carrées mais parfois il est nécessaire de se servir de fonctions trigonométriques. ",
        "Some parts required the use of mathematical functions, most often square functions but it is sometimes necessary to use trigonometric functions."],
    i9: ["Voici un exemple :",
        "Here is an example :"],
    i10: ["Pour finir voici deux images plus précises des détails de l\'intérieur de la voiture :",
        "Finally, here are two more detailed images of the car's interior details:"],   
        
}
//////////////////////////






/////////////////////////
/////////////////// p2ar
var p2ar={

    i1: ["Programme de gestion à distance d\'une moto.",
        "Motorcycle remote management program."],
    i2: ["Ce projet m\'a beaucoup plus, j\'avais déjà fait le même montage sur une autre moto mais avec des relais radio. Celui-ci utilise une carte Arduino des relais et un module Bluetooth.",
        "I really liked this project, I had already done the same assembly on another motorcycle but with radio relays. This uses an Arduino relay board and a Bluetooth module."],
    i3: ["--> Voici un lien qui vous mèneras à une vidéo de démonstration. <--",
        "--> Here is a link that will take you to a demonstration video. <--"],
    i4: ["Avec une application Android nous pouvons nous connecter à la carte Arduino et contrôler les fonctionnalités de la moto comme : Les feux, le démarrage et le klaxon. Le tout est présenté dans une vidéo sur le lien précèdent.",
        "With an Android application, we can connect to the Arduino board and control motorcycle functions such as Lights, start, and horn. The whole thing is presented in a video on the previous link."],
      
}
//////////////////////////







/////////////////////////
/////////////////// p2os
var p2os={

    i1: ["Casque de vision nocturne binoculaire sur base de Gear VR.",
        "Binocular night vision helmet based on Gear VR."],
    i2: ["Ce projet consiste à fabriquer un module à vision nocturne, il est dimensionné pour s\'installer à la place d\'un téléphone sur un casque VR. J\'ai choisi un Gear VR pour la base car il permet de bien régler la distance entre les écrans et les lentilles.",
        "This project consists in manufacturing a night vision module, which is sized to be installed in place of a phone on a VR helmet. I chose a Gear VR for the base because it allows you to adjust the distance between the screens and the lenses well."],
    i3: ["Le module est composé de deux cameras sport avec écrans que j\'ai entièrement démonté et modifié. Son alimentation est apportée par une power bank 5V 2A qui suffit pour supporter la consommation des caméras et des bandeau LED infrarouge. Pour les LED j\'ai choisi une longueur d\'onde de 940nm qui est peu visible à l\'oeil. Je me sers aussi d\'une lampe torche à main de 850nm qui donne une meilleure visibilité.",
        "The module is composed of two sports cameras with screens that I completely disassembled and modified. Its power supply is provided by an external 5V 2A battery sufficient to support the consumption of cameras and infrared LED strips. For the LEDs, I chose a wavelength of 940nm which is not very visible to the eye. I also use a portable 850nm flashlight which gives better visibility."],
    i4: ["Le socle et la boite du module sont imprimés en PLA, et sont tous les deux réalisés sur OpenSCAD.",
        "The module base and box are printed in PLA and both are made on OpenSCAD."],
    i5: ["Pour que les cameras soient sensibles à l\'infrarouge, j\'ai retiré les filtre IR à la base des objectifs. Les caméras et écrans sont identiques pour éviter un maximum de décalages ou de différences de couleurs entre les écrans.",
        "To make the cameras infrared-sensitive, I removed the IR filters at the base of the lenses. The cameras and the screens are identical to avoid a maximum of offsets or color differences between the screens."],
    
}
//////////////////////////







/////////////////////////
/////////////////// p2un
var p2un={

    i1: ["Télévision interactive.",
        "Interactive television."],
    i2: ["Ce projet a été fait dans le but d\'ajouter plus de réalisme dans un jeu vidéo. Le joueur peut interagir avec le téléviseur en l\'allumant ou en changeant de chaines quand il est près de l\'écran.",
        "This project was made with the aim of adding more realism to a video game. The player can interact with the TV by turning it on or changing channels when it is close to the screen."],
    i3: ["--> Voici un lien qui vous mèneras à une vidéo de démonstration. <--",
        "--> Here is a link that will take you to a demonstration video. <--"],
    i4: ["Le niveau du son change selon la distance entre le joueur et la télé. Un projecteur diffuse une lumière d\'ambiance à proximité du téléviseur dans le but de simuler l\'éclairage de l\'écran. Le joueur est détecté grâce à une trigger box à près de la télé.",
        "The sound level changes depending on the distance between the player and the TV. A projector projects ambient light near the TV to simulate screen illumination. The player is detected by a trigger box near the TV."],
    i5: ["Vous pouvez voir sur cette image le projecteur, la trigger box et le haut-parleur :",
        "You can see in this image the projector, the trigger box, and the loudspeaker:"],
    i6: ["Il est facile d\'ajouter plusieurs nouvelles chaines à l\'aide d\'une classe \"chaine\" contenant : La durée du programme, la source audio ainsi que la source vidéo. Deux fonctions permettent d\'allumer/éteindre la télé et changer de chaines.",
        "It is easy to add several new channels using a class \"channel\" containing: The duration of the program, the audio source as well as the video source. Two functions let you turn the TV on/off and change channels."],
    
}
//////////////////////////







/////////////////////////
/////////////////// p3ar
var p3ar={

    i1: ["Programme de sécurité d\'une porte(RFID,bluetooth,Clavier)",
        "Door security program (RFID, Bluetooth, keypad)"],
    i2: ["J\'ai réalisé ce projet dans le but de réunir plusieurs programmes Arduino. C\'est un système de sécurité pour une porte de chambre, il utilise un capteur RFID un module Bluetooth ainsi qu\'un clavier 3*4.",
        "I made this project with the aim of bringing together several Arduino programs. It is a security system for a room door, it uses an RFID sensor, a Bluetooth module, and a 3*4 keypad."],
    i3: ["--> Voici un lien qui vous mèneras à une vidéo de démonstration. <--",
        "--> Here is a link that will take you to a demonstration video. <--"],
    i4: ["Avec une application Android on peut se connecter à la carte Arduino et interagir avec les fonctionnalités de la porte. Il est donc possible à distance (portée Bluetooth) de verrouiller ou déverrouiller la porte ou de gérer l\'alarme. Le capteur RFID lit des badges et des carte RFID en 13.56MHz. Un badge et un code administrateur sont enregistrés dans le programme, ils donnent accès au menu qui permet d\'enregistrer un code ou un badge invité temporaire qui est supprimé après 24 heures. D\'autres badges sont enregistrés mais sans les droits administrateurs.",
        "With an Android app, you can connect to the Arduino board and interact with the door features. It is therefore possible remotely (Bluetooth range) to lock or unlock the door or manage the alarm. The RFID sensor reads RFID tags and cards at 13.56 MHz. A badge and an administrator code are registered in the program, they give access to the menu which allows registering a code, or a temporary guest badge which is deleted after 24 hours. Other badges are registered but without administrator rights."],
    i5: ["Le verrouillage et le déverrouillage se fait avec un loquet entrainé par un servomoteur. Tout est visible dans la vidéo en lien plus haut.",
        "Locking and unlocking are done using a latch driven by a servomotor. It's all visible in the video linked above."],
    
}
//////////////////////////








/////////////////////////
/////////////////// p3os
var p3os={

    i1: ["Voiture téléguidée.",
        "Remote controlled car."],
    i2: ["C\'est un projet à réaliser en groupe à mon l\'école d\'ingenieur CESI de Toulouse. Il nous été demandé de consevoir une voiture téléguidée réspectant des contraintes de vitesse, de poids et de dimentions.",
        "This is a project to be carried out as a group in my engineering school CESI in Toulouse. We were asked to design a remote-controlled car respecting speed, weight, and size constraints."],
    i3: ["--> Voici un lien qui vous mèneras à une vidéo de démonstration. <--",
        "--> Here is a link that will take you to a demonstration video. <--"],
    i4: ["La direction se fait avec un servomoteur guidé par la carte Arduino. La voiture est propulsée par un petit moteur électrique et un enchainement d\'engrenages. Le tout est alimenté par un bloc à piles présent sous la carte.",
        "The control is done with a servo motor guided by the Arduino card. The car is powered by a small electric motor and a chain of gears. Everything is powered by a battery pack present under the card."],
    i5: ["Voici une image de toutes les pièces imprimées de la voiture positionnées sur OpenSCAD: ",
        "Voici une image de toutes les pièces imprimées de la voiture positionnées sur OpenSCAD:"],
    
}
//////////////////////////








/////////////////////////
/////////////////// p3un
var p3un={

    i1: ["Maison rassemblant plusieurs de mes projets (TV, Meubles, ...) ",
        "House bringing together several of my projects (TV, Furniture, ...)"],
    i2: ["Ce projet est une maison qui pourra être utilisée dans plusieurs autres jeux. Elle est constituée de plusieurs pièces qui permettent de présenter plusieurs de mes projets comme : des lits, des écrans, un ordinateur portable de l\'électroménager des meubles et bien d\'autres.",
        "This project is a house that can be used in several other games. It consists of several pieces that allow presenting several of my projects such as beds, screens, laptops, household appliances, furniture, and many others."],
    i3: ["Les tuiles sont des cylindres posés par petit paquets de 2 à 20, ce qui donne un relief et un décalage réaliste entre chaque tuile.",
        "The tiles are cylinders placed in small groups of 2 to 20, which gives relief and a realistic offset between each tile."],
    i4: ["Vous pouvez voir une section de toiture plus précisément : ",
        "You can see a roof section more precisely:"],
    i5: ["La création de plusieurs textures est nécessaire pour revêtir les différentes pièces. Les fenêtres et portes sont réalisées sur OpenSCAD en trois modèles diffèrents, le premier a les deux volets indépendants pour pouvoir les ouvrir ou les fermer, les deux autres modèles sont ouverts ou fermés pour prendre moins de place mémoire. ",
        "The creation of several textures is necessary to coat the different parts. Windows and doors are made on OpenSCAD in three different models, the first has two independent shutters to be able to open or close them, and the other two models are open or closed to occupy less memory space."],
    
}
//////////////////////////









/////////////////////////
/////////////////// p4os
var p4os={

    i1: ["Vous trouverez ici une bibliothèque de plusieurs de mes projets : ",
        "Here you will find a library of many of my projects:"],
    i2: ["Ordinateur portable",
        "Laptop"],
    i3: ["Téléviseur interactif",
        "Interactive TV"],
    i4: ["Télécommande",
        "remote control"],
    i5: ["Boite à crayons",
        "pencil box"],
    i6: ["Sommier de lit",
        "Bedspring"],
    i7: ["Lit complet",
        "Full bed"],
    i8: ["Canapé",
        "Couch"],
    i9: ["Table basse",
        "Low table"],
    i10: ["Table basse",
        "Low table"],
    i11: ["Table ronde",
        "Round table"],
    i12: ["Meuble tv",
        "TV desk"],
    i13: ["Meuble bureau",
        "Office furniture"],
    i14: ["Micro-onde",
        "Microwave"],
    i15: ["Réfrigérateur",
        "Fridge"],
    i16: ["baignoire balnéo",
        "Balneo bath"],
    i17: ["Maison",
        "House"],
    
}
//////////////////////////









/////////////////////////
/////////////////// p4un
var p4un={

    i1: ["Vous trouverez ici une bibliothèque de plusieurs de mes projets : ",
        "Here you will find a library of many of my projects:"],
    i2: ["Ordinateur portable",
        "Laptop"],
    i3: ["Téléviseur interactif",
        "Interactive TV"],
    i4: ["Télécommande",
        "remote control"],
    i5: ["Boite à crayons",
        "pencil box"],
    i6: ["Sommier de lit",
        "Bedspring"],
    i7: ["Lit complet",
        "Full bed"],
    i8: ["Canapé",
        "Couch"],
    i9: ["Table basse",
        "Low table"],
    i10: ["Table basse",
        "Low table"],
    i11: ["Table ronde",
        "Round table"],
    i12: ["Meuble tv",
        "TV desk"],
    i13: ["Meuble bureau",
        "Office furniture"],
    i14: ["Micro-onde",
        "Microwave"],
    i15: ["Réfrigérateur",
        "Fridge"],
    i16: ["baignoire balnéo",
        "Balneo bath"],
    i17: ["Maison",
        "House"],
    
}
//////////////////////////