var APP_DATA = {
  "scenes": [
    {
      "id": "0-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.3259135235867099,
        "pitch": -0.0023811824950357163,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 1.7595555388901047,
          "pitch": 0.9476478820245351,
          "rotation": 9.42477796076938,
          "target": "1-living-cocina-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.30478923306912975,
          "pitch": 0.37960445933223497,
          "title": "Madera de cedro amazónico para muebles",
          "text": "En armarios, camas y cómodas. Su aroma actúa como un repelente natural de polillas e insectos. No se deforma con los cambios de humedad.<div><br></div><div>Para la mesa de comedor, escritorios y bancas se utiliza madera copaiba.</div>"
        }
      ]
    },
    {
      "id": "1-living-cocina-comedor",
      "name": "Living cocina comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.19940320707102543,
        "pitch": 0.09090139151561871,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 1.4627010181139148,
          "pitch": 0.19412784178365428,
          "rotation": 0,
          "target": "0-dormitorio"
        },
        {
          "yaw": 1.366949240437446,
          "pitch": 0.41413171469272037,
          "rotation": 3.141592653589793,
          "target": "2-bao"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.17914371322524048,
          "pitch": 0.015740431360443452,
          "title": "Madera copaiba para el interior",
          "text": "Cuenta con resistencia natural media-alta y contiene resinas que actúan como un repelente natural contra los insectos.&nbsp;<div><br></div><div>Para alargar la vida útil de esta madera se recomienda realizar una limpieza profunda cada 12-18 meses, y cada 2-3 años reaplicar la capa de protección superficial.&nbsp;</div>"
        },
        {
          "yaw": 3.0476059425241058,
          "pitch": 0.010285863988404031,
          "title": "Madera cumarú para la puerta",
          "text": "Su dureza extrema la hace impenetrable para los insectos y altamente resistente a la intemperie.<div><br></div><div>Puerta pesada, segura y que no se deforma.</div>"
        }
      ]
    },
    {
      "id": "2-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.4440891337306212,
        "pitch": -0.0010227234331772195,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 1.50223876455847,
          "pitch": 0.09090966216697183,
          "rotation": 0,
          "target": "1-living-cocina-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4119508068122517,
          "pitch": 0.4650477085084077,
          "title": "Madera de cumarú para las escaleras",
          "text": "Una de las maderas más duras y densas del mundo. Es resistente al impacto, al desgaste por pisadas y tiene una resistencia natural a la humedad e insectos.<div><br></div><div>Para su mantenimiento, se deben usar lasures de alto tránsito o aceites protectores, y se debe reaplicar el tratamiento de protección en las huellas cada 12-18 meses debido al desgaste.</div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
