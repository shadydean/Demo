import React from 'react';

function ContactUs() {
  return (
    <div id="contact" className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="message" name="message" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" onClick={()=>{alert('Your query is successfully submitted!')}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
