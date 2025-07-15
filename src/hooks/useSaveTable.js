import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSingleTableRequest } from '../services/updateSingleTableRequest';
import { updateSingleTableStore } from '../redux/tablesRedux';

function useSaveTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const saveTableData = async (table) => {
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

  return [isLoading, error, saveTableData];
}

export default useSaveTable;
