import React from 'react';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="">
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-bold shadow-md">
                            {index + 1}
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-center lg:text-left">&quot;{testimonial.message}&quot;</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
