export interface Package {
    id: string;
    origin: string;
    destiny: string;
    weight: number;
    distance: number;
    cost: number;
    status: string;
    creationDate: string | null;
    deliveryDate: string | null;
    details: string;
}