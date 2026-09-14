/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * APLATIE (FLATTEN)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau à 2 dimensions (une grille) : [[1, 2], [3, 4], [5, 6]]. Transformez-le en un tableau à 1 dimension : [1, 2, 3, 4, 5, 6].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tableau =[[1, 2], [3, 4], [5, 6]]
let count =0
let tableaumix=[]
for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
        tableaumix[count]=tableau[i][j]
        count++


        
    }
    
}
console.log(tableaumix);n 