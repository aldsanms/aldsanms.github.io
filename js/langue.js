
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
    t1:["Sanchez Aldryck - Accueil" , "Sanchez Aldryck - Home page"],

    i1:["Étudiant en 4<sup>éme</sup> année d\'école d\'ingénieur informatique",
        "Student in 4<sup>th</sup> year of computer engineering school"],
    i2:["Bonjour et bienvenue sur mon site de présentation. Je suis heureux de vous accueillir et de vous permettre d\'en apprendre davantage sur moi. Ce site a été créé pour vous fournir une vue d\'ensemble de mon parcours, mes réalisations ainsi que mes projets passés et actuels. Vous trouverez également une section dédiée à mon CV pour vous donner une meilleure idée de mes compétences et expériences. Enfin, une page de contact est disponible si vous souhaitez me poser des questions ou discuter de projets potentiels.",
        "Hello and welcome to my presentation site. I am pleased to welcome you and allow you to learn more about me. This site was created to provide you with an overview of my background, my achievements and my past and current projects. You will also find a section dedicated to my CV to give you a better idea of my skills and experiences. Finally, a contact page is available if you want to ask me questions or discuss potential projects."],
    i3:["N\'hésitez pas à parcourir mon site et à me contacter si vous avez des questions ou des commentaires.",
        "Do not hesitate to browse my site and contact me if you have any questions or comments."]
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
    a1:["../cv/CV_5_2_Fr.pdf","../cv/CV_5_2_Fr.pdf"],
    img1:["../cv/CV_5_2_Fr.png","../cv/CV_5_2_Fr.png"]
};

