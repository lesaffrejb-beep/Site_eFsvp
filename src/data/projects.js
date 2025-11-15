/**
 * ==================================================
 * EfSVP — Modèle de données Projects (CMS-ready)
 * ==================================================
 *
 * Ce fichier centralise tous les projets EfSVP dans un modèle structuré
 * prêt à être branché à un CMS (Strapi, Contentful, WordPress, etc.)
 *
 * @typedef {'delivered' | 'in_production'} ProjectStatus
 * @typedef {'Institution' | 'Collectivité' | 'Association' | 'Entreprise' | 'Spectacle'} ProjectTypology
 */

/**
 * @typedef {Object} Project
 * @property {string} slug - Identifiant unique URL-friendly
 * @property {string} title - Titre court du projet
 * @property {string} client - Commanditaire principal
 * @property {string[]} [coClients] - Partenaires éventuels
 * @property {number} year - Année principale de la commande
 * @property {string} [period] - Période (ex. "2021–2023")
 * @property {string} sector - Secteur (ex. "Agriculture", "Patrimoine")
 * @property {string} format - Format (ex. "Hymne", "Spectacle déambulatoire")
 * @property {ProjectTypology} typology - Typologie client
 * @property {string} location - Localisation (ex. "Maine-et-Loire")
 * @property {string} tagline - Pitch ultra court (1 phrase)
 * @property {string} shortDescription - Description courte (2-3 phrases)
 * @property {string} longDescription - Version longue complète
 * @property {string[]} roles - Rôles EfSVP (écriture, composition, etc.)
 * @property {string[]} [partners] - Autres structures impliquées
 * @property {string[]} themes - Thématiques du projet
 * @property {string[]} [devices] - Dispositifs techniques
 * @property {ProjectStatus} status - Statut du projet
 * @property {number} [playsCount] - Nombre de représentations
 * @property {boolean} [isFeatured] - Projet mis en avant
 * @property {number} order - Ordre d'affichage
 * @property {string} [gradient] - Dégradé CSS pour la carte visuelle
 * @property {string} dataClient - Attribut pour filtrage (institution/entreprise/spectacle)
 * @property {string} dataType - Type pour filtrage (brand/mediation/immersive)
 * @property {string} dataCategory - Catégorie pour filtrage
 */

/**
 * Liste complète des projets EfSVP
 * @type {Project[]}
 */
