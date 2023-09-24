import React from 'react';

function Download() {
  return (
    <div className="bg-gray-100">
      <section className="py-10 container mx-auto">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">You can Use Our App</h2>
            <ul className="mb-4">
              <li className="text-gray-700">Find &amp; Download &#10003;</li>
            </ul>
            <div className="flex gap-4">
              <img
                src="/images/apple-app-store-logo.jpg"
                alt="Apple App Store"
                className="h-12"
              />
              <img
                src="/images/en_badge_web_generic.png"
                alt="Google Play Store"
                className="h-12"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/images/travel-app-about.png"
              alt="Travel App"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;