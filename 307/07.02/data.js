var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Окно",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014868706207781912,
          "pitch": 0.0504155610432484,
          "rotation": 0,
          "target": "1-307"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-307",
      "name": "307",
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
          "yaw": 0.026452209334465238,
          "pitch": -0.02768416200012247,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -3.115925095056392,
          "pitch": 0.2082010979360298,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "Вход",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.03773196995476802,
          "pitch": 0.048779218443602446,
          "rotation": 0,
          "target": "1-307"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Коридор 307 кафедры Вариант 1 от 07.02.2021",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
