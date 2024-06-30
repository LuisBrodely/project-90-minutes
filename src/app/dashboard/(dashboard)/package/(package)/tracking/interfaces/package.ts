export interface PackageResponse {
    status:  string;
    data:    Package[];
    message: string;
}

export interface Package {
    id:           string;
    origin:       string;
    destiny:      string;
    weight:       number;
    distance:     number;
    cost:         number;
    status:       string;
    creationDate: null;
    deliveryDate: null;
    details:      string;
}