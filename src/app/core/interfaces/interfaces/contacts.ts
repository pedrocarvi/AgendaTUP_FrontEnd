export interface Contact {
    imagen?: string,
    name: string,
    celularNumber?: string,
    telephoneNumber?: string
}

export const defaultContact:Contact = {
    imagen: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "First name",
    celularNumber: "+5412345678",
    telephoneNumber: "0123465"
}



export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ContactJsonPlaceholder {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
