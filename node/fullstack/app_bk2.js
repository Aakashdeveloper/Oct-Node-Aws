var express = require('express');
var app = express();
var port = 7600;
var cityRouter = express.Router();
var hotelRouter = express.Router();

var location = [
    {
      "_id": 1,
      "city_name": "Delhi",
      "city": 1,
      "country_name": "India"
    },
    {
      "_id": 3,
      "city_name": "Pune",
      "city": 3,
      "country_name": "India"
    },
    {
      "_id": 2,
      "city_name": "Mumbai",
      "city": 2,
      "country_name": "India"
    },
    {
      "_id": 4,
      "city_name": "Chandigarh",
      "city": 4,
      "country_name": "India"
    },
    {
      "_id": 5,
      "city_name": "Goa",
      "city": 5,
      "country_name": "India"
    },
    {
      "_id": 6,
      "city_name": "Manali",
      "city": 6,
      "country_name": "India"
    }
  ]

var hotels = [
        {
          "_id": "4",
          "name": "The Ashtan Sarovar Portico",
          "city_name": "New Delhi",
          "city": "1",
          "locality": "Greenpark, New Delhi",
          "thumb": "https://i.ibb.co/TbVsznT/sarovar.jpg",
          "cost": 8399,
          "address": "C2, Green park Extension, Green Park Extn, Behind Gurudwara, Nr Greenpark Metro Station, New Delhi",
          "type": [
            {
              "roomtype": "3",
              "name": "Budget Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            }
          ],
          "tripType": [
            {
              "trip": "4",
              "name": "Luxury"
            },
            {
              "trip": "3",
              "name": "Travel"
            }
          ]
        },
        {
          "_id": "9",
          "name": "Hotel Sayaji",
          "city_name": "Pune",
          "city": "3",
          "locality": "Wakad, Pune",
          "thumb": "https://i.ibb.co/6FLGh3D/Syaji.jpg",
          "cost": 3479,
          "address": "135/136, Mumbai-Bangalore Bypass Highway, Wakad, Pune",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "16",
          "name": "JW Marriott Chandigarh",
          "city_name": "Chandigarh",
          "city": "4",
          "locality": "Dakshin Marg, Chandigarh",
          "thumb": "https://i.ibb.co/9GCkYN1/jw.jpg",
          "cost": 6599,
          "address": "Plot no 6, Sector 35-B, Dakshin Marg",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            }
          ],
          "tripType": [
            {
              "trip": "4",
              "name": "Luxury"
            },
            {
              "trip": "3",
              "name": "Travel"
            }
          ]
        },
        {
          "_id": "24",
          "name": "Sterling Manali",
          "city_name": "Manali",
          "city": "6",
          "locality": "Prini, Manali",
          "thumb": "https://i.ibb.co/CH83bNK/sterling.jpg",
          "cost": 6599,
          "address": "Manali-Naggar Highway, left bank road, Prini, Manali",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "4",
              "name": "Luxury"
            },
            {
              "trip": "3",
              "name": "Travel"
            }
          ]
        },
        {
          "_id": "8",
          "name": "Trident Nariman Point",
          "city_name": "Mumbai",
          "city": "2",
          "locality": "Nariman Point, Mumbai",
          "thumb": "https://i.ibb.co/p3Dhc3q/trident.jpg",
          "cost": 4000,
          "address": "CR 2 Nariman Point, Netaji Subhash Chandra Bose Road",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "10",
          "name": "Amanora The Fern Hotels",
          "city_name": "Pune",
          "city": "3",
          "locality": "Magarpatta, Pune",
          "thumb": "https://i.ibb.co/y0mPTXx/amanora.jpg",
          "cost": 3455,
          "address": "177/1/A,Sadesatara Nali,Amanora Park Town, Magarpatta Road, Hadapsar.pune",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "11",
          "name": "The Orchid Hotel",
          "city_name": "Pune",
          "city": "3",
          "locality": "Hinjewadi, Pune",
          "thumb": "https://i.ibb.co/51wD5h8/orchid.jpg",
          "cost": 5170,
          "address": "Chhatrapati Shivaji Sports Complex, Pune-Bangalore Highway, Hinjewadi, Pune",
          "type": [
            {
              "roomtype": "3",
              "name": "Budget Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "4",
              "name": "Luxury"
            },
            {
              "trip": "3",
              "name": "Travel"
            }
          ]
        },
        {
          "_id": "15",
          "name": "Ramada Plaza",
          "city_name": "Chandigarh",
          "city": "4",
          "locality": "Zirakpur, Chandigarh",
          "thumb": "https://i.ibb.co/j8Wc9Dt/ramada.jpg",
          "cost": 3455,
          "address": "NH 21 , Chandigarh Delhi National Highway, Zirakpur",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        },
        {
          "_id": "5",
          "name": "The Taj Mahal Palace",
          "city_name": "Mumbai",
          "city": "2",
          "locality": "Apollo Bunder, Mumbai",
          "thumb": "https://i.ibb.co/W0z1JCF/tajmahal.jpg",
          "cost": 16500,
          "address": "Apollo Bunder, Mumbai, Maharashtra",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "4",
              "name": "Semi Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            }
          ],
          "tripType": [
            {
              "trip": "4",
              "name": "Luxury"
            },
            {
              "trip": "3",
              "name": "Travel"
            }
          ]
        },
        {
          "_id": "18",
          "name": "DoubleTree by Hilton",
          "city_name": "Goa",
          "city": "5",
          "locality": "Tiswadi, Goa",
          "thumb": "https://i.ibb.co/WpwC6m5/hilton.jpg",
          "cost": 2419,
          "address": "Kadamba Plateau, Panjim Old Goa Bypass Road, Velha Goa, Panaji,Tiswadi Goa",
          "type": [
            {
              "roomtype": "1",
              "name": "Deluxe Room"
            },
            {
              "roomtype": "2",
              "name": "Premiere Rooms"
            },
            {
              "roomtype": "3",
              "name": "Budget Room"
            }
          ],
          "tripType": [
            {
              "trip": "1",
              "name": "Business"
            },
            {
              "trip": "2",
              "name": "Holiday"
            }
          ]
        }
]

app.get('/',function(req,res){
    res.send("<h1>Welcome with Express</h1>")
});


cityRouter.route('/')
    .get(function(req,res){
        res.send(location)
    })

cityRouter.route('/details')
    .get(function(req,res){
        res.send('City Details')
    })

hotelRouter.route('/')
    .get(function(req,res){
        res.send(hotels)
    })

hotelRouter.route('/details')
    .get(function(req,res){
        res.send('Hotel Details')
    })

app.use('/city',cityRouter);
app.use('/hotel',hotelRouter)

app.listen(port,function(err){
    if(err) throw err
    console.log(`Server is running on port ${port}`)
});