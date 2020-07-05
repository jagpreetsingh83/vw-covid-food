export const endpointUrls = {
  COVID_DATA: () => {
    return `https://data.cityofnewyork.us/api/views/sp4a-vevi/rows.json?accessType=DOWNLOAD`;
  },
  LOCATION_URL: (address: string) => {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyB49GgrhM-pSmAukBKCPc6q6gHNMHo4MrU&q=${address}`;
  }
};
