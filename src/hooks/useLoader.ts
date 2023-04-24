// this function will be used for loading data from the server

import { useRef, useState } from "react";

export const useLoader = <T>(initialData?: T) => {
  const data = useRef<T>(initialData as T);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const loader = (callback: () => Promise<T>) => {
    if (isLoading) return;

    setIsLoading(true);

    return callback()
      .then((res) => {
        data.current = res;
      })
      .catch((err) => {
        setErrors([...errors, err.message]);
      })
      .finally(() => setIsLoading(false));
  };

  return [
    loader,
    data.current,
    isLoading
  ] as [(callback: () => Promise<T>) => Promise<void> | undefined, T, boolean];
}