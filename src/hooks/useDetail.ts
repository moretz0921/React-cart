import { useQuery } from 'react-query';
import { getProduct } from '../api/getApi';

export function useDetail(id: any) {
  const { isLoading, error, isError, data } = useQuery(['like', id], () =>
    getProduct(id),
  );

  return {
    isLoading,
    error,
    isError,
    product: data,
  };
}
