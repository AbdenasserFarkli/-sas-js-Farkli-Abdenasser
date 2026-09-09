/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CHASSEUR DE NOMBRES D'ARMSTRONG
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre d'Armstrong à 3 chiffres est égal à la somme des cubes de ses chiffres (ex: 153 = 1³ + 5³ + 3³). Utilisez une boucle allant de 100 à 999 pour trouver et afficher TOUS les nombres d'Armstrong.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day02/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let test = 0
let numbercheck=0
let c1=0 , c2=0, c3=0
for (let i = 100; i <= 999; i++) {
    c1 = 0
c2 = 0
c3 = 0
numbercheck = 0


            c1+=(Math.floor(i/100))
c2 = Math.floor((i % 100) / 10)
          c3+= Math.floor(i%10)
          numbercheck+=(c1**3)+(c2**3)+(c3**3)

    if (numbercheck==i) {
        console.log(i+ " nombres d'Armstrong");
        
    }
    
}