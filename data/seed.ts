export const pilotCarwash = {
  id: "out-of-nature-carwash",
  name: "Out of Nature Carwash",
  tagline: "Clean cars. Fresh shine. Local service.",
  status: "Verified Pilot",
  address: "Erf 2255 Stockholm Street, Windhoek",
  phone: "081 336 9016",
  mapsUrl: "https://maps.app.goo.gl/Bj4SVA4sEc9PSLW79",
  city: "Windhoek",
  region: "Khomas",
  currentQueue: 3,
  availableBays: 1,
  estimatedWaitMinutes: 35,
  paymentMethods: ["Cash", "POS", "Digital payments coming soon"],
  services: [
    {
      category: "SUV",
      prices: {
        "Denim Wash": 90,
        Outside: 50,
        Inside: 40,
        Engine: 30,
        "Under Wash": 30,
      },
    },
    {
      category: "Single Cab",
      prices: {
        "Denim Wash": 80,
        Outside: 50,
        Inside: 30,
        Engine: 30,
        "Under Wash": 30,
      },
    },
    {
      category: "Double Cab",
      prices: {
        "Denim Wash": 90,
        Outside: 50,
        Inside: 40,
        Engine: 50,
        "Under Wash": 30,
      },
    },
    {
      category: "Sedan",
      prices: {
        "Denim Wash": 70,
        Outside: 40,
        Inside: 30,
        Engine: 30,
        "Under Wash": 30,
      },
    },
    {
      category: "Mini Truck",
      prices: {
        "Denim Wash": 100,
        Outside: 60,
        Inside: 30,
        Engine: 30,
        "Under Wash": 30,
      },
    },
    {
      category: "Extras",
      prices: {
        Mats: 150,
        "Car Seats": 350,
      },
    },
  ],
};