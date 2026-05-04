const BLOCK_COUNT = 100
const BLOCK_WIDTH = 72
const GROUND_Y = 450

const platforms = Array.from({ length: BLOCK_COUNT }, (_, index) => ({
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
}))

const levelConfig = {
    worldBounds: {
        minX: 0,
        maxX: BLOCK_COUNT * BLOCK_WIDTH,
        topY: 0,
        bottomY: GROUND_Y + 400
    },
    platforms,
    coins: [],
    objects: [
        { x: 1450, y: 42, type: 'trampoline', width: 72, height: 34, scale: 1.12, bounce: 34 },
        { x: 2480, y: 26, type: 'key', width: 68, height: 68, scale: 0.6 },
        { x: 3440, y: 560, type: 'chest', width: 96, height: 96, scale: 0.65 }
    ],
    waterZones: [
        // U-shaped water section (left wall, bottom, right wall) with no ground holes.
        { x: 3280, y: 94, width: 120, height: 230 },
        { x: 3280, y: 244, width: 420, height: 80 },
        { x: 3580, y: 94, width: 120, height: 230 }
    ],
    enemies: [
        { x: 500, y: 400, type: 'bat', scale: 0.14, range: 70, speed: 1.0 },
        { x: 1100, y: 140, type: 'bat', scale: 0.14, range: 80, speed: 1.2 },
        { x: 1650, y: 400, type: 'bat', scale: 0.14, range: 70, speed: 1.3 },
        { x: 2200, y: 120, type: 'bat', scale: 0.14, range: 60, speed: 1.1 },
        { x: 2800, y: 100, type: 'bat', scale: 0.14, range: 75, speed: 1.4 },
        { x: 3360, y: 260, type: 'shark', scale: 0.12, range: 55, speed: 1.2, motionStyle: 'bat' },
        { x: 3360, y: 317, type: 'kangaroo', scale: 0.6, speed: 2.4, patrolSpeed: 1.4, patrolCenter: 3440, patrolRange: 140, chaseRange: 520 }
    ]
}

export default levelConfig
