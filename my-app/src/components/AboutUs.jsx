import React from 'react';

function AboutUs() {
  return (
    <div id = "about"className="p-8">
      <section className=" text-white" id="features">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[3rem] font-semibold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-slate-700 text-slate-100 rounded-lg shadow-lg">
              <h3 className="text-xl  font-semibold mb-4">Robust Encryption</h3>
              <p className='font-thin'>SecureGuard uses industry-leading encryption technology to protect your data.</p>
            </div>
            <div className="p-6 bg-slate-700 text-slate-100 rounded-lg shadow-lg">
              <h3 className="text-xl  font-semibold mb-4">User-Friendly Interface</h3>
              <p className='font-thin'>Easily organize and access your files with our intuitive platform.</p>
            </div>
            <div className="p-6 bg-slate-700 text-slate-100 rounded-lg shadow-lg">
              <h3 className="text-xl  font-semibold mb-4">Real-Time Monitoring</h3>
              <p className='font-thin'>Stay informed with real-time monitoring and alerts for your data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white" id="benefits">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-slate-700  rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data Security</h3>
              <p className='font-thin'>Keep your sensitive information safe and secure from unauthorized access.</p>
            </div>
            <div className="p-6 bg-slate-700  rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Privacy Protection</h3>
              <p className='font-thin'>Your data privacy is our top priority, ensuring complete confidentiality.</p>
            </div>
            <div className="p-6 bg-slate-700  rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ease of Use</h3>
              <p className='font-thin'>Our platform is designed for ease of use, making data management simple.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white " id="testimonials">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-slate-700  rounded-lg shadow-lg">
              <p className="mb-4 font-thin">"SecureGuard has transformed the way we manage our data. It's incredibly secure and easy to use!"</p>
              <p className="font-bold">- Jane Doe</p>
            </div>
            <div className="p-6 bg-slate-700  rounded-lg shadow-lg">
              <p className="mb-4 font-thin">"I feel much safer knowing that my sensitive information is protected by SecureGuard."</p>
              <p className="font-bold">- John Smith</p>
            </div>
            <div className="p-6 bg-slate-700  rounded-lg shadow-lg">
              <p className="mb-4 font-thin">"The best data protection service I've used. Highly recommend SecureGuard!"</p>
              <p className="font-bold">- Mary Johnson</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
