export const fetchPlantData = async () => {
  try {
    const response = await fetch('https://api.example.com/plants');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};
