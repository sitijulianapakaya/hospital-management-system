// Mendapatkan daftar billing
export const getBillings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/billings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching billings:', error);
    throw error;
  }
};
