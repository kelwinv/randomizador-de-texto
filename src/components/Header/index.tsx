import React from 'react';

import { HeaderDiv,Text,Button,Inputs,InputsSpan,Input } from './styles';

interface Props{
  value: string | number | readonly string[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  event?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);

}

const Header: React.FC<Props> = ({value,setValue,event}) => {
  let alertState = false;
  function getInputValue(event: React.ChangeEvent<HTMLInputElement>){
    setValue(event.target.value);
  }

  if(value){
    if(value.toString().length >= 6){
      alertState = true;
    }
  }
  
  return (
    <HeaderDiv >
      <Text>RANDOMIZE O TEXTO</Text>
      <Inputs>
        <Input 
          type="text" 
          value={value}
          onChange={getInputValue}
          placeholder="DIGITE SEU TEXTO" 
        />
         {alertState? <InputsSpan>Não recomendado mais de 6 letras para pc fracos</InputsSpan> : null}
        <Button onClick={event}>RANDOMIZAR</Button>
      </Inputs>
    </HeaderDiv>
  );
}

export default Header;