import background from '../img/background/background-blue.jpg'
import cloud from '../img/elements/clouds/cloud-1.png'
import hill from '../img/elements/hills/hill-1.png'
import money from '../img/elements/money.png'
import key from '../img/elements/key.png'
import heart from '../img/elements/heart.png'
import pause from '../img/elements/pause.png'
import play from '../img/elements/play.png'
import lucas from '../img/elements/lucas.png'
import chest from '../img/elements/chest.png'
import portal from '../img/elements/Portal-1.png'
import trampoline from '../img/elements/trampoline.png'
import platformSmall from '../img/platform/platform-small.png'
import platformBig from '../img/platform/platform-big.png'
import fredokaOneFont from '../fonts/FredokaOne-Regular.ttf'
import adventProMediumFont from '../fonts/AdventPro-Medium.ttf'
import adventProRegularFont from '../fonts/AdventPro-Regular.ttf'
import adventProLightFont from '../fonts/AdventPro-Light.ttf'
import levelConfig from './levelConfig'

// Player sprites - Idle
import playerIdle1 from '../img/Player/Lucas/Idle/Idle-(1).png'
import playerIdle2 from '../img/Player/Lucas/Idle/Idle-(2).png'
import playerIdle3 from '../img/Player/Lucas/Idle/Idle-(3).png'
import playerIdle4 from '../img/Player/Lucas/Idle/Idle-(4).png'
import playerIdle5 from '../img/Player/Lucas/Idle/Idle-(5).png'
import playerIdle6 from '../img/Player/Lucas/Idle/Idle-(6).png'
import playerIdle7 from '../img/Player/Lucas/Idle/Idle-(7).png'
import playerIdle8 from '../img/Player/Lucas/Idle/Idle-(8).png'
import playerIdle9 from '../img/Player/Lucas/Idle/Idle-(9).png'
import playerIdle10 from '../img/Player/Lucas/Idle/Idle-(10).png'
import playerIdle11 from '../img/Player/Lucas/Idle/Idle-(11).png'
import playerIdle12 from '../img/Player/Lucas/Idle/Idle-(12).png'
import playerIdle13 from '../img/Player/Lucas/Idle/Idle-(13).png'
import playerIdle14 from '../img/Player/Lucas/Idle/Idle-(14).png'
// Player sprites - Walk
import playerWalk1 from '../img/Player/Lucas/Walk/Player-walk-1.png'
import playerWalk2 from '../img/Player/Lucas/Walk/Player-walk-2.png'
import playerWalk3 from '../img/Player/Lucas/Walk/Player-walk-3.png'
import playerWalk4 from '../img/Player/Lucas/Walk/Player-walk-4.png'
import playerWalk5 from '../img/Player/Lucas/Walk/Player-walk-5.png'
import playerWalk6 from '../img/Player/Lucas/Walk/Player-walk-6.png'
import playerWalk7 from '../img/Player/Lucas/Walk/Player-walk-7.png'
import playerWalk8 from '../img/Player/Lucas/Walk/Player-walk-8.png'
import playerWalk9 from '../img/Player/Lucas/Walk/Player-walk-9.png'
import playerWalk10 from '../img/Player/Lucas/Walk/Player-walk-10.png'
import playerWalk11 from '../img/Player/Lucas/Walk/Player-walk-11.png'
import playerWalk12 from '../img/Player/Lucas/Walk/Player-walk-12.png'
import playerWalk13 from '../img/Player/Lucas/Walk/Player-walk-13.png'
import playerWalk14 from '../img/Player/Lucas/Walk/Player-walk-14.png'
import playerWalk15 from '../img/Player/Lucas/Walk/Player-walk-15.png'
// Player sprites - Jump
import playerJump1 from '../img/Player/Lucas/Jumping/Player-jump-1.png'
import playerJump2 from '../img/Player/Lucas/Jumping/Player-jump-2.png'
// Player sprites - Glide
import playerFly1 from '../img/Player/Lucas/Flying/Player-flying-1.png'
import playerFly2 from '../img/Player/Lucas/Flying/Player-flying-2.png'
// Player sprites - Swimming
import playerSwim1 from '../img/Player/Lucas/Swimming/Player-swimming-1.png'
import playerSwim2 from '../img/Player/Lucas/Swimming/Player-swimming-2.png'
import playerSwim3 from '../img/Player/Lucas/Swimming/Player-swimming-3.png'
import playerSwim4 from '../img/Player/Lucas/Swimming/Player-swimming-4.png'
import bat1 from '../img/tmp_files/Enemies/bat-1.png'
import shark from '../img/tmp_files/Enemies/shark.png'
import sand from '../img/elements/element-sea 1.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const gravity = 1
const minCanvasWidth = 1024
const minCanvasHeight = 576
const hudBarHeight = 58
const titleFontFamily = 'Fredoka One'
const buttonFontFamily = 'Advent Pro Medium'
const bodyFontFamily = 'Advent Pro'
const bodyLightFontFamily = 'Advent Pro Light'

function loadFonts() {
    if (!('fonts' in document)) {
        return
    }

    const fontFaces = [
        new FontFace(titleFontFamily, `url(${fredokaOneFont})`),
        new FontFace(buttonFontFamily, `url(${adventProMediumFont})`),
        new FontFace(bodyFontFamily, `url(${adventProRegularFont})`),
        new FontFace(bodyLightFontFamily, `url(${adventProLightFont})`)
    ]

    Promise.all(fontFaces.map((fontFace) => fontFace.load()))
        .then((loadedFonts) => {
            loadedFonts.forEach((fontFace) => {
                document.fonts.add(fontFace)
            })
        })
        .catch(() => { })
}

function resizeCanvasToViewport() {
    canvas.width = Math.max(minCanvasWidth, window.innerWidth)
    canvas.height = Math.max(minCanvasHeight, window.innerHeight)
}

resizeCanvasToViewport()
loadFonts()

class GenericObject {
    constructor({ x, y, width, height, image }) {
        this.position = {
            x: x,
            y: y
        }

        this.width = width ?? image.width
        this.height = height ?? image.height
        this.image = image
    }

    draw() {
        const drawWidth = this.width > 0 ? this.width : (this.image.naturalWidth || this.image.width || 0)
        const drawHeight = this.height > 0 ? this.height : (this.image.naturalHeight || this.image.height || 0)
        if (drawWidth > 0 && drawHeight > 0) {
            c.drawImage(this.image, this.position.x, this.position.y, drawWidth, drawHeight)
        }
    }
}

