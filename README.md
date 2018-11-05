# Coffee Shop API

Returns coffee shop details based on the hipstercoffee json file.


Install packages
`npm install`

Start server
`npm start`

Get full information JSON
`localhost:4000/`


#### Examples

---

Get shop name
`localhost:4000/shopName`

`"The Coffee Connection"`

---
Get prices
`localhost:4000/prices`

```
[{"Cafe Latte":4.75,"Flat White":4.75,"Cappucino":3.85,"Single Espresso":2.05,"Double Espresso":3.75,"Americano":3.75,"Cortado":4.55,"Tea":3.65,"Choc Mudcake":6.4,"Choc Mousse":8.2,"Affogato":14.8,"Tiramisu":11.4,"Blueberry Muffin":4.05,"Chocolate Chip Muffin":4.05,"Muffin Of The Day":4.55}]
```
---
Get price of an Americano
`localhost:4000/prices/Americano`

`3.75`

---

#### Testing
Uses `Mocha` and `Supertest`

`npm test`
