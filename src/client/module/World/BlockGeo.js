// Generated by CoffeeScript 2.5.1
var BlockGeo;

BlockGeo = class BlockGeo {
  constructor(options) {
    this.toxelSize = options.toxelSize;
    this.q = 1 / this.toxelSize;
    this.blocksMapping = options.blocksMapping;
  }

  getToxel(x, y) {
    var x1, x2, y1, y2;
    x -= 1;
    y -= 1;
    x1 = this.q * x;
    y1 = 1 - this.q * y - this.q;
    x2 = this.q * x + this.q;
    y2 = 1 - this.q * y;
    return [[x1, y1], [x1, y2], [x2, y1], [x2, y2]];
  }

  genBlockFace(type, block, pos) {
    var toxX, toxY, uv;
    if (block.name === "water") {
      toxX = this.blocksMapping["water_flow"]["x"];
      toxY = this.blocksMapping["water_flow"]["y"];
    } else if (this.blocksMapping[block.name]) {
      toxX = this.blocksMapping[block.name]["x"];
      toxY = this.blocksMapping[block.name]["y"];
    } else {
      toxX = this.blocksMapping["debug"]["x"];
      toxY = 28 - this.blocksMapping["debug"]["y"];
    }
    uv = this.getToxel(toxX, toxY);
    switch (type) {
      case "pz":
        return {
          pos: [-0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2]],
          norm: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
          uv: [...uv[0], ...uv[2], ...uv[1], ...uv[1], ...uv[2], ...uv[3]]
        };
      case "nx":
        return {
          pos: [0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2]],
          norm: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
          uv: [...uv[0], ...uv[2], ...uv[1], ...uv[1], ...uv[2], ...uv[3]]
        };
      case "nz":
        return {
          pos: [0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2]],
          norm: [0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1],
          uv: [...uv[0], ...uv[2], ...uv[1], ...uv[1], ...uv[2], ...uv[3]]
        };
      case "px":
        return {
          pos: [-0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2]],
          norm: [-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0],
          uv: [...uv[0], ...uv[2], ...uv[1], ...uv[1], ...uv[2], ...uv[3]]
        };
      case "py":
        return {
          pos: [0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], 0.5 + pos[1], 0.5 + pos[2]],
          norm: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
          uv: [...uv[0], ...uv[2], ...uv[1], ...uv[1], ...uv[2], ...uv[3]]
        };
      case "ny":
        return {
          pos: [0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], 0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], 0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], 0.5 + pos[2], -0.5 + pos[0], -0.5 + pos[1], -0.5 + pos[2]],
          norm: [0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
          uv: [...uv[0], ...uv[2], ...uv[1], ...uv[1], ...uv[2], ...uv[3]]
        };
    }
  }

};

export {
  BlockGeo
};