class Player {
    constructor() {
        this.width = 72
        this.height = 96
        // Hitbox is 28% smaller than the visual sprite, centered on it
        this.hitboxWidth = Math.round(72 * 0.72)
        this.hitboxHeight = Math.round(96 * 0.72)
        this.position = {
            x: canvas.width / 2 - this.hitboxWidth / 2,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 1
        }
        this.onGround = false
        this.facingRight = true
        this.animFrame = 0
        this.animTimer = 0
        this.animState = 'idle'
        this.glideWindowFrames = 0
        this.glideArmed = false
    }

    getFrames() {
        switch (this.animState) {
            case 'walk': return { frames: playerWalkFrames, speed: 8 }
            case 'jump': return { frames: playerJumpFrames, speed: 14 }
            case 'glide': return { frames: playerFlyFrames, speed: 10 }
            case 'swim': return { frames: playerSwimFrames, speed: 11 }
            default: return { frames: playerIdleFrames, speed: 10 }
        }
    }

    updateAnimState() {
        if (this.inWater) {
            this.animState = 'swim'
        } else if (!this.onGround && keys.up.pressed && (flyAbilityFrames > 0 || this.glideArmed)) {
            this.animState = 'glide'
        } else if (!this.onGround) {
            this.animState = 'jump'
        } else if (keys.left.pressed || keys.right.pressed) {
            this.animState = 'walk'
        } else {
            this.animState = 'idle'
        }

        if (keys.right.pressed) this.facingRight = true
        if (keys.left.pressed) this.facingRight = false
    }

    draw() {
        const prevState = this.animState
        this.updateAnimState()

        if (this.animState !== prevState) {
            this.animFrame = 0
            this.animTimer = 0
        }

        const { frames, speed } = this.getFrames()

        if (this.animFrame >= frames.length) {
            this.animFrame = 0
            this.animTimer = 0
        }

        this.animTimer++
        if (this.animTimer >= speed) {
            this.animTimer = 0
            this.animFrame = (this.animFrame + 1) % frames.length
        }

        const frame = frames[this.animFrame]
        if (!frame || !frame.complete || frame.naturalWidth === 0) return

        const drawScale = this.animState === 'glide' ? 1.5 : 1
        const drawWidth = this.width * drawScale
        const drawHeight = this.height * drawScale

        // Offset sprite so it is visually centered on the hitbox
        const offsetX = (this.hitboxWidth - drawWidth) / 2
        const offsetY = (this.hitboxHeight - drawHeight) / 2

        c.save()
        if (!this.facingRight) {
            c.scale(-1, 1)
            c.drawImage(frame, -(this.position.x + offsetX + drawWidth), this.position.y + offsetY, drawWidth, drawHeight)
        } else {
            c.drawImage(frame, this.position.x + offsetX, this.position.y + offsetY, drawWidth, drawHeight)
        }
        c.restore()
    }

    update(platforms) {
        // Resolve horizontal movement first so side collisions don't push vertically.
        this.position.x += this.velocity.x

        platforms.forEach((platform) => {
            // Only treat as a side collision if the player is genuinely overlapping
            // the platform vertically by more than a small tolerance (prevents corner
            // grazes from teleporting the player up).
            const verticalOverlap = Math.min(this.position.y + this.hitboxHeight, platform.position.y + platform.height)
                - Math.max(this.position.y, platform.position.y)
            const sideCollisionTolerance = 4

            if (
                verticalOverlap > sideCollisionTolerance &&
                this.position.x < platform.position.x + platform.width &&
                this.position.x + this.hitboxWidth > platform.position.x &&
                this.position.y < platform.position.y + platform.height &&
                this.position.y + this.hitboxHeight > platform.position.y
            ) {
                if (this.velocity.x > 0) {
                    this.position.x = platform.position.x - this.hitboxWidth
                } else if (this.velocity.x < 0) {
                    this.position.x = platform.position.x + platform.width
                }
                this.velocity.x = 0
            }
        })

        this.onGround = false
        this.velocity.y += gravity
        const prevBottomY = this.position.y + this.hitboxHeight  // bottom before this frame's Y move
        this.position.y += this.velocity.y

        platforms.forEach((platform) => {
            if (
                this.position.x < platform.position.x + platform.width &&
                this.position.x + this.hitboxWidth > platform.position.x &&
                this.position.y < platform.position.y + platform.height &&
                this.position.y + this.hitboxHeight > platform.position.y
            ) {
                if (this.velocity.y > 0 && prevBottomY <= platform.position.y + 2) {
                    // Falling down onto a platform — only land if approaching from above
                    this.position.y = platform.position.y - this.hitboxHeight
                    this.onGround = true
                } else if (this.velocity.y < 0) {
                    // Hitting a ceiling
                    this.position.y = platform.position.y + platform.height
                }
                this.velocity.y = 0
            }
        })

        this.draw()
    }
}

//images
function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

// Player sprite frame arrays (built after createImage is defined)
const playerIdleFrames = [
    playerIdle1, playerIdle2, playerIdle3, playerIdle4, playerIdle5,
    playerIdle6, playerIdle7, playerIdle8, playerIdle9, playerIdle10,
    playerIdle11, playerIdle12, playerIdle13, playerIdle14
].map(createImage)

const playerWalkFrames = [
    playerWalk1, playerWalk2, playerWalk3, playerWalk4, playerWalk5,
    playerWalk6, playerWalk7, playerWalk8, playerWalk9, playerWalk10,
    playerWalk11, playerWalk12, playerWalk13, playerWalk14, playerWalk15
].map(createImage)

const playerJumpFrames = [playerJump1, playerJump2].map(createImage)
const playerFlyFrames = [playerFly1, playerFly2].map(createImage)
const playerSwimFrames = [playerSwim1, playerSwim2, playerSwim3, playerSwim4].map(createImage)



//player
let player = new Player()
let backgroundImage = createImage(background)
let cloudImage = createImage(cloud)
let hillImage = createImage(hill)
let platformImageSmall = createImage(platformSmall)
let platformImageBig = createImage(platformBig)
let coinImage = createImage(money)
let keyImage = createImage(key)
let heartImage = createImage(heart)
let pauseImage = createImage(pause)
let playImage = createImage(play)
let lucasImage = createImage(lucas)
let chestImage = createImage(chest)
let portalImage = createImage(portal)
let trampolineImage = createImage(trampoline)
let batEnemyImage = createImage(bat1)
let sharkEnemyImage = createImage(shark)
let sandImage = createImage(sand)
let scrollOffset = 0
let scrollOffsetY = 0
let lives = 10
let coins = 0
let isPaused = false
let gameEnded = false
let gameEndMessage = ''
let hasKey = false
let flyAbilityFrames = 0
let swimmingSpeedFrames = 0
let portalCooldownFrames = 0
let enemyHitCooldownFrames = 0
let showStartMenu = true
let showChestHint = false
let showGameOver = false
let moveHoldFrames = 0
let moveHoldDirection = ''
let platforms = []
let collectibles = []
let worldObjects = []
let enemies = []
let enemyDeathParticles = []
let waterZones = []

