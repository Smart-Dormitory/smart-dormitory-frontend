import {useMediaQuery} from "react-responsive";

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return <div className="flex flex-col ">
    {isMobile && children}
  </div>;
};

export const Pc = ({children}) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });
  return <>{isPc && children}</>;
};
