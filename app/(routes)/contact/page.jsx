import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="mx-4 sm:mx-10 md:mx-22 lg:mx-52">
            <div className="flex flex-col items-center justify-start min-h-screen bg-white p-6 pt-12 max-w-[1400px] w-full mx-auto mb-20">
                {/* Logo */}
                <Image
                    src="/logo.svg"
                    alt="Company Logo"
                    width={300}
                    height={150}
                    className="mb-8"
                />

                {/* Page Title */}
                <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

                {/* Contact Information */}
                <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-md">
                    <p className="mb-4 text-lg">
                        <strong>Email:</strong>{' '}
                        <a
                            href="mailto:example@example.com"
                            className="text-blue-600"
                            aria-label="Send an email to example@example.com"
                        >
                            example@example.com
                        </a>
                    </p>
                    <p className="mb-4 text-lg">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p className="mb-4 text-lg">
                        <strong>Address:</strong> 123 Example Street, City, Country
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;