const startButton = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}

const gotItButton = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}

const gameOverPlayAgainButton = {
    x: 0,
    y: 0,
    width: 240,
    height: 78
}

const gameOverMenuButton = {
    x: 0,
    y: 0,
    width: 240,
    height: 78
}

const pauseResumeButton = {
    x: 0,
    y: 0,
    width: 240,
    height: 78
}

const pauseMenuButton = {
    x: 0,
    y: 0,
    width: 240,
    height: 78
}

const levelOrigin = {
    backgroundX: 0,
    genericX: 0,
    cloudX: 0
}

function createPlatforms() {
    const smallBaseWidth = platformImageSmall.width || 260
    const smallBaseHeight = platformImageSmall.height || 70
    const bigBaseWidth = platformImageBig.width || 360
    const bigBaseHeight = platformImageBig.height || 70

    const createdPlatforms = levelConfig.platforms.map((configPlatform) => {
        const useBig = configPlatform.type === 'big'
        const image = useBig ? platformImageBig : platformImageSmall
        const baseWidth = useBig ? bigBaseWidth : smallBaseWidth
        const baseHeight = useBig ? bigBaseHeight : smallBaseHeight
        const scale = configPlatform.scale ?? 1

        return new GenericObject({
            x: configPlatform.x,
            y: configPlatform.y,
            width: Math.round(baseWidth * scale),
            height: Math.round(baseHeight * scale),
            image
        })
    })

    createdPlatforms.sort((a, b) => a.position.x - b.position.x)

    const minGapBetweenPlatforms = 80
    for (let i = 1; i < createdPlatforms.length; i++) {
        const previous = createdPlatforms[i - 1]
        const current = createdPlatforms[i]
        const minX = previous.position.x + previous.width + minGapBetweenPlatforms
        if (current.position.x < minX) {
            current.position.x = minX
        }
    }

    return createdPlatforms
}

function createCollectibles() {
    const createdCollectibles = levelConfig.coins.map((configCoin) => ({
        collected: false,
        sprite: new GenericObject({
            x: configCoin.x,
            y: configCoin.y,
            width: 32,
            height: 32,
            image: coinImage
        })
    }))

    createdCollectibles.forEach((coinItem) => {
        platforms.forEach((platform) => {
            if (isOverlapping(coinItem.sprite, platform)) {
                coinItem.sprite.position.y = platform.position.y - coinItem.sprite.height - 10
            }
        })
    })

    return createdCollectibles
}

function createWorldObjects() {
    const imageByType = {
        key: keyImage,
        chest: chestImage,
        portal: portalImage,
        trampoline: trampolineImage,
        sand: sandImage
    }

    const createdWorldObjects = levelConfig.objects.map((configObject) => {
        const image = imageByType[configObject.type]
        const scale = configObject.scale ?? 1
        const width = Math.round((configObject.width || image.width || 64) * scale)
        const height = Math.round((configObject.height || image.height || 64) * scale)
        const worldObject = new GenericObject({
            x: configObject.x,
            y: configObject.y,
            width,
            height,
            image
        })

        worldObject.type = configObject.type
        worldObject.pairId = configObject.pairId ?? null
        worldObject.bounce = configObject.bounce ?? 30
        worldObject.collected = false
        return worldObject
    })

    createdWorldObjects.sort((a, b) => a.position.x - b.position.x)

    const minGapBetweenObjects = 24
    for (let i = 1; i < createdWorldObjects.length; i++) {
        const previous = createdWorldObjects[i - 1]
        const current = createdWorldObjects[i]
        const sameVerticalBand =
            current.position.y < previous.position.y + previous.height &&
            current.position.y + current.height > previous.position.y

        if (sameVerticalBand) {
            const minX = previous.position.x + previous.width + minGapBetweenObjects
            if (current.position.x < minX) {
                current.position.x = minX
            }
        }
    }

    createdWorldObjects.forEach((worldObject) => {
        const objectCenterX = worldObject.position.x + worldObject.width / 2
        const supportPlatform = platforms.find((platform) =>
            objectCenterX >= platform.position.x - 12 &&
            objectCenterX <= platform.position.x + platform.width + 12
        )

        if (!supportPlatform) {
            return
        }

        if (worldObject.type === 'trampoline') {
            worldObject.position.y = supportPlatform.position.y - worldObject.height + 6
        }

        if (worldObject.type === 'chest') {
            worldObject.position.y = supportPlatform.position.y - worldObject.height + 4
        }

        if (worldObject.type === 'portal') {
            worldObject.position.y = supportPlatform.position.y - worldObject.height + 6
        }
    })

    return createdWorldObjects
}

function createEnemies() {
    const imageByType = {
        bat: batEnemyImage,
        shark: sharkEnemyImage
    }

    return levelConfig.enemies.map((configEnemy) => {
        const image = imageByType[configEnemy.type]
        const scale = configEnemy.scale ?? 1
        const width = Math.round((configEnemy.width || image.width || 64) * scale)
        const height = Math.round((configEnemy.height || image.height || 64) * scale)
        const enemy = new GenericObject({
            x: configEnemy.x,
            y: configEnemy.y,
            width,
            height,
            image
        })

        enemy.type = configEnemy.type
        enemy.baseY = configEnemy.y
        if (configEnemy.type === 'shark') {
            enemy.baseX = configEnemy.x
            enemy.swimBaseY = configEnemy.y
            enemy.horizontalSpeed = configEnemy.speed ?? 1.5
            enemy.bobAmplitude = configEnemy.bobAmplitude ?? 12
            enemy.bobSpeed = configEnemy.bobSpeed ?? 0.045
            enemy.swimPhase = (configEnemy.x % 360) * (Math.PI / 180)
        } else {
            enemy.verticalSpeed = configEnemy.speed ?? 1
        }
        enemy.range = configEnemy.range ?? 60
        enemy.direction = -1
        return enemy
    })
}

function createWaterZones() {
    return (levelConfig.waterZones || []).map((z) => ({ ...z }))
}

