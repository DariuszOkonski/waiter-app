export const fetchStatuses = async () => {
  try {
    const res = await fetch('http://localhost:3131/api/statuses');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const statuses = await res.json();
    return statuses;
  } catch (error) {
    console.error('Error fetching tables:', error);
    throw error;
  }
};
