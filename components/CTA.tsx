'use client';

import { ctaDetails } from "@/data/cta";
import { useState } from "react";

const CTA: React.FC = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle email submission (e.g., send to API or store in database)
        setSubmitted(true);
    };

    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        {submitted ? (
                            <p className="mt-4 text-lg text-green-400">
                                Thank you! We'll notify you when we start taking orders.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-6 flex items-center w-full max-w-md bg-white rounded-lg shadow-md">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 text-black rounded-l-lg outline-none"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-r-lg text-white font-semibold transition"
                                >
                                    Notify Me
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
