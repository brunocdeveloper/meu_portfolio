import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  width: 1319px;
  height: 797px;
  left: 22px;
  top: 0px;
`
function HeaderImage() {
  return (
      <Image
      src="https://i1.wp.com/emotioncard.com.br/wp-content/uploads/2019/04/plano-de-fundo-preto28.jpg?fit=2560%2C1600&ssl=1"
      alt='background-header'
      />
  )
}

export default HeaderImage;