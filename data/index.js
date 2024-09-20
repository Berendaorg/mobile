import image from "../constants/image";
import icon from "../constants/icon";

const listingData = [
  {
    id : 1,
    "name":"listing 1",
    "image": image.dubaiprop,
    "address": "123 Main St, City, Country",
    "price": 250000,
    "propertyType": "townhouse",
    "bedrooms": 3,
    "bathrooms": 2,
    "houseSize": 1800,
    "houseAge": 19,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "123 Main St, City, Country"
    },
    "description": "Beautiful townhouse with modern amenities",
    "features": {
      "parking": true,
      "pool": false,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-01", "2024-05-08", "2024-05-15"],
    "offMarket": false,
    "listedDate": "2024-04-18",
    "listedBy": {
      "photoUrl": "https://example.com/photo1.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+1234567890"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 2,
    "name":"listing 2",
    "image": image.dunabeprop,
    "address": "456 Elm St, City, Country",
    "price": 190000,
    "propertyType": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "houseSize": 1200,
    "houseAge": 26,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "456 Elm St, City, Country"
    },
    "description": "Cozy apartment in a convenient location",
    "features": {
      "parking": true,
      "pool": true,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-04-30", "2024-05-07", "2024-05-14"],
    "offMarket": false,
    "listedDate": "2024-04-17",
    "listedBy": {
      "photoUrl": "https://example.com/photo2.jpg",
      "name": "Danube Properties",
      "verified": true,
      "phone": "+1098765432"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 3,
    "name":"listing 3",
    "image": image.aldarprop,
    "address": "789 Oak St, City, Country",
    "price": 300000,
    "propertyType": "condominium",
    "bedrooms": 2,
    "bathrooms": 2.5,
    "houseSize": 1600,
    "houseAge": 8,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "789 Oak St, City, Country"
    },
    "description": "Modern condominium with stunning views",
    "features": {
      "parking": true,
      "pool": true,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-03", "2024-05-10", "2024-05-17"],
    "offMarket": false,
    "listedDate": "2024-04-19",
    "listedBy": {
      "photoUrl": "https://example.com/photo3.jpg",
      "name": "Aldar Properties",
      "verified": true,
      "phone": "+1122334455"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 4,
    "name":"listing 4",
    "image": image.aldarprop,
    "address": "321 Pine St, City, Country",
    "price": 500000,
    "propertyType": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "houseSize": 2400,
    "houseAge": 15,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "321 Pine St, City, Country"
    },
    "description": "Spacious family home in a quiet neighborhood",
    "features": {
      "parking": true,
      "pool": true,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-05", "2024-05-12", "2024-05-19"],
    "offMarket": false,
    "listedDate": "2024-04-20",
    "listedBy": {
      "photoUrl": "https://example.com/photo4.jpg",
      "name": "Aldar properties",
      "verified": true,
      "phone": "+9988776655"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 5,
    "name":"listing 5",
    "image": image.dubaiprop,
    "address": "246 Maple St, City, Country",
    "price": 180000,
    "propertyType": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "houseSize": 900,
    "houseAge": 10,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "246 Maple St, City, Country"
    },
    "description": "Cozy apartment with great amenities",
    "features": {
      "parking": true,
      "pool": false,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-02", "2024-05-09", "2024-05-16"],
    "offMarket": false,
    "listedDate": "2024-04-21",
    "listedBy": {
      "photoUrl": "https://example.com/photo5.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+1122334455"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 6,
    "name":"listing 6",
    "image": image.dubaiprop,
    "address": "789 Cedar St, City, Country",
    "price": 400000,
    "propertyType": "townhouse",
    "bedrooms": 3,
    "bathrooms": 2.5,
    "houseSize": 2000,
    "houseAge": 12,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "789 Cedar St, City, Country"
    },
    "description": "Spacious townhouse with great views",
    "features": {
      "parking": true,
      "pool": false,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-04", "2024-05-11", "2024-05-18"],
    "offMarket": false,
    "listedDate": "2024-04-22",
    "listedBy": {
      "photoUrl": "https://example.com/photo6.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+9988776655"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 7,
    "name":"listing 7",
    "image": image.dubaiprop,
    "address": "1010 Walnut St, City, Country",
    "price": 600000,
    "propertyType": "house",
    "bedrooms": 5,
    "bathrooms": 3.5,
    "houseSize": 3000,
    "houseAge": 5,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "1010 Walnut St, City, Country"
    },
    "description": "Luxurious family home with spacious backyard",
    "features": {
      "parking": true,
      "pool": true,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-06", "2024-05-13", "2024-05-20"],
    "offMarket": false,
    "listedDate": "2024-04-23",
    "listedBy": {
      "photoUrl": "https://example.com/photo7.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+1122334455"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 8,
    "name":"listing 8",
    "image": image.dubaiprop,
    "address": "1313 Oak St, City, Country",
    "price": 350000,
    "propertyType": "condominium",
    "bedrooms": 2,
    "bathrooms": 2,
    "houseSize": 1400,
    "houseAge": 7,
    "location": {
      "coords": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "address": "1313 Oak St, City, Country"
    },
    "description": "Charming condominium in a desirable location",
    "features": {
      "parking": true,
      "pool": false,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-08", "2024-05-15", "2024-05-22"],
    "offMarket": false,
    "listedDate": "2024-04-24",
    "listedBy": {
      "photoUrl": "https://example.com/photo8.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+9988776655"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 9,
    "name":"listing 9",
    "image": image.dubaiprop,
    "address": "1717 Maple St, City, Country",
    "price": 200000,
    "propertyType": "apartment",
    "bedrooms": 1,
    "bathrooms": 1,
    "houseSize": 800,
    "houseAge": 3,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "1717 Maple St, City, Country"
    },
    "description": "Modern apartment with balcony",
    "features": {
      "parking": true,
      "pool": false,
      "gym": true
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-09", "2024-05-16", "2024-05-23"],
    "offMarket": false,
    "listedDate": "2024-04-25",
    "listedBy": {
      "photoUrl": "https://example.com/photo9.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+1122334455"
    },
    "saved": true,
    "listedFor": "sell"
  },
  {
    id : 0,
    "name":"listing 0",
    "image": image.dubaiprop,
    "address": "2121 Cedar St, City, Country",
    "price": 450000,
    "propertyType": "house",
    "bedrooms": 4,
    "bathrooms": 2.5,
    "houseSize": 2200,
    "houseAge": 20,
    "location": {
      "coords": {
        "lat": 41.8781,
        "lng": -87.6298
      },
      "address": "2121 Cedar St, City, Country"
    },
    "description": "Classic family home with large backyard",
    "features": {
      "parking": true,
      "pool": false,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-05-10", "2024-05-17", "2024-05-24"],
    "offMarket": false,
    "listedDate": "2024-04-26",
    "listedBy": {
      "photoUrl": "https://example.com/photo10.jpg",
      "name": "Dubai Properties",
      "verified": true,
      "phone": "+9988776655"
    },
    "saved": true,
    "listedFor": "sell"
  }]

const categMapData = [
    {
      "type": "5",
      "data": [
        {
          "image": image.detailimg,
          "house_id": "1",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "2",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "3",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "4",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "5",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "6",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "7",
          "latitude": 9.0485,
          "longitude": 38.7549,
          "address": "Sample Address 10, Addis Ababa",
          "img": "https://example.com/house_image10.jpg",
          "description": "Sleek modernist villa with infinity pool",
          "price": 980000,
          "bedrooms": 6,
          "bathrooms": 5,
          "sqft": 5000
        }
      ]
    },
    {
      "type": "10",
      
      "data": [
        {
          "image": image.detailimg,
          "house_id": "1",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "2",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "3",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "4",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "5",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "6",
          "latitude": 9.0364,
          "longitude": 38.7456,
          "address": "Sample Address 5, Addis Ababa",
          "img": "https://example.com/house_image5.jpg",
          "description": "Luxurious penthouse with panoramic city views",
          "price": 750000,
          "bedrooms": 5,
          "bathrooms": 4,
          "sqft": 4000
        },
        {
          "image": image.detailimg,
          "house_id": "7",
          "latitude": 9.0485,
          "longitude": 38.7549,
          "address": "Sample Address 10, Addis Ababa",
          "img": "https://example.com/house_image10.jpg",
          "description": "Sleek modernist villa with infinity pool",
          "price": 980000,
          "bedrooms": 6,
          "bathrooms": 5,
          "sqft": 5000
        }
      ]
    }
]

const roomData = [
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 1,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 2,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 3,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 4,
  },
  {
    image: image.detailimg,
    title: "Bedroom",
    index: 5,
  },
];

const notificationData = [
    {
    time:'1:57',
    body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
    icon: icon.Transfericon
    },
    {
    time:'1:57',
    body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
    icon: icon.Transfericon
    },
    {
    time:'1:57',
    body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
    icon: icon.Transfericon
    },
    {
    time:'1:57',
    body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
    icon: icon.Transfericon
    },
    {
    time:'1:57',
    body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore`,
    icon: icon.Transfericon
    },
]

const developerData = [
  {
    id:1,
    name:"developer 1",
    email:"developer1@email.com",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RL7jZBdy-GACBLVMZSCDp44yr93lDryEQQ&s",
  },
  {
    id:2,
    name:"developer 2",
    email:"developer2@email.com",
    profilePhoto:
      "https://iconape.com/wp-content/png_logo_vector/aldar-properties-logo.png",
  },
  {
    id:3,
    name:"developer 3",
    email:"developer3@email.com",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQbFW_-3yGH3koFlg80RcrRl7H8QfhkH5xQ&s",
  },
  {
    id:4,
    name:"developer 4",
    email:"developer4@email.com",
    profilePhoto:
      "https://logolook.net/wp-content/uploads/2024/04/Emaar-Properties-Logo-2014.png",
  },
  {
    id:5,
    name:"developer 5",
    email:"developer4@email.com",
    profilePhoto:
      "https://logolook.net/wp-content/uploads/2024/04/Emaar-Properties-Logo-2014.png",
  },
]

const locationData = [
   {
    id:1,
    name:"Addis Ketema"
   },{
    id:2,
    name:"Akaki Kaliti"
   },{
    id:3,
    name:"Arada"
   },{
    id:4,
    name:"Bole"
   },{
    id:5,
    name:"Gulale"
   },{
    id:6,
    name:"Kirkos"
   },{
    id:7,
    name:"Kolfe Keranio"
   },{
    id:8,
    name:"Lideta"
   },{
    id:9,
    name:"Nefas Silk Yeka"
  }]

const adData = [{"image":image.ad_1},{"image":image.ad_2}]
 

export {adData, listingData, categMapData, roomData, notificationData, developerData, locationData}
  