## BOOKINGS
These are the endpoints for managing bookings.

## POST /planningforms
http://localhost:3000/planningforms

Creates a new planning form.
``` json
{
    "id": 3,
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@example.com",
    "phone_number": "555-555-5555",
    "country": "United States",
    "travel_period": "June 2023",
    "no_of_travellers": 3,
    "additional_info": "Special dietary needs",
    "no_of_adults": 1,
    "no_of_children": 1,  //this always defaults to zero if no value is pased
    "no_of_small_children": 1, //this always defaults to zero if no value is pased
    "bookable_type": "Safari", //the name of the model your booking for either Safari, RouteDuration ,DayTrip, CulturalTrip
    "bookable_id": 2, //THis can either be a safari id or a route durations id or day trips id or cultural ids 
}
```
On succesful post response 
  ``` json
  {
      "message": "Booking was successful."
  }
  ```
On failed post response
 ``` json
{
    "errors": [
        "Email must be a valid email address",
        "No of travellers must be at least 1"
    ]
}
  ```
## PLANNING FORMS
These are the endpoints for managing planning forms.

### GET /planningforms
http://localhost:3000/planningforms

Returns a list of all planning forms.

### GET /planningforms/:id
http://localhost:3000/planningforms/1

Returns a single planning form.

### POST /planningforms
http://localhost:3000/planningforms

Creates a new planning form.
``` json
{
  "adventure": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number": "string",
  "country_or_residence": "string",
  "tour_duration_in_days": "string",
  "budget": "string",
  "when_to_travel": "string",
  "how_many_travelers": "string",
  "no_of_adults": "string",
  "no_of_children": "string"
}
```
### PATCH /planningforms/:id
http://localhost:3000/planningforms/1

Updates a single planning form.
``` json
{
  "adventure": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number": "string",
  "country_or_residence": "string",
  "tour_duration_in_days": "string",
  "budget": "string",
  "when_to_travel": "string",
  "how_many_travelers": "string",
  "no_of_adults": "string",
  "no_of_children": "string",
  "extra_info":"string"
}
```
### DELETE /planningforms/:id
http://localhost:3000/planningforms/1

Deletes a single planning form.

## ADVENTURES

These are the adventures that lauwo offers.

### GET /adventures
http://localhost:3000/adventures
Returns a list of all adventures.

### GET /adventures/:id
http://localhost:3000/adventures/1
Returns a single adventure.

### POST /adventures
http://localhost:3000/adventures
Creates a new adventure.
``` json:
{
  "name": "string"
}
```

### PATCH /adventures/:id
http://localhost:3000/adventures/1
Updates a single adventure.
``` json:
{
  "name": "string"
}
```

### DELETE /adventures/:id
http://localhost:3000/adventures/1
Deletes a single adventure.

## CULTURAL TOURS 

These are the cultural tours that lauwo offers.

### GET /cultural_tours
http://localhost:3000/cultural_tours
Returns a list of all cultural tours.

### GET /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Returns a single cultural tour.

### POST /cultural_tours
http://localhost:3000/cultural_tours
Creates a new cultural tour.
``` json
{
  "adventure_id": "integer",
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "location": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}
```

### PATCH /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Updates a single cultural tour.
``` json
{
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "location": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}
```

### DELETE /cultural_tours/:id
http://localhost:3000/cultural_tours/1
Deletes a single cultural tour.

## DAY TRIPS

These are the day trips that lauwo offers.

### GET /day_trips
http://localhost:3000/day_trips
Returns a list of all day trips.

### GET /day_trips/:id
http://localhost:3000/day_trips/1
Returns a single day trip.

### POST /day_trips
http://localhost:3000/day_trips
Creates a new day trip.
``` json
{
  "adventure_id": "integer",
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}
```

