import React, { useState, useRef } from "react";
import "./Card.css";

import shoeImage from "./Shoe-img/Nike-Shoe.PNG";

export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const chipRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseEnter() {
    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const chip = chipRef.current;
    const desc = descRef.current;
    title.style.transform = "translateZ(150px)";
    img.style.transform = "translateZ(100px) rotateZ(-45deg)";
    sizesBox.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    chip.style.transform = "translateZ(75px)";
    desc.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const chip = chipRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizesBox.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    chip.style.transform = "translateZ(0px)";
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
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1606813901444-c56f0c6f3d5e?auto=format&fit=crop&w=350&q=80"
        alt="Nike-Shoe"
        className="sneaaker-img"
      />
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
        <div className="chip" ref={chipRef}>
          Python
        </div>
        <div className="chip" ref={chipRef}>
          Flask
        </div>
        <div className="chip" ref={chipRef}>
          PyTorch
        </div>
      </div>
      <p ref={descRef}>
        A web-based system that detects fake news using sentiment analysis and
        deep learning to help users identify misleading information. It
        leverages BERT for contextual understanding and VADER for sentiment
        scoring to enhance detection accuracy.
      </p>

      <div className="button-box" ref={purchaseRef}>
        <button className="purchase"> Purchase</button>
      </div>
    </div>
  );
}
