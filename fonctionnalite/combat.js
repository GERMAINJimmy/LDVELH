// recuperation des valeurs du personnage

nomJoueur = $('.loupSolitaire').text();
habiliteJoueur = $('.habilite_joueur').text();
enduranceJoueur = $('.endurance_joueur').text();
orJoueur = $('.or_joueur').text();
inventaireJoueur = $('.inventaire_joueur').text();
bonusJoueur = $('.bonus_joueur').text();


// recuperation des valeurs du monstre

nomMonstre = $('.monstre').text();
habiliteMonstre = $('.habilite_monstre').text();
enduranceMonstre = $('.endurance_monstre').text();
orMonstre = $('.or_monstre').text();
inventaireMonstre = $('.inventaire_monstre').text();
bonusMonstre = $('.bonus_monstre').text();

// recuperation de la page Mort

pageMort = $('.pageMort').html();

// Création des personnages

loupSolitaire = new Personnage(nomJoueur, habiliteJoueur, enduranceJoueur, orJoueur, inventaireJoueur, bonusJoueur);
monstre = new Personnage(nomMonstre, habiliteMonstre, enduranceMonstre, orMonstre, inventaireMonstre, bonusMonstre);


$('#modalCombat').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget)
    let recipient = button.data('whatever')
    let modal = $(this)

    // Combat Automatique
    if (recipient == 'Combat Automatique') {
        // mise en place d'un titre de modal
        modal.find('.modal-title').text(recipient)

        while ((loupSolitaire.endurance > 0) && (monstre.endurance > 0)) {

            // utilisation de la table de hasard
            resultatTableDeHasard = loupSolitaire.tableDeHasard();

            // combat
            loupSolitaire.assault(monstre);

            // ecriture du reste de pv du joueur
            $('.endurance_joueur').text(loupSolitaire.endurance);
            $('.endurance_monstre').text(monstre.endurance);

            // mort du personnage
            if (loupSolitaire.endurance <= 0) {
                $('.modal-body').html(`Vous avez été vaincu  par : <br> ${monstre.nom} <br><br> Rendez-vous à la page : <br> ${pageMort}`);
                $('.modal-footer').css('display', 'none');

                //mort du monstre
            } else if (monstre.endurance <= 0) {
                $('.modal-body').html(`vous avez vaincu : ${monstre.nom}`);
                $('.continuerCA').css('display', 'none');
                $('.continuerCSA').css('display', 'none');
                $('.continuerCM').css('display', 'none');
                $('.fuite').text('Continuer');
                // mise en place du modal pour proposer une fuite au joueur
            } else if (loupSolitaire.endurance <= 10 && loupSolitaire.endurance >= 1 && monstre.endurance > 0) {
                $('.modal-body').text(`Il vous reste ${loupSolitaire.endurance} points de vie. Voulez vous tenter une fuite ? Sinon continuer le combat, et essayer de survivre.`);
                $('.continuerCSA').css('display', 'none');
                $('.continuerCM').css('display', 'none');
                break;
            }
        }
    }
    // si click pour continuer le combat
    $('.continuerCA').click(function () {

        // boucle pour tour de combat
        while ((loupSolitaire.endurance > 0) && (monstre.endurance > 0)) {

            // utilisation de la table de hasard
            resultatTableDeHasard = loupSolitaire.tableDeHasard();

            // combat
            loupSolitaire.assault(monstre);

            // ecriture du reste de pv du joueur
            $('.endurance_joueur').text(loupSolitaire.endurance);
            $('.endurance_monstre').text(monstre.endurance);

            // mise en place du modal pour proposer une fuite au joueur
            if (loupSolitaire.endurance <= 0) {
                $('.modal-body').html(`Vous avez été vaincu  par : <br> ${monstre.nom} <br><br> Rendez-vous à la page : <br> ${pageMort}`);
                $('.modal-footer').css('display', 'none');

                //mort du monstre
            } else if (monstre.endurance <= 0) {
                $('.modal-body').html(`vous avez vaincu : ${monstre.nom}`);
                $('.continuerCA').css('display', 'none');
                $('.continuerCSA').css('display', 'none');
                $('.continuerCM').css('display', 'none');
                $('.fuite').text('Continuer');
            }
        }
    });
    // si click pour fuire le combat
    $('.fuite').click(function () {});

    // Combat Semi-Automatique
    if (recipient == 'Combat Semi-Automatique') {
        // mise en place d'un titre de modal
        modal.find('.modal-title').text(recipient);
        modal.find('.modal-body label').text('Entrez la valeur de la Table de Hasard :');
        $('.continuerCA').css('display', 'none');
        $('.continuerCM').css('display', 'none');

        // evenement au click bouton
        $('.continuerCSA').click(function () {
            // recuperation de la saisie de la table des hasard par le joueur
            resultatTableDeHasard = $('input').val();
            // limite de saisie pour la table des hasard
            if (resultatTableDeHasard < 0 || resultatTableDeHasard > 9 || isNaN(resultatTableDeHasard) || resultatTableDeHasard == '') {
                $('#message_erreur').text('Saisissez le numéro de la table de hasard.');
                $('#recipient-name').val('');
                $('#recipient-name').focus();
            } else {
                $('#message_erreur').hide();
                $('#recipient-name').focus();
            }

            // combat
            loupSolitaire.assault(monstre);
            // afichage des PV restant pour le joueur et sa cible 
            $('.message p').html(`Il reste au ${loupSolitaire.nom} : <br> ${loupSolitaire.endurance} points d\'endurance <br><br>`);
            $('.message p').append(`Il reste au ${monstre.nom} : <br> ${monstre.endurance} points d\'endurance <br><br>`);

            // modification du nombre de PV du joueur et du monstre
            $('.endurance_joueur').text(loupSolitaire.endurance);
            $('.endurance_monstre').text(monstre.endurance);

            // vidage champ de saisie de la table des hasard
            $('#recipient-name').val('');

            // action si le joueur meurt
            if (loupSolitaire.endurance <= 0) {
                $('.recipient').css('display', 'none');
                $('.modal-footer').css('display', 'none');
                $('.modal-body').html(`Vous avez été vaincu  par : <br> ${monstre.nom} <br><br> Rendez-vous à la page : <br> ${pageMort}`);

                // action si le monstre meurt    
            } else if (monstre.endurance <= 0) {
                $('.modal-body').html(`vous avez vaincu : ${monstre.nom}`);
                $('.continuerCSA').css('display', 'none');
                $('.fuite').text('Continuer');
            }
        });
    }

    // Combat Manuel
    if (recipient == 'Combat Manuel') {
        // mise en place d'un titre de modal
        modal.find('.modal-title').text(recipient);
        // mise en place de la zone de saisie
        modal.find('.modal-body label').text('Entrez le nombre de points d\'endurance qu\'il vous reste :');
        $('.continuerCA').css('display', 'none');
        $('.continuerCSA').css('display', 'none');
        $('.fuite').css('display', 'none');
        $('.continuerCM').click(function () {
            loupSolitaire.endurance = $('input').val();
            
            
            if (loupSolitaire.endurance < 0 || isNaN(loupSolitaire.endurance) || loupSolitaire.endurance == '') {
                $('#message_erreur').text('Saisissez un numéro supérieur ou égale à 0.');
                $('#recipient-name').val('');
                $('#recipient-name').focus();
            } else if (loupSolitaire.endurance == 0){
                $('.recipient').css('display', 'none');
                $('.modal-footer').css('display', 'none');
                $('.message p').html(`Vous avez été vaincu  par : <br>${monstre.nom}<br><br> Rendez-vous à la page : <br> ${pageMort}`);                
            }else {
                $('#message_erreur').hide();
                $('.endurance_joueur').text(loupSolitaire.endurance);
                $('.fuite').click();
            }
            
        })        
    }
})
