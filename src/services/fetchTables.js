export const fetchTables = async () => {
  try {
    const res = await fetch('http://localhost:3131/api/tables');

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const tables = await res.json();
    return tables;
  } catch (error) {
    console.error('Error fetching tables:', error);
    throw error;
  }
};
