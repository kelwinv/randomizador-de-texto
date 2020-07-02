import React from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';

import { BoxText } from './styles'

interface Props{
  Text: string;
}

const RandomTexts: React.FC<Props> = ({ Text }) =>{
  return (
    <CopyToClipboard text={Text}>
      <BoxText > {Text} </BoxText>
    </CopyToClipboard>
  )
}

export default RandomTexts;