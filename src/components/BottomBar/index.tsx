import React from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';

import {Bardiv,AffterBar,Span1,Span2} from './styles'

const BottomBar: React.FC = () =>{
  return(
    <>
      <AffterBar>
        <Span1 >
          <Bardiv>
            <div className="icons discord">
              <CopyToClipboard text="kelwin#8179">
                <i className="fab fa-discord"></i>
              </CopyToClipboard>
            </div>
            <div className="icons">
              <a href="https://www.linkedin.com/in/kelwin-vieira-ab95801a4/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/kelwinv" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Bardiv>
          <Span2 />
        </Span1>
      </AffterBar>
    </>
  );
}

export default BottomBar;