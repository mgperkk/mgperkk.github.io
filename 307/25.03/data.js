var APP_DATA = {
  "scenes": [
    {
      "id": "0-307-",
      "name": "307, Самолет",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0022474258619293863,
          "pitch": 0.09687965146511424,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "Доска",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.137986831149915,
          "pitch": 0.1103429337982682,
          "rotation": 0,
          "target": "0-307-"
        },
        {
          "yaw": -0.00376660500672088,
          "pitch": 0.1322566568399175,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "Центр",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1295020869177907,
          "pitch": 0.14778456319371358,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": 0.004195317637163853,
          "pitch": 0.1203601379321455,
          "rotation": 0,
          "target": "3-npn-pnp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-npn-pnp",
      "name": "NPN-PNP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.136233349039747,
          "pitch": 0.10544244796767188,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 0.0022205953308258586,
          "pitch": 0.15637354562467998,
          "rotation": 0,
          "target": "4-miami-beach"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-miami-beach",
      "name": "Miami Beach",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1404352433920657,
          "pitch": 0.12894608221543535,
          "rotation": 0,
          "target": "3-npn-pnp"
        },
        {
          "yaw": 3.1404352433920657,
          "pitch": 0.12894608221543535,
          "rotation": 0,
          "target": "3-npn-pnp"
        },
        {
          "yaw": -0.001787703514818162,
          "pitch": 0.19400727805884443,
          "rotation": 0,
          "target": "5-309"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-309",
      "name": "309",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1364957936828706,
          "pitch": 0.1861338802197512,
          "rotation": 0,
          "target": "4-miami-beach"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Коридор 307 кафедры (Вариант 2) рендер 25.03",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
