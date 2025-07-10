import React, { useState, useRef } from "react";
import "./Card.css";

import shoeImage from "./Shoe-img/Nike-Shoe.PNG";

export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  //const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = centerY - y;

    const mult = 25; // reduce multiplier to limit spin
    setXRotation((deltaY / centerY) * mult);
    setYRotation((deltaX / centerX) * mult);
  }
  function handleMouseEnter() {
    //const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current;
    const chips = cardRef.current?.querySelectorAll(".chip");

    if (title) title.style.transform = "translateZ(150px)";
    //if (img) img.style.transform = "translateZ(100px) rotateZ(-45deg)";
    if (sizesBox) sizesBox.style.transform = "translateZ(100px)";
    if (purchase) purchase.style.transform = "translateZ(75px)";
    if (desc) desc.style.transform = "translateZ(75px)";
    chips?.forEach((chip) => {
      chip.style.transform = "translateZ(75px)";
    });
  }

  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    //const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current;
    const chips = cardRef.current?.querySelectorAll(".chip");

    if (title) title.style.transform = "translateZ(0px)";
    //if (img) img.style.transform = "translateZ(0px) rotateZ(0deg)";
    if (sizesBox) sizesBox.style.transform = "translateZ(0px)";
    if (purchase) purchase.style.transform = "translateZ(0px)";
    if (desc) desc.style.transform = "translateZ(0px)";
    chips?.forEach((chip) => {
      chip.style.transform = "translateZ(0px)";
    });
  }
  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/*<img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1606813901444-c56f0c6f3d5e?auto=format&fit=crop&w=350&q=80"
        alt="Nike-Shoe"
        className="sneaaker-img"
      />
*/}
      <h1 className="title" ref={titleRef}>
        Fake New Detection
      </h1>

      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "flex-start",
          width: "100%",
          paddingLeft: "10px",
        }}
      >
        <div className="chip">Python</div>
        <div className="chip">Flask</div>
        <div className="chip">PyTorch</div>
      </div>
      <p ref={descRef}>
        A web-based system that detects fake news using sentiment analysis and
        deep learning to help users identify misleading information. It
        leverages BERT for contextual understanding and VADER for sentiment
        scoring to enhance detection accuracy.
      </p>

      <div className="button-box" ref={purchaseRef}>
        <button className="purchase"> Repo</button>
      </div>
    </div>
  );
}
