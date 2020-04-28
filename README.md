
# ClassroomRegister - L'école multimédia

## Démo : [Lien](https://portfolio-bastien-chantrel.000webhostapp.com/index.html)


## Consignes

Nous devions réaliser une application web qui permet de gérer au mieux la présence des étudiants en classe.

Cette application doit être utile pour les étudiants, les formateurs et l’école.

Les questions auxquelles notre application doit répondre au minimum sont les suivantes :

1. En temps qu’étudiant, comment avertir le formateur de mon retard ou de mon absence.

2. En temps que formateur, comment noter les étudiants présents/absents/en retard sans perdre de temps en début de cours

3. Pour l’école, comment avoir accès à une synthèse permettant de connaître les étudiants présents, absents ou en retard par classe, par élève.


## Développé avec :

* [SSB - Admin 2 ](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2) - Template
*  [jQuery](https://jquery.com/) - Bibliothèque / Librairie
*  [FullCalendar](https://fullcalendar.io/) - API pour le calendrier
*  [Cloud Firestore](https://firebase.google.com/docs/firestore) - Base de données

## Prérequis :

###### Créer une base de données cloud firestore avec ces collections vides :
###### * eleves
###### * formateurs
###### * administrateurs
###### * cours
###### * absences
###### * justifications

###### Puis ajouter la firebaseConfig de votre base de données au projet ainsi que l'année actuelle dans [all_tools.js](https://github.com/BastosC/Bascent/blob/master/js/all_tools.js)

```javascript
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const annee = '2019-2020'
```

## Présentation :

#### [Espace Connexion](#espace-connexion)
#### [Espace Élève](#espace-eleve)
#### [Espace Formateur](#espace-formateur)
#### [Espace Administrateur](#espace-administrateur)
#### [Mot de passe oublié](#espace-password)
#### [Retour à l'espace connexion](#espace-refresh)





<h3><a name="espace-connexion">Espace Connexion :</a></h3>

![alt text](markdown-assets/Capture-espace-connexion.JPG "Logo Title Text 1")
###### [HTML](https://github.com/BastosC/Bascent/blob/master/index.html) / [Javascript](https://github.com/BastosC/Bascent/blob/master/js/login.js)
###### L'espace connexion permet de se connecter avec ses identifiants en sélectionnant le poste correspondant, l'utilisateur peux accéder à la page pour retrouver son mot de passe



<h3><a name="espace-eleve">Espace Eleve</a></h3>


<h3><a name="espace-formateur">Espace Formateur</a></h3>
<h3><a name="espace-administrateur">Espace Administrateur</a></h3>
<h3><a name="espace-password">Mot de passe oublié</a></h3>
<h3><a name="espace-refresh">Retour à l'espace connexion</a></h3>






## Auteurs

* **Bastien CHANTREL** - *Developpement work* - [BastosC](https://github.com/BastosC)
* **Vincent PAPIN** - *Developpement work* - [Vincent-PAPIN](https://github.com/Vincent-PAPIN)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


