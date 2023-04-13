
var nombreDeLangues = 2;
var lan= getCookie("Langue");

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
    } else {
        lan=1;
    }
}

function changeLang(l){
    var lan= getCookie("Langue");
    if(lan!=null){
        if(lan>nombreDeLangues-1 || lan<0){
            lan=1;
        }
        document.cookie = "Langue="+l;
        location.reload();
    }else{
        document.cookie = "Langue="+l;
        location.reload();
    }   
}

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

    i1: ["Fr","En"],

    l1: ["Parcours","Experiences"],
    l2: ["CV","Resume"],
    l3: ["Projets","Projects"],
    l4: ["Compétences","Skills"],
    l5: ["Contact","Contact"],

    img01: ["../img/drap/fr/fr.jpg","../img/drap/en/en.png"]
};


var accueil={
    t1:["Sanchez Aldryck - Accueil" , "Sanchez Aldryck - Home page"]
};

var competences={
    t1:["Sanchez Aldryck - Compétences" , "Sanchez Aldryck - Skills"]
};

var contact={
    t1:["Sanchez Aldryck - Contact" , "Sanchez Aldryck - Skills"],

    i1:["Contactez-moi","Contact me"],
    i2:["Téléphone","Phone"],
};

var cv={
    t1:["Sanchez Aldryck - CV" , "Sanchez Aldryck - Resume"],

    i1: ["-> Afficher au format image <-",
        "-> Display in image format <-"],
    a1:["../cv/CV_5_2_Fr.pdf","../cv/CV_5_2_En.pdf"]
};

