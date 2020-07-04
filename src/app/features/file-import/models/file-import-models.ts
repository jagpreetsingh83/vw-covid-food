export class FileRecord {
  constructor(
    public district: number,
    public sfcode: string,
    public bldgcode: string,
    public schoolname: string,
    public siteaddress: string,
    public zip: string,
    public accessibility: string,
    public longitude: number,
    public latitude: number,
    public koshermealtype: number
  ) {}
}

export type AOA = any[][];
