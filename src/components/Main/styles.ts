import styled from 'styled-components'

export const Maindiv = styled.div`
  max-width: 80vw;
  max-height: 50vh;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 37px;
  padding: 40px 0 40px;
  overflow-y: auto;
  border-radius: 20px;
  background: rgba(252, 250, 249, 0.17);


  ::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;

  } 
  ::-webkit-scrollbar-thumb {
    background: #F5F5F5;
    border-radius: 8px;
    
  }

  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    background: #0B021E;
  }
    
`