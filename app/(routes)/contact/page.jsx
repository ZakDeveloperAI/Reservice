import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-white p-6 pt-12">
            {/* Logo */}
            <Image
                src="/logo.svg"
                alt="Company Logo"
                width={400} // Increased width
                height={200} // Increased height
                className="mb-8"
            />

            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-md">
                <p className="mb-4">
                    <strong>Email:</strong>{' '}
                    <a
                        href="mailto:example@example.com"
                        className="text-blue-600 hover:underline"
                        aria-label="Send an email to example@example.com"
                    >
                        example@example.com
                    </a>
                </p>
                <p className="mb-4">
                    <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p className="mb-4">
                    <strong>Address:</strong> 123 Example Street, City, Country
                </p>
            </div>
        </div>
    );
};

export default Contact;