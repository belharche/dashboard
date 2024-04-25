import React, { useState } from "react";
import H1Title from "../../../Shared/H1Title";

import { TrashIcon, CogIcon, ExclamationIcon } from "@heroicons/react/outline";


function ListingManagement() {

  const isHost: boolean = true;
  
  const [ listings, setListings ] = useState([
    { id: 1, title: "villa", surface: 250, guests: 4, price: 2399 },
    { id: 2, title: "villa", surface: 250, guests: 4, price: 2399 },
    { id: 3, title: "villa", surface: 250, guests: 4, price: 2399 },
    { id: 4, title: "villa", surface: 250, guests: 4, price: 2399 },
  ]);

  function removeListing(appartment_id) {
    setListings(currentListing => currentListing.filter(listing => appartment_id != listing.id))
  }

  return(
    <section className="w-full mt-6">
      {/* Section to display host's listings */}
      <H1Title styling="text-black md:text-left text-center mb-4">
         <p>My Listings</p>
      </H1Title>
      {
        listings.length === 0 ? (
          <div className="text-black text-[20px]">
            <h2>Looks like you haven't made any Listings yet. Click the button to list your property!</h2>
          </div>
        ) :
      
        isHost ? (
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-2 mt-8">
          {listings.map((listing) => (
            <div key={listing.id} className="p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="text-xl font-semibold">{listing.title}</h3>
              <ul className="mt-2">
                <li><strong>Surface:</strong> {listing.surface} m²</li>
                <li><strong>Guests:</strong> {listing.guests}</li>
                <li><strong>Price:</strong> {listing.price} MAD per night</li>
                <li className="flex justify-between">
                  <button className="bg-saffron hover:bg-terracotta duration-300 text-white p-1 mt-3 rounded-full">
                    <CogIcon className="w-4 h-4"/>
                  </button>
                  <button 
                    className="bg-red-500 hover:bg-red-400 duration-300 text-white p-1 mt-3 rounded-full"
                    onClick={() => removeListing(listing.id)}  
                  >
                    <TrashIcon className="w-4 h-4"/>
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
        ) : (
          <div className="flex items-center gap-4">
            <ExclamationIcon className="w-[70px] h-[70px] text-orange-600" />
            <h2 className="text-black text-[15px] md:text-[18px]">
              It looks like you're trying to access our listings section, which is only available to hosts. If you'd like to join our host community, let's get you set up!
            </h2>
          </div>
        )
      }
    </section>
  )
}

export default ListingManagement;