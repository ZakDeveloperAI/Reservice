import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_component/BookingHistoryList";

function MyBooking() {

    //3:42
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