function drawWaterZone(zone) {
    c.save()

    const fillColor = zone.tier === 'top'
        ? 'rgba(28, 156, 220, 0.92)'
        : 'rgba(24, 148, 214, 0.96)'
    const strokeColor = 'rgba(70, 196, 255, 0.75)'

    c.fillStyle = fillColor
    c.strokeStyle = strokeColor
    c.lineWidth = 4

    if (zone.tier === 'top') {
        c.beginPath()
        c.moveTo(zone.x, zone.y)
        c.lineTo(zone.x + zone.width, zone.y + 20)
        c.lineTo(zone.x + zone.width, zone.y + zone.height)
        c.lineTo(zone.x, zone.y + zone.height)
        c.closePath()
        c.fill()
        c.stroke()

        c.fillStyle = 'rgba(135, 216, 255, 0.55)'
        c.beginPath()
        c.moveTo(zone.x + 6, zone.y + 8)
        c.lineTo(zone.x + zone.width - 8, zone.y + 26)
        c.lineTo(zone.x + zone.width - 8, zone.y + 34)
        c.lineTo(zone.x + 6, zone.y + 16)
        c.closePath()
        c.fill()
    } else {
        c.fillRect(zone.x, zone.y, zone.width, zone.height)
        c.strokeRect(zone.x, zone.y, zone.width, zone.height)

        c.fillStyle = 'rgba(135, 216, 255, 0.28)'
        c.fillRect(zone.x, zone.y + 8, zone.width, 10)
    }

    c.restore()
}

function getDeepWaterZoneForEnemy(enemy) {
    return waterZones.find((zone) => {
        const centerX = enemy.baseX + enemy.width / 2
        return zone.tier === 'deep' && centerX > zone.x + 30 && centerX < zone.x + zone.width - 30
    })
}

function isOverlapping(a, b) {
    const aW = a.hitboxWidth ?? a.width
    const aH = a.hitboxHeight ?? a.height
    const bW = b.hitboxWidth ?? b.width
    const bH = b.hitboxHeight ?? b.height
    return (
        a.position.x < b.position.x + bW &&
        a.position.x + aW > b.position.x &&
        a.position.y < b.position.y + bH &&
        a.position.y + aH > b.position.y
    )
}

function findPairedPortal(currentPortal, allPortals) {
    if (currentPortal.pairId) {
        return allPortals.find((portalObject) => portalObject !== currentPortal && portalObject.pairId === currentPortal.pairId)
    }

    const portalIndex = allPortals.indexOf(currentPortal)
    if (portalIndex === -1) {
        return null
    }

    return portalIndex % 2 === 0 ? allPortals[portalIndex + 1] : allPortals[portalIndex - 1]
}

function isStompOnEnemy(playerEntity, enemyEntity) {
    const playerBottom = playerEntity.position.y + playerEntity.hitboxHeight
    // For shark, use larger threshold since it moves horizontally in water
    const threshold = enemyEntity.type === 'shark' ? 0.6 : 0.45
    const enemyTopThreshold = enemyEntity.position.y + enemyEntity.height * threshold
    return playerEntity.velocity.y > 0 && playerBottom <= enemyTopThreshold
}

function spawnEnemyDeathExplosion(enemyEntity) {
    const centerX = enemyEntity.position.x + enemyEntity.width / 2
    const centerY = enemyEntity.position.y + enemyEntity.height / 2

    for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12
        const speed = 1.6 + Math.random() * 1.6

        enemyDeathParticles.push({
            x: centerX,
            y: centerY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.8,
            radius: 2 + Math.random() * 2,
            life: 24 + Math.floor(Math.random() * 8),
            color: i % 2 === 0 ? '#ffcf4a' : '#ff7f3a'
        })
    }
}

function updateEnemyDeathEffects() {
    enemyDeathParticles = enemyDeathParticles.filter((particle) => particle.life > 0)

    enemyDeathParticles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.06
        particle.life -= 1

        c.save()
        c.globalAlpha = Math.max(0, particle.life / 32)
        c.fillStyle = particle.color
        c.beginPath()
        c.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        c.fill()
        c.restore()
    })
}

const pauseButton = {
    x: canvas.width - 58,
    y: 15,
    width: 28,
    height: 28
}

function updateHudAnchors() {
    pauseButton.x = canvas.width - 58
    pauseButton.y = 15
}

function updateSceneAnchors() {
    if (backgroundObjects.length > 0) {
        backgroundObjects[0].width = canvas.width
        backgroundObjects[0].height = canvas.height
    }

    if (genericObjects.length > 0) {
        const genericHeight = genericObjects[0].height > 0 ? genericObjects[0].height : (hillImage.naturalHeight || hillImage.height || 0)
        if (genericHeight > 0) {
            genericObjects[0].position.y = canvas.height - genericHeight + 24
        }
    }
}

function centerCameraOnPlayer() {
    const centerX = canvas.width / 2 - player.hitboxWidth / 2
    const centerY = canvas.height / 2 - player.hitboxHeight / 2
    const deltaX = player.position.x - centerX
    const deltaY = player.position.y - centerY

    if (deltaX === 0 && deltaY === 0) {
        return
    }

    player.position.x = centerX
    player.position.y = centerY
    scrollOffset += deltaX
    scrollOffsetY += deltaY

    platforms.forEach((platform) => {
        platform.position.x -= deltaX
        platform.position.y -= deltaY
    })

    collectibles.forEach((coinItem) => {
        coinItem.sprite.position.x -= deltaX
        coinItem.sprite.position.y -= deltaY
    })

    worldObjects.forEach((worldObject) => {
        worldObject.position.x -= deltaX
        worldObject.position.y -= deltaY
    })

    enemies.forEach((enemy) => {
        enemy.position.x -= deltaX
        enemy.position.y -= deltaY
        enemy.baseY -= deltaY
        if (enemy.type === 'shark') {
            enemy.baseX -= deltaX
            enemy.swimBaseY -= deltaY
        }
    })

    enemyDeathParticles.forEach((particle) => {
        particle.x -= deltaX
        particle.y -= deltaY
    })

    waterZones.forEach((zone) => {
        zone.x -= deltaX
        zone.y -= deltaY
    })

    genericObjects.forEach((genericObject) => {
        genericObject.position.x -= deltaX * 0.4
        genericObject.position.y -= deltaY * 0.4
    })

    cloudObjects.forEach((cloudObject) => {
        cloudObject.position.x -= deltaX * 0.1
        cloudObject.position.y -= deltaY * 0.1
    })
}

updateHudAnchors()

function isPointInsidePauseButton(mouseX, mouseY) {
    return (
        mouseX >= pauseButton.x &&
        mouseX <= pauseButton.x + pauseButton.width &&
        mouseY >= pauseButton.y &&
        mouseY <= pauseButton.y + pauseButton.height
    )
}

