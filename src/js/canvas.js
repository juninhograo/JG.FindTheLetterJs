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
import levelConfigB from './levelConfigB'
import levelConfigC from './levelConfigC'
import levelConfigMystery from './levelConfigMystery'
import desertBackground from '../img/background/BG_mountains_noon2_1024.png'

let activeLevelConfig = levelConfig

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
import playerWalk6 from '../img/Player/Lucas/Walk/Player-walk-5.png'
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
import bat1 from '../img/enemies/bat-1.png'
import shark from '../img/enemies/shark.png'
import megalodon1 from '../img/enemies/megalodon-1.gif'
import megalodonBiteFrame0 from '../img/enemies/_debug_megalodon_bite_frames/frame-000.png'
import megalodonBiteFrame1 from '../img/enemies/_debug_megalodon_bite_frames/frame-001.png'
import megalodonBiteFrame2 from '../img/enemies/_debug_megalodon_bite_frames/frame-002.png'
import megalodonBiteFrame3 from '../img/enemies/_debug_megalodon_bite_frames/frame-003.png'
import megalodonBiteFrame4 from '../img/enemies/_debug_megalodon_bite_frames/frame-004.png'
import megalodonBiteFrame5 from '../img/enemies/_debug_megalodon_bite_frames/frame-005.png'
import megalodonBiteFrame6 from '../img/enemies/_debug_megalodon_bite_frames/frame-006.png'
import megalodonBiteFrame7 from '../img/enemies/_debug_megalodon_bite_frames/frame-007.png'
import antEnemy from '../img/enemies/ant.png'
import elephantImg from '../img/enemies/elephant.png'
import kangarooSprite from '../img/enemies/kangaroo-punch-transparent.png'
import sand from '../img/elements/element-sea 1.png'
import dogFriend from '../img/friends/dog.png'
import cowFriend from '../img/friends/cow.png'
import crocodileFriend from '../img/friends/crocodile.png'
import bearFriend from '../img/friends/bear.png'
import firstBadge from '../img/elements/first.png'

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

function drawCrouchCrate(x, y, width, height) {
    const px = Math.max(1, Math.floor(Math.min(width, height) / 16))
    const frame = Math.max(2, px * 2)
    const innerFrame = Math.max(2, px)

    c.save()

    // Outer border and frame
    c.fillStyle = '#0b0908'
    c.fillRect(x, y, width, height)
    c.fillStyle = '#b57c3e'
    c.fillRect(x + frame, y + frame, width - frame * 2, height - frame * 2)

    // Frame tint blocks for pixel-art look
    const midX = x + width / 2
    const midY = y + height / 2
    c.fillStyle = '#c79249'
    c.fillRect(x + frame, y + frame, width / 2 - frame, height / 2 - frame)
    c.fillStyle = '#cda95d'
    c.fillRect(midX, y + frame, width / 2 - frame, height / 2 - frame)
    c.fillStyle = '#b3783f'
    c.fillRect(x + frame, midY, width / 2 - frame, height / 2 - frame)
    c.fillStyle = '#c89f55'
    c.fillRect(midX, midY, width / 2 - frame, height / 2 - frame)

    // Inner panel
    const panelX = x + frame + innerFrame
    const panelY = y + frame + innerFrame
    const panelW = width - (frame + innerFrame) * 2
    const panelH = height - (frame + innerFrame) * 2

    c.fillStyle = '#0b0908'
    c.fillRect(panelX, panelY, panelW, panelH)

    const woodPad = Math.max(1, px)
    const woodX = panelX + woodPad
    const woodY = panelY + woodPad
    const woodW = panelW - woodPad * 2
    const woodH = panelH - woodPad * 2

    c.fillStyle = '#b37545'
    c.fillRect(woodX, woodY, woodW, woodH)
    c.fillStyle = '#a96b44'
    c.fillRect(woodX, woodY + woodH * 0.5, woodW, woodH * 0.5)

    // Diagonal slats
    c.save()
    c.beginPath()
    c.rect(woodX, woodY, woodW, woodH)
    c.clip()
    c.lineWidth = Math.max(2, px * 2)

    for (let i = -woodH; i < woodW + woodH; i += Math.max(10, px * 6)) {
        c.strokeStyle = '#d2a160'
        c.beginPath()
        c.moveTo(woodX + i, woodY + woodH)
        c.lineTo(woodX + i + woodH, woodY)
        c.stroke()

        c.strokeStyle = '#7b3c31'
        c.beginPath()
        c.moveTo(woodX + i + Math.max(1, px), woodY + woodH)
        c.lineTo(woodX + i + woodH + Math.max(1, px), woodY)
        c.stroke()
    }
    c.restore()

    // Corner bolts
    const bolt = Math.max(2, px * 2)
    const boltPad = frame + Math.max(2, px * 2)
    const bolts = [
        [x + boltPad, y + boltPad],
        [x + width - boltPad - bolt, y + boltPad],
        [x + boltPad, y + height - boltPad - bolt],
        [x + width - boltPad - bolt, y + height - boltPad - bolt]
    ]
    bolts.forEach(([bx, by]) => {
        c.fillStyle = '#e1c072'
        c.fillRect(bx, by, bolt, bolt)
        c.fillStyle = '#67342f'
        c.fillRect(bx + Math.max(1, px), by + Math.max(1, px), bolt, bolt)
    })

    c.restore()
}

class Player {
    constructor() {
        this.width = 72
        this.height = 96
        // Hitbox is 28% smaller than the visual sprite, centered on it
        this.standHitboxWidth = Math.round(72 * 0.72)
        this.standHitboxHeight = Math.round(96 * 0.72)
        this.crouchHitboxWidth = Math.round(this.standHitboxWidth * 0.5)
        this.crouchHitboxHeight = Math.round(this.standHitboxHeight * 0.5)
        this.hitboxWidth = this.standHitboxWidth
        this.hitboxHeight = this.standHitboxHeight
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
        this.isCrouching = false
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

        if (this.isCrouching) {
            const drawWidth = this.hitboxWidth
            const drawHeight = this.hitboxHeight
            const spriteX = this.position.x
            const spriteY = this.position.y

            drawCrouchCrate(spriteX, spriteY, drawWidth, drawHeight)
            return
        }

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
        const spriteX = this.position.x + offsetX
        const spriteY = this.position.y + offsetY

        c.save()
        if (!this.facingRight) {
            c.scale(-1, 1)
            const drawX = -(spriteX + drawWidth)

            c.drawImage(frame, drawX, spriteY, drawWidth, drawHeight)

            if (fins > 0) {
                const finBaseX = drawX + drawWidth * 0.5
                const finBaseY = spriteY + drawHeight * 0.02
                c.fillStyle = '#2f6f88'
                c.strokeStyle = '#d5f6ff'
                c.lineWidth = 2
                c.beginPath()
                c.moveTo(finBaseX, finBaseY)
                c.lineTo(finBaseX + drawWidth * 0.12, finBaseY - drawHeight * 0.33)
                c.lineTo(finBaseX + drawWidth * 0.12, finBaseY + drawHeight * 0.1)
                c.closePath()
                c.fill()
                c.stroke()
            }
        } else {
            c.drawImage(frame, spriteX, spriteY, drawWidth, drawHeight)

            if (fins > 0) {
                const finBaseX = spriteX + drawWidth * 0.5
                const finBaseY = spriteY + drawHeight * 0.02
                c.fillStyle = '#2f6f88'
                c.strokeStyle = '#d5f6ff'
                c.lineWidth = 2
                c.beginPath()
                c.moveTo(finBaseX, finBaseY)
                c.lineTo(finBaseX - drawWidth * 0.12, finBaseY - drawHeight * 0.33)
                c.lineTo(finBaseX - drawWidth * 0.12, finBaseY + drawHeight * 0.1)
                c.closePath()
                c.fill()
                c.stroke()
            }
        }
        c.restore()
    }

    update(platforms) {
        const prevHitboxWidth = this.hitboxWidth
        const prevHitboxHeight = this.hitboxHeight
        const playerCenterX = this.position.x + prevHitboxWidth / 2
        const playerBottomY = this.position.y + prevHitboxHeight

        const wantsCrouch = keys.down.pressed && this.onGround && !this.inWater
        let nextHitboxWidth = this.standHitboxWidth
        let nextHitboxHeight = this.standHitboxHeight
        let nextIsCrouching = false

        if (wantsCrouch) {
            nextHitboxWidth = this.crouchHitboxWidth
            nextHitboxHeight = this.crouchHitboxHeight
            nextIsCrouching = true
        } else if (this.isCrouching) {
            const standX = playerCenterX - this.standHitboxWidth / 2
            const standY = playerBottomY - this.standHitboxHeight
            const blockedOverhead = platforms.some((platform) => {
                return standX < platform.position.x + platform.width &&
                    standX + this.standHitboxWidth > platform.position.x &&
                    standY < platform.position.y + platform.height &&
                    standY + this.standHitboxHeight > platform.position.y
            })

            if (blockedOverhead) {
                nextHitboxWidth = this.crouchHitboxWidth
                nextHitboxHeight = this.crouchHitboxHeight
                nextIsCrouching = true
            }
        }

        if (nextHitboxWidth !== prevHitboxWidth || nextHitboxHeight !== prevHitboxHeight) {
            this.hitboxWidth = nextHitboxWidth
            this.hitboxHeight = nextHitboxHeight
            this.position.x = playerCenterX - this.hitboxWidth / 2
            this.position.y = playerBottomY - this.hitboxHeight
        }

        this.isCrouching = nextIsCrouching

        // Resolve horizontal movement first so side collisions don't push vertically.
        this.position.x += this.velocity.x

        // Invisible left/right walls.
        if (this.position.x < worldBounds.minX) {
            this.position.x = worldBounds.minX
            if (this.velocity.x < 0) this.velocity.x = 0
        }

        const maxPlayerX = worldBounds.maxX - this.hitboxWidth
        if (this.position.x > maxPlayerX) {
            this.position.x = maxPlayerX
            if (this.velocity.x > 0) this.velocity.x = 0
        }

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

        // Invisible top wall.
        if (this.position.y < worldBounds.topY) {
            this.position.y = worldBounds.topY
            if (this.velocity.y < 0) this.velocity.y = 0
        }

        // Invisible floor clamp (no-void safety).
        if (this.position.y + this.hitboxHeight > worldBounds.bottomY) {
            this.position.y = worldBounds.bottomY - this.hitboxHeight
            if (this.velocity.y > 0) this.velocity.y = 0
            this.onGround = true
        }

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
let megalodonEnemyImage = createImage(megalodon1)
const megalodonBiteFrameImages = [
    megalodonBiteFrame0,
    megalodonBiteFrame1,
    megalodonBiteFrame2,
    megalodonBiteFrame3,
    megalodonBiteFrame4,
    megalodonBiteFrame5,
    megalodonBiteFrame6,
    megalodonBiteFrame7
].map(createImage)
let antEnemyImage = createImage(antEnemy)
let elephantEnemyImage = createImage(elephantImg)
let kangarooEnemyImage = createImage(kangarooSprite)
let sandImage = createImage(sand)
let dogFriendImage = createImage(dogFriend)
let cowFriendImage = createImage(cowFriend)
let crocodileFriendImage = createImage(crocodileFriend)
let bearFriendImage = createImage(bearFriend)
let firstBadgeImage = createImage(firstBadge)
let desertBackgroundImage = createImage(desertBackground)
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
let fins = 0
let portalCooldownFrames = 0
let enemyHitCooldownFrames = 0
let driveByFrames = 1800
let driveByRiders = []
let driveBySpawnFromLeft = true
let showStartMenu = true
let showChestHint = false
let showGameOver = false
let moveHoldFrames = 0
let moveHoldDirection = ''
let shootCooldownFrames = 0
let soccerBalls = []
let endQuizResult = 'idle'
let endQuizMessage = 'Choose the animal that starts with the letter A.'
let endQuizSelectedId = ''
let endQuizAnimFrames = 0
let levelACompleted = false
let levelBCompleted = false
let levelCCompleted = false
let levelABatKills = 0
let canSummonBat = false
let summonBatCooldownFrames = 0
let batFlyGranted = false
let batRewardBalloonFrames = 0
let finRewardBalloonFrames = 0
let alliedBats = []
let sharkKills = 0
let canSummonShark = false
let summonSharkCooldownFrames = 0
let sharkRewardBalloonFrames = 0
let alliedSharks = []
let antKills = 0
let canSummonAnt = false
let summonAntCooldownFrames = 0
let antRewardBalloonFrames = 0
let alliedAnts = []
let platforms = []
let collectibles = []
let worldObjects = []
let enemies = []
let enemyDeathParticles = []
let waterZones = []
const worldBounds = {
    minX: 0,
    maxX: Number.POSITIVE_INFINITY,
    topY: Number.NEGATIVE_INFINITY,
    bottomY: Number.POSITIVE_INFINITY
}

function syncWorldBounds() {
    worldBounds.minX = activeLevelConfig.worldBounds?.minX ?? 0
    worldBounds.maxX = activeLevelConfig.worldBounds?.maxX ?? Number.POSITIVE_INFINITY
    worldBounds.topY = activeLevelConfig.worldBounds?.topY ?? Number.NEGATIVE_INFINITY
    worldBounds.bottomY = activeLevelConfig.worldBounds?.bottomY ?? Number.POSITIVE_INFINITY
}

const startButton = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}

const startButtonB = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}

