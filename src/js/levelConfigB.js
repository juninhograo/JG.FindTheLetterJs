const BLOCK_COUNT = 1800
const BLOCK_WIDTH = 72
const GROUND_Y = 520

const platforms = Array.from({ length: BLOCK_COUNT }, (_, index) => ({
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
}))

const levelConfigB = {
    worldBounds: {
        minX: 0,
        maxX: BLOCK_COUNT * BLOCK_WIDTH,
        topY: Number.NEGATIVE_INFINITY,
        bottomY: GROUND_Y + 500
    },
    platforms,
    coins: [],
    objects: [
        { x: 4200, y: 452, type: 'key', width: 68, height: 68, scale: 0.6 },
        { x: 5600, y: 452, type: 'chest', width: 96, height: 96, scale: 0.65 }
    ],
    waterZones: [
        { x: 0, y: 0, width: BLOCK_COUNT * BLOCK_WIDTH, height: GROUND_Y + 500 }
    ],
    enemies: [
        {
            x: 5350,
            y: 260,
            type: 'megalodon',
            // 50x the Level A shark scale (0.12 * 50 = 6).
            scale: 6,
            range: 120,
            speed: 1.8,
            motionStyle: 'bat',
            health: 10,
            damage: 3,
            chaseSpeed: 5.8,
            attackCooldownFrames: 240,
            summonIntervalFrames: 220,
            summonLimit: 4
        }
    ]
}

export default levelConfigB
