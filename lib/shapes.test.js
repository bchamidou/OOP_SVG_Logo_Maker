const { Triangle, Circle, Square } = require('../lib/shapes');

// describe('Shapes', () => {

//   test('Triangle should render correctly', () => {
//     // const triangle = new Triangle(0, 0, 100);
//     const triangle = new Triangle();
//     const expected = '<path d="M 0 -43.30127018922193 L -50 43.30127018922193 L 50 43.30127018922193 Z" />';
//     // shape.setColor("blue");
//     expect(triangle.render()).toBe(expected);
//     // expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
//   });

//   test('Circle should render correctly', () => {
//     // const circle = new Circle(0, 0, 50);
//     const circle = new Circle();
//     const expected = '<circle cx="0" cy="0" r="50" />';
//     // shape.setColor("#ca00ca");
//     // expect(circle.render()).toBe( '<circle cx="150" cy="115" r="80" fill="#ca00ca" />');
//     expect(circle.render()).toBe(expected);
//   });

//   test('Square should render correctly', () => {
//     // const square = new Square(0, 0, 100);
//     const square = new Square();
//     const expected = '<rect x="-50" y="-50" width="100" height="100" />';
//     // shape.setColor("purple");
//     // expect(square.render()).toBe( '<rect x="73" y="40" width="160" height="160" fill="purple" />');
//     expect(square.render()).toBe(expected);
//   });
// });
describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle(0, 0, 100);
    const expected = '<path d="M 0 -43.30127018922193 L -50 43.30127018922193 L 50 43.30127018922193 Z" />';
    expect(triangle.render()).toBe(expected);
  });

  test('Circle should render correctly', () => {
    const circle = new Circle(0, 0, 50);
    const expected = '<circle cx="0" cy="0" r="50" />';
    expect(circle.render()).toBe(expected);
  });

  test('Square should render correctly', () => {
    const square = new Square(0, 0, 100);
    const expected = '<rect x="-50" y="-50" width="100" height="100" />';
    expect(square.render()).toBe(expected);
  });
});