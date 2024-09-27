import React from 'react';
import { Carousel } from 'antd';
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.svg";


const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carrossel: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img src={slide1}></img>
    </div>
    <div>
    <img src={slide2}></img>
    </div>
  </Carousel>
);

export default Carrossel;