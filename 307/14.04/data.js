var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
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
        "yaw": -3.1410569736260996,
        "pitch": 0.05453179282834242,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.1375494501770387,
          "pitch": 0.08115413059844911,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
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
          "yaw": 3.141324217800996,
          "pitch": 0.08600918942189928,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -0.00007320597682003438,
          "pitch": 0.0734697724501423,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
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
          "yaw": 3.140423889877699,
          "pitch": 0.07870062758881069,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Коридор 307 (рендер 14.04)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
