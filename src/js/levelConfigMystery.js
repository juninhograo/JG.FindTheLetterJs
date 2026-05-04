const BLOCK_COUNT = 1800
const BLOCK_WIDTH = 72
const GROUND_Y = 520

const platforms = Array.from({ length: BLOCK_COUNT }, (_, index) => ({
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
}))

// Extra invisible wall platforms scattered around to block the player
const invisibleWalls = [
    // Walls blocking the path near the key and chest
    ...Array.from({ length: 8 }, (_, i) => ({ x: 2000, y: GROUND_Y - (i + 1) * 72, type: 'small', scale: 1 })),
    ...Array.from({ length: 8 }, (_, i) => ({ x: 3000, y: GROUND_Y - (i + 1) * 72, type: 'small', scale: 1 })),
    ...Array.from({ length: 8 }, (_, i) => ({ x: 1200, y: GROUND_Y - (i + 1) * 72, type: 'small', scale: 1 })),
    ...Array.from({ length: 8 }, (_, i) => ({ x: 4800, y: GROUND_Y - (i + 1) * 72, type: 'small', scale: 1 })),
    ...Array.from({ length: 8 }, (_, i) => ({ x: 6000, y: GROUND_Y - (i + 1) * 72, type: 'small', scale: 1 })),
    // Floating invisible floors to create mazes
    ...Array.from({ length: 20 }, (_, i) => ({ x: 2200 + i * 72, y: GROUND_Y - 216, type: 'small', scale: 1 })),
    ...Array.from({ length: 20 }, (_, i) => ({ x: 3500 + i * 72, y: GROUND_Y - 288, type: 'small', scale: 1 })),
]

const levelConfigMystery = {
    worldBounds: {
        minX: 0,
        maxX: BLOCK_COUNT * BLOCK_WIDTH,
        topY: Number.NEGATIVE_INFINITY,
        bottomY: GROUND_Y + 500
    },
    platforms: [...platforms, ...invisibleWalls],
    hidePlatforms: true,
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
            scale: 6,
            range: 120,
            // Player max speed = 9; 100x = 900
            speed: 900,
            motionStyle: 'bat',
            health: 10,
            damage: 3,
            chaseSpeed: 900,
            attackCooldownFrames: 240,
            summonIntervalFrames: 220,
            summonLimit: 4
        }
    ]
}

export default levelConfigMystery
