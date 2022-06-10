import { useQuery } from 'react-query';
import { search } from '../api/getApi';

export function useSearch(searchUrl) {
  const { isLoading, error, isError, data } = useQuery(['search'], () =>
    search(searchUrl)
  );

  return {
    isLoading,
    error,
    isError,
    searchData: data,
  };
}