function drawPauseButton() {
    c.drawImage(pauseImage, pauseButton.x, pauseButton.y, pauseButton.width, pauseButton.height)
}

function isPointInsideRect(mouseX, mouseY, rect) {
    return (
        mouseX >= rect.x &&
        mouseX <= rect.x + rect.width &&
        mouseY >= rect.y &&
        mouseY <= rect.y + rect.height
    )
}

function drawMenuButton({ rect, label, iconImage, backgroundColor, borderColor, textColor, iconSize = 34 }) {
    c.save()
    c.fillStyle = backgroundColor
    c.strokeStyle = borderColor
    c.lineWidth = 2
    c.beginPath()
    c.roundRect(rect.x, rect.y, rect.width, rect.height, 8)
    c.fill()
    c.stroke()

    if (iconImage) {
        c.drawImage(iconImage, rect.x + 18, rect.y + (rect.height - iconSize) / 2, iconSize, iconSize)
    }

    c.fillStyle = textColor
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.font = `700 32px "${buttonFontFamily}"`
    c.fillText(label, rect.x + rect.width / 2 + (iconImage ? 22 : 0), rect.y + rect.height / 2 + 2)
    c.restore()
}

function dismissChestHint() {
    const chestObject = worldObjects.find((worldObject) => worldObject.type === 'chest' && !worldObject.collected)

    showChestHint = false

    if (!chestObject) {
        return
    }

    player.position.x = Math.max(24, chestObject.position.x - player.width - 72)
    player.position.y = chestObject.position.y + chestObject.height - player.height
    player.velocity.x = 0
    player.velocity.y = 0
    player.onGround = true
    keys.left.pressed = false
    keys.right.pressed = false
    keys.up.pressed = false
    keys.down.pressed = false
}

function drawStartMenu() {
    const avatarSize = Math.min(180, canvas.width * 0.16)
    const titleY = Math.max(220, canvas.height * 0.46)

    startButton.width = 72
    startButton.height = 72
    startButton.x = canvas.width / 2 - startButton.width / 2
    startButton.y = titleY + 92

    c.save()
    c.fillStyle = '#455f88'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.drawImage(lucasImage, canvas.width / 2 - avatarSize / 2, 40, avatarSize, avatarSize)

    c.fillStyle = '#ffffff'
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.font = `700 54px "${titleFontFamily}"`
    c.fillText('Find the Letter', canvas.width / 2, titleY)

    c.font = `400 34px "${bodyLightFontFamily}"`
    c.fillText('Starring Lucas Grao and more', canvas.width / 2, titleY + 64)

    drawMenuButton({
        rect: startButton,
        label: 'A',
        backgroundColor: '#56a551',
        borderColor: '#458742',
        textColor: '#ffffff'
    })

    c.restore()
}

function drawGameOverScreen() {
    const titleY = canvas.height / 2 - 60
    const buttonY = canvas.height / 2 + 20
    const gap = 20
    const totalW = gameOverPlayAgainButton.width + gap + gameOverMenuButton.width
    const startX = canvas.width / 2 - totalW / 2

    gameOverPlayAgainButton.x = startX
    gameOverPlayAgainButton.y = buttonY
    gameOverMenuButton.x = startX + gameOverPlayAgainButton.width + gap
    gameOverMenuButton.y = buttonY

    c.save()
    c.fillStyle = '#8b3232'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = '#ffffff'
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.font = `700 64px "${titleFontFamily}"`
    c.fillText('Game Over', canvas.width / 2, titleY)

    c.font = `300 30px "${bodyLightFontFamily}"`
    c.fillText("Don't give up, try again!", canvas.width / 2, titleY + 52)

    drawMenuButton({
        rect: gameOverPlayAgainButton,
        label: 'Play Again',
        iconImage: playImage,
        backgroundColor: '#56a551',
        borderColor: '#458742',
        textColor: '#ffffff'
    })

    drawMenuButton({
        rect: gameOverMenuButton,
        label: 'Menu',
        iconImage: pauseImage,
        backgroundColor: '#56a551',
        borderColor: '#458742',
        textColor: '#ffffff'
    })

    c.restore()
}

function drawChestHintOverlay() {
    gotItButton.width = 250
    gotItButton.height = 78
    gotItButton.x = canvas.width / 2 - gotItButton.width / 2
    gotItButton.y = canvas.height - 126

    c.save()
    c.fillStyle = '#2e8994'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = '#ffffff'
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.font = `700 58px "${titleFontFamily}"`
    c.fillText('You are almost', canvas.width / 2, 110)

    c.font = `300 34px "${bodyLightFontFamily}"`
    c.fillText('Find the key to open the treasure', canvas.width / 2, 190)

    const keySize = Math.min(220, canvas.width * 0.24)
    c.drawImage(keyImage, canvas.width / 2 - keySize / 2, canvas.height / 2 - 50, keySize, keySize)

    drawMenuButton({
        rect: gotItButton,
        label: 'Got it',
        iconImage: playImage,
        backgroundColor: '#44a8b8',
        borderColor: '#2b90a1',
        textColor: '#ffffff'
    })

    c.restore()
}

function drawHud() {
    const iconSize = 28
    const textY = 29
    const heartX = 18
    const livesX = heartX + iconSize + 10
    const coinX = 168
    const coinsX = coinX + iconSize + 10

    c.save()
    c.fillStyle = 'rgba(130, 44, 44, 0.9)'
    c.fillRect(0, 0, canvas.width, hudBarHeight)

    c.fillStyle = '#ffffff'
    c.font = `700 28px "${titleFontFamily}"`
    c.textBaseline = 'middle'

    c.drawImage(heartImage, heartX, 15, iconSize, iconSize)
    c.fillStyle = '#ffffff'
    c.fillText(String(lives), livesX, textY)

    c.drawImage(coinImage, coinX, 15, iconSize, iconSize)
    c.fillStyle = '#ffffff'
    c.fillText(String(coins), coinsX, textY)

    if (hasKey) {
        c.drawImage(keyImage, pauseButton.x - 44, 15, iconSize, iconSize)
    }

    drawPauseButton()
    c.restore()
}

