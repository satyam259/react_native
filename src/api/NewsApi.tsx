import Geolocation from '@react-native-community/geolocation';
import { getLocationUriFromCoords } from '../components/geolocation';

// Function to format date to 'YYYY-MM-DD'
const formatDate = (date: Date): string => date.toISOString().split('T')[0];

export interface ApiResponse {
  articles: {
    results: any[];
    totalResults: number;
  };
}

// Reusable function to get news articles URL
export const getNewsApiUrl = async (): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const locationUri = await getLocationUriFromCoords(latitude, longitude); // Your custom function to get location URI

          const today = new Date();
          const startDate = new Date(today);
          startDate.setDate(today.getDate() - 5);
          const endDate = today;

          const startDateStr = formatDate(startDate);
          const endDateStr = formatDate(endDate);

          // Construct the URL with the location and date range
          let url = `https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2FBusiness%2FEnergy%22%7D%2C%7B%22locationUri%22%3A%22${locationUri}%22%7D%2C%7B%22dateStart%22%3A%22${startDateStr}%22%2C%22dateEnd%22%3A%22${endDateStr}%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22isDuplicate%22%3A%22skipDuplicates%22%7D%7D&resultType=articles&articlesSortBy=date&includeArticleCategories=true&includeArticleLocation=true&includeArticleImage=true&includeArticleLinks=true&apiKey=7ffe48d0-edee-4472-b99f-c4654432d2aa`;

          let response = await fetch(url);
          let data: ApiResponse = await response.json();

          // If no articles are found, use a broader location URI
          if (data.articles.totalResults === 0) {
            const broaderLocationUri = 'http://en.wikipedia.org/wiki/United_States';
            url = `https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22locationUri%22%3A%22${broaderLocationUri}%22%7D%2C%7B%22dateStart%22%3A%22${startDateStr}%22%2C%22dateEnd%22%3A%22${endDateStr}%22%2C%22lang%22%3A%22eng%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22isDuplicate%22%3A%22skipDuplicates%22%7D%7D&resultType=articles&articlesSortBy=date&includeArticleCategories=true&includeArticleLocation=true&includeArticleImage=true&includeArticleLinks=true&apiKey=7ffe48d0-edee-4472-b99f-c4654432d2aa`;

            response = await fetch(url);
            data = await response.json();
          }

          resolve(data);
        } catch (error) {
          console.error('Error fetching news data:', error);
          reject(error);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        reject(error);
      }
    );
  });
};
