import React, { useState } from "react";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";

const Slider = (props) => {
  const [state, setState] = useState({
    slider: [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
    ],
    activeIndex: 1,
    left: 0,
  });

  const prevSlide = () => {
    let newIndex = state.activeIndex - 1;
    let newLeft = state.left + 400;

    if (newIndex === 0) {
      newIndex = state.slider.length;
      newLeft = -props.sliderWidth * (state.slider.length - 1);
    }

    setState({
      ...state,
      activeIndex: newIndex,
      left: newLeft,
    });
  };

  const nextSlide = () => {
    let newIndex = state.activeIndex + 1;
    let newLeft = state.left - props.sliderWidth;

    if (newIndex > state.slider.length) {
      newIndex = 1;
      newLeft = 0;
    }

    setState({
      ...state,
      activeIndex: newIndex,
      left: newLeft,
    });
  };

  const clickIndicator = (index) => {
    const newIndex = index + 1;
    const newLeft = props.sliderWidth - newIndex * props.sliderWidth;

    setState({
      ...state,
      activeIndex: newIndex,
      left: newLeft,
    });
  };

  const style = {
    left: state.left,
    width: props.sliderWidth,
    height: props.sliderHeight,
  };

  return (
    <div className="relative">
      <div className="slider-wrapper">
        <ul className="slider">
          {state.slider.map((item, index) => (
            <li
              key={index}
              style={style}
              className={
                index + 1 === state.activeIndex ? "slider-item" : "hide"
              }
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/bd30/b103/53651502e5d64c562890699c58ae6be0?Expires=1693785600&Signature=N0tscuhRN0mV~~Z2XEF72~UNRmVl0TXkgOVYqwKc7GkSRcpzK038UVxgIRYF64d8N8oFuztt0Pa9M3zSWDA-sAEss0f6y89KyCzddNwk3mSrFTx9NL5xeEonQBdGq9mv5OHE~a3hkBnhvjLfdag4Tbul4Hdq~BwfeCors0Fff1Kk60WnTFJazAfmNTMCIc5skkSzAPAyFP-qL15iNEF7jatJHH8rd-GqccHa9vZY77G0scsuckNkinSFbSQg4QMr1XwyqoqUM0AuFnDhziHUXt2smhAQWIoPZYSG6cP2PYUt3Q9p-Gw5BEjWvppeZLkfQFF9u-EHkCG3y~lfmPeXmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="flex flex-col items-center justify-center text-center gap-1 capitalize py-1 border-y-4 border-white w-full">
                <b>Grand Master</b>
                <strong>Ahn Dong Kyun</strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons-wrapper">
        <button className="prev-button" onClick={prevSlide}>
          <LeftArrow />
        </button>
        <button className="next-button" onClick={nextSlide}>
          <RightArrow />
        </button>
      </div>
      <div className="indicators-wrapper">
        <ul className="indicators">
          {state.slider.map((item, index) => (
            <li
              key={index}
              className={
                index + 1 === state.activeIndex ? "active-indicator" : ""
              }
              onClick={() => clickIndicator(index)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
