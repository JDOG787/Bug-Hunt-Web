import Head from "next/head";
import React from "react";
import image from "/meta-image.png";

export default function Layout(props) {
    return (
        <div>
            <Head>
                {/* Main meta tags */}
                <meta name="description" content="A simple yet powerful bug tracker to help hunt down those bugs and eliminate them."/>
                <meta name="keywords" content="bug bugs tracker jdog787 jdog bug-tracker bugtracker hunt bughunt bug-hunt"/>
                <meta name="author" content="JDOG787"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="title" content="Bug Hunt"/>
                <title>Bug Hunt</title>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://bughunt.jdog.codes/"/>
                <meta property="og:title" content="Bug Hunt"/>
                <meta property="og:description" content="A simple yet powerful bug tracker to help hunt down those bugs and eliminate them."/>
                <meta property="og:image" content={image}/>

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://bughunt.jdog.codes/"/>
                <meta property="twitter:title" content="Bug Hunt"/>
                <meta property="twitter:description" content="A simple yet powerful bug tracker to help hunt down those bugs and eliminate them."/>
                <meta property="twitter:image" content={image}/>
            </Head>
            {props.children}
        </div>
    )
}