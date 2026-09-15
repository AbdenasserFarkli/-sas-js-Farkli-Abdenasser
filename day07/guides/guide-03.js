/**
 * JOUR 07 — GUIDE 03
 * Parcourir un Objet
 *
 * OBJECTIF
 * Affichez toutes les clés et leurs valeurs de l'objet voiture sous la forme "clé : valeur".
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const car ={
    marque : "Toyota",
    model : "Corolla",
    anne : 2020

}
for (const keys in car) {
    console.log(keys + ": "+car[keys]);
    
}