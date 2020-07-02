import styled from 'styled-components'

export const BoxText = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  min-width: 130px;
  height: 72px;

  padding: 0 13px;
  font-size: 2rem;
  font-weight: bold;
  background-color: #0F0329;
  color: #AC2797;
  
  border-radius: 20px;
  border: solid 2px #E5E5E5;

  position: relative;
  overflow: hidden;
  margin-left: 40px;
  margin-bottom: 40px;


  &::before{
    content: "Copiar";
    position: absolute;
    display: flex;
    color: #0F0329;
    font-weight: bold;

    justify-content: center;
    align-items: center;
    top: -72px;
    min-width: 100%;
    height: 72px;
    background-color: #48E5C2;

    transition: top 0.4s;
  }

  &:hover::before{
    top: 0;

  }
`