export const fetchPeople = async () => {
  try {
    const res = await fetch('http://localhost:3131/api/people');

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const people = await res.json();
    return people;
  } catch (error) {
    console.error('Error fetching people: ', error);
    throw error;
  }
};
