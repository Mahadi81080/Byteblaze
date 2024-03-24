import { ScaleLoader } from "react-spinners";
const Lodar = () => {
  return (
    <div
      className={` min-h-[calc(100vh-132px)]
        flex 
        flex-col 
        justify-center 
        items-center `}
    >
      <ScaleLoader size={100} color="#F92FD3" />
    </div>
  );
};

export default Lodar;
