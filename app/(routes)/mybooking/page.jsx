"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_component/BookingHistoryList";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession } from "next-auth/react";

function MyBooking() {

    const {data}=useSession();
    const [bookingHistory,setBookingHistory]=useState([]);
    useEffect(()=>{
        data&&GetUserBookingHistory();
    },[data])

    //fetch user booking history
    const GetUserBookingHistory=()=>{
        GlobalApi.GetUserBookingHistory(data.user.email).then(resp=>{
            console.log(resp);
            setBookingHistory(resp.bookings);
        })
    }
    
    return (
        <div className="my-10 mx-5  md:mx-36">
            <h2 className="font-bold text-[20px] my-2">Le Mie Prenotazioni</h2>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="booked">Prenotazioni Attive</TabsTrigger>
                    <TabsTrigger value="completed">Prenotazioni Passate</TabsTrigger>
                </TabsList>
                <TabsContent value="booked">
                    <BookingHistoryList/>
                </TabsContent>
                <TabsContent value="completed">
                    
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default MyBooking;
