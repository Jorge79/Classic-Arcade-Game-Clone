// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.x = randomPositionX();
        this.y = randomPositionY(); //60,140,230
        this.s = 200; //Just a test, the speed must be random
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.x += this.s * dt;
        if (this.x > 550) {
            this.x = -80;
        }

        let enemyLeft = this.x - 80;
        let enemyRight = this.x + 70;
        let enemyTop = this.y - 60;
        let enemyBottom = this.y + 60;

        if (player.x > enemyLeft && player.x < enemyRight && player.y > enemyTop && player.y < enemyBottom) {
            alert("Sorry... You lost");
            location.reload();
        }
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }
    // Draw the enemy on the screen, required method for game
    render() {
        // x and y are axis, 
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

function randomPositionY() {
    const enemyPosition = [60, 140, 230];
    const index = Math.floor((Math.random() * 3));

    return enemyPosition[index];
};

function randomPositionX() {
    const enemyPosition = [-80, -250, -500];
    const index = Math.floor((Math.random() * 3));

    return enemyPosition[index];
}


// Now write your own player class (DONE)
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    sprite = 'images/char-boy.png';
    x = 202; //202
    y = 404; //404

    /*initPosition() {
        x = 202;
        y = 404;
    */
    update() {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }//line 105 engine.js

    handleInput = function (arrow) {
        if(arrow == 'left' && this.x > 0) {
            this.x -= 101;
        }
        if (arrow == 'right' && this.x < 404) {
            this.x += 101;
        }
        if(arrow == 'up') {
            this.y -= 83
            if(this.y == -11) {
                    this.x = 202;
                    this.y = 404;
                    window.alert("Congratulations, you won!");
                    location.reload();
            }
        }
        if(arrow == 'down' && this.y < 404) {
            this.y += 83
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemy = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();
let allEnemies = [enemy, enemy2, enemy3];
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
