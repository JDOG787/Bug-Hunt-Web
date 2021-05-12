import React from "react";
import Link from "next/link";

export default function InvertedBtn(props) {
    return (
        <div>
            <Link href={props.link}>
                <div className="inverted-btn">
                    {props.text}
                </div>
            </Link>
        </div>
    )
}