
# An API for API Discovery 

This is simple boilerplate for a simple API to an API.
It starts with a api.txt file in the root.

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
                    "returns": "collection",
                    "Format": "json"
                }
            ]
        },
        "api/collection/:id": {
            "methods": [
                "get": {
                    "response": "resource",
                    "format": "json"
                },
                "post": {
                    "request": "resource",
                    "response": "resource",
                    "format": "json",
                    "authorize": [
                        {
                        "name": "Admin Name",
                        "method": "header key"
                        }
                    ]
                },
                "put": {},
                "delete": {}
            ]
        }
    ]
}
```