var parcours={
    t1:["Sanchez Aldryck - Parcours" , "Sanchez Aldryck - Experiences"],

    i1:["Mon Parcours",""],
    i2:["Tout au long de mon parcours, j\'ai eu l\'opportunité de travailler dans différents domaines et d\'acquérir des compétences variées. Au fil des années, j\'ai développé ma passion pour l\'informatique et j\'ai eu la chance de travailler avec des professionnels talentueux qui m\'ont aidé à progresser dans ma carrière. Cette page est une occasion pour moi de partager avec vous mon parcours et mes passions",
        ""],
    
    i3:["Expérience professionnelle",""],

    i4:["Formation en école ingénieur au CESI de Toulouse",""],
    i5:["<strong>[5 ans]</strong> entre 2019 et 2024",""],
    i6:["Depuis septembre 2019, je suis une formation d\'ingénieur du CESI de Toulouse. Cette formation de cinq ans me permet de me spécialiser en informatique tout en bénéficiant d\'un apprentissage par projets. Au cours de cette expérience, j\'ai développé mes compétences techniques et informatiques, ainsi que mes capacités à travailler en équipe.",
        ""],

    i7:["Stage en laboratoire à l\'université d\'Aalborg au Danemark",""],
    i8:["<strong>[5 mois]</strong> entre septembre 2022 et février 2023",""],
    i9:["Création de visualisations interactives pour une application Web afin d\'aider les médecins à évaluer les capacités de patients souffrants de lésions cérébrales avec D3.js, Shiny et R2D3.",
        ""],

    i10:["Stage de développeur informatique Chez OpenIndoor",""],
    i11:["<strong>[4 mois]</strong> entre janvier et avril 2022",""],
    i12:["En milieu de ma 3ème année de formation d\'ingénieur, j\'ai effectué un stage de 4 mois chez OpenIndoor, une entreprise évoluant dans le secteur de la cartographie 3D et interactive d\'intérieur de bâtiments sur une application Web. Ma mission principale était de travailler sur une solution d\'intégration d\'objets 3D sur une carte MapLibre en utilisant Three.js. Par la suite, je me suis concentré sur l\'immersion de l\'utilisateur et j\'ai développé une bibliothèque de fonctionnalités permettant le déplacement en première personne de la caméra. J\'ai ensuite travaillé sur la gestion des collisions pour empêcher la caméra de traverser les murs. À la fin de mon stage, j\'ai été chargé de développer un jeu de tir à la première personne accessible sur le Web en JavaScript, utilisant toutes les bibliothèques développées tout au long de ces 4 mois.",""],
    i13:["Voici un lien vous pérmetant de jouer à ce jeux vidéo : <a href='https://wft3d.openindoor.io/wft02/' target='_blank'>'https://wft3d.openindoor.io/wft02/'</a>",
        ""],

    i14:["Stage de développeur informatique Chez Keyoss",""],
    i15:["<strong>[2 mois]</strong> entre avril et juin 2021",""],
    i16:["Pendant une période de deux mois, entre avril et juin 2021, j\'ai effectué un stage chez Keyoss pour conclure ma deuxième année de préparation intégrée. Keyoss est une entreprise spécialisée dans la communication en pharmacie, offrant une solution de mise en avant des produits dans le but de stimuler les ventes des laboratoires. Ma mission consistait à développer une application Android pour tablette en utilisant JavaScript et React Native, permettant la diffusion automatique de vidéos promotionnelles lors de l\'ouverture de la pharmacie. Le pharmacien avait également la possibilité de choisir une nouvelle vidéo à tout moment. J\'ai également eu l\'opportunité d\'installer des présentoirs directement en pharmacie, améliorant ainsi la communication avec les clients.",
        ""],

    i17:["1ère année préparatoire école ingénieur",""],
    i18:["<strong>[1 an]</strong> entre 2018 et 2019",""],
    i19:["Au cours de l\'année scolaire 2018-2019, j\'ai suivi une première année de Cycle Préparatoire Technologique à l\'école d\'Ingénieurs (CPTEI A1) du CESI de Toulouse. Cette formation m\'a permis de me spécialiser dans l\'électronique embarquée, en suivant une approche pédagogique centrée sur les projets. Chaque semaine, j\'ai travaillé en groupe sur des projets proposés par des clients fictifs, en trouvant des solutions techniques et en les présentant à un jury à la fin de la semaine. Cette expérience m\'a permis de développer mes compétences en travail d\'équipe et en mathématiques. En fin d\'année scolaire, j\'ai décidé de me réorienter vers un Cycle Préparatoire Intégré (CPI) d\'ingénieur plus orienté vers l\'informatique, toujours au sein de la même école.",
        ""],

    i20:["Baccalauréat STI2D spécialité SIN avec mention BIEN au Lycée Antoine Bourdelle de Montauban",""],
    i21:["<strong>[2018]</strong>",""],
    i22:["En 2018, j\'ai obtenu mon Baccalauréat STI2D avec une spécialité en Systèmes d\'Information et Numérique (SIN) avec mention BIEN. Ce diplôme m\'a permis d\'acquérir des connaissances solides en matière de technologies de l\'information et de la communication, ainsi que des compétences pratiques dans la conception, la réalisation et la mise en œuvre de projets techniques.",
        ""],

    i23:["Formateur Robotique et Programmation à la MJC de Montauban",""],
    i24:["<strong>[1 an]</strong> en 2017",""],
    i25:["Après avoir acquis une solide expérience de 6 ans en robotique, j\'ai eu l\'opportunité de transmettre mes connaissances en devenant formateur à la MJC de Montauban. Pendant une après-midi par semaine, j\'ai enseigné la robotique et l\'informatique à des adhérents âgés de 12 à 17 ans. J\'ai partagé les compétences techniques et pédagogiques que j\'ai développées durant mon parcours, afin de les aider à progresser et à découvrir les merveilles de la robotique et de l\'informatique.",
        ""],

    i26:["Airsoft à Montauban",""],
    i27:["<strong>[5 ans]</strong> entre 2016 et 2020",""],
    i28:["Avant les mesures sanitaires de 2020, j\'avais l\'habitude de participer régulièrement à des événements Airsoft organisés par MTB82 à Montauban. L\'Airsoft est un loisir en groupe qui consiste à simuler des combats avec des armes factices à air comprimé. Au cours de ces événements, j\'ai acquis une grande expérience en matière de communication et de travail d\'équipe, car chaque mission nécessite une coordination et une collaboration étroites entre les joueurs pour atteindre les objectifs fixés.",
        ""],

    i29:["Stage au Garage COUSERAND à Montauban",""],
    i30:["<strong>[15 jours]</strong> en 2016",""],
    i31:["Sur une période de 15 jours j\'ai fais un stage au garage COUSERAND à Montauban. J\'y ai appris la réparation de carrosserie, la préparation et la peinture automobile et la communication clients.",
        ""],

    i32:["Stage à la Maison Bonnafous à Montauban",""],
    i33:["<strong>[15 jours]</strong> en 2015",""],
    i34:["J\'ai effectué un stage de deux semaines à l\'entreprise Maison Bonnafous à Montauban, au cours duquel j\'ai suivi mon maître de stage dans l\'organisation des réserves, la préparation des commandes et la livraison aux clients. Cette expérience m\'a permis d\'acquérir des compétences pratiques en logistique et en gestion de stock, ainsi qu\'une meilleure compréhension des enjeux de la satisfaction client.",
        ""],

    i35:["Radio amateur à la MJC de Montauban",""],
    i36:["<strong>[1 an]</strong> entre 2013 et 2014",""],
    i37:["Intéressé par le radioamateurisme, j\'ai passé du temps à observer et apprendre auprès d\'un groupe de radio amateurs encadré par mon professeur de robotique. J\'y ai notamment acquis des connaissances sur l\'alphabet international et d\'autres aspects liés à ce domaine.",
        ""],

    i38:["Cours de dessin à la MJC de Montauban",""],
    i39:["<strong>[3 ans]</strong> entre 2013 et 2015",""],
    i40:["Pendant trois ans, j\'ai suivi des cours de dessin hebdomadaires pendant trois heures par semaine. Cette expérience m\'a permis de développer mes compétences en gestion des ombres et des proportions, ainsi que d\'acquérir un sens critique plus affûté. En effet, nous étions encouragés à donner notre avis constructif sur les réalisations de nos camarades, ce qui nous a permis d\'améliorer notre propre technique et notre capacité à évaluer le travail des autres.",
        ""],

    i41:["Cours de robotique, électronique, informatique à la MJC de Montauban",""],
    i42:["<strong>[6 ans+]</strong> entre 2013 et 2018",""],
    i43:["Depuis mon plus jeune âge, je suis passionné par l\'électronique et la robotique, ce qui m\'a conduit à m\'inscrire en 2013 dans un club de robotique à la MJC (Maison des Jeunes et de la Culture) de Montauban. Pendant trois heures par semaine, j\'ai eu l\'opportunité d\'apprendre divers sujets tels que la logique et l\'étude des transistors, ainsi que l\'électronique en approchant le fonctionnement de systèmes sans informatique. Par la suite, mon professeur m\'a enseigné le montage de composants électroniques et la soudure. J\'ai également abordé les premières notions d\'informatique, notamment la programmation Arduino et la modélisation 3D avec OpenSCAD. Nous avons réalisé plusieurs projets intéressants, tels que des robots télécommandés, une maquette d\'ascenseur, un clignoteur alternatif de DEL sans programmation, et bien d\'autres encore.",
    ""]
};

