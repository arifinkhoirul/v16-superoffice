export type officeSpace = {
    id: number;
    title: string;
    slug: string
    price: number;
    duration: string;
    address: string
    about: string;
    location: string;
    rating: string;
    tags: string[];
    image: string;
    images: string[];
    features: features[];
    saleContacts: saleContacts[];
    isFullyBooked: boolean,
}

export type saleContacts = {
    id: number;
    name: string;
    role: string;
    photo: string
}


export type features = {
    image: string,
    caption: string,
    description: string
}