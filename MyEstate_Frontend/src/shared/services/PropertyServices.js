export const GetRequestData = (
  propertyData,
  propType,
  images,
  userId,
  sell,
  defaultImages,
) => {
  const property = {
    name: propertyData.prop_name,
    bhk: propertyData.prop_bhk,
    type: propType,
    area: propertyData.prop_area,
    city: propertyData.prop_city,
    description: propertyData.prop_desc,
    latitude: propertyData.prop_latitute,
    longitude: propertyData.prop_longitude,
    locality: propertyData.prop_locality,
    street: propertyData.prop_street,
    price: propertyData.prop_price,
    pincode: propertyData.prop_pincode,
    userId: userId,
  };
  let amenities = {};
  let furnishing = {};
  let rooms = {};
  let rent = {};

  if (propType !== 1) {
    amenities = {
      carParking: propertyData.prop_car_parking,
      internet: propertyData.prop_internet,
      maintenance: propertyData.prop_maintenance,
      porwerBackup: propertyData.prop_power_backup,
      rainWaterHarvesting: propertyData.prop_rain_water_harvesting,
      security: propertyData.prop_security,
      park: propertyData.prop_park,
      gym: propertyData.prop_gym,
      garden: propertyData.prop_garden,
      lift: propertyData.prop_lift,
      atm: propertyData.prop_atm,
      reservedParking: propertyData.prop_resevrved_parking,
    };

    furnishing = {
      bed: propertyData.prop_bed,
      ac: propertyData.prop_ac,
      tv: propertyData.prop_tv,
      diningTable: propertyData.prop_dining_table,
      washingMachine: propertyData.prop_washing_machine,
      wifiRouter: propertyData.prop_wifi_connection,
    };

    rooms = {
      bedRooms: propertyData.prop_bedroom,
      washRooms: propertyData.prop_washroom,
      balconies: propertyData.prop_balconies,
      halls: propertyData.prop_halls,
    };
  }

  if (!sell) {
    rent = {
      tenantType: propertyData.prop_tenant_type,
      tenantWork: propertyData.prop_tenant_work,
      tenantFoodType: propertyData.prop_tenant_food,
      tenantStay: propertyData.prop_tenant_stay,
    };
  }

  const formData = new FormData();
  formData.append('propertyDetails', JSON.stringify(property));
  formData.append('propertyAmenities', JSON.stringify(amenities));
  formData.append('propertyRooms', JSON.stringify(rooms));
  formData.append('propertyRent', JSON.stringify(rent));
  formData.append('propertyFurnishings', JSON.stringify(furnishing));

  if (defaultImages === undefined) {
    images.forEach((image) => {
      formData.append(image.name, image);
    });
  } else {
    // for finding current images which are removed by user
    let currentImages = [];
    images.forEach((image) => {
      if (image.type !== undefined) {
        formData.append(image.name, image);
      } else {
        currentImages.push(image.name);
      }
    });
    const removedImages = defaultImages.filter((val) => {
      let name = val.url.split('/');
      if (!currentImages.includes(name[name.length - 1])) return defaultImages;
    });
    formData.append('removedImages', JSON.stringify(removedImages));
  }

  return formData;
};

export const GetInitialValues = (data) => {
  const initialValue = {
    prop_name: data.name,
    prop_bhk: data.bhk,
    prop_city: data.city,
    prop_area: data.sqft,
    prop_desc: data.description,
    prop_latitute: data.latitude,
    prop_longitude: data.longitude,
    prop_locality: data.locality,
    prop_street: data.street,
    prop_price: data.price,
    prop_pincode: data.pincode,
    prop_car_parking: data.propertyAmenities?.carparking,
    prop_internet: data.propertyAmenities?.internet,
    prop_maintenance: data.propertyAmenities?.maintenance,
    prop_power_backup: data.propertyAmenities?.powerBackup,
    prop_rain_water_harvesting: data.propertyAmenities?.rainWaterHarvesting,
    prop_security: data.propertyAmenities?.security,
    prop_park: data.propertyAmenities?.park,
    prop_gym: data.propertyAmenities?.gym,
    prop_garden: data.propertyAmenities?.garden,
    prop_lift: data.propertyAmenities?.lift,
    prop_atm: data.propertyAmenities?.atm,
    prop_resevrved_parking: data.propertyAmenities?.reservedParking,
    prop_bed: data.propertyFurnishings?.bed,
    prop_ac: data.propertyFurnishings?.ac,
    prop_tv: data.propertyFurnishings?.tv,
    prop_dining_table: data.propertyFurnishings?.diningTable,
    prop_washing_machine: data.propertyFurnishings?.washingMachine,
    prop_wifi_connection: data.propertyFurnishings?.wifi,
    prop_bedroom: data.propertyRooms?.bedRooms,
    prop_washroom: data.propertyRooms?.washRooms,
    prop_balconies: data.propertyRooms?.balconies,
    prop_halls: data.propertyRooms?.halls,
    prop_tenant_type: data.propertyRentPreferences?.tenantType,
    prop_tenant_work: data.propertyRentPreferences?.work,
    prop_tenant_food: data.propertyRentPreferences?.foodType,
    prop_tenant_stay: data.propertyRentPreferences?.minimumStay,
  };
  return initialValue;
};

export const GetPropertyType = (data) => {
  if (data === 'Land') return 1;
  else if (data === 'Appartment') return 2;
  else if (data === 'Ville') return 3;
  return 4;
};
