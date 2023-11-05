import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({
    id: '',
    name: "",
    price: "",
    quantity: "",
    image: null,
  });

  const [api_key, setApiKey] = useState(import.meta.env.VITE_imagebb_apiKey);
  const [imageURL, setImageURL] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleUploadAndSave = async () => {
    if (!product.image) {
      console.log("No image selected.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", product.image);

      const imageResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${api_key}`,
        formData
      );

      if (imageResponse.status === 200) {
        const imageData = imageResponse.data.data.url;

        // Now that you have the image URL, you can save it along with other data to your database
        const dataToSave = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          image: imageData,
        };

        const saveResponse = await fetch("http://localhost:5000/admin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataToSave),
        });

        if (saveResponse.ok) {
          // Clear the form fields
          setProduct({
            id: '',
            name: "",
            price: "",
            quantity: "",
            image: null,
          });
          setImageURL(null);
        } else {
          console.log("Error saving data to the database.");
        }
      } else {
        console.log("Error uploading image to ImageBB");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-32 flex flex-col justify-center items-center">
      <input
        type="text"
        name="id"
        value={product.id}
        onChange={handleChange}
        placeholder="product id"
        className="border p-2 mb-3"
      />
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="product name"
        className="border p-2 mb-3"
      />
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="product price"
        className="border p-2 mb-3"
      />
      <input
        type="text"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="product quantity"
        className="border p-2 mb-3"
      />
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        className="border p-2 mb-3"
      />

      <button onClick={handleUploadAndSave} className="bg-black text-white p-2">
        Upload and Save
      </button>
    </div>
  );
};

export default Admin;
