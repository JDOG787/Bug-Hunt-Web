import Head from "next/head";
import React from "react";

export default function Layout(props) {
    const title = `BugHunt - ${props.pageTitle}`
    return (
        <div>
            <Head>
                {/* Main meta tags */}
                <meta name="description" content="A simple yet powerful bug tracker to help hunt down those bugs and eliminate them."/>
                <meta name="keywords" content="bug bugs tracker jdog787 jdog bug-tracker bugtracker hunt bughunt bug-hunt"/>
                <meta name="author" content="JDOG787"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="title" content={title}/>
                <meta name="theme-color" content="#F5AFA0"/>
                <meta name="name" content="BugHunt"/>
                <title>{title}</title>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://bughunt.jdog.codes/"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content="A simple yet powerful bug tracker to help hunt down those bugs and eliminate them."/>
                <meta property="og:image" content="/images/meta-image.png"/>

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://bughunt.jdog.codes/"/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description" content="A simple yet powerful bug tracker to help hunt down those bugs and eliminate them."/>
                <meta property="twitter:image" content="/images/meta-image.png"/>

                {/* Links */}
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Offside&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
            </Head>
            {props.children}
        </div>
    )
}