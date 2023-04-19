import { ZipCodeBasedShipperFactory } from "./shipper/factory/ZipCodeBasedShipperFactory";

export abstract class Shipment {
  private static shipmentIdCounter: number = 1;

  private _shipmentId: number;
  private _weight: number;
  private _fromAddress: string;
  private _fromZipCode: string;
  private _toAddress: string;
  private _toZipCode: string;

  constructor(weight?: number) {
    if (weight) {
      this._weight = weight;
      this._shipmentId = Shipment.shipmentIdCounter++;
    }
  }

  public get weight(): number {
    return this._weight;
  }

  public get fromAddress(): string {
    return this._fromAddress;
  }

  public set fromAddress(value: string) {
    this._fromAddress = value;
  }

  public get toAddress(): string {
    return this._toAddress;
  }

  public set toAddress(value: string) {
    this._toAddress = value;
  }

  public get fromZipCode(): string {
    return this._fromZipCode;
  }

  public set fromZipCode(value: string) {
    this._fromZipCode = value;
  }

  public get toZipCode(): string {
    return this._toZipCode;
  }
  
  public set toZipCode(value: string) {
    this._toZipCode = value;
  }

  public getShipmentId(): number {
    return this._shipmentId;
  }

  ship(): string {
    const shipper = ZipCodeBasedShipperFactory.getInstance().getShipper(this);
    const price = shipper.getCost(this);
    return `Shipment ID: ${this.getShipmentId()}
                From: ${this.fromAddress}
                To: ${this.toAddress}
                Price: ${price}`;
  }
}
