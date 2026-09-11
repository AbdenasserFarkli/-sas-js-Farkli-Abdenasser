/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * EXTRACTION DE HASHTAGS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un tweet : "Beau temps à #Nador aujourd'hui avec la team #YouCode !", extrayez tous les hashtags et retournez-les dans un tableau ["#Nador", "#YouCode"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let text ="Beau temps à #Nador aujourd'hui avec la team #YouCode !"
let box=""
text = text.split(" ")
for (let i = 0; i < text.length; i++) {
     if (text[i].charAt(0)=="#") {
        box+=text[i]
        if (text.length-1>i+1) {
        box+=" "
        
       }
       }
       
    
}
box = box.split(" ")
console.log(box);
