import { getImage } from '../utils/helpers.js';

export const productData = {
  'air-handling-units': {
    title: 'Air Handling Units',
    description:
      'Premium Products offers a comprehensive range of air handling units (AHUs) designed for commercial and industrial HVAC applications across Australia. Our AHUs are engineered for optimal performance, energy efficiency, and reliability.',
    image: getImage('thumb_cache/thumb_700_650_17-air-handling-unit-m-1.jpg'),
    longDescription:
      'Our air handling units are manufactured with high-quality components to ensure efficient air circulation, filtration, and temperature control. They are suitable for a wide range of applications including office buildings, hospitals, shopping centres, and industrial facilities.',
    features: [
      'High-efficiency fans for optimal air flow',
      'Modular design for flexible installation',
      'Premium quality insulation for thermal efficiency',
      'Corrosion-resistant casing for durability',
      'Customizable configurations to suit project requirements',
    ],
    products: [
      { name: 'Custom Air Handling Units', slug: 'custom-air-handling-units', image: getImage('thumb_cache/thumb_285_265_floor-mounted-ahu11.png') },
      { name: 'Air Handling Units with VRF Condenser', slug: 'air-handling-units-with-vrf-condenser', image: getImage('thumb_cache/thumb_285_265_097402601_angle.jpg') },
      { name: 'Rooftop Air Handling Units', slug: 'rooftop-air-handling-units', image: getImage('thumb_cache/thumb_285_265_product_banner_waves_ahu-1536x3201.png') },
      { name: 'Floor Mounted Air Handling Units', slug: 'floor-mounted-air-handling-units', image: getImage('thumb_cache/thumb_285_265_floor-mounted-ahu11.png') },
      { name: 'Vertical Air Handling Units', slug: 'vertical-air-handling-units', image: getImage('thumb_cache/thumb_285_265_vertical-ahu-2-800x1200-2.png') },
      { name: 'Ceiling Suspended Fan Coil Units', slug: 'ceiling-suspended-fan-coil-units', image: getImage('thumb_cache/thumb_285_265_17-air-handling-unit-m-1.jpg') },
    ],
  },
  'coils': {
    title: 'Coils',
    description:
      'We supply a wide range of HVAC coils including chilled water coils, hot water coils, steam coils, evaporator coils, and condenser coils for various industrial and commercial applications.',
    image: getImage('thumb_cache/thumb_700_650_dx-coil-1024x778.png'),
    longDescription:
      'Our coils are designed and manufactured to deliver optimal heat transfer performance. We use high-quality copper tubes and aluminum fins to ensure durability and efficiency.',
    features: [
      'High-quality copper tube construction',
      'Aluminum fins for enhanced heat transfer',
      'Custom sizing available',
      'Pressure tested for reliability',
      'Suitable for various refrigerants',
    ],
    products: [
      { name: 'CO2 Coils', slug: 'co2-coils', image: getImage('thumb_cache/thumb_285_265_331.png') },
      { name: 'Evaporator Coils', slug: 'evaporator-coils', image: getImage('thumb_cache/thumb_285_265_image003.png') },
      { name: 'Condenser Coils', slug: 'condenser-coils', image: getImage('thumb_cache/thumb_285_265_condenser.jpg') },
      { name: 'Hot Water and Chilled Water Coils', slug: 'hot-water-and-chilled-water-coils', image: getImage('thumb_cache/thumb_285_265_hot-water-coil.png') },
      { name: 'Steam Coils', slug: 'steam-coils', image: getImage('thumb_cache/thumb_285_265_steam.jpg') },
      { name: 'Micro Channel Coils', slug: 'micro-channel-coils', image: getImage('thumb_cache/thumb_285_265_untitled.png') },
      { name: 'Stainless Steel Coil', slug: 'stainless-steel-coil', image: getImage('thumb_cache/thumb_285_265_image004.png') },
    ],
  },
  'dx-coil': {
    title: 'DX Coil',
    description:
      'Direct Expansion (DX) coils for HVAC systems providing efficient cooling and dehumidification for commercial and industrial applications.',
    image: getImage('thumb_cache/thumb_700_650_dx-coil-1024x778.png'),
    longDescription:
      'Our DX coils are engineered for superior cooling performance, offering excellent heat transfer capabilities and energy efficiency. They are compatible with a wide range of refrigerants.',
    features: [
      'Direct expansion cooling technology',
      'High heat transfer efficiency',
      'Compatible with multiple refrigerants',
      'Copper tube and aluminum fin construction',
      'Custom configurations available',
    ],
    products: [
      { name: 'DX Coil with VRF Condenser Suppliers', slug: 'dx-coil-with-vrf-condenser-suppliers', image: getImage('thumb_cache/thumb_285_265_dx-coil-1024x778.png') },
    ],
  },
  'ec-fans': {
    title: 'EC Fans',
    description:
      'Energy-efficient EC (Electronically Commutated) fans for HVAC systems, offering superior performance, reduced energy consumption, and quiet operation.',
    image: getImage('thumb_cache/thumb_700_650_whatsapp-image-2025-04-03-at-2-28-24-pm3.jpeg'),
    longDescription:
      'Our EC fans combine the best of AC and DC fan technology, delivering high efficiency, variable speed control, and long service life. They are ideal for modern HVAC systems requiring precise air flow control.',
    features: [
      'Up to 70% energy savings compared to AC fans',
      'Variable speed control for precise air flow',
      'Low noise operation',
      'Long service life with maintenance-free bearings',
      'Compact design for easy integration',
    ],
    products: [
      { name: '355-1.8kW-3ph EC Fan', slug: '355-1-8kw-3ph', image: getImage('thumb_cache/thumb_285_265_whatsapp-image-2025-04-03-at-2-28-24-pm3.jpeg') },
      { name: '355-650W-1ph EC Fan', slug: '355-650w-1ph', image: getImage('thumb_cache/thumb_285_265_whatsapp-image-2025-04-03-at-12-42-26-pm.jpeg') },
      { name: '450-1.8kW-3ph EC Fan', slug: '450-1-8kw-3ph', image: getImage('thumb_cache/thumb_285_265_whatsapp-image-2025-04-03-at-12.56.16-pm.jpeg') },
      { name: '560-3.6kW-3ph EC Fan', slug: '560-3-6kw-3ph', image: getImage('thumb_cache/thumb_285_265_whatsapp-image-2025-04-03-at-2-28-24-pm.jpeg') },
    ],
  },
  'heat-recovery-units-with-vrf-condenser': {
    title: 'Heat Recovery Units with VRF Condenser',
    description:
      'Heat recovery units with VRF condenser technology for energy-efficient HVAC solutions that recover waste heat and reduce overall energy consumption.',
    image: getImage('thumb_cache/thumb_700_650_097402601_angle.jpg'),
    longDescription:
      'Our heat recovery units integrate VRF condenser technology to maximize energy efficiency by recovering waste heat from the system. This allows for simultaneous heating and cooling in different zones.',
    features: [
      'Simultaneous heating and cooling',
      'Waste heat recovery for enhanced efficiency',
      'VRF condenser technology',
      'Zone-by-zone temperature control',
      'Reduced energy consumption',
    ],
    products: [],
  },
  'heat-exchangers': {
    title: 'Heat Exchangers',
    description:
      'High-performance heat exchangers for HVAC and industrial applications, designed for efficient thermal energy transfer between fluid streams.',
    image: getImage('thumb_cache/thumb_700_650_steam.jpg'),
    longDescription:
      'Our heat exchangers are engineered for maximum thermal efficiency and durability. They are suitable for a variety of applications including HVAC systems, industrial processes, and refrigeration.',
    features: [
      'High thermal transfer efficiency',
      'Durable construction for long service life',
      'Available in multiple configurations',
      'Suitable for various fluid types',
      'Custom designs available',
    ],
    products: [
      { name: 'Shell and Tube Condenser', slug: 'shell-tube-condenser', image: getImage('thumb_cache/thumb_285_265_steam.jpg') },
    ],
  },
  'dehumidifiers': {
    title: 'Dehumidifiers',
    description:
      'Industrial and commercial dehumidifiers for controlling humidity levels in various environments, ensuring optimal air quality and comfort.',
    image: getImage('thumb_cache/thumb_700_650_steam.jpg'),
    longDescription:
      'Our dehumidifiers are designed to effectively remove excess moisture from the air, preventing mold growth and maintaining comfortable humidity levels. They are suitable for industrial, commercial, and residential applications.',
    features: [
      'High moisture removal capacity',
      'Energy efficient operation',
      'Automatic humidity control',
      'Compact and portable designs',
      'Low noise operation',
    ],
    products: [],
  },
};

