import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    super([point1, point2, point3], color, filled);
  }

  toString(): string {
    let row = "Triangle[";
    row = this.points.reduce(
      (acc, point, index, arr) =>
        acc + `v${index + 1}=${new Point(point.x, point.y).toString()}${index < arr.length - 1 ? "," : "]"}`,
      row
    );
    return row;
  }

  getType(): string {
    const mappingTypes = {
      eqTriangle: "equilateral triangle",
      isTriangle: "isosceles triangle",
      scTriangle: "scalene triangle",
    };
    const side1 = super.getSide(this.points[0], this.points[1]);
    const side2 = super.getSide(this.points[1], this.points[2]);
    const side3 = super.getSide(this.points[2], this.points[0]);

    if (this.compareSides(side1, side2) && this.compareSides(side2, side3)) {
      return mappingTypes.eqTriangle;
    } else if (this.compareSides(side1, side2) || this.compareSides(side2, side3) || this.compareSides(side3, side1)) {
      return mappingTypes.isTriangle;
    } else {
      return mappingTypes.scTriangle;
    }
  }

  private compareSides(side1: number, side2: number) {
    return Math.abs(side1 - side2) < 0.001;
  }
}
