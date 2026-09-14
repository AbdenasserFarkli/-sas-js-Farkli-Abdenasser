/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tableau =["pomme", "banane", "pomme", "orange", "banane", "pomme"]
const fruits = new Map()
for(const element of tableau ){
    fruits.set(element,(fruits.get(element)  || 0) +1)
}
let rusults =Object.entries(Object.fromEntries(fruits))
console.log(rusults)

