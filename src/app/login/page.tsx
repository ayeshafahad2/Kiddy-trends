import React from "react";

export default function Log() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-brown-200 px-4">
      <form className="flex flex-col space-y-6 p-10 bg-white w-full max-w-xl rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-brown-700">Register</h2>
        
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          required
        />
        <button
          type="submit"
          className="bg-brown-700 hover:bg-brown-800 text-white text-xl font-semibold rounded-lg py-3 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
