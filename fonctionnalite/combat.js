// recuperation des valeurs du personnage

nomJoueur = document.body.querySelector('.loupSolitaire').innerText;
habiliteJoueur = document.body.querySelector('.habilite_joueur').innerText;
enduranceJoueur = document.body.querySelector('.endurance_joueur').innerText;
orJoueur = document.body.querySelector('.or_joueur').innerText;
inventaireJoueur = document.body.querySelector('.inventaire_joueur').innerText;
bonusJoueur = document.body.querySelector('.bonus_joueur').innerText;


// recuperation des valeurs du monstre

nomMonstre = document.body.querySelector('.monstre').innerText;
habiliteMonstre = document.body.querySelector('.habilite_monstre').innerText;
enduranceMonstre = document.body.querySelector('.endurance_monstre').innerText;
orMonstre = document.body.querySelector('.or_monstre').innerText;
inventaireMonstre = document.body.querySelector('.inventaire_monstre').innerText;
bonusMonstre = document.body.querySelector('.bonus_monstre').innerText;

// recuperation de la page Mort

pageMort = document.body.querySelector('.pageMort').innerHTML;

// Création des personnages

loupSolitaire = new Personnage(nomJoueur, habiliteJoueur, enduranceJoueur, orJoueur, inventaireJoueur, bonusJoueur);
monstre = new Personnage(nomMonstre, habiliteMonstre, enduranceMonstre, orMonstre, inventaireMonstre, bonusMonstre);

//récuperation du choix de l'utilisateur pour les combats

// Combat Automatique

combatAutomatique = document.getElementById('combatAutomatique');
// evenement au click bouton
combatAutomatique.addEventListener('click', function () {

    // boucle pour tour de combat
    while ((loupSolitaire.endurance > 0) && (monstre.endurance > 0)) {

        // utilisation de la table de hasard
        resultatTableDeHasard = loupSolitaire.tableDeHasard();

        // combat
        loupSolitaire.assault(monstre);

        // test du popup de vie critique
        //        loupSolitaire.endurance = 10;

        // ecriture du reste de pv du joueur
       console.log(monstre.endurance); document.body.querySelector('.endurance_joueur').innerText = loupSolitaire.endurance;
        document.body.querySelector('.endurance_monstre').innerText = monstre.endurance;

        // mort du personnage
        if (loupSolitaire.endurance <= 0) {
            $("#combatAutomatiquecritique").click();
            $('.modal-body').html('Vous avez été vaincu  par : <br>' + monstre.nom + '<br><br> Rendez-vous à la page : <br>' + pageMort);
            $('.modal-footer').css('display', 'none');
            
console.log("coucou ");
            //mort du monstre
        } else if (monstre.endurance <= 0) {
            $("#combatAutomatiquecritique").click();
            document.body.querySelector('.modal-body').innerText = 'vous avez vaincu : ' + monstre.nom;
            $('.fuite').css('display', 'none');
            $('.combatAutomatiqueCritiqueContinue').css('display', 'none');
           console.log("coucou je vais bien ");
            // mise en place du modal pour proposer une fuite au joueur
        } else if (loupSolitaire.endurance <= 20 && loupSolitaire.endurance >= 1 && monstre.endurance > 0) {
            $("#combatAutomatiquecritique").click();
            document.body.querySelector('.modal-body').innerText = 'Il vous reste ' + loupSolitaire.endurance + ' points de vie. Voulez vous tenter une fuite ? Sinon continuer le combat, et essayer de suivre.';
            $('.combatAutomatiqueVictoire').css('display', 'none');
            break;
            
        }
    }
});

$('.combatAutomatiqueCritiqueContinue').click(function () {

    // boucle pour tour de combat
    while ((loupSolitaire.endurance > 0) && (monstre.endurance > 0)) {

        // utilisation de la table de hasard
        resultatTableDeHasard = loupSolitaire.tableDeHasard();

        // combat
        loupSolitaire.assault(monstre);

        // ecriture du reste de pv du joueur
        document.body.querySelector('.endurance_joueur').innerText = loupSolitaire.endurance;
        document.body.querySelector('.endurance_monstre').innerText = monstre.endurance;

        // mise en place du modal pour proposer une fuite au joueur
        if (loupSolitaire.endurance <= 0) {
            $('.modal-body').html('Vous avez été vaincu  par : <br>' + monstre.nom + '<br><br> Rendez-vous à la page : <br>' + pageMort);
            $('.modal-footer').css('display', 'none');

            //mort du monstre
        } else if (monstre.endurance <= 0) {
            document.body.querySelector('.modal-body').innerText = 'vous avez vaincu : ' + monstre.nom;
            $('.fuite').css('display', 'none');
            $('.combatAutomatiqueCritiqueContinue').css('display', 'none');
            $('.combatAutomatiqueVictoire').css('display', 'block');
        }
    }
});


