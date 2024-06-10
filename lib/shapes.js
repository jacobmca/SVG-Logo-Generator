class Shape {
  constructor() {
    this.color = "";
    this.text = "";
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
}

class Triangle extends Shape {
  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 290,190 10,190" fill="${this.color}" />
    <text x="150" y="150" font-size="40" text-anchor="middle" fill="white">${this.text}</text>
</svg>`.trim();
  }
}

class Circle extends Shape {
  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="white">${this.text}</text>
</svg>`.trim();
  }
}

class Square extends Shape {
  render() {
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
    <text x="150" y="150" font-size="40" text-anchor="middle" fill="white">${this.text}</text>
</svg>`.trim();
  }
}

module.exports = { Triangle, Circle, Square };
