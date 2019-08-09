
# An API for API Discovery 

This is specification for a simple API to an API.
It starts with a api.txt file in the root.

This is my first real attempt at something I would like to see built and pushed to Github.

## API end points for API discovery

API discovery file giving the only discovery API end-point:  
/api.txt
```
/api/disc
```
## API Discovery End-points
* GET /api/disc
* GET /api/disc/:ver

* POST /api/disc/:ver    <dev>
* PUT /api/disc/:ver     <dev>
* DELETE /api/disc/:ver  <dev>


returns JSON Object:
```javascript

{
    "api-name": "<api-name>",
    "version": 0.1,
    "end-points": [
        "api/collection" : {
            "methods": [
                "get": {
                    "response": "collection",
                    "format": "json",
                    "example": "{'key':'value'}"
                }
            ]
        },
        "api/collection/:id": {
            "methods": [
                "get": {
                    "request": {
                        "params": {
                            "name":"id",
                            "format":"ObjectId",
                            "example": 507f1f77bcf86cd799439011
                        }
                    },
                    "response": {
                        ""
                        "type": "resource",
                        "format": "json",
                        "example":"{key:value}"
                    },   
                },
                "post": {
                    "request": {
                        "params": {
                            "name":"id",
                            "format":"ObjectId",
                            "example": 507f1f77bcf86cd799439011
                        },
                        "type": "resource",
                        "format": "json",
                        "example":"{'key':'value'}"
                        "authorize": {
                            "name": "user",
                            "method": "http request header",
                            "format": "'auth-key':value",
                            "example":"{'auth-key':507f191e810c19729de860ea}"
                        }
                    },
                    "response": {
                        "type": "resource",
                        "format": "json",
                        "example":"{'key':'value'}"
                    }
                },
                "put": {},
                "delete": {}
            ]
        }
    ]
}
```