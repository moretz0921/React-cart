import React from 'react';

import Slider from '../components/UI/Slider';
import RecipeSlider from '../components/Main/Recipe';
import Discount from '../components/Main/Discount';
import Banner from '../components/UI/Banner';
import InnerWrap from '../components/Layout';

type MainProps = {
  productItems?: any;
};

function Main({ productItems }: MainProps) {
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
