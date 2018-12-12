# James-Bond-Film-Fighter

#### GET - "/films/random"

To start the game and generate two random films

go to url "/films/random"

```JSON
[
    {
        "name": "",
        "image": "",
        "date": ""
    },
    {
        "name": "",
        "image": "",
        "date": ""
    }
]

```

#### POST - "/films" (POST Request)

To add the two films and selected film to the Database.

make a POST request to "/films".

The request takes an object with an array of objects (PLAYED) and a JSON object (WINS) (see below for example) 

[] = input your own data.
```JSON
{
    "played": [
        {
            "name": "",
            "image": "",
            "date": ""
        },
        {
            "name": "",
            "image": "",
            "date": ""
        }
    ],
    
    "won": {
        "name": "",
        "image": "",
        "date": ""
    }
}
```


#### GET - "/films" 

This will display top 10 films selected by all users.

 
 ```JSON
 [
     {
         "name": "",
         "image": "",
         "date": ""
     },
     ...
 ]
 
 ```
