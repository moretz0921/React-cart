import { useQuery } from 'react-query';
import { pagination } from '../api/getApi';

export function useMain(orderQuery, ascQuery, currentQuery, limit) {
  const { isLoading, error, isError, data } = useQuery(['product'], () =>
    pagination(orderQuery, ascQuery, currentQuery, limit)
  );

  return {
    isLoading,
    error,
    isError,
    product: data,
  };
}
