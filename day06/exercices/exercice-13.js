/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre. (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let table1 =  [1,10,20,40,5], table2=[1,10,20,40,5]
function check(table1,  table2) {
    if (table1.length!= table2.length) 
        return false
    
    for (let i = 0; i < table1.length; i++) {
        if (table1[i]!=table2[i]) {
            return false
        }
        
    }
    return true
}
console.log(check(table1,table2));
