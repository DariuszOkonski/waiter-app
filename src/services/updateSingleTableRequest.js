export const updateSingleTableRequest = async (table) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: table.id,
        name: table.name,
        status: table.status,
        people: table.people,
        maxPeople: table.maxPeople,
        bill: table.bill,
      }),
    };

    await fetch(`http://localhost:3131/tables/${table.id}`, options);
  } catch (error) {
    console.error('Error while updating single table: ', error);
    throw error;
  }
};
