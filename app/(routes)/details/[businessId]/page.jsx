"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

function BusinessDetail() {

    const {data,status} = useSession();

    if (status == "loading") {
        return <div>Loading...</div>
    }

    if (status == "unauthenticated") {
        signIn('descope');
    }
  return status == "authenticated" && (
    <div>BusinessDetail</div>
  )
}

export default BusinessDetail