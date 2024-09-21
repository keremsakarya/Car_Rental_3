export type Car = {
    _id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    color: string;
    mileage: string;
    fuelType: "Gas" | "Petrol" | "Hybrid" | "Electric" | "Diesel";
    transmission: "Automatic" | "Manual";
    condition: "Used" | "New";
    imageUrl: string;
};

export type Order = {
    _id: string;
    product: Car;
    money_spend: number;
    currency: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};