(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.platform = window.opspark.platform || {};
    
    opspark.platform.factory = function (game) {
        game.platforms = game.add.group();
        game.platforms.enableBody = true;
        
        function create(x, y, scaleX, scaleY, immovable) {
            var platform = game.platforms.create(x, y, 'platform');
            platform.scale.setTo(scaleX || 1, scaleY || 1);
            platform.body.immovable = immovable || true;
            return platform;
        }
        opspark.platform.create = create;
    };
    let platform = window.opspark.platform; 
     function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE
        
        createPlatform(100, 570);
        createPlatform(300, 495);
        createPlatform(500, 400);
        createPlatform(700, 325);
        createPlatform(500, 225);
        createPlatform(300, 125);
        createPlatform(5, 25);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);