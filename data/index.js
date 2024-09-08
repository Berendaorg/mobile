import image from "../constants/image";
import icon from "../constants/icon";


// const listingData = [
//     {
//       "image": image.detailimg,
//       "house_id": "1",
//       "latitude": 9.0248,
//       "longitude": 38.7469,
//       "address": "Sample Address 1, Addis Ababa",
//       "img": "https://example.com/house_image1.jpg",
//       "description": "Cozy apartment with stunning views",
//       "price": 180000,
//       "bedrooms": 2,
//       "bathrooms": 1,
//       "sqft": 1500
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "2",
//       "latitude": 9.0148,
//       "longitude": 38.7545,
//       "address": "Sample Address 2, Addis Ababa",
//       "img": "https://example.com/house_image2.jpg",
//       "description": "Spacious family home in a quiet neighborhood",
//       "price": 320000,
//       "bedrooms": 4,
//       "bathrooms": 3,
//       "sqft": 2800
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "3",
//       "latitude": 9.0443,
//       "longitude": 38.7407,
//       "address": "Sample Address 3, Addis Ababa",
//       "img": "https://example.com/house_image3.jpg",
//       "description": "Modern duplex with rooftop terrace",
//       "price": 450000,
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "sqft": 2000
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "4",
//       "latitude": 9.0230,
//       "longitude": 38.7603,
//       "address": "Sample Address 4, Addis Ababa",
//       "img": "https://example.com/house_image4.jpg",
//       "description": "Charming cottage surrounded by lush gardens",
//       "price": 280000,
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "sqft": 1800
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "5",
//       "latitude": 9.0364,
//       "longitude": 38.7456,
//       "address": "Sample Address 5, Addis Ababa",
//       "img": "https://example.com/house_image5.jpg",
//       "description": "Luxurious penthouse with panoramic city views",
//       "price": 750000,
//       "bedrooms": 5,
//       "bathrooms": 4,
//       "sqft": 4000
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "6",
//       "latitude": 9.0287,
//       "longitude": 38.7652,
//       "address": "Sample Address 6, Addis Ababa",
//       "img": "https://example.com/house_image6.jpg",
//       "description": "Elegant townhouse in a gated community",
//       "price": 550000,
//       "bedrooms": 4,
//       "bathrooms": 3,
//       "sqft": 3200
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "7",
//       "latitude": 9.0312,
//       "longitude": 38.7558,
//       "address": "Sample Address 7, Addis Ababa",
//       "img": "https://example.com/house_image7.jpg",
//       "description": "Contemporary loft with industrial-chic design",
//       "price": 380000,
//       "bedrooms": 2,
//       "bathrooms": 2,
//       "sqft": 1800
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "8",
//       "latitude": 9.0401,
//       "longitude": 38.7511,
//       "address": "Sample Address 8, Addis Ababa",
//       "img": "https://example.com/house_image8.jpg",
//       "description": "Rustic farmhouse with countryside views",
//       "price": 420000,
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "sqft": 2200
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "9",
//       "latitude": 9.0169,
//       "longitude": 38.7426,
//       "address": "Sample Address 9, Addis Ababa",
//       "img": "https://example.com/house_image9.jpg",
//       "description": "Quaint bungalow with a private garden",
//       "price": 320000,
//       "bedrooms": 2,
//       "bathrooms": 1,
//       "sqft": 1600
//     },
//     {
//       "image": image.detailimg,
//       "house_id": "10",
//       "latitude": 9.0485,
//       "longitude": 38.7549,
//       "address": "Sample Address 10, Addis Ababa",
//       "img": "https://example.com/house_image10.jpg",
//       "description": "Sleek modernist villa with infinity pool",
//       "price": 980000,
//       "bedrooms": 6,
//       "bathrooms": 5,
//       "sqft": 5000
//     }
//   ]

const listingData = [{
    "listingId": "1",
    "name":"listing 1",
    "image": image.detailimg,
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
      "name": "John Doe",
      "verified": true,
      "phone": "+1234567890"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "2",
    "name":"listing 2",
    "image": image.detailimg,
    "address": "456 Elm St, City, Country",
    "price": 190787000,
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
      "name": "Jane Smith",
      "verified": true,
      "phone": "+1098765432"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "3",
    "name":"listing 3",
    "image": image.detailimg,
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
      "name": "Emily Brown",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "4",
    "name":"listing 4",
    "image": image.detailimg,
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
      "name": "Michael Johnson",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "5",
    "name":"listing 5",
    "image": image.detailimg,
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
      "name": "Sophia Lee",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "6",
    "name":"listing 6",
    "image": image.detailimg,
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
      "name": "David Wilson",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "7",
    "name":"listing 7",
    "image": image.detailimg,
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
      "name": "Emma Johnson",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "8",
    "name":"listing 8",
    "image": image.detailimg,
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
      "name": "Olivia Brown",
      "verified": true,
      "phone": "+9988776655"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "9",
    "name":"listing 9",
    "image": image.detailimg,
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
      "name": "William Wilson",
      "verified": true,
      "phone": "+1122334455"
    },
    "listedFor": "sell"
  },
  {
    "listingId": "0",
    "name":"listing 0",
    "image": image.detailimg,
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
      "name": "Ethan Lee",
      "verified": true,
      "phone": "+9988776655"
    },
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

const rooms = [
  {
    "house_id": 1,
    "room_id": 1
  }
]

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
]

export {listingData, categMapData, roomData, notificationData, developerData}
  