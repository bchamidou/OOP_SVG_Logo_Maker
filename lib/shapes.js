 // Triangle class 
  class Triangle {
    constructor() {
      this.color = "";
    } 
    setColor(colorVar) {
      this.color = colorVar;
    }
    render() { 
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class  
  class Square {
    constructor() {
      this.color = "";
    } 
    setColor(colorVar) {
      this.color = colorVar;
    }
    render() { 
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class 
  class Circle {
    constructor() {
      this.color = "";
    } 
    setColor(colorVar) {
      this.color = colorVar;
    }
    
    render() { 
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
 
  module.exports = { Triangle, Square, Circle };