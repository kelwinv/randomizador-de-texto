import React,{ useState} from 'react';

import {Content} from './styles'; 

import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import Main from '../../components/Main';


const Home: React.FC = () =>{
  const [inputValue, setInputValue ] = useState('');
  const [ mainRes, setMainRes ] = useState('');

  function sendResFromMain(){
    setMainRes(inputValue);
  }
  
  return(
    <Content>
      <Header value={inputValue} setValue={setInputValue} event={sendResFromMain}/>
      {mainRes?  <Main TextValue={mainRes}/> : null}
      <BottomBar />
    </Content> 
  )
}

export default Home;