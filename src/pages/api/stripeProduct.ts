import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse)=> {
    if(req.method === 'POST') {
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card', "pix",],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1MCBaJCHZl0Y2ubXBFci95fy', quantity: 1 }
            ],
            mode: "payment",
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}