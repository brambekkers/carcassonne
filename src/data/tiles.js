// Tile format
// grass = 0
// road = 1
// city = 2
// church = 3
// Not Avalible = 3


export default [
    {
        name: 'Castle Center',
        "amount": 1,
        "src": "images/tiles/CastleCenter.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'city'
            }
        ]
    },
    {
        name: 'Castle Center Entry',
        "amount": 3,
        "src": "images/tiles/CastleCenterEntry.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 1, 2, 2],
            [2, 0, 1, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 1 },
                type: 'city'
            },
            {
                pos: { x: 1, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 3, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Center Side',
        "amount": 4,
        "src": "images/tiles/CastleCenterSide.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 0, 2, 2],
            [2, 0, 0, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 1 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Center Sides',
        "amount": 1,
        "src": "images/tiles/CastleCenterSides.png",
        "format": [
            [2, 0, 0, 0, 2],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 3 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Edge',
        "amount": 5,
        "src": "images/tiles/CastleEdge.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 2],
            [0, 0, 0, 2, 2],
            [0, 0, 0, 2, 2],
            [0, 0, 0, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 3, y: 1 },
                type: 'city'
            },
            {
                pos: { x: 1, y: 3 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Edge Road',
        "amount": 5,
        "src": "images/tiles/CastleEdgeRoad.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 2],
            [1, 1, 1, 0, 2],
            [0, 0, 1, 0, 2],
            [0, 0, 1, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 4, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 3, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Mini',
        "amount": 1,
        "src": "images/tiles/CastleMini.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 3, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 1 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Sides',
        "amount": 3,
        "src": "images/tiles/CastleSides.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 2, 2, 2, 0],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Sides Edge',
        "amount": 2,
        "src": "images/tiles/CastleSidesEdge.png",
        "format": [
            [4, 2, 2, 2, 2],
            [2, 0, 0, 0, 0],
            [2, 0, 0, 0, 0],
            [2, 0, 0, 0, 0],
            [2, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 3, y: 3 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Sides Edge Road',
        "amount": 1,
        "src": "images/tiles/CastleSidesEdgeRoad.png",
        "format": [
            [4, 2, 2, 2, 2],
            [2, 0, 0, 0, 0],
            [2, 0, 1, 1, 1],
            [2, 0, 1, 0, 0],
            [2, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 3 },
                type: 'city'
            },
            {
                pos: { x: 1, y: 2 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Sides Quad',
        "amount": 1,
        "src": "images/tiles/CastleSidesQuad.png",
        "format": [
            [4, 2, 2, 2, 4],
            [2, 0, 0, 0, 2],
            [2, 0, 0, 0, 2],
            [2, 0, 0, 0, 2],
            [4, 2, 2, 2, 4]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 2 },
                type: 'grass'
            },
        ]
    },
    {
        name: 'Castle Sides Road',
        "amount": 1,
        "src": "images/tiles/CastleSidesRoad.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'city'
            },
            {
                pos: { x: 4, y: 1 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 3 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Tube',
        "amount": 3,
        "src": "images/tiles/CastleTube.png",
        "format": [
            [2, 0, 0, 0, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 0, 0, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 0, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Tube Entries',
        "amount": 1,
        "src": "images/tiles/CastleTubeEntries.png",
        "format": [
            [2, 0, 1, 0, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 0, 1, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 0, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'road'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 1, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 1, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 3, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 3, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Tube Entry',
        "amount": 1,
        "src": "images/tiles/CastleTubeEntry.png",
        "format": [
            [2, 0, 0, 0, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 0, 1, 0, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 0, y: 2 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 1, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 3, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Wall',
        "amount": 5,
        "src": "images/tiles/CastleWall.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 3 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Wall Curve Left',
        "amount": 3,
        "src": "images/tiles/CastleWallCurveLeft.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 4, y: 3 },
                type: 'grass'
            },
            {
                pos: { x: 1, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Wall Curve Right',
        "amount": 3,
        "src": "images/tiles/CastleWallCurveRight.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 3 },
                type: 'grass'
            },
            {
                pos: { x: 3, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Wall Entry',
        "amount": 2,
        "src": "images/tiles/CastleWallEntry.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 3 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 3 },
                type: 'grass'
            },
        ]
    },
    {
        name: 'Castle Wall Entry Left',
        "amount": 2,
        "src": "images/tiles/CastleWallEntryLeft.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 1 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Wall Entry Right',
        "amount": 2,
        "src": "images/tiles/CastleWallEntryRight.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 2, 2, 2, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 1 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            }
        ]
    },
    {
        name: 'Castle Wall Junction',
        "amount": 3,
        "src": "images/tiles/CastleWallJunction.png",
        "format": [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 4, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 1, y: 1 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Castle Wall Road',
        "amount": 4,
        "src": "images/tiles/CastleWallRoad.png",
        "startTile": true,
        "format": [
            [2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'city'
            },

            {
                pos: { x: 4, y: 2 },
                type: 'road'
            },

            {
                pos: { x: 2, y: 4 },
                type: 'grass'
            },

            {
                pos: { x: 0, y: 1 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Monastery',
        "amount": 2,
        "src": "images/tiles/Monastery.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 3, 3, 3, 0],
            [0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'grass'
            },
        ]
    },
    {
        name: 'Monastery 1',
        "amount": 2,
        "src": "images/tiles/Monastery1.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 3, 3, 3, 0],
            [0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'grass'
            },
        ]
    },
    {
        name: 'Monastery Castle',
        "amount": 1,
        "src": "images/tiles/MonasteryCastle.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'city'
            },
        ]
    },
    {
        name: 'Monastery Castle 1',
        "amount": 1,
        "src": "images/tiles/MonasteryCastle1.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'city'
            },
        ]
    },
    {
        name: 'Monastery Castle 2',
        "amount": 1,
        "src": "images/tiles/MonasteryCastle2.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'city'
            },
        ]
    },
    {
        name: 'Monastery Castle 3',
        "amount": 1,
        "src": "images/tiles/MonasteryCastle3.png",
        "format": [
            [2, 2, 2, 2, 2],
            [2, 2, 3, 2, 2],
            [2, 3, 3, 3, 2],
            [2, 2, 3, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'city'
            },
        ]
    },
    {
        name: 'Monastery Junction',
        "amount": 2,
        "src": "images/tiles/MonasteryJunction.png",
        "format": [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 3, 3, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 0, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'road'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'road'
            },
        ]
    },
    {
        name: 'Monastery Road',
        "amount": 2,
        "src": "images/tiles/MonasteryRoad.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 3, 3, 3, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'church'
            },
            {
                pos: { x: 0, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },

        ]
    },
    {
        name: 'Road',
        "amount": 8,
        "src": "images/tiles/Road.png",
        "format": [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Road Cross Large',
        "amount": 1,
        "src": "images/tiles/RoadCrossLarge.png",
        "format": [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Road Cross Small',
        "amount": 1,
        "src": "images/tiles/RoadCrossSmall.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'grass'
            },

            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            }
        ]
    },
    {
        name: 'Road Curve',
        "amount": 9,
        "src": "images/tiles/RoadCurve.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 4, y: 1 },
                type: 'grass'
            },

            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            },

        ]
    },
    {
        name: 'Road End',
        "amount": 4,
        "src": "images/tiles/RoadEnd.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [
            {
                pos: { x: 2, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },

        ]
    },
    {
        name: 'Road Junction Large',
        "amount": 2,
        "src": "images/tiles/RoadJunctionLarge.png",
        "format": [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 4, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [

            {
                pos: { x: 0, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 0 },
                type: 'grass'
            },
            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 2, y: 0 },
                type: 'road'
            },
            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'road'
            },
        ]
    },
    {
        name: 'Road Junction Small',
        "amount": 2,
        "src": "images/tiles/RoadJunctionSmall.png",
        "format": [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 4, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
        ],
        meepleSpots: [

            {
                pos: { x: 2, y: 0 },
                type: 'grass'
            },

            {
                pos: { x: 4, y: 4 },
                type: 'grass'
            },
            {
                pos: { x: 0, y: 4 },
                type: 'grass'
            },

            {
                pos: { x: 2, y: 4 },
                type: 'road'
            },
            {
                pos: { x: 4, y: 2 },
                type: 'road'
            },
            {
                pos: { x: 0, y: 2 },
                type: 'road'
            },
        ]
    }
]
