/**
 * JOUR 05 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let word ="J'apprends le JavaScript à YouCode"
let target = "JavaScript"
function findWord(phrase) {
    phrase = phrase.toLocaleLowerCase()
if (phrase.includes(target.toLocaleLowerCase())) {
    return "Oui, ce mot existe" ;
    
}else 
    return "Aucun mot qui n'existe"
    
}
console.log(findWord(word));
