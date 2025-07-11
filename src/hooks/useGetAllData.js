import { useEffect, useState } from 'react';
import { fetchTables } from '../services/fetchTables';
import { fetchStatuses } from '../services/fetchStatuses';
import { useDispatch } from 'react-redux';
import { updateTables } from '../redux/tablesRedux';
import { updateStatuses } from '../redux/statusesRedux';

function useGetAllData() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllData = async () => {
    setIsLoading(true);

    try {
      const tables = await fetchTables();
      dispatch(updateTables(tables));

      const statuses = await fetchStatuses();
      dispatch(updateStatuses(statuses));
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading };
}

export default useGetAllData;
