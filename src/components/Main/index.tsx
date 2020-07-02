import React,{useEffect,useState} from 'react';

import { Maindiv } from './styles';

import RandomTexts from '../RandomTexts'

interface Props{
  TextValue: string;
}

const Main: React.FC<Props> = ({TextValue}) => {
  const [finaltextArry,setFinaltextArry] = useState<string[]>([])

  useEffect(() => {
    if(TextValue)
      Ramdomize();
  },[TextValue]);
  
  
  function Ramdomize(){
    let textArry: string[] = [];
    let repeatedTimes = 0;
  
    while(repeatedTimes < 100) {
  
      const shuffled = TextValue.split("").sort(() => (0.5 - Math.random())).join('');
      const res = textArry.findIndex((value) => (value === shuffled));
  
      if(res < 0){
        textArry.push(shuffled);
      }
      else{
        repeatedTimes++;
      }
    }
    setFinaltextArry(textArry)
  }
  
  return (
    <Maindiv>
      {
        finaltextArry.map((value, index) => (
          <RandomTexts key={index} Text={value}/>
        ))
      }
    </Maindiv>
  ) 
};

export default Main;