import image from "../constants/image";
import icon from "../constants/icon";

import { NotificaitonType, PropertyType, listingType } from "../types/index.d.ts";

// import { Listing } from '../types/index.d.ts';

/** @type {import('../types/index.d.ts').Listing[]} */
const listingData = [
  {
    id: 1,
    name: "listing 1",
    thumbnail: image.dubaiprop,
    address: "123 Main St, City, Country",
    // needs to be linked
    image: image.dubaiprop,
    listedBy: 7,
    // 
    price: 250000,
    propertyType: [PropertyType.APARTMENT],
    bedrooms: 3,
    bathrooms: 2,
    houseSize: 1800,
    location: {
      coords: {
        lat: 40.7128,
        lng: -74.0060
      },
      address: "123 Main St, City, Country"
    },
    description: "Beautiful townhouse with modern amenities",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    openHouseSchedule: ["2024-05-01", "2024-05-08", "2024-05-15"],
    offMarket: false,
    created: "2024-04-18",
    verified: true,
    listedFor: [listingType.BUY],
    saved: false
  },
  {
    id: 2,
    "name": "listing 2",
    image: image.dunabeprop,
    "address": "456 Elm St, City, Country",
    "price": 190000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 2,
    "bathrooms": 1,
    "houseSize": 1200,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "456 Elm St, City, Country"
    },
    "description": "Cozy apartment in a convenient location",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-04-30", "2024-05-07", "2024-05-14"],
    "offMarket": false,
    "created": "2024-04-17",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 3,
    "name": "listing 3",
    image: image.aldarprop,
    "address": "789 Oak St, City, Country",
    "price": 300000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 2,
    "bathrooms": 2.5,
    "houseSize": 1600,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "789 Oak St, City, Country"
    },
    "description": "Modern condominium with stunning views",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-03", "2024-05-10", "2024-05-17"],
    "offMarket": false,
    "created": "2024-04-19",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 4,
    "name": "listing 4",
    image: image.aldarprop,
    "address": "321 Pine St, City, Country",
    "price": 500000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 4,
    "bathrooms": 3,
    "houseSize": 2400,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "321 Pine St, City, Country"
    },
    "description": "Spacious family home in a quiet neighborhood",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-05", "2024-05-12", "2024-05-19"],
    "offMarket": false,
    "created": "2024-04-20",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 5,
    "name": "listing 5",
    image: image.dubaiprop,
    "address": "246 Maple St, City, Country",
    "price": 180000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 1,
    "bathrooms": 1,
    "houseSize": 900,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "246 Maple St, City, Country"
    },
    "description": "Cozy apartment with great amenities",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-02", "2024-05-09", "2024-05-16"],
    "offMarket": false,
    "created": "2024-04-21",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 6,
    "name": "listing 6",
    image: image.dubaiprop,
    "address": "789 Cedar St, City, Country",
    "price": 400000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 3,
    "bathrooms": 2.5,
    "houseSize": 2000,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "789 Cedar St, City, Country"
    },
    "description": "Spacious townhouse with great views",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-04", "2024-05-11", "2024-05-18"],
    "offMarket": false,
    "created": "2024-04-22",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 7,
    "name": "listing 7",
    image: image.dubaiprop,
    "address": "1010 Walnut St, City, Country",
    "price": 600000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 5,
    "bathrooms": 3.5,
    "houseSize": 3000,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "1010 Walnut St, City, Country"
    },
    "description": "Luxurious family home with spacious backyard",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-06", "2024-05-13", "2024-05-20"],
    "offMarket": false,
    "created": "2024-04-23",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 8,
    "name": "listing 8",
    image: image.dubaiprop,
    "address": "1313 Oak St, City, Country",
    "price": 350000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 2,
    "bathrooms": 2,
    "houseSize": 1400,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "1313 Oak St, City, Country"
    },
    "description": "Charming condominium in a desirable location",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-08", "2024-05-15", "2024-05-22"],
    "offMarket": false,
    "created": "2024-04-24",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 9,
    "name": "listing 9",
    image: image.dubaiprop,
    "address": "1717 Maple St, City, Country",
    "price": 200000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 1,
    "bathrooms": 1,
    "houseSize": 800,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "1717 Maple St, City, Country"
    },
    "description": "Modern apartment with balcony",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-09", "2024-05-16", "2024-05-23"],
    "offMarket": false,
    "created": "2024-04-25",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  },
  {
    id: 0,
    "name": "listing 0",
    image: image.dubaiprop,
    "address": "2121 Cedar St, City, Country",
    "price": 450000,
    propertyType: [PropertyType.APARTMENT],
    "bedrooms": 4,
    "bathrooms": 2.5,
    "houseSize": 2200,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "2121 Cedar St, City, Country"
    },
    "description": "Classic family home with large backyard",
    features: [
      "parking",
      "pool",
      "gym"
    ],
    pictures: [
      image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg,
      image.detailimg, image.detailimg
    ],
    "openHouseSchedule": ["2024-05-10", "2024-05-17", "2024-05-24"],
    "offMarket": false,
    "created": "2024-04-26",
    listedBy:2,
    saved: true,
    listedFor: [listingType.BUY],
    thumbnail: "",
    verified: false
  }]

