import { cache } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  longDescription?: string;
  image: string;
  shortDescription: string;
  features: string[];
  technicalSpecificationsHtml?: string;
}

export const products: Product[] = [
  // Charging Stations (2 products)
  // {
  //   id: 1,
  //   name: "DC 80\u2013160kW Dual Gun Fast EV Charging Station",
  //   category: "Charging Stations",
  //   image: "/products/listings/charging-station.png",
  //   shortDescription:
  //     "High-power dual gun DC fast charger with advanced connectivity, user-friendly design, and modular scalability\u2014ideal for commercial, fleet, and public EV charging environments.",
  //   longDescription:
  //     "The DC 80\u2013160kW Dual Gun Fast Charging Station is a high-performance EV charging solution designed to meet the needs of high-traffic and high-demand environments such as commercial parking lots, fleet charging hubs, and public infrastructure. With flexible power output ranging from 80kW to 160kW, and support for multiple connector standards including CCS, CHAdeMO, GB/T, and NACS, it ensures wide vehicle compatibility. The system supports modern connectivity options such as 4G, Bluetooth, and Ethernet and allows authentication via RFID, credit card, or mobile app for seamless access control. Featuring a durable IP54-rated enclosure, 7-inch color touchscreen, and customizable cable lengths, this charger is engineered for performance, ease of use, and reliability in demanding outdoor conditions. With support for OCPP 1.6 and 2.0 protocols, remote monitoring, and modular expandability, this station is a future-proof choice for scalable EV infrastructure deployments.",
  //   features: [
  //     "Flexible 80\u2013160kW power output",
  //     "Supports CCS, CHAdeMO, GB/T, NACS",
  //     "OCPP 1.6 and 2.0 protocol support",
  //     "7-inch color touchscreen",
  //     "IP54-rated enclosure",
  //     "Customizable 5m cable length",
  //     "4G, Bluetooth, and Ethernet connectivity",
  //   ],
  //   technicalSpecificationsHtml:
  //     '\n<div class="overflow-x-auto">\n  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">\n    <thead class="bg-gray-100">\n      <tr>\n        <th class="p-2 border border-gray-300 font-semibold text-left">Parameter</th>\n        <th class="p-2 border border-gray-300">40kW</th>\n        <th class="p-2 border border-gray-300">80kW</th>\n        <th class="p-2 border border-gray-300">120kW</th>\n        <th class="p-2 border border-gray-300">160kW</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Input Voltage</td>\n        <td class="p-2 border border-gray-300" colspan="4">AC 380V \u00b115% (TN-S)</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Output Current</td>\n        <td class="p-2 border border-gray-300">0 to 135A (20kW)</td>\n        <td class="p-2 border border-gray-300">65.7A (30kW)</td>\n        <td class="p-2 border border-gray-300">120A (40kW)</td>\n        <td class="p-2 border border-gray-300">135A (60kW, 240kW)</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Output Voltage</td>\n        <td class="p-2 border border-gray-300" colspan="4">200V \u2013 1000VDC</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Connection</td>\n        <td class="p-2 border border-gray-300" colspan="4">4G, Bluetooth, Ethernet</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">User Authentication</td>\n        <td class="p-2 border border-gray-300" colspan="4">APP, RFID Card, Credit Card</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Security Protection</td>\n        <td class="p-2 border border-gray-300" colspan="4">Over-voltage / Under-voltage / Over-current / Short-circuit / Surge / Leakage protection</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">IP Rating</td>\n        <td class="p-2 border border-gray-300" colspan="4">IP54</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Charging Port</td>\n        <td class="p-2 border border-gray-300" colspan="4">GB/T 20234.1-2015, CCS, CHAdeMO, NACS</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Cable Length</td>\n        <td class="p-2 border border-gray-300" colspan="4">5 meters (customizable)</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Working Environment</td>\n        <td class="p-2 border border-gray-300" colspan="4">Max. altitude \u2264 2000m; Temperature: -20\u00b0C to 50\u00b0C</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Shell Color</td>\n        <td class="p-2 border border-gray-300" colspan="4">White / Gray</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Dimensions (mm)</td>\n        <td class="p-2 border border-gray-300" colspan="4">700 \u00d7 570 \u00d7 1900</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">LCD</td>\n        <td class="p-2 border border-gray-300" colspan="4">7-inch color screen</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Relative Humidity</td>\n        <td class="p-2 border border-gray-300" colspan="4">5% \u2013 95% RH (non-condensing)</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Communication Protocols</td>\n        <td class="p-2 border border-gray-300" colspan="4">OCPP 1.6 / OCPP 2.0</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Output Standard</td>\n        <td class="p-2 border border-gray-300" colspan="4">GB/T, CCS, CHAdeMO, NACS</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n',
  // },
  // {
  //   id: 2,
  //   name: "Dual-Gun Wall-Mounted Charging Station",
  //   category: "Charging Stations",
  //   image: "/products/listings/wall-mount.jpg",
  //   shortDescription:
  //     "Compact dual-gun DC EV charger with wall-mounted design\u2014ideal for residential and public fast-charging use cases.",
  //   longDescription:
  //     "Champion\u2019s Wall-Mounted DC Charging Stations provide a user-friendly, efficient EV charging solution. Their compact design saves floor space while ensuring easy access. Equipped with advanced fast-charging technology, they significantly reduce charging time. With durable construction and reliable performance, these DC stations offer hassle-free charging and peace of mind for electric vehicle owners.",
  //   features: [
  //     "Wall-mounted space-saving design",
  //     "40kW and 60kW models available",
  //     "Supports CCS1, CCS2, CHAdeMO, GB/T",
  //     "7\u201d Color Touchscreen",
  //     "Customizable gun cable lengths",
  //     "IP54 rated and high temperature resilience",
  //     "OCPP, ISO 15118, DIN70121 protocol support",
  //   ],
  //   technicalSpecificationsHtml:
  //     '\n<div class="overflow-x-auto">\n  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">\n    <thead class="bg-gray-100">\n      <tr>\n        <th class="p-2 border border-gray-300">Parameter</th>\n        <th class="p-2 border border-gray-300">CF-WDD40kW</th>\n        <th class="p-2 border border-gray-300">CF-WDD60kW</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Output Power</td>\n        <td class="p-2 border border-gray-300">40kW</td>\n        <td class="p-2 border border-gray-300">60kW</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Output Voltage</td>\n        <td class="p-2 border border-gray-300">150\u20131000V</td>\n        <td class="p-2 border border-gray-300">150\u20131000V</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Output Current</td>\n        <td class="p-2 border border-gray-300">0\u2013125A</td>\n        <td class="p-2 border border-gray-300">0\u2013200A</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Input Voltage</td>\n        <td class="p-2 border border-gray-300">285\u2013475V</td>\n        <td class="p-2 border border-gray-300">260\u2013530V</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Input Current</td>\n        <td class="p-2 border border-gray-300">63A</td>\n        <td class="p-2 border border-gray-300">105A</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Gun Type</td>\n        <td class="p-2 border border-gray-300" colspan="2">CCS1 / CCS2 / CHAdeMO / GB/T</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Charging Mode</td>\n        <td class="p-2 border border-gray-300" colspan="2">Swipe card / APP / Network</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Display</td>\n        <td class="p-2 border border-gray-300" colspan="2">7\u201d Color Touch Screen</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">Dimension</td>\n        <td class="p-2 border border-gray-300" colspan="2">90 \u00d7 78.9 \u00d7 27.5 cm (including cable holder)</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Operating Temperature</td>\n        <td class="p-2 border border-gray-300" colspan="2">-20\u00b0C \u223c 75\u00b0C (Reduce freq above 55\u00b0C)</td>\n      </tr>\n      <tr>\n        <td class="p-2 border border-gray-300 font-medium">IP Level</td>\n        <td class="p-2 border border-gray-300" colspan="2">IP54</td>\n      </tr>\n      <tr class="bg-gray-50">\n        <td class="p-2 border border-gray-300 font-medium">Protocols</td>\n        <td class="p-2 border border-gray-300" colspan="2">GBT27930 / CHAdeMO 2.0 / DIN70121 / OCPP 1.6 (JSON) / ISO 15118</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n',
  // },
  // // Charging Cables (1 product)
  // {
  //   id: 3,
  //   name: "Portable 7KW EV Charger - CCS2/GBT Compatible",
  //   category: "Portable Chargers",
  //   image: "/products/listings/portable-charger.jpg",
  //   shortDescription:
  //     "High-quality Type 2 to Type 2 charging cable for AC charging with excellent durability.",
  //   features: [
  //     "32A Current Rating",
  //     "5 Meter Length",
  //     "IP55 Protection",
  //     "Temperature Resistant",
  //   ],
  // },
  // // Adapters (multiple products)
  // {
  //   id: 4,
  //   name: "CCS2 to GB/T Charging Adapter",
  //   category: "Adapters",
  //   image: "/products/listings/ccs2-to-gbt.png",
  //   shortDescription:
  //     "Universal adapter for connecting CCS vehicles to CHAdeMO charging stations.",
  //   features: [
  //     "High Current Capacity",
  //     "Safety Certified",
  //     "Compact Design",
  //     "Universal Compatibility",
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "GB/T to CCS2 Charging Adapter",
  //   category: "Adapters",
  //   image: "/products/listings/gbt-to-ccs2.png",
  //   shortDescription:
  //     "Adapter for connecting Type 1 vehicles to Type 2 charging infrastructure.",
  //   features: ["32A Rating", "Weatherproof", "Easy Connection", "Safety Lock"],
  // },
  {
    id: 1,
    name: "DC 80–160kW Dual Gun Fast EV Charging Station",
    category: "Charging Stations",
    image: "/products/listings/charging-station.png",
    shortDescription:
      "High-power dual gun DC fast charger with advanced connectivity, user-friendly design, and modular scalability—ideal for commercial, fleet, and public EV charging environments.",
    longDescription:
      "The DC 80–160kW Dual Gun Fast Charging Station is a high-performance EV charging solution designed to meet the needs of high-traffic and high-demand environments such as commercial parking lots, fleet charging hubs, and public infrastructure. With flexible power output ranging from 80kW to 160kW, and support for multiple connector standards including CCS, CHAdeMO, GB/T, and NACS, it ensures wide vehicle compatibility. The system supports modern connectivity options such as 4G, Bluetooth, and Ethernet and allows authentication via RFID, credit card, or mobile app for seamless access control. Featuring a durable IP54-rated enclosure, 7-inch color touchscreen, and customizable cable lengths, this charger is engineered for performance, ease of use, and reliability in demanding outdoor conditions. With support for OCPP 1.6 and 2.0 protocols, remote monitoring, and modular expandability, this station is a future-proof choice for scalable EV infrastructure deployments.",
    features: [
      "Flexible 80–160kW power output",
      "Supports CCS, CHAdeMO, GB/T, NACS",
      "OCPP 1.6 and 2.0 protocol support",
      "7-inch color touchscreen",
      "IP54-rated enclosure",
      "Customizable 5m cable length",
      "4G, Bluetooth, and Ethernet connectivity",
      "Multiple authentication methods (APP, RFID, Credit Card)",
      "Comprehensive safety protection systems",
    ],
    technicalSpecificationsHtml: `<div class="overflow-x-auto">
  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 border border-gray-300 font-semibold text-left">Parameter</th>
        <th class="p-2 border border-gray-300">40kW</th>
        <th class="p-2 border border-gray-300">80kW</th>
        <th class="p-2 border border-gray-300">120kW</th>
        <th class="p-2 border border-gray-300">160kW</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Input Voltage</td>
        <td class="p-2 border border-gray-300" colspan="4">AC 380V ±15% (TN-S)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Output Current</td>
        <td class="p-2 border border-gray-300">0 to 135A (20kW)</td>
        <td class="p-2 border border-gray-300">65.7A (30kW)</td>
        <td class="p-2 border border-gray-300">120A (40kW)</td>
        <td class="p-2 border border-gray-300">135A (60kW, 240kW)</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Output Voltage</td>
        <td class="p-2 border border-gray-300" colspan="4">200V – 1000VDC</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Connection</td>
        <td class="p-2 border border-gray-300" colspan="4">4G, Bluetooth, Ethernet</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">User Authentication</td>
        <td class="p-2 border border-gray-300" colspan="4">APP, RFID Card, Credit Card</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Security Protection</td>
        <td class="p-2 border border-gray-300" colspan="4">Over-voltage / Under-voltage / Over-current / Short-circuit / Surge / Leakage protection</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">IP Rating</td>
        <td class="p-2 border border-gray-300" colspan="4">IP54</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Charging Port</td>
        <td class="p-2 border border-gray-300" colspan="4">GB/T 20234.1-2015, CCS, CHAdeMO, NACS</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Cable Length</td>
        <td class="p-2 border border-gray-300" colspan="4">5 meters (customizable)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Working Environment</td>
        <td class="p-2 border border-gray-300" colspan="4">Max. altitude ≤ 2000m; Temperature: -20°C to 50°C</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Shell Color</td>
        <td class="p-2 border border-gray-300" colspan="4">White / Gray</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Dimensions (mm)</td>
        <td class="p-2 border border-gray-300" colspan="4">700 × 570 × 1900</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">LCD</td>
        <td class="p-2 border border-gray-300" colspan="4">7-inch color screen</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Relative Humidity</td>
        <td class="p-2 border border-gray-300" colspan="4">5% – 95% RH (non-condensing)</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Communication Protocols</td>
        <td class="p-2 border border-gray-300" colspan="4">OCPP 1.6 / OCPP 2.0</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Output Standard</td>
        <td class="p-2 border border-gray-300" colspan="4">GB/T, CCS, CHAdeMO, NACS</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    id: 2,
    name: "Dual-Gun Wall-Mounted Charging Station",
    category: "Charging Stations",
    image: "/products/listings/wall-mount.jpg",
    shortDescription:
      "Champion's compact, wall-mounted DC EV charging stations offer fast charging and space-saving convenience, ideal for both residential and public installations.",
    longDescription:
      "Champion's Wall-Mounted DC Charging Stations provide a user-friendly, efficient EV charging solution. Their compact design saves floor space while ensuring easy access. Equipped with advanced fast-charging technology, they significantly reduce charging time. With durable construction and reliable performance, these DC stations offer hassle-free charging and peace of mind for electric vehicle owners.",
    features: [
      "Wall-mounted space-saving design",
      "40kW and 60kW models available",
      "Supports CCS1, CCS2, CHAdeMO, GB/T",
      "7″ Color Touchscreen",
      "Customizable gun cable lengths",
      "IP54 rated and high temperature resilience",
      "OCPP, ISO 15118, DIN70121 protocol support",
      "Dual gun configuration",
      "Network connectivity options (CAN/485/Ethernet/4G/GPRS)",
    ],
    technicalSpecificationsHtml: `<div class="overflow-x-auto">
  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 border border-gray-300">Parameter</th>
        <th class="p-2 border border-gray-300">CF-WDD40kW</th>
        <th class="p-2 border border-gray-300">CF-WDD60kW</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Output Power</td>
        <td class="p-2 border border-gray-300">40kW</td>
        <td class="p-2 border border-gray-300">60kW</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Output Voltage</td>
        <td class="p-2 border border-gray-300">150–1000V</td>
        <td class="p-2 border border-gray-300">150–1000V</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Output Current</td>
        <td class="p-2 border border-gray-300">0–125A</td>
        <td class="p-2 border border-gray-300">0–200A</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Frequency</td>
        <td class="p-2 border border-gray-300">50/60 Hz</td>
        <td class="p-2 border border-gray-300">50/60 Hz</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Input Current</td>
        <td class="p-2 border border-gray-300">63A</td>
        <td class="p-2 border border-gray-300">105A</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Input Voltage</td>
        <td class="p-2 border border-gray-300">285–475V</td>
        <td class="p-2 border border-gray-300">260–530V</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Gun Quantity</td>
        <td class="p-2 border border-gray-300" colspan="2">Two (CCS-1 / CCS-2 / CHAdeMO / GBT)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Gun Rated Current</td>
        <td class="p-2 border border-gray-300">125A</td>
        <td class="p-2 border border-gray-300">200A</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Charging Mode</td>
        <td class="p-2 border border-gray-300" colspan="2">Swipe card / APP / Network</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Display</td>
        <td class="p-2 border border-gray-300" colspan="2">7″ Color Touch Screen</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Dimension (cm)</td>
        <td class="p-2 border border-gray-300" colspan="2">90 × 78.9 × 27.5 (including cable holder)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Weight (kg)</td>
        <td class="p-2 border border-gray-300">120KG</td>
        <td class="p-2 border border-gray-300">130KG</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Operating Temperature</td>
        <td class="p-2 border border-gray-300" colspan="2">-20°C ∼ 75°C (Reduce frequency above 55°C)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Altitude</td>
        <td class="p-2 border border-gray-300" colspan="2">2000M</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">IP Level</td>
        <td class="p-2 border border-gray-300" colspan="2">IP54</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Input Cable Length</td>
        <td class="p-2 border border-gray-300" colspan="2">0M (Customization Acceptable)</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Gun Cable Length</td>
        <td class="p-2 border border-gray-300" colspan="2">5M (Customization Acceptable)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Interface Standard</td>
        <td class="p-2 border border-gray-300" colspan="2">CCS1, CCS2, CHAdeMO, GB/T</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Charging Protocol</td>
        <td class="p-2 border border-gray-300" colspan="2">GBT27930 / CHAdeMO 2.0 / DIN 70121 / OCPP 1.6 (JSON) / ISO 15118</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Network Connection</td>
        <td class="p-2 border border-gray-300" colspan="2">Standard: CAN/485/Ethernet, Optional: GPRS/4G</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  // Portable AC Charger
  {
    id: 3,
    name: "Portable 7KW EV Charger - CCS2/GBT Compatible",
    category: "Portable Chargers",
    image: "/products/listings/portable-charger.jpg",
    shortDescription:
      "Professional portable electric vehicle charger with 7KW power output, LCD display, and dual connector compatibility (CCS2/GBT). Features smart charging controls and high-quality TPU cable construction.",
    longDescription:
      "This advanced portable EV charger delivers reliable 7KW charging power for electric vehicles with comprehensive safety and convenience features. The unit includes an intuitive LCD display showing real-time charging data including current (32A), voltage, and charging status. Built with premium materials including a high-quality TPU cable for durability and weather resistance. The charger features intelligent controls with a convenient switch button for easy operation and comes with a CEE plug for versatile power connections. Compatible with both CCS2 and GBT charging standards, making it suitable for a wide range of electric vehicles. The compact, portable design makes it ideal for home use, travel, or emergency charging situations.",
    features: [
      "7KW power output for fast charging",
      "32A maximum current capacity",
      "CCS2 and GBT connector compatibility",
      "LCD display with real-time charging data",
      "High-quality TPU cable construction",
      "CEE industrial plug input",
      "Manual switch button controls",
      "Real-time voltage and current monitoring",
      "Portable, lightweight design",
      "Built-in safety protection systems",
      "LED indicators and status display",
    ],
    technicalSpecificationsHtml: `<div class="overflow-x-auto">
  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 border border-gray-300 font-semibold text-left">Specification</th>
        <th class="p-2 border border-gray-300">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Power Output</td>
        <td class="p-2 border border-gray-300">7KW</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Maximum Current</td>
        <td class="p-2 border border-gray-300">32A</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Connector Types</td>
        <td class="p-2 border border-gray-300">CCS2 and GBT compatible</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Display</td>
        <td class="p-2 border border-gray-300">LCD screen with real-time charging data</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Cable Material</td>
        <td class="p-2 border border-gray-300">High-quality TPU (Thermoplastic Polyurethane)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Input Plug</td>
        <td class="p-2 border border-gray-300">CEE industrial plug</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Controls</td>
        <td class="p-2 border border-gray-300">Manual switch button</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Voltage Display</td>
        <td class="p-2 border border-gray-300">Real-time voltage monitoring</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Current Display</td>
        <td class="p-2 border border-gray-300">Real-time amperage display (up to 32A)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Design</td>
        <td class="p-2 border border-gray-300">Portable, lightweight construction</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Safety Features</td>
        <td class="p-2 border border-gray-300">Built-in charging protection systems</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Charging Status</td>
        <td class="p-2 border border-gray-300">LED indicators and LCD status display</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    id: 4,
    name: "CCS2 to GB/T Charging Adapter",
    category: "Adapters",
    image: "/products/listings/ccs2-to-gbt.png",
    shortDescription:
      "Professional charging adapter for converting CCS2 charging ports to GB/T compatibility, enabling seamless charging between different EV charging standards in reverse configuration.",
    longDescription:
      "This high-quality CCS2 to GB/T charging adapter provides reliable connectivity between CCS2 charging infrastructure and GB/T-compatible electric vehicles. Engineered with precision-manufactured contacts and robust housing materials to ensure safe, efficient power transfer. The adapter maintains full electrical integrity while providing the flexibility to use CCS2 charging stations with GB/T vehicles. Built with automotive-grade materials and designed to withstand repeated use in various environmental conditions. Features secure locking mechanisms on both ends to prevent accidental disconnection during charging sessions. Compact and portable design makes it an essential accessory for EV owners requiring cross-standard compatibility in reverse configuration.",
    features: [
      "CCS2 to GB/T conversion compatibility",
      "Up to 32A current rating",
      "200-1000V DC voltage range",
      "Automotive-grade thermoplastic housing",
      "Silver-plated copper contacts",
      "Dual-end secure locking mechanisms",
      "IP54 protection rating",
      "Compact portable design",
      "Wide operating temperature range (-30°C to +50°C)",
      "CE and RoHS compliant",
      "Lightweight construction",
    ],
    technicalSpecificationsHtml: `<div class="overflow-x-auto">
  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 border border-gray-300 font-semibold text-left">Specification</th>
        <th class="p-2 border border-gray-300">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Input Connector</td>
        <td class="p-2 border border-gray-300">CCS2 Standard</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Output Connector</td>
        <td class="p-2 border border-gray-300">GB/T Standard</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Current Rating</td>
        <td class="p-2 border border-gray-300">Up to 32A</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Voltage Range</td>
        <td class="p-2 border border-gray-300">200-1000V DC</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Housing Material</td>
        <td class="p-2 border border-gray-300">Automotive-grade thermoplastic</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Contact Material</td>
        <td class="p-2 border border-gray-300">Silver-plated copper</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Locking Mechanism</td>
        <td class="p-2 border border-gray-300">Dual-end secure locks</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Operating Temperature</td>
        <td class="p-2 border border-gray-300">-30°C to +50°C</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Protection Rating</td>
        <td class="p-2 border border-gray-300">IP54</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Dimensions</td>
        <td class="p-2 border border-gray-300">Compact portable design</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Weight</td>
        <td class="p-2 border border-gray-300">Lightweight construction</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Certification</td>
        <td class="p-2 border border-gray-300">CE, RoHS compliant</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    id: 5,
    name: "GB/T to CCS2 Charging Adapter",
    category: "Adapters",
    image: "/products/listings/gbt-to-ccs2.png",
    shortDescription:
      "Professional charging adapter for converting GB/T charging ports to CCS2 compatibility, enabling seamless charging between different EV charging standards.",
    longDescription:
      "This high-quality GB/T to CCS2 charging adapter provides reliable connectivity between GB/T charging infrastructure and CCS2-compatible electric vehicles. Engineered with precision-manufactured contacts and robust housing materials to ensure safe, efficient power transfer. The adapter maintains full electrical integrity while providing the flexibility to use GB/T charging stations with CCS2 vehicles. Built with automotive-grade materials and designed to withstand repeated use in various environmental conditions. Features secure locking mechanisms on both ends to prevent accidental disconnection during charging sessions. Compact and portable design makes it an essential accessory for EV owners requiring cross-standard compatibility.",
    features: [
      "GB/T to CCS2 conversion compatibility",
      "Up to 32A current rating",
      "200-1000V DC voltage range",
      "Automotive-grade thermoplastic housing",
      "Silver-plated copper contacts",
      "Dual-end secure locking mechanisms",
      "IP54 protection rating",
      "Compact portable design",
      "Wide operating temperature range (-30°C to +50°C)",
      "CE and RoHS compliant",
      "Lightweight construction",
    ],
    technicalSpecificationsHtml: `<div class="overflow-x-auto">
  <table class="table-auto w-full border border-gray-300 text-sm text-gray-800">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 border border-gray-300 font-semibold text-left">Specification</th>
        <th class="p-2 border border-gray-300">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Input Connector</td>
        <td class="p-2 border border-gray-300">GB/T Standard</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Output Connector</td>
        <td class="p-2 border border-gray-300">CCS2 Standard</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Current Rating</td>
        <td class="p-2 border border-gray-300">Up to 32A</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Voltage Range</td>
        <td class="p-2 border border-gray-300">200-1000V DC</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Housing Material</td>
        <td class="p-2 border border-gray-300">Automotive-grade thermoplastic</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Contact Material</td>
        <td class="p-2 border border-gray-300">Silver-plated copper</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Locking Mechanism</td>
        <td class="p-2 border border-gray-300">Dual-end secure locks</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Operating Temperature</td>
        <td class="p-2 border border-gray-300">-30°C to +50°C</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Protection Rating</td>
        <td class="p-2 border border-gray-300">IP54</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Dimensions</td>
        <td class="p-2 border border-gray-300">Compact portable design</td>
      </tr>
      <tr>
        <td class="p-2 border border-gray-300 font-medium">Weight</td>
        <td class="p-2 border border-gray-300">Lightweight construction</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="p-2 border border-gray-300 font-medium">Certification</td>
        <td class="p-2 border border-gray-300">CE, RoHS compliant</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
];

export const categories = [
  "Charging Stations",
  "Portable Chargers",
  "Adapters",
];

export const getProductById = cache((id: string) => {
  return products.find((p) => p.id === Number.parseInt(id)) || null;
});

export const getRelatedProducts = (productId: string) => {
  return products
    .filter(
      (p) =>
        p.category === getProductById(productId.toString())?.category &&
        p.id !== Number.parseInt(productId.toString())
    )
    .slice(0, 3);
};