var projets={
    t1:["Sanchez Aldryck - Projets" , "Sanchez Aldryck - Projects"],
    info1:["En savoir plus",""],

    i1:["jgjkngjkdghdkjghkjd",""],
    i2:["jgjkngjkdghdkjghkjd",""],

    i3:["Projets 3D",""],

    a1:["../pages/projets3d/p1/p1.html","../pages/projetEnCours.html"],
    i4:["Modélisation d\'une voiture en 3D",""],
    i5:["Fasciné par l\'industrie automobile et passionné par la modélisation 3D, j\'ai commencé à concevoir une voiture en trois dimensions. Bien qu\'il y ait eu plusieurs choix de logiciels disponibles, tels que SolidWorks, FreeCAD, ou autres, j\'ai opté pour OpenSCAD, un logiciel que j\'affectionne particulièrement. Actuellement, ce projet est toujours en cours, et j\'y travaille durant mes temps libres.",
        ""],

    a2:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i6:["Casque de vision nocturne binoculaire sur base de Gear VR",""],
    i7:["Avec OpenSCAD j\'ai réalisé un module adaptable à la place du téléphone sur un Samsung Gear VR. Après avoir retiré les filtres infrarouges des objectifs de deux caméras sport, j\'ai conçu un socle pour accueillir les deux écrans et l\'électronique des caméras. Par la suite toutes les pièces ont été imprimées en 3D puis assemblées.",
        ""],

    a3:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i8:["Châssis et direction d\'une voiture téléguidée.",""],
    i9:["Un projet de groupe à mon école d\'ingénieur CESI Toulouse nous demandait de concevoir une voiture téléguidée. Son programme est fait sous Arduino, j\'ai réalisé son châssis et sa direction sur OpenSCAD. Ce projet a été très intéressant, j\'ai donc choisi de le présenter.",
        ""],

    i10:["Projets logiciels",""],

    a4:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i11:["Logiciel de cryptage et décryptage de message",""],
    i12:["Afin de mieux appréhender le domaine de la cryptographie, j\'ai réalisé un programme de chiffrement et de déchiffrement selon un protocole que je voulais faire entièrement moi-même. L\'application sert à chiffrer certains fichiers ou à communiquer via le système de messagerie en ligne.",
        ""],

    a5:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i13:["",""],
    i14:["",""],

    i15:["Projets web",""],

    a6:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i16:["Création d\'un site web personnel",""],
    i17:["En cours de remplissage",""],

    a7:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i18:["Messagerie en ligne",""],
    i19:["Page en cours de création","Page under construction"],

    a8:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i20:["Jeux vidéo de carte multijoueur en ligne",""],
    i21:["Page en cours de création","Page under construction"],

    a9:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i22:["Jeux vidéo de tir à la première personne",""],
    i23:["Page en cours de création","Page under construction"],
};

var projetEnCours={

    i1:["Page en cours de création","Page under construction"],
    i2:["Retour aux projets","Back to projects"]
}

var footer={

    i1: ["Réseaux sociaux","Social networks"],

    i2: ["Contact","Contact"],
    i3: ["Toulouse, France","Toulouse, France"],
    i4: ["Téléphone : +33 648 333 332","Phone : +33 648 333 332"],

    i5: ["Navigation","Navigation"],
    l1: ["Accueil","Home page"],

    i6: ["&copy; 2023 - Sanchez Aldryck - Tous droits réservés","&copy; 2023 - Sanchez Aldryck - All rights reserved"],
    
};

