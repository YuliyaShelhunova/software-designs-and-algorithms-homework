import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[], color: string = "green", filled: boolean = true) {
    if (points.length < 3) throw new Error("Should be at least 3 points");
    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  protected toString(): string {
    const filled = this.filled ? "filled" : "not filled";
    let row = `A Shape with color of ${this.color} and ${filled}. Points: `;
    row = this.points.reduce(
      (acc, point, index, arr) =>
        acc + `${new Point(point.x, point.y).toString()}${index < arr.length - 1 ? ", " : "."}`,
      row
    );
    return row;
  }

  private getPerimeter(): number {
    return this.points.reduce((acc, point, index, points) => acc + this.getSide(point, points[(index + 1)]), 0);
  }

  protected getSide(point1: Point, point2: Point) {
    return new Point(point1.x, point1.y).distance(point2);
  }

  abstract getType(): string;
}
