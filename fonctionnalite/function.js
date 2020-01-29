let nomJoueur, nomMonstre, habiliteJoueur, habiliteMonstre, enduranceJoueur, enduranceMonstre, orJoueur, orMonstre, inventaireJoueur, inventaireMonstre, bonusJoueur, bonusMonstre, quotientAttaque, tableauCombat, resultatassault, resultatassaultJoueur, resultatassaultMonstre, resultatTableDeHasard, pageMort, combatAutomatique, combatSemiAutomatique, combatManuel, pv_restant_loup_solitaire, pv_restant_cible, fin_Combat, fenetre_Fin_Combat, texteModalCombat, envoiResultatTableDeHasard, modalCombatCible, modalCombatJoueur, modalTableDeHasard, erreur_Saisie_Table_De_Hasard, combatAutomatiqueCritiqueContinue, fuite;

// création de la classe Personnage pour le joueur et les monstres
class Personnage {
    constructor(nom, habilite, endurance, or, inventaire, bonus) {
        this.nom = nom;
        this.habilite = habilite * 1; // *1 pour l'obliger à prendre en compte les chiffres
        this.endurance = endurance * 1;
        this.or = or * 1;
        this.inventaire = inventaire;
        this.bonus = bonus * 1;
    }

    // mise en place d'un random pour 10 chiffres
    tableDeHasard() {
        return Math.round(Math.random() * 9);
    }

