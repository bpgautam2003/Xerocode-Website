import React, { useEffect, useState } from "react";
import data from "../data";
import { IconButton } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="slider-section">
      <h2 className="slider-heading">See our success stories</h2>
      
        <div className="slider">
          {people.map((item, indexPeople) => {
            const { id, name, title, quote } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide";
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <div className="slider-content">
                  <p className="slider-quote">{quote}</p>
                  <h3>~ {name}</h3>
                  <h4 className="slider-title">{title}</h4>
                </div>
                <div className="slider-img"></div>
              </article>
            );
          })}
        
      </div>
      <IconButton sx={{my : 35, ml:-10}} color="primary" onClick={() => setIndex(index - 1)}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton sx={{my : -40 , ml : 10}} color="primary" onClick={() => setIndex(index + 1)}>
        <ArrowForwardIosIcon />
      </IconButton>
    </section>
  );
};

export default Slider;