/** @type {import('../types/index.d.ts').Board[]} */
const boardData = [
  {
    image: image.detailimg,
    id: 1,
    title: "Board Title",
    date: "",
    views: null,
    developer: null,
    body: null,
    tags: ["-30% Discount","limited time"]
  },
  {
    image: image.detailimg,
    id:2,
    title: "Board Title",
    tags: ["-30% Discount"],
    date: "",
    views: null,
    developer: null,
    body: null
  },
  {
    image: image.detailimg,
    title: "Board Title",
    id: 3,
    tags: ["-30% Discount"],
    date: "",
    views: null,
    developer: null,
    body: null
  },
  {
    image: image.detailimg,
    title: "Board Title",
    id: 4,
    tags: ["-30% Discount"],
    date: "",
    views: null,
    developer: null,
    body: null
  },
  {
    image: image.detailimg,
    title: "Board Title",
    id: 5,
    tags: ["-30% Discount"],
    date: "",
    views: null,
    developer: null,
    body: null
  },
];

/** @type {import('../types/index.d.ts').Notificaton[]} */
const notificationData = [
    {
    userId:1,
    created:'1:57',
    message:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
    icon: icon.Transfericon,
    image:icon.Transfericon,
    type: NotificaitonType.AD,
    },
    {
      userId: 1,
      created: '1:57',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
      icon: icon.Transfericon,
      type: NotificaitonType.AD,
      image: null
    },
    {
      userId: 1,
      created: '1:57',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
      icon: icon.Transfericon,
      type: NotificaitonType.AD,
      image: null
    },
    {
      userId: 1,
      created: '1:57',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
      icon: icon.Transfericon,
      type: NotificaitonType.AD,
      image: null
    },
    {
      userId: 1,
      created: '1:57',
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
      icon: icon.Transfericon,
      type: NotificaitonType.AD,
      image: null
    },
]

/** @type {import('../types/index.d.ts').Developer[]} */
const developerData = [
  {
    id: 1,
    name: "developer 1",
    email: "developer1@email.com",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RL7jZBdy-GACBLVMZSCDp44yr93lDryEQQ&s",
    createdAt: ""
  },
  {
    id: 2,
    name: "developer 2",
    email: "developer2@email.com",
    profilePhoto: "https://iconape.com/wp-content/png_logo_vector/aldar-properties-logo.png",
    createdAt: ""
  },
  {
    id: 3,
    name: "developer 3",
    email: "developer3@email.com",
    profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQbFW_-3yGH3koFlg80RcrRl7H8QfhkH5xQ&s",
    createdAt: ""
  },
  {
    id: 4,
    name: "developer 4",
    email: "developer4@email.com",
    profilePhoto: "https://logolook.net/wp-content/uploads/2024/04/Emaar-Properties-Logo-2014.png",
    createdAt: ""
  },
  {
    id: 5,
    name: "developer 5",
    email: "developer4@email.com",
    profilePhoto: "https://logolook.net/wp-content/uploads/2024/04/Emaar-Properties-Logo-2014.png",
    createdAt: ""
  },
]

/** @type {import('../types/index.d.ts').Place[]} */
const locationData = [
   {
     id: 1,
     name: "Addis Ketema",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 2,
     name: "Akaki Kaliti",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 3,
     name: "Arada",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 4,
     name: "Bole",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 5,
     name: "Gulale",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 6,
     name: "Kirkos",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 7,
     name: "Kolfe Keranio",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 8,
     name: "Lideta",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 9,
     name: "Nefas Silk Yeka",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   }]

/** @type {import('../types/index.d.ts').Ad[]} */
const adData = [{
  image: image.ad_1,
  created: "",
  expires: "",
  views: 0
},{
  image: image.ad_2,
  created: "",
  expires: "",
  views: 0
}]
 

export {adData, listingData, boardData, notificationData, developerData, locationData}
  