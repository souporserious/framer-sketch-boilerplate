'use strict';

var WIDTH = Framer.Screen.width;
var HEIGHT = Framer.Screen.height;

Framer.Defaults.Animation = {
  curve: 'spring(150, 10, 0)'
};

var circle = new Layer({
  x: WIDTH / 2,
  y: HEIGHT / 2,
  image: 'images/circle.png',
  opacity: 0.75
});

circle.on(Events.Click, function () {
  var bounce = new Animation({
    layer: circle,
    properties: {
      x: WIDTH * Math.random(),
      y: HEIGHT * Math.random()
    }
  });
  bounce.start();
});