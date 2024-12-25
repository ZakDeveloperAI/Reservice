import { Calendar, Clock, MapPin, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function BookingHistoryList({bookingHistory}) {
    if (!Array.isArray(bookingHistory)) {
        return <div>Nessuna prenotazione disponibile.</div>;
    }
    return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        {bookingHistory.map((booking,index)=>(
            <div key={index} className='flex gap-4 border rounded-lg p-4 mb-5'>
                {booking?.businessList?.name&&
                <Image src={booking?.businessList?.images[0]?.url}
                alt='image'
                width={120}
                height={120}
                className='rounded-lg object-cover'
                />}
                <div className='flex flex-col gap-2'>
                <h2 className='font-bold'>{booking.businessList.name}</h2>
                <h2 className='flex gap-2 text-primary'><User/> {booking.businessList.contactPerson}</h2>
                <h2 className='flex gap-2 text-gray-500'><MapPin className='text-primary'/> {booking.businessList.address}</h2>
                <h2 className='flex gap-2 text-gray-500'>
                    <Calendar className='text-primary'/> 
                    Prenotato iL Giorno : <span className='text-black font-semibold'>{booking.date}</span>
                </h2>
                <h2 className='flex gap-2 text-gray-500'>
                    <Clock className='text-primary'/> 
                    Alle Ore : <span className='text-black font-semibold'>{booking.time}</span>
                </h2>
                </div>
            </div>
        ))}
    </div>
    )
}

export default BookingHistoryList