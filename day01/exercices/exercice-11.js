/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * VALIDATION DE PANIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un client achète un panier de 350 MAD. S'il dépasse 200 MAD, la livraison est gratuite. S'il dépasse 500 MAD, il a en plus 10% de réduction. Affichez le coût final du panier et si la livraison est gratuite ou non.
 *
 * RÉSULTAT ATTENDU
 * Coût final: 350 MAD, Livraison: Gratuite
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day01/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let Prixachète= 500
if (Prixachète<200) {
    console.log(" Coût final: "+Prixachète + "Livraison payante.")

    
}
 else if (Prixachète>=200 && Prixachète < 500) {
    console.log(" Coût final: "+Prixachète + "MAD,  Livraison: Gratuite")
}else  {
    let rabais = Prixachète/100*90
        console.log(rabais + "MAD, est Votre total après réduction , plus Livraison: Gratuite")


}