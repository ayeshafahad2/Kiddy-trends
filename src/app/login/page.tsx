
import React from "react";

export default function Log() {
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-brown-200">
      <form className="flex flex-col space-y-4 p-8 bg-white max-h-80 max-w-80 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded p-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2"
          required
        />
        <button type="submit" className="text-white bg-brown-700 text-2xl rounded py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
