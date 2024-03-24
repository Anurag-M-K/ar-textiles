"use client";
import { db, storage } from "../../config/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { Button, FileInput, Label, Modal, Spinner } from "flowbite-react";
import { useState } from "react";
import { Form, Field } from "react-final-form";
import WrappedTextInput, { WrappedFileUpload } from "../components/wrappidComponents/wrappedComponents";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

async function addDataToFirestore({
  category,
  productName,
  productPrice,
  productImageUrl,
}: {
  category: string;
  productName: string;
  productPrice: string;
  productImageUrl: string;
}) {

console.log("in fire store ", category, productName, productPrice,productImageUrl);
  const docRef = await addDoc(collection(db, "products"), {
  category,
  productName,
  productPrice,
  productImageUrl,
  });
}

function Component() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (values: any) => {
    console.log("values in submit ",values)
    setLoading(true);

    const imageRef = ref(storage,`image/${values.productImage + v4()}`)
    uploadBytes(imageRef,values.productImage).then(async () => {
      try {
        const productImageUrl = await getDownloadURL(imageRef)
        await addDataToFirestore({
        category:values.category,
        productName : values.productName,
        productPrice: values.productPrice,
        productImageUrl:productImageUrl
        })
        .then(()=>{
          console.log("in .then ")
          setLoading(false)
          setOpenModal(false)
        })
      } catch (error) {
        setLoading(false)
        console.log("error", error)
      }
    })
  }; 
  return (
    <>
      <div className="w-full md:w-auto">
        <Button className="w-full" onClick={() => setOpenModal(true)}>
          Add store
        </Button>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Form onSubmit={handleSubmit} >
          {({ handleSubmit, values }) => (
            <form  onSubmit={handleSubmit}>
              <Modal.Body >
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Add your store data
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="category" value="Enter dress category" />
                    </div>
                    <div className="md:flex gap-4">

                    </div>
                    <Field
                      id="category"
                      name="category"
                      placeholder="Category"
                      className="md:grid-cols-2 lg:grid-cols-4"
                      required
                      component={WrappedTextInput}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Product name" />
                    </div>
                    <Field
                      component={WrappedTextInput}
                      name="productName"
                      id="productName"
                      placeholder="Enter dress name"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="price" value="Product price" />
                    </div>
                    <Field
                      name="productPrice"
                      id="productPrice"
                      placeholder="Enter product price"
                      type="text"
                      component={WrappedTextInput}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Product Image" />
                    </div>
                    <Field
                      id="productImage"
                      component={WrappedFileUpload}
                      accept="image/*"
                      name="productImage"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="w-full">
                    <Button type="submit" className="w-full my-3">
                      {loading ? <Spinner/> : "Save"}
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </form>
          )}
        </Form>
      </Modal>
    </>
  );
}

export default Component;
