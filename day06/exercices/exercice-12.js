/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tableau = [1, 2, 2, 3, 4, 4, 5]
function isdouble(params) {
    let arr2= ""
    tableau= String(tableau)
    tableau = tableau.replaceAll(",","")
    for (let i = 0; i < params.length; i++) {
        if (!(arr2.includes(params[i]))) {
            arr2+=params[i]
        }


        
    }
    arr2 = arr2.split("")
    tableau = arr2
    return tableau
}
console.log(isdouble(tableau));