### PATCH /day_trips/:id
http://localhost:3000/day_trips/1
Updates a single day trip.
``` json
{
  "name": "string",
  "description": "text",
  "price": "string",
  "image_url": "string",
  "itinerary": "text",
  "inclusions": "text",
  "exclusions": "text"
}
```

### DELETE /day_trips/:id
http://localhost:3000/day_trips/1
Deletes a single day trip.

## BLOGS

These are the blogs that lauwo writes.

### GET /blogs
http://localhost:3000/blogs
Returns a list of all blogs.

### GET /blogs/:id
http://localhost:3000/blogs/1
Returns a single blog.

### POST /blogs
http://localhost:3000/blogs
Creates a new blog.
``` json
{
  "title": "string",
  "content": "text",
  "image_url": "string",
  "author": "string"
}
```

### PATCH /blogs/:id
http://localhost:3000/blogs/1
Updates a single blog.
``` json:
{
  "title": "string",
  "content": "text",
  "image_url": "string",
  "author": "string"
}
```

### DELETE /blogs/:id
http://localhost:3000/blogs/1
Deletes a single blog.

## INQUIRIES 

These are the inquiries that lauwo receives.

### GET /inquiries
http://localhost:3000/inquiries
Returns a list of all inquiries.

### GET /inquiries/:id
http://localhost:3000/inquiries/1
Returns a single inquiry.

### POST /inquiries
http://localhost:3000/inquiries
Creates a new inquiry.
``` json:
{
  "name": "string",
  "email": "string",
  "message": "text"
}
```

### DELETE /inquiries/:id
http://localhost:3000/inquiries/1
Deletes a single inquiry.



## MOUNTAINS
### GET /mountains
http://localhost:3000/mountains
Returns a list of all mountains.

### GET /mountains/:id
http://localhost:3000/mountains/1
Returns a single mountain.

### POST /mountains
http://localhost:3000/mountains
Creates a new mountain.
``` json:
{
"mountain_name": "string",
"description": "text",
"overview": "string",
"adventure_id": "integer"
}
```

### PATCH /mountains/:id
http://localhost:3000/mountains/1
Updates a single mountain.
``` json:
{
"mountain_name": "string",
"description": "text",
"overview": "string",
"adventure_id": "integer"
}
```

### DELETE /mountains/:id
http://localhost:3000/mountains/1
Deletes a single mountain.

## ROUTES
### GET /mountains/:id/routes
http://localhost:3000/mountains/1/routes
Returns a list of all routes for a specific mountain.
### GET /routes/:id/route_durations
http://localhost:3000/routes/1/route_durations
Returns a list of all route durations for a specific route.
 
### GET /routes
http://localhost:3000/routes
Returns a list of all routes.

### GET /routes/:id
http://localhost:3000/routes/1
Returns a single route.

### POST /routes
http://localhost:3000/routes
Creates a new route.
``` json:
{
"route_name": "string",
"mountain_id": "integer",
"description": "text",
"image_URL": "string"
}
```
### PATCH /routes/:id
http://localhost:3000/routes/1
Updates a single route.
``` json:
{
"route_name": "string",
"mountain_id": "integer",
"description": "text",
"image_URL": "string"
}
```

### DELETE /routes/:id
http://localhost:3000/routes/1
Deletes a single route.

## ROUTE DURATIONS
### GET /route_durations
http://localhost:3000/route_durations
Returns a list of all route durations.

### GET /route_durations/:id
http://localhost:3000/route_durations/1
Returns a single route duration.
### GET /route_durations/:id/itineries
http://localhost:3000/route_durations/1/itineries
Returns a list of all itineries for a given route duration.


### POST /route_durations
http://localhost:3000/route_durations
Creates a new route duration.
``` json:
{
"route_id": "integer",
"title": "string",
"duration_days": "integer",
"standard_price": "integer",
"premium_price": "integer",
"standard_inclusive": "text",
"standard_exclusive": "text",
"premium_inclusive": "text",
"premium_exclusive": "text"
}
```

