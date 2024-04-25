import React, { useState } from "react";

function NewListingDetails() {
    const [formData, setFormData] = useState({
        imgFile: null,
        price: '',
        city: '',
        street: '',
        title: '',
        description: '',
        nbrGuests: '',
        nbrBedrooms: '',
        surface: '',
        nbrBathrooms: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "imgFile") {
            setFormData(prev => ({ ...prev, imgFile: e.target.files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formDataToSubmit = new FormData();
  
      // Append only non-null and valid file objects to FormData
      if (formData.imgFile) { // Check if the file is not null
          formDataToSubmit.append('imgFile', formData.imgFile, formData.imgFile);
      }
  
      // Append other data
      formDataToSubmit.append('price', formData.price);
      formDataToSubmit.append('city', formData.city);
      formDataToSubmit.append('street', formData.street);
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('nbrGuests', formData.nbrGuests.toString()); // Ensure number is converted to string
      formDataToSubmit.append('nbrBedrooms', formData.nbrBedrooms.toString()); // Ensure number is converted to string
      formDataToSubmit.append('surface', formData.surface.toString()); // Ensure number is converted to string
      formDataToSubmit.append('nbrBathrooms', formData.nbrBathrooms.toString()); // Ensure number is converted to string
  
      console.log(formData);
      alert('Apartment added successfully!');
  
      // You would typically make an API call here to submit the formDataToSubmit
  };
  

    return (
        <section className="md:p-8 py-12 w-full h-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="basis-full md:basis-[48%]">
                <label htmlFor="imgFile" className="block">Apartment Image:</label>
                <input type="file" id="imgFile" name="imgFile" onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="title" className="block mt-4">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="description" className="block mt-4">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="price" className="block mt-4">Price (MAD):</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>

              <div className="basis-full md:basis-[48%]">
                <label htmlFor="city" className="block">City:</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="street" className="block mt-4">Street:</label>
                <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="nbrGuests" className="block mt-4">Number of Guests:</label>
                <input type="number" id="nbrGuests" name="nbrGuests" value={formData.nbrGuests} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="nbrBedrooms" className="block mt-4">Number of Bedrooms:</label>
                <input type="number" id="nbrBedrooms" name="nbrBedrooms" value={formData.nbrBedrooms} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="surface" className="block mt-4">Surface (m²):</label>
                <input type="number" id="surface" name="surface" value={formData.surface} onChange={handleChange} className="w-full p-2 border rounded" required />

                <label htmlFor="nbrBathrooms" className="block mt-4">Number of Bathrooms:</label>
                <input type="number" id="nbrBathrooms" name="nbrBathrooms" value={formData.nbrBathrooms} onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>
            </div>
              <button type="submit" className="mt-8 bg-saffron text-black hover:text-white duration-300 font-bold py-2 px-4 rounded hover:bg-gray-800">Add Apartment</button>
          </form>
        </section>
    );
}

export default NewListingDetails;