function drawGameEndOverlay() {
    c.save()
    c.fillStyle = 'rgba(20, 20, 20, 0.72)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.textAlign = 'center'
    c.fillStyle = '#ffffff'
    c.font = `700 56px "${titleFontFamily}"`
    c.fillText('Fim de jogo', canvas.width / 2, canvas.height / 2 - 20)
    c.font = `400 30px "${bodyFontFamily}"`
    c.fillText(gameEndMessage, canvas.width / 2, canvas.height / 2 + 36)
    c.font = `400 22px "${bodyLightFontFamily}"`
    c.fillText('Recarregue a pagina para jogar de novo', canvas.width / 2, canvas.height / 2 + 80)
    c.restore()
}

function drawPauseOverlay() {
    const cx = canvas.width / 2
    const cy = canvas.height / 2

    // Layout constants
    const actionsBoxW = Math.min(400, canvas.width * 0.38)
    const actionsBoxH = 300
    const actionsBoxX = cx - actionsBoxW - 40
    const actionsBoxY = cy - actionsBoxH / 2 + 10

    const buttonsX = cx + 40
    pauseResumeButton.x = buttonsX
    pauseResumeButton.y = actionsBoxY + 10
    pauseMenuButton.x = buttonsX
    pauseMenuButton.y = actionsBoxY + 10 + pauseResumeButton.height + 20

    c.save()
    c.fillStyle = '#3d8d4d'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = '#f5f5f5'
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.font = `700 64px "${titleFontFamily}"`
    c.fillText('Paused', cx, 80)

    c.font = `300 30px "${bodyLightFontFamily}"`
    c.fillText('I know, everybody need to take a breath', cx, 140)

    // Actions box
    c.fillStyle = 'rgba(193, 210, 186, 0.85)'
    c.beginPath()
    c.roundRect(actionsBoxX, actionsBoxY, actionsBoxW, actionsBoxH, 8)
    c.fill()

    const col1X = actionsBoxX + 30
    const col2X = actionsBoxX + actionsBoxW * 0.45
    const rowStart = actionsBoxY + 44
    const rowGap = 42
    const rows = [
        ['SPACE', 'Jump / Swim / Fly'],
        ['SPACE again', 'Glide (press again in the air)']
    ]

    c.textAlign = 'left'
    c.textBaseline = 'middle'

    // Header
    c.fillStyle = '#1a3a22'
    c.font = `700 22px "${buttonFontFamily}"`
    c.textAlign = 'center'
    c.fillText('ACTIONS', actionsBoxX + actionsBoxW / 2, actionsBoxY + 22)
    c.textAlign = 'left'

    rows.forEach(([key, action], i) => {
        const rowY = rowStart + i * rowGap
        c.font = `700 22px "${buttonFontFamily}"`
        c.fillStyle = '#1a3a22'
        c.fillText(key, col1X, rowY)
        c.font = `400 22px "${bodyFontFamily}"`
        c.fillStyle = '#111111'
        c.fillText(action, col2X, rowY)
    })

    // Arrow icons for move left/right
    const arrowCol = actionsBoxX + actionsBoxW * 0.68
    c.fillStyle = '#1a3a22'
    c.font = `700 26px "${bodyFontFamily}"`
    c.fillText('\u2190', arrowCol, rowStart + 2 * rowGap - 4)
    c.fillText('\u2192', arrowCol, rowStart + 2 * rowGap + rowGap - 4)
    c.font = `400 18px "${bodyFontFamily}"`
    c.fillText('Move left', arrowCol + 30, rowStart + 2 * rowGap)
    c.fillText('Move right', arrowCol + 30, rowStart + 3 * rowGap)

    drawMenuButton({
        rect: pauseResumeButton,
        label: 'Resume',
        iconImage: playImage,
        backgroundColor: '#56a551',
        borderColor: '#458742',
        textColor: '#ffffff'
    })

    drawMenuButton({
        rect: pauseMenuButton,
        label: 'Menu',
        iconImage: pauseImage,
        backgroundColor: '#56a551',
        borderColor: '#458742',
        textColor: '#ffffff'
    })

    c.restore()
}

function init() {
    player = new Player()
    backgroundImage = createImage(background)
    cloudImage = createImage(cloud)
    hillImage = createImage(hill)
    platformImageSmall = createImage(platformSmall)
    platformImageBig = createImage(platformBig)
    coinImage = createImage(money)
    keyImage = createImage(key)
    heartImage = createImage(heart)
    pauseImage = createImage(pause)
    playImage = createImage(play)
    lucasImage = createImage(lucas)
    chestImage = createImage(chest)
    portalImage = createImage(portal)
    trampolineImage = createImage(trampoline)
    batEnemyImage = createImage(bat1)
    sharkEnemyImage = createImage(shark)
    sandImage = createImage(sand)
    scrollOffset = 0
    scrollOffsetY = 0
    lives = 10
    coins = 0
    isPaused = false
    gameEnded = false
    gameEndMessage = ''
    showGameOver = false
    hasKey = false
    flyAbilityFrames = 0
    swimmingSpeedFrames = 0
    moveHoldFrames = 0
    moveHoldDirection = ''
    player.glideWindowFrames = 0
    player.glideArmed = false
    portalCooldownFrames = 0
    enemyHitCooldownFrames = 0
    showChestHint = false
    platforms = createPlatforms()
    collectibles = createCollectibles()
    worldObjects = createWorldObjects()
    enemies = createEnemies()
    enemyDeathParticles = []
    waterZones = createWaterZones()
    keys.left.pressed = false
    keys.right.pressed = false
    keys.up.pressed = false
    keys.down.pressed = false
    updateSceneAnchors()
}

function resetRunAfterFall() {
    player = new Player()
    scrollOffset = 0
    scrollOffsetY = 0
    coins = 0
    hasKey = false
    flyAbilityFrames = 0
    swimmingSpeedFrames = 0
    moveHoldFrames = 0
    moveHoldDirection = ''
    player.glideWindowFrames = 0
    player.glideArmed = false
    portalCooldownFrames = 0
    enemyHitCooldownFrames = 0
    showChestHint = false
    platforms = createPlatforms()
    collectibles = createCollectibles()
    worldObjects = createWorldObjects()
    enemies = createEnemies()
    enemyDeathParticles = []
    waterZones = createWaterZones()
    backgroundObjects[0].position.x = levelOrigin.backgroundX
    genericObjects[0].position.x = levelOrigin.genericX
    cloudObjects[0].position.x = levelOrigin.cloudX
    keys.left.pressed = false
    keys.right.pressed = false
    keys.up.pressed = false
    keys.down.pressed = false
}

