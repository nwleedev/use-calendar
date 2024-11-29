import { useMemo } from "react";

const useNow = () => {
  return useMemo(() => new Date(), []);
};

export default useNow;
