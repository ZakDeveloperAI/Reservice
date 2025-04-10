"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';
import { use } from 'react';

function BusinessDetail({ params }) {

    const { data, status } = useSession();
    const [business, setBusiness] = useState([]);

    // Unwrap `params` using `React.use()`
    const unwrappedParams = use(params);

    useEffect(() => {
        if (unwrappedParams) getbusinessById(); // Only execute when `params` is not null
    }, [unwrappedParams]); // Executes when `unwrappedParams` changes

    useEffect(() => {
        checkUserAuth(); // Checks authentication on component mount
    }, []);

    const getbusinessById = () => {
        GlobalApi.getBusinessById(unwrappedParams?.businessId).then(resp => {
            setBusiness(resp.businessList);
        });
    }

    const checkUserAuth = () => {
        if (status == "loading") {
            return <div>Loading...</div>;
        }

        if (status == "unauthenticated") {
            signIn('descope');
        }
    }

    return status == "authenticated" && business ? (
        <div className='mx-4 sm:mx-10 md:mx-22 lg:mx-52'>
            <div className='max-w-[1400px] w-full mx-auto py-8 md:py-20 px-10 md:px:36'>
                <BusinessInfo business={business} />
                <div className='grid grid-cols-3 mt-16'>
                    <div className='col-span-3 md:col-span-2 order-last md:order-first'>
                        <BusinessDescription business={business} />
                    </div>
                    <div className=''>
                        <SuggestedBusinessList business={business} />
                    </div> 
                </div>
            </div>
        </div>
    ) : null;
}

export default BusinessDetail;
