/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day07/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const obje1={a: 1, b: 2}
const obje2={a: 1, b: 2}
console.log();

function comparison(obj1, obj2) {
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;
for (const keys of keys1) {
    if (obj1[keys]!==obj2[keys]) {
        return false
    }
    
}

return true
    
}
console.log(comparison(obje1,obje2));
