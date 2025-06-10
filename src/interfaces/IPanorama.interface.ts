export interface IData {
  [key: string]: IDataPano;
}

export interface IDataPano {
  title: string;
  map: IMap;
  listImage: IImage[];
  listDot: IDot[];
}

export interface IMap {
  src: string;
}

export interface IDot {
  src: string;
  top: string;
  left: string;
}

export interface IImage {
  src: string;
  options?: string[];
  listMarker: IMarker[];
  nameRoom: string;
}

export interface IMarker {
  positions: { yaw: number; pitch: number };
  nameRoom: string;
}
