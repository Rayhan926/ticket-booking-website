import { useRouter } from "next/router";

const useHeaderType = () => {
  const router = useRouter();

  return {
    isFixed: router.pathname === "/",
  };
};

export default useHeaderType;
