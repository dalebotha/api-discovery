const api_disc = [
    {  
        "api-name":"API name",
        "version":"1.0",
        "isCurrent":true,
        "end-points":{  
           "api/collection":{  
              "methods":{  
                 "get":{  
                    "response":"collection",
                    "format":"json",
                    "example":"{'key':'value'}"
                 }
              }
           },
           "api/collection/:id":{  
              "methods":{  
                 "get":{  
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
     },
    {
        "api-name": "API name",
        "version": "0.1",
        "isCurrent": false,
        "end-points": {
            "api/collection/" : {
                "methods": {
                    "get": {
                        "response": "collection",
                        "format": "json",
                        "example": "{'key':'value'}"
                    }
                }
            },
            "api/collection/:id": {
                "methods": {
                    "get": {
                        "request": {
                            "params": {
                                "name": "id",
                                "format": "ObjectId",
                                "example": "507f1f77bcf86cd799439011"
                            }
                        },
                        "response": {
                            "type": "resource",
                            "format": "json",
                            "example":"{key:value}"
                        }  
                    }
                }
            }
        }
    }
];

module.exports = api_disc;