// Combat Semi-Automatique
$('#modal_combat_semi_automatique').on('shown.bs.modal', function (event) {
    $('.resultatTableDeHasard').focus();
    combatSemiAutomatique = document.getElementById('envoiResultatTableDeHasard');
    // evenement au click bouton
    combatSemiAutomatique.addEventListener('click', function () {
        // recuperation de la saisie de la table des hasard par le joueur
        resultatTableDeHasard = $('.resultatTableDeHasard').val();
        // limite de saisie pour la table des hasard
        if (resultatTableDeHasard < 0 || resultatTableDeHasard > 9 || isNaN(resultatTableDeHasard)|| resultatTableDeHasard == '') {
            $('.erreur_Saisie_Table_De_Hasard').show();
            $('.resultatTableDeHasard').val('');
            $('.resultatTableDeHasard').focus();
        } else {
            $('.erreur_Saisie_Table_De_Hasard').hide();
            $('.resultatTableDeHasard').focus();
        }

        // si les champs d'afichage des PV restant pour le joueur et sa cible sont vide
        if (pv_restant_loup_solitaire == '' || pv_restant_cible == '') {
            // combat
            loupSolitaire.assault(monstre);
            // afichage des PV restant pour le joueur et sa cible 
            $('.modalCombat').css('display', 'block');
            $('.endurance_joueur').innerText = loupSolitaire.endurance;
            $('.endurance_monstre').innerText = monstre.endurance;
            $('#pts_de_vie_restant_joueur_combat_semi_automatique').append(loupSolitaire.endurance + ' Points d\'endurance');
            $('#pts_de_vie_restant_cible_combat_semi_automatique').append(monstre.endurance + ' Points d\'endurance');
            // modification du nombre de PV du joueur
            document.body.querySelector('.endurance_joueur').innerText = loupSolitaire.endurance;
            // vidage champ de saisie de la table des hasard
            $('.resultatTableDeHasard').val('');
            // si les champs d'afichage des PV restant pour le joueur et sa cible ne sont pas vide

        } else if (pv_restant_loup_solitaire !== '' || pv_restant_cible !== '') {
            // combat
            loupSolitaire.assault(monstre);
            // afichage des PV restant pour le joueur et sa cible 
            $('.modalCombat').css('display', 'block'); // afichage des PV restant pour le joueur et sa cible 
            $('#pts_de_vie_restant_joueur_combat_semi_automatique').text(loupSolitaire.endurance + ' Points d\'endurance');
            $('#pts_de_vie_restant_cible_combat_semi_automatique').text(monstre.endurance + ' Points d\'endurance');
            // modification du nombre de PV du joueur
            document.body.querySelector('.endurance_joueur').innerText = loupSolitaire.endurance;
            // vidage champ de saisie de la table des hasard
            $('.resultatTableDeHasard').val('');

        }

        // action si le joueur meurt
        if (loupSolitaire.endurance <= 0) {
            $('#envoiResultatTableDeHasard').css('display', 'none');
            $('.modalCombatCible').css('display', 'none');
            $('.modalCombat').css('display', 'none');
            $('.modalTableDeHasard').css('display', 'none');
            $('.fuite').css('display', 'none');
            $('.fenetre_Fin_Combat').css('display', 'block');
            $('.fin_Combat').append('Vous avez été vaincu  par : <br>' + monstre.nom + '<br><br> Rendez-vous à la page : <br>' + pageMort);

            // action si le monstre meurt    
        } else if (monstre.endurance <= 0) {
            $('#envoiResultatTableDeHasard').css('display', 'none');
            $('.modalCombatCible').css('display', 'none');
            $('.modalCombat').css('display', 'none');
            $('.modalTableDeHasard').css('display', 'none');
            $('.fuite').css('display', 'none');
            $('.fenetre_Fin_Combat').css('display', 'block');
            $('.fin_Combat').append('vous avez vaincu : ' + monstre.nom);
        }
    });
})


// Combat Manuel   
    
combatManuel = document.getElementById('combatManuel');
// evenement au click bouton
combatManuel.addEventListener('click', function () {

    // champs de saisie du nombre de pv restant au joueur
    loupSolitaire.endurance = prompt('Saisissez le nombre de point de vie qu\'il vous reste');

    // modification du nombre de pv restant au joueur
    document.body.querySelector('.endurance_joueur').innerText = loupSolitaire.endurance;

    // action si le joueur meurt
    if (loupSolitaire.endurance.val <= 0) {
    
    
    
    }
});

// Fuite  (remplissage de la fonction a chaque page )
