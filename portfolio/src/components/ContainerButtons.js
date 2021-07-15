import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonMoreInfo = styled.button`
  position: absolute;
  width: 260px;
  height: 47px;
  left: 166px;
  top: 1050px;
  background: #FFFFFF;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
`
const ButtonMyNetworks = styled.button`
  position: absolute;
  width: 297px;
  height: 47px;
  left: 476px;
  top: 1050px;
  background: #FFFFFF;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
`
function ContainerButtons() {
  return (
    <div>
      <Link to="/moreabout"><ButtonMoreInfo>Mais sobre</ButtonMoreInfo></Link>
      <Link to="/mynetworks"><ButtonMyNetworks>Minhas Redes</ButtonMyNetworks></Link>
    </div>
  )
}

export default ContainerButtons;
