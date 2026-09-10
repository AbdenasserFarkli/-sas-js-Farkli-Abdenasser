/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" ou un chiffre aléatoire. (Utilisez Math.random()).
 * 
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function genererMotDePasse(lengthpasword) {
    let random =0
    let box =""
    let chois = 0
    for (let i = 1; i <= lengthpasword; i++) {
        chois =  Math.floor(Math.random() * 2) + 1;
;
        switch (chois) {
            case 1:
                random = 65

                        box +=  String.fromCharCode(random);
                break;

                
        case 2:
                random =   Math.floor(Math.random() * 10);
                        box +=  random;

                break;
            
        }
    }
    console.log(box);
}
genererMotDePasse(5);
