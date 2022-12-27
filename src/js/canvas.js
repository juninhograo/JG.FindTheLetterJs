import background from '../img/background/background-blue.jpg'
import cloud from '../img/elements/clouds/cloud-1.png'
import hill from '../img/elements/hills/hill-1.png'
import platformSmall from '../img/platform/platform-small.png'
import platformBig from '../img/platform/platform-big.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const gravity = 1

canvas.width = 1024
canvas.height = 576

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
        //when player reaches the root of the ground
        else {
            //stop the fall
            //this.velocity.y = 0
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
let player = new Player()
let backgroundImage = createImage(background)
let cloudImage = createImage(cloud)
let hillImage = createImage(hill)
let platformImageSmall = createImage(platformSmall)
let platformImageBig = createImage(platformBig)
let scrollOffset = 0

function init() {
    player = new Player()
    backgroundImage = createImage(background)
    cloudImage = createImage(cloud)
    hillImage = createImage(hill)
    platformImageSmall = createImage(platformSmall)
    platformImageBig = createImage(platformBig)
    scrollOffset = 0
}

//background
const backgroundObjects = [
    new GenericObject({
        x: 0, 
        y: 0, 
        width: backgroundImage.width, 
        height: backgroundImage.height, 
        image: backgroundImage
    })
]

//generic objects
const genericObjects = [
    new GenericObject({
        x: 0, 
        y: 100, 
        width: hillImage.width, 
        height: hillImage.height, 
        image: hillImage
    })
]

//clouds
const cloudObjects = [
    new GenericObject ({
        x: 0,
        y: 0,
        image: cloudImage
    })
]

//platform
const platforms = [
    new GenericObject({
        x: 0, y: 450, width: platformImageSmall.width, height: platformImageSmall.height, image: platformImageSmall
    }), 
    new GenericObject({
        x: 600, y: 450, width: platformImageBig.width, height: platformImageBig.height, image: platformImageBig
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

function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    if(keys.right.pressed && player.position.x < 400)
        player.velocity.x = 5
    else if(keys.left.pressed && player.position.x > 400)
        player.velocity.x = -5
    else {
        player.velocity.x = 0

        if(keys.right.pressed){
            scrollOffset += 5
            
            //paralax effect to the right side
            platforms.forEach(p => {
                p.position.x -= 5
            })

            genericObjects.forEach(p => {
                p.position.x -= 2
            })

            cloudObjects.forEach(p => {
                p.position.x -= .5
            })
        }
        else if(keys.left.pressed){
            scrollOffset += -5
            
            //paralax effect to the left side
            platforms.forEach(p => {
                p.position.x += 5
            })

            genericObjects.forEach(p => {
                p.position.x += 2
            })

            cloudObjects.forEach(p => {
                p.position.x += .5
            })
        }
    }
    
    backgroundObjects.forEach(obj => {
        obj.draw()
    })
    
    cloudObjects.forEach(obj => {
        obj.draw()
    })

    genericObjects.forEach(obj => {
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

    //win condition
    if(scrollOffset > 2000)
    {
        scrollOffset = 0
        console.log('you win!')
    }
    //loose condition
    if(player.position.y > canvas.height)
    {
        //console.log('you loose!')
        init()
    }

}

animate()

addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)

    switch(keyCode) {
        case 37:
        case 65: {
            //console.log('left');
            keys.left.pressed = true
            break
        }
        case 40:
        case 83: {
            //console.log('down');
            keys.down.pressed = true
            break
        }
        case 39:
        case 68: {
            //console.log('right');
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
            keys.left.pressed = false
            break
        }
        case 40:
        case 83: {
            //console.log('down');
            keys.down.pressed = false
            break
        }
        case 39:
        case 68: {
            //console.log('right');
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