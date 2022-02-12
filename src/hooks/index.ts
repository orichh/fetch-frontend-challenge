import { useState, useEffect } from "react";

// Returns data, loading, and error, mainly used for showing loading component
export const useRequest = (getRequest: Function, url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      await getRequest(url)
        .then((response: any) => setData(response.data))
        .catch((error: any) => setError(error));
      setLoading(false);
    };
    getData();
  }, [getRequest, url]);

  return { data, loading, error };
};
