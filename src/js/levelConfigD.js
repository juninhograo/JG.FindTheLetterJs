const BLOCK_COUNT = 120
const BLOCK_WIDTH = 72
const GROUND_Y = 470

const platforms = Array.from({ length: BLOCK_COUNT }, (_, index) => ({
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
}))

const levelConfigD = {
    worldBounds: {
        minX: 0,
        maxX: BLOCK_COUNT * BLOCK_WIDTH,
        topY: 0,
        bottomY: GROUND_Y + 400
    },
    platforms,
    coins: [],
    objects: [
        { x: 3200, y: 26, type: 'key', width: 68, height: 68, scale: 0.6 },
        { x: 5600, y: 380, type: 'chest', width: 96, height: 96, scale: 0.65 }
    ],
    waterZones: [],
    enemies: [
        // 8 hooded walkers guarding key and chest area
        { x: 2600, y: 430, type: 'hoodie', scale: 1, speed: 1.3, patrolSpeed: 1.2, patrolCenter: 2700, patrolRange: 120, chaseRange: 400 },
        { x: 2900, y: 430, type: 'hoodie', scale: 1, speed: 1.4, patrolSpeed: 1.2, patrolCenter: 3000, patrolRange: 140, chaseRange: 380 },
        { x: 3300, y: 430, type: 'hoodie', scale: 1, speed: 1.5, patrolSpeed: 1.3, patrolCenter: 3400, patrolRange: 130, chaseRange: 420 },
        { x: 3700, y: 430, type: 'hoodie', scale: 1, speed: 1.4, patrolSpeed: 1.2, patrolCenter: 3800, patrolRange: 150, chaseRange: 400 },
        { x: 4400, y: 430, type: 'hoodie', scale: 1, speed: 1.6, patrolSpeed: 1.3, patrolCenter: 4500, patrolRange: 160, chaseRange: 450 },
        { x: 4900, y: 430, type: 'hoodie', scale: 1, speed: 1.5, patrolSpeed: 1.2, patrolCenter: 5000, patrolRange: 140, chaseRange: 400 },
        { x: 5300, y: 430, type: 'hoodie', scale: 1, speed: 1.6, patrolSpeed: 1.3, patrolCenter: 5450, patrolRange: 160, chaseRange: 450 },
        { x: 5750, y: 430, type: 'hoodie', scale: 1, speed: 1.4, patrolSpeed: 1.2, patrolCenter: 5800, patrolRange: 120, chaseRange: 380 }
    ]
}

export default levelConfigD
