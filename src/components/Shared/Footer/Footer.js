import React from 'react';

const Footer = () => {
    return (

        <div className="py-10 bg-indigo-600">
            <div className="w-4/5 mx-auto text-white">
                
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:basis-1/3 mb-3">
                        <div className="">
                        <h1 className='text-2xl mb-2 text-pink-600'>Shaven</h1>
                            <p><span className="fas fa-map-marker-alt"></span> G5 Technology JSC, Room 1101, Glory Palace Apartment, Truong Thi Ward, Vinh City, Nghe An Province, VietNam(42000).</p>
                            <p><i className="fas fa-phone-alt"></i> (+84) 388-969-888</p>
                            <p><i className="fas fa-envelope-open-text"></i> g5plus@outlook.com</p>
                        </div>
                    </div>
                    <div className="md:basis-1/3 mb-3">
                        <div className="text-start">
                            <h4>CONTACT US</h4>
                            <p>About Us</p>
                            <p>See More</p>
                            <p>Connect with us</p>
                        </div>
                    </div>
                    <div className="md:basis-1/3">
                        <h4>ASK A QUESTION</h4>
                        <label class="block mb-3">
                        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" required />
                    </label>
                        <div className="mb-3">
                            <textarea className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Description" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='text-center mt-2'>Made by : <a style={{ textDecoration: "none" }} className="text-pink-300" target="_blank" href="https://www.facebook.com/ih75754/">Md. Ibrahim Hossaim</a> </p>
            </div>
        </div>
    )
};

export default Footer;