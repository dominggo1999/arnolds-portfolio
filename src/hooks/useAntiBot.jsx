import React, { useEffect, useState } from 'react';
import { toSvg } from 'html-to-image';
import { randomFromNumber } from '~/util/array.js';

const useAntiBot = () => {
  const [src, setSrc] = useState([]);
  const [imageFinished, setImageFinished] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [nums, setNums] = useState([randomFromNumber(10), randomFromNumber(10)]);

  const createImages = async () => {
    const capsule = document.querySelector('#captchaCapsule');
    const elements = capsule.querySelectorAll('p');

    let sum = 0;

    const newImages = await Array.from(elements).map((e, id) => {
      const num = nums[id];
      sum += num;
      e.innerHTML = num;

      return toSvg(e)
        .then((dataUrl) => {
          // Set number on the DOM back to empty to prevent bot
          e.innerHTML = '';
          return dataUrl;
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    });

    Promise.all(newImages)
      .then((images) => {
        setSrc(images);
        setAnswer(sum);
        setImageFinished(true);
      });
  };

  useEffect(() => {
    createImages();
  }, []);

  if (!imageFinished) return null;

  return { src, answer };
};

export default useAntiBot;
