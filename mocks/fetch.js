global.fetch = require('node-fetch');

const methods = {
    GET: 'GET' || 'get',
    POST: 'POST' || 'post',
    PUT: 'PUT' || 'put',
    DELETE: 'DELETE' || 'delete',
  };

const fetch =
 global.fetch = async (url, options) => {
    console.log({
        url,
        method:options.method
    })
    // You can inspect the URL or options to return different mocks based on the request
    const fakeApi = 'https://fake-api.example.com/api/v1/';
    switch (true) {
      case url.includes(`${fakeApi}users`):
        switch (options?.method) {
          case methods.GET:
            return {
              data: 'mocked users data' ,
              ok: true,
            };
          case methods.POST:
            return {
              data: 'mocked user created',
              ok: true,
            };
          case methods.PUT:
            return {
              data: 'mocked user updated',
              ok: true,
            };
          case methods.DELETE:
            return {
              data: 'mocked user deleted',
              ok: true,
            };
          default:
            return {
              data: 'mocked users data',
              ok: true,
            };
        }
      case url.includes(`${fakeApi}developers`):
        switch (options.method) {
          case methods.GET:
            return {
              data: 'mocked developers data',
              ok: true,
            };
          case methods.POST:
            return {
              data: 'mocked developer created',
              ok: true,
            };
          case methods.PUT:
            return {
              data: 'mocked developer updated',
              ok: true,
            };
          case methods.DELETE:
            return {
              data: 'mocked developer deleted',
              ok: true,
            };
          default:
            return {
              data: 'mocked developers data',
              ok: true,
            };
        }
      case url.includes(`${fakeApi}listings`):
        switch (options.method) {
          case methods.GET:
            return {
              data: 'mocked listings data',
              ok: true,
            };
          case methods.POST:
            return {
              data: 'mocked listing created',
              ok: true,
            };
          case methods.PUT:
            return {
              data: 'mocked listing updated',
              ok: true,
            };
          case methods.DELETE:
            return {
              data: 'mocked listing deleted',
              ok: true,
            };
          default:
            return {
              data: 'mocked listings data',
              ok: true,
            };
        }
      case url.includes(`${fakeApi}listings/search`):
        switch (options.method){
            case methods.GET:
                return {
                    
                }
        }
      case url.includes(`${fakeApi}notifications`):
        switch (options.method) {
        case methods.GET:
                return {
                data: 'mocked notifications data',
                ok: true,
                };
        case methods.POST:
                return {
                data: 'mocked notification created',
                ok: true,
                };
        case methods.PUT:
                return {
                data: 'mocked notification updated',
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
}

export { fetch }