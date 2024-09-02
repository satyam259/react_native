export const getLocationUriFromCoords = async (latitude: number, longitude: number): Promise<string> => {
    const googleMapsApiKey = 'add-your-key';
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`;
    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.status === 'OK') {
        const addressComponents = data.results[0].address_components;
        const administrativeArea = addressComponents.find((component: any) =>
          component.types.includes('administrative_area_level_1')
        );
        const country = addressComponents.find((component: any) =>
          component.types.includes('country')
        );

        const locationUri = administrativeArea
          ? `http://en.wikipedia.org/wiki/${administrativeArea.long_name.replace(/ /g, '_')}`
          : country
          ? `http://en.wikipedia.org/wiki/${country.long_name.replace(/ /g, '_')}`
          : `http://en.wikipedia.org/wiki/United_States`;
        return locationUri;
      } else {
        throw new Error('Geocoding failed');
      }
    } catch (error) {
      console.error('Error fetching geolocation data:', error);
      return 'http://en.wikipedia.org/wiki/United_States';
    }
  };