import React from 'react';
import styled from 'styled-components';

import Slider from '../components/UI/Slider';
import RecipeSlider from '../components/Main/Recipe';
import Banner from '../components/UI/Banner';
import InnerWrap from '../components/Layout';

function Main({ productItems }) {
  return (
    <InnerWrap paddingBottom={100}>
      <Slider></Slider>
      <RecipeSlider productItems={productItems}></RecipeSlider>
      <Banner></Banner>
    </InnerWrap>
  );
}

export default Main;
