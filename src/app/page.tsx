import React from 'react';
import StripePage from "@/components/pages/Stripe.page";

export default async function StripeRoot({searchParams}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const page:string = (await searchParams).page||'1'
    return(
        <StripePage page={Number(page)}/>
    )
}