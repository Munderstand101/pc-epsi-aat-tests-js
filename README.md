
# Test Unitaire pour la Fonction `somme()`

Ce projet contient des tests unitaires pour la fonction JavaScript `somme()`, qui retourne la somme des nombres passés en paramètres. Le projet utilise Mocha comme framework de test et Chai pour les assertions.

## Fonction `somme()`

La fonction `somme()` retourne la somme des deux nombres passés en paramètres. Si un des paramètres est manquant, il prendra la valeur par défaut de `0`. Si un des paramètres n'est pas de type `number`, la fonction lèvera une exception avec le message d'erreur "paramètre invalide".

### Signature de la Fonction

```javascript
function somme(nombre1, nombre2) {
    // Implementation de la fonction
}
```

## Tests Unitaires

Les tests unitaires sont écrits en utilisant Mocha et Chai, et sont situés dans le fichier `test.js`.

### Scénarios de Test

1. **Avec les valeurs de paramètres 3 et 4, la fonction somme() est sensée retourner la valeur 7**
2. **Avec les valeurs de paramètres -1 et 1, la fonction somme() est sensée retourner la valeur 0**
3. **Avec les valeurs de paramètres 5 et undefined, la fonction somme() est sensée retourner la valeur 5**
4. **Si un des paramètres n'est pas de type `number`, la fonction lèvera une exception avec le message d'erreur "paramètre invalide"**

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Munderstand101/pc-epsi-aat-tests-js.git
   cd pc-epsi-aat-tests-js
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Exécution des Tests

Pour exécuter les tests, utilisez la commande suivante :
```bash
npm test
```

## Configuration CI

Le projet est configuré pour utiliser GitHub Actions pour l'intégration continue. Le workflow est défini dans `.github/workflows/node.js.yml`. 

### Workflow GitHub Actions

Le workflow CI se déclenche sur chaque `push` ou `pull_request` sur la branche `master` et exécute les étapes suivantes :

1. Vérifie le code.
2. Installe les dépendances avec `npm install`.
3. Exécute les tests avec `npm test`.

## Dépendances

- [Mocha](https://mochajs.org/) - Un framework de test JavaScript.
- [Chai](https://www.chaijs.com/) - Une bibliothèque d'assertion BDD / TDD pour Node.js et le navigateur.