export const projects = [
  // ========================================
  // 1. SIVAL / Destination Angers (2025)
  // ========================================
  {
    slug: 'sival-bruno-dupont',
    title: 'Série promotionnelle agricole',
    client: 'Destination Angers / SIVAL',
    year: 2025,
    period: 'Janvier 2025',
    sector: 'Agriculture',
    format: 'Série de morceaux promotionnels',
    typology: 'Institution',
    location: 'Angers, Maine-et-Loire',
    tagline:
      'Célébrer l\'innovation agricole à travers le regard d\'un enfant devenu maraîcher.',
    shortDescription:
      'Suite de récits musicaux célébrant le SIVAL et l\'héritage de Bruno Dupont, grand nom de l\'agriculture française. Un enfant découvre l\'agriculture, grandit avec elle et résout ses défis grâce aux innovations du salon.',
    longDescription: `En janvier 2025, Destination Angers nous contacte pour réaliser une série de morceaux promotionnels dédiés au SIVAL, le Salon International des Techniques de Productions Végétales.

Les morceaux doivent également célébrer l'héritage du président du salon, l'un des grands noms de l'agriculture en France : Bruno Dupont.

Pour réaliser cette commande, nous choisissons de suivre le point de vue d'un enfant découvrant le monde de l'agriculture dans l'exploitation de son grand-père. Il y rencontre un collègue de son papi, un certain Bruno Dupont qui va tous les ans à un salon à Angers… Nous suivons ensuite l'évolution de cet enfant, et à travers ses yeux, l'évolution du SIVAL et de l'agriculture en France. Il va créer sa propre exploitation, et, aidé par les technologies découvertes au salon et Bruno, résoudre toutes les difficultés se présentant à lui.

Le récit se veut proche du réel, de la terre, du vrai quotidien d'un maraîcher.`,
    roles: ['écriture', 'composition', 'interprétation'],
    themes: ['agriculture', 'innovation', 'transmission', 'terroir'],
    devices: ['série de morceaux', 'récit narratif musical'],
    status: 'delivered',
    isFeatured: true,
    order: 2,
    gradient: 'linear-gradient(135deg, #e8924f 0%, #d4af37 100%)',
    dataClient: 'institution',
    dataType: 'brand',
    dataCategory: 'entreprises',
  },

  // ========================================
  // 2. Jardins de Cocagne (2024)
  // ========================================
  {
    slug: 'jardins-cocagne-resilience',
    title: 'Histoires de résilience',
    client: 'Réseau Cocagne',
    year: 2024,
    period: 'Juin 2024',
    sector: 'Solidarité',
    format: 'Série de portraits musicaux',
    typology: 'Association',
    location: 'National',
    tagline: 'Trois parcours, trois jardins, une même dignité retrouvée.',
    shortDescription:
      '3 récits musicaux pour les 25 ans du réseau Cocagne. Portraits de jardiniers ayant emprunté des chemins de traverse : Malya, Caroline et Ahmed nous confient leurs histoires de résilience.',
    longDescription: `En juin 2024, l'association des Jardins de Cocagne nous commande une série de morceaux pour leurs 25 ans.

Leur volonté est que nous racontions plusieurs histoires de vie, des parcours atypiques, des chemins de traverses qu'ont pu emprunter certains de leurs jardiniers. Il fallait rendre hommage à la résilience. Nous sommes allés rencontrer plusieurs d'entre eux et nous sommes efforcés de retranscrire au mieux leur histoire.

3 récits, 3 personnages, 3 chemins différents convergeant en un point : Le jardin de Cocagne.

Merci à Malya, Caroline et Ahmed pour leur générosité et leur confiance.`,
    roles: ['collectage', 'écriture', 'composition', 'interprétation'],
    themes: ['résilience', 'insertion', 'dignité', 'agriculture sociale'],
    devices: ['portraits musicaux', 'collectage de témoignages'],
    status: 'delivered',
    isFeatured: false,
    order: 4,
    gradient: 'linear-gradient(135deg, #f5e6d3 0%, #d4af37 100%)',
    dataClient: 'institution',
    dataType: 'mediation',
    dataCategory: 'institutions',
  },

  // ========================================
  // 3. Clisson (2023)
  // ========================================
  {
    slug: 'clisson-deambulation-xve',
    title: 'Déambulation historique XVe s.',
    client: 'Ville de Clisson',
    year: 2023,
    period: 'Septembre 2023',
    sector: 'Patrimoine',
    format: 'Spectacle déambulatoire',
    typology: 'Collectivité',
    location: 'Clisson, Loire-Atlantique',
    tagline: 'Don Quichotte arrive en Anjou pour investir dans le vignoble.',
    shortDescription:
      'Visite musicale du centre-ville pour les Journées Européennes du Patrimoine. Une continuation de Don Quichotte, du moulin du pavé au vignoble brissacois, mêlant histoire et comédie.',
    longDescription: `En juin 2023, la commune de Clisson nous commande une visite musicale de leur centre-ville. L'objectif est de créer une déambulation poétique dévoilant l'histoire de la cité.

Après une phase de collectage en collaboration avec l'association Clisson Histoire et Patrimoine, nous décidons de mettre en lumière une période rarement évoquée pour Clisson : le XVème siècle. Plus précisément encore les années 1486 et 1487 durant lesquelles la ville passa de l'influence bretonne à française.

Nous racontons cette histoire à travers les yeux de François Ier d'Avaugour, le fils naturel du Duc de Bretagne qui jouera un rôle clé dans la défaite des bretons.

Le spectacle joue avec les codes du roman de chevalerie pour proposer une déambulation historique et comique adaptée à tous les publics.`,
    roles: ['collectage', 'écriture', 'composition', 'interprétation'],
    partners: ['Clisson Histoire et Patrimoine'],
    themes: ['patrimoine', 'histoire médiévale', 'chevalerie', 'vignoble'],
    devices: ['violon/voix', 'déambulation', 'spectacle tout public'],
    status: 'delivered',
    isFeatured: false,
    order: 6,
    gradient: 'linear-gradient(135deg, #1a2332 0%, #2d2d2d 100%)',
    dataClient: 'institution',
    dataType: 'immersive',
    dataCategory: 'institutions',
  },

  // ========================================
  // 4. État de Nature — PNR Loire-Anjou-Touraine (2023)
  // ========================================
  {
    slug: 'etat-de-nature-pnr-loire-anjou-touraine',
    title: 'État de nature',
    client: 'PNR Loire-Anjou-Touraine',
    coClients: ['PNR Médoc'],
    year: 2023,
    period: '2023 → en cours',
    sector: 'Environnement',
    format: 'Spectacle immersif en zones humides',
    typology: 'Institution',
    location: 'Pays de la Loire & Médoc',
    tagline: 'Une société animale nous révèle les enjeux des zones humides.',
    shortDescription:
      'Spectacle en violon/voix pour défendre les zones humides. Rainette, Héron, castors : 15 tableaux dans une société animale bien établie. Plus de 30 représentations depuis sa création.',
    longDescription: `En avril 2023, le Parc Naturel Régional Loire Anjou Touraine nous commande un spectacle musical pour défendre l'intérêt des zones humides auprès du grand public.

L'objectif est clair : il faut sensibiliser, informer, communiquer de manière nouvelle sur la nécessité de protéger ces espaces déjà menacés. Les zones humides sont des trésors de biodiversité et ont des caractéristiques essentielles permettant de lutter contre le stress hydrique.

Notre proposition : État de Nature, un spectacle en violon / voix jouable dans les zones humides.

Dans État de nature, la Rainette, le Héron, les poissons-chats, les castors ou les libellules sont tous des citoyens d'une société bien établie. Nous découvrons cette société au fil de 15 tableaux, 15 chapitres pour rencontrer ses habitants et ses enjeux.

Depuis sa création, le spectacle a été joué plus d'une trentaine de fois dans les Pays de la Loire. En février 2024, une nouvelle version d'État de Nature voit le jour, adaptée pour le Parc Naturel Régional du Médoc.

Merci aux équipes des deux parcs nous ayant permis de découvrir et de comprendre ces zones essentielles à nos écosystèmes.`,
    roles: ['écriture', 'composition', 'interprétation'],
    themes: ['zones humides', 'biodiversité', 'écologie', 'sensibilisation'],
    devices: ['violon/voix', 'spectacle en pleine nature', '15 tableaux'],
    status: 'delivered',
    playsCount: 40,
    isFeatured: true,
    order: 5,
    gradient: 'linear-gradient(135deg, #7d2e2e 0%, #b8441e 100%)',
    dataClient: 'institution',
    dataType: 'immersive',
    dataCategory: 'spectacles',
  },

  // ========================================
  // 5. Département Maine-et-Loire — La force de la douceur (2024)
  // ========================================
  {
    slug: 'hymne-maine-et-loire-force-douceur',
    title: 'La force de la douceur',
    client: 'Département Maine-et-Loire',
    year: 2024,
    period: 'Novembre 2024',
    sector: 'Institution',
    format: 'Hymne officiel',
    typology: 'Collectivité',
    location: 'Maine-et-Loire',
    tagline: 'Hymne officiel célébrant la diversité et la créativité angevine.',
    shortDescription:
      'Hymne pour la marque "La force de la douceur". 2 versions (longue/courte) en collaboration avec Mathieu Coupat, Camille Després et Kryzalid Films. Diffusion assises des départements et cinémas du 49.',
    longDescription: `En novembre 2024, le département du Maine et Loire nous commande un hymne pour la nouvelle marque de l'Anjou : La force de la douceur.

En collaboration avec Mathieu Coupat et Camille Després, compositeurs de musique de film et Kryzalid Films, agence de vidéo angevine, nous écrivons et enregistrons 2 clips : une version longue, pour une diffusion aux assises des départements de France et une version courte, pour les cinémas du 49, la télé et les réseaux sociaux.

L'objectif était de dévoiler toute la force que contenait la douceur de l'Anjou tout en soulignant sa diversité, son originalité et sa créativité.`,
    roles: ['écriture', 'interprétation'],
    partners: ['Mathieu Coupat', 'Camille Després', 'Kryzalid Films'],
    themes: ['identité territoriale', 'marque', 'douceur', 'créativité'],
    devices: ['hymne', 'clip vidéo', 'musique de film'],
    status: 'delivered',
    isFeatured: true,
    order: 1,
    gradient: 'linear-gradient(135deg, #b8441e 0%, #e8924f 100%)',
    dataClient: 'institution',
    dataType: 'brand',
    dataCategory: 'institutions',
  },

  // ========================================
  // 6. CAPEB Maine-et-Loire (2023)
  // ========================================
  {
    slug: 'capeb-artisan-menuisier',
    title: 'Portrait d\'un artisan menuisier',
    client: 'CAPEB Maine-et-Loire',
    year: 2023,
    period: 'Novembre 2023',
    sector: 'Artisanat',
    format: 'Récit musical',
    typology: 'Institution',
    location: 'Maine-et-Loire',
    tagline: 'L\'histoire de Guillaume, menuisier patrimonial et adhérent CAPEB.',
    shortDescription:
      'Morceau rendant hommage aux artisans du bâtiment. 2 jours de collectage avec un menuisier pour comprendre le vrai quotidien, de la création de la boîte à l\'adhésion CAPEB.',
    longDescription: `En novembre 2023, la CAPEB nous commande un morceau pour raconter ce que c'est qu'être un artisan du bâtiment.
Ils veulent que le morceau rende hommage aux travailleurs de leur filière et nous laissent carte blanche sur la forme.

Après une phase de collectage, nous décidons de raconter l'histoire de Guillaume, menuisier spécialisé dans la restauration du patrimoine. Le morceau suit sa vie, de la création de sa boîte jusqu'à son adhésion à la CAPEB.

La volonté est toujours de créer un récit authentique, c'était tout particulièrement le cas pour cette commande. Il était important d'être fidèle au vrai quotidien d'un menuisier. Nous avons donc passé 2 jours à suivre l'un d'entre eux dans son travail pour comprendre au mieux la réalité du terrain.

Merci à Philippe pour sa gentillesse (et pour sa patience surtout devant notre nullité à tenir un rabot droit).`,
    roles: ['collectage', 'écriture', 'composition', 'interprétation'],
    themes: ['artisanat', 'patrimoine', 'savoir-faire', 'menuiserie'],
    devices: ['récit musical', 'collectage terrain'],
    status: 'delivered',
    isFeatured: false,
    order: 7,
    gradient: 'linear-gradient(135deg, #8a8a68 0%, #c39d6b 100%)',
    dataClient: 'institution',
    dataType: 'brand',
    dataCategory: 'institutions',
  },

  // ========================================
  // 7. Atelier Lacour (2024)
  // ========================================
  {
    slug: 'atelier-lacour-25-ans',
    title: '25 ans & passation',
    client: 'Atelier Lacour',
    year: 2024,
    period: 'Juillet 2024',
    sector: 'Entreprise',
    format: 'Suite de morceaux',
    typology: 'Entreprise',
    location: 'Maine-et-Loire',
    tagline: 'L\'entreprise personnifiée raconte son histoire : de l\'arbre à la forêt.',
    shortDescription:
      'Suite de morceaux pour les 25 ans et la passation de présidence. Métaphore filée entreprise/forêt : un arbre seul devient une forêt unie et robuste.',
    longDescription: `En juillet 2024, Alain Lacour, directeur de l'entreprise Atelier Lacour, nous commande une suite de morceaux pour célébrer les 25 ans de son entreprise et la passation de présidence entre lui et ses reprenants.

Sa volonté n'est pas que nous écrivions un texte sur lui mais sur son entreprise, en la personnifiant. C'est L'atelier Lacour qui doit prendre la parole pour raconter son histoire.

Pour réaliser cette commande, nous faisons un récit en métaphore filée avec d'un côté la création et la vie d'une entreprise et de l'autre, la création et la vie d'une forêt.
Un arbre seul, rejoint par des arbrisseaux, se rassemblant, se renforçant, affrontant les tempêtes et les orages ensemble pour créer une forêt unie et robuste.`,
    roles: ['écriture', 'composition', 'interprétation'],
    themes: ['transmission', 'anniversaire', 'entreprise', 'collectif'],
    devices: ['suite de morceaux', 'métaphore filée'],
    status: 'delivered',
    isFeatured: false,
    order: 3,
    gradient: 'linear-gradient(135deg, #2d2d2d 0%, #7d2e2e 100%)',
    dataClient: 'entreprise',
    dataType: 'brand',
    dataCategory: 'entreprises',
  },

  // ========================================
  // 8. Doué-en-Anjou (2022)
  // ========================================
  {
    slug: 'doue-en-anjou-voeux-maire',
    title: 'Le temps suspendu',
    client: 'Ville de Doué-en-Anjou',
    year: 2022,
    period: 'Janvier 2022',
    sector: 'Patrimoine',
    format: 'Texte vidéo',
    typology: 'Collectivité',
    location: 'Doué-en-Anjou, Maine-et-Loire',
    tagline: 'Quand le patrimoine et la culture figent le temps et créent une harmonie unique.',
    shortDescription:
      'Texte pour les vœux du Maire célébrant patrimoine et culture. En collaboration avec Terre de pixels, exploration du temps suspendu devant un monument ou au théâtre.',
    longDescription: `En janvier 2022, la commune de Doué en Anjou nous commande un texte pour les vœux du Maire, texte devant célébrer le patrimoine et la vie culturelle municipale.

Nous travaillons en collaboration avec l'agence douessine Terre de pixels qui s'occupe de la vidéo.
Pour parler de patrimoine et de culture, nous décidons d'axer le texte sur la notion de temps qui se fige. Au théâtre comme devant un monument séculaire, le temps ne se ressent plus de manière habituelle. Il se suspend et nous invite à une forme de contemplation. C'est cette idée que nous avons voulu explorer : comment, à Doué-en-Anjou, le passé et le présent coexistent, se répondent, et créent une harmonie unique.`,
    roles: ['écriture'],
    partners: ['Terre de pixels'],
    themes: ['patrimoine', 'culture', 'temps', 'contemplation'],
    devices: ['texte vidéo', 'vœux institutionnels'],
    status: 'delivered',
    isFeatured: false,
    order: 9,
    gradient: 'linear-gradient(135deg, #c39d6b 0%, #e6d9c3 100%)',
    dataClient: 'institution',
    dataType: 'brand',
    dataCategory: 'institutions',
  },

  // ========================================
  // 9. Brissac Loire Aubance (2023)
  // ========================================
  {
    slug: 'brissac-don-quichotte',
    title: 'Don Quichotte en Anjou',
    client: 'Commune de Brissac Loire Aubance',
    year: 2023,
    period: 'Septembre 2023',
    sector: 'Patrimoine',
    format: 'Spectacle déambulatoire',
    typology: 'Collectivité',
    location: 'Brissac Loire Aubance, Maine-et-Loire',
    tagline: 'Don Quichotte investit dans le vignoble brissacois lors des JEP.',
    shortDescription:
      'Spectacle déambulatoire pour les Journées Européennes du Patrimoine. Suite du roman de Cervantès : Don Quichotte arrive en Anjou et découvre le vignoble brissacois en violon/voix.',
    longDescription: `En septembre 2023, pour les Journées Européennes du Patrimoine, la commune de Brissac Loire Aubance nous commande un spectacle déambulatoire pour raconter l'histoire de leur ville.

La déambulation doit partir du moulin du pavé et faire ensuite le tour du vignoble brissacois.
Nous avons carte blanche sur la manière dont nous voulons parler de ce patrimoine particulier.

Nous décidons de nous lancer dans une continuation du pilier de la littérature L'ingénieux Hidalgo Don Quichotte de la Manche. Notre récit commence à la fin du roman et raconte l'arrivée du personnage de Don Quichotte en Anjou, désireux d'investir dans le vignoble local.
Le spectacle joue avec les passages emblématiques du roman : les moulins, les moutons, le personnage de Sancho Panza tout en ajoutant les détails de l'histoire régionale. Les représentations se font en violon / voix pour pouvoir proposer une mise en scène légère et mobile.`,
    roles: ['écriture', 'composition', 'interprétation'],
    themes: ['patrimoine', 'vignoble', 'littérature', 'Don Quichotte'],
    devices: ['violon/voix', 'déambulation', 'spectacle tout public'],
    status: 'delivered',
    isFeatured: false,
    order: 10,
    gradient: 'linear-gradient(135deg, #7d2e2e 0%, #e8924f 100%)',
    dataClient: 'institution',
    dataType: 'immersive',
    dataCategory: 'institutions',
  },

  // ========================================
  // 10. Agglo'bus Saumur (2023)
  // ========================================
  {
    slug: 'agglobus-saumur-prevention',
    title: 'Bien voyager en bus',
    client: 'Saumur Val de Loire',
    year: 2023,
    period: 'Juin 2023',
    sector: 'Mobilité',
    format: 'Texte vidéo',
    typology: 'Collectivité',
    location: 'Saumur, Maine-et-Loire',
    tagline: 'Le bus, un véhicule du quotidien et un symbole de lien social.',
    shortDescription:
      'Texte de prévention pour Agglo\'bus en collaboration avec Terre de pixels. Histoire de deux collégiens : le bus comme aventure quotidienne et espace de rencontres.',
    longDescription: `En juin 2023, la communauté d'agglomération Saumur Val de Loire nous commande un texte de prévention pour les services Agglo'bus.
En collaboration avec l'agence Terre de pixels qui s'occupe de la vidéo, l'objectif est d'informer sur les bons usages pour prendre le bus en toute sécurité.
Nous racontons l'histoire de deux collégiens prenant le bus un matin d'hiver.

Le bus devient un véhicule du quotidien, mais aussi un symbole de lien social, de rencontres et de partage. Chaque trajet est une aventure, une occasion de découvrir sa ville et ses habitants sous un nouveau jour.`,
    roles: ['écriture'],
    partners: ['Terre de pixels'],
    themes: ['mobilité', 'prévention', 'lien social', 'jeunesse'],
    devices: ['texte vidéo', 'prévention'],
    status: 'delivered',
    isFeatured: false,
    order: 11,
    gradient: 'linear-gradient(135deg, #e8924f 0%, #d4af37 100%)',
    dataClient: 'institution',
    dataType: 'mediation',
    dataCategory: 'institutions',
  },

  // ========================================
  // 11. Théâtre de la Jeune Plume (2021–2023)
  // ========================================
  {
    slug: 'theatre-jeune-plume-bandes-son',
    title: 'Bandes-son scéniques & tabous',
    client: 'Théâtre de la Jeune Plume',
    year: 2023,
    period: '2021–2023',
    sector: 'Santé',
    format: 'Bandes-son scéniques',
    typology: 'Association',
    location: 'Pays de la Loire',
    tagline: 'Deux spectacles dansés abordant les tabous : ALD et vie intime des seniors.',
    shortDescription:
      '2 bandes-son pour spectacles dansés : "Dis-moi des mots d\'amour" (ALD) et "Souffler sur les braises" (vie intime seniors). Collectage et création honnête et poétique.',
    longDescription: `De novembre 2021 à mars 2023, nous collaborons avec le Théâtre de la Jeune Plume pour la création de deux spectacles musicaux. Le premier Dis-moi des mots d'amour aborde les Affections de Longues Durées, le second Souffler sur les braises parle de la vie sexuelle et intime des personnes âgées.

Nous écrivons pour les deux projets une bande-son diffusée sur scène, accompagnant des danseurs. L'objectif de ces deux spectacles était d'amener dans les théâtres des thématiques sociales trop souvent taboues.
Il fallait parler de ces sujets, sans les contourner, avec honnêteté et poésie, sans toutefois tomber dans le choquant ou le provoquant.

Pour les deux bandes-son, une phase de recherche a été nécessaire, ainsi que du collectage auprès des personnes concernées pour ne pas projeter nos a priori sur le spectacle.`,
    roles: ['collectage', 'écriture', 'composition'],
    themes: ['santé', 'tabous', 'intimité', 'vieillissement'],
    devices: ['bande-son scénique', 'spectacle dansé', 'collectage'],
    status: 'delivered',
    isFeatured: false,
    order: 12,
    gradient: 'linear-gradient(135deg, #8a8a68 0%, #c39d6b 100%)',
    dataClient: 'institution',
    dataType: 'mediation',
    dataCategory: 'institutions',
  },

  // ========================================
  // 12. Le Chemin des Dames (EN PRODUCTION)
  // ========================================
  {
    slug: 'chemin-des-dames-immersif',
    title: 'Le Chemin des Dames',
    client: 'L\'Essence de l\'Histoire (coproduction)',
    year: 2025,
    period: '2025 (en production)',
    sector: 'Histoire',
    format: 'Spectacle-dîner immersif',
    typology: 'Spectacle',
    location: 'À déterminer',
    tagline: '1ʳᵉ Guerre mondiale : narration, musique et gastronomie historique.',
    shortDescription:
      'Spectacle-dîner immersif sur la 1ʳᵉ Guerre mondiale en coproduction avec L\'Essence de l\'Histoire. Narration + musique live + gastronomie d\'époque pour une expérience totale.',
    longDescription: `Le Chemin des Dames (2025, en production) est un spectacle-dîner immersif combinant narration, musique live et gastronomie historique pour raconter la Première Guerre mondiale.

Projet en coproduction envisagée avec L'Essence de l'Histoire, ce spectacle propose une expérience totale où le public est plongé dans l'atmosphère de l'époque à travers un dispositif narratif, musical et culinaire.

L'objectif est de créer une immersion complète permettant de comprendre et ressentir cette période historique à travers tous les sens.

Statut : en cours de création, sortie prévue en 2025.`,
    roles: ['écriture', 'composition', 'interprétation', 'direction artistique'],
    partners: ['L\'Essence de l\'Histoire'],
    themes: ['1ʳᵉ Guerre mondiale', 'histoire', 'immersion', 'gastronomie'],
    devices: ['spectacle-dîner', 'immersif', 'plurisensoriel'],
    status: 'in_production',
    isFeatured: true,
    order: 13,
    gradient: 'linear-gradient(135deg, #1a2332 0%, #7d2e2e 100%)',
    dataClient: 'spectacle',
    dataType: 'immersive',
    dataCategory: 'spectacles',
  },
];

