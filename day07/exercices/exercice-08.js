/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const tableau = [
    {
        nom : "Abdenasser",
        note: 100
    },
    {
        nom : "mohamed",
        note: 80

    },
     {
        nom : "oussama",
        note: 50

    }

]
function bonNote(params) {
    let bonNote=0
    let IndexNom=0
   const arrNote= Object.values(params)
    for (let i = 0; i < arrNote.length; i++) {
        if (arrNote[i].note>bonNote) {
            bonNote=arrNote[i].note
            IndexNom= i

            
        }
        
        
    }


    return params[IndexNom].nom
}
console.log(bonNote(tableau));
