/*
Data taken from:
 http://www.baseball-reference.com/games/head2head.shtml
 */


var mlbData = {
  teams: [ "CHC", "STL", "MIL", "CIN", "PIT" ],

  headToHeads: {
    CHC: {
      name: "Chicago Cubs",
      STL: {
        wins: 9,
        loss: 10,
      },
      MIL: {
        wins: 11,
        loss: 8
      },
      CIN: {
        wins: 8,
        loss: 11
      },
      MIA: {
        wins: 4,
        loss: 2
      },
      PIT: {
        wins: 5,
        loss: 14
      }
    },
    MIL: {
      name: "Milwaukee Brewers",
      CHC: {
        wins: 8,
        loss: 11
      },
      STL: {
        wins: 7,
        loss: 12
      },
      CIN: {
        wins: 9,
        loss: 10
      },
      MIA: {
        wins: 4,
        loss: 3
      },
      PIT: {
        wins: 12,
        loss: 7
      }
    },
    MIA: {
      name: "Miami Marlins",
      CHC: {
        wins: 2,
        loss: 4
      },
      MIL: {
        wins: 3,
        loss: 4
      },
      PIT: {
        wins: 2,
        loss: 4
      }
    },
    PIT: {
      name: "Pittsburgh Pirates",
      CHC: {
        wins: 14,
        loss: 5
      },
      STL: {
        wins: 8,
        loss: 11
      },
      MIA: {
        wins: 4,
        loss: 2
      },
      CIN: {
        wins: 7,
        loss: 12
      },
      MIL: {
        wins: 7,
        loss: 12
      }
    },
    STL: {
      name: "St. Louis Cardinals",
      CHC: {
        wins: 10,
        loss: 9
      },
      CIN: {
        wins: 12,
        loss: 7
      },
      MIL: {
        wins: 12,
        loss: 7
      },
      PIT: {
        wins: 11,
        loss: 8
      }
    },
    CIN: {
      name: "Cincinnati Reds",
      CHC: {
        wins: 11,
        loss: 8
      },
      STL: {
        wins: 7,
        loss: 12
      },
      MIL: {
        wins: 10,
        loss: 9
      },
      PIT: {
        wins: 12,
        loss: 7
      }
    }
  }
};

console.log(JSON.stringify(mlbData));