/**
 * Récupère tous les projets triés par ordre
 * @returns {Project[]}
 */
export const getAllProjects = () => {
  return [...projects].sort((a, b) => a.order - b.order);
};

/**
 * Récupère un projet par son slug
 * @param {string} slug
 * @returns {Project | undefined}
 */
export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug);
};

/**
 * Filtre les projets par statut
 * @param {ProjectStatus} status
 * @returns {Project[]}
 */
export const getProjectsByStatus = (status) => {
  return projects.filter((p) => p.status === status);
};

/**
 * Filtre les projets mis en avant
 * @returns {Project[]}
 */
export const getFeaturedProjects = () => {
  return projects.filter((p) => p.isFeatured);
};

/**
 * Filtre les projets par typologie
 * @param {ProjectTypology} typology
 * @returns {Project[]}
 */
export const getProjectsByTypology = (typology) => {
  return projects.filter((p) => p.typology === typology);
};

/**
 * Filtre les projets par secteur
 * @param {string} sector
 * @returns {Project[]}
 */
export const getProjectsBySector = (sector) => {
  return projects.filter((p) => p.sector === sector);
};

/**
 * Récupère tous les secteurs uniques
 * @returns {string[]}
 */
export const getAllSectors = () => {
  return [...new Set(projects.map((p) => p.sector))].sort();
};

/**
 * Récupère tous les thèmes uniques
 * @returns {string[]}
 */
export const getAllThemes = () => {
  const allThemes = projects.flatMap((p) => p.themes);
  return [...new Set(allThemes)].sort();
};
