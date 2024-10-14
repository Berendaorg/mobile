import { developerData } from "data";


export enum ListingType {
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
    listing_id: number;
    listing_createdAt: string;
    listing_updatedAt: string | null,
    listing_deletedAt: string | null,
    listing_thumbnail: string;
    listing_price: number;
    listing_propertyType: PropertyType | string;
    listing_bedrooms: number;
    listing_bathrooms: number;
    listing_houseSize: number;
    listing_openHouseSchedule: null | string;
    listing_offMarket: boolean | 0 | 1;
    // listing_created: string;
    listing_verified: boolean | 0 | 1;
    // listing_saved: boolean | 0 | 1;
    listing_listedFor: ListingType | string;
    listing_placeId: string | number;
    listing_developerId: string | number;
    listing_description: string;
    listing_features: string;
    listing_pictures: string;
}

export interface User {
    id: number;
}

// export interface NotificaitonType {
//     type: NotificaitonType,
//     image: string,
// }

export interface Notificaton {
    notification_id: number,
    notification_createdAt: string,
    notification_deletedAt: null | string,

    notification_userId: number,
    notification_title: string;
    notification_type: null | string | NotificaitonType;
    notification_message: string;
}

export interface Developer {
    developer_id: number;
    developer_createdAt: string;
    developer_updatedAt: string | null;
    developer_deletedAt: string | null,
    developer_name: string;
    developer_email: string;
    developer_profilePhoto: string;
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
    board_id: number;
    board_createdAt: string | null,
    board_updatedAt: string | null,
    board_deletedAt: string | null,
    board_title: string;
    board_tags: null | string;
    board_image: string;
    // board_date: string;
    board_views: null | number;
    board_developerId: null | number;
    board_body: null | string;
}