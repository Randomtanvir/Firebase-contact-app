import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Model = ({ onClose, open, children }) => {
  return (
    <>
      {open && (
        <div>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-3">
            <div className="flex justify-end text-2xl">
              <IoMdClose onClick={onClose} className="cursor-pointer" />
            </div>
            <div>{children}</div>
          </div>
          <div className="absolute left-0 top-1 z-40 h-screen w-screen backdrop-blur" />
        </div>
      )}
    </>
  );
};

export default Model;
