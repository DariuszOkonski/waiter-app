import { useEffect, useState } from 'react';
import { fetchTables } from '../services/fetchTables';
import { fetchStatuses } from '../services/fetchStatuses';
import { fetchPeople } from '../services/fetchPeople';
import { useDispatch } from 'react-redux';
import { updateTables } from '../redux/tablesRedux';
import { updateStatuses } from '../redux/statusesRedux';
import { updatePeople } from '../redux/peopleRedux';

function useSetAllData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [tables, statuses, people] = await Promise.all([
        fetchTables(),
        fetchStatuses(),
        fetchPeople(),
      ]);

      dispatch(updateTables(tables));
      dispatch(updateStatuses(statuses));
      dispatch(updatePeople(people));
    } catch (error) {
      console.log('error: ', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error];
}

export default useSetAllData;
