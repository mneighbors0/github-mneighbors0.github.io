(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.collectable = window.opspark.collectable || {};
    
    opspark.collectable.factory = function (game) {
        game.collectable = game.add.group();
        game.collectable.enableBody = true;
        
        function create(type, x, y, gravity, bounce) {
            var collectable = game.collectable.create(x, y, type.assetKey);
            collectable.type = type;
            
            /*
             * Extra adjustments or configuration.
             */
            switch (type.assetKey) {
                case 'db':
                    collectable.body.height = 44;
                    break;
                    
                case 'grace':
                case 'kennedi':
                    collectable.scale.x = collectable.scale.y = 0.9;
                    break;
                
                default:
                    // code
            }
            if (gravity) collectable.body.gravity.y = gravity;
            if (bounce) collectable.body.bounce.y = bounce + Math.random() * 0.2;
        }
        opspark.collectable.create = create;
    };
    let collectable = window.opspark.collectable;
    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
        
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        createCollectable(type.kennedi, 5, 25, 2, 3);
        createCollectable(type.grace, 500, 225, 0, 5);
        createCollectable(type.steve, 500, 400, 4, 7);
        createCollectable(type.max, 100, 570, 9);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
    
})(window);