const { expect } = require('chai');

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètres n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1 = 0, nombre2 = 0) {
    if (typeof nombre1 !== 'number' || typeof nombre2 !== 'number') {
        throw new Error('paramètre invalide');
    }
    return nombre1 + nombre2;
}

describe('somme', function() {
    it('Avec les valeurs de paramètres 3 et 4, la fonction somme() est sensée retourner la valeur 7', function() {
        expect(somme(3, 4)).to.equal(7);
    });

    it('Avec les valeurs de paramètres -1 et 1, la fonction somme() est sensée retourner la valeur 0', function() {
        expect(somme(-1, 1)).to.equal(0);
    });

    it('Avec les valeurs de paramètres 5 et undefined, la fonction somme() est sensée retourner la valeur 5', function() {
        expect(somme(5, undefined)).to.equal(5);
    });

    it('Si un des paramètres n\'est pas de type number, la fonction lèvera une exception avec le message d\'erreur "paramètre invalide"', function() {
        expect(() => somme(5, 'a')).to.throw('paramètre invalide');
    });
});
