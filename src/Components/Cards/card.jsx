import React from "react";

export default function Card({ src, alt }) {
    return (
        <img src={src} className="card--image" alt={alt} />
    );
}
  