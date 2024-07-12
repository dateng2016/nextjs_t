"use client";
import { notFound } from "next/navigation";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default ({
    params,
}: {
    params: { productId: string; reviewId: string };
}) => {
    // const random = getRandomInt(2);
    // if (random === 1) {
    //     throw new Error("Error Loading Review");
    // }
    const { reviewId, productId } = params;
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>
            Review {reviewId} for product {productId}
        </h1>
    );
};
