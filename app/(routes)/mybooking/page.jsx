"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_component/BookingHistoryList";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";

function MyBooking() {

    const {data, status}=useSession();
    const [bookingHistory,setBookingHistory]=useState([]);
    useEffect(()=>{
        data&&GetUserBookingHistory();
    },[data])

    useEffect(()=>{
        checkUserAuth();
    },[])



    //fetch user booking history
    const GetUserBookingHistory=()=>{
        GlobalApi.GetUserBookingHistory(data.user.email).then(resp=>{
            console.log(resp);
            setBookingHistory(resp.bookings);
        })
    }

    const filterData = (type) => {  //fatto rework togliendo orario cosi se giorno=giornoOggi risulta attivo
        const normalizeDate = (date) => {
            const d = new Date(date);
            return new Date(d.getFullYear(), d.getMonth(), d.getDate()); // Solo anno, mese, giorno
        };
    
        const result = bookingHistory.filter(item =>
            type == 'booked'
                ? normalizeDate(item.date) >= normalizeDate(new Date())
                : normalizeDate(item.date) < normalizeDate(new Date())
        );
    
        return result;
    };
    
    const checkUserAuth = () => {
        if (status == "loading") {
            return <div>Loading...</div>;
        }

        if (status == "unauthenticated") {
            signIn('descope');
        }
    }

    return status == "authenticated" && (
       
        <div className="my-10 mx-5  md:mx-36">
            <h2 className="font-bold text-[20px] my-2">Le Mie Prenotazioni</h2>
            <Tabs defaultValue="booked" className="w-full">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="booked">Prenotazioni Attive</TabsTrigger>
                    <TabsTrigger value="completed">Prenotazioni Passate</TabsTrigger>
                </TabsList>
                <TabsContent value="booked">
                    <BookingHistoryList bookingHistory={filterData('booked')}/>
                </TabsContent>
                <TabsContent value="completed">
                    <BookingHistoryList bookingHistory={filterData('completed')}/>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default MyBooking;
