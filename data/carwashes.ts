export type ServiceItem = {
  name: string;
  price: string;
  note?: string;
  imageUrl?: string;
};

export type ServiceCategory = {
  category: string;
  description: string;
  items: ServiceItem[];
};

export type WasherProfile = {
  alias: string;
  role: string;
  specialties: string[];
  privacyNote: string;
};

export type Carwash = {
  slug: string;
  name: string;
  partnerLabel: string;
  isPrimaryPartner: boolean;
  status: string;
  verification: string;
  address: string;
  phone: string;
  mapsUrl: string;
  instagramUrl?: string;
  city: string;
  region: string;
  operatingHours: string;
  rating: number;
  reviews: number;
  ratingNote: string;
  currentQueue: number;
  availableBays: number;
  estimatedWaitMinutes: number;
  lastQueueUpdated: string;
  description: string;
  tags: string[];
  paymentMethods: string[];
  services: ServiceCategory[];
  menus: ServiceCategory[];
  washers: WasherProfile[];
};

export const carWashes: Carwash[] = [
  {
    slug: "out-of-nature",
    name: "Out of Nature Carwash",
    partnerLabel: "Primary Partner",
    isPrimaryPartner: true,
    status: "Verified Pilot",
    verification: "First WashMeNow+ pilot partner",
    address: "Erf 2255 Stockholm Street, Windhoek",
    phone: "081 336 9016",
    mapsUrl: "https://maps.app.goo.gl/Bj4SVA4sEc9PSLW79",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Open today • Confirm with owner",
    rating: 4.9,
    reviews: 28,
    ratingNote: "MVP demo score based on pilot positioning",
    currentQueue: 3,
    availableBays: 1,
    estimatedWaitMinutes: 35,
    lastQueueUpdated: "Updated 7 minutes ago",
    description:
      "Out of Nature Carwash is the first/primary WashMeNow+ pilot partner. This profile demonstrates verified listing, queue visibility, service pricing, booking requests, and future POS/payment tracking.",
    tags: ["Primary Partner", "Verified", "SUV", "Mats", "Car Seats", "POS", "Pilot"],
    paymentMethods: ["Cash", "POS", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Pricing captured from the pilot service board. Confirm final pricing with the owner before public launch.",
        items: [
          { name: "SUV • Denim Wash", price: "N$90" },
          { name: "SUV • Outside", price: "N$50" },
          { name: "SUV • Inside", price: "N$40" },
          { name: "SUV • Engine", price: "N$30" },
          { name: "SUV • Under Wash", price: "N$30" },
          { name: "Single Cab • Denim Wash", price: "N$80" },
          { name: "Single Cab • Outside", price: "N$50" },
          { name: "Single Cab • Inside", price: "N$30" },
          { name: "Double Cab • Denim Wash", price: "N$90" },
          { name: "Double Cab • Engine", price: "N$50" },
          { name: "Sedan • Denim Wash", price: "N$70" },
          { name: "Mini Truck • Denim Wash", price: "N$100" },
        ],
      },
      {
        category: "Extras",
        description: "Add-on cleaning services available from the pilot board.",
        items: [
          { name: "Mats", price: "N$150" },
          { name: "Car Seats", price: "N$350" },
        ],
      },
    ],
    menus: [
      {
        category: "Namibian Beverages",
        description:
          "Dummy menu data for the owner demo. Final products, prices and alcohol licensing must be confirmed by the carwash owner.",
        items: [
          {
            name: "Local Lager Beer",
            price: "N$25",
            note: "18+ only • Placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Draught Beer",
            price: "N$30",
            note: "18+ only • Placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Soft Drink",
            price: "N$18",
            note: "Coke/Fanta/Sprite-style placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Bottled Water",
            price: "N$12",
            note: "Still water placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Fruit Juice",
            price: "N$20",
            note: "Orange/apple/mixed fruit placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Whisky / Brandy Tot",
            price: "N$25",
            note: "18+ only • Placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
          },
        ],
      },
      {
        category: "Home-Cooked Meals",
        description:
          "Dummy food menu for carwash waiting-area customers and future POS ordering.",
        items: [
          {
            name: "Kapana Plate",
            price: "N$45",
            note: "Meat, salsa and pap-style placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Chicken Plate",
            price: "N$55",
            note: "Chicken, pap/rice and salad placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Beef Stew & Pap",
            price: "N$60",
            note: "Home-cooked meal placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Vetkoek / Fat Cakes",
            price: "N$10",
            note: "Per piece placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Chips / Fries",
            price: "N$25",
            note: "Snack item placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
          },
          {
            name: "Mobile Chef Event Package",
            price: "N$1,500",
            note: "For special carwash events • Placeholder",
            imageUrl:
              "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
          },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-ON-01",
        role: "Lead washer",
        specialties: ["SUV wash", "Interior care", "Queue updates"],
        privacyNote: "Alias shown publicly. Full identity remains private to the owner/admin team.",
      },
      {
        alias: "Washer WMN-ON-02",
        role: "Detail assistant",
        specialties: ["Wheels", "Mats", "Exterior finish"],
        privacyNote: "Alias shown publicly. Full identity remains private to the owner/admin team.",
      },
    ],
  },
  {
    slug: "rand-street-carwash",
    name: "Rand Street Carwash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "00000, Shoveller St, Windhoek",
    phone: "0853990746",
    mapsUrl: "https://maps.app.goo.gl/YbEL7JkLNdNZERte6",
    instagramUrl: "https://instagram.com/rand_street_carwash?utm_medium=copy_link",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.8,
    reviews: 22,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 2,
    availableBays: 2,
    estimatedWaitMinutes: 20,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "Rand Street Carwash listing preview showing how social-first carwashes can be discovered, verified and converted into owner-managed profiles.",
    tags: ["Instagram", "Discovery", "Car Wash", "Events", "Windhoek"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative listing categories. Prices must be confirmed with the owner during onboarding.",
        items: [
          { name: "Small vehicle wash", price: "From N$50", note: "Placeholder" },
          { name: "SUV / Double cab wash", price: "From N$80", note: "Placeholder" },
          { name: "Interior cleaning", price: "From N$30", note: "Placeholder" },
          { name: "Engine wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Potential upsell services to confirm.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Car seats", price: "On request" },
          { name: "Event carwash activation", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Kitchen / Bar / Event Menu",
        description: "Social/event menu placeholder for future campaign promotions.",
        items: [
          { name: "Cold drinks", price: "N$15–N$30", note: "Placeholder" },
          { name: "Braai / food pop-up", price: "On request", note: "Event-based" },
          { name: "Mobile chef partner", price: "On request", note: "Optional partner service" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-RS-01",
        role: "Washer",
        specialties: ["Exterior wash", "Customer handover"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
  {
    slug: "bix-carwash",
    name: "Bix Carwash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "F3C2+7HR, Windhoek",
    phone: "0812458561",
    mapsUrl: "https://maps.app.goo.gl/PtECRCtEy5vJzTJ99",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.7,
    reviews: 19,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 4,
    availableBays: 1,
    estimatedWaitMinutes: 45,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "Bix Carwash listing preview for a future verified profile with queue, service pricing, booking and staff privacy controls.",
    tags: ["Car Wash", "Interior", "Exterior", "Queue Preview"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative service categories for MVP discovery.",
        items: [
          { name: "Standard wash", price: "From N$50", note: "Placeholder" },
          { name: "Full wash", price: "From N$80", note: "Placeholder" },
          { name: "Interior vacuum", price: "From N$30", note: "Placeholder" },
          { name: "Engine wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Potential add-ons to confirm with owner.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Sofas / upholstery", price: "On request" },
          { name: "Car seats", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Kitchen / Bar",
        description: "Placeholder for optional menu and POS add-ons.",
        items: [
          { name: "Water / soft drink", price: "N$10–N$25", note: "Placeholder" },
          { name: "Snack items", price: "On request" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-BX-01",
        role: "Washer",
        specialties: ["Wash bay updates", "Exterior wash"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
      {
        alias: "Washer WMN-BX-02",
        role: "Assistant",
        specialties: ["Interior", "Vacuum", "Mats"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
  {
    slug: "city-car-wash",
    name: "City Car Wash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "Garten Street, Windhoek",
    phone: "0812595359",
    mapsUrl: "https://maps.app.goo.gl/iYU2bT5iNpL2v3Z66",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.6,
    reviews: 17,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 1,
    availableBays: 2,
    estimatedWaitMinutes: 15,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "City Car Wash listing preview for central Windhoek discovery, services, queue visibility and customer booking flow.",
    tags: ["Central", "Car Wash", "Quick Wash", "Windhoek"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative services for demo listing.",
        items: [
          { name: "Quick outside wash", price: "From N$40", note: "Placeholder" },
          { name: "Inside + outside wash", price: "From N$70", note: "Placeholder" },
          { name: "SUV wash", price: "From N$90", note: "Placeholder" },
          { name: "Engine wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Add-on items to confirm.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Car seats", price: "On request" },
          { name: "Polish / detailing", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Customer Waiting Area Menu",
        description: "Future owner-managed menu placeholder.",
        items: [
          { name: "Coffee / tea", price: "N$15–N$30", note: "Placeholder" },
          { name: "Cold drink", price: "N$15–N$25", note: "Placeholder" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-CC-01",
        role: "Wash attendant",
        specialties: ["Fast check-in", "Queue updates"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
  {
    slug: "scaras-car-wash",
    name: "Scara's Car Wash",
    partnerLabel: "Discovery Listing",
    isPrimaryPartner: false,
    status: "Listing Preview",
    verification: "Pending platform verification",
    address: "F392+8P9, Windhoek",
    phone: "0812720030",
    mapsUrl: "https://maps.app.goo.gl/fBjqRNE2A6uE3U48A",
    city: "Windhoek",
    region: "Khomas",
    operatingHours: "Hours to be confirmed",
    rating: 4.5,
    reviews: 15,
    ratingNote: "MVP demo score until real reviews are collected",
    currentQueue: 5,
    availableBays: 1,
    estimatedWaitMinutes: 50,
    lastQueueUpdated: "Demo queue • not live yet",
    description:
      "Scara's Car Wash listing preview showing how WashMeNow+ can present verified services, queue status, menus and privacy-safe staff aliases.",
    tags: ["Car Wash", "Queue Preview", "Extras", "Windhoek"],
    paymentMethods: ["Cash", "POS to confirm", "Digital payments coming soon"],
    services: [
      {
        category: "Vehicle Wash",
        description: "Indicative MVP listing services.",
        items: [
          { name: "Standard wash", price: "From N$50", note: "Placeholder" },
          { name: "Full wash", price: "From N$80", note: "Placeholder" },
          { name: "Interior wash", price: "From N$30", note: "Placeholder" },
          { name: "Under wash", price: "From N$30", note: "Placeholder" },
        ],
      },
      {
        category: "Extras",
        description: "Potential upsell services.",
        items: [
          { name: "Mats", price: "On request" },
          { name: "Sofas", price: "On request" },
          { name: "Car seats", price: "On request" },
          { name: "Mobile wash", price: "On request" },
        ],
      },
    ],
    menus: [
      {
        category: "Bar / Kitchen / Mobile Chef",
        description: "Placeholder for future events, promotions and menus.",
        items: [
          { name: "Soft drinks", price: "N$15–N$30", note: "Placeholder" },
          { name: "Food plate", price: "On request", note: "Owner to confirm" },
          { name: "Mobile chef activation", price: "On request", note: "Event-based" },
        ],
      },
    ],
    washers: [
      {
        alias: "Washer WMN-SC-01",
        role: "Wash attendant",
        specialties: ["Exterior", "Interior", "Customer updates"],
        privacyNote: "Public alias only until owner verifies staff profile.",
      },
    ],
  },
];

export function getPrimaryCarwash() {
  return carWashes.find((carwash) => carwash.isPrimaryPartner) ?? carWashes[0];
}

export function getCarwashBySlug(slug: string) {
  return carWashes.find((carwash) => carwash.slug === slug);
}

export function getRecommendedCarwashes(limit = 8) {
  return [...carWashes].sort((a, b) => {
    if (a.isPrimaryPartner && !b.isPrimaryPartner) return -1;
    if (!a.isPrimaryPartner && b.isPrimaryPartner) return 1;
    return b.rating - a.rating;
  }).slice(0, limit);
}

export const platformStats = {
  totalListings: carWashes.length,
  verifiedPilots: carWashes.filter((carwash) => carwash.isPrimaryPartner).length,
  discoveryPreviews: carWashes.filter((carwash) => !carwash.isPrimaryPartner).length,
};
