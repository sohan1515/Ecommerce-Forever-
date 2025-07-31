import React from 'react';

const NewsletterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Subscribed with:", email);
    // You can add backend call or toast here
  };

  return (
    <div className="bg-gray-50 py-12 border-t border-gray-200 text-center rounded-lg">
      <h3 className="text-2xl font-semibold mb-3">Subscribe now & get 20% off</h3>
      <p className="text-sm text-gray-600 mb-6">
        Join our newsletter for updates, exclusive deals & more.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-gray-400 px-4 py-2 w-72 rounded-md text-sm focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
