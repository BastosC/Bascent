

// ADD USER ON SUBMIT
$('#formulaire').on('submit', function (evt) {
    let infos = $(this).serializeArray()
    evt.preventDefault();
    const identifiant = ((infos[0].value.slice(0, 2)).toUpperCase() + (infos[1].value).toLowerCase()) + getRandomInt(9) + getRandomInt(9) + getRandomInt(9) + getRandomInt(9)
    const mdp = generatePassword()
    document.getElementById('iden').value = identifiant
    document.getElementById('pass').value = mdp

    emailjs
        .sendForm('gmail', TEMPLATE_ID, document.getElementById('formulaire'), USER_ID)
        .then(
            () => {

                if ($('#input-poste').val() == 'eleve') {
                    db.collection('eleves').add({
                        nom: infos[0].value,
                        prenom: infos[1].value,
                        classe: infos[2].value,
                        mail: infos[3].value,
                        identifiant: identifiant,
                        password: mdp,
                        poste: 'Élève',
                    }).then(user => {
                        console.log('élève ajouté , ID: ', user.id);
                        db.collection('classes').doc(infos[2].value).update({
                            eleves: firebase.firestore.FieldValue.arrayUnion(user.id)
                        });
                        localStorage.setItem('Notif', "L'élève a bien été ajouté")
                        localStorage.setItem("editUser", user.id);
                        localStorage.setItem("editUserPoste", 'eleves');
                        self.location.href = 'espace_admin_utilisateur_modifier.html'
                    }).catch(() => {
                        alert("Une erreur est survenue dans l'ajout, réessayez ultérieurement")
                    })
                }

                else if ($('#input-poste').val() == 'formateur') {
                    db.collection('formateurs').add({
                        nom: infos[0].value,
                        prenom: infos[1].value,
                        mail: infos[2].value,
                        identifiant: identifiant,
                        password: mdp,
                        poste: 'Formateur',
                    }).then(ref => {
                        localStorage.setItem('Notif', "Le formateur a bien été ajouté")
                        localStorage.setItem("editUser", ref.id);
                        localStorage.setItem("editUserPoste", 'formateurs');
                        self.location.href = 'espace_admin_utilisateur_modifier.html'
                    }).catch(() => { alert("Une erreur est survenue dans l'ajout, réessayez ultérieurement") })
                }

                else if ($('#input-poste').val() == 'admin') {
                    let date = '' + new Date()
                    date = date.split('GMT')
                    console.log(date)
                    db.collection('admins').add({
                        nom: infos[0].value,
                        prenom: infos[1].value,
                        mail: infos[2].value,
                        identifiant: identifiant,
                        password: mdp,
                        poste: 'Administrateur',
                        date: date[0]
                    }).then(ref => {
                        localStorage.setItem('Notif', "L'administrateur a bien été ajouté")
                        localStorage.setItem("editUser", ref.id);
                        localStorage.setItem("editUserPoste", 'admins');
                        self.location.href = 'espace_admin_utilisateur_modifier.html'
                    }).catch(() => { alert("Une erreur est survenue, réessayez ultérieurement") })
                }
            },
            error => {
                console.log('ERROR EMAIL')
                console.log(error.text)
            }
        )
})



// SET CLASS OPTIONS 
db.collection('classes').get()
    .then(classes => {
        classes.forEach(classe => {
            $('#input-classe').append(`
            <option value="${classe.id}">${classe.data().nom}</option>
            `)
        })
    })



// CLEAR VALUES ON CLICK
$('#vider_champs').on('click', function () {
    document.getElementById('input-nom').value = ''
    document.getElementById('input-prenom').value = ''
    document.getElementById('input-classe').value = ''
    document.getElementById('input-mail').value = ''
    document.getElementById('sound-success').play()
    new Notyf({ duration: 4000, position: { x: 'center', y: 'bottom', } }).success('Les champs ont été vidés');
    console.log('lol')
})




// SELECT POSTE AUTO
$("#input-poste").prop("selectedIndex", localStorage.getItem('sidebar-ajout-user'));

// ENABLE INPUT CLASSE FOR STUDENT
document.getElementById('input-poste').addEventListener('change', function () {
    enableClasse()
})
// Première fois quand affichage de la page 
enableClasse()




///////////////////////     FONCTIONS //////////////////////////


// ENABLE INPUT CLASSE POUR ELEVE
function enableClasse() {
    if (document.getElementById('input-poste').value != 'eleve') {
        document.getElementById('input-classe').value = ''
        document.getElementById('input-classe').disabled = true
        document.getElementById('input-classe').required = false
    }
    else {
        document.getElementById('input-classe').disabled = false
        document.getElementById('input-classe').required = true
    }
}

// RANDOM NUMBER
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// GENERATE PASSWORD
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

