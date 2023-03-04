import React from 'react';
import { Feature } from '../../components';
import './whatGPT.css';
const WhatGPT3 = () => {
  return (
    <div>
      <div id="wgpt3" className="gpt3__whatgpt3 section__margin">
        <div className="gpt3__whatgpt3-feature">
          <Feature title="What is GPT-3" text="I love my father and my mother and my sister and my brother and my brohter and Kareem and my father and my mother and I'm so sad I didn't pass in my final exams so I'm crying now" />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature title="Chatbots" text="My professor didn't give me full mark so I'll kill him yes have any money  I want Iphone" />
          <Feature title="Knowlidgebase" text="My professor didn't give me full mark so I'll kill him yes have any money  I want Iphone" />
          <Feature title="Education" text="My professor didn't give me full mark so I'll kill him yes have any money  I want Iphone" />
        </div>
      </div>
    </div>
  );
}

export default WhatGPT3;