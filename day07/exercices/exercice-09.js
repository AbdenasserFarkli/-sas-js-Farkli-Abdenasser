/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const tableau = [
    {
        nom : "Abdenasser",
        note: 18
    },
    {
        nom : "mohamed",
        note: 8

    },
     {
        nom : "oussama",
        note: 15

    }

]
function bonNote(params) {
    let candidats=[]
    let count=0
   const arrNote= Object.values(params)
    for (let i = 0; i < arrNote.length; i++) {
        if (arrNote[i].note>=10) {
            candidats[count]=arrNote[i]
            count++

            
        }
        
        
    }


    return candidats
}
console.log(bonNote(tableau));