//background
const backgroundObjects = [
    new GenericObject({
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
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
    new GenericObject({
        x: 0,
        y: 0,
        image: cloudImage
    })
]

platforms = createPlatforms()
collectibles = createCollectibles()
worldObjects = createWorldObjects()
enemies = createEnemies()
waterZones = createWaterZones()
updateSceneAnchors()

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

function animate() {
    requestAnimationFrame(animate)

    if (showStartMenu) {
        drawStartMenu()
        return
    }

    if (showChestHint) {
        drawChestHintOverlay()
        return
    }

    if (showGameOver) {
        drawGameOverScreen()
        return
    }

    if (gameEnded) {
        drawGameEndOverlay()
        return
    }

    if (isPaused) {
        drawPauseOverlay()
        return
    }

    c.fillStyle = '#3aa2e8'
    c.fillRect(0, 0, canvas.width, canvas.height)

    const movingRight = keys.right.pressed && !keys.left.pressed
    const movingLeft = keys.left.pressed && !keys.right.pressed
    const moveDirection = movingRight ? 'right' : (movingLeft ? 'left' : '')

    if (moveDirection) {
        if (moveDirection === moveHoldDirection) {
            moveHoldFrames += 1
        } else {
            moveHoldDirection = moveDirection
            moveHoldFrames = 1
        }
    } else {
        moveHoldDirection = ''
        moveHoldFrames = 0
    }

    const moveSpeed = moveHoldFrames >= 60 ? 9 : 5

    if (player.inWater || (player.onGround && player.velocity.y >= 0)) {
        player.glideWindowFrames = 0
        player.glideArmed = false
    } else if (player.glideWindowFrames > 0) {
        player.glideWindowFrames -= 1
    }

    if (keys.up.pressed && !player.inWater && !player.onGround) {
        if (flyAbilityFrames > 0) {
            player.velocity.y = Math.max(player.velocity.y - 1.2, -10)
        } else if (player.glideArmed && player.velocity.y > 1.8) {
            // Glide by limiting fall speed while Space is held in the air.
            player.velocity.y = 1.8
        }
    }

    if (flyAbilityFrames > 0) {
        flyAbilityFrames -= 1
    }

    if (swimmingSpeedFrames > 0) {
        swimmingSpeedFrames -= 1
    }

    if (keys.right.pressed && !keys.left.pressed) {
        player.velocity.x = player.inWater ? moveSpeed * 0.5 : moveSpeed
    } else if (keys.left.pressed && !keys.right.pressed) {
        player.velocity.x = player.inWater ? -moveSpeed * 0.5 : -moveSpeed
    } else {
        player.velocity.x = 0
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

    waterZones.forEach((zone) => {
        drawWaterZone(zone)
    })

    platforms.forEach(p => {
        p.draw()
    })

    worldObjects.forEach(worldObject => {
        if (!worldObject.collected) {
            worldObject.draw()
        }
    })

    enemies.forEach((enemy) => {
        if (enemy.type === 'shark') {
            const waterZone = getDeepWaterZoneForEnemy(enemy)
            if (!waterZone) {
                return
            }

            const minX = waterZone.x + 36
            const maxX = waterZone.x + waterZone.width - enemy.width - 36
            enemy.position.x += enemy.horizontalSpeed * enemy.direction

            if (enemy.position.x <= minX) {
                enemy.position.x = minX
                enemy.direction = 1
            } else if (enemy.position.x >= maxX) {
                enemy.position.x = maxX
                enemy.direction = -1
            }

            enemy.swimPhase += enemy.bobSpeed
            const swimMidY = waterZone.y + waterZone.height * 0.45 - enemy.height / 2
            enemy.swimBaseY = swimMidY
            enemy.position.y = swimMidY + Math.sin(enemy.swimPhase) * enemy.bobAmplitude
            enemy.draw()
        } else {
            enemy.position.y += enemy.verticalSpeed * enemy.direction

            if (enemy.position.y <= enemy.baseY - enemy.range) {
                enemy.position.y = enemy.baseY - enemy.range
                enemy.direction = 1
            } else if (enemy.position.y >= enemy.baseY + enemy.range) {
                enemy.position.y = enemy.baseY + enemy.range
                enemy.direction = -1
            }

            enemy.draw()
        }
    })

    updateEnemyDeathEffects()

    collectibles.forEach(coinItem => {
        if (!coinItem.collected) {
            coinItem.sprite.draw()
        }
    })

    const wasInWater = !!player.inWater
    player.update(platforms)

    const playerInWater = waterZones.some((zone) => {
        const px = player.position.x + player.hitboxWidth / 2
        return px > zone.x && px < zone.x + zone.width &&
            (player.position.y + player.hitboxHeight) > zone.y &&
            player.position.y < zone.y + zone.height
    })
    player.inWater = playerInWater
    if (playerInWater) {
        if (swimmingSpeedFrames > 0) {
            if (player.velocity.y > 1) player.velocity.y = 1
        } else {
            if (player.velocity.y > 2) player.velocity.y = 2
        }
    }

    // If the player swims up past the surface, give a small jump-like pop out of water.
    if (wasInWater && !playerInWater && keys.up.pressed && player.velocity.y < 0) {
        player.velocity.y = -28
        player.glideWindowFrames = 36
        player.glideArmed = false
    }

    // If the player leaves water in any other way, they die
    if (wasInWater && !playerInWater && !(keys.up.pressed && player.velocity.y < 0)) {
        lives = Math.max(0, lives - 1)
        if (lives === 0) {
            showGameOver = true
        } else {
            resetRunAfterFall()
        }
    }

    centerCameraOnPlayer()

    if (portalCooldownFrames > 0) {
        portalCooldownFrames -= 1
    }

    if (enemyHitCooldownFrames > 0) {
        enemyHitCooldownFrames -= 1
    }

    const touchingEnemies = enemies.filter((enemy) => isOverlapping(player, enemy))
    let stompedEnemy = false
    let stompedEnemyType = null

    touchingEnemies.forEach((enemy) => {
        if (isStompOnEnemy(player, enemy)) {
            // Stomp detected - remove enemy from array and play death effect
            const enemyIndex = enemies.indexOf(enemy)
            if (enemyIndex > -1) {
                enemies.splice(enemyIndex, 1)
            }
            spawnEnemyDeathExplosion(enemy)
            stompedEnemy = true
            stompedEnemyType = enemy.type
        }
    })

    if (stompedEnemy) {
        // Player bounces on stomp (0 damage)
        player.velocity.y = -10
        player.onGround = false
        // Grant ability based on enemy type
        if (stompedEnemyType === 'shark') {
            swimmingSpeedFrames = Math.min(swimmingSpeedFrames + 300, 600)
        } else {
            flyAbilityFrames = Math.min(flyAbilityFrames + 300, 600)
        }
    } else if (enemyHitCooldownFrames === 0 && touchingEnemies.length > 0) {
        // Only take damage if it's not a successful stomp
        lives = Math.max(0, lives - 1)
        enemyHitCooldownFrames = 45

        // Small knock-back so the player can separate from the enemy.
        player.velocity.y = -6
        player.velocity.x = player.position.x < touchingEnemies[0].position.x ? -3 : 3

        if (lives === 0) {
            showGameOver = true
        }
    }

    collectibles.forEach((coinItem) => {
        if (!coinItem.collected && isOverlapping(player, coinItem.sprite)) {
            coinItem.collected = true
            coins += 1
        }
    })

    const portals = worldObjects.filter((worldObject) => worldObject.type === 'portal' && !worldObject.collected)
    let didTeleport = false

    worldObjects.forEach((worldObject) => {
        if (worldObject.collected) {
            return
        }

        if (didTeleport) {
            return
        }

        if (worldObject.type === 'key' && isOverlapping(player, worldObject)) {
            worldObject.collected = true
            hasKey = true
            return
        }

        if (worldObject.type === 'chest' && isOverlapping(player, worldObject)) {
            if (hasKey) {
                gameEnded = true
                gameEndMessage = 'Voce abriu o bau com sucesso!'
            } else {
                showChestHint = true
                player.position.x = worldObject.position.x - player.width - 16
                player.velocity.x = 0
            }
            return
        }

        if (worldObject.type === 'portal' && portalCooldownFrames === 0 && isOverlapping(player, worldObject)) {
            const targetPortal = findPairedPortal(worldObject, portals)
            if (targetPortal) {
                const exitOnRight = player.position.x <= worldObject.position.x + worldObject.width / 2
                player.position.x = exitOnRight
                    ? targetPortal.position.x + targetPortal.width + 8
                    : targetPortal.position.x - player.width - 8
                player.position.y = targetPortal.position.y + targetPortal.height - player.height
                player.velocity.x = 0
                player.velocity.y = 0
                player.onGround = false
                portalCooldownFrames = 24
                didTeleport = true
            }
            return
        }

        if (
            worldObject.type === 'trampoline' &&
            player.velocity.y >= 0 &&
            player.position.y + player.height <= worldObject.position.y + Math.max(24, worldObject.height) &&
            isOverlapping(player, worldObject)
        ) {
            player.position.y = worldObject.position.y - player.height
            player.velocity.y = -worldObject.bounce
            player.onGround = false
            player.glideWindowFrames = 36
            player.glideArmed = false
        }
    })

    if (!showGameOver && scrollOffsetY > 1000) {
        lives = Math.max(0, lives - 1)

        if (lives === 0) {
            showGameOver = true
        } else {
            resetRunAfterFall()
        }
    }

    drawHud()
}

animate()

addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)

    if (showChestHint) {
        if (keyCode === 27) {
            dismissChestHint()
        }
        return
    }

    if (showStartMenu) {
        return
    }

    if (gameEnded) {
        return
    }

    if (keyCode === 27) {
        isPaused = !isPaused
        return
    }

    if (isPaused) {
        return
    }

    switch (keyCode) {
        case 37: { // ← Move left
            keys.left.pressed = true
            break
        }
        case 39: { // → Move right
            keys.right.pressed = true
            break
        }
        case 40: {
            keys.down.pressed = true
            break
        }
        case 32: { // SPACE - Action (Jump / Fly / Swim)
            if (player.inWater && !keys.up.pressed) {
                player.velocity.y = -12
            } else if (!keys.up.pressed && player.onGround) {
                player.velocity.y = -25
                player.glideWindowFrames = 36
                player.glideArmed = false
            } else if (!keys.up.pressed && !player.onGround && player.glideWindowFrames > 0) {
                player.glideArmed = true
            }
            keys.up.pressed = true
            break
        }
    }
})