    // autre methode pour la TABLE DES JES DE DES
    /*    tableDesCoupsPortes(cible){
            
            resultatTableDeHasard = this.tableDeHasard();
            
            switch (quotientAttaque) {
                    
            case (quotientAttaque <= -11):
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 6;
                } else if (resultat == 1) {
                    this.endurance = 0;
                    cible.endurance -= 0;
                } else if (resultat == 2) {
                    this.endurance = 0;
                    cible.endurance -= 0;
                } else if (resultat == 3) {
                    this.endurance -= 8;
                    cible.endurance -= 0;
                } else if (resultat == 4) {
                    this.endurance -= 8;
                    cible.endurance -= 0;
                } else if (resultat == 5) {
                    this.endurance -= 7;
                    cible.endurance -= 1;
                } else if (resultat == 6) {
                    this.endurance -= 6;
                    cible.endurance -= 2;
                } else if (resultat == 7) {
                    this.endurance -= 5;
                    cible.endurance -= 3;
                } else if (resultat == 8) {
                    this.endurance -= 4;
                    cible.endurance -= 4;
                } else if (resultat == 9) {
                    this.endurance -= 3;
                    cible.endurance -= 5;
                }
                break;
            case -10:
            case -9:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 7;
                } else if (resultat == 1) {
                    this.endurance = 0;
                    cible.endurance -= 0;
                } else if (resultat == 2) {
                    this.endurance -= 8;
                    cible.endurance -= 0;
                } else if (resultat == 3) {
                    this.endurance -= 7;
                    cible.endurance -= 0;
                } else if (resultat == 4) {
                    this.endurance -= 7;
                    cible.endurance -= 1;
                } else if (resultat == 5) {
                    this.endurance -= 7;
                    cible.endurance -= 2;
                } else if (resultat == 6) {
                    this.endurance -= 6;
                    cible.endurance -= 3;
                } else if (resultat == 7) {
                    this.endurance -= 5;
                    cible.endurance -= 4;
                } else if (resultat == 8) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 9) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                }
                break;
            case -8:
            case -7:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 8;
                } else if (resultat == 1) {
                    this.endurance -= 8;
                    cible.endurance -= 0;
                } else if (resultat == 2) {
                    this.endurance -= 7;
                    cible.endurance -= 0;
                } else if (resultat == 3) {
                    this.endurance -= 6;
                    cible.endurance -= 1;
                } else if (resultat == 4) {
                    this.endurance -= 6;
                    cible.endurance -= 2;
                } else if (resultat == 5) {
                    this.endurance -= 5;
                    cible.endurance -= 3;
                } else if (resultat == 6) {
                    this.endurance -= 5;
                    cible.endurance -= 4;
                } else if (resultat == 7) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 8) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 9) {
                    this.endurance -= 2;
                    cible.endurance -= 7;
                }
                break;
            case -6:
            case -5:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 9;
                } else if (resultat == 1) {
                    this.endurance -= 6;
                    cible.endurance -= 0;
                } else if (resultat == 2) {
                    this.endurance -= 6;
                    cible.endurance -= 1;
                } else if (resultat == 3) {
                    this.endurance -= 5;
                    cible.endurance -= 2;
                } else if (resultat == 4) {
                    this.endurance -= 5;
                    cible.endurance -= 3;
                } else if (resultat == 5) {
                    this.endurance -= 4;
                    cible.endurance -= 4;
                } else if (resultat == 6) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 7) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 8) {
                    this.endurance -= 2;
                    cible.endurance -= 7;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 8;
                }
                break;
            case -4:
            case -3:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 10;
                } else if (resultat == 1) {
                    this.endurance -= 6;
                    cible.endurance -= 1;
                } else if (resultat == 2) {
                    this.endurance -= 5;
                    cible.endurance -= 2;
                } else if (resultat == 3) {
                    this.endurance -= 5;
                    cible.endurance -= 3;
                } else if (resultat == 4) {
                    this.endurance -= 4;
                    cible.endurance -= 4;
                } else if (resultat == 5) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 6) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 7) {
                    this.endurance -= 2;
                    cible.endurance -= 7;
                } else if (resultat == 8) {
                    this.endurance -= 1;
                    cible.endurance -= 8;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 9;
                }
                break;
            case -2:
            case -1:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 11;
                } else if (resultat == 1) {
                    this.endurance -= 5;
                    cible.endurance -= 2;
                } else if (resultat == 2) {
                    this.endurance -= 5;
                    cible.endurance -= 3;
                } else if (resultat == 3) {
                    this.endurance -= 4;
                    cible.endurance -= 4;
                } else if (resultat == 4) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 5) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 6) {
                    this.endurance -= 2;
                    cible.endurance -= 7;
                } else if (resultat == 7) {
                    this.endurance -= 2;
                    cible.endurance -= 8;
                } else if (resultat == 8) {
                    this.endurance -= 1;
                    cible.endurance -= 9;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 10;
                }
                break;
            case 0:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 12;
                } else if (resultat == 1) {
                    this.endurance -= 5;
                    cible.endurance -= 3;
                } else if (resultat == 2) {
                    this.endurance -= 4;
                    cible.endurance -= 4;
                } else if (resultat == 3) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 4) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 5) {
                    this.endurance -= 2;
                    cible.endurance -= 7;
                } else if (resultat == 6) {
                    this.endurance -= 2;
                    cible.endurance -= 8;
                } else if (resultat == 7) {
                    this.endurance -= 1;
                    cible.endurance -= 9;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance -= 10;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 11;
                }
                break;
            case 1:
            case 2:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 14;
                } else if (resultat == 1) {
                    this.endurance -= 5;
                    cible.endurance -= 4;
                } else if (resultat == 2) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 3) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 4) {
                    this.endurance -= 3;
                    cible.endurance -= 7;
                } else if (resultat == 5) {
                    this.endurance -= 2;
                    cible.endurance -= 8;
                } else if (resultat == 6) {
                    this.endurance -= 2;
                    cible.endurance -= 9;
                } else if (resultat == 7) {
                    this.endurance -= 1;
                    cible.endurance -= 10;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance -= 11;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 12;
                }
                break;
            case 3:
            case 4:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 16;
                } else if (resultat == 1) {
                    this.endurance -= 4;
                    cible.endurance -= 5;
                } else if (resultat == 2) {
                    this.endurance -= 3;
                    cible.endurance -= 6;
                } else if (resultat == 3) {
                    this.endurance -= 3;
                    cible.endurance -= 7;
                } else if (resultat == 4) {
                    this.endurance -= 2;
                    cible.endurance -= 8;
                } else if (resultat == 5) {
                    this.endurance -= 2;
                    cible.endurance -= 9;
                } else if (resultat == 6) {
                    this.endurance -= 2;
                    cible.endurance -= 10;
                } else if (resultat == 7) {
                    this.endurance -= 1;
                    cible.endurance -= 11;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance -= 12;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 14;
                }
                break;
            case 5:
            case 6:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance -= 18;
                } else if (resultat == 1) {
                    this.endurance -= 4;
                    cible.endurance -= 6;
                } else if (resultat == 2) {
                    this.endurance -= 3;
                    cible.endurance -= 7;
                } else if (resultat == 3) {
                    this.endurance -= 3;
                    cible.endurance -= 8;
                } else if (resultat == 4) {
                    this.endurance -= 2;
                    cible.endurance -= 9;
                } else if (resultat == 5) {
                    this.endurance -= 2;
                    cible.endurance -= 10;
                } else if (resultat == 6) {
                    this.endurance -= 1;
                    cible.endurance -= 11;
                } else if (resultat == 7) {
                    this.endurance -= 0;
                    cible.endurance -= 12;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance -= 14;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 16;
                }
                break;
            case 7:
            case 8:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance = 0;
                } else if (resultat == 1) {
                    this.endurance -= 4;
                    cible.endurance -= 7;
                } else if (resultat == 2) {
                    this.endurance -= 3;
                    cible.endurance -= 8;
                } else if (resultat == 3) {
                    this.endurance -= 2;
                    cible.endurance -= 9;
                } else if (resultat == 4) {
                    this.endurance -= 2;
                    cible.endurance -= 10;
                } else if (resultat == 5) {
                    this.endurance -= 2;
                    cible.endurance -= 11;
                } else if (resultat == 6) {
                    this.endurance -= 1;
                    cible.endurance -= 12;
                } else if (resultat == 7) {
                    this.endurance -= 0;
                    cible.endurance -= 14;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance -= 16;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance -= 18;
                }
                break;
            case 9:
            case 10:
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance = 0;
                } else if (resultat == 1) {
                    this.endurance -= 3;
                    cible.endurance -= 8;
                } else if (resultat == 2) {
                    this.endurance -= 3;
                    cible.endurance -= 9;
                } else if (resultat == 3) {
                    this.endurance -= 2;
                    cible.endurance -= 10;
                } else if (resultat == 4) {
                    this.endurance -= 2;
                    cible.endurance -= 11;
                } else if (resultat == 5) {
                    this.endurance -= 2;
                    cible.endurance -= 12;
                } else if (resultat == 6) {
                    this.endurance -= 1;
                    cible.endurance -= 14;
                } else if (resultat == 7) {
                    this.endurance -= 0;
                    cible.endurance -= 16;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance -= 18;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance = 0;
                }
                break;
            case (quotientAttaque >= 11):
                if (resultat == 0) {
                    this.endurance -= 0;
                    cible.endurance = 0;
                } else if (resultat == 1) {
                    this.endurance -= 3;
                    cible.endurance -= 9;
                } else if (resultat == 2) {
                    this.endurance -= 2;
                    cible.endurance -= 10;
                } else if (resultat == 3) {
                    this.endurance -= 2;
                    cible.endurance -= 11;
                } else if (resultat == 4) {
                    this.endurance -= 2;
                    cible.endurance -= 12;
                } else if (resultat == 5) {
                    this.endurance -= 1;
                    cible.endurance -= 14;
                } else if (resultat == 6) {
                    this.endurance -= 1;
                    cible.endurance -= 16;
                } else if (resultat == 7) {
                    this.endurance -= 0;
                    cible.endurance -= 18;
                } else if (resultat == 8) {
                    this.endurance -= 0;
                    cible.endurance = 0;
                } else if (resultat == 9) {
                    this.endurance -= 0;
                    cible.endurance = 0;
                }
                break;
        }*/

