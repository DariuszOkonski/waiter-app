import { useDispatch } from 'react-redux';
import { updateSingleTableRequest } from '../services/updateSingleTableRequest';
import { updateSingleTableStore } from '../redux/tablesRedux';
import { useState } from 'react';

function useUpdateSingleTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const updateSingleTable = async (table) => {
    setIsLoading(true);
    setError(null);

    try {
      await updateSingleTableRequest(table);
      dispatch(updateSingleTableStore(table));
    } catch (error) {
      console.log('error: ', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error, updateSingleTable];
}

export default useUpdateSingleTable;
