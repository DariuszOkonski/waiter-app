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

// TODO: to modify data on json-server, 13:00
// const options = {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: '1',
//     status: 'busy',
//     peopleAmount: 3,
//     maxPeopleAmount: 4,
//     bill: 45
//   }),
// };

// fetch('http://localhost:3131/tables/1', options)
