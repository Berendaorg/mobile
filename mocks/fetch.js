import {
   developerData,
   listingData,
   locationData
 } from '../data';
 import axios from 'axios';
 import MockAdapter from 'axios-mock-adapter';

let fetch = require('node-fetch');

export const URL = 'https://fake-api.example.com/api/v1/';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: URL,
});

const mock = new MockAdapter(axiosInstance, { delayResponse: 500 }); // You can set a delay for the response

mock.onGet('/developers').reply(200, {
    data: developerData,
    ok: true,
});

// const methods = {
//     GET: 'GET' || 'get',
//     POST: 'POST' || 'post',
//     PUT: 'PUT' || 'put',
//     DELETE: 'DELETE' || 'delete',
//   };

export const wait = 0


// fetch = async ({url, method, data, params, headers }) => {
//   console.log({
//       url,
//       method:method,
//       params:options?.params
//   })
//     // You can inspect the URL or options to return different mocks based on the request
//   switch (true) {
//     case url==(`${URL}users/me`):
//       switch (options?.method) {
//         case methods.GET:
//           return {
//             data: {
//               firstName:"Sam",
//               lastName:" Altman",
//               email:"sA@gmail.com",
//               phoneNumber:"12345678",
//             },
//             ok: true,
//           };
//         case methods.PUT:
//           return {
//             data: {
//               firstName:"",
//               lastName:"",
//               email:"",
//               phoneNumber:"",
//             },
//             ok: true,
//           };
//         default:
//           return {
//             data: 'mocked users data',
//             ok: true,
//           };
//       }
//     case url==(`${URL}users/logout`):
//       switch (options?.method) {
//         case methods.GET:
//           return {
//             data: {},
//             ok: true,
//           };
//         default:
//           return {
//             data: 'mocked logout',
//             ok: true,
//           };
//       }
//     case url==(`${URL}developers`):
//       switch (method) {
//         case method.GET:
//           if (params) {
//             return {
//                 data: developerData[+params.id],
//                 ok: true,
//             }
//           } 
//           else {
//             return {
//               data: developerData,
//               ok: true,
//             };
//           }
//           break;
//         default:
//           return {
//             data: 'mocked developers data',
//             ok: true,
//           };
//       }
//     case url==(`${URL}listings`):
//       switch (method) {
//         case methods.GET:
//           if (params){
//             return {
//               data: listingData[+params.id],
//               ok: true,
//             }
//           }
//           else {
//             return {
//               data: listingData,
//               ok: true,
//             }
//           }
//           default:
//             return {
//               data: 'mocked listings data',
//               ok: true,
//             }
//       }
//     case url==(`${URL}listings/saved`):
//       switch (method){
//           case methods.GET:
//               console.log('get listing')
//               return true
//           case methods.POST:
//             if (params){
//               console.log(`adding to saved listing with id ${params.id}`)
//               const listingIndex = listingData.findIndex(listing => listing.id == +params.id);
//               if (listingIndex !== -1) {
//                 listingData[listingIndex].saved = !listingData[listingIndex].saved;
//                 console.log({ saved: listingData[listingIndex].saved });
//               }
//                 return id
//             }
//             else {
//               return id
//             }
//           case methods.DELETE:
//             if (params){
//               console.log(`Delete listing with id ${params.id}`)
//               return {
//                 data: true,
//                 ok:true
//               }
//             }
//             else {
//               return {
//                 data:false,
//                 ok:true
//               }
//             }
//     case url==(`${URL}listings/search`):
//         switch (method){
//             case methods.GET:
//                 console.log('search listing')
//                 return {
//                     data: ["Arada","Ayat","Noah"]
//                 }
//       }
//     case url==(`${URL}notifications`):
//       switch (method) {
//       case methods.GET:
//               return {
//               data: 'mocked notifications data',
//               ok: true,
//               };
//       case methods.DELETE:
//               return {
//               data: 'mocked notification deleted',
//               ok: true,
//               };
//       default:
//         return {
//           data: 'mocked notifications data',
//           ok: true,
//       };
//       }
//       }
//     case url==(`${URL}locations`):
//       switch (method) {
//         case methods.GET:
//           if (params) {
//             return {
//                 data: locationData[+params.id],
//                 ok: true,
//             }
//           } 
//           else {
//             return {
//               data: locationData,
//               ok: true,
//             };
//           }
//         default:
//           return {
//             data: 'mocked location data',
//             ok: true,
//           };
//       }
//   }
//  }
export { fetch, axiosInstance }