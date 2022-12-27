import background from '../img/background/clouds-1/1.jpg'
import cloud from '../img/background/clouds-1/4.png'
import platform from '../img/platform/platform-small.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const gravity = 1

canvas.width = 1024//window.innerWidth
canvas.height = 576//window.innerHeight

class GenericObject {
    constructor ({x, y, width, height, image}) {
        this.position = {
            x: x,
            y: y
        }

        this.width = width ?? image.width
        this.height = height ?? image.height
        this.image = image
    } 
    
    draw () {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

/*
class Platform {
    constructor ({x, y, width, height, image}) {
        this.position = {
            x: x,
            y: y
        }

        this.width = width ?? image.width
        this.height = height ?? image.height
        this.image = image
    } 
    
    draw () {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
*/
class Player {
    constructor () {
        this.position = {
            x:100,
            y:100
        }

        this.velocity = {
            x: 0,
            y: 1
        }

        this.width = 30
        this.height = 30
    } 
    
    draw () {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update () {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        //when player is falling down
        if( this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }
        //when player reaches the ground
        else {
            this.velocity.y = 0
        }
    }
}

//images
function createImage(imageSrc){
    const image = new Image()
    image.src = imageSrc
    return image
}

//player
const player = new Player()

//generic objects
const genericObjects = [
    /*new GenericObject ({
        x: 0,
        y: -50,
        image: createImage(hill)
    })*/
]

const platformImage = createImage(platform)

//platform
const platforms = [
    new GenericObject({
        x: 0, y: 480, width: platformImage.width, height: platformImage.height, image: platformImage
    }), 
    new GenericObject({
        x: 600, y: 480, width: platformImage.width, height: platformImage.height, image: platformImage
    }), 
]

const backgroundImage = createImage(background)
const cloudImage = createImage(cloud)
//platform
const backgroundObject = [
    new GenericObject({
        x: 0, 
        y: 0, 
        width: backgroundImage.width, 
        height: backgroundImage.height, 
        image: backgroundImage
    }),
    new GenericObject ({
        x: 0,
        y: -30,
        image: cloudImage
    })
]

//actions
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    down: {
        pressed: false
    }
}

let scrollOffset = 0

function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    //c.clearRect(0, 0, canvas.width, canvas.height)
    
    if(keys.right.pressed && player.position.x < 400)
        player.velocity.x = 5
    else if(keys.left.pressed && player.position.x > 400)
        player.velocity.x = -5
    else if(keys.up.pressed) {
        //when pressing up or space
    }
    else {
        //player.velocity.y += 20
        player.velocity.x = 0

        if(keys.right.pressed){
            scrollOffset += 5
            
            platforms.forEach(p => {
                p.position.x -= 5
            })

            /*
            genericObjects.forEach(p => {
                p.position.x -= 5
            })*/
        }
        else if(keys.left.pressed){
            scrollOffset += -5
            
            platforms.forEach(p => {
                p.position.x += 5
            })

            /*
            genericObjects.forEach(p => {
                p.position.x += 5
            })*/
        }
    }

    /*
    genericObjects.forEach(obj => {
        obj.draw()
    })
    */
    backgroundObject.forEach(obj => {
        obj.draw()
    })

    platforms.forEach(p => {
        p.draw()
    })

    player.update()

    //platform colision detection
    platforms.forEach(p => {
        if(
            player.position.y + player.height <= p.position.y &&
            player.position.y + player.height + player.velocity.y >= p.position.y &&
            player.position.x <= p.position.x + p.width &&
            player.position.x + player.width + player.velocity.x >= p.position.x
        )
        {
            
            player.velocity.y = 0
        }
    })

    if(scrollOffset > 2000)
    {
        scrollOffset = 0
        console.log('you win!')
    }

}

animate()

addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)

    switch(keyCode) {
        case 37:
        case 65: {
            //console.log('left');
            //player.velocity.x -= 20
            keys.left.pressed = true
            break
        }
        case 40:
        case 83: {
            //console.log('down');
            //player.velocity.y += 10
            keys.down.pressed = true
            break
        }
        case 39:
        case 68: {
            //console.log('right');
            //player.velocity.x += 20
            keys.right.pressed = true
            break
        }
        case 38:
        case 32: { //space 32, up 87
            //console.log('up');
            if(!keys.up.pressed) {
                player.velocity.y -= 25
            }
            keys.up.pressed = true
            break
        }
    }  
})

addEventListener('keyup', ({ keyCode }) => {
    //console.log(keyCode)

    switch(keyCode) {
        case 37:
        case 65: {
            //console.log('left');
            //player.velocity.x = 0
            keys.left.pressed = false
            break
        }
        case 40:
        case 83: {
            //console.log('down');
            //player.velocity.y += 20
            keys.down.pressed = false
            break
        }
        case 39:
        case 68: {
            //console.log('right');
            //player.velocity.x = 0
            keys.right.pressed = false
            break
        }
        case 38:
        
        case 32: { //space 32, up 87
            //console.log('up');
            player.velocity.y -= 0
            keys.up.pressed = false
            break
        }
    }  
})