/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tableau = [1, 2, 3, 4, 5, 6]
function PairsN(params) {
    let newtableu= []
    let count  = 0 
    for (let i = 0; i < params.length; i++) {
        if (params[i]%2==0) {
            newtableu[count]= params[i]
            count++
        }
         
    }
    return newtableu
    
}
console.log(PairsN(tableau));
