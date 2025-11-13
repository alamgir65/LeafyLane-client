import React from "react";

const MapSection = () => {
    return (
        <section className="bg-base-200 py-16 px-5 my-10">
            <div className="max-w-5xl mx-auto text-center">
                {/* Title Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                    MAP & DIRECTIONS
                </h2>
                <p className="text-primary mb-10">
                    Easily locate our office or explore nearby properties — we’re just a few clicks away
                </p>

                {/* Map Container */}
                <div className="card bg-base-100 shadow-xl">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116821.89184355436!2d90.37272500747073!3d23.794260243612165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1763042956976!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[450px] rounded-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
