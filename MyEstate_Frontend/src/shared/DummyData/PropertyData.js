const PropertyData = [
  {
    id: 1,
    name: 'Dk property',
    type: 'Appartment',
    description:
      'Enviably located in a premium neighbourhood, Lucien offers a cornucopia of comforts where nothing has been left to chance. With a generous floorplan bathed in natural light befitting the name ‘Lucien’ it provides for a welcoming ambience. The well-planned homes are warm, spacious and beautifully styled and the architecture ensures refreshing breeze and ample natural light throughout. A landmark property of exquisite luxury and refinement, these captivating homes embrace contemporary family life with its bespoke blend of innate grandeur and high-end architectural design. Smart, sophisticated and stylish, Lucien is a classical combination of luxury apartments high on aesthetics and delivers a fluid living experience.',
    pictures: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],

    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'Perris',
      state: 'California',
      street: 'ABC street',
    },
  },
  {
    id: 2,
    type: 'Villa',
    name: 'Dk villa',
    description:
      'Enviably located in a premium neighbourhood, Lucien offers a cornucopia of comforts where nothing has been left to chance. With a generous floorplan bathed in natural light befitting the name ‘Lucien’ it provides for a welcoming ambience. The well-planned homes are warm, spacious and beautifully styled and the architecture ensures refreshing breeze and ample natural light throughout. A landmark property of exquisite luxury and refinement, these captivating homes embrace contemporary family life with its bespoke blend of innate grandeur and high-end architectural design. Smart, sophisticated and stylish, Lucien is a classical combination of luxury apartments high on aesthetics and delivers a fluid living experience.',

    pictures: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],

    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      state: 'California',
      street: 'Egavalli Amman koil street sdsfdgfxhfghghcghghxfhfxhxfhx ',
    },
  },
  {
    id: 3,
    type: 'House',
    description:
      'Enviably located in a premium neighbourhood, Lucien offers a cornucopia of comforts where nothing has been left to chance. With a generous floorplan bathed in natural light befitting the name ‘Lucien’ it provides for a welcoming ambience. The well-planned homes are warm, spacious and beautifully styled and the architecture ensures refreshing breeze and ample natural light throughout. A landmark property of exquisite luxury and refinement, these captivating homes embrace contemporary family life with its bespoke blend of innate grandeur and high-end architectural design. Smart, sophisticated and stylish, Lucien is a classical combination of luxury apartments high on aesthetics and delivers a fluid living experience.',

    pictures: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],

    details: {
      sqft: 100,
      price: 1000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: false,
        maintenance: false,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: false,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      state: 'California',
      street: 'ABC sdsfdgfxhfghghcghghxfhfxhxfhx Apartment',
    },
  },
  {
    id: 4,
    type: 'Appartment',
    description:
      'Enviably located in a premium neighbourhood, Lucien offers a cornucopia of comforts where nothing has been left to chance. With a generous floorplan bathed in natural light befitting the name ‘Lucien’ it provides for a welcoming ambience. The well-planned homes are warm, spacious and beautifully styled and the architecture ensures refreshing breeze and ample natural light throughout. A landmark property of exquisite luxury and refinement, these captivating homes embrace contemporary family life with its bespoke blend of innate grandeur and high-end architectural design. Smart, sophisticated and stylish, Lucien is a classical combination of luxury apartments high on aesthetics and delivers a fluid living experience.',
    pictures: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],

    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },

    rooms: null,
    address: {
      pincode: 600166,
      city: 'chennai',
      state: 'California',
      street: 'sdsfdgfxhfghghcghghxfhfxhxfhxrffgdgsfs street',
    },
  },
  {
    id: 5,
    type: 'Appartment',

    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },

    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 6,
    type: 'Appartment',

    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 7,
    type: 'Appartment',
    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 8,
    type: 'Appartment',
    description:
      'Enviably located in a premium neighbourhood, Lucien offers a cornucopia of comforts where nothing has been left to chance. With a generous floorplan bathed in natural light befitting the name ‘Lucien’ it provides for a welcoming ambience. The well-planned homes are warm, spacious and beautifully styled and the architecture ensures refreshing breeze and ample natural light throughout. A landmark property of exquisite luxury and refinement, these captivating homes embrace contemporary family life with its bespoke blend of innate grandeur and high-end architectural design. Smart, sophisticated and stylish, Lucien is a classical combination of luxury apartments high on aesthetics and delivers a fluid living experience.',
    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: '14 lakhs',
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 9,
    type: 'Appartment',
    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },

    rooms: null,
    address: {
      pincode: 777195,
      city: 'Chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 10,
    type: 'Appartment',
    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'Arrakonam',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 11,
    type: 'Appartment',
    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
  {
    id: 12,
    type: 'Land',
    pictures: [
      'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ],
    details: {
      sqft: 100,
      price: 10000,
      roomtype: '2bhk',
      amenties: {
        carparking: true,
        wifi: true,
        maintenance: true,
        rainwaterharvesting: true,
        powerbackup: true,
        park: true,
        gym: true,
      },
      rooms: {
        bedrooms: 2,
        washrooms: 3,
        balconies: 4,
        halls: 2,
      },
      furnishing: {
        bed: 1,
        ac: 2,
        tv: 2,
      },
    },
    rooms: null,
    address: {
      pincode: 777195,
      city: 'chennai',
      street: 'ABC street',
      state: 'California',
    },
  },
];

export default PropertyData;
