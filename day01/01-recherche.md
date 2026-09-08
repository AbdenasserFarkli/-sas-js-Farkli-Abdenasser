# 🔎 Jour 01 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?

- [ ] J'ai recherché et compris la notion.

La différence entre eux est que const est utilisé avec une valeur constante : on ne peut pas modifier la valeur qu’on lui a attribuée auparavant.
var est l’ancienne manière de créer une variable. Elle a été remplacée en 2015 à cause de plusieurs problèmes, notamment le fait qu’il était possible de déclarer deux fois une variable avec le même nom.
Quant à let, c’est la manière la plus utilisée pour créer une variable dont la valeur peut être modifiée à différents endroits du code. Elle ne présente pas les mêmes problèmes que var.
> À compléter avec mes propres mots.

---

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [ ] J'ai recherché et compris la notion.
 
 string , int , bool , float , Null,undefined,symbol
> À compléter avec mes propres mots.

---

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?

- [ ] J'ai recherché et compris la notion.

typeof est considéré comme une erreur technique, parce que typeof null renvoie "object" alors que null n’est pas un objet. C’est une erreur qui vient de la conception initiale de JavaScript.
> À compléter avec mes propres mots.

---

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [ ] J'ai recherché et compris la notion.

La différence entre == et === est que == compare uniquement la valeur, tandis que === compare la valeur et le type de la variable.
> À compléter avec mes propres mots.

---

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

Ça va afficher une erreur de syntaxe.
---

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [ ] J'ai recherché et compris la notion.

Ça va nous donner 55. Ce phénomène s’appelle la coercition de type, c’est-à-dire la conversion automatique du type.
> À compléter avec mes propres mots.

---

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [ ] J'ai recherché et compris la notion.

Traduction en français

Il y a plusieurs facteurs, mais le plus important est de savoir si le nombre est pair ou impair.
> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

|| On l’utilise lorsqu’on a deux conditions ou plus et qu’on veut qu’une seule d’entre elles soit vraie.

&& exige que toutes les conditions soient vraies.
---

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [ ] J'ai recherché et compris la notion.

Traduction en français

Oui, on peut l’utiliser lorsqu’on a plusieurs choix.
> À compléter avec mes propres mots.

---

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
