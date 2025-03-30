import React from 'react';
import { EMOJIS_TO_REPLACE, HOW_TO_USE_IMGS } from '../utils/constants';
import { PointSvg, WindowsSvg } from './Icons';

const EmojiList = () => (
  <div>
    <div className="flex justify-center flex-wrap mt-4">
      <p className='self-end'>list of images: &nbsp;</p>
      {EMOJIS_TO_REPLACE.map(({ emoji, path }) => (
        <p key={path} className='text-xl'>{emoji}: <img src={path} alt={path} /> &nbsp;</p>
      ))}
    </div>
    <p className="flex flex-wrap justify-center mb-4">
      {HOW_TO_USE_IMGS.BODY}&nbsp; <WindowsSvg />&nbsp;+<PointSvg /> {HOW_TO_USE_IMGS.CLARIFICATION}
    </p>
  </div>
);

export default EmojiList;
