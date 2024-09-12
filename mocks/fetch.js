import {
   developerData,
   listingData,
   locationData
 } from '../data';

global.fetch = require('node-fetch');

const methods = {
    GET: 'GET' || 'get',
    POST: 'POST' || 'post',
    PUT: 'PUT' || 'put',
    DELETE: 'DELETE' || 'delete',
  };

export const URL = 'https://fake-api.example.com/api/v1/';

const fetch =
 global.fetch = async (url, options) => {
    console.log({
        url,
        method:options.method,
        params:options?.params
    })
    // You can inspect the URL or options to return different mocks based on the request
    switch (true) {
      case url==(`${URL}users/me`):
        switch (options?.method) {
          case methods.GET:
            return {
              data: {
                firstName:"Sam",
                lastName:" Altman",
                email:"sq@gmail.com",
                phoneNumber:"12345678",
              },
              ok: true,
            };
          case methods.PUT:
            return {
              data: {
                firstName:"",
                lastName:"",
                email:"",
                phoneNumber:"",
              },
              ok: true,
            };
          default:
            return {
              data: 'mocked users data',
              ok: true,
            };
        }
      case url==(`${URL}users/logout`):
        switch (options?.method) {
          case methods.GET:
            return {
              data: {},
              ok: true,
            };
          default:
            return {
              data: 'mocked logout',
              ok: true,
            };
        }
      case url==(`${URL}developers`):
        switch (options.method) {
          case methods.GET:
            if (options.params) {
              return {
                  data: developerData[+options.params.id],
                  ok: true,
              }
            } 
            else {
              return {
                data: developerData,
                ok: true,
              };
            }
            break;
          default:
            return {
              data: 'mocked developers data',
              ok: true,
            };
        }
      case url==(`${URL}listings`):
        switch (options.method) {
          case methods.GET:
            if (options.params){
              return {
                data: listingData[+options.params.id],
                ok: true,
              }
            }
            else {
              return {
                data: listingData,
                ok: true,
              }
            }
        }
          default:
            return {
              data: 'mocked listings data',
              ok: true,
      };
      case url==(`${URL}listings/saved`):
        switch (options.method){
            case methods.GET:
                console.log('get listing')
                return {
                    data: listingData[0],
                    ok: true
                }
            case methods.DELETE:
              if (options.params){
                console.log(`Delete listing with id ${options.params.id}`)
                return {
                  data: true,
                  ok:true
                }
              }
              else {
                return {
                  data:false,
                  ok:true
                }
              }
            case methods.POST:
                  console.log(`Add to saved listing`)
              return {
                    data: true,
                    ok:true
              }
      case url==(`${URL}listings/search`):
          switch (options.method){
              case methods.GET:
                  console.log('search listing')
                  return {
                      data: ["Arada","Ayat","Noah"]
                  }
        }
      case url==(`${URL}notifications`):
        switch (options.method) {
        case methods.GET:
                return {
                data: 'mocked notifications data',
                ok: true,
                };
        case methods.DELETE:
                return {
                data: 'mocked notification deleted',
                ok: true,
                };
        default:
          return {
            data: 'mocked notifications data',
            ok: true,
        };
        }
        }
      case url==(`${URL}locations`):
        switch (options.method) {
          case methods.GET:
            if (options.params) {
              return {
                  data: locationData[+options.params.id],
                  ok: true,
              }
            } 
            else {
              return {
                data: locationData,
                ok: true,
              };
            }
          default:
            return {
              data: 'mocked location data',
              ok: true,
            };
        }
}
 }
export { fetch }