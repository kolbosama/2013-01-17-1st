enchant();

var picNumber = 0;

window.onload = function() {
    var game = new Game(320,480);
    
    game.preload('http://enchantjs.com/assets/images/chara1.gif');
    
    game.onload = function() {
        var bear = new Sprite(32,32);
        bear.image =
            game.assets['http://enchantjs.com/assets/images/chara1.gif'];
        bear.frame = 0;
        bear.x = 100;
        bear.y  = 100;
        bear.addEventListener(Event.ENTER_FRAME,function(){
            picNumber++;
            if(picNumber > 2) {
                picNumber = 0;
            }
            bear.frame = picNumber;
           	var rnd;
            rnd=Math.floor(Math.random()*4);
           
            switch (rnd) {
                case 0:
                    bear.x+=4;
                    break;
                case 1:
                    bear.x-=4;
                    break;
                case 2:
                    bear.y+=4;
                    break;
                case 3:
                    bear.y-=4;
                    break;
                default:
                    bear.x++;
            }
                        
        });
        
        game.rootScene.addChild(bear);
    };
    
    game.start();
};