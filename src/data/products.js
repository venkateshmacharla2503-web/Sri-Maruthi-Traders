/**
 * Sri Maruthi Traders - Categories & Products Database
 */

export const CATEGORIES = [
  {
    id: "lights",
    name: "Lights",
    icon: "lightbulb",
    count: "15+ Types",
    description: "Ceiling panel lights, downlights, surface lights & decorative LED strip lights.",
    image: "/images/cat_lights.jpg"
  },
  {
    id: "bulbs",
    name: "LED Bulbs",
    icon: "zap",
    count: "9W - 50W",
    description: "High-efficiency B22 & E27 LED bulbs, cool daylight & warm white options.",
    image: "/images/cat_lights.jpg"
  },
  {
    id: "fans",
    name: "Fans",
    icon: "fan",
    count: "Ceiling / Wall / Exhaust",
    description: "High-speed ceiling fans, anti-dust BLDC fans, heavy duty exhaust & wall fans.",
    image: "/images/cat_fans.jpg"
  },
  {
    id: "switches",
    name: "Switches & Sockets",
    icon: "toggle-right",
    count: "Modular & Non-Modular",
    description: "Sleek modular switches, 6A/16A sockets, switchboards, fan regulators & cover plates.",
    image: "/images/cat_switches.jpg"
  },
  {
    id: "wires",
    name: "Wires & Cables",
    icon: "cable",
    count: "0.75sq mm - 10sq mm",
    description: "Flame-retardant (FR/FRLS) 100% pure copper electrical wires & heavy duty cables.",
    image: "/images/cat_wires.jpg"
  },
  {
    id: "accessories",
    name: "Electrical Accessories",
    icon: "plug",
    count: "Plugs / Adapters / Boxes",
    description: "3-pin plugs, multi-adapters, PVC junction boxes, insulation tapes & ceiling roses.",
    image: "/images/cat_switches.jpg"
  },
  {
    id: "mcb",
    name: "MCB & Distribution",
    icon: "shield-alert",
    count: "SP / DP / TPN / RCCB",
    description: "Single & double pole MCBs, isolators, RCCB protection & metal distribution boards.",
    image: "/images/cat_switches.jpg"
  },
  {
    id: "cement",
    name: "Cement",
    icon: "box",
    count: "50kg Bags",
    description: "High-grade OPC 53 & PPC construction cement bags for durable home & building structures.",
    image: "/images/about_store.jpg"
  },
  {
    id: "building",
    name: "Building Materials",
    icon: "layers",
    count: "Conduits / Waterproofing / Hardware",
    description: "Heavy duty PVC conduit pipes, waterproofing compounds, binding wire & building supplies.",
    image: "/images/about_store.jpg"
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Slim Square LED Ceiling Panel Light (15W / 22W)",
    category: "lights",
    categoryName: "Lights",
    image: "/images/cat_lights.jpg",
    shortDesc: "Energy-efficient recessed LED panel light with glare-free uniform illumination for homes and offices.",
    fullDesc: "Designed for high lumen output and long-lasting performance. Provides smooth, flicker-free light with a clean ultra-slim powder-coated aluminum frame. Ideal for living rooms, bedrooms, and commercial spaces.",
    features: [
      "Wattage Options: 15W / 22W",
      "Color Temperature: Cool Daylight (6500K) / Warm White (3000K)",
      "High Surge Protection (up to 2.5kV)",
      "Long Lifespan: up to 25,000 burning hours",
      "Easy spring-clip mounting"
    ],
    popular: true,
    badge: "Bestseller"
  },
  {
    id: "prod-2",
    name: "Premium B22 LED Bulb Pack (9W / 12W / 14W)",
    category: "bulbs",
    categoryName: "LED Bulbs",
    image: "/images/cat_lights.jpg",
    shortDesc: "High-brightness surge-protected LED bulbs for everyday domestic and commercial lighting.",
    fullDesc: "Standard B22 pin cap LED bulbs engineered to save up to 85% energy compared to traditional incandescent lamps. Features polycarbonate diffuser for wide light dispersion without eye strain.",
    features: [
      "Standard B22 cap base fits all standard Indian lamp holders",
      "Wattages available: 9W, 12W, 14W",
      "Instant light output with zero glare",
      "Mercury-free & eco-friendly design",
      "Wide voltage operation (140V - 280V)"
    ],
    popular: true,
    badge: "Popular"
  },
  {
    id: "prod-3",
    name: "High-Speed Anti-Dust Ceiling Fan (1200mm / 48 inch)",
    category: "fans",
    categoryName: "Fans",
    image: "/images/cat_fans.jpg",
    shortDesc: "High RPM ceiling fan with anti-dust coating and heavy-duty copper motor for maximum air delivery.",
    fullDesc: "Specially crafted aerodynamic wider blades ensure superior air circulation across the room. Features double ball bearings for whisper-quiet long-term operation and anti-static paint finish.",
    features: [
      "Sweep Size: 1200 mm (48 inches)",
      "High Speed Motor: 380+ RPM",
      "Air Delivery: 230 CMM",
      "100% Copper Winding Motor",
      "Dust-resistant polyurethane coating"
    ],
    popular: true,
    badge: "Top Rated"
  },
  {
    id: "prod-4",
    name: "Heavy-Duty Wall Ventilation Exhaust Fan (200mm / 250mm)",
    category: "fans",
    categoryName: "Fans",
    image: "/images/cat_fans.jpg",
    shortDesc: "Powerful kitchen and bathroom exhaust fan designed to remove humidity, smoke, and odors quickly.",
    fullDesc: "Sturdy rust-proof body with engineered plastic/metallic blades and automatic back-draft shutter to prevent insects and dust ingress when turned off.",
    features: [
      "Size: 200mm (8 inch) & 250mm (10 inch)",
      "High suction efficiency motor",
      "Low noise operating level",
      "Suitable for Kitchens, Bathrooms & Commercial spaces",
      "Easy maintenance cleanable blades"
    ],
    popular: false,
    badge: "Essential"
  },
  {
    id: "prod-5",
    name: "Modular Switch & Socket Set with Sleek Cover Plate",
    category: "switches",
    categoryName: "Switches & Sockets",
    image: "/images/cat_switches.jpg",
    shortDesc: "Modern flame-retardant polycarbonate modular switches, 6A/16A sockets, and switchboard plates.",
    fullDesc: "Give your walls an elegant finish with soft-click modular switches and heavy-duty brass contacts. Includes safety shutters on power sockets to keep children safe.",
    features: [
      "Silver CAD oxide contacts for spark-free switching",
      "Child-safety shutters on 6A / 16A power sockets",
      "Flame retardant UV stabilized polycarbonate body",
      "Available in 1, 2, 4, 6, 8, 12 module grid plates",
      "Smooth matte white and metallic silver finishes"
    ],
    popular: true,
    badge: "Popular"
  },
  {
    id: "prod-6",
    name: "Flame Retardant Pure Copper Wires (1.5 sq mm / 2.5 sq mm)",
    category: "wires",
    categoryName: "Wires & Cables",
    image: "/images/cat_wires.jpg",
    shortDesc: "100% Electrolytic copper single core FR/FRLS insulated flexible house wiring cables (90m coil).",
    fullDesc: "High quality copper conductor with specially formulated PVC insulation that retards flame spread during electrical overloads. Essential safety choice for residential and commercial wiring.",
    features: [
      "100% Pure Electrolytic Bright Annealed Copper",
      "High Current Carrying Capacity",
      "Oxygen & Temperature Index FR Insulation",
      "Coil Length: 90 Metres standard pack",
      "Colors: Red, Yellow, Blue, Black, Green for earthing"
    ],
    popular: true,
    badge: "Safety First"
  },
  {
    id: "prod-7",
    name: "Single Pole & Double Pole MCB (6A - 32A C-Curve)",
    category: "mcb",
    categoryName: "MCB & Distribution",
    image: "/images/cat_switches.jpg",
    shortDesc: "High-breaking capacity Miniature Circuit Breakers for overload and short-circuit protection.",
    fullDesc: "Reliable thermal-magnetic trip mechanism that immediately disconnects power during short circuits or overcurrents, safeguarding appliances and building wiring.",
    features: [
      "Current Ratings: 6A, 10A, 16A, 25A, 32A, 63A",
      "Breaking Capacity: 10kA (10,000 Amperes)",
      "C-Curve tripping characteristics for lighting & inductive loads",
      "Bi-stable DIN rail clip for easy panel mounting",
      "Finger-proof IP20 terminals"
    ],
    popular: false,
    badge: "Protection"
  },
  {
    id: "prod-8",
    name: "Heavy Duty Metal MCB Distribution Board (Vertical/Horizontal)",
    category: "mcb",
    categoryName: "MCB & Distribution",
    image: "/images/cat_switches.jpg",
    shortDesc: "Powder-coated sheet steel distribution box with acrylic / metal door for safe circuit organization.",
    fullDesc: "Provides clean distribution layout for incoming mains and outgoing individual circuits with insulated neutral and earth bars included.",
    features: [
      "Available in 4-Way, 8-Way, 12-Way, 16-Way configurations",
      "Deep recessed box with knockouts for conduit entry",
      "Corrosion-resistant epoxy powder coating",
      "Includes insulated neutral and ground terminal blocks"
    ],
    popular: false,
    badge: "Standard"
  },
  {
    id: "prod-9",
    name: "High Performance OPC 53 Grade Construction Cement (50kg Bag)",
    category: "cement",
    categoryName: "Cement",
    image: "/images/about_store.jpg",
    shortDesc: "High early strength Ordinary Portland Cement for RCC slabs, beams, columns, and structural concrete.",
    fullDesc: "Guarantees superior compressive strength and rapid setting time for high-load residential and commercial construction projects. Standard fresh factory 50kg sealed bags.",
    features: [
      "Weight: 50 kg moisture-resistant woven bag",
      "High early 28-day compressive strength",
      "Optimal setting time for structural pouring",
      "Ideal for RCC foundations, beams, columns, and slabs",
      "Fresh direct supply"
    ],
    popular: true,
    badge: "Heavy Duty"
  },
  {
    id: "prod-10",
    name: "Portland Pozzolana Cement (PPC) for Masonry & Plastering",
    category: "cement",
    categoryName: "Cement",
    image: "/images/about_store.jpg",
    shortDesc: "Crack-resistant blended cement for smooth brickwork, wall plastering, and general masonry.",
    fullDesc: "Provides superior workability, low heat of hydration, and enhanced resistance against chemical attacks and dampness in walls.",
    features: [
      "Weight: 50 kg sealed bag",
      "Refined particle size for smooth wall plaster finish",
      "Prevents micro-cracks and efflorescence on walls",
      "Excellent workability and high masonry bond strength"
    ],
    popular: false,
    badge: "Plaster & Masonry"
  },
  {
    id: "prod-11",
    name: "Heavy-Duty Rigid PVC Electrical Conduit Pipes (20mm / 25mm)",
    category: "building",
    categoryName: "Building Materials",
    image: "/images/about_store.jpg",
    shortDesc: "High impact resistance flame-retardant PVC conduit pipes for concealed in-wall and ceiling wiring.",
    fullDesc: "Durable rigid PVC conduits engineered to withstand heavy concrete pressure during slab casting without cracking or collapsing.",
    features: [
      "Diameters: 20mm & 25mm standard sizes",
      "Light, Medium, and Heavy Duty wall thickness grades",
      "Smooth internal bore for effortless wire pulling",
      "Flame retardant & non-conductive safety material"
    ],
    popular: false,
    badge: "Concealed Wiring"
  },
  {
    id: "prod-12",
    name: "Multi-Plug Extension Socket Board with Surge Protection",
    category: "accessories",
    categoryName: "Electrical Accessories",
    image: "/images/cat_switches.jpg",
    shortDesc: "Heavy-duty 4-way socket extension cord with master switch, indicator, and 2-metre copper cable.",
    fullDesc: "Safely powers TV sets, computers, chargers, and kitchen appliances with built-in thermal fuse overload cut-off.",
    features: [
      "4 Universal sockets with safety shutters",
      "High conductivity brass strip internals",
      "Reset button thermal surge protector",
      "2-Metre heavy duty copper cord with molded 3-pin plug"
    ],
    popular: false,
    badge: "Home Essential"
  }
];
