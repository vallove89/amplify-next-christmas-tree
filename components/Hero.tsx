'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();

// This function formats a phone number into the XXX-XXX-XXXX display format.
const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '').slice(0, 10);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{0,4})$/);
  if (!match) return cleaned;
  const [, area, prefix, line] = match;
  return line ? `${area}-${prefix}-${line}` : `${area}-${prefix}`;
};

const Hero: React.FC = () => {
  const [contactType, setContactType] = useState<'email' | 'phone'>('email');
  const [contactValue, setContactValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);
  
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
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" />

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>

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
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-r-lg text-white font-semibold transition"
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

        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
