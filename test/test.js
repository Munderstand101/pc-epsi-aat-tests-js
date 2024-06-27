const assert = require('assert');
const somme = require('../somme');

describe('Fonction somme()', function() {
    it('doit retourner 8 pour 5 + 3', function() {
        assert.strictEqual(somme(5, 3), 8);
    });
    it('doit retourner 2 pour -2 + 4', function() {
        assert.strictEqual(somme(-2, 4), 2);
    });
    it('doit lancer une exception pour des paramètres non numériques', function() {
        assert.throws(() => { somme("test", 3); }, /paramètre invalide/);
    });
});
