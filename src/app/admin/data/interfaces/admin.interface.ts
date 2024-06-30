export interface EntityResponse {
  _id:              string;
  reportId:         string;
  packagesByStatus: PackagesByStatus;
  totalPackages:    number;
}

export interface PackagesByStatus {
  Reprogramado: number;
  Devuelto:        number;
  Creado:          number;
  Entregado:       number;
  EnOficina:    number;
}
