import React from "react";
import Layout from "../components/layout/Layout";

export default function Index(){
    return(
        <Layout>
            <div className="max-w-5xl mx-auto py-16 lg:py-24">
                <h1 className="text-4xl md:text-6xl font-bold text-black">My Landing Page</h1>
                <p >Welcome!</p>
            </div>
        </Layout>
    );
}