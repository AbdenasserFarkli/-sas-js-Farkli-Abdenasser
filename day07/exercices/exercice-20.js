/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
 const car ={
    nom : "G Class G63 AMG",
    model : {
        years : 2025
    }, // 
    color : "black"
 } //1
 let copie ={...car}
 copie.model.years = 2026
 const copieDeep = structuredClone(car);
copieDeep.model.years=2028
 console.log(car);
  console.log(copie);
    console.log(copieDeep);

//When I copied the object the first time and modified it through the copy,
//  the original copy also got modified — the reason being that both have the same address in memory. 
// However, when I created a deep copy using the structuredClone property,
//  my variable got a new location in memory with its own separate address. That's why when I modified it through that copy,
//  the original copy did not change.

 