var parcours={
    t1:["Sanchez Aldryck - Parcours" , "Sanchez Aldryck - Experiences"],

    i1:["Mon Parcours","My experiences"],
    i2:["Tout au long de mon parcours, j\'ai eu l\'opportunité de travailler dans différents domaines et d\'acquérir des compétences variées. Au fil des années, j\'ai développé ma passion pour l\'informatique et j\'ai eu la chance de travailler avec des professionnels talentueux qui m\'ont aidé à progresser dans ma carrière. Cette page est une occasion pour moi de partager avec vous mon parcours et mes passions",
        "Throughout my career, I have had the opportunity to work in different fields and acquire a variety of skills. Over the years, I have developed my passion for computer science and have been fortunate enough to work with talented professionals who have helped me progress in my career. This page is an opportunity for me to share with you my journey and my passions"],
    
    i3:["Expérience professionnelle","Professional experience"],

    i4:["Formation en école ingénieur au CESI de Toulouse","Training in an engineering school at the CESI in Toulouse"],
    i5:["<strong>[5 ans]</strong> entre 2019 et 2024","<strong>[5 years]</strong> between 2019 and 2024"],
    i6:["Depuis septembre 2019, je suis une formation d\'ingénieur du CESI de Toulouse. Cette formation de cinq ans me permet de me spécialiser en informatique tout en bénéficiant d\'un apprentissage par projets. Au cours de cette expérience, j\'ai développé mes compétences techniques et informatiques, ainsi que mes capacités à travailler en équipe.",
        "Since September 2019, I have followed an Engineering training at CESI in Toulouse. It is a five-year engineering training where I majored in computer science. I have followed an engineering treding with project-based learning. I continue to develop my group work and I have acquired new technical computer skills."],

    i7:["Stage en laboratoire à l\'université d\'Aalborg au Danemark","Laboratory internship at Aalborg University in Denmark"],
    i8:["<strong>[5 mois]</strong> entre septembre 2022 et février 2023","<strong>[5 months]</strong> between September 2022 and February 2023"],
    i9:["Création de visualisations interactives pour une application Web afin d\'aider les médecins à évaluer les capacités de patients souffrants de lésions cérébrales avec D3.js, Shiny et R2D3.",
        "Creating interactive visualizations for a web-based application to help physicians assess the capabilities of brain injury patients with D3.js, Shiny and R2D3."],

    i10:["Stage de développeur informatique Chez OpenIndoor","IT developer internship at OpenIndoor"],
    i11:["<strong>[4 mois]</strong> entre janvier et avril 2022","<strong>[4 months]</strong> between January and April 2022"],
    i12:["En milieu de ma 3ème année de formation d\'ingénieur, j\'ai effectué un stage de 4 mois chez OpenIndoor, une entreprise évoluant dans le secteur de la cartographie 3D et interactive d\'intérieur de bâtiments sur une application Web. Ma mission principale était de travailler sur une solution d\'intégration d\'objets 3D sur une carte MapLibre en utilisant Three.js. Par la suite, je me suis concentré sur l\'immersion de l\'utilisateur et j\'ai développé une bibliothèque de fonctionnalités permettant le déplacement en première personne de la caméra. J\'ai ensuite travaillé sur la gestion des collisions pour empêcher la caméra de traverser les murs. À la fin de mon stage, j\'ai été chargé de développer un jeu de tir à la première personne accessible sur le Web en JavaScript, utilisant toutes les bibliothèques développées tout au long de ces 4 mois.",
        "In the middle of my 3<sup>rd</sup> year of engineering training, I did a 4-month internship in the company OpenIndoor which evolves in the sector of 3D and interactive mapping of the interior of buildings directly on a Web application. My main mission was to work on a solution for integrating 3D objects on a MapLibre map using Three JS. Later I focused on user immersion and developed a library of features to move the camera in 1<sup>st</sup> person. Then I worked on collisions to prevent the camera from going through walls. At the end of my internship, I was asked to develop a first person shooter video game accessible on the web in Javascript which uses all the libraries developped during these 4 months."],
    i13:["Voici un lien vous pérmetant de jouer à ce jeux vidéo : <a href='https://wft3d.openindoor.io/wft02/' target='_blank'>'https://wft3d.openindoor.io/wft02/'</a>",
    "Here is a link to play the video games : <a href='https://wft3d.openindoor.io/wft02/' target='_blank'>'https://wft3d.openindoor.io/wft02/'</a>"],

    i14:["Stage de développeur informatique Chez Keyoss","IT developer internship at Keyoss"],
    i15:["<strong>[2 mois]</strong> entre avril et juin 2021","<strong>[2 months]</strong> between April and June 2021"],
    i16:["Pendant une période de deux mois, entre avril et juin 2021, j\'ai effectué un stage chez Keyoss pour conclure ma deuxième année de préparation intégrée. Keyoss est une entreprise spécialisée dans la communication en pharmacie, offrant une solution de mise en avant des produits dans le but de stimuler les ventes des laboratoires. Ma mission consistait à développer une application Android pour tablette en utilisant JavaScript et React Native, permettant la diffusion automatique de vidéos promotionnelles lors de l\'ouverture de la pharmacie. Le pharmacien avait également la possibilité de choisir une nouvelle vidéo à tout moment. J\'ai également eu l\'opportunité d\'installer des présentoirs directement en pharmacie, améliorant ainsi la communication avec les clients.",
        "From April to June 2021 over a period of 2 months, I did an internship at Keyoss for the end of my 2<sup>nd</sup> year of integrated preparation. Keyoss is evolving in the field of pharmacy communication and offers a product referencing solution with the aim of boosting laboratory sales. My mission was to develop an Android application for tablet in Javascript with React Native which should automatically play promotional videos during the opening phase of the pharmacy. The pharmacist also has the option of choosing a new video at any time. I was also able to install displays directly in the pharmacy, improving my communication with the customer."],

    i17:["1ère année préparatoire école ingénieur","1<sup>st</sup> preparatory year engineering school"],
    i18:["<strong>[1 an]</strong> entre 2018 et 2019","<strong>[1 Year]</strong> between 2018 and 2019"],
    i19:["Au cours de l\'année scolaire 2018-2019, j\'ai suivi une première année de Cycle Préparatoire Technologique à l\'école d\'Ingénieurs (CPTEI A1) du CESI de Toulouse. Cette formation m\'a permis de me spécialiser dans l\'électronique embarquée, en suivant une approche pédagogique centrée sur les projets. Chaque semaine, j\'ai travaillé en groupe sur des projets proposés par des clients fictifs, en trouvant des solutions techniques et en les présentant à un jury à la fin de la semaine. Cette expérience m\'a permis de développer mes compétences en travail d\'équipe et en mathématiques. En fin d\'année scolaire, j\'ai décidé de me réorienter vers un Cycle Préparatoire Intégré (CPI) d\'ingénieur plus orienté vers l\'informatique, toujours au sein de la même école.",
        "During the 2018-2019 school year, I did the 1<sup>st</sup> year of Technological Preparatory Cycle at engineering school (CPTEI A1) of CESI in Toulouse. This training was mainly based on embedded electronics with problem-based learning. Each week we worked in group on a project requested by a fictitious client, we found a technical solution and presented it to a jury at the end of the project. I developped skills in group work and mathematics. At the end of the school year, I moved on to a Integrated Preparatory Cycle (CPI) of engineer more computer oriented and in the same school."],

    i20:["Baccalauréat STI2D spécialité SIN avec mention BIEN au Lycée Antoine Bourdelle de Montauban",
        "Baccalaureate STI2D specialty SIN with honors at the Antoine Bourdelle high school in Montauban"],
    i21:["<strong>[2018]</strong>","<strong>[2018]</strong>"],
    i22:["En 2018, j\'ai obtenu mon Baccalauréat STI2D avec une spécialité en Systèmes d\'Information et Numérique (SIN) avec mention BIEN. Ce diplôme m\'a permis d\'acquérir des connaissances solides en matière de technologies de l\'information et de la communication, ainsi que des compétences pratiques dans la conception, la réalisation et la mise en œuvre de projets techniques.",
        "In 2018, I graduated from the baccalaureate STI2D specialty SIN (<em>Information and Digital System</em>) with honors."],

    i23:["Formateur Robotique et Programmation à la MJC de Montauban","Trainer in Robotics and Programming at the MJC of Montauban"],
    i24:["<strong>[1 an]</strong> en 2017","<strong>[1 Year]</strong> in 2017"],
    i25:["Après avoir acquis une solide expérience de 6 ans en robotique, j\'ai eu l\'opportunité de transmettre mes connaissances en devenant formateur à la MJC de Montauban. Pendant une après-midi par semaine, j\'ai enseigné la robotique et l\'informatique à des adhérents âgés de 12 à 17 ans. J\'ai partagé les compétences techniques et pédagogiques que j\'ai développées durant mon parcours, afin de les aider à progresser et à découvrir les merveilles de la robotique et de l\'informatique.",
        "After 6 years of robotics, I was offered to train students at the MJC in Montauban. One afternoon a week, I gave robotics and computer lessons to members aged 12 to 17. They were able to acquire some of the knowledge that I acquired in 6 years."],

    i26:["Airsoft à Montauban","Airsoft in Montauban"],
    i27:["<strong>[5 ans]</strong> entre 2016 et 2020","<strong>[5 years]</strong> between 2016 and 2020"],
    i28:["Avant les mesures sanitaires de 2020, j\'avais l\'habitude de participer régulièrement à des événements Airsoft organisés par MTB82 à Montauban. L\'Airsoft est un loisir en groupe qui consiste à simuler des combats avec des armes factices à air comprimé. Au cours de ces événements, j\'ai acquis une grande expérience en matière de communication et de travail d\'équipe, car chaque mission nécessite une coordination et une collaboration étroites entre les joueurs pour atteindre les objectifs fixés.",
        "Before the health measures of 2020, I regularly participated in Airsofts organized by MTB82 in Montauban (<em>airsoft is a collective leisure activity whose objective is to simulate combat with dummy compressed air weapons</em>).<br>Over the course of the missions, I was able to develop my communication skills and my team spirit."],

    i29:["Stage au Garage COUSERAND à Montauban","Internship at the COUSERAND garage in Montauban"],
    i30:["<strong>[15 jours]</strong> en 2016","<strong>[15 days]</strong> in 2016"],
    i31:["Sur une période de 15 jours j\'ai fais un stage au garage COUSERAND à Montauban. J\'y ai appris la réparation de carrosserie, la préparation et la peinture automobile et la communication clients.",
        "Over a period of 15 days, I did an internship at the COUSERAND garage in Montauban. I learned body repair, car preparation and painting, and customer communication."],

    i32:["Stage à la Maison Bonnafous à Montauban","Internship at Maison Bonnafous in Montauban"],
    i33:["<strong>[15 jours]</strong> en 2015","<strong>[15 days]</strong> in 2015"],
    i34:["J\'ai effectué un stage de deux semaines à l\'entreprise Maison Bonnafous à Montauban, au cours duquel j\'ai suivi mon maître de stage dans l\'organisation des réserves, la préparation des commandes et la livraison aux clients. Cette expérience m\'a permis d\'acquérir des compétences pratiques en logistique et en gestion de stock, ainsi qu\'une meilleure compréhension des enjeux de la satisfaction client.",
        "For a period of 15 days, I did an internship at the Maison Bonnafous in Montauban. I followed my tutor who showed me the organization of the reserves, preparation of commands and the delivery of the customers."],

    i35:["Radio amateur à la MJC de Montauban","Amateur radio at the MJC of Montauban"],
    i36:["<strong>[1 an]</strong> entre 2013 et 2014","<strong>[1 year]</strong> between 2013 and 2014"],
    i37:["Intéressé par le radioamateurisme, j\'ai passé du temps à observer et apprendre auprès d\'un groupe de radio amateurs encadré par mon professeur de robotique. J\'y ai notamment acquis des connaissances sur l\'alphabet international et d\'autres aspects liés à ce domaine.",
        "Interested in the concept of amateur radio, I spent late afternoons with an amateur radio group led by my robotics teacher. I was able to observe them and learn, for example, the international alphabet."],

    i38:["Cours de dessin à la MJC de Montauban","Drawing lessons at the MJC in Montauban"],
    i39:["<strong>[3 ans]</strong> entre 2013 et 2015","<strong>[3 years]</strong> between 2013 and 2015"],
    i40:["Pendant trois ans, j\'ai suivi des cours de dessin hebdomadaires pendant trois heures par semaine. Cette expérience m\'a permis de développer mes compétences en gestion des ombres et des proportions, ainsi que d\'acquérir un sens critique plus affûté. En effet, nous étions encouragés à donner notre avis constructif sur les réalisations de nos camarades, ce qui nous a permis d\'améliorer notre propre technique et notre capacité à évaluer le travail des autres.",
        "For three years and three hours a week, I took drawing lessons. I learned there how to manage shadows and proportions but also the sense of criticism. We were asked to give our opinion on the achievements of our acolytes."],

    i41:["Cours de robotique, électronique, informatique à la MJC de Montauban","Courses in robotics, electronics, and computer science at the MJC in Montauban"],
    i42:["<strong>[6 ans+]</strong> entre 2013 et 2018","<strong>[6 years+]</strong> between 2013 and 2018"],
    i43:["Depuis mon plus jeune âge, je suis passionné par l\'électronique et la robotique, ce qui m\'a conduit à m\'inscrire en 2013 dans un club de robotique à la MJC (Maison des Jeunes et de la Culture) de Montauban. Pendant trois heures par semaine, j\'ai eu l\'opportunité d\'apprendre divers sujets tels que la logique et l\'étude des transistors, ainsi que l\'électronique en approchant le fonctionnement de systèmes sans informatique. Par la suite, mon professeur m\'a enseigné le montage de composants électroniques et la soudure. J\'ai également abordé les premières notions d\'informatique, notamment la programmation Arduino et la modélisation 3D avec OpenSCAD. Nous avons réalisé plusieurs projets intéressants, tels que des robots télécommandés, une maquette d\'ascenseur, un clignoteur alternatif de DEL sans programmation, et bien d\'autres encore.",
    "Passionate about electronics and robotics since my youngest age, I joined in 2013 a robotics club at the MJC (Maison des Jeunes et de la Culture) in Montauban. Three hours a week, I was able to learn many subjects such as logic with the study of transistors or electronics by approaching the operation of systems without a computer. Subsequently, my teacher taught me component assembly and welding. Later the first notions of computing were approached, starting with Arduino and 3D programming on OpenSCAD. We have made several assemblies (remote-controlled robots, elevator models, alternating LED flashing lights without programming, and many others...)"]
};

