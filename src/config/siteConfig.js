export const siteConfig = {
  name: 'Premium Products',
  tagline: 'Where Quality HVAC Solutions Matter',
  phone: '+61 468 493 451',
  email: 'info@premiumproducts.com.au',
  address: '52 Bernborough Avenue 52, Cranbourne, West Victoria - 3977, Australia',
  social: {
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/company/premium-hvac-products-pty-ltd',
    instagram: 'https://www.instagram.com/',
  },
};

export const navItems = [
  { label: 'Home', path: '/index' },
  { label: 'About Us', path: '/about-us' },
  {
    label: 'Products',
    path: null,
    children: [
      { label: 'Air Handling Units', path: '/air-handling-units' },
      { label: 'Coils', path: '/coils' },
      { label: 'DX Coil', path: '/dx-coil' },
      { label: 'Heat Recovery', path: '/heat-recovery-units-with-vrf-condenser' },
      { label: 'EC Fans', path: '/ec-fans' },
      { label: 'Heat Exchangers', path: '/heat-exchangers' },
      { label: 'Dehumidifiers', path: '/dehumidifiers' },
    ],
  },
  {
    label: 'Gallery',
    path: null,
    children: [
      { label: 'Image Gallery', path: '/gallery' },
      { label: 'Video Gallery', path: '/videos' },
    ],
  },
  { label: 'Contact Us', path: '/contact-us' },
];

export const metaConfig = {
  'index': {
    title: 'Air Handling Units Australia | Fan Coil & HVAC Coils',
    description: 'Premium Products supplies air handling units, fan coil units, condenser coils, evaporator coils, and heating coils for HVAC systems across Australia.',
    keywords: 'air handling units, HVAC coils, fan coil units',
  },
  'about-us': {
    title: 'HVAC Supplier Australia | Air Handling Units Experts',
    description: 'Premium Products is a trusted HVAC supplier in Australia offering air handling units, fan coil units, and HVAC coils for commercial projects.',
    keywords: 'HVAC supplier, AHU, Australia',
  },
  'our-mission': {
    title: 'Our Mission | HVAC Systems & AHU Solutions Australia',
    description: 'Our mission is to deliver high-performance air handling units, fan coil units, and HVAC coil solutions across Australia.',
    keywords: '',
  },
  'our-vision': {
    title: 'Our Vision | Future HVAC & AHU Systems Australia',
    description: 'We aim to lead the HVAC industry in Australia with innovative air handling units and energy-efficient HVAC systems.',
    keywords: '',
  },
  'gallery': {
    title: 'HVAC Projects Australia | AHU & Fan Coil Installations',
    description: 'Explore HVAC projects featuring air handling units, fan coil units, condenser coils, and industrial HVAC installations across Australia.',
    keywords: '',
  },
  'contact-us': {
    title: 'Contact HVAC Supplier Australia | AHU & Coil Experts',
    description: 'Contact Premium Products for air handling units, fan coil units, and HVAC coil solutions across Australia.',
    keywords: '',
  },
  'co2-coils': {
    title: 'CO2 Coils Australia | Refrigeration & HVAC Coils',
    description: 'CO2 coils for refrigeration and HVAC systems in Australia ensuring efficient heat exchange performance.',
    keywords: '',
  },
  'evaporator-coils': {
    title: 'Evaporator Coils Australia | HVAC Cooling Coils',
    description: 'Evaporator coils for HVAC systems in Australia delivering efficient cooling and heat transfer.',
    keywords: '',
  },
  'condenser-coils': {
    title: 'Condenser Coils Australia | Air Conditioner Coils',
    description: 'Condenser coils for air conditioning and HVAC systems in Australia ensuring efficient heat exchange.',
    keywords: '',
  },
  'steam-coils': {
    title: 'Steam Coils Australia | Industrial HVAC Heating Coils',
    description: 'Steam coils for industrial HVAC systems in Australia delivering efficient heating performance.',
    keywords: '',
  },
  'default': {
    title: 'Premium Products',
    description: 'Premium HVAC solutions',
    keywords: '',
  },
};

export const categoryList = [
  { name: 'Air Handling Units', slug: 'air-handling-units', image: 'thumb_cache/thumb_285_265_product_banner_waves_ahu-1536x3201.png' },
  { name: 'Coils', slug: 'coils', image: 'thumb_cache/thumb_285_265_dx-coil-1024x778.png' },
  { name: 'DX Coil', slug: 'dx-coil', image: 'thumb_cache/thumb_285_265_whatsapp-image-2024-10-17-at-11-44-06-am.jpeg' },
  { name: 'Heat Recovery units with VRF Condenser', slug: 'heat-recovery-units-with-vrf-condenser', image: 'thumb_cache/thumb_285_265_noimg1.gif' },
  { name: 'EC Fans', slug: 'ec-fans', image: 'thumb_cache/thumb_285_265_whatsapp-image-2025-04-03-at-2-28-24-pm.jpeg' },
  { name: 'Heat Exchangers', slug: 'heat-exchangers', image: 'thumb_cache/thumb_285_265_steam.jpg' },
  { name: 'Dehumidifiers', slug: 'dehumidifiers', image: 'thumb_cache/thumb_285_265_steam.jpg' },
];

export const sidebarCategories = [
  { name: 'Air Handling Units', slug: 'air-handling-units' },
  { name: 'Coils', slug: 'coils' },
  { name: 'DX Coil', slug: 'dx-coil' },
  { name: 'Heat Recovery units with VRF Condenser', slug: 'heat-recovery-units-with-vrf-condenser' },
  { name: 'EC Fans', slug: 'ec-fans' },
  { name: 'Heat Exchangers', slug: 'heat-exchangers' },
  { name: 'Dehumidifiers', slug: 'dehumidifiers' },
];
