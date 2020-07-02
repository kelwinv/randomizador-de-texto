import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Text = styled.h1`
  color: #48E5C2;
  margin-bottom: 38px;

`

export const Inputs = styled.div`
  display: grid;
  position: Relative;
  grid-template-columns: 3fr 1fr; 
  max-width: 785px;
  width: auto;

`

export const InputsSpan = styled.span`
  position: absolute;
  bottom: 100%;
  left: 74%;
  width: 200px;
  height: 64px;
  font-weight:bold;
  color: #0f0329;
  background: #ff3070aa;
  clip-path: polygon(100% 0, 100% 80%, 40% 80%, 5% 100%, 15% 80%, 0 80%, 0 0);

`

export const Input = styled.input`

  max-width: 604px;

  height: 56px;
  border: none;
  text-align: center;
  border-radius: 70px 0 0 70px;
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;

  color: #000000;

`

export const Button = styled.button`
  box-sizing: border-box;
  max-width: 181px;
  height: 56px;

  border: none;
  border-radius: 0 70px 70px 0;

  cursor: pointer;

  padding: 0 10px;

  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  background: #48E5C2;
  color: #0F0329;


  &:hover{
    background: #16886F;
  }
`
