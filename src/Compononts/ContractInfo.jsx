import { IoIosContact } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import ContactAddAndUpdate from "./ContactAddAndUpdate";
import useDiscloser from "../hooks/useDiscloser";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const ContractInfo = ({ name, email, id }) => {
  const [open, onClose, onOpen] = useDiscloser();

  const deletContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact delet Sucessfully"); //! for sucess notificition
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="my-4 flex h-[64px] items-center justify-between rounded-md bg-yello p-2">
        <div className="flex items-center justify-center gap-2">
          <IoIosContact className="text-6xl text-orange" />
          <div>
            <h2 className="text-base">{name}</h2>
            <p className="text-sm">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaEdit
            onClick={onOpen}
            className="cursor-pointer text-3xl text-dark-yello"
          />
          <MdDeleteForever
            onClick={() => deletContact(id)}
            className="cursor-pointer text-3xl text-tomato"
          />
        </div>
      </div>
      <ContactAddAndUpdate
        isUpdate
        name={name}
        email={email}
        open={open}
        onClose={onClose}
        id={id}
      />
    </>
  );
};

export default ContractInfo;
