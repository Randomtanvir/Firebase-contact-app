import { useEffect, useState } from "react";
import ContractInfo from "./Compononts/ContractInfo";
import Filter from "./Compononts/Filter";
import Header from "./Compononts/Header";
import NotFound from "./Compononts/NotFound";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactAddAndUpdate from "./Compononts/ContactAddAndUpdate";
import useDiscloser from "./hooks/useDiscloser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]); // !for store all contacts data
  const [open, onClose, onOpen] = useDiscloser(); // !custom Hooks for some action

  useEffect(() => {
    // !getReques for data fetchin on fireStore dataBase
    const getContact = async () => {
      try {
        const contactRef = collection(db, "contact");

        onSnapshot(contactRef, (snapshot) => {
          const contactListes = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          setContacts(contactListes);
          return contactListes;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContact();
  }, []);

  const filterData = (event) => {
    // !for search functionality
    const match = event.target.value;
    const contactRef = collection(db, "contact");

    onSnapshot(contactRef, (snapshot) => {
      const contactListes = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filterContacts = contactListes.filter(({ name }) =>
        name.toLowerCase().includes(match.toLowerCase()),
      );

      setContacts(filterContacts);
      return filterContacts;
    });
  };

  return (
    <>
      <div className="no-scrollbar mx-auto w-[370px]">
        <Header />
        <Filter onOpen={onOpen} filterData={filterData} />

        <div>
          {contacts.length === 0 ? (
            <NotFound open={open} />
          ) : (
            contacts.map(({ name, email, id }) => {
              return (
                <ContractInfo
                  onClose={onClose}
                  onOpen={onOpen}
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                />
              );
            })
          )}
        </div>

        <ContactAddAndUpdate onClose={onClose} open={open} />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