addEventListener('keyup', ({ keyCode }) => {
    //console.log(keyCode)

    if (showStartMenu || showChestHint) {
        return
    }

    if (gameEnded) {
        return
    }

    if (isPaused) {
        return
    }

    switch (keyCode) {
        case 37: { // ← Move left
            keys.left.pressed = false
            break
        }
        case 39: { // → Move right
            keys.right.pressed = false
            break
        }
        case 40: {
            keys.down.pressed = false
            break
        }
        case 32: { // SPACE - Action
            keys.up.pressed = false
            break
        }
    }
})

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    const mouseX = (event.clientX - rect.left) * scaleX
    const mouseY = (event.clientY - rect.top) * scaleY

    if (showStartMenu) {
        if (isPointInsideRect(mouseX, mouseY, startButton)) {
            showStartMenu = false
            init()
        }
        return
    }

    if (showChestHint) {
        if (isPointInsideRect(mouseX, mouseY, gotItButton)) {
            dismissChestHint()
        }
        return
    }

    if (showGameOver) {
        if (isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton)) {
            showGameOver = false
            init()
        } else if (isPointInsideRect(mouseX, mouseY, gameOverMenuButton)) {
            showGameOver = false
            showStartMenu = true
            init()
        }
        return
    }

    if (gameEnded) {
        return
    }

    if (isPaused) {
        if (isPointInsideRect(mouseX, mouseY, pauseResumeButton)) {
            isPaused = false
        } else if (isPointInsideRect(mouseX, mouseY, pauseMenuButton)) {
            isPaused = false
            showStartMenu = true
            init()
        }
        return
    }

    if (isPointInsidePauseButton(mouseX, mouseY)) {
        isPaused = !isPaused
    }
})

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const mouseX = (event.clientX - rect.left) * scaleX
    const mouseY = (event.clientY - rect.top) * scaleY

    let isPointer = false

    if (showStartMenu) {
        isPointer = isPointInsideRect(mouseX, mouseY, startButton)
    } else if (showChestHint) {
        isPointer = isPointInsideRect(mouseX, mouseY, gotItButton)
    } else if (showGameOver) {
        isPointer =
            isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton) ||
            isPointInsideRect(mouseX, mouseY, gameOverMenuButton)
    } else if (isPaused) {
        isPointer =
            isPointInsideRect(mouseX, mouseY, pauseResumeButton) ||
            isPointInsideRect(mouseX, mouseY, pauseMenuButton)
    } else if (!gameEnded) {
        isPointer = isPointInsidePauseButton(mouseX, mouseY)
    }

    canvas.style.cursor = isPointer ? 'pointer' : 'default'
})

window.addEventListener('resize', () => {
    resizeCanvasToViewport()
    updateHudAnchors()
    updateSceneAnchors()
    centerCameraOnPlayer()
})