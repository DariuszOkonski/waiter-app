import { useEffect, useState } from 'react';
import { fetchTables } from '../services/fetchTables';
import { useDispatch } from 'react-redux';
import { updateTables } from '../redux/tablesRedux';

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
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading };
}

export default useGetAllData;
