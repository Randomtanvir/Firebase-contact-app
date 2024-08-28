import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Model from "./Model";
import { toast } from "react-toastify";
import * as yup from "yup";

//! for form validtion
const contactSchemaValidation = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup.string().email("invalid email").required("Email is Required"),
});

// eslint-disable-next-line react/prop-types
const ContactAddAndUpdate = ({ onClose, open, isUpdate, name, email, id }) => {
  //! Post request on firebase
  const addContacts = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Add Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  //! Contact update Request on firebase
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Update Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model onClose={onClose} open={open}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name,
                  email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(value) =>
            isUpdate ? updateContact(value, id) : addContacts(value)
          }
        >
          <Form>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-md">
                Name
              </label>
              <Field name="name" className="h-8 border px-2" />
              <div className="text-sm text-orange">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-md mt-2">
                Email
              </label>
              <Field name="email" type="email" className="h-8 border px-2" />
              <div className="text-sm text-orange">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-gray py-2 text-white"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default ContactAddAndUpdate;
