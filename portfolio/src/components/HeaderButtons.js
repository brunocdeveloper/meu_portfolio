import React from 'react';
import styled from 'styled-components';

const Inicio = styled.button`
  position: absolute;
  width: 67px;
  height: 30px;
  left: 899px;
  top: 36px;
  background: none;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
`
const Projetos = styled.button`
  position: absolute;
  width: 67px;
  height: 30px;
  left: 1031px;
  top: 36px;
  background: none;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
`
const Contatos = styled.button`
  position: absolute;
  width: 67px;
  height: 30px;
  left: 1197px;
  top: 36px;
  background: none;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
`
function HeaderButton() {
  return(
    <div>
      <Inicio type='button'>Inicio</Inicio>
      <Projetos type='button'>Projetos</Projetos>
      <Contatos type='button'>Contatos</Contatos>
    </div>
  )
}

export default HeaderButton;
