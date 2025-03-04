import React from 'react';
import WindowsSvg from '../assets/WindowsSvg';
import PointSvg from '../assets/PointSvg';

const EmojiList = () => (
  <div>
    <div className="flex justify-around flex-wrap">
      <p>list of images: &nbsp;</p>
      <p>👋: Chattino flower &nbsp;</p>
      <p>🚀: Chattino jetpack &nbsp;</p>
      <p>♥: Chattino hug &nbsp;</p>
      <p>😂: Raora laugh &nbsp;</p>
    </div>
    <p className="flex flex-wrap">
      you can use the emojis by pressing&nbsp; <WindowsSvg />&nbsp;+<PointSvg /> (windows + .)
    </p>
  </div>
);

export default EmojiList;
