export const CONTACT_NUMBER = '918686154646';

export const DOMESTIC_BUY_LINK = 'https://dl.flipkart.com/s/5AyKIeuuuN';
export const COMMERCIAL_WHATSAPP_LINK = `https://wa.me/${CONTACT_NUMBER}`;

export const domesticProducts = [
  { id: 'dom-1', name: 'KNJ ROXX Solid Filter Cartridge', tag: 'Best Seller' },
  { id: 'dom-2', name: 'Domestic RO Membrane Filter', tag: 'Home Use' },
  { id: 'dom-3', name: 'Kitchen Sediment Cartridge', tag: 'Quick Replace' },
  { id: 'dom-4', name: 'Activated Carbon Cartridge', tag: 'Odor Control' },
  { id: 'dom-5', name: 'Inline Mineral Cartridge', tag: 'Taste Boost' },
  { id: 'dom-6', name: 'Pre-Filter Housing Kit', tag: 'Easy Fit' },
];

export const commercialProducts = [
  { id: 'com-1', name: 'Commercial RO Plant', tag: '500-20,000 LPH' },
  { id: 'com-2', name: 'Bottle Rinsing Machine', tag: 'Line Ready' },
  { id: 'com-3', name: 'Automatic Filling Machine', tag: 'Industrial Grade' },
  { id: 'com-4', name: 'Capping and Seaming Machine', tag: 'High Output' },
  { id: 'com-5', name: 'Blending and Process Tank', tag: 'Custom Build' },
  { id: 'com-6', name: 'Packaging and Labeling Line', tag: 'End-to-End' },
];

export const getCommercialWhatsAppLink = (productName) => {
  const text = encodeURIComponent(`Hi, I want info for: ${productName}`);
  return `https://wa.me/${CONTACT_NUMBER}?text=${text}`;
};
