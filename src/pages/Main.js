import React from 'react';

import Slider from '../components/UI/Slider';
import RecipeSlider from '../components/Main/Recipe';
import Discount from '../components/Main/Discount';
import Banner from '../components/UI/Banner';
import InnerWrap from '../components/Layout';

function Main({ productItems }) {
  return (
    <InnerWrap paddingBottom={100}>
      <Slider />
      <RecipeSlider productItems={productItems} />
      <Discount />
      <Banner />
    </InnerWrap>
  );
}

export default Main;