const startButtonC = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
}

const startButtonMystery = {
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

const endQuizOptionButtons = [
    {
        id: 'dog',
        label: 'Dog',
        isCorrect: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        buttonX: 0,
        buttonY: 0,
        buttonWidth: 0,
        buttonHeight: 0
    },
    {
        id: 'alligator',
        label: 'Alligator',
        isCorrect: true,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        buttonX: 0,
        buttonY: 0,
        buttonWidth: 0,
        buttonHeight: 0
    },
    {
        id: 'cow',
        label: 'Cow',
        isCorrect: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        buttonX: 0,
        buttonY: 0,
        buttonWidth: 0,
        buttonHeight: 0
    }
]

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

    const createdPlatforms = activeLevelConfig.platforms.map((configPlatform) => {
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

    // Only enforce a minimum gap for platforms that are already separated in config;
    // tiled ground platforms (overlapping in config) are left at their natural positions.
    const minGapBetweenPlatforms = 80
    for (let i = 1; i < createdPlatforms.length; i++) {
        const previous = createdPlatforms[i - 1]
        const current = createdPlatforms[i]
        const configGap = activeLevelConfig.platforms[i].x - (activeLevelConfig.platforms[i - 1].x + previous.width)
        if (configGap > 0) {
            const minX = previous.position.x + previous.width + minGapBetweenPlatforms
            if (current.position.x < minX) {
                current.position.x = minX
            }
        }
    }

    return createdPlatforms
}

function createCollectibles() {
    const createdCollectibles = activeLevelConfig.coins.map((configCoin) => ({
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

    const createdWorldObjects = activeLevelConfig.objects.map((configObject) => {
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
        shark: sharkEnemyImage,
        megalodon: megalodonEnemyImage,
        ant: antEnemyImage,
        elephant: elephantEnemyImage,
        kangaroo: kangarooEnemyImage
    }

    return activeLevelConfig.enemies.map((configEnemy) => {
        const image = imageByType[configEnemy.type]
        const scale = configEnemy.scale ?? 1
        let width = Math.round((configEnemy.width || image.width || 64) * scale)
        let height = Math.round((configEnemy.height || image.height || 64) * scale)

        if (configEnemy.type === 'megalodon') {
            // Keep boss visually massive but still readable on screen.
            const maxWidth = 900
            const maxHeight = 420
            const shrinkRatio = Math.min(maxWidth / width, maxHeight / height, 1)
            width = Math.round(width * shrinkRatio)
            height = Math.round(height * shrinkRatio)
        }

        const enemy = new GenericObject({
            x: configEnemy.x,
            y: configEnemy.y,
            width,
            height,
            image
        })

        enemy.type = configEnemy.type
        enemy.baseY = configEnemy.y
        if (configEnemy.type === 'shark' || configEnemy.type === 'megalodon') {
            enemy.hitboxWidth = Math.round(width * 0.8)
            enemy.hitboxHeight = Math.round(height * 0.8)
            enemy.motionStyle = configEnemy.motionStyle || 'swim'
            enemy.baseX = configEnemy.x
            enemy.swimBaseY = configEnemy.y
            enemy.horizontalSpeed = configEnemy.speed ?? 1.5
            enemy.verticalSpeed = configEnemy.speed ?? 1
            enemy.bobAmplitude = configEnemy.bobAmplitude ?? 12
            enemy.bobSpeed = configEnemy.bobSpeed ?? 0.045
            enemy.swimPhase = (configEnemy.x % 360) * (Math.PI / 180)
            if (configEnemy.type === 'shark') {
                enemy.biteAnimFrames = 0
                enemy.biteCooldownFrames = 0
            }
            if (configEnemy.type === 'megalodon') {
                enemy.maxHealth = configEnemy.health ?? 10
                enemy.health = configEnemy.health ?? 10
                enemy.damage = configEnemy.damage ?? 3
                enemy.attackCooldownFrames = 0
                enemy.attackIntervalFrames = configEnemy.attackCooldownFrames ?? 240
                enemy.stompCooldownFrames = 0
                enemy.chaseSpeed = configEnemy.chaseSpeed ?? 2.2
                enemy.summonIntervalFrames = configEnemy.summonIntervalFrames ?? 220
                enemy.summonCooldownFrames = Math.floor((configEnemy.summonIntervalFrames ?? 220) * 0.75)
                enemy.summonLimit = configEnemy.summonLimit ?? 4
                enemy.biteAnimFrames = 0
                enemy.biteCooldownFrames = 0
            }
        } else if (configEnemy.type === 'ant') {
            enemy.chaseSpeed = configEnemy.speed ?? 1.5
            enemy.groundY = configEnemy.y
            enemy.stompCooldownFrames = 0
            enemy.hitboxWidth = Math.round(width * 0.75)
            enemy.hitboxHeight = Math.round(height * 0.75)
        } else if (configEnemy.type === 'elephant') {
            enemy.groundY = configEnemy.y
            enemy.isMount = true
            enemy.mountSpeed = configEnemy.speed ?? 2.5
            enemy.hitboxWidth = width
            enemy.hitboxHeight = height
        } else if (configEnemy.type === 'kangaroo') {
            enemy.chaseSpeed = configEnemy.speed ?? 2
            enemy.patrolSpeed = configEnemy.patrolSpeed ?? 1.2
            enemy.groundY = configEnemy.y
            enemy.stompCooldownFrames = 0
            enemy.hitboxWidth = Math.round(width * 0.75)
            enemy.hitboxHeight = Math.round(height * 0.75)
            enemy.animFrame = 0
            enemy.animTick = 0
            enemy.patrolCenter = configEnemy.patrolCenter ?? configEnemy.x
            enemy.patrolRange = configEnemy.patrolRange ?? 150
            enemy.chaseRange = configEnemy.chaseRange ?? 350
            enemy.isChasing = false
        } else {
            enemy.verticalSpeed = configEnemy.speed ?? 1
        }
        enemy.range = configEnemy.range ?? 60
        enemy.direction = -1
        return enemy
    })
}

function summonSharkFromMegalodon(boss) {
    const aliveSummonedSharks = enemies.filter((enemy) => enemy.type === 'shark' && enemy.isSummoned).length
    if (aliveSummonedSharks >= (boss.summonLimit ?? 4)) {
        return
    }

    const summonScale = 0.2
    const width = Math.round((sharkEnemyImage.width || 64) * summonScale)
    const height = Math.round((sharkEnemyImage.height || 64) * summonScale)
    const summonOnRight = boss.direction > 0
    const spawnX = summonOnRight
        ? boss.position.x + boss.width + 14
        : boss.position.x - width - 14
    const spawnY = boss.position.y + boss.height * 0.42

    const summonedShark = new GenericObject({
        x: spawnX,
        y: spawnY,
        width,
        height,
        image: sharkEnemyImage
    })

    summonedShark.type = 'shark'
    summonedShark.isSummoned = true
    summonedShark.followPlayer = true
    summonedShark.chaseSpeed = 2.8
    summonedShark.verticalChaseSpeed = 1.8
    summonedShark.hitboxWidth = Math.round(width * 0.8)
    summonedShark.hitboxHeight = Math.round(height * 0.8)
    summonedShark.motionStyle = 'bat'
    summonedShark.baseX = spawnX
    summonedShark.baseY = spawnY
    summonedShark.swimBaseY = spawnY
    summonedShark.horizontalSpeed = 1.3
    summonedShark.verticalSpeed = 1.1
    summonedShark.bobAmplitude = 12
    summonedShark.bobSpeed = 0.045
    summonedShark.swimPhase = (spawnX % 360) * (Math.PI / 180)
    summonedShark.range = 70
    summonedShark.direction = summonOnRight ? 1 : -1
    summonedShark.biteAnimFrames = 0
    summonedShark.biteCooldownFrames = 0

    enemies.push(summonedShark)
}

function updateSharkBiteState(enemy) {
    if ((enemy.biteCooldownFrames ?? 0) > 0) {
        enemy.biteCooldownFrames -= 1
    }

    if ((enemy.biteAnimFrames ?? 0) > 0) {
        enemy.biteAnimFrames -= 1
    }

    const enemyCenterX = enemy.position.x + enemy.width / 2
    const enemyCenterY = enemy.position.y + enemy.height / 2
    const playerCenterX = player.position.x + player.hitboxWidth / 2
    const playerCenterY = player.position.y + player.hitboxHeight / 2
    const distance = Math.hypot(playerCenterX - enemyCenterX, playerCenterY - enemyCenterY)

    if (distance <= 240 && (enemy.biteCooldownFrames ?? 0) <= 0) {
        enemy.biteAnimFrames = 18
        enemy.biteCooldownFrames = 42
    }
}

function updateMegalodonBiteState(enemy) {
    const biteSpriteFrames = Math.max(1, megalodonBiteFrameImages.length)
    const megalodonBiteFrames = biteSpriteFrames * 4

    if ((enemy.biteCooldownFrames ?? 0) > 0) {
        enemy.biteCooldownFrames -= 1
    }
    if ((enemy.biteAnimFrames ?? 0) > 0) {
        enemy.biteAnimFrames -= 1
    }

    const enemyCenterX = enemy.position.x + enemy.width / 2
    const enemyCenterY = enemy.position.y + enemy.height / 2
    const playerCenterX = player.position.x + player.hitboxWidth / 2
    const playerCenterY = player.position.y + player.hitboxHeight / 2
    const distance = Math.hypot(playerCenterX - enemyCenterX, playerCenterY - enemyCenterY)

    if (distance <= 400 && (enemy.biteCooldownFrames ?? 0) <= 0 && (enemy.biteAnimFrames ?? 0) <= 0) {
        enemy.biteAnimFrames = megalodonBiteFrames
        enemy.biteAnimTotalFrames = megalodonBiteFrames
        enemy.biteCooldownFrames = Math.max(enemy.attackIntervalFrames ?? 240, megalodonBiteFrames + 20)
    }
}

function drawMegalodonWithBite(enemy) {
    const biteFrames = enemy.biteAnimFrames ?? 0
    const totalBiteFrames = enemy.biteAnimTotalFrames ?? Math.max(1, megalodonBiteFrameImages.length) * 8
    // Megalodon sprite faces LEFT by default, so flip when facing right (direction > 0)
    const shouldFlip = (enemy.direction ?? 1) > 0

    let imageToDraw = megalodonEnemyImage

    if (biteFrames <= 0) {
        imageToDraw = megalodonEnemyImage
    } else {
        // Force full bite playback frame-by-frame to avoid GIF freeze on canvas.
        const biteSpriteFrames = Math.max(1, megalodonBiteFrameImages.length)
        const elapsedFrames = Math.max(0, totalBiteFrames - biteFrames)
        const framesPerSprite = Math.max(1, Math.floor(totalBiteFrames / biteSpriteFrames))
        const frameIndex = Math.min(biteSpriteFrames - 1, Math.floor(elapsedFrames / framesPerSprite))
        imageToDraw = megalodonBiteFrameImages[frameIndex] || megalodonEnemyImage
    }

    c.save()
    if (shouldFlip) {
        c.scale(-1, 1)
        c.drawImage(imageToDraw, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height)
    } else {
        c.drawImage(imageToDraw, enemy.position.x, enemy.position.y, enemy.width, enemy.height)
    }
    c.restore()
}

function drawSharkWithBite(enemy) {
    const biteFrames = enemy.biteAnimFrames ?? 0
    if (biteFrames <= 0) {
        // No bite — draw with direction flip
        const shouldFlip = (enemy.direction ?? 1) < 0
        c.save()
        if (shouldFlip) {
            c.scale(-1, 1)
            c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height)
        } else {
            c.drawImage(enemy.image, enemy.position.x, enemy.position.y, enemy.width, enemy.height)
        }
        c.restore()
        return
    }

    const frameProgress = 18 - biteFrames
    const chomp = Math.abs(Math.sin(frameProgress * 0.9)) * 0.22
    const drawWidth = enemy.width * (1 + chomp)
    const drawHeight = enemy.height * (1 - chomp * 0.12)
    const direction = enemy.direction >= 0 ? 1 : -1
    const lunge = chomp * 18 * direction
    const drawX = enemy.position.x - (drawWidth - enemy.width) / 2 + lunge
    const drawY = enemy.position.y + (enemy.height - drawHeight) / 2

    c.save()
    if (enemy.direction < 0) {
        c.scale(-1, 1)
        c.drawImage(enemy.image, -(drawX + drawWidth), drawY, drawWidth, drawHeight)
    } else {
        c.drawImage(enemy.image, drawX, drawY, drawWidth, drawHeight)
    }
    c.restore()
}

function drawKangarooAnimated(enemy) {
    // Use the stable transparent sprite so kangaroo is always visible.
    const frame = enemy.image || kangarooEnemyImage
    c.save()
    if (enemy.direction < 0) {
        c.scale(-1, 1)
        c.drawImage(frame, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height)
    } else {
        c.drawImage(frame, enemy.position.x, enemy.position.y, enemy.width, enemy.height)
    }
    c.restore()
}

function teleportToChest() {
    const chestObject = worldObjects.find((wo) => wo.type === 'chest' && !wo.collected)
    if (!chestObject) return
    scrollOffset = 0
    scrollOffsetY = 0
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

function handleEnemyDefeat(enemyEntity) {
    if (!enemyEntity) {
        return
    }

    if (enemyEntity.type === 'shark') {
        // Shark rewards are permanent: first fin gives +20% swim speed,
        // each extra fin adds another +10%.
        const hadNoFins = fins === 0
        fins += 1
        if (hadNoFins) {
            finRewardBalloonFrames = 360
        }
    }

    if (enemyEntity.type === 'bat' && activeLevelConfig === levelConfig && !canSummonBat) {
        levelABatKills += 1
        if (levelABatKills >= 2) {
            canSummonBat = true
            batRewardBalloonFrames = 360
        }
    }

    if ((enemyEntity.type === 'shark' || enemyEntity.type === 'megalodon') &&
        (activeLevelConfig === levelConfig || activeLevelConfig === levelConfigB) &&
        !canSummonShark) {
        sharkKills += 1
        if (sharkKills >= 3) {
            canSummonShark = true
            sharkRewardBalloonFrames = 360
        }
    }

    if (enemyEntity.type === 'ant' && !canSummonAnt) {
        antKills += 1
        if (antKills >= 20) {
            canSummonAnt = true
            antRewardBalloonFrames = 360
        }
    }

    // On Level B, once all megalodon and sharks are dead, teleport player to the chest.
    if (activeLevelConfig !== levelConfig && (enemyEntity.type === 'megalodon' || enemyEntity.type === 'shark')) {
        const remaining = enemies.filter((e) => e !== enemyEntity && (e.type === 'megalodon' || e.type === 'shark'))
        if (remaining.length === 0) {
            teleportToChest()
        }
    }
}

function drawBatRewardBalloon() {
    const boxWidth = Math.min(620, canvas.width - 40)
    const boxHeight = 110
    const boxX = canvas.width / 2 - boxWidth / 2
    const boxY = hudBarHeight + 18

    c.save()
    c.fillStyle = 'rgba(245, 254, 255, 0.97)'
    c.strokeStyle = '#2d92a3'
    c.lineWidth = 3
    c.beginPath()
    c.roundRect(boxX, boxY, boxWidth, boxHeight, 12)
    c.fill()
    c.stroke()

    // Balloon pointer
    c.beginPath()
    c.moveTo(boxX + 86, boxY + boxHeight)
    c.lineTo(boxX + 124, boxY + boxHeight)
    c.lineTo(boxX + 98, boxY + boxHeight + 20)
    c.closePath()
    c.fill()
    c.stroke()

    c.textAlign = 'left'
    c.textBaseline = 'top'
    c.fillStyle = '#124f61'
    c.font = `700 24px "${buttonFontFamily}"`
    c.fillText('Quest complete! Bat power unlocked', boxX + 18, boxY + 14)

    c.fillStyle = '#17323f'
    c.font = `500 18px "${bodyFontFamily}"`
    c.fillText('Press D to summon an ally bat. First summon each level gives 10s flight.', boxX + 18, boxY + 52)
    c.restore()
}

function drawSharkRewardBalloon() {
    const boxWidth = Math.min(620, canvas.width - 40)
    const boxHeight = 110
    const boxX = canvas.width / 2 - boxWidth / 2
    const boxY = hudBarHeight + 254

    c.save()
    c.fillStyle = 'rgba(236, 244, 255, 0.97)'
    c.strokeStyle = '#2d5fa3'
    c.lineWidth = 3
    c.beginPath()
    c.roundRect(boxX, boxY, boxWidth, boxHeight, 12)
    c.fill()
    c.stroke()

    c.beginPath()
    c.moveTo(boxX + 86, boxY + boxHeight)
    c.lineTo(boxX + 124, boxY + boxHeight)
    c.lineTo(boxX + 98, boxY + boxHeight + 20)
    c.closePath()
    c.fill()
    c.stroke()

    c.textAlign = 'left'
    c.textBaseline = 'top'
    c.fillStyle = '#12294f'
    c.font = `700 24px "${buttonFontFamily}"`
    c.fillText('Quest complete! Shark power unlocked', boxX + 18, boxY + 14)

    c.fillStyle = '#17323f'
    c.font = `500 18px "${bodyFontFamily}"`
    c.fillText('Press D to summon an ally shark that attacks enemies.', boxX + 18, boxY + 52)
    c.restore()
}

function drawAntRewardBalloon() {
    const boxWidth = Math.min(620, canvas.width - 40)
    const boxHeight = 110
    const boxX = canvas.width / 2 - boxWidth / 2
    const boxY = hudBarHeight + 340

    c.save()
    c.fillStyle = 'rgba(245, 255, 237, 0.97)'
    c.strokeStyle = '#4f8f2e'
    c.lineWidth = 3
    c.beginPath()
    c.roundRect(boxX, boxY, boxWidth, boxHeight, 12)
    c.fill()
    c.stroke()

    c.beginPath()
    c.moveTo(boxX + 86, boxY + boxHeight)
    c.lineTo(boxX + 124, boxY + boxHeight)
    c.lineTo(boxX + 98, boxY + boxHeight + 20)
    c.closePath()
    c.fill()
    c.stroke()

    c.textAlign = 'left'
    c.textBaseline = 'top'
    c.fillStyle = '#1f4a13'
    c.font = `700 24px "${buttonFontFamily}"`
    c.fillText('Quest complete! Ant helper unlocked', boxX + 18, boxY + 14)

    c.fillStyle = '#17323f'
    c.font = `500 18px "${bodyFontFamily}"`
    c.fillText('Press D to summon an ally ant that fights enemies.', boxX + 18, boxY + 52)
    c.restore()
}

function drawFinRewardBalloon() {
    const boxWidth = Math.min(600, canvas.width - 50)
    const boxHeight = 104
    const boxX = canvas.width / 2 - boxWidth / 2
    const boxY = hudBarHeight + 136

    c.save()
    c.fillStyle = 'rgba(236, 251, 255, 0.97)'
    c.strokeStyle = '#2e6f88'
    c.lineWidth = 3
    c.beginPath()
    c.roundRect(boxX, boxY, boxWidth, boxHeight, 12)
    c.fill()
    c.stroke()

    c.beginPath()
    c.moveTo(boxX + boxWidth - 132, boxY)
    c.lineTo(boxX + boxWidth - 96, boxY)
    c.lineTo(boxX + boxWidth - 114, boxY - 18)
    c.closePath()
    c.fill()
    c.stroke()

    c.textAlign = 'left'
    c.textBaseline = 'top'
    c.fillStyle = '#124f61'
    c.font = `700 24px "${buttonFontFamily}"`
    c.fillText('Fin unlocked!', boxX + 18, boxY + 14)

    c.fillStyle = '#17323f'
    c.font = `500 18px "${bodyFontFamily}"`
    c.fillText('Killing sharks gives you a fin and makes you swim faster.', boxX + 18, boxY + 50)
    c.restore()
}

function shootSoccerBall() {
    if (shootCooldownFrames > 0) {
        return
    }

    const size = 20
    const direction = player.facingRight ? 1 : -1
    soccerBalls.push({
        position: {
            x: player.position.x + player.hitboxWidth / 2 - size / 2,
            y: player.position.y + player.hitboxHeight / 2 - size / 2
        },
        width: size,
        height: size,
        vx: direction * 14,
        vy: -1.4,
        life: 160
    })

    // 5 seconds at ~60 FPS.
    shootCooldownFrames = 300
}

function summonFriendlyBat() {
    if (!canSummonBat || summonBatCooldownFrames > 0) {
        return
    }

    alliedBats.push({
        position: {
            x: player.position.x - 52,
            y: player.position.y - 28
        },
        width: 64,
        height: 40,
        vx: 0,
        vy: 0,
        life: 900,
        health: 3,
        attackCooldownFrames: 0,
        damageCooldownFrames: 0
    })

    if (!batFlyGranted) {
        flyAbilityFrames = 600
        batFlyGranted = true
    }

    summonBatCooldownFrames = 360
}

function updateFriendlyBats() {
    if (summonBatCooldownFrames > 0) {
        summonBatCooldownFrames -= 1
    }

    alliedBats = alliedBats.filter((ally) => ally.life > 0 && ally.health > 0)

    alliedBats.forEach((ally) => {
        ally.life -= 1
        if (ally.attackCooldownFrames > 0) {
            ally.attackCooldownFrames -= 1
        }
        if (ally.damageCooldownFrames > 0) {
            ally.damageCooldownFrames -= 1
        }

        let closestEnemy = null
        let closestDistance = Number.POSITIVE_INFINITY

        enemies.forEach((enemy) => {
            const dx = (enemy.position.x + enemy.width / 2) - (ally.position.x + ally.width / 2)
            const dy = (enemy.position.y + enemy.height / 2) - (ally.position.y + ally.height / 2)
            const dist = Math.hypot(dx, dy)
            if (dist < closestDistance) {
                closestDistance = dist
                closestEnemy = enemy
            }
        })

        let targetX = player.position.x - 48
        let targetY = player.position.y - 36

        if (closestEnemy && closestDistance < 520) {
            targetX = closestEnemy.position.x + closestEnemy.width / 2 - ally.width / 2
            targetY = closestEnemy.position.y + closestEnemy.height / 2 - ally.height / 2
        }

        const moveDx = targetX - ally.position.x
        const moveDy = targetY - ally.position.y
        ally.vx = Math.sign(moveDx) * Math.min(Math.abs(moveDx), 5.6)
        ally.vy = Math.sign(moveDy) * Math.min(Math.abs(moveDy), 3.8)
        ally.position.x += ally.vx
        ally.position.y += ally.vy

        if (closestEnemy && ally.attackCooldownFrames <= 0 && isOverlapping(ally, closestEnemy)) {
            if (closestEnemy.type === 'megalodon') {
                closestEnemy.health = Math.max(0, (closestEnemy.health ?? closestEnemy.maxHealth ?? 10) - 0.5)
                if (closestEnemy.health <= 0) {
                    closestEnemy.health = 0
                    const deadIndex = enemies.indexOf(closestEnemy)
                    if (deadIndex > -1) {
                        enemies.splice(deadIndex, 1)
                    }
                    handleEnemyDefeat(closestEnemy)
                    spawnEnemyDeathExplosion(closestEnemy)
                }
            } else {
                closestEnemy.health = (closestEnemy.health ?? 1) - 0.5
                if (closestEnemy.health <= 0) {
                    const deadIndex = enemies.indexOf(closestEnemy)
                    if (deadIndex > -1) {
                        enemies.splice(deadIndex, 1)
                    }
                    handleEnemyDefeat(closestEnemy)
                    spawnEnemyDeathExplosion(closestEnemy)
                }
            }

            ally.attackCooldownFrames = 120
        }

        // Allied bat takes damage from enemy contact
        if (ally.damageCooldownFrames <= 0) {
            enemies.forEach((enemy) => {
                if (ally.health > 0 && isOverlapping(ally, enemy)) {
                    ally.health -= 1
                    ally.damageCooldownFrames = 90
                }
            })
        }

        c.save()
        c.globalAlpha = 0.95
        c.drawImage(batEnemyImage, ally.position.x, ally.position.y, ally.width, ally.height)
        c.restore()
    })
}

function isEntityInWater(entity, widthOverride, heightOverride) {
    const entityWidth = widthOverride ?? entity.width
    const entityHeight = heightOverride ?? entity.height
    const px = entity.position.x + entityWidth / 2

    return waterZones.some((zone) => {
        return px > zone.x && px < zone.x + zone.width &&
            (entity.position.y + entityHeight) > zone.y &&
            entity.position.y < zone.y + zone.height
    })
}

function summonFriendlyShark() {
    if (!canSummonShark || summonSharkCooldownFrames > 0) {
        return
    }

    // Sharks can only be summoned while the player is in water.
    if (!isEntityInWater(player, player.hitboxWidth, player.hitboxHeight)) {
        return
    }

    alliedSharks.push({
        position: {
            x: player.position.x - 80,
            y: player.position.y
        },
        width: 80,
        height: 44,
        vx: 0,
        vy: 0,
        life: 900,
        health: 4,
        attackCooldownFrames: 0,
        damageCooldownFrames: 0
    })

    summonSharkCooldownFrames = 360
}

function updateAlliedSharks() {
    if (summonSharkCooldownFrames > 0) {
        summonSharkCooldownFrames -= 1
    }

    alliedSharks = alliedSharks.filter((ally) => ally.life > 0 && ally.health > 0)

    alliedSharks.forEach((ally) => {
        // Ally shark dies immediately when leaving water.
        if (!isEntityInWater(ally)) {
            ally.life = 0
            ally.health = 0
            return
        }

        ally.life -= 1
        if (ally.attackCooldownFrames > 0) ally.attackCooldownFrames -= 1
        if (ally.damageCooldownFrames > 0) ally.damageCooldownFrames -= 1

        let closestEnemy = null
        let closestDistance = Number.POSITIVE_INFINITY
        enemies.forEach((enemy) => {
            const dx = (enemy.position.x + enemy.width / 2) - (ally.position.x + ally.width / 2)
            const dy = (enemy.position.y + enemy.height / 2) - (ally.position.y + ally.height / 2)
            const dist = Math.hypot(dx, dy)
            if (dist < closestDistance) {
                closestDistance = dist
                closestEnemy = enemy
            }
        })

        let targetX = player.position.x - 80
        let targetY = player.position.y
        if (closestEnemy && closestDistance < 520) {
            targetX = closestEnemy.position.x + closestEnemy.width / 2 - ally.width / 2
            targetY = closestEnemy.position.y + closestEnemy.height / 2 - ally.height / 2
        }

        const moveDx = targetX - ally.position.x
        const moveDy = targetY - ally.position.y
        ally.vx = Math.sign(moveDx) * Math.min(Math.abs(moveDx), 6)
        ally.vy = Math.sign(moveDy) * Math.min(Math.abs(moveDy), 4)
        ally.position.x += ally.vx
        ally.position.y += ally.vy

        if (closestEnemy && ally.attackCooldownFrames <= 0 && isOverlapping(ally, closestEnemy)) {
            if (closestEnemy.type === 'megalodon') {
                closestEnemy.health = Math.max(0, (closestEnemy.health ?? closestEnemy.maxHealth ?? 10) - 0.5)
                if (closestEnemy.health <= 0) {
                    const deadIndex = enemies.indexOf(closestEnemy)
                    if (deadIndex > -1) enemies.splice(deadIndex, 1)
                    handleEnemyDefeat(closestEnemy)
                    spawnEnemyDeathExplosion(closestEnemy)
                }
            } else if (closestEnemy.type !== 'elephant') {
                closestEnemy.health = (closestEnemy.health ?? 1) - 1
                if (closestEnemy.health <= 0) {
                    const deadIndex = enemies.indexOf(closestEnemy)
                    if (deadIndex > -1) enemies.splice(deadIndex, 1)
                    handleEnemyDefeat(closestEnemy)
                    spawnEnemyDeathExplosion(closestEnemy)
                }
            }
            ally.attackCooldownFrames = 100
        }

        if (ally.damageCooldownFrames <= 0) {
            enemies.forEach((enemy) => {
                if (ally.health > 0 && isOverlapping(ally, enemy)) {
                    ally.health -= 1
                    ally.damageCooldownFrames = 90
                }
            })
        }

        c.save()
        c.globalAlpha = 0.95
        if (ally.vx < 0) {
            c.scale(-1, 1)
            c.drawImage(sharkEnemyImage, -(ally.position.x + ally.width), ally.position.y, ally.width, ally.height)
        } else {
            c.drawImage(sharkEnemyImage, ally.position.x, ally.position.y, ally.width, ally.height)
        }
        c.restore()
    })
}

function summonFriendlyAnt() {
    if (!canSummonAnt || summonAntCooldownFrames > 0) {
        return
    }

    const antWidth = 52
    const antHeight = 34
    const groundY = player.position.y + player.hitboxHeight - antHeight

    alliedAnts.push({
        position: {
            x: player.position.x - 24,
            y: groundY
        },
        width: antWidth,
        height: antHeight,
        groundY,
        vx: 0,
        life: 900,
        health: 3,
        attackCooldownFrames: 0,
        damageCooldownFrames: 0
    })

    summonAntCooldownFrames = 360
}

function updateFriendlyAnts() {
    if (summonAntCooldownFrames > 0) {
        summonAntCooldownFrames -= 1
    }

    alliedAnts = alliedAnts.filter((ally) => ally.life > 0 && ally.health > 0)

    alliedAnts.forEach((ally) => {
        ally.life -= 1
        if (ally.attackCooldownFrames > 0) ally.attackCooldownFrames -= 1
        if (ally.damageCooldownFrames > 0) ally.damageCooldownFrames -= 1

        let closestEnemy = null
        let closestDistance = Number.POSITIVE_INFINITY

        enemies.forEach((enemy) => {
            if (enemy.type === 'elephant') {
                return
            }
            const dx = (enemy.position.x + enemy.width / 2) - (ally.position.x + ally.width / 2)
            const dy = (enemy.position.y + enemy.height / 2) - (ally.position.y + ally.height / 2)
            const dist = Math.hypot(dx, dy)
            if (dist < closestDistance) {
                closestDistance = dist
                closestEnemy = enemy
            }
        })

        const targetX = closestEnemy
            ? closestEnemy.position.x + closestEnemy.width / 2 - ally.width / 2
            : player.position.x - 24

        const moveDx = targetX - ally.position.x
        ally.vx = Math.sign(moveDx) * Math.min(Math.abs(moveDx), 4.2)
        ally.position.x += ally.vx
        ally.position.y = ally.groundY

        if (closestEnemy && ally.attackCooldownFrames <= 0 && isOverlapping(ally, closestEnemy)) {
            if (closestEnemy.type === 'megalodon') {
                closestEnemy.health = Math.max(0, (closestEnemy.health ?? closestEnemy.maxHealth ?? 10) - 0.5)
                if (closestEnemy.health <= 0) {
                    const deadIndex = enemies.indexOf(closestEnemy)
                    if (deadIndex > -1) enemies.splice(deadIndex, 1)
                    handleEnemyDefeat(closestEnemy)
                    spawnEnemyDeathExplosion(closestEnemy)
                }
            } else {
                closestEnemy.health = (closestEnemy.health ?? 1) - 1
                if (closestEnemy.health <= 0) {
                    const deadIndex = enemies.indexOf(closestEnemy)
                    if (deadIndex > -1) enemies.splice(deadIndex, 1)
                    handleEnemyDefeat(closestEnemy)
                    spawnEnemyDeathExplosion(closestEnemy)
                }
            }
            ally.attackCooldownFrames = 100
        }

        if (ally.damageCooldownFrames <= 0) {
            enemies.forEach((enemy) => {
                if (enemy.type !== 'elephant' && ally.health > 0 && isOverlapping(ally, enemy)) {
                    ally.health -= 1
                    ally.damageCooldownFrames = 90
                }
            })
        }

        c.save()
        c.globalAlpha = 0.95
        if (ally.vx < 0) {
            c.scale(-1, 1)
            c.drawImage(antEnemyImage, -(ally.position.x + ally.width), ally.position.y, ally.width, ally.height)
        } else {
            c.drawImage(antEnemyImage, ally.position.x, ally.position.y, ally.width, ally.height)
        }
        c.restore()
    })
}

function updateSoccerBalls() {
    soccerBalls = soccerBalls.filter((ball) => ball.life > 0)

    soccerBalls.forEach((ball) => {
        ball.position.x += ball.vx
        ball.position.y += ball.vy
        ball.vy += 0.08
        ball.life -= 1

        if (
            ball.position.x + ball.width < worldBounds.minX ||
            ball.position.x > worldBounds.maxX ||
            ball.position.y > worldBounds.bottomY ||
            ball.position.y + ball.height < worldBounds.topY
        ) {
            ball.life = 0
            return
        }

        for (let i = enemies.length - 1; i >= 0; i--) {
            const enemy = enemies[i]
            if (!isOverlapping(ball, enemy)) {
                continue
            }

            if (enemy.type === 'megalodon') {
                enemy.health = Math.max(0, (enemy.health ?? enemy.maxHealth ?? 10) - 1)
                if (enemy.health === 0) {
                    enemies.splice(i, 1)
                    handleEnemyDefeat(enemy)
                    spawnEnemyDeathExplosion(enemy)
                }
            } else {
                enemies.splice(i, 1)
                handleEnemyDefeat(enemy)
                spawnEnemyDeathExplosion(enemy)
            }

            ball.life = 0
            break
        }
    })

    soccerBalls.forEach((ball) => {
        c.save()
        c.fillStyle = '#ffffff'
        c.beginPath()
        c.arc(ball.position.x + ball.width / 2, ball.position.y + ball.height / 2, ball.width / 2, 0, Math.PI * 2)
        c.fill()

        c.strokeStyle = '#1d1d1d'
        c.lineWidth = 2
        c.beginPath()
        c.arc(ball.position.x + ball.width / 2, ball.position.y + ball.height / 2, ball.width * 0.22, 0, Math.PI * 2)
        c.stroke()
        c.restore()
    })
}

function createWaterZones() {
    return (activeLevelConfig.waterZones || []).map((z) => ({ ...z }))
}

function drawDesertGround() {
    c.save()
    const groundY = 450 // matches levelConfigC platform/ground Y
    const sandDark = '#c8964a'
    const sandMid = '#e0b86e'
    const sandLight = '#f5d38a'

    // Base sandy ground strip
    c.fillStyle = sandDark
    c.fillRect(0, groundY, canvas.width, canvas.height - groundY)

    // Dune waves — scroll with camera so they feel like part of the world
    const spacing = 320
    const duneCount = Math.ceil(canvas.width / spacing) + 3
    const offset = scrollOffset % spacing

    for (let i = 0; i < duneCount; i++) {
        const screenCx = i * spacing - offset
        const r = 160 + (i % 3) * 30

        c.fillStyle = sandMid
        c.beginPath()
        c.ellipse(screenCx, groundY + 10, r, 80, 0, Math.PI, Math.PI * 2)
        c.fill()

        c.fillStyle = sandLight
        c.beginPath()
        c.ellipse(screenCx, groundY + 2, r * 0.55, 22, 0, Math.PI, Math.PI * 2)
        c.fill()
    }

    c.restore()
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

function drawDriveByRider(x, y, dir) {
    c.save()
    c.translate(x, y)
    if (dir < 0) {
        c.scale(-1, 1)
        c.translate(-130, 0)
    }
    // Big front wheel
    c.fillStyle = '#1a1a1a'
    c.beginPath()
    c.arc(30, 52, 48, 0, Math.PI * 2)
    c.fill()
    c.strokeStyle = '#444'
    c.lineWidth = 5
    c.stroke()
    c.strokeStyle = '#e0e0e0'
    c.lineWidth = 10
    c.beginPath()
    c.arc(30, 52, 38, 0, Math.PI * 2)
    c.stroke()
    c.strokeStyle = '#555'
    c.lineWidth = 2
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
        c.beginPath()
        c.moveTo(30, 52)
        c.lineTo(30 + Math.cos(a) * 36, 52 + Math.sin(a) * 36)
        c.stroke()
    }
    // Back wheel
    c.fillStyle = '#1a1a1a'
    c.beginPath()
    c.arc(118, 62, 21, 0, Math.PI * 2)
    c.fill()
    c.strokeStyle = '#444'
    c.lineWidth = 3
    c.stroke()
    c.strokeStyle = '#e0e0e0'
    c.lineWidth = 6
    c.beginPath()
    c.arc(118, 62, 14, 0, Math.PI * 2)
    c.stroke()
    // Blue frame
    c.strokeStyle = '#1565c0'
    c.lineWidth = 9
    c.lineCap = 'round'
    c.lineJoin = 'round'
    c.beginPath()
    c.moveTo(30, 52)
    c.lineTo(68, 16)
    c.lineTo(118, 48)
    c.lineTo(118, 62)
    c.stroke()
    c.beginPath()
    c.moveTo(68, 16)
    c.lineTo(60, -10)
    c.stroke()
    c.strokeStyle = '#90caf9'
    c.lineWidth = 7
    c.beginPath()
    c.moveTo(46, -10)
    c.lineTo(74, -10)
    c.stroke()
    c.fillStyle = '#0d47a1'
    c.fillRect(54, -13, 22, 6)
    // Legs
    c.strokeStyle = '#4a5c30'
    c.lineWidth = 9
    c.lineCap = 'round'
    c.beginPath()
    c.moveTo(68, 5)
    c.lineTo(50, 30)
    c.lineTo(30, 52)
    c.stroke()
    c.beginPath()
    c.moveTo(68, 5)
    c.lineTo(85, 28)
    c.lineTo(110, 58)
    c.stroke()
    // Shoes
    c.fillStyle = '#2a1a0a'
    c.beginPath()
    c.ellipse(30, 54, 10, 6, 0.2, 0, Math.PI * 2)
    c.fill()
    c.fillStyle = '#1565c0'
    c.beginPath()
    c.ellipse(110, 61, 9, 5, 0.2, 0, Math.PI * 2)
    c.fill()
    // Body (black hoodie)
    c.fillStyle = '#111'
    c.beginPath()
    c.ellipse(72, -5, 22, 24, -0.15, 0, Math.PI * 2)
    c.fill()
    // Blue flame logo
    c.fillStyle = '#29b6f6'
    c.beginPath()
    c.moveTo(68, -2)
    c.lineTo(72, -16)
    c.lineTo(74, -6)
    c.lineTo(76, -18)
    c.lineTo(78, -2)
    c.closePath()
    c.fill()
    // Arms
    c.strokeStyle = '#111'
    c.lineWidth = 8
    c.lineCap = 'round'
    c.beginPath()
    c.moveTo(66, -14)
    c.lineTo(55, -8)
    c.stroke()
    c.beginPath()
    c.moveTo(74, -14)
    c.lineTo(92, -30)
    c.stroke()
    // Hands
    c.fillStyle = '#6b3d1e'
    c.beginPath()
    c.arc(55, -8, 6, 0, Math.PI * 2)
    c.fill()
    c.beginPath()
    c.arc(92, -30, 6, 0, Math.PI * 2)
    c.fill()
    // Head
    c.fillStyle = '#6b3d1e'
    c.beginPath()
    c.arc(78, -32, 14, 0, Math.PI * 2)
    c.fill()
    // Afro
    c.fillStyle = '#0d0d0d'
    c.beginPath()
    c.arc(78, -41, 15, 0, Math.PI * 2)
    c.fill()
    c.beginPath()
    c.arc(66, -36, 9, 0, Math.PI * 2)
    c.fill()
    c.beginPath()
    c.arc(90, -37, 9, 0, Math.PI * 2)
    c.fill()
    // Bandana
    c.fillStyle = '#1565c0'
    c.fillRect(65, -32, 28, 11)
    c.fillStyle = '#b3e5fc'
    for (let i = 0; i < 4; i++) {
        c.beginPath()
        c.arc(68 + i * 7, -27, 2, 0, Math.PI * 2)
        c.fill()
    }
    // Eyes
    c.fillStyle = '#fff'
    c.fillRect(68, -42, 7, 5)
    c.fillRect(80, -42, 7, 5)
    c.fillStyle = '#0d0d0d'
    c.fillRect(70, -42, 4, 4)
    c.fillRect(82, -42, 4, 4)
    c.restore()
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
    // Megalodon only takes stomp damage on the head area.
    const thresholdByEnemy = {
        megalodon: 0.2,
        shark: 0.6
    }
    const threshold = thresholdByEnemy[enemyEntity.type] ?? 0.45
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
    const deltaX = player.position.x - centerX
    // Y scrolling is disabled — flat level, camera only follows horizontally.
    const deltaY = 0

    if (deltaX === 0) {
        return
    }

    player.position.x = centerX
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
    const avatarSize = Math.min(180, canvas.width * 0.16, canvas.height * 0.24)
    const titleGap = 42
    const subtitleGap = 62
    const buttonGap = 44

    const blockHeight = avatarSize + titleGap + subtitleGap + buttonGap + 72
    const blockTop = canvas.height / 2 - blockHeight / 2
    const avatarY = blockTop
    const titleY = avatarY + avatarSize + titleGap
    const subtitleY = titleY + subtitleGap

    const btnW = 72
    const btnH = 72
    const btnGapBetween = 24

    // Calculate button positions for up to 4 buttons
    const totalButtonsWidth = btnW * 4 + btnGapBetween * 3
    const startXForButtons = canvas.width / 2 - totalButtonsWidth / 2

    startButton.width = btnW
    startButton.height = btnH
    startButton.x = startXForButtons
    startButton.y = subtitleY + buttonGap

    startButtonB.width = btnW
    startButtonB.height = btnH
    startButtonB.x = startXForButtons + btnW + btnGapBetween
    startButtonB.y = subtitleY + buttonGap

    startButtonC.width = btnW
    startButtonC.height = btnH
    startButtonC.x = startXForButtons + (btnW + btnGapBetween) * 2
    startButtonC.y = subtitleY + buttonGap

    startButtonMystery.width = btnW
    startButtonMystery.height = btnH
    startButtonMystery.x = startXForButtons + (btnW + btnGapBetween) * 3
    startButtonMystery.y = subtitleY + buttonGap

    c.save()
    c.fillStyle = '#455f88'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.drawImage(lucasImage, canvas.width / 2 - avatarSize / 2, avatarY, avatarSize, avatarSize)

    c.fillStyle = '#ffffff'
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.font = `700 54px "${titleFontFamily}"`
    c.fillText('Find the Letter', canvas.width / 2, titleY)

    c.font = `400 34px "${bodyLightFontFamily}"`
    c.fillText('Starring Lucas Grao and more', canvas.width / 2, subtitleY)

    drawMenuButton({
        rect: startButton,
        label: 'A',
        backgroundColor: '#56a551',
        borderColor: '#458742',
        textColor: '#ffffff'
    })

    if (levelACompleted) {
        drawMenuButton({
            rect: startButtonB,
            label: 'B',
            backgroundColor: '#3a7abf',
            borderColor: '#2a5f9e',
            textColor: '#ffffff'
        })
    } else {
        // Locked B button
        c.save()
        c.fillStyle = '#5a5a7a'
        c.strokeStyle = '#44445a'
        c.lineWidth = 2
        c.beginPath()
        c.roundRect(startButtonB.x, startButtonB.y, startButtonB.width, startButtonB.height, 8)
        c.fill()
        c.stroke()
        c.fillStyle = '#9090b0'
        c.textAlign = 'center'
        c.textBaseline = 'middle'
        c.font = `700 32px "${buttonFontFamily}"`
        c.fillText('B', startButtonB.x + startButtonB.width / 2, startButtonB.y + startButtonB.height / 2 + 2)
        // Lock icon
        c.font = `700 18px "${bodyFontFamily}"`
        c.fillText('🔒', startButtonB.x + startButtonB.width / 2, startButtonB.y + startButtonB.height - 14)
        c.restore()
    }

    if (levelBCompleted) {
        drawMenuButton({
            rect: startButtonC,
            label: 'C',
            backgroundColor: '#e67e22',
            borderColor: '#d45604',
            textColor: '#ffffff'
        })
    } else {
        // Locked C button
        c.save()
        c.fillStyle = '#5a5a7a'
        c.strokeStyle = '#44445a'
        c.lineWidth = 2
        c.beginPath()
        c.roundRect(startButtonC.x, startButtonC.y, startButtonC.width, startButtonC.height, 8)
        c.fill()
        c.stroke()
        c.fillStyle = '#9090b0'
        c.textAlign = 'center'
        c.textBaseline = 'middle'
        c.font = `700 32px "${buttonFontFamily}"`
        c.fillText('C', startButtonC.x + startButtonC.width / 2, startButtonC.y + startButtonC.height / 2 + 2)
        // Lock icon
        c.font = `700 18px "${bodyFontFamily}"`
        c.fillText('🔒', startButtonC.x + startButtonC.width / 2, startButtonC.y + startButtonC.height - 14)
        c.restore()
    }

    drawMenuButton({
        rect: startButtonMystery,
        label: '?',
        backgroundColor: '#6a0dad',
        borderColor: '#4b0080',
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
    const finX = 96
    const coinX = 196
    const coinsX = coinX + iconSize + 10
    const questX = coinX + 138

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

    c.fillStyle = '#9be2ff'
    c.font = `700 18px "${buttonFontFamily}"`
    c.fillText(`FIN ${fins}`, finX, textY)

    if (hasKey) {
        c.drawImage(keyImage, pauseButton.x - 44, 15, iconSize, iconSize)
    }

    if (canSummonBat) {
        c.fillStyle = '#9be2ff'
        c.font = `700 16px "${buttonFontFamily}"`
        const batText = summonBatCooldownFrames > 0 ? Math.ceil(summonBatCooldownFrames / 60) + 's' : 'READY'
        const flyText = batFlyGranted ? (flyAbilityFrames > 0 ? ` FLY:${Math.ceil(flyAbilityFrames / 60)}s` : '') : ' FLY:1×'
        c.fillText(`BAT: ${batText}${flyText}`, questX, textY)
    } else if (activeLevelConfig === levelConfig) {
        c.fillStyle = '#9be2ff'
        c.font = `700 16px "${buttonFontFamily}"`
        c.fillText(`BAT QUEST ${Math.min(levelABatKills, 2)}/2`, questX, textY)
    }

    if (canSummonShark) {
        c.fillStyle = '#7fd8ff'
        c.font = `700 16px "${buttonFontFamily}"`
        const sharkText = summonSharkCooldownFrames > 0 ? Math.ceil(summonSharkCooldownFrames / 60) + 's' : 'READY'
        c.fillText(`SHARK: ${sharkText}`, questX, textY + 22)
    } else if (activeLevelConfig === levelConfig || activeLevelConfig === levelConfigB) {
        c.fillStyle = '#7fd8ff'
        c.font = `700 16px "${buttonFontFamily}"`
        c.fillText(`SHARK QUEST ${Math.min(sharkKills, 3)}/3`, questX, textY + 22)
    }

    if (canSummonAnt) {
        c.fillStyle = '#b5f294'
        c.font = `700 16px "${buttonFontFamily}"`
        const antText = summonAntCooldownFrames > 0 ? Math.ceil(summonAntCooldownFrames / 60) + 's' : 'READY'
        c.fillText(`ANT: ${antText}`, questX, textY + 44)
    } else if (activeLevelConfig === levelConfigC) {
        c.fillStyle = '#b5f294'
        c.font = `700 16px "${buttonFontFamily}"`
        c.fillText(`ANT QUEST ${Math.min(antKills, 20)}/20`, questX, textY + 44)
    }

    const megalodonBoss = enemies.find((enemy) => enemy.type === 'megalodon')
    if (megalodonBoss && megalodonBoss.maxHealth > 0) {
        const bossBarWidth = Math.min(360, canvas.width * 0.36)
        const bossBarHeight = 18
        const bossBarX = canvas.width / 2 - bossBarWidth / 2
        const bossBarY = 20
        const healthRatio = Math.max(0, Math.min(1, megalodonBoss.health / megalodonBoss.maxHealth))

        c.fillStyle = 'rgba(30, 18, 18, 0.9)'
        c.fillRect(bossBarX, bossBarY, bossBarWidth, bossBarHeight)

        c.fillStyle = '#df3d3d'
        c.fillRect(bossBarX + 2, bossBarY + 2, (bossBarWidth - 4) * healthRatio, bossBarHeight - 4)

        c.strokeStyle = '#f7c271'
        c.lineWidth = 2
        c.strokeRect(bossBarX, bossBarY, bossBarWidth, bossBarHeight)

        c.fillStyle = '#ffffff'
        c.textAlign = 'center'
        c.textBaseline = 'middle'
        c.font = `700 18px "${buttonFontFamily}"`
        c.fillText(`MEGALODON ${megalodonBoss.health}/${megalodonBoss.maxHealth}`, canvas.width / 2, bossBarY + bossBarHeight / 2)
    }

    drawPauseButton()
    c.restore()
}

function getEndQuizImage(optionId) {
    switch (optionId) {
        case 'dog': return dogFriendImage
        case 'alligator': return crocodileFriendImage
        case 'cow': return cowFriendImage
        case 'lion': return null
        case 'bear': return bearFriendImage
        case 'giraffe': return null
        case 'camel': return null
        case 'tiger': return null
        default: return null
    }
}

function resetEndQuizState() {
    endQuizResult = 'idle'
    endQuizMessage = 'Choose the animal that starts with the letter A.'
    endQuizSelectedId = ''
    endQuizAnimFrames = 0
}

function handleEndQuizSelection(option) {
    if (!option) {
        return
    }

    endQuizSelectedId = option.id

    if (option.isCorrect) {
        endQuizResult = 'correct'
        endQuizAnimFrames = 90

        // Mark appropriate level as completed based on active level
        if (activeLevelConfig === levelConfig) {
            endQuizMessage = 'Correct! Alligator starts with the letter A. Great job!'
            levelACompleted = true
        } else if (activeLevelConfig === levelConfigB) {
            endQuizMessage = 'Correct! Bear starts with the letter B. Excellent work!'
            levelBCompleted = true
        } else if (activeLevelConfig === levelConfigC) {
            endQuizMessage = 'Correct! Camel starts with the letter C. Outstanding!'
            levelCCompleted = true
        } else if (activeLevelConfig === levelConfigMystery) {
            endQuizMessage = 'Correct! You survived the mystery level!'
        }

        setTimeout(() => {
            gameEnded = false
            showStartMenu = true
            init()
        }, 2000)
    } else {
        endQuizResult = 'wrong'

        // Show appropriate hint based on active level
        if (activeLevelConfig === levelConfig) {
            endQuizMessage = `Not this one. ${option.label} does not start with A. Try again!`
        } else if (activeLevelConfig === levelConfigB) {
            endQuizMessage = `Not this one. ${option.label} does not start with B. Try again!`
        } else if (activeLevelConfig === levelConfigC) {
            endQuizMessage = `Not this one. ${option.label} does not start with C. Try again!`
        }

        endQuizAnimFrames = 30
    }
}

function updateQuizOptionsForLevel() {
    // Update quiz options and messages based on active level
    if (activeLevelConfig === levelConfig) {
        // Level A - Alligator
        endQuizOptionButtons[0].label = 'Dog'
        endQuizOptionButtons[0].id = 'dog'
        endQuizOptionButtons[0].isCorrect = false

        endQuizOptionButtons[1].label = 'Alligator'
        endQuizOptionButtons[1].id = 'alligator'
        endQuizOptionButtons[1].isCorrect = true

        endQuizOptionButtons[2].label = 'Cow'
        endQuizOptionButtons[2].id = 'cow'
        endQuizOptionButtons[2].isCorrect = false
    } else if (activeLevelConfig === levelConfigB) {
        // Level B - Bear
        endQuizOptionButtons[0].label = 'Lion'
        endQuizOptionButtons[0].id = 'lion'
        endQuizOptionButtons[0].isCorrect = false

        endQuizOptionButtons[1].label = 'Bear'
        endQuizOptionButtons[1].id = 'bear'
        endQuizOptionButtons[1].isCorrect = true

        endQuizOptionButtons[2].label = 'Giraffe'
        endQuizOptionButtons[2].id = 'giraffe'
        endQuizOptionButtons[2].isCorrect = false
    } else if (activeLevelConfig === levelConfigC) {
        // Level C - Camel
        endQuizOptionButtons[0].label = 'Lion'
        endQuizOptionButtons[0].id = 'lion'
        endQuizOptionButtons[0].isCorrect = false

        endQuizOptionButtons[1].label = 'Camel'
        endQuizOptionButtons[1].id = 'camel'
        endQuizOptionButtons[1].isCorrect = true

        endQuizOptionButtons[2].label = 'Tiger'
        endQuizOptionButtons[2].id = 'tiger'
        endQuizOptionButtons[2].isCorrect = false
    } else if (activeLevelConfig === levelConfigMystery) {
        // Mystery Level - Dolphin
        endQuizOptionButtons[0].label = 'Dolphin'
        endQuizOptionButtons[0].id = 'dolphin'
        endQuizOptionButtons[0].isCorrect = true

        endQuizOptionButtons[1].label = 'Eagle'
        endQuizOptionButtons[1].id = 'eagle'
        endQuizOptionButtons[1].isCorrect = false

        endQuizOptionButtons[2].label = 'Fox'
        endQuizOptionButtons[2].id = 'fox'
        endQuizOptionButtons[2].isCorrect = false
    }
}

function isPointInsideQuizOptionButton(mouseX, mouseY, option) {
    return isPointInsideRect(mouseX, mouseY, {
        x: option.buttonX,
        y: option.buttonY,
        width: option.buttonWidth,
        height: option.buttonHeight
    })
}

function drawGameEndOverlay() {
    const centerX = canvas.width / 2
    const stripY = 310
    const stripHeight = 106
    const optionWidth = Math.min(220, Math.max(160, canvas.width * 0.18))
    const optionHeight = 156
    const optionGap = Math.max(26, canvas.width * 0.02)
    const totalOptionsWidth = optionWidth * endQuizOptionButtons.length + optionGap * (endQuizOptionButtons.length - 1)
    const firstOptionX = centerX - totalOptionsWidth / 2

    gameOverPlayAgainButton.width = 250
    gameOverPlayAgainButton.height = 78
    gameOverMenuButton.width = 250
    gameOverMenuButton.height = 78

    const buttonGap = 90
    const buttonsTotal = gameOverPlayAgainButton.width + buttonGap + gameOverMenuButton.width
    const buttonsStartX = centerX - buttonsTotal / 2
    const buttonsY = canvas.height - 112

    gameOverPlayAgainButton.x = buttonsStartX
    gameOverPlayAgainButton.y = buttonsY
    gameOverMenuButton.x = buttonsStartX + gameOverPlayAgainButton.width + buttonGap
    gameOverMenuButton.y = buttonsY

    c.save()
    c.fillStyle = '#0f6492'
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.textAlign = 'center'
    c.textBaseline = 'middle'

    const badgeSize = 124
    c.drawImage(firstBadgeImage, centerX - 360, 62, badgeSize, badgeSize)

    c.fillStyle = '#ffffff'
    c.font = `700 68px "${titleFontFamily}"`
    c.fillText('Congratulations', centerX + 26, 92)

    c.font = `500 62px "${bodyFontFamily}"`
    c.fillStyle = '#f2d548'
    const currentLetter = activeLevelConfig === levelConfig ? 'A' : (activeLevelConfig === levelConfigB ? 'B' : (activeLevelConfig === levelConfigC ? 'C' : '?'))
    c.fillText(`You found the letter: ${currentLetter}`, centerX + 52, 162)

    c.font = `400 46px "${bodyLightFontFamily}"`
    c.fillStyle = '#bfd7e5'
    c.fillText('Now tell me, which animal starts with this letter?', centerX, 230)

    c.fillStyle = 'rgba(235, 235, 235, 0.82)'
    c.beginPath()
    c.roundRect(Math.max(44, centerX - 520), stripY, Math.min(1040, canvas.width - 88), stripHeight, 8)
    c.fill()

    endQuizOptionButtons.forEach((option, index) => {
        const isSelected = endQuizSelectedId === option.id
        const x = firstOptionX + index * (optionWidth + optionGap)
        const y = stripY - 48
        option.x = x
        option.y = y
        option.width = optionWidth
        option.height = optionHeight

        let offsetX = 0
        let scale = 1

        if (isSelected && endQuizResult === 'wrong' && endQuizAnimFrames > 0) {
            const shakeProgress = (30 - endQuizAnimFrames) / 30
            offsetX = Math.sin(shakeProgress * Math.PI * 9) * 10 * (1 - shakeProgress)
        }

        if (isSelected && endQuizResult === 'correct' && endQuizAnimFrames > 0) {
            scale = 1 + Math.sin((90 - endQuizAnimFrames) * 0.42) * 0.05
        }

        const drawX = x + offsetX
        const drawW = optionWidth * scale
        const drawH = optionHeight * scale
        const drawY = y - (drawH - optionHeight) / 2
        const drawXScaled = drawX - (drawW - optionWidth) / 2

        c.fillStyle = isSelected
            ? (endQuizResult === 'correct' ? '#dff5cd' : '#ffd8d8')
            : 'rgba(255, 255, 255, 0.52)'
        c.strokeStyle = isSelected
            ? (endQuizResult === 'correct' ? '#53a84d' : '#d24d4d')
            : '#8ea6b5'
        c.lineWidth = 4
        c.beginPath()
        c.roundRect(drawXScaled, drawY, drawW, drawH, 16)
        c.fill()
        c.stroke()

        const image = getEndQuizImage(option.id)
        if (image) {
            const imageSize = Math.min(124, drawW * 0.7)
            c.drawImage(
                image,
                drawXScaled + drawW / 2 - imageSize / 2,
                drawY + 8,
                imageSize,
                imageSize
            )
        }

        const answerButtonWidth = Math.max(124, drawW * 0.68)
        const answerButtonHeight = 46
        option.buttonWidth = answerButtonWidth
        option.buttonHeight = answerButtonHeight
        option.buttonX = drawXScaled + drawW / 2 - answerButtonWidth / 2
        option.buttonY = drawY + drawH - answerButtonHeight - 10

        const buttonStyle = isSelected
            ? (endQuizResult === 'correct'
                ? { bg: '#58b953', border: '#3e8f3a' }
                : { bg: '#d65c5c', border: '#ab3f3f' })
            : { bg: '#44a8b8', border: '#2b90a1' }

        drawMenuButton({
            rect: {
                x: option.buttonX,
                y: option.buttonY,
                width: option.buttonWidth,
                height: option.buttonHeight
            },
            label: option.label,
            backgroundColor: buttonStyle.bg,
            borderColor: buttonStyle.border,
            textColor: '#ffffff'
        })

        if (isSelected && endQuizResult === 'wrong' && endQuizAnimFrames > 0) {
            c.strokeStyle = '#d02f2f'
            c.lineWidth = 8
            c.lineCap = 'round'
            const cx = drawXScaled + drawW - 20
            const cy = drawY + 20
            c.beginPath()
            c.moveTo(cx - 12, cy - 12)
            c.lineTo(cx + 12, cy + 12)
            c.moveTo(cx + 12, cy - 12)
            c.lineTo(cx - 12, cy + 12)
            c.stroke()
        }
    })

    if (endQuizResult === 'correct' && endQuizAnimFrames > 0) {
        const sparkleCount = 18
        for (let i = 0; i < sparkleCount; i++) {
            const angle = (i / sparkleCount) * Math.PI * 2 + (90 - endQuizAnimFrames) * 0.09
            const radius = 70 + Math.sin((90 - endQuizAnimFrames) * 0.16 + i) * 18
            const x = centerX + Math.cos(angle) * radius
            const y = 146 + Math.sin(angle) * (radius * 0.6)
            c.fillStyle = i % 2 === 0 ? '#ffe07a' : '#7ef29a'
            c.beginPath()
            c.arc(x, y, 6, 0, Math.PI * 2)
            c.fill()
        }
    }

    const messageColor = endQuizResult === 'correct'
        ? '#7ef29a'
        : (endQuizResult === 'wrong' ? '#ff9f9f' : '#d6e5ee')

    c.fillStyle = messageColor
    c.font = `600 34px "${bodyFontFamily}"`
    c.fillText(endQuizMessage, centerX, 500)

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

    if (endQuizAnimFrames > 0) {
        endQuizAnimFrames -= 1
    }

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
        ['SPACE / W', 'Jump / Swim / Fly'],
        ['SPACE / W again', 'Glide (press again in the air)'],
        ['Q', 'Shoot soccer ball (5s cooldown)'],
        ['D', 'Summon bat (unlock after 2 bat kills in A)']
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
    syncWorldBounds()
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
    megalodonEnemyImage = createImage(megalodon1)
    antEnemyImage = createImage(antEnemy)
    elephantEnemyImage = createImage(elephantImg)
    sandImage = createImage(sand)
    dogFriendImage = createImage(dogFriend)
    cowFriendImage = createImage(cowFriend)
    crocodileFriendImage = createImage(crocodileFriend)
    bearFriendImage = createImage(bearFriend)
    firstBadgeImage = createImage(firstBadge)
    desertBackgroundImage = createImage(desertBackground)
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
    driveByFrames = 1800
    driveByRiders = []
    driveBySpawnFromLeft = true
    shootCooldownFrames = 0
    soccerBalls = []
    alliedBats = []
    summonBatCooldownFrames = 0
    batFlyGranted = false
    batRewardBalloonFrames = 0
    finRewardBalloonFrames = 0
    alliedSharks = []
    summonSharkCooldownFrames = 0
    sharkRewardBalloonFrames = 0
    alliedAnts = []
    summonAntCooldownFrames = 0
    antRewardBalloonFrames = 0
    showChestHint = false
    resetEndQuizState()
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
    driveByFrames = 1800
    driveByRiders = []
    driveBySpawnFromLeft = true
    shootCooldownFrames = 0
    soccerBalls = []
    alliedBats = []
    summonBatCooldownFrames = 0
    batRewardBalloonFrames = 0
    finRewardBalloonFrames = 0
    alliedSharks = []
    summonSharkCooldownFrames = 0
    sharkRewardBalloonFrames = 0
    alliedAnts = []
    summonAntCooldownFrames = 0
    antRewardBalloonFrames = 0
    showChestHint = false
    resetEndQuizState()
    platforms = createPlatforms()
    collectibles = createCollectibles()
    worldObjects = createWorldObjects()
    enemies = createEnemies()
    enemyDeathParticles = []
    waterZones = createWaterZones()
    backgroundObjects[0].position.x = levelOrigin.backgroundX
    backgroundObjects[0].image = activeLevelConfig === levelConfigC ? desertBackgroundImage : backgroundImage
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

    c.fillStyle = activeLevelConfig === levelConfigC ? '#e8c87a' : '#3aa2e8'
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

    if (shootCooldownFrames > 0) {
        shootCooldownFrames -= 1
    }

    const waterSpeedMultiplier = fins > 0
        ? 1.2 + Math.max(0, fins - 1) * 0.1
        : 1

    if (!player.isCrouching && keys.right.pressed && !keys.left.pressed) {
        player.velocity.x = player.inWater ? moveSpeed * waterSpeedMultiplier : moveSpeed
    } else if (!player.isCrouching && keys.left.pressed && !keys.right.pressed) {
        player.velocity.x = player.inWater ? -moveSpeed * waterSpeedMultiplier : -moveSpeed
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

    if (!activeLevelConfig.hidePlatforms) {
        platforms.forEach(p => {
            p.draw()
        })
    }

    if (activeLevelConfig === levelConfigC) {
        drawDesertGround()
    }

    worldObjects.forEach(worldObject => {
        if (!worldObject.collected) {
            worldObject.draw()
        }
    })

    enemies.forEach((enemy) => {
        if (enemy.type === 'megalodon') {
            if ((enemy.stompCooldownFrames ?? 0) > 0) {
                enemy.stompCooldownFrames -= 1
            }

            if ((enemy.attackCooldownFrames ?? 0) > 0) {
                enemy.attackCooldownFrames -= 1
            }

            updateMegalodonBiteState(enemy)

            enemy.summonCooldownFrames = (enemy.summonCooldownFrames ?? enemy.summonIntervalFrames ?? 220) - 1
            if (enemy.summonCooldownFrames <= 0) {
                summonSharkFromMegalodon(enemy)
                enemy.summonCooldownFrames = enemy.summonIntervalFrames ?? 220
            }

            const enemyCenterX = enemy.position.x + enemy.width / 2
            const playerCenterX = player.position.x + player.hitboxWidth / 2
            const dx = playerCenterX - enemyCenterX
            const stepX = Math.sign(dx) * Math.min(Math.abs(dx), enemy.chaseSpeed ?? 5.2)
            enemy.position.x += stepX
            enemy.direction = dx >= 0 ? 1 : -1

            const minBossX = worldBounds.minX
            const maxBossX = worldBounds.maxX - enemy.width
            if (enemy.position.x < minBossX) enemy.position.x = minBossX
            if (enemy.position.x > maxBossX) enemy.position.x = maxBossX

            // Keep boss inside water zones — clamp Y to the first water zone that covers it.
            const bossWaterZone = waterZones.find((zone) => {
                const cx = enemy.position.x + enemy.width / 2
                return cx >= zone.x && cx <= zone.x + zone.width
            })
            const minBossY = bossWaterZone ? bossWaterZone.y : hudBarHeight + 6
            const maxBossY = bossWaterZone ? (bossWaterZone.y + bossWaterZone.height - enemy.height) : (worldBounds.bottomY - enemy.height)
            const targetY = Math.max(minBossY, Math.min(maxBossY, player.position.y - enemy.height * 0.35))
            const dy = targetY - enemy.position.y
            const stepY = Math.sign(dy) * Math.min(Math.abs(dy), (enemy.verticalSpeed ?? 1) * 2.3)
            enemy.position.y = Math.max(minBossY, Math.min(maxBossY, enemy.position.y + stepY))

            drawMegalodonWithBite(enemy)
            return
        }

        if (enemy.type === 'shark') {
            updateSharkBiteState(enemy)

            if (enemy.followPlayer) {
                const enemyCenterX = enemy.position.x + enemy.width / 2
                const playerCenterX = player.position.x + player.hitboxWidth / 2
                const dx = playerCenterX - enemyCenterX
                const chaseStepX = Math.sign(dx) * Math.min(Math.abs(dx), enemy.chaseSpeed ?? 2.8)
                enemy.position.x += chaseStepX
                enemy.direction = dx >= 0 ? 1 : -1

                const targetY = Math.max(hudBarHeight + 10, player.position.y - enemy.height * 0.3)
                const dy = targetY - enemy.position.y
                const chaseStepY = Math.sign(dy) * Math.min(Math.abs(dy), enemy.verticalChaseSpeed ?? 1.8)
                enemy.position.y += chaseStepY

                const minX = worldBounds.minX
                const maxX = worldBounds.maxX - enemy.width
                if (enemy.position.x < minX) enemy.position.x = minX
                if (enemy.position.x > maxX) enemy.position.x = maxX

                drawSharkWithBite(enemy)
                return
            }

            if (enemy.motionStyle === 'bat') {
                enemy.position.y += enemy.verticalSpeed * enemy.direction

                if (enemy.position.y <= enemy.baseY - enemy.range) {
                    enemy.position.y = enemy.baseY - enemy.range
                    enemy.direction = 1
                } else if (enemy.position.y >= enemy.baseY + enemy.range) {
                    enemy.position.y = enemy.baseY + enemy.range
                    enemy.direction = -1
                }

                drawSharkWithBite(enemy)
                return
            }

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
            drawSharkWithBite(enemy)
        } else if (enemy.type === 'ant') {
            // Ants chase the player along the ground; can also climb the elephant
            if ((enemy.stompCooldownFrames ?? 0) > 0) {
                enemy.stompCooldownFrames -= 1
            }
            const playerCenterX = player.position.x + player.hitboxWidth / 2
            const antCenterX = enemy.position.x + enemy.width / 2
            const dx = playerCenterX - antCenterX
            const step = Math.sign(dx) * Math.min(Math.abs(dx), enemy.chaseSpeed ?? 1.5)
            enemy.position.x += step
            enemy.direction = dx >= 0 ? 1 : -1

            // If the elephant is between ant and player, climb up its side
            const elephantE = enemies.find((e) => e.type === 'elephant')
            if (elephantE) {
                const antRight = enemy.position.x + enemy.width
                const antLeft = enemy.position.x
                const elLeft = elephantE.position.x
                const elRight = elephantE.position.x + elephantE.width
                const onElephant = antRight > elLeft + elephantE.width * 0.1 && antLeft < elRight - elephantE.width * 0.1
                if (onElephant) {
                    // Climb up toward elephant top
                    const targetY = elephantE.position.y - enemy.height
                    if (enemy.position.y > targetY) {
                        enemy.position.y = Math.max(targetY, enemy.position.y - 2)
                    } else {
                        enemy.position.y = targetY
                    }
                } else {
                    enemy.position.y = enemy.groundY
                }
            } else {
                enemy.position.y = enemy.groundY
            }

            // Draw flipped when moving left
            c.save()
            if (enemy.direction < 0) {
                c.scale(-1, 1)
                c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height)
            } else {
                enemy.draw()
            }
            c.restore()
        } else if (enemy.type === 'elephant') {
            // Elephant is a mount — player rides on its back
            enemy.position.y = enemy.groundY
            if (player.ridingElephant) {
                // Jump off with UP key
                if (keys.up.pressed) {
                    player.ridingElephant = false
                    player.velocity.y = -18
                    player.onGround = false
                } else {
                    // Move elephant with player input
                    if (keys.right.pressed && !keys.left.pressed) {
                        enemy.position.x += enemy.mountSpeed
                        enemy.direction = 1
                    } else if (keys.left.pressed && !keys.right.pressed) {
                        enemy.position.x -= enemy.mountSpeed
                        enemy.direction = -1
                    }
                    // Clamp to world
                    enemy.position.x = Math.max(worldBounds.minX, Math.min(worldBounds.maxX - enemy.width, enemy.position.x))
                    // Seat player on top of elephant
                    player.position.x = enemy.position.x + enemy.width / 2 - player.hitboxWidth / 2
                    player.position.y = enemy.position.y - player.hitboxHeight
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.onGround = true
                }
            }
            // Draw flipped when facing left
            c.save()
            if (enemy.direction < 0) {
                c.scale(-1, 1)
                c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height)
            } else {
                enemy.draw()
            }
            c.restore()
        } else if (enemy.type === 'kangaroo') {
            // Patrol around chest; switch to chase when player gets close
            const playerCenterX = player.position.x + player.hitboxWidth / 2
            const kangarooCenterX = enemy.position.x + enemy.width / 2
            const distToPlayer = Math.abs(playerCenterX - kangarooCenterX)
            if (distToPlayer <= (enemy.chaseRange ?? 350)) {
                enemy.isChasing = true
            } else if (distToPlayer > (enemy.chaseRange ?? 350) * 1.5) {
                enemy.isChasing = false
            }
            if (enemy.isChasing) {
                const dx = playerCenterX - kangarooCenterX
                const step = Math.sign(dx) * Math.min(Math.abs(dx), enemy.chaseSpeed ?? 2)
                enemy.position.x += step
                enemy.direction = dx >= 0 ? 1 : -1
            } else {
                // Patrol back and forth around patrolCenter
                const patrolMin = (enemy.patrolCenter ?? enemy.position.x) - (enemy.patrolRange ?? 150)
                const patrolMax = (enemy.patrolCenter ?? enemy.position.x) + (enemy.patrolRange ?? 150)
                enemy.position.x += (enemy.patrolSpeed ?? 1.2) * enemy.direction
                if (enemy.position.x <= patrolMin) {
                    enemy.position.x = patrolMin
                    enemy.direction = 1
                } else if (enemy.position.x >= patrolMax - enemy.width) {
                    enemy.position.x = patrolMax - enemy.width
                    enemy.direction = -1
                }
            }
            enemy.position.x = Math.max(worldBounds.minX, Math.min(worldBounds.maxX - enemy.width, enemy.position.x))
            enemy.position.y = enemy.groundY
            drawKangarooAnimated(enemy)
        } else {
            enemy.position.y += enemy.verticalSpeed * enemy.direction

            if (enemy.position.y <= enemy.baseY - enemy.range) {
                enemy.position.y = enemy.baseY - enemy.range
                enemy.direction = 1
            } else if (enemy.position.y >= enemy.baseY + enemy.range) {
                enemy.position.y = enemy.baseY + enemy.range
                enemy.direction = -1
            }

            const facingRight = player.position.x + player.hitboxWidth / 2 >= enemy.position.x + enemy.width / 2
            c.save()
            if (!facingRight) {
                c.scale(-1, 1)
                c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height)
            } else {
                enemy.draw()
            }
            c.restore()
        }
    })

    updateFriendlyBats()

    updateAlliedSharks()

    updateFriendlyAnts()

    updateSoccerBalls()

    updateEnemyDeathEffects()

    collectibles.forEach(coinItem => {
        if (!coinItem.collected) {
            coinItem.sprite.draw()
        }
    })

    const wasInWater = !!player.inWater
    player.update(platforms)

    // Elephant mount detection — any touch mounts
    const elephantEnemy = enemies.find((e) => e.type === 'elephant')
    if (elephantEnemy && !player.ridingElephant && isOverlapping(player, elephantEnemy)) {
        player.ridingElephant = true
    } else if (!elephantEnemy) {
        player.ridingElephant = false
    }

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

    // Player no longer dies from leaving water

    centerCameraOnPlayer()

    if (portalCooldownFrames > 0) {
        portalCooldownFrames -= 1
    }

    if (enemyHitCooldownFrames > 0) {
        enemyHitCooldownFrames -= 1
    }

    const touchingEnemies = enemies.filter((enemy) => enemy.type !== 'elephant' && isOverlapping(player, enemy))
    let stompedEnemy = false
    let stompedEnemyType = null

    touchingEnemies.forEach((enemy) => {
        if (isStompOnEnemy(player, enemy)) {
            // Megalodon is a boss: it needs multiple head stomps before removal.
            if (enemy.type === 'megalodon') {
                if ((enemy.stompCooldownFrames ?? 0) <= 0) {
                    enemy.health = Math.max(0, (enemy.health ?? 10) - 1)
                    enemy.stompCooldownFrames = 300
                    if (enemy.health === 0) {
                        const enemyIndex = enemies.indexOf(enemy)
                        if (enemyIndex > -1) {
                            enemies.splice(enemyIndex, 1)
                        }
                        spawnEnemyDeathExplosion(enemy)
                        stompedEnemyType = enemy.type
                    }
                }
                stompedEnemy = true
                return
            }

            // Ant stomp: only kill if stompCooldown is 0
            if (enemy.type === 'ant') {
                if ((enemy.stompCooldownFrames ?? 0) <= 0) {
                    const enemyIndex = enemies.indexOf(enemy)
                    if (enemyIndex > -1) enemies.splice(enemyIndex, 1)
                    handleEnemyDefeat(enemy)
                    spawnEnemyDeathExplosion(enemy)
                    stompedEnemy = true
                    stompedEnemyType = enemy.type
                }
                return
            }

            // Elephant cannot be stomped (it's a mount)
            if (enemy.type === 'elephant') {
                return
            }

            // Standard stomp enemy - remove and play death effect.
            const enemyIndex = enemies.indexOf(enemy)
            if (enemyIndex > -1) {
                enemies.splice(enemyIndex, 1)
            }
            handleEnemyDefeat(enemy)
            spawnEnemyDeathExplosion(enemy)
            stompedEnemy = true
            stompedEnemyType = enemy.type
        }
    })

    if (stompedEnemy) {
        // Player bounces on stomp (0 damage)
        player.velocity.y = -10
        player.onGround = false
        // Grant fly only for bat stomps
        if (stompedEnemyType === 'bat') {
            flyAbilityFrames = Math.min(flyAbilityFrames + 300, 600)
        }
    } else if (enemyHitCooldownFrames === 0 && touchingEnemies.length > 0 && !player.isCrouching) {
        const strongestEnemy = touchingEnemies.find((enemy) =>
            enemy.type === 'megalodon' && (enemy.biteAnimFrames ?? 0) > 0
        )
        const hunterShark = touchingEnemies.find((enemy) => enemy.type === 'shark' && enemy.followPlayer)
        const canDamageNow = !!strongestEnemy || !!hunterShark || touchingEnemies.some((enemy) => enemy.type !== 'megalodon')

        if (!canDamageNow) {
            return
        }

        const damageAmount = strongestEnemy?.damage ?? 1
        // Only take damage if it's not a successful stomp
        lives = Math.max(0, lives - damageAmount)
        enemyHitCooldownFrames = 45

        if (strongestEnemy) {
            strongestEnemy.attackCooldownFrames = strongestEnemy.attackIntervalFrames ?? 240
        }

        // Launch the player away when hit; stronger launch from boss encounters.
        if (strongestEnemy) {
            player.velocity.y = -4
            player.velocity.x = player.position.x < strongestEnemy.position.x ? -16 : 16
        } else if (hunterShark) {
            player.velocity.y = -3
            player.velocity.x = player.position.x < hunterShark.position.x ? -12 : 12
        } else {
            player.velocity.y = -2
            player.velocity.x = player.position.x < touchingEnemies[0].position.x ? -7 : 7
        }

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
            const isMegalodonAlive = enemies.some((enemy) => enemy.type === 'megalodon')

            if (hasKey && isMegalodonAlive) {
                // Boss is still guarding the treasure.
                player.velocity.x = player.position.x < worldObject.position.x ? -3 : 3
                player.velocity.y = -4
                return
            }

            if (hasKey) {
                gameEnded = true
                gameEndMessage = 'Voce abriu o bau com sucesso!'
                resetEndQuizState()
                updateQuizOptionsForLevel()
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

    // Drive-by rider: spawns 2x per minute (every 1800 frames). Skip water-only levels.
    const isWaterOnlyLevel = (activeLevelConfig.waterZones?.length ?? 0) > 0 &&
        activeLevelConfig.waterZones.some(z => z.width > 2000)
    if (!isWaterOnlyLevel) {
        driveByFrames -= 1
        if (driveByFrames <= 0) {
            const groundY = activeLevelConfig.platforms?.[0]?.y ?? 450
            driveByRiders.push({
                x: driveBySpawnFromLeft ? -140 : canvas.width + 140,
                y: groundY - 100,
                dir: driveBySpawnFromLeft ? 1 : -1
            })
            driveBySpawnFromLeft = !driveBySpawnFromLeft
            driveByFrames = 1800
        }
        driveByRiders = driveByRiders.filter((rider) => {
            rider.x += rider.dir * 10
            drawDriveByRider(rider.x, rider.y, rider.dir)
            const riderHitbox = { position: { x: rider.x, y: rider.y - 50 }, width: 130, height: 150 }
            if (enemyHitCooldownFrames === 0 && isOverlapping(player, riderHitbox)) {
                lives = Math.max(0, lives - 1)
                enemyHitCooldownFrames = 45
                player.velocity.y = -3
                player.velocity.x = player.position.x < rider.x + 65 ? -8 : 8
                if (lives === 0) showGameOver = true
            }
            return rider.dir > 0 ? rider.x < canvas.width + 200 : rider.x > -200
        })
    }

    drawHud()

    if (batRewardBalloonFrames > 0) {
        drawBatRewardBalloon()
        batRewardBalloonFrames -= 1
    }

    if (finRewardBalloonFrames > 0) {
        drawFinRewardBalloon()
        finRewardBalloonFrames -= 1
    }

    if (sharkRewardBalloonFrames > 0) {
        drawSharkRewardBalloon()
        sharkRewardBalloonFrames -= 1
    }

    if (antRewardBalloonFrames > 0) {
        drawAntRewardBalloon()
        antRewardBalloonFrames -= 1
    }
}

animate()

addEventListener('keydown', ({ keyCode, code }) => {
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
        case 37: // ← Move left
        case 65: { // A
            keys.left.pressed = true
            break
        }
        case 39: // → Move right
        case 68: { // D
            keys.right.pressed = true
            break
        }
        case 40: // ↓
        case 83: // S
        case 67: { // C - Crouch
            keys.down.pressed = true
            break
        }
        case 32: // SPACE - Action (Jump / Fly / Swim)
        case 87: { // W
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
        case 81: { // Q - Shoot soccer ball
            shootSoccerBall()
            break
        }
    }

    if (code === 'KeyD' || keyCode === 68) {
        summonFriendlyBat()
        summonFriendlyShark()
        summonFriendlyAnt()
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
        case 37: // ← Move left
        case 65: { // A
            keys.left.pressed = false
            break
        }
        case 39: // → Move right
        case 68: { // D
            keys.right.pressed = false
            break
        }
        case 40: // ↓
        case 83: // S
        case 67: { // C - Crouch
            keys.down.pressed = false
            break
        }
        case 32: // SPACE - Action
        case 87: { // W
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
            activeLevelConfig = levelConfig
            syncWorldBounds()
            showStartMenu = false
            init()
        } else if (levelACompleted && isPointInsideRect(mouseX, mouseY, startButtonB)) {
            activeLevelConfig = levelConfigB
            syncWorldBounds()
            showStartMenu = false
            init()
        } else if (levelBCompleted && isPointInsideRect(mouseX, mouseY, startButtonC)) {
            activeLevelConfig = levelConfigC
            syncWorldBounds()
            showStartMenu = false
            init()
        } else if (isPointInsideRect(mouseX, mouseY, startButtonMystery)) {
            activeLevelConfig = levelConfigMystery
            syncWorldBounds()
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
        const clickedOption = endQuizOptionButtons.find((option) => isPointInsideQuizOptionButton(mouseX, mouseY, option))
        if (clickedOption) {
            handleEndQuizSelection(clickedOption)
            return
        }
        if (isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton)) {
            gameEnded = false
            init()
        } else if (isPointInsideRect(mouseX, mouseY, gameOverMenuButton)) {
            gameEnded = false
            showStartMenu = true
            init()
        }
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
        isPointer = isPointInsideRect(mouseX, mouseY, startButton) ||
            (levelACompleted && isPointInsideRect(mouseX, mouseY, startButtonB)) ||
            (levelBCompleted && isPointInsideRect(mouseX, mouseY, startButtonC)) ||
            (isPointInsideRect(mouseX, mouseY, startButtonMystery))
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
    } else if (gameEnded) {
        isPointer =
            isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton) ||
            isPointInsideRect(mouseX, mouseY, gameOverMenuButton) ||
            endQuizOptionButtons.some((option) => isPointInsideQuizOptionButton(mouseX, mouseY, option))
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