### PATCH /route_durations/:id
http://localhost:3000/route_durations/1
Updates a single route duration.
``` json:
{
"route_id": "integer",
"title": "string",
"duration_days": "integer",
"standard_price": "integer",
"premium_price": "integer",
"standard_inclusive": "text",
"standard_exclusive": "text",
"premium_inclusive": "text",
"premium_exclusive": "text"
}
```

### DELETE /route_durations/:id
http://localhost:3000/route_durations/1
Deletes a single route duration.

## ITINERARIES
### GET /itineries
http://localhost:3000/itineries
Returns a list of all itineries.

### GET /itineries/:id
http://localhost:3000/itineries/1
Returns a single itinerary.

### POST /itineries
 Creates a new itinery.
``` json:
{
"route_duration_id": "integer",
"day_no": "string",
"title": "string",
"description": "text",
"hiking_time": "string",
"distance": "string",
"max_altitude": "string",
"vegatation": "string",
"meals": "string",
"accomodation": "string"
}
```

### PATCH /itineries/:id
http://localhost:3000/itineries/1
Updates a single itinery.
``` json:
{
"route_duration_id": "integer",
"day_no": "string",
"title": "string",
"description": "text",
"hiking_time": "string",
"distance": "string",
"max_altitude": "string",
"vegatation": "string",
"meals": "string",
"accomodation": "string"
}
```

### DELETE /itineries/:id
http://localhost:3000/itineries/1
Deletes a single itinery.

ns a single itinerary for a given route duration.

### POST /route_durations/:id/itineries
http://localhost:3000/route_durations/1/itineries
Creates a new itinerary for a given route duration.
``` json:
{
"day_no": "string",
"title": "string",
"description": "text",
"hiking_time": "string",
"distance": "string",
"max_altitude": "string",
"vegatation": "string",
"meals": "string",
"accomodation": "string"
}
```

### PATCH /route_durations/:id/itineries/:itinerary_id
http://localhost:3000/route_durations/1/itineries/1
Updates a single itinerary for a given route duration.
``` json:
{
"day_no": "string",
"title": "string",
"description": "text",
"hiking_time": "string",
"distance": "string",
"max_altitude": "string",
"vegatation": "string",
"meals": "string",
"accomodation": "string"
}
```

### DELETE /route_durations/:id/itineries/:itinerary_id
http://localhost:3000/route_durations/1/itineries/1
Deletes a single itinerary for a given route duration.

## BOOKINGS
These are the API endpoints for managing bookings.

### GET /bookings
Returns a list of all bookings.

### GET /bookings/:id
Returns a single booking by ID.

### POST /bookings
Creates a new booking.
JSON request body format:
``` json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number": "string",
  "country": "string",
  "travel_period": "string",
  "no_of_travellers": "string",
  "additional_info": "string",
  "route_duration_id": "integer"
}
```
### PATCH /bookings/:id
Updates a single booking by ID.
JSON request body format:
``` json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number": "string",
  "country": "string",
  "travel_period": "string",
  "no_of_travellers": "string",
  "additional_info": "string",
  "route_duration_id": "integer"
}
```
### DELETE /bookings/:id
Deletes a single booking by ID.

## ADMIN

### Sign Up
POST /admins
``` json
{
    "admin":{
        "email": "string",
        "password": "string"
    }
}
```
Response: 200 OK
``` json
{
    "message": "Signed up successfully."
}
```

### Sign In
POST /admins/sign_in
``` json
{
    "admin":{
        "email": "string",
        "password": "string"
    }
}
```
Response: 200 OK
``` json
{
    "message": "Logged in successfully."
}
```
Check the response headers for the authentication token.
`Authorization Bearer <token>`

### Sign Out
DELETE /admins/sign_out
Include the authentication token in the request headers.
Response: 200 OK
``` json
{
    "message": "Logged out successfully."
}
```

