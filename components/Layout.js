import Head from "next/head";
import React from "react";

export default function Layout(props) {
    return (
        <div>
            <Head>

            </Head>
            {props.children}
        </div>
    )
}