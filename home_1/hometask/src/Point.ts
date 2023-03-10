export class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(point: Point): number;
  public distance(x: number, y: number): number;
  public distance(param1?: unknown, param2?: number): number {
    if (param1 instanceof Point) {
      const point = param1 as Point;
      return this.calculateDistance(point.x, point.y);
    } else if (typeof param1 === "number" && typeof param2 === "number") {
      return this.calculateDistance(param1, param2);
    } else {
      return this.calculateDistance(0, 0);
    }
  }

  private calculateDistance(x: number, y: number): number {
    const a = this.x - x;
    const b = this.y - y;
    const dist = Math.sqrt(a * a + b * b);
    return dist;
  }
}
