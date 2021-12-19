// Tile format
// grass = 0
// road = 1
// city = 2
// church = 3
// Not Avalible = 3


export default [
    {
        amount: 1,
        src: 'images/tiles/CastleCenter.png',

        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
        ],

    },
    {
        amount: 1,
        src: 'images/tiles/CastleCenterEntry.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 1, 2, 2],
            [2, 0, 1, 0, 2],
        ],
    },
    {
        amount: 1,
        src: 'images/tiles/CastleCenterSide.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 0, 2, 2],
            [2, 0, 0, 0, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleCenterSides.png',
        format: [
            [2, 0, 0, 0, 2],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleEdge.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 2],
            [0, 0, 0, 2, 2],
            [0, 0, 0, 2, 2],
            [0, 0, 0, 0, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleEdgeRoad.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 2],
            [1, 1, 1, 2, 2],
            [0, 0, 1, 2, 2],
            [0, 0, 1, 0, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleMini.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleSides.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 2, 2, 2, 0],
            [2, 2, 2, 2, 2],
        ]
    },

    {
        amount: 1,
        src: 'images/tiles/CastleSidesEdge.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 0],
            [2, 2, 0, 0, 0],
            [2, 2, 0, 0, 0],
            [2, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleSidesEdgeRoad.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 0, 0, 0, 0],
            [2, 0, 1, 1, 1],
            [2, 0, 1, 0, 0],
            [2, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleSidesQuad.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 0, 0, 0, 2],
            [2, 0, 0, 0, 2],
            [2, 0, 0, 0, 2],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleSidesRoad.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleTube.png',
        format: [
            [2, 0, 0, 0, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 0, 0, 0, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleTubeEntries.png',
        format: [
            [2, 0, 1, 0, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 0, 1, 0, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleTubeEntry.png',
        format: [
            [2, 0, 0, 0, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 0, 1, 0, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWall.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallCurveLeft.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallCurveRight.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallEntry.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallEntryLeft.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallEntryRight.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallJunction.png',
        format: [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 4, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/CastleWallRoad.png',
        startTile: true,
        format: [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/Monastery.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 3, 3, 3, 0],
            [0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/Monastery1.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 3, 3, 3, 0],
            [0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/MonasteryCastle.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/MonasteryCastle1.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/MonasteryCastle2.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/MonasteryCastle3.png',
        format: [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/MonasteryJunction.png',
        format: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 4, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/MonasteryRoad.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 4, 4, 4, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/Road.png',
        format: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/RoadCrossLarge.png',
        format: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/RoadCrossSmall.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/RoadCurve.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/RoadEnd.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/RoadJunctionLarge.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    },
    {
        amount: 1,
        src: 'images/tiles/RoadJunctionSmall.png',
        format: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 4, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ]
    }
]
