import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Filter = ({ onOpen, filterData }) => {
  return (
    <div className="flex">
      <div className="relative flex flex-grow items-center">
        <FaSearch className="absolute left-2 text-xl text-white" />
        <input
          className="h-10 w-[300px] rounded-md border border-white bg-transparent px-8 text-xl text-white"
          placeholder="Search Contact"
          type="text"
          onChange={filterData}
        />
      </div>
      <AiFillPlusCircle
        onClick={onOpen}
        className="cursor-pointer text-6xl text-white"
      />
    </div>
  );
};

export default Filter;
