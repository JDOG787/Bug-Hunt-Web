import React from "react";
import Link from "next/link";

export default function Btn(props) {
    return (
        <div>
            <Link href={props.link}>
                <div className="btn">
                    {props.text}
                </div>
            </Link>
        </div>
    )
}