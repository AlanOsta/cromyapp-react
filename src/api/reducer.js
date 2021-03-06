const estadoInicial = {
    debug: false,
    intro: true,
    ganador: null,
    mazo: [{
      "id": 0,
      "lCarta": "A",
      "nCarta": 1,
      "nombre": "Superman",
      "ruta": "./img/a1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 2.05
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 110
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 2000
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 990
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 400
        }
      ]
    },
    {
      "id": 1,
      "lCarta": "A",
      "nCarta": 2,
      "nombre": "Flash",
      "ruta": "./img/a2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.96
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 90
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 840
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 900
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 800000
        }
      ]
    },
    {
      "id": 2,
      "lCarta": "A",
      "nCarta": 3,
      "nombre": "Firestorm",
      "ruta": "./img/a3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.76
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 70
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 700
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 815
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 220
        }
      ]
    },
    {
      "id": 3,
      "lCarta": "A",
      "nCarta": 4,
      "nombre": "Manhunter",
      "ruta": "./img/a4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.86
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 86
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 400
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 950
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 85
        }
      ]
    },
    {
      "id": 4,
      "lCarta": "B",
      "nCarta": 1,
      "nombre": "Batman",
      "ruta": "./img/b1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 2.03
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 106
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 500
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 966
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 85
        }
      ]
    },
    {
      "id": 5,
      "lCarta": "B",
      "nCarta": 2,
      "nombre": "Robin",
      "ruta": "./img/b2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.78
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 65
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 200
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 816
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 80
        }
      ]
    },
    {
      "id": 6,
      "lCarta": "B",
      "nCarta": 3,
      "nombre": "Tornado Rojo",
      "ruta": "./img/b3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.9
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 86
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 830
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 910
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 220
        }
      ]
    },
    {
      "id": 7,
      "lCarta": "B",
      "nCarta": 4,
      "nombre": "Flecha Verde",
      "ruta": "./img/b4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.86
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 90
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 710
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 845
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 220
        }
      ]
    },
    {
      "id": 8,
      "lCarta": "C",
      "nCarta": 1,
      "nombre": "Shazam",
      "ruta": "./img/c1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.92
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 95
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 1000
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 930
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 300
        }
      ]
    },
    {
      "id": 9,
      "lCarta": "C",
      "nCarta": 2,
      "nombre": "Dr. Fate",
      "ruta": "./img/c2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 2
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 100
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 900
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 805
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 100
        }
      ]
    },
    {
      "id": 10,
      "lCarta": "C",
      "nCarta": 3,
      "nombre": "Linterna Verde",
      "ruta": "./img/c3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.96
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 99
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 830
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 910
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 340
        }
      ]
    },
    {
      "id": 11,
      "lCarta": "C",
      "nCarta": 4,
      "nombre": "Aquaman",
      "ruta": "./img/c4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.85
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 86
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 700
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 910
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 220
        }
      ]
    },
    {
      "id": 12,
      "lCarta": "D",
      "nCarta": 1,
      "nombre": "Joven Flash",
      "ruta": "./img/d1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.78
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 70
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 150
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 816
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 300000
        }
      ]
    },
    {
      "id": 13,
      "lCarta": "D",
      "nCarta": 2,
      "nombre": "El Halcon",
      "ruta": "./img/d2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.96
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 95
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 835
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 837
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 300
        }
      ]
    },
    {
      "id": 14,
      "lCarta": "D",
      "nCarta": 3,
      "nombre": "Cyborg",
      "ruta": "./img/d3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 2
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 110
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 1100
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 805
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 150
        }
      ]
    },
    {
      "id": 15,
      "lCarta": "D",
      "nCarta": 4,
      "nombre": "Atomo",
      "ruta": "./img/d4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 0.15
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 1.5
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 800
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 830
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 110
        }
      ]
    },
    {
      "id": 16,
      "lCarta": "E",
      "nCarta": 1,
      "nombre": "Mujer Maravilla",
      "ruta": "./img/e1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.78
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 62
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 830
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 906
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 70
        }
      ]
    },
    {
      "id": 17,
      "lCarta": "E",
      "nCarta": 2,
      "nombre": "Mujer Halcon",
      "ruta": "./img/e2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.7
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 55
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 340
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 816
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 300
        }
      ]
    },
    {
      "id": 18,
      "lCarta": "E",
      "nCarta": 3,
      "nombre": "Batichica",
      "ruta": "./img/e3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.76
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 55
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 320
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 816
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 180
        }
      ]
    },
    {
      "id": 19,
      "lCarta": "E",
      "nCarta": 4,
      "nombre": "Super Chica",
      "ruta": "./img/e4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.74
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 62
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 800
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 834
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 135
        }
      ]
    },
    {
      "id": 20,
      "lCarta": "F",
      "nCarta": 1,
      "nombre": "Chica Maravilla",
      "ruta": "./img/f1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.56
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 53
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 800
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 706
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 65
        }
      ]
    },
    {
      "id": 21,
      "lCarta": "F",
      "nCarta": 2,
      "nombre": "Raven",
      "ruta": "./img/f2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.7
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 55
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 85
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 816
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 20
        }
      ]
    },
    {
      "id": 22,
      "lCarta": "F",
      "nCarta": 3,
      "nombre": "Black Canary",
      "ruta": "./img/f3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.6
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 55
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 100
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 805
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 110
        }
      ]
    },
    {
      "id": 23,
      "lCarta": "F",
      "nCarta": 4,
      "nombre": "Starfire",
      "ruta": "./img/f4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.6
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 55
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 150
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 730
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 200
        }
      ]
    },
    {
      "id": 24,
      "lCarta": "G",
      "nCarta": 1,
      "nombre": "El Ping??ino",
      "ruta": "./img/g1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.6
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 90
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 30
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 7
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 15
        }
      ]
    },
    {
      "id": 25,
      "lCarta": "G",
      "nCarta": 2,
      "nombre": "Gatubela",
      "ruta": "./img/g2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.8
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 60
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 80
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 5
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 35
        }
      ]
    },
    {
      "id": 26,
      "lCarta": "G",
      "nCarta": 3,
      "nombre": "El Acertijo",
      "ruta": "./img/g3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.76
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 62
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 625
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 4
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 45
        }
      ]
    },
    {
      "id": 27,
      "lCarta": "G",
      "nCarta": 4,
      "nombre": "El Guason",
      "ruta": "./img/g4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.7
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 67
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 45
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 5
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 45
        }
      ]
    },
    {
      "id": 28,
      "lCarta": "H",
      "nCarta": 1,
      "nombre": "Brainac",
      "ruta": "./img/h1.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.8
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 200
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 805
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 7
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 76
        }
      ]
    },
    {
      "id": 29,
      "lCarta": "H",
      "nCarta": 2,
      "nombre": "Lex Luthor",
      "ruta": "./img/h2.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.8
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 79
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 415
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 6
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 85
        }
      ]
    },
    {
      "id": 30,
      "lCarta": "H",
      "nCarta": 3,
      "nombre": "Sangre",
      "ruta": "./img/h3.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.9
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 87
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 195
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 5
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 145
        }
      ]
    },
    {
      "id": 31,
      "lCarta": "H",
      "nCarta": 4,
      "nombre": "Amazo",
      "ruta": "./img/h4.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 1.96
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 99
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 830
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 8
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 800000
        }
      ]
    },
    {
      "id": 32,
      "lCarta": "A",
      "nCarta": "M",
      "nombre": "Amarilla",
      "ruta": "./img/am.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 0
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 0
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 0
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 0
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 0
        }
      ]
    },
    {
      "id": 33,
      "lCarta": "R",
      "nCarta": "O",
      "nombre": "Roja",
      "ruta": "./img/ro.png",
      "atributos": [
        {
          "id": 0,
          "nombre": "Altura",
          "valor": 0
        },
        {
          "id": 1,
          "nombre": "Peso",
          "valor": 0
        },
        {
          "id": 2,
          "nombre": "Fuerza",
          "valor": 0
        },
        {
          "id": 3,
          "nombre": "Peleas Ganadas",
          "valor": 0
        },
        {
          "id": 4,
          "nombre": "Velocidad",
          "valor": 0
        }
      ]
    }],
    atributos: ['Altura', 'Peso', 'Fuerza', 'Peleas Ganadas', 'Velocidad'],
    cartasJugador: [],
    cartasAdversario: [],
    cartasEmpate: [],
    turnoJugador: true,    
    atributoAdversario: null,  
    cartaJugador: {
        "id": null,
        "lCarta": "",
        "nCarta": null,
        "nombre": "",
        "ruta": "",
        "atributos": [
          {
            "id": 0,
            "nombre": "Atr1",
            "valor": null
          },
          {
            "id": 1,
            "nombre": "Atr2",
            "valor": null
          },
          {
            "id": 2,
            "nombre": "Atr3",
            "valor": null
          },
          {
            "id": 3,
            "nombre": "Atr4",
            "valor": null
          },
          {
            "id": 4,
            "nombre": "Atr5",
            "valor": null
          }
        ]
      },
    cartaAdversario: {},
    chat: []    
};

