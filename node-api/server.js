const express = require('express');
const cors = require('cors');

let corsOptions = {
    oriugin: '*'
};

const app = express();

app.use(cors(corsOptions));

const port = 3000;
app.set('port', port);
app.listen(port, function () {
    console.log("API running on port: " + port);
});

app.get("/players", function (req, res) {
    console.log("request get on /players");
    res.send(players);
});

app.get('/players/:id', function (req, res) {
    console.log("request get on /players/:id");
    let id = req.params.id; //on recupere l'id present en bout de route
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i]; // on recupere à chaque itération l'un des joueur du tableau
        if (currentPlayer.id == id) {
            res.send(currentPlayer); // si l'id du joueur correspond à l'id passé en bout de route, on réponse en envoyant le joueur
            break; // on sort de la boucle
        }
    }

    // si on est ici c'est qu'on n'a pas trouvé le joueur, donc on répond avec une erreur 404
    res.statusMessage = 'Player not found'; // on prépare le message qui sera envoyé au client
    res.status(404).end(); // on envoi l aréponse avec l'erreur 404 et le message d'erreur défini à la ligne du dessus
});

app.get("/posts", function (req, res) {
    console.log("request get on /posts");
    res.send(posts);
});

users = [{
        "id": "5eaecda0cba960e77fc9f205",
        "age": 29,
        "name": "Lesa Clark",
        "gender": "female",
        "company": "VINCH",
        "email": "lesaclark@trollery.com",
        "phone": "+1 (945) 413-2529",
        "latitude": -15.421613,
        "longitude": 101.274002
    },
    {
        "id": "5eaecda01070c34da892e9e5",
        "age": 34,
        "name": "Marsha Hansen",
        "gender": "female",
        "company": "VINCH",
        "email": "marshahansen@singavera.com",
        "phone": "+1 (909) 508-3857",
        "latitude": -44.617836,
        "longitude": 2.408834
    },
    {
        "id": "5eaecda01865876300aada64",
        "age": 28,
        "name": "Peck Johnson",
        "gender": "male",
        "company": "VINCH",
        "email": "peckjohnson@talkola.com",
        "phone": "+1 (964) 454-3417",
        "latitude": -75.566328,
        "longitude": 33.309041
    },
    {
        "id": "5eaecda0d132e8d506850631",
        "age": 30,
        "name": "Myrna Case",
        "gender": "female",
        "company": "VINCH",
        "email": "myrnacase@vinch.com",
        "phone": "+1 (915) 517-3973",
        "latitude": 20.926118,
        "longitude": 3.366088
    },
    {
        "id": "5eaecda010a868687280ce28",
        "age": 24,
        "name": "Kelli Alston",
        "gender": "female",
        "company": "FURNIGEER",
        "email": "kellialston@applidec.com",
        "phone": "+1 (957) 410-2377",
        "latitude": -50.476537,
        "longitude": -175.994997
    },
    {
        "id": "5eaecda0b40f4682d97117fb",
        "age": 31,
        "name": "Bates Johnston",
        "gender": "male",
        "company": "FURNIGEER",
        "email": "batesjohnston@earwax.com",
        "phone": "+1 (917) 583-3341",
        "latitude": -78.69636,
        "longitude": -0.632594
    },
    {
        "id": "5eaecda099f2a9c328ec3603",
        "age": 25,
        "name": "Mariana Monroe",
        "gender": "female",
        "company": "FURNIGEER",
        "email": "marianamonroe@furnigeer.com",
        "phone": "+1 (975) 514-2722",
        "latitude": 15.230689,
        "longitude": 131.753915
    },
    {
        "id": "5eaecda0fd696b8f0e33a6db",
        "age": 29,
        "name": "Letitia Andrews",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "letitiaandrews@parcoe.com",
        "phone": "+1 (858) 565-3095",
        "latitude": -86.176034,
        "longitude": -153.088186
    },
    {
        "id": "5eaecda0d01513c7cbbcffa4",
        "age": 37,
        "name": "Dina Buchanan",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "dinabuchanan@uniworld.com",
        "phone": "+1 (930) 542-2668",
        "latitude": -22.313357,
        "longitude": 149.910409
    },
    {
        "id": "5eaecda0ba6003ab1113ceac",
        "age": 30,
        "name": "Lottie Walters",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "lottiewalters@isologica.com",
        "phone": "+1 (956) 488-3898",
        "latitude": 23.420905,
        "longitude": -143.389375
    }
]
players = [{
        "id": "1",
        "firstName": "Dario",
        "lastName": "Benedetto",
        "age": 29,
        "position": "Attaquant",
        "number": "9",
        "image": "https://www.om.fr/sites/default/files/2019-08/BENEDETTO.png",
        "Biography": "Né le 17 mai 1990 à Berazategui en Argentine, Benedetto se passionne pour le football dès le plus jeune âge. À 12 ans, sa mère décède d’un AVC. Il arrête alors le football pendant quelques années. Mais il reprend rapidement sa passion et en 2007, Darío, alors âgé de 17 ans, fait ses débuts avec l’équipe première d’Arsenal de Sarandí, formation dans laquelle il reste jusqu’en 2013. En cinquante matches joués avec le club argentin, il marque neuf buts et aura connu deux prêts durant son passage. Entre 2009 et 2011, il est prêté à la Defensa y Justicia et à Gimnasia Jujuy. Il rejoint ensuite le Mexique en 2013 et plus précisément le Club Tijuana où l’attaquant trouve le chemin des filets à vingt-trois reprises en cinquante rencontres. Son sens du but attire l’œil du Club América, où il signe en 2014. C’est avec cette équipe qu’il remporte ses premiers titres. Il glane à deux reprises deux éditions de la Ligue des Champions de la CONCACAF, en 2015 et en 2016. Lors de la finale retour de l’édition 2014-2015 contre l’Impact Montréal, il se distingue en réalisant un triplé. Il termine d’ailleurs meilleur buteur de la compétition (7 buts). Ses bonnes performances (49 buts en 111 matches au Mexique) lui permettent de signer à Boca Juniors en 2016, son club de cœur. El Pipa se fait véritablement un nom dans cette mythique équipe argentine. Il est très vite apprécié des supporters et devient l’un des chouchous de la Bombonera. Joueur puissant, adroit devant le but et jamais avare d’effort, il inscrit 46 buts en 76 rencontres jouées. Il étoffe son palmarès en glanant les éditions 2016-2017 et 2017-2018 de la Superliga (championnat argentin) avec Boca Juniors. Il est également finaliste de la Copa Libertadores 2018. Darío Benedetto rejoint l'OM en août 2019 et rallie pour la première fois de sa carrière un championnat européen."
    },
    {
        "id": "2",
        "firstName": "Dimitri",
        "lastName": "Payet",
        "age": 33,
        "position": "Milieu",
        "number": "10",
        "image": "https://www.om.fr/sites/default/files/2019-08/PAYET.png",
        "Biography": "Formé à Nantes, passé par Saint-Etienne puis Lille, Dimitri Payet pose ses valises une première fois à Marseille en 2013. En deux saisons, le Réunionnais dispute 83 matchs toutes compétitions confondues, marque 15 buts et délivre 23 passes décisives. Il quitte l’OM pour rejoindre West Ham. Après 18 mois à Londres, il revient à Marseille et retrouve son coach de l’époque lilloise, Rudi Garcia. L’international français, héros de l’Euro 2016, devient le maître à jouer de l’équipe olympienne. En une demi-saison (17 matchs), il trouve le chemin des filets 5 fois et délivre 3 passes décisives. Ses statistiques explosent la saison suivante : 10 buts et 21 passes décisives en 47 matchs. Malheureusement, il se blesse en fin de saison et doit quitter ses partenaires au cours de la finale de l’UEFA Europa League à Lyon face à l’Atlético de Madrid. Cette même blessure le prive de la Coupe du monde 2018. Malgré cette désillusion, le capitaine marseillais revient bien, en étant décisif à treize reprises durant la saison 2018-2019."
    },
    {
        "id": "3",
        "firstName": "Morgan",
        "lastName": "Sanson",
        "age": 25,
        "position": "Milieu",
        "number": "8",
        "image": "https://www.om.fr/sites/default/files/2019-08/SANSON.png",
        "Biography": "Le milieu de terrain se rappellera surement qu’il est la première recrue de l’ère McCourt. Arrivé en provenance de Montpellier, Morgan Sanson est un élément clef de l’Olympique de Marseille. Avec l’OM Morgan Sanson connaît son deuxième club dans l’élite, après des débuts au Mans en 2012 puis trois saisons et demi du côté de «La Paillade». Artisan principal de la belle saison de l’OM version 2017-2018, le milieu polyvalent a participé à 59 matchs, toutes compétitions confondues, lors de cet exercice. Il confirme la saison suivante, en 2018-19 en marquant 5 buts en championnat."
    },
    {
        "id": "4",
        "firstName": "Valère",
        "lastName": "Germain",
        "age": 30,
        "position": "Milieu/Attaquant",
        "number": "28",
        "image": "https://www.om.fr/sites/default/files/2019-08/GERMAIN.png",
        "Biography": "Fils de l’ancien Olympien Bruno Germain, Valère est fan de l’OM depuis sa toute petite enfance. Après sa formation à l’AS Monaco (dont une saison de prêt à l’OGC Nice), il quitte le Rocher auréolé d’un titre de champion de France en 2017. Il s’engage avec l’OM et signe des débuts tonitruants avec un triplé à l’Orange Vélodrome face à Ostende en tour préliminaire d’Europa League. Pour sa première saison à Marseille, il marque 18 buts en 55 matchs toutes compétitions confondues. En 2018-19, l’arrivée de Mario Balotelli durant le mercato hivernal lui permet de retrouver un rôle qu’il affectionne particulièrement en faux n°9."
    },
    {
        "id": "5",
        "firstName": "Valentin",
        "lastName": "Rongier",
        "age": 25,
        "position": "Milieu",
        "number": "21",
        "image": "https://www.om.fr/sites/default/files/2019-09/list_rongier.png",
        "Biography": "Âgé de 24 ans et auteur de 135 apparitions sous le maillot des Canaris, Valentin a su s’imposer et convaincre le public nantais par ses performances abouties afin de devenir une valeur sûre de la Ligue 1 Conforama. Il a notamment été le meilleur tacleur des cinq plus grands championnats européens lors de la saison 2016/2017, preuve de sa qualité dans la récupération du ballon. Valentin compte également un total de dix buts et treize passes décisives avec son club formateur de Loire-Atlantique faisant de lui un milieu décisif capable de se projeter vers l’avant pour orienter le jeu ou même finir les actions. Très polyvalent, Valentin Rongier est un milieu de terrain technique à l’aise balle au pied. D’une combativité et abnégation à toute épreuve, il apparaît comme un élément essentiel à la construction du jeu grâce notamment à une excellente qualité de passe."
    },
    {
        "id": "6",
        "firstName": "Kevin",
        "lastName": "Strootman",
        "age": 30,
        "position": "Milieu",
        "number": "12",
        "image": "https://www.om.fr/sites/default/files/2019-08/STROOTMAN.png",
        "Biography": "International néerlandais, Kevin Strootman est la deuxième recrue officielle de l’effectif 2018/19. Arrivé à la Roma en 2013, il dispute 130 matchs (14 buts), termine 3 fois vice-champion d’Italie, dont deux fois avec Rudi Garcia (2014 et 2015), et participe 4 fois à la Ligue des Champions. Passé par le PSV Eindhoven, il y remporte la coupe des Pays-Bas et la Supercoupe en deux saisons. Joueur polyvalent, il est un vrai milieu central moderne avec un énorme impact sur le jeu et une excellente technique de passes. Il partagera son expérience des grandes compétitions européennes et internationales, pour permettre à son nouveau club, l’Olympique de Marseille, de passer un cap supplémentaire. En 2019, avec sa sélection, il est finaliste de la première édition de la Ligue des Nations."
    },
    {
        "id": "7",
        "firstName": "Jordan",
        "lastName": "Amavi",
        "age": 26,
        "position": "Défenseur",
        "number": "18",
        "image": "https://www.om.fr/sites/default/files/2019-08/AMAVI.png",
        "Biography": "Lancé professionnel en 2013 à l’OGC Nice, pour sa première saison en Ligue 1, Jordan Amavi laisse éclater tout son talent. Déjà, le public du Vélodrome découvrait à ses dépens un latéral fougueux, offensif et à l’aise des deux pieds. Sous les ordres de Claude Puel, il confirme par une saison pleine (37 matchs, 4 buts) en 2014, avant de poursuivre en Angleterre. Le natif de Toulon rejoint Aston Villa et la Premier League à l’été 2015. Mais il verra sa progression freinée par une grave blessure au genou avec l’équipe de France espoirs, ainsi que par la relégation de son équipe à l’issue d’une saison où il n’a joué que 10 matchs. En Championship en 2016-17, celui qui remportait la Coupe Gambardella en 2012 avec le Gym, retrouve les terrains après neuf mois d’absence, désireux de relancer une carrière pleine de promesses. Par ses performances, les fans d’Aston Villa lui consacraient d’ailleurs une chanson à son éloge. En 2017, son ambition le mène au projet olympien dans un championnat et une région qu’il connaît parfaitement. A Marseille, tout est réuni pour parfaire sa progression. Il le fait à merveille en s’imposant dans son couloir et a même été appelé, à une reprise, en équipe de France. Il a disputé 28 rencontres pendant la saison 2018-2019."
    },
    {
        "id": "8",
        "firstName": "Alvaro",
        "lastName": "Gonzalez",
        "age": 30,
        "position": "Défenseur",
        "number": "3",
        "image": "https://www.om.fr/sites/default/files/2019-08/ALVARO_0.png",
        "Biography": "Álvaro González Soberón est la première recrue de l’effectif professionnel du mercato estival 2019/20. Arrivé en provenance du club espagnol de Villareal, Álvaro González est un défenseur expérimenté comptant notamment plus de 230 apparitions dans l’un des plus grands championnats européens, la Liga espagnole. Passé par le Racing Santander, le Real Zaragoza ou encore l’Espanyol Barcelona, le droitier s’est imposé comme étant une valeur sûre du plus haut niveau ibérique. Champion d’Europe avec la Rojita en 2013, Álvaro González est un leader défensif, doté d’une bonne lecture du jeu et solide dans les duels. Sa longévité au sein de l’élite espagnole face à des adversaires de haut niveau fait de lui un défenseur complet venant renforcer l’effectif olympien. Álvaro apportera toute son expérience et sa combativité pour aider le club à concrétiser ses ambitions."
    },
    {
        "id": "9",
        "firstName": "Boubacar",
        "lastName": "Kamara",
        "age": 20,
        "position": "Défenseur",
        "number": "4",
        "image": "https://www.om.fr/sites/default/files/2019-08/KAMARA.png",
        "Biography": "Boubacar Kamara représente à la perfection la formation olympienne. Présent au club depuis l’âge de 5 ans, il est le fruit de l’OM. Capitaine des différentes catégories au sein de l’institution puis de l’équipe U19 qui a disputé la finale de la Coupe Gambardella au stade de France en 2017, il participe à de nombreuses rencontres avec les pros lors de la saison 2017-2018. Il se montre sur la scène européenne, notamment en tant que titulaire, lors des quarts de finale aller et retour face à Leipzig. Polyvalent, le natif de Marseille, peut jouer en défense centrale ou en tant que milieu défensif. Jeune, avec une vision du jeu et une qualité technique au-dessus de la moyenne, « Bouba » a de quoi s’imposer comme un pilier à l’Olympique de Marseille. Il inscrit son premier but en tant que professionnel le 5 février 2019, face à Bordeaux … dans un Orange Vélodrome à huis clos. "
    },
    {
        "id": "10",
        "firstName": "Hiroki",
        "lastName": "Sakai",
        "age": 30,
        "position": "Défenseur",
        "number": "2",
        "image": "https://www.om.fr/sites/default/files/2019-08/SAKAI.png",
        "Biography": "Arrivé en 2016 à l’OM, Hiroki Sakai, latéral droit international japonais, s’est rapidement fait une place au soleil dans la défense olympienne. Sobre, efficace et régulier dans ses prestations, le Nippon a disputé 40 matchs en 2016-17 et 50 en 2017-18. Le 12 avril 2018, le jour de ses 28 ans, il inscrit le 5e but de l’OM face à Leipzig (son premier sous le maillot blanc) à l’Orange Vélodrome lors du quart de finale retour d’Europa League et conclut en beauté l’une des plus belles soirées de la saison. Titulaire indiscutable avec sa sélection, il a atteint les 8es de finale de la Coupe du monde 2018 et a échoué en finale de la Coupe d’Asie 2019 face au Qatar. Auteur d’une très belle campagne 2018-2019, Hiroki Sakai est élu Olympien de la saison par les supporters marseillais."
    },
    {
        "id": "11",
        "firstName": "Steve",
        "lastName": "Mandanda",
        "age": 35,
        "position": "Gardien",
        "number": "30",
        "image": "https://www.om.fr/sites/default/files/2019-08/MANDANDA.png",
        "Biography": "Quand il débarque à Marseille, Steve Mandanda jouit d’une excellente réputation, mais ne compte aucun match en Ligue 1. Recruté au départ pour concurrencer Cédric Carrasso, le natif de Kinshasa (RD Congo) va prendre place dans les buts olympiens plus tôt que prévu, en raison de la rupture du tendon d’Achille de l’Avignonnais. Steve saisit l’opportunité qui se présente avec brio et panache ! Son premier match, à Caen, fut une démonstration: relance impeccable, excellent coup d’œil, parades décisives... Alors que l’équipe s’enlise dans les profondeurs de la L1, le portier marseillais est la seule satisfaction. Et quand la formation olympienne réagit et retrouve de sa superbe, il reste toujours aussi performant. Son calme et sa maturité séduisent autant que sa régularité et son professionnalisme. Et Raymond Domenech ne s’y trompe pas. Il le sélectionne pour l’Euro 2008. Celui qui ne compte qu’une trentaine de rencontres en Ligue 1 coiffe ainsi au poteau le Parisien Landreau. Plébiscité par la presse qui relate souvent la « Mandandamania », il est reconnu par ses pairs en mai 2008 en recevant le trophée de meilleur gardien de but du Championnat de France. En 2010, il remporte le Championnat de France de L1, la Coupe de la Ligue puis le Trophée des Champions. Après le départ de Mamadou Niang, Didier Deschamps lui confie le brassard de capitaine. Il est retenu par Raymond Domenech pour disputer la Coupe du Monde en Afrique du Sud. Il s’adjuge deux nouvelles Coupes de la Ligue en 2011 puis 2012 et un nouveau Trophée des Champions en 2011. Retenu pour disputer l’Euro 2012 et le Mondial 2014 (qu’il ne dispute finalement à cause d’une blessure aux cervicales), Steve enchaîne les sélections et les matchs sous le maillot blanc. De nouveau, élu meilleur gardien de L1 en 2011, 2015 et 2016, il rejoint Crystal Palace en Angleterre après 8 saisons à Marseille. Il revient sur La Canebière au bout d’un an. Il devient le gardien le plus capé de l’histoire du club avec plus de 400 rencontres disputées avec l’OM. En 2018, après une finale d’Europa League à Lyon, il devient, le 15 juillet à Moscou, champion du monde avec l’équipe de France de Didier Deschamps."
    }
]

posts = [{
        "id": "1",
        "player_id": "1",
        "player_name": "Dimitri Payet",
        "message": "bonjour à tous !",
        "title": "A propos du match de saint-etienne",
        "date_message": "25.05.2020"
    },
    {
        "id": "2",
        "player_id": "2",
        "player_name": "Steve Mandanda",
        "message": "Restez chez vous en ces temps de confinement",
        "title": "Fin de la saison",
        "date_message": "25.03.2020"
    }, {
        "id": "3",
        "player_id": "3",
        "player_name": "Dimitri Payet",
        "message": "bonjour à tous !",
        "title": "A propos du match de saint-etienne",
        "date_message": "25.05.2020"
    }, {
        "id": "4",
        "player_id": "4",
        "player_name": "Dimitri Payet",
        "message": "bonjour à tous !",
        "title": "A propos du match de saint-etienne",
        "date_message": "25.05.2020"
    }, {
        "id": "5",
        "player_id": "5",
        "player_name": "Dimitri Payet",
        "message": "bonjour à tous !",
        "title": "A propos du match de saint-etienne",
        "date_message": "25.05.2020"
    }, {
        "id": "6",
        "player_id": "6",
        "player_name": "Dimitri Payet",
        "message": "bonjour à tous !",
        "title": "A propos du match de saint-etienne",
        "date_message": "25.05.2020"
    },
]