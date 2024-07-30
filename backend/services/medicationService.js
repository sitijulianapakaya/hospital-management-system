// Mendapatkan daftar obat-obatan
export const getMedications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/medications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching medications:', error);
    throw error;
  }
};
