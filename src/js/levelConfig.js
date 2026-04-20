const W = 4400 // section width offset

function shift(items, dx) {
    return items.map(item => ({ ...item, x: item.x + dx }))
}

const basePlatforms = [
    { x: 0, y: 450, type: 'small', scale: 1 },
    { x: 350, y: 438, type: 'big', scale: 1.08 },
    { x: 780, y: 450, type: 'small', scale: 0.95 },
    { x: 1120, y: 428, type: 'big', scale: 1.2 },
    { x: 2260, y: 432, type: 'big', scale: 1.12 },
    { x: 2460, y: 450, type: 'small', scale: 1 },
    { x: 2840, y: 420, type: 'big', scale: 1.25 },
    { x: 3360, y: 450, type: 'small', scale: 0.92 },
    { x: 3710, y: 435, type: 'big', scale: 1.1 }
]

const baseCoins = [
    { x: 120, y: 380 },
    { x: 210, y: 340 },
    { x: 420, y: 355 },
    { x: 560, y: 330 },
    { x: 920, y: 375 },
    { x: 1030, y: 330 },
    { x: 1240, y: 348 },
    { x: 1490, y: 360 },
    { x: 1770, y: 375 },
    { x: 2130, y: 335 },
    { x: 2280, y: 300 },
    { x: 2580, y: 370 },
    { x: 2990, y: 315 },
    { x: 3230, y: 360 },
    { x: 3520, y: 380 }
]

const baseWaterZones = [
    { x: 980, y: 322, width: 720, height: 132, tier: 'top' },
    { x: 720, y: 454, width: 1140, height: 270, tier: 'deep' }
]

const baseEnemies = [
    { x: 1720, y: 310, type: 'bat', scale: 0.14, range: 70, speed: 1.2 },
    { x: 1280, y: 565, type: 'shark', scale: 0.12, range: 100, speed: 1.5 }
]

const baseSandObjects = [
    { x: 705, y: 404, type: 'sand', width: 220, height: 120, scale: 1 },
    { x: 940, y: 278, type: 'sand', width: 190, height: 105, scale: 1 },
    { x: 1750, y: 406, type: 'sand', width: 180, height: 110, scale: 1 }
]

// Objects per section — no key/chest in sections 1 and 2
const section1Objects = [
    { x: 1280, y: 402, type: 'trampoline', width: 72, height: 34, scale: 1.12, bounce: 34 },
    ...baseSandObjects,
    { x: 3050, y: 360, type: 'portal', scale: 0.3, pairId: 'portalS1' },
    { x: 3900, y: 360, type: 'portal', scale: 0.3, pairId: 'portalS1' }
]

const section2Objects = shift([
    { x: 1280, y: 402, type: 'trampoline', width: 72, height: 34, scale: 1.12, bounce: 34 },
    ...baseSandObjects,
    { x: 3050, y: 360, type: 'portal', scale: 0.3, pairId: 'portalS2' },
    { x: 3900, y: 360, type: 'portal', scale: 0.3, pairId: 'portalS2' }
], W)

const section3Objects = shift([
    { x: 1280, y: 402, type: 'trampoline', width: 72, height: 34, scale: 1.12, bounce: 34 },
    ...baseSandObjects,
    { x: 1455, y: 545, type: 'key', width: 68, height: 68, scale: 0.6 },
    { x: 2520, y: 376, type: 'chest', width: 96, height: 96, scale: 0.65 },
    { x: 3050, y: 360, type: 'portal', scale: 0.3, pairId: 'portalS3' },
    { x: 3900, y: 360, type: 'portal', scale: 0.3, pairId: 'portalS3' }
], W * 2)

const levelConfig = {
    platforms: [
        ...basePlatforms,
        ...shift(basePlatforms, W),
        ...shift(basePlatforms, W * 2)
    ],
    coins: [
        ...baseCoins,
        ...shift(baseCoins, W),
        ...shift(baseCoins, W * 2)
    ],
    objects: [
        ...section1Objects,
        ...section2Objects,
        ...section3Objects
    ],
    waterZones: [
        ...baseWaterZones,
        ...shift(baseWaterZones, W),
        ...shift(baseWaterZones, W * 2)
    ],
    enemies: [
        ...baseEnemies,
        ...shift(baseEnemies, W),
        ...shift(baseEnemies, W * 2)
    ]
}

export default levelConfig
