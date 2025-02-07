function vec2(x, y) {
  this.x = x;
  this.y = y;
}
class ShapesKit {
  constructor() {}
  rect(x, y, w, h) {
    return [
      new vec2(x, y),
      new vec2(x + w, y),
      new vec2(x + w, y + h),
      new vec2(x, y + h),
      new vec2(x, y),
    ];
  }

  line(x0, y0, x1, y1) {
    return [new vec2(x0, y0), new vec2(x1, y1)];
  }

  circle(x, y, s) {
    let vertices = [];
    const detail = 0.05;
    const TWO_PI = Math.PI * 2;
    for (let i = 0; i < TWO_PI- detail ; i += detail) {
      let xc =  ((Math.sin(i) * s) );
      let yc =  ((Math.cos(i) * s) );
      // console.log(xc)
      vertices.push(new vec2(x + xc, y + yc));
    }
    vertices.push( vertices[0])
    return vertices;
  }

  ellipse(x, y, w, h) {}
  quad() {}
  square() {}
  arc() {}
  triangle(x0, y0, x1, y1, x2, y2) {}
  polygon(x,y,s,n){

  }
}
