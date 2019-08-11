
# An API for API Discovery 

This is specification for a simple API to an API.
It starts with a api.txt file in the root.

This is my first real attempt at something I would like to see built and pushed to Github.

## API end points for API discovery

API discovery file giving the only discovery API end-point:  
/api.txt
```
/api/disc
/api/dics/:ver
```
## API Discovery for public end-points
* GET /api/disc
* GET /api/disc/:ver

## API Discovery for private end-points
* POST /api/disc/:ver
* PUT /api/disc/:ver
* DELETE /api/disc/:ver

Public End-points:
```javascript
[
    {  
        "api-name":"API name",
        "version":"1.0",
        "isCurrent":true,
        "end-points":{  
           "api/collection":{  
              "methods":{  
                 "GET":{  
                    "response":"collection",
                    "format":"json",
                    "example":"{'key':'value'}"
                 }
              }
           },
           "api/collection/:id":{  
              "methods":{  
                 "GET":{  
                    "request":{  
                       "params":{  
                          "name":"id",
                          "format":"ObjectId",
                          "example":"507f1f77bcf86cd799439011"
                       }
                    },
                    "response":{  
                       "type":"resource",
                       "format":"json",
                       "example":"{key:value}"
                    }
                 }
              }
           }
        }
    }
]
```

