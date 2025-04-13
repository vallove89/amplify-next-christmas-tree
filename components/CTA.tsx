'use client';

import { ctaDetails } from "@/data/cta";
import { useState } from "react";
import { getClient } from "@/lib/amplifyClient";

// This function formats a phone number into the XXX-XXX-XXXX display format.
const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '').slice(0, 10);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{0,4})$/);
  if (!match) return cleaned;
  const [, area, prefix, line] = match;
  return line ? `${area}-${prefix}-${line}` : `${area}-${prefix}`;
};

const CTA: React.FC = () => {
    const [contactType, setContactType] = useState<'email' | 'phone'>('email');
    const [contactValue, setContactValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSubmitted(false);
        const client = getClient();
      
        const trimmedValue = contactValue.trim();
    
        // Validate based on type
        if (contactType === 'email') {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
            setError('Please enter a valid email.');
            return;
          }
        } else if (contactType === 'phone') {
          // Remove non-digit characters; expect exactly 10 digits
          const digits = trimmedValue.replace(/\D/g, '');
          if (digits.length !== 10) {
            setError('Please enter a valid phone number.');
            return;
          }
        }
      
        // Prepare values for submission
        const emailValue = contactType === 'email' ? trimmedValue : undefined;
        const phoneValue =
          contactType === 'phone'
            ? `+1${trimmedValue.replace(/\D/g, '')}` // Convert to E.164 format for US numbers
            : undefined;
      
        try {
          const response = await client.models.Contact.create({
            email: emailValue,
            phone: phoneValue,
          });
      
          if (response?.data) {
            setSubmitted(true);
          } else {
            console.log(response);
            throw new Error('No response data');
          }
        } catch (err) {
          console.error('Submission error:', err);
          console.log(phoneValue)
          setError('Oops! Something went wrong. Please try again.');
        }
    };

    const toggleContactType = () => {
        // Toggle contact type, and reset input and error
        setContactType((prev) => (prev === 'email' ? 'phone' : 'email'));
        setContactValue('');
        setError('');
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
                        <p className="mt-4 text-lg text-green-600">
                            ✅ Successfully signed up for notifications!
                        </p>
                        ) : (
                        <>
                            <form
                            onSubmit={handleSubmit}
                            className="mt-6 flex items-center w-full max-w-md mx-auto bg-white rounded-lg shadow-md"
                            >
                            <input
                                type={contactType === 'email' ? 'email' : 'tel'}
                                value={contactValue}
                                onChange={(e) =>
                                setContactValue(
                                    contactType === 'phone'
                                    ? formatPhoneNumber(e.target.value)
                                    : e.target.value
                                )
                                }
                                placeholder={
                                contactType === 'email'
                                    ? 'Enter your email'
                                    : 'Enter your phone number'
                                }
                                required
                                className="w-full px-4 py-3 text-black rounded-l-lg outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-primary hover:bg-primary-accent rounded-r-lg text-white font-semibold transition"
                            >
                                Notify Me
                            </button>
                            </form>

                            <button
                            onClick={toggleContactType}
                            className="mt-2 text-sm text-blue-600 hover:underline"
                            >
                            Prefer to use your {contactType === 'email' ? 'phone number' : 'email'}?
                            </button>

                            {error && (
                            <p className="mt-2 text-sm text-red-600">{error}</p>
                            )}
                        </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
