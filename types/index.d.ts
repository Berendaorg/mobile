import { developerData } from "data";


export enum listingType {
    BUY = "buy",
    LEASE = "lease",
}

export enum PropertyType {
    TOWN_HOUSE = "townhouse",
    APARTMENT = "apartment",
    CONDO = "condo",
    REAL_ESTATE = "realEstate",
}

export enum NotificaitonType {
    AD = "ad",
    LISTING = "listing",
    ANNOUNCEMENT = "announcement"
}


export interface Listing  {
    id: number;
    name: string;
    thumbnail: string;
    image:string;
    listedBy:Developer.name;
    address: string;
    price: number;
    propertyType: PropertyType[];
    bedrooms: number;
    bathrooms: number;
    houseSize: number;
    openHouseSchedule: null | string[];
    offMarket: boolean;
    created: string;
    verified: boolean;
    saved: boolean;
    listedFor: listingType[];
    location: {
        coords: {
            lat: number;
            lng: number;
        };
        address: string;
    };
    description: string;
    features: string[];
    pictures: string[];
}

export interface User {
    id: number;
}

// export interface NotificaitonType {
//     type: NotificaitonType,
//     image: string,
// }

export interface Notificaton {
    userId: number,
    created: string;
    message: string;

    icon: null | string;
    image: null |string;
    type: null | NotificaitonType;
}

export interface Developer {
    id: number;
    createdAt: string;
    name: string;
    email: string;
    profilePhoto: string;
}

export interface Place {
    id: number;
    name: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    type: string;
    name: string;
    display_name: string;
}

export interface Ad {
    image: string;
    created: string;
    expires: string;
    views: null | number;
}

export interface Board {
    id: number;
    title: string;
    tags: null | string[];
    image: string;
    date: string;
    views: null | number;
    developer: null | Developer;
    body: null | string;
}