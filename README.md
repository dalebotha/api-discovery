
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
                "GET": {
                    "returns": "All Collections",
                    "Format": "JSON"
                }
            ]
        },
        "api/collection/:id": {
            "methods": [
                "GET": {
                    "returns": "A specific deck",
                    "format": "JSON"
                },
                "POST": {
                    "returns": "the newly created deck",
                    "format": "JSON",
                    "authorize": [
                        "who": "Admin Name",
                        "method": "Header"
                    ]
                },
                "PUT": {},
                "DELETE": {}
            ]
        }
    ]
}
```