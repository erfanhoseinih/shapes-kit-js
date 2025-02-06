function vec2D(x, y) {
  this.x = x;
  this.y = y;
}

class ShapesKit {
  constructor() {}

  rect(x, y, w, h) {
    return [
      new vec2D(x, y),
      new vec2D(x + w, y),
      new vec2D(x + w, y + h),
      new vec2D(x, y + h),
      new vec2D(x, y),
    ];
  }
}
