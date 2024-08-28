import notFoundImg from "../../public/Hands Contact.png";

// eslint-disable-next-line react/prop-types
const NotFound = ({ open }) => {
  return (
    <div
      className={`flex ${open ? "" : "h-[50vh]"} items-center justify-center gap-2`}
    >
      <img src={notFoundImg} alt="" />
      <p className="text-xl text-white">No Contact Found</p>
    </div>
  );
};

export default NotFound;
