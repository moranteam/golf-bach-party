// ============================================================
//  GOLF BACHELOR PARTY — SHARED DESTINATION DATA
//  window.DESTINATIONS  (20 destinations, all fields)
//  window.HUBS / window.HUB_LIST
//  window.getTotal()
//  window.VERDICT_COLORS
// ============================================================

window.DESTINATIONS = [

  // ── 1 ──────────────────────────────────────────────────────
  {
    id:           "central-oregon",
    name:         "Central Oregon",
    photo:        "photos/central-oregon.jpg",
    region:       "Pacific Northwest",
    lat:          43.879,
    lng:          -121.447,
    augHigh:      87,
    sweatScore:   2,
    drama:        8,
    nightlife:    5,
    lodging:      8,
    lodgingTiers: { budget: 120, mid: 220, premium: 450 },
    golf:         9,
    golfPerRound: 145,
    food:         7,
    flights:      { SFO: 180, LAX: 200, JFK: 380, BOS: 420 },
    carts:        false,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Tetherow Golf Club",
      "Pronghorn (Tom Fazio)",
      "Pronghorn (Jack Nicklaus)",
      "Sunriver Meadows",
      "Sunriver Woodlands",
      "Crosswater Club"
    ],
    airport:      "RDM",
    drive:        "20 min from RDM",
    lodgingType:  "Resort / Vacation Rental",
    vibe:         "High-Desert Escape",
    groupNotes:   "Dry heat, zero humidity, world-class resort courses. Sunriver handles big groups easily. Bonus: Bend craft-beer scene for evenings."
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    id:           "coeur-dalene",
    name:         "Coeur d'Alene",
    photo:        "photos/coeur-dalene.jpg",
    region:       "Pacific Northwest",
    lat:          47.677,
    lng:          -116.780,
    augHigh:      85,
    sweatScore:   3,
    drama:        9,
    nightlife:    5,
    lodging:      8,
    lodgingTiers: { budget: 110, mid: 200, premium: 420 },
    golf:         9,
    golfPerRound: 195,
    food:         6,
    flights:      { SFO: 220, LAX: 240, JFK: 400, BOS: 440 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Coeur d'Alene Resort (floating green)",
      "The Golf Club at Black Rock",
      "Circling Raven Golf Club",
      "Avondale Golf Club"
    ],
    airport:      "GEG",
    drive:        "45 min from GEG",
    lodgingType:  "Lake Resort",
    vibe:         "Mountain-Lake Resort",
    groupNotes:   "The floating green is a genuine bucket-list moment — book the boat taxi. Black Rock is dead serious golf. Groups love the lakefront resort base."
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    id:           "traverse-city",
    name:         "Traverse City",
    photo:        "photos/traverse-city.jpg",
    region:       "Great Lakes",
    lat:          44.763,
    lng:          -85.620,
    augHigh:      80,
    sweatScore:   4,
    drama:        8,
    nightlife:    6,
    lodging:      7,
    lodgingTiers: { budget: 100, mid: 180, premium: 380 },
    golf:         8,
    golfPerRound: 110,
    food:         7,
    flights:      { SFO: 350, LAX: 370, JFK: 220, BOS: 200 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Solid Pick",
    courses:      [
      "Arcadia Bluffs (South)",
      "Arcadia Bluffs (Bluffs)",
      "Grand Traverse Resort Spruce",
      "High Pointe Golf Club",
      "Shanty Creek Legends"
    ],
    airport:      "TVC",
    drive:        "15 min from TVC",
    lodgingType:  "Resort / Condo Rental",
    vibe:         "Great-Lakes Charm",
    groupNotes:   "Arcadia Bluffs is one of the most scenic courses in America. Cherry capital + wineries handle the evenings. Best value for East-Coast crews."
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    id:           "whistling-straits",
    name:         "Whistling Straits",
    photo:        "photos/whistling-straits.jpg",
    region:       "Great Lakes",
    lat:          43.847,
    lng:          -87.773,
    augHigh:      78,
    sweatScore:   4,
    drama:        10,
    nightlife:    4,
    lodging:      8,
    lodgingTiers: { budget: 130, mid: 260, premium: 520 },
    golf:         10,
    golfPerRound: 370,
    food:         6,
    flights:      { SFO: 320, LAX: 340, JFK: 250, BOS: 280 },
    carts:        false,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Splurge Pick",
    courses:      [
      "Whistling Straits — Straits Course",
      "Whistling Straits — Irish Course",
      "Blackwolf Run — River Course",
      "Blackwolf Run — Meadow Valleys"
    ],
    airport:      "MKE",
    drive:        "1 hr 30 min from MKE",
    lodgingType:  "Destination Resort",
    vibe:         "Ryder-Cup Bucket List",
    groupNotes:   "Walking-only Ryder Cup host. Sheep roam the course. You will feel like a tour pro. Budget an extra night — no one wants to leave after just one round."
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    id:           "kelowna",
    name:         "Kelowna",
    photo:        "photos/kelowna.jpg",
    region:       "Canada",
    lat:          49.888,
    lng:          -119.496,
    augHigh:      90,
    sweatScore:   3,
    drama:        9,
    nightlife:    6,
    lodging:      7,
    lodgingTiers: { budget: 110, mid: 200, premium: 400 },
    golf:         8,
    golfPerRound: 120,
    food:         7,
    flights:      { SFO: 250, LAX: 280, JFK: 450, BOS: 490 },
    carts:        true,
    passport:     true,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Hidden Gem",
    courses:      [
      "Predator Ridge (Ridge Course)",
      "Predator Ridge (Predator Course)",
      "Gallagher's Canyon",
      "The Rise Golf Club",
      "Harvest Golf Club"
    ],
    airport:      "YLW",
    drive:        "20 min from YLW",
    lodgingType:  "Resort / Airbnb",
    vibe:         "Wine-Country Golf",
    groupNotes:   "USD goes far here. Winery dinners are elite. Okanagan Lake views on every course. Don't sleep on Predator Ridge — it plays like a top-20 US resort course."
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    id:           "kamloops",
    name:         "Kamloops",
    photo:        "photos/kamloops.jpg",
    region:       "Canada",
    lat:          50.674,
    lng:          -120.327,
    augHigh:      95,
    sweatScore:   3,
    drama:        8,
    nightlife:    4,
    lodging:      6,
    lodgingTiers: { budget: 90, mid: 160, premium: 300 },
    golf:         7,
    golfPerRound: 85,
    food:         5,
    flights:      { SFO: 280, LAX: 310, JFK: 480, BOS: 520 },
    carts:        true,
    passport:     true,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Budget Gem",
    courses:      [
      "Talking Rock Golf Course",
      "Rivershore Estates & Golf Links",
      "Sun Peaks Resort Golf",
      "Tobiano Golf Course"
    ],
    airport:      "YKA",
    drive:        "15 min from YKA",
    lodgingType:  "Hotel / Airbnb",
    vibe:         "River-Canyon Adventure",
    groupNotes:   "Cheapest green fees of any destination on this list. Canyon golf is surprisingly dramatic. Best for groups on a strict budget who still want the Canada scenery."
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    id:           "gamble-sands",
    name:         "Gamble Sands",
    photo:        "photos/gamble-sands.jpg",
    region:       "Pacific Northwest",
    lat:          47.700,
    lng:          -119.800,
    augHigh:      95,
    sweatScore:   2,
    drama:        9,
    nightlife:    3,
    lodging:      7,
    lodgingTiers: { budget: 120, mid: 200, premium: 350 },
    golf:         9,
    golfPerRound: 175,
    food:         5,
    flights:      { SFO: 200, LAX: 230, JFK: 420, BOS: 450 },
    carts:        false,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Gamble Sands (Coore & Crenshaw)",
      "Desert Aire Golf Course"
    ],
    airport:      "GEG",
    drive:        "2 hr from GEG",
    lodgingType:  "On-Site Lodge",
    vibe:         "Remote Desert Pilgrimage",
    groupNotes:   "A proper pilgrimage. No distractions. Pure walking-links golf on Washington's high-desert bluffs. Groups who come here talk about it for years."
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    id:           "mesquite",
    name:         "Mesquite / Wolf Creek",
    photo:        "photos/mesquite.jpg",
    region:       "Desert Southwest",
    lat:          36.806,
    lng:          -114.067,
    augHigh:      107,
    sweatScore:   6,
    drama:        10,
    nightlife:    5,
    lodging:      7,
    lodgingTiers: { budget: 80, mid: 150, premium: 300 },
    golf:         9,
    golfPerRound: 130,
    food:         6,
    flights:      { SFO: 190, LAX: 160, JFK: 320, BOS: 360 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Solid Pick",
    courses:      [
      "Wolf Creek Golf Club",
      "Conestoga Golf Club",
      "CasaBlanca Golf Club",
      "Falcon Ridge Golf Course"
    ],
    airport:      "LAS",
    drive:        "1 hr 30 min from LAS",
    lodgingType:  "Casino Resort",
    vibe:         "Red-Rock Vegas Annex",
    groupNotes:   "HOT in August — mandatory 6am tee times. Wolf Creek is one of the most visually insane courses in America. The casino resort means zero planning for nights."
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    id:           "bandon-dunes",
    name:         "Bandon Dunes",
    photo:        "photos/bandon-dunes.jpg",
    region:       "Pacific Northwest",
    lat:          43.118,
    lng:          -124.408,
    augHigh:      65,
    sweatScore:   1,
    drama:        10,
    nightlife:    3,
    lodging:      9,
    lodgingTiers: { budget: 200, mid: 320, premium: 600 },
    golf:         10,
    golfPerRound: 295,
    food:         8,
    flights:      { SFO: 220, LAX: 260, JFK: 480, BOS: 520 },
    carts:        false,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Bandon Dunes",
      "Pacific Dunes",
      "Bandon Trails",
      "Old Macdonald",
      "Sheep Ranch"
    ],
    airport:      "MFR",
    drive:        "2 hr from MFR",
    lodgingType:  "Self-Contained Golf Resort",
    vibe:         "Golf Mecca — Full Stop",
    groupNotes:   "The GOAT of American golf trips. Plan 5 days minimum — you need a day per course. No cars needed on property. No nightlife needed either; the golf IS the party."
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    id:           "boise",
    name:         "Boise",
    photo:        "photos/boise.jpg",
    region:       "Pacific Northwest",
    lat:          43.615,
    lng:          -116.202,
    augHigh:      96,
    sweatScore:   3,
    drama:        6,
    nightlife:    7,
    lodging:      7,
    lodgingTiers: { budget: 90, mid: 160, premium: 320 },
    golf:         7,
    golfPerRound: 85,
    food:         7,
    flights:      { SFO: 180, LAX: 200, JFK: 380, BOS: 420 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Value Play",
    courses:      [
      "Osprey Meadows at Tamarack",
      "Quail Hollow Golf Course",
      "Boise Ranch Golf Course",
      "Hillcrest Country Club"
    ],
    airport:      "BOI",
    drive:        "20 min from BOI",
    lodgingType:  "Hotel / Airbnb",
    vibe:         "Outdoor City Hub",
    groupNotes:   "Underrated food and bar scene. Cheap direct flights from SFO/LAX. Use Boise as a base and day-trip to Tamarack for the mountain-course wow factor."
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    id:           "austin",
    name:         "Austin / Hill Country",
    photo:        "photos/austin.jpg",
    region:       "South",
    lat:          30.267,
    lng:          -97.963,
    augHigh:      100,
    sweatScore:   8,
    drama:        7,
    nightlife:    10,
    lodging:      8,
    lodgingTiers: { budget: 120, mid: 220, premium: 480 },
    golf:         8,
    golfPerRound: 150,
    food:         9,
    flights:      { SFO: 210, LAX: 190, JFK: 240, BOS: 280 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Solid Pick",
    courses:      [
      "Barton Creek — Fazio Canyons",
      "Barton Creek — Fazio Foothills",
      "The Golf Club at Escondido",
      "Wolfdancer Golf Club"
    ],
    airport:      "AUS",
    drive:        "30 min from AUS",
    lodgingType:  "Resort / Hotel / Airbnb",
    vibe:         "Live-Music + Limestone Golf",
    groupNotes:   "6th Street nights are legitimately legendary. Mandatory 7am tee times — by noon the heat makes golf miserable. Best all-around bachelor party energy on the list."
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    id:           "sand-valley",
    name:         "Sand Valley",
    photo:        "photos/sand-valley.jpg",
    region:       "Great Lakes",
    lat:          44.380,
    lng:          -90.040,
    augHigh:      81,
    sweatScore:   4,
    drama:        9,
    nightlife:    3,
    lodging:      8,
    lodgingTiers: { budget: 150, mid: 250, premium: 500 },
    golf:         10,
    golfPerRound: 225,
    food:         7,
    flights:      { SFO: 320, LAX: 340, JFK: 280, BOS: 310 },
    carts:        false,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Sand Valley (Coore & Crenshaw)",
      "Mammoth Dunes (David McLay Kidd)",
      "The Sandbox (par-3)",
      "Sedge Valley"
    ],
    airport:      "MSN",
    drive:        "2 hr from MSN",
    lodgingType:  "Self-Contained Golf Resort",
    vibe:         "Wisconsin Dunes Pilgrimage",
    groupNotes:   "Wisconsin's answer to Bandon. Four courses, all walking, spectacular sand-ridge terrain. Stay on property — the lodge handles groups perfectly."
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    id:           "french-lick",
    name:         "French Lick",
    photo:        "photos/french-lick.jpg",
    region:       "Midwest",
    lat:          38.551,
    lng:          -86.620,
    augHigh:      88,
    sweatScore:   6,
    drama:        7,
    nightlife:    5,
    lodging:      8,
    lodgingTiers: { budget: 130, mid: 220, premium: 420 },
    golf:         8,
    golfPerRound: 165,
    food:         6,
    flights:      { SFO: 350, LAX: 360, JFK: 260, BOS: 300 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Solid Pick",
    courses:      [
      "French Lick — Pete Dye Course",
      "French Lick — Donald Ross Course",
      "Valley Links"
    ],
    airport:      "IND",
    drive:        "2 hr from IND",
    lodgingType:  "Grand Historic Resort",
    vibe:         "Gilded-Age Grandeur",
    groupNotes:   "Everything under one roof — resort, casino, spa, courses. Pete Dye course is a genuine beast. Best option for groups flying into the Midwest."
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    id:           "myrtle-beach",
    name:         "Myrtle Beach",
    photo:        "photos/myrtle-beach.jpg",
    region:       "Southeast",
    lat:          33.688,
    lng:          -78.886,
    augHigh:      89,
    sweatScore:   8,
    drama:        6,
    nightlife:    8,
    lodging:      7,
    lodgingTiers: { budget: 80, mid: 150, premium: 320 },
    golf:         8,
    golfPerRound: 90,
    food:         6,
    flights:      { SFO: 360, LAX: 370, JFK: 180, BOS: 160 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Value Play",
    courses:      [
      "Caledonia Golf & Fish Club",
      "True Blue Plantation",
      "TPC Myrtle Beach",
      "Dunes Golf & Beach Club",
      "Pawleys Plantation"
    ],
    airport:      "MYR",
    drive:        "15 min from MYR",
    lodgingType:  "Oceanfront Condo / Hotel",
    vibe:         "Golf-Factory Party Town",
    groupNotes:   "100+ courses means you never play the same one twice. Package deals are unbeatable. East-Coast groups should seriously consider this before anything fancier."
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    id:           "reynolds-lake-oconee",
    name:         "Reynolds Lake Oconee",
    photo:        "photos/reynolds-lake-oconee.jpg",
    region:       "Southeast",
    lat:          33.456,
    lng:          -83.287,
    augHigh:      93,
    sweatScore:   7,
    drama:        7,
    nightlife:    5,
    lodging:      9,
    lodgingTiers: { budget: 150, mid: 280, premium: 550 },
    golf:         9,
    golfPerRound: 175,
    food:         7,
    flights:      { SFO: 380, LAX: 360, JFK: 200, BOS: 240 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Solid Pick",
    courses:      [
      "Reynolds — Great Waters",
      "Reynolds — National Crabapple",
      "Reynolds — Oconee",
      "Reynolds — Landing",
      "Reynolds — Creek Club"
    ],
    airport:      "ATL",
    drive:        "1 hr 30 min from ATL",
    lodgingType:  "Lakefront Resort & Cottages",
    vibe:         "Southern Lake Luxury",
    groupNotes:   "Six courses on one property with lakefront cottages. Very self-contained — nobody needs to leave. Best-value premium resort experience on the East Coast."
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    id:           "streamsong",
    name:         "Streamsong",
    photo:        "photos/streamsong.jpg",
    region:       "Southeast",
    lat:          27.643,
    lng:          -81.720,
    augHigh:      92,
    sweatScore:   9,
    drama:        9,
    nightlife:    4,
    lodging:      9,
    lodgingTiers: { budget: 180, mid: 310, premium: 580 },
    golf:         10,
    golfPerRound: 265,
    food:         8,
    flights:      { SFO: 320, LAX: 300, JFK: 220, BOS: 260 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Splurge Pick",
    courses:      [
      "Streamsong Red (Coore & Crenshaw)",
      "Streamsong Blue (Hurdzan/Fry)",
      "Streamsong Black (Gil Hanse)",
      "Streamsong Black Reserve (Gil Hanse)"
    ],
    airport:      "TPA",
    drive:        "1 hr from TPA",
    lodgingType:  "All-Inclusive Golf Resort",
    vibe:         "Moonscape Minimalism",
    groupNotes:   "Former phosphate mine reborn as a links masterpiece. The landscape is genuinely unlike anything else in golf. Four courses, fully self-contained, all-inclusive vibe."
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    id:           "kiawah-island",
    name:         "Kiawah Island",
    photo:        "photos/kiawah-island.jpg",
    region:       "Southeast",
    lat:          32.608,
    lng:          -80.084,
    augHigh:      90,
    sweatScore:   8,
    drama:        9,
    nightlife:    5,
    lodging:      9,
    lodgingTiers: { budget: 200, mid: 380, premium: 750 },
    golf:         10,
    golfPerRound: 325,
    food:         8,
    flights:      { SFO: 360, LAX: 340, JFK: 200, BOS: 230 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Splurge Pick",
    courses:      [
      "The Ocean Course (PGA Championship)",
      "Osprey Point",
      "Turtle Point",
      "Cougar Point",
      "Oak Point"
    ],
    airport:      "CHS",
    drive:        "40 min from CHS",
    lodgingType:  "Island Resort / Villa",
    vibe:         "Ocean-Links Prestige",
    groupNotes:   "The Ocean Course hosted the 2021 PGA Championship. Walking those fairways is a genuine pilgrimage. Book six months out minimum. Worth every penny for a serious group."
  },

  // ── 18 ─────────────────────────────────────────────────────
  {
    id:           "pinehurst",
    name:         "Pinehurst",
    photo:        "photos/pinehurst.jpg",
    region:       "Southeast",
    lat:          35.195,
    lng:          -79.469,
    augHigh:      91,
    sweatScore:   6,
    drama:        8,
    nightlife:    5,
    lodging:      9,
    lodgingTiers: { budget: 150, mid: 280, premium: 560 },
    golf:         10,
    golfPerRound: 225,
    food:         7,
    flights:      { SFO: 370, LAX: 350, JFK: 190, BOS: 220 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Pinehurst No. 2",
      "Pinehurst No. 4",
      "Pinehurst No. 8",
      "Mid Pines Inn & Golf Club",
      "Pine Needles Lodge & Golf Club"
    ],
    airport:      "RDU",
    drive:        "1 hr 30 min from RDU",
    lodgingType:  "Historic Golf Village",
    vibe:         "Golf's Ancestral Home",
    groupNotes:   "The cradle of American golf. Walking No. 2 is a religious experience. Stay in the village — everything is walkable and the whole town is built around golf."
  },

  // ── 19 ─────────────────────────────────────────────────────
  {
    id:           "palm-springs",
    name:         "Palm Springs",
    photo:        "photos/palm-springs.jpg",
    region:       "Desert Southwest",
    lat:          33.830,
    lng:          -116.545,
    augHigh:      109,
    sweatScore:   6,
    drama:        8,
    nightlife:    8,
    lodging:      8,
    lodgingTiers: { budget: 130, mid: 240, premium: 520 },
    golf:         9,
    golfPerRound: 170,
    food:         8,
    flights:      { SFO: 160, LAX: 130, JFK: 350, BOS: 400 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      false,
    verdict:      "Solid Pick",
    courses:      [
      "PGA West — Stadium Course",
      "PGA West — TPC Stadium",
      "La Quinta — Mountain Course",
      "Desert Willow — Firecliff",
      "Shadow Ridge Golf Club"
    ],
    airport:      "PSP",
    drive:        "20 min from PSP",
    lodgingType:  "Resort / Mid-Century Villa",
    vibe:         "Desert Glamour",
    groupNotes:   "110° heat forces creative scheduling — golf at dawn, pool till 4pm, dinner and drinks till 2am. Mid-century modern rentals with private pools are perfect for groups."
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    id:           "st-george",
    name:         "St. George / Sand Hollow",
    photo:        "photos/st-george.jpg",
    region:       "Desert Southwest",
    lat:          37.104,
    lng:          -113.584,
    augHigh:      104,
    sweatScore:   5,
    drama:        10,
    nightlife:    5,
    lodging:      7,
    lodgingTiers: { budget: 100, mid: 180, premium: 380 },
    golf:         9,
    golfPerRound: 140,
    food:         6,
    flights:      { SFO: 210, LAX: 190, JFK: 370, BOS: 410 },
    carts:        true,
    passport:     false,
    rentalCar:    true,
    topPick:      true,
    verdict:      "Top Tier",
    courses:      [
      "Sand Hollow Resort — Championship",
      "Entrada at Snow Canyon Country Club",
      "Sky Mountain Golf Course",
      "Copper Rock Golf Course",
      "Red Hills Golf Course"
    ],
    airport:      "SGU",
    drive:        "15 min from SGU",
    lodgingType:  "Resort / Airbnb",
    vibe:         "Red-Rock Drama",
    groupNotes:   "Most dramatic scenery of any destination on this list. Red Zion sandstone on every tee box. Dry heat is genuinely manageable. Direct flights from most Western hubs."
  }

]; // end DESTINATIONS


// ============================================================
//  HUB DATA  (departure airports for flight cost lookups)
// ============================================================
window.HUBS = {
  SFO: { code: "SFO", name: "San Francisco",  city: "San Francisco, CA",  label: "✈ SFO — San Francisco"  },
  LAX: { code: "LAX", name: "Los Angeles",    city: "Los Angeles, CA",    label: "✈ LAX — Los Angeles"    },
  JFK: { code: "JFK", name: "New York",        city: "New York, NY",       label: "✈ JFK — New York"       },
  BOS: { code: "BOS", name: "Boston",          city: "Boston, MA",         label: "✈ BOS — Boston"         }
};

window.HUB_LIST = ["SFO", "LAX", "JFK", "BOS"];


// ============================================================
//  getTotal(dest, options)  →  per-person estimated total ($)
//
//  options: {
//    hub        : "SFO" | "LAX" | "JFK" | "BOS"  (default "SFO")
//    nights     : number  (default 4)
//    rounds     : number  (default 3)
//    groupSize  : number  (default 8)
//    lodgingTier: "budget" | "mid" | "premium"   (default "mid")
//  }
// ============================================================
window.getTotal = function getTotal(dest, options) {
  var opts = options || {};
  var hub         = opts.hub         || "SFO";
  var nights      = opts.nights      != null ? opts.nights      : 4;
  var rounds      = opts.rounds      != null ? opts.rounds      : 3;
  var groupSize   = opts.groupSize   != null ? opts.groupSize   : 8;
  var tier        = opts.lodgingTier || "mid";

  var flightPP    = dest.flights[hub] || 0;
  var nightlyRate = dest.lodgingTiers[tier] || dest.lodgingTiers.mid;
  var lodgingPP   = (nightlyRate * nights) / Math.max(groupSize, 1);
  var golfPP      = dest.golfPerRound * rounds;
  var foodPP      = 70 * nights;
  var carPP       = dest.rentalCar ? Math.ceil((65 * nights) / Math.max(groupSize, 1)) : 0;

  return Math.round(flightPP + lodgingPP + golfPP + foodPP + carPP);
};


// ============================================================
//  VERDICT COLORS  (badge background colours)
// ============================================================
window.VERDICT_COLORS = {
  "Top Tier":    "#16a34a",
  "Splurge Pick":"#d97706",
  "Solid Pick":  "#2563eb",
  "Budget Gem":  "#059669",
  "Hidden Gem":  "#7c3aed",
  "Value Play":  "#0891b2",
  "Local Fave":  "#c2410c"
};
