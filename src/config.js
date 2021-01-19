const BASE_URL = 'https://wooliesxfechallenge.azurewebsites.net/api/v1/resources';
const API_KEY = '204196260c98f8e20514019ea82fc2bc5c68';
const configs = {
  apiUrls: {
    getProduct: `${BASE_URL}/products?token=${API_KEY}`,
    checkout: `${BASE_URL}/checkout?token=${API_KEY}`,
  },
};

module.exports = configs;