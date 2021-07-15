import React from 'react';
import styled from 'styled-components';
import ContainerButtons from './ContainerButtons';

const Container = styled.div`
  position: absolute;
  width: 1366px;
  height: 650px;
  left: 0px;
  top: 577px;
  background-color: white;
`

const AboutMe = styled.h3`
  position: absolute;
  width: 224px;
  height: 39px;
  left: 166px;
  top: 661px;
  color: black;
  font-size: 28px;
`
const Description = styled.p`
  position: absolute;
  width: 650px;
  height: 289px;
  left: 171px;
  top: 757px;
  color: black;
  font-size: 22px;
  line-height: 32px;
`
const ImageProfile = styled.img`
  position: absolute;
  width: 433px;
  height: 636px;
  left: 832.1px;
  top: 496px;
  border-radius: 46px;
  transform: rotate(1deg);
`
function ContainerAbout() {
  return (
    <div>
      <Container />
      <AboutMe>Sobre Mim</AboutMe>
      <Description>
      Eu sou Bruno Cândido. Entusiasta na área de programação com foco em front-end. Atualmente estudante de Desenvolvimento Web Full-Stack na Trybe e muito grato pelas experiência que estou adiquirindo no curso.
      Clique no link abaixo e saiba mais sobre mim e as habilidades que estou desenvolvendo ao longo da minha trajetória como estudante de programação.
      </Description>
      <ImageProfile src="https://financemd.files.wordpress.com/2015/08/facebook-default-no-profile-pic.jpg" />
      <ContainerButtons/>
    </div>
  )
}

export default ContainerAbout;
