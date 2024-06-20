const { Triangle, Circle, Square } = require("./shapes");

describe("Shape classes", () => {
  test("Triangle renders correctly with specified color", () => {
    const triangleShape = new Triangle();
    triangleShape.setColor("blue");
    triangleShape.setText("A");
    triangleShape.setTextColor("white");
    expect(triangleShape.render()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 290,190 10,190" fill="blue" />
    <text x="150" y="150" font-size="40" text-anchor="middle" fill="white">A</text>
</svg>`
    );
  });

  test("Circle renders correctly with specified color", () => {
    const circleShape = new Circle();
    circleShape.setColor("red");
    circleShape.setText("B");
    circleShape.setTextColor("white")
    expect(circleShape.render()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="red" />
    <text x="150" y="115" font-size="40" text-anchor="middle" fill="white">B</text>
</svg>`
    );
  });

  test("Square renders correctly with specified color", () => {
    const squareShape = new Square();
    squareShape.setColor("green");
    squareShape.setText("C");
    squareShape.setTextColor("white")
    expect(squareShape.render()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="green" />
    <text x="150" y="150" font-size="40" text-anchor="middle" fill="white">C</text>
</svg>`
    );
  });
});