    tableauDesCoupsPortes() {

        // creation du premier tableau

        tableauCombat = new Array();

        // creation du deuxieme tableau inclu dans le premier

        for (var i = 0; i < 10; i++) {
            tableauCombat[i] = new Array();
        }

        for (var i = 0; i < 10; i++) {
            for (var j = -11; j < 12; j++)
                tableauCombat[i][j] = new Array();
        }

        // ajout des valeurs dans le deuxieme tableau

        tableauCombat[0][-11] = [-6, -0];
        tableauCombat[0][-10] = [-7, -0];
        tableauCombat[0][-9] = [-7, -0];
        tableauCombat[0][-8] = [-8, -0];
        tableauCombat[0][-7] = [-8, -0];
        tableauCombat[0][-6] = [-9, -0];
        tableauCombat[0][-5] = [-9, -0];
        tableauCombat[0][-4] = [-10, -0];
        tableauCombat[0][-3] = [-10, -0];
        tableauCombat[0][-2] = [-11, -0];
        tableauCombat[0][-1] = [-11, -0];
        tableauCombat[0][0] = [-12, -0];
        tableauCombat[0][1] = [-14, -0];
        tableauCombat[0][2] = [-14, -0];
        tableauCombat[0][3] = [-16, -0];
        tableauCombat[0][4] = [-16, -0];
        tableauCombat[0][5] = [-18, -0];
        tableauCombat[0][6] = [-18, -0];
        tableauCombat[0][7] = ['Mort', -0];
        tableauCombat[0][8] = ['Mort', -0];
        tableauCombat[0][9] = ['Mort', -0];
        tableauCombat[0][10] = ['Mort', -0];
        tableauCombat[0][11] = ['Mort', -0];

        tableauCombat[1][-11] = [-0, 'Mort'];
        tableauCombat[1][-10] = [-0, 'Mort'];
        tableauCombat[1][-9] = [-0, 'Mort'];
        tableauCombat[1][-8] = [-0, -8];
        tableauCombat[1][-7] = [-0, -8];
        tableauCombat[1][-6] = [-0, -6];
        tableauCombat[1][-5] = [-0, -6];
        tableauCombat[1][-4] = [-1, -6];
        tableauCombat[1][-3] = [-1, -6];
        tableauCombat[1][-2] = [-2, -5];
        tableauCombat[1][-1] = [-2, -5];
        tableauCombat[1][0] = [-3, -5];
        tableauCombat[1][1] = [-4, -5];
        tableauCombat[1][2] = [-4, -5];
        tableauCombat[1][3] = [-5, -4];
        tableauCombat[1][4] = [-5, -4];
        tableauCombat[1][5] = [-6, -4];
        tableauCombat[1][6] = [-6, -4];
        tableauCombat[1][7] = [-7, -4];
        tableauCombat[1][8] = [-7, -4];
        tableauCombat[1][9] = [-8, -3];
        tableauCombat[1][10] = [-8, -3];
        tableauCombat[1][11] = [-9, -3];

        tableauCombat[2][-11] = [-0, 'Mort'];
        tableauCombat[2][-10] = [-0, -8];
        tableauCombat[2][-9] = [-0, -8];
        tableauCombat[2][-8] = [-0, -7];
        tableauCombat[2][-7] = [-0, -7];
        tableauCombat[2][-6] = [-1, -6];
        tableauCombat[2][-5] = [-1, -6];
        tableauCombat[2][-4] = [-2, -5];
        tableauCombat[2][-3] = [-2, -5];
        tableauCombat[2][-2] = [-3, -5];
        tableauCombat[2][-1] = [-3, -5];
        tableauCombat[2][0] = [-4, -4];
        tableauCombat[2][1] = [-5, -4];
        tableauCombat[2][2] = [-5, -4];
        tableauCombat[2][3] = [-6, -3];
        tableauCombat[2][4] = [-6, -3];
        tableauCombat[2][5] = [-7, -3];
        tableauCombat[2][6] = [-7, -3];
        tableauCombat[2][7] = [-8, -3];
        tableauCombat[2][8] = [-8, -3];
        tableauCombat[2][9] = [-9, -3];
        tableauCombat[2][10] = [-9, -3];
        tableauCombat[2][11] = [-10, -2];

        tableauCombat[3][-11] = [-0, -8];
        tableauCombat[3][-10] = [-0, -7];
        tableauCombat[3][-9] = [-0, -7];
        tableauCombat[3][-8] = [-1, -6];
        tableauCombat[3][-7] = [-1, -6];
        tableauCombat[3][-6] = [-2, -5];
        tableauCombat[3][-5] = [-2, -5];
        tableauCombat[3][-4] = [-3, -5];
        tableauCombat[3][-3] = [-3, -5];
        tableauCombat[3][-2] = [-4, -4];
        tableauCombat[3][-1] = [-4, -4];
        tableauCombat[3][0] = [-5, -4];
        tableauCombat[3][1] = [-6, -3];
        tableauCombat[3][2] = [-6, -3];
        tableauCombat[3][3] = [-7, -3];
        tableauCombat[3][4] = [-7, -3];
        tableauCombat[3][5] = [-8, -3];
        tableauCombat[3][6] = [-8, -3];
        tableauCombat[3][7] = [-9, -3];
        tableauCombat[3][8] = [-9, -3];
        tableauCombat[3][9] = [-10, -2];
        tableauCombat[3][10] = [-10, -2];
        tableauCombat[3][11] = [-11, -2];

        tableauCombat[4][-11] = [-0, -8];
        tableauCombat[4][-10] = [-1, -7];
        tableauCombat[4][-9] = [-1, -7];
        tableauCombat[4][-8] = [-2, -6];
        tableauCombat[4][-7] = [-2, -6];
        tableauCombat[4][-6] = [-3, -5];
        tableauCombat[4][-5] = [-3, -5];
        tableauCombat[4][-4] = [-4, -4];
        tableauCombat[4][-3] = [-4, -4];
        tableauCombat[4][-2] = [-5, -4];
        tableauCombat[4][-1] = [-5, -4];
        tableauCombat[4][0] = [-6, -3];
        tableauCombat[4][1] = [-7, -3];
        tableauCombat[4][2] = [-7, -3];
        tableauCombat[4][3] = [-8, -2];
        tableauCombat[4][4] = [-8, -2];
        tableauCombat[4][5] = [-9, -2];
        tableauCombat[4][6] = [-9, -2];
        tableauCombat[4][7] = [-11, -2];
        tableauCombat[4][8] = [-11, -2];
        tableauCombat[4][9] = [-11, -2];
        tableauCombat[4][10] = [-11, -2];
        tableauCombat[4][11] = [-12, -2];

        tableauCombat[5][-11] = [-1, -7];
        tableauCombat[5][-10] = [-2, -6];
        tableauCombat[5][-9] = [-2, -6];
        tableauCombat[5][-8] = [-3, -5];
        tableauCombat[5][-7] = [-3, -5];
        tableauCombat[5][-6] = [-4, -4];
        tableauCombat[5][-5] = [-4, -4];
        tableauCombat[5][-4] = [-5, -4];
        tableauCombat[5][-3] = [-5, -4];
        tableauCombat[5][-2] = [-6, -3];
        tableauCombat[5][-1] = [-6, -3];
        tableauCombat[5][0] = [-7, -2];
        tableauCombat[5][1] = [-8, -2];
        tableauCombat[5][2] = [-8, -2];
        tableauCombat[5][3] = [-9, -2];
        tableauCombat[5][4] = [-9, -2];
        tableauCombat[5][5] = [-10, -2];
        tableauCombat[5][6] = [-10, -2];
        tableauCombat[5][7] = [-11, -2];
        tableauCombat[5][8] = [-11, -2];
        tableauCombat[5][9] = [-12, -2];
        tableauCombat[5][10] = [-12, -2];
        tableauCombat[5][11] = [-14, -1];

        tableauCombat[6][-11] = [-2, -6];
        tableauCombat[6][-10] = [-3, -6];
        tableauCombat[6][-9] = [-3, -6];
        tableauCombat[6][-8] = [-4, -5];
        tableauCombat[6][-7] = [-4, -5];
        tableauCombat[6][-6] = [-5, -4];
        tableauCombat[6][-5] = [-5, -4];
        tableauCombat[6][-4] = [-6, -3];
        tableauCombat[6][-3] = [-6, -3];
        tableauCombat[6][-2] = [-7, -2];
        tableauCombat[6][-1] = [-7, -2];
        tableauCombat[6][0] = [-8, -2];
        tableauCombat[6][1] = [-9, -2];
        tableauCombat[6][2] = [-9, -2];
        tableauCombat[6][3] = [-10, -2];
        tableauCombat[6][4] = [-10, -2];
        tableauCombat[6][5] = [-11, -1];
        tableauCombat[6][6] = [-11, -1];
        tableauCombat[6][7] = [-12, -1];
        tableauCombat[6][8] = [-12, -1];
        tableauCombat[6][9] = [-14, -1];
        tableauCombat[6][10] = [-14, -1];
        tableauCombat[6][11] = [-16, -1];

        tableauCombat[7][-11] = [-3, -5];
        tableauCombat[7][-10] = [-4, -5];
        tableauCombat[7][-9] = [-4, -5];
        tableauCombat[7][-8] = [-5, -4];
        tableauCombat[7][-7] = [-5, -4];
        tableauCombat[7][-6] = [-6, -3];
        tableauCombat[7][-5] = [-6, -3];
        tableauCombat[7][-4] = [-7, -2];
        tableauCombat[7][-3] = [-7, -2];
        tableauCombat[7][-2] = [-8, -2];
        tableauCombat[7][-1] = [-8, -2];
        tableauCombat[7][0] = [-9, -1];
        tableauCombat[7][1] = [-10, -1];
        tableauCombat[7][2] = [-10, -1];
        tableauCombat[7][3] = [-11, -1];
        tableauCombat[7][4] = [-11, -1];
        tableauCombat[7][5] = [-12, -0];
        tableauCombat[7][6] = [-12, -0];
        tableauCombat[7][7] = [-14, -0];
        tableauCombat[7][8] = [-14, -0];
        tableauCombat[7][9] = [-16, -0];
        tableauCombat[7][10] = [-16, -0];
        tableauCombat[7][11] = [-18, -0];


        tableauCombat[8][-11] = [-4, -4];
        tableauCombat[8][-10] = [-5, -4];
        tableauCombat[8][-9] = [-5, -4];
        tableauCombat[8][-8] = [-6, -3];
        tableauCombat[8][-7] = [-6, -3];
        tableauCombat[8][-6] = [-7, -2];
        tableauCombat[8][-5] = [-7, -2];
        tableauCombat[8][-4] = [-8, -1];
        tableauCombat[8][-3] = [-8, -1];
        tableauCombat[8][-2] = [-9, -1];
        tableauCombat[8][-1] = [-9, -1];
        tableauCombat[8][0] = [-10, -0];
        tableauCombat[8][1] = [-11, -0];
        tableauCombat[8][2] = [-11, -0];
        tableauCombat[8][3] = [-12, -0];
        tableauCombat[8][4] = [-12, -0];
        tableauCombat[8][5] = [-14, -0];
        tableauCombat[8][6] = [-14, -0];
        tableauCombat[8][7] = [-16, -0];
        tableauCombat[8][8] = [-16, -0];
        tableauCombat[8][9] = [-18, -0];
        tableauCombat[8][10] = [-18, -0];
        tableauCombat[8][11] = ['Mort', -0];

        tableauCombat[9][-11] = [-5, -3];
        tableauCombat[9][-10] = [-6, -3];
        tableauCombat[9][-9] = [-6, -3];
        tableauCombat[9][-8] = [-7, -2];
        tableauCombat[9][-7] = [-7, -2];
        tableauCombat[9][-6] = [-8, -0];
        tableauCombat[9][-5] = [-8, -0];
        tableauCombat[9][-4] = [-9, -0];
        tableauCombat[9][-3] = [-9, -0];
        tableauCombat[9][-2] = [-10, -0];
        tableauCombat[9][-1] = [-10, -0];
        tableauCombat[9][0] = [-11, -0];
        tableauCombat[9][1] = [-12, -0];
        tableauCombat[9][2] = [-12, -0];
        tableauCombat[9][3] = [-14, -0];
        tableauCombat[9][4] = [-14, -0];
        tableauCombat[9][5] = [-16, -0];
        tableauCombat[9][6] = [-16, -0];
        tableauCombat[9][7] = [-18, -0];
        tableauCombat[9][8] = [-18, -0];
        tableauCombat[9][9] = ['Mort', -0];
        tableauCombat[9][10] = ['Mort', -0];
        tableauCombat[9][11] = ['Mort', -0];

        // fin d'ajout des valeurs
    }

    assault(cible) {

        //QUOTIENTATTAQUE

        quotientAttaque = (this.habilite + this.bonus) - (cible.habilite + cible.bonus);
        if (quotientAttaque >= 11) {
            quotientAttaque = 11;
        } else if (quotientAttaque <= -11) {
            quotientAttaque = -11;
        }

        // TABLE DES JES DE DES

        //    this.tableDesCoupsPortes(cible);
        this.tableauDesCoupsPortes();

        // LECTURE DES TABLES de façon dynamique

        resultatassaultJoueur = tableauCombat[resultatTableDeHasard][quotientAttaque][1];

        if (resultatassaultJoueur == 'Mort') {
            this.endurance = 0;
        } else {
            this.endurance += tableauCombat[resultatTableDeHasard][quotientAttaque][1];
        };

        resultatassaultMonstre = tableauCombat[resultatTableDeHasard][quotientAttaque][0];

        if (resultatassaultMonstre == 'Mort') {
            cible.endurance = 0;
        } else {
            cible.endurance += tableauCombat[resultatTableDeHasard][quotientAttaque][0];
        };
    }
}

