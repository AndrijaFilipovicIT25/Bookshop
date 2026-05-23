export default class BookLook {
  // Dimensions
  width;
  height;
  depth;

  // Textures
  frontTexture;
  backTexture;
  spineTexture;

  // Generic side color
  sideColor;

  constructor(
    width,
    height,
    depth,
    frontTexture,
    backTexture,
    spineTexture,
    sideColor,
  ) {
    this.height = height;
    this.width = width/height;
    
    this.depth = depth/height;

    this.frontTexture = frontTexture;
    this.backTexture = backTexture;
    this.spineTexture = spineTexture;

    this.sideColor = sideColor;
  }

    static fromJSON(data) {
    return new BookLook(
      data.width,
      data.height,
      data.depth,
      data.frontTexture,
      data.backTexture,
      data.spineTexture,
      data.sideColor
    );
  }
    get width() {
    return this.height * this.width;
  }

  get depth() {
    return this.height * this.depth;
  }
}