var projets={
    t1:["Sanchez Aldryck - Projets" , "Sanchez Aldryck - Projects"],
    info1:["En savoir plus","Find out more"],

    i1:["Mes Projets","My Projects"],
    i2:["Bienvenue sur ma page de projets ! Au fil de mes études et de mes expériences professionnelles et personnelles, j'ai eu l'opportunité de travailler sur de nombreux projets passionnants. Que ce soit dans le domaine de l'informatique, de l'électronique, de la mécanique ou encore du design, j'ai toujours été animé par la curiosité et l'envie d'apprendre de nouvelles choses. Sur cette page, je vous invite à découvrir une sélection de mes réalisations. J'espère que ces projets vous inspireront et vous donneront un aperçu de mes compétences et de mon savoir-faire.",
        "Welcome to my project page! Throughout my studies and my professional and personal experiences, I have had the opportunity to work on many exciting projects. Whether in the field of computing, electronics, mechanics or design, I have always been driven by curiosity and the desire to learn new things. On this page, I invite you to discover a selection of my achievements. I hope these projects will inspire you and give you a glimpse of my skills and expertise."],

    i3:["Projets 3D","3D Projects"],

    a1:["../pages/projets3d/voiture3d/voiture3d.html","../pages/projets3d/voiture3d/voiture3d.html"],
    i4:["Modélisation d\'une voiture en 3D","Modeling a car in 3D"],
    i5:["Fasciné par l\'industrie automobile et passionné par la modélisation 3D, j\'ai commencé à concevoir une voiture en trois dimensions. Bien qu\'il y ait eu plusieurs choix de logiciels disponibles, tels que SolidWorks, FreeCAD, ou autres, j\'ai opté pour OpenSCAD, un logiciel que j\'affectionne particulièrement. Actuellement, ce projet est toujours en cours, et j\'y travaille durant mes temps libres.",
        "Fascinated by the automotive industry and passionate about 3D modeling, I started to design a car in three dimensions. Although there have been several choices of software available, such as SolidWorks, FreeCAD, or others, I’ve opted for OpenSCAD, a software I particularly like. Currently, this project is still ongoing, and I’m working on it on my own time."],

    a2:["../pages/projets3d/casqueVisionNoc/casqueVr.html","../pages/projets3d/casqueVisionNoc/casqueVr.html"],
    i6:["Casque de vision nocturne binoculaire sur base de Gear VR","Gear VR based binocular night vision headset"],
    i7:["Avec OpenSCAD j\'ai réalisé un module adaptable à la place du téléphone sur un Samsung Gear VR. Après avoir retiré les filtres infrarouges des objectifs de deux caméras sport, j\'ai conçu un socle pour accueillir les deux écrans et l\'électronique des caméras. Par la suite toutes les pièces ont été imprimées en 3D puis assemblées.",
        "With OpenSCAD I made an adaptable module instead of the phone on a Samsung Gear VR. After removing the infrared filters from the lenses of two sport cameras, I designed a base to accommodate both screens and the cameras electronics. Then all the parts were 3D printed and assembled."],

    a3:["../pages/projets3d/chassisVoiture/voitureRadio.html","../pages/projets3d/chassisVoiture/voitureRadio.html"],
    i8:["Châssis et direction d\'une voiture téléguidée.","Chassis and steering of a remotely controlled car."],
    i9:["Un projet de groupe à mon école d\'ingénieur CESI Toulouse nous demandait de concevoir une voiture téléguidée. Son programme est fait sous Arduino, j\'ai réalisé son châssis et sa direction sur OpenSCAD. Ce projet a été très intéressant, j\'ai donc choisi de le présenter.",
        "A group project at my engineering school CESI Toulouse asked us to design a remotely controlled car. Its program is made under Arduino, I realized its chassis and steering on OpenSCAD. This project was very interesting, so I chose to present it."],

    i10:["Projets logiciels","Software projects"],

    a4:["../pages/projetsLogiciels/cryptDecrypt/cryptDecrypt.html","../pages/projetsLogiciels/cryptDecrypt/cryptDecrypt.html"],
    i11:["Logiciel de cryptage et décryptage de message","Message encryption and decryption software"],
    i12:["Afin de mieux appréhender le domaine de la cryptographie, j\'ai réalisé un programme de chiffrement et de déchiffrement selon un protocole que je voulais faire entièrement moi-même. L\'application sert à chiffrer certains fichiers ou à communiquer via le système de messagerie en ligne.",
        "In order to better understand the field of cryptography, I realized an encryption and decryption program according to a protocol that I wanted to make entirely myself. The application is used to encrypt certain files or communicate via the online mail system."],

    a5:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i13:["",""],
    i14:["",""],

    i15:["Projets web","Web projects"],

    a6:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i16:["Création d\'un site web personnel","Creating a personal website"],
    i17:["En cours de remplissage","Page under construction"],

    a7:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i18:["Messagerie en ligne","Online messaging"],
    i19:["Page en cours de création","Page under construction"],

    a8:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i20:["Jeux vidéo de carte multijoueur en ligne","Online multiplayer card video games"],
    i21:["Page en cours de création","Page under construction"],

    a9:["../pages/projetEnCours.html","../pages/projetEnCours.html"],
    i22:["Jeux vidéo de tir à la première personne","First Person Shooting Video Games"],
    i23:["Page en cours de création","Page under construction"],

    i24:["Projets Arduino","Arduino projects"],

    a10:["../pages/projetsArduino/moto/moto.html","../pages/projetsArduino/moto/moto.html"],
    i25:["Programme de gestion à distance d'une moto","Motorcycle Remote Management Program"],
    i26:["Captivé par la moto et la programmation Arduino depuis jeune, j'ai fait un programme et le montage électronique qui permet de gérer à distance une moto. Une application Android envoie des informations à la carte Arduino, elle peut par la suite gérer le contact, le démarrage et le klaxon.",
        "Captivated by motorcycles and Arduino programming from a very young age, I made a program and the electronic assembly that allows the remote management of a motorcycle. An Android application sends information to the Arduino board, it can then manage the ignition, the start, and the horn."],

    a11:["../pages/projetsArduino/porte/porte.html","../pages/projetsArduino/porte/porte.html"],
    i27:["Programme de sécurité de porte (RFID, Bluetooth, clavier)","Door security program (RFID, Bluetooth, keyboard)"],
    i28:["Dans le but de réunir plusieurs programmes Arduino, j'ai réalisé un système de sécurité pour une porte de chambre. Ce système utilise un capteur RFID un module Bluetooth ainsi qu'un clavier 3*4. Une application Android permet sa gestion à distance.",
        "In order to group together several Arduino programs, I made a security system for a bedroom door. This system uses an RFID sensor, a Bluetooth module, and a 3*4 keypad. An Android application allows its remote management."],

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