export const productDetailData = {
  'custom-air-handling-units': {
    title: 'Custom Air Handling Units',
    category: 'air-handling-units',
    image: getImage('thumb_cache/thumb_900_694_floor-mounted-ahu11.png'),
    description:
      'Our custom air handling units are designed and manufactured to meet the specific requirements of your project. With flexible configurations, premium components, and robust construction, our custom AHUs deliver superior performance for any application.',
    features: [
      'Fully customizable design to meet project specifications',
      'High-efficiency fans and motors',
      'Premium insulation for thermal efficiency',
      'Galvanized or stainless steel construction',
      'Available in various sizes and capacities',
      'Integrated controls and sensors',
    ],
    specifications: [
      { label: 'Air Flow Range', value: '500 - 100,000 CMH' },
      { label: 'Cooling Capacity', value: '5 - 500 kW' },
      { label: 'Casing', value: 'Galvanized / Stainless Steel' },
      { label: 'Insulation', value: '25mm / 50mm PU Foam' },
      { label: 'Fan Type', value: 'EC / Plug Fan' },
    ],
  },
  'air-handling-units-with-vrf-condenser': {
    title: 'Air Handling Units with VRF Condenser',
    category: 'air-handling-units',
    image: getImage('thumb_cache/thumb_900_694_097402601_angle.jpg'),
    description:
      'Air handling units integrated with VRF condenser technology offer simultaneous heating and cooling capabilities with high energy efficiency. Ideal for buildings with diverse zone requirements.',
    features: [
      'Simultaneous heating and cooling',
      'VRF condenser integration',
      'Energy efficient operation',
      'Zone-by-zone temperature control',
      'Compact design',
      'Advanced control systems',
    ],
    specifications: [
      { label: 'Air Flow Range', value: '1,000 - 50,000 CMH' },
      { label: 'Cooling Capacity', value: '10 - 200 kW' },
      { label: 'Heating Capacity', value: '10 - 220 kW' },
      { label: 'Compressor Type', value: 'Inverter Scroll' },
      { label: 'Refrigerant', value: 'R410A / R32' },
    ],
  },
  'rooftop-air-handling-units': {
    title: 'Rooftop Air Handling Units',
    category: 'air-handling-units',
    image: getImage('thumb_cache/thumb_900_694_product_banner_waves_ahu-1536x320.png'),
    description:
      'Rooftop air handling units are designed for outdoor installation on building rooftops, providing efficient air handling without occupying valuable indoor space. Weatherproof construction ensures reliable operation in all conditions.',
    features: [
      'Weatherproof outdoor construction',
      'Space-saving rooftop installation',
      'High-efficiency components',
      'Corrosion-resistant casing',
      'Easy maintenance access',
      'Available in various capacities',
    ],
    specifications: [
      { label: 'Air Flow Range', value: '1,000 - 80,000 CMH' },
      { label: 'Cooling Capacity', value: '10 - 300 kW' },
      { label: 'Casing', value: 'Weatherproof Galvanized Steel' },
      { label: 'Insulation', value: '50mm PU Foam' },
      { label: 'Protection Rating', value: 'IP54 / IP55' },
    ],
  },
  'floor-mounted-air-handling-units': {
    title: 'Floor Mounted Air Handling Units',
    category: 'air-handling-units',
    image: getImage('thumb_cache/thumb_900_694_floor-mounted-ahu11.png'),
    description:
      'Floor mounted air handling units offer a robust and versatile solution for commercial and industrial HVAC applications. Easy to install and maintain, these units are ideal for plant rooms and mechanical floors.',
    features: [
      'Sturdy floor mounted design',
      'Easy installation and maintenance',
      'Modular construction',
      'High-efficiency fans',
      'Multiple filter options',
      'Customizable configurations',
    ],
    specifications: [
      { label: 'Air Flow Range', value: '500 - 60,000 CMH' },
      { label: 'Cooling Capacity', value: '5 - 250 kW' },
      { label: 'Casing', value: 'Galvanized Steel' },
      { label: 'Insulation', value: '25mm / 50mm PU Foam' },
      { label: 'Fan Type', value: 'EC / Centrifugal' },
    ],
  },
  'vertical-air-handling-units': {
    title: 'Vertical Air Handling Units',
    category: 'air-handling-units',
    image: getImage('thumb_cache/thumb_900_694_vertical-ahu-2-800x1200-2.png'),
    description:
      'Vertical air handling units are designed for spaces with limited floor area. The vertical configuration saves valuable floor space while delivering excellent air handling performance.',
    features: [
      'Space-saving vertical design',
      'Ideal for restricted floor spaces',
      'High-efficiency components',
      'Quiet operation',
      'Easy installation',
      'Customizable options',
    ],
    specifications: [
      { label: 'Air Flow Range', value: '500 - 30,000 CMH' },
      { label: 'Cooling Capacity', value: '5 - 150 kW' },
      { label: 'Casing', value: 'Galvanized / Stainless Steel' },
      { label: 'Insulation', value: '25mm / 50mm PU Foam' },
      { label: 'Fan Type', value: 'EC / Plug Fan' },
    ],
  },
  'ceiling-suspended-fan-coil-units': {
    title: 'Ceiling Suspended Fan Coil Units',
    category: 'air-handling-units',
    image: getImage('thumb_cache/thumb_900_694_17-air-handling-unit-m-1.jpg'),
    description:
      'Ceiling suspended fan coil units provide discreet and efficient climate control for individual rooms or zones. Their compact design allows for easy installation in ceiling spaces.',
    features: [
      'Compact ceiling suspended design',
      'Individual zone control',
      'Quiet operation',
      'Easy installation',
      'Low maintenance',
      'Available in multiple capacities',
    ],
    specifications: [
      { label: 'Air Flow Range', value: '200 - 2,500 CMH' },
      { label: 'Cooling Capacity', value: '2 - 25 kW' },
      { label: 'Fan Type', value: 'EC / Centrifugal' },
      { label: 'Controls', value: 'Analog / Digital' },
      { label: 'Installation', value: 'Ceiling Suspended' },
    ],
  },
  'co2-coils': {
    title: 'CO2 Coils',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_331.png'),
    description:
      'CO2 coils designed for refrigeration and HVAC systems using CO2 as a refrigerant. These coils are engineered to handle the high pressures associated with CO2 systems.',
    features: [
      'Designed for CO2 refrigerant systems',
      'High-pressure rated construction',
      'Corrosion-resistant materials',
      'Optimized fin design for maximum heat transfer',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Refrigerant', value: 'CO2 (R744)' },
      { label: 'Operating Pressure', value: 'Up to 130 bar' },
      { label: 'Tube Material', value: 'Copper / Stainless Steel' },
      { label: 'Fin Material', value: 'Aluminum / Copper' },
      { label: 'Connection Type', value: 'Brazed / Threaded' },
    ],
  },
  'evaporator-coils': {
    title: 'Evaporator Coils',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_image003.png'),
    description:
      'Evaporator coils for HVAC systems providing efficient cooling and heat transfer. Our coils are manufactured with high-quality materials for reliable and long-lasting performance.',
    features: [
      'High-efficiency heat transfer',
      'Copper tube construction',
      'Aluminum fins',
      'Multiple circuit configurations',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Tube Material', value: 'Copper' },
      { label: 'Fin Material', value: 'Aluminum' },
      { label: 'Fin Spacing', value: 'Customizable' },
      { label: 'Circuit Configuration', value: 'Customizable' },
      { label: 'Connection Type', value: 'Brazed' },
    ],
  },
  'condenser-coils': {
    title: 'Condenser Coils',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_condenser.jpg'),
    description:
      'Condenser coils for air conditioning and refrigeration systems. Designed to efficiently reject heat from the refrigerant to the surrounding air.',
    features: [
      'Efficient heat rejection',
      'Corrosion-resistant coatings available',
      'Copper tube and aluminum fin construction',
      'Multiple row configurations',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Tube Material', value: 'Copper' },
      { label: 'Fin Material', value: 'Aluminum' },
      { label: 'Rows', value: '1 - 8 rows' },
      { label: 'Fins Per Inch', value: '8 - 20 FPI' },
      { label: 'Connection Type', value: 'Brazed' },
    ],
  },
  'hot-water-and-chilled-water-coils': {
    title: 'Hot Water and Chilled Water Coils',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_hot-water-coil.png'),
    description:
      'Hot water and chilled water coils for HVAC systems. These coils are designed for use with hydronic heating and cooling systems, providing efficient heat transfer.',
    features: [
      'Suitable for hot and chilled water systems',
      'High-quality copper tubes',
      'Aluminum fins for enhanced heat transfer',
      'Multiple row configurations',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Tube Material', value: 'Copper' },
      { label: 'Fin Material', value: 'Aluminum' },
      { label: 'Rows', value: '1 - 8 rows' },
      { label: 'Water Connection', value: 'Threaded / Flanged' },
      { label: 'Operating Pressure', value: 'Up to 16 bar' },
    ],
  },
  'steam-coils': {
    title: 'Steam Coils',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_steam.jpg'),
    description:
      'Steam coils for industrial HVAC heating applications. Designed to handle high-temperature steam for efficient heating of air streams.',
    features: [
      'High-temperature steam rated',
      'Durable construction',
      'Copper or stainless steel tubes',
      'Efficient heat transfer',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Tube Material', value: 'Copper / Stainless Steel' },
      { label: 'Fin Material', value: 'Aluminum / Stainless Steel' },
      { label: 'Steam Pressure', value: 'Up to 10 bar' },
      { label: 'Steam Temperature', value: 'Up to 180°C' },
      { label: 'Connection Type', value: 'Flanged / Threaded' },
    ],
  },
  'micro-channel-coils': {
    title: 'Micro Channel Coils',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_untitled.png'),
    description:
      'Micro channel coils offer superior heat transfer efficiency with a lightweight and compact design. All-aluminum construction provides excellent corrosion resistance.',
    features: [
      'All-aluminum construction',
      'Superior heat transfer efficiency',
      'Lightweight and compact',
      'Excellent corrosion resistance',
      'Reduced refrigerant charge',
    ],
    specifications: [
      { label: 'Material', value: 'All Aluminum' },
      { label: 'Tube Type', value: 'Multi-Port Extruded' },
      { label: 'Fin Type', value: 'Louvered Fin' },
      { label: 'Operating Pressure', value: 'Up to 45 bar' },
      { label: 'Corrosion Protection', value: 'E-coating available' },
    ],
  },
  'dx-coil-with-vrf-condenser-suppliers': {
    title: 'DX Coil with VRF Condenser Suppliers',
    category: 'dx-coil',
    image: getImage('thumb_cache/thumb_900_694_dx-coil-1024x778.png'),
    description:
      'Direct expansion coils integrated with VRF condenser systems for efficient and flexible cooling solutions. As leading suppliers, we provide high-quality DX coils compatible with major VRF systems.',
    features: [
      'Compatible with major VRF systems',
      'High-efficiency direct expansion cooling',
      'Copper tube and aluminum fin construction',
      'Custom sizing available',
      'Simultaneous heating and cooling capability',
    ],
    specifications: [
      { label: 'Refrigerant', value: 'R410A / R32' },
      { label: 'Tube Material', value: 'Copper' },
      { label: 'Fin Material', value: 'Aluminum' },
      { label: 'Operating Pressure', value: 'Up to 45 bar' },
      { label: 'Compatible Brands', value: 'Daikin, Mitsubishi, LG, Samsung' },
    ],
  },
  '355-1-8kw-3ph': {
    title: 'EC Fan 355-1.8kW-3ph',
    category: 'ec-fans',
    image: getImage('thumb_cache/thumb_900_694_whatsapp-image-2025-04-03-at-2-28-24-pm3.jpeg'),
    description:
      'EC fan model 355-1.8kW-3ph is a high-efficiency, 3-phase electronically commutated fan designed for HVAC applications requiring precise air flow control and energy savings.',
    features: [
      '1.8kW 3-phase EC motor',
      'Variable speed control',
      'High efficiency up to 85%',
      'Low noise operation',
      'Maintenance-free bearings',
    ],
    specifications: [
      { label: 'Power', value: '1.8 kW' },
      { label: 'Phase', value: '3 Phase' },
      { label: 'Voltage', value: '380-480V' },
      { label: 'Fan Diameter', value: '355 mm' },
      { label: 'Speed Control', value: '0-10V / PWM / Modbus' },
    ],
  },
  '355-650w-1ph': {
    title: 'EC Fan 355-650W-1ph',
    category: 'ec-fans',
    image: getImage('thumb_cache/thumb_900_694_whatsapp-image-2025-04-03-at-12-42-26-pm.jpeg'),
    description:
      'EC fan model 355-650W-1ph is a high-efficiency, single-phase electronically commutated fan suitable for smaller HVAC applications requiring variable speed control.',
    features: [
      '650W single-phase EC motor',
      'Variable speed control',
      'High efficiency',
      'Low noise operation',
      'Compact design',
    ],
    specifications: [
      { label: 'Power', value: '650 W' },
      { label: 'Phase', value: '1 Phase' },
      { label: 'Voltage', value: '200-240V' },
      { label: 'Fan Diameter', value: '355 mm' },
      { label: 'Speed Control', value: '0-10V / PWM' },
    ],
  },
  '450-1-8kw-3ph': {
    title: 'EC Fan 450-1.8kW-3ph',
    category: 'ec-fans',
    image: getImage('thumb_cache/thumb_900_694_whatsapp-image-2025-04-03-at-12.56.16-pm.jpeg'),
    description:
      'EC fan model 450-1.8kW-3ph is a high-efficiency, 3-phase electronically commutated fan with a larger diameter for higher air flow applications.',
    features: [
      '1.8kW 3-phase EC motor',
      'Variable speed control',
      'High air flow capacity',
      'Low noise operation',
      'Maintenance-free bearings',
    ],
    specifications: [
      { label: 'Power', value: '1.8 kW' },
      { label: 'Phase', value: '3 Phase' },
      { label: 'Voltage', value: '380-480V' },
      { label: 'Fan Diameter', value: '450 mm' },
      { label: 'Speed Control', value: '0-10V / PWM / Modbus' },
    ],
  },
  '560-3-6kw-3ph': {
    title: 'EC Fan 560-3.6kW-3ph',
    category: 'ec-fans',
    image: getImage('thumb_cache/thumb_900_694_whatsapp-image-2025-04-03-at-2-28-24-pm3.jpeg'),
    description:
      'EC fan model 560-3.6kW-3ph is our largest EC fan, designed for high-capacity HVAC applications requiring maximum air flow and energy efficiency.',
    features: [
      '3.6kW 3-phase EC motor',
      'Variable speed control',
      'Maximum air flow capacity',
      'High efficiency up to 88%',
      'Maintenance-free bearings',
    ],
    specifications: [
      { label: 'Power', value: '3.6 kW' },
      { label: 'Phase', value: '3 Phase' },
      { label: 'Voltage', value: '380-480V' },
      { label: 'Fan Diameter', value: '560 mm' },
      { label: 'Speed Control', value: '0-10V / PWM / Modbus' },
    ],
  },
  'shell-tube-condenser': {
    title: 'Shell and Tube Condenser',
    category: 'heat-exchangers',
    image: getImage('thumb_cache/thumb_285_265_steam.jpg'),
    description:
      'Shell and tube condensers for industrial refrigeration and HVAC applications. Designed for high-efficiency heat exchange between refrigerant and cooling water.',
    features: [
      'High-efficiency heat exchange',
      'Durable steel shell construction',
      'Copper or stainless steel tubes',
      'Suitable for various refrigerants',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Shell Material', value: 'Carbon Steel / Stainless Steel' },
      { label: 'Tube Material', value: 'Copper / Stainless Steel' },
      { label: 'Operating Pressure', value: 'Up to 25 bar' },
      { label: 'Cooling Capacity', value: '10 - 1,000 kW' },
      { label: 'Connection Type', value: 'Flanged' },
    ],
  },
  'stainless-steel-coil': {
    title: 'Stainless Steel Coil',
    category: 'coils',
    image: getImage('thumb_cache/thumb_900_694_image004.png'),
    description:
      'Stainless steel coils for corrosive environments and specialized applications. Made with high-quality stainless steel for maximum durability and corrosion resistance.',
    features: [
      'Full stainless steel construction',
      'Excellent corrosion resistance',
      'Suitable for harsh environments',
      'High-temperature rated',
      'Custom sizing available',
    ],
    specifications: [
      { label: 'Tube Material', value: 'Stainless Steel 316' },
      { label: 'Fin Material', value: 'Stainless Steel' },
      { label: 'Operating Temperature', value: 'Up to 400°C' },
      { label: 'Corrosion Resistance', value: 'Excellent' },
      { label: 'Application', value: 'Corrosive / High Temp' },
    ],
  },
};