const reducer = (estadoPrevio = estadoInicial, action) => {
    switch(action.type){

        case "REPARTIR_MAZO" :
            return {...estadoPrevio,              
              //mazo: action.mazo, 
              //atributos: action.atributos,
              intro: false,
              cartasJugador: action.cartasJugador,
              cartasAdversario: action.cartasAdversario,
              cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]], // LOCAL
              cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]], // LOCAL
              chat: action.chat
             }

        case "GANO_JUGADOR" :
            
            return{...estadoPrevio,
              atributoAdversario: null,
              turnoJugador: true,
              cartasJugador: action.cartasJugador,
              cartasAdversario: action.cartasAdversario,
              cartasEmpate: [],
              cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
              cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
              chat: action.chat
            }
        
        case "GANO_ADVERSARIO" :
                
          return{...estadoPrevio,
            turnoJugador: false,
            atributoAdversario: action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat
          }
        
        case "EMPATE" :
          
          return{...estadoPrevio,
            atributoAdversario: action.turnoJugador ? null : action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: action.cartasEmpate,
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat
          }

        case "PARTIDA_JUGADOR" :
          
          return{...estadoPrevio,
            atributoAdversario: null,
            turnoJugador: true,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat,
            ganador: "Jugador"
          }

          case "PARTIDA_ADVERSARIO" :
                
          return{...estadoPrevio,
            turnoJugador: false,
            atributoAdversario: action.atributoAdversario,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartasEmpate: [],
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],              
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]],
            chat: action.chat,
            ganador: "Adversario"
          }

          case "DEBUG" :
            
          return{...estadoPrevio,
            debug: action.debug
          }

          case "SUMAR_CARTA" :
          return{...estadoPrevio,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]]
          }

          case "RESTAR_CARTA" :
          return{...estadoPrevio,
            cartasJugador: action.cartasJugador,
            cartasAdversario: action.cartasAdversario,
            cartaJugador: estadoPrevio.mazo[action.cartasJugador[0]],
            cartaAdversario: estadoPrevio.mazo[action.cartasAdversario[0]]
          }

        default :
            return estadoPrevio;
    }
}

export default reducer;