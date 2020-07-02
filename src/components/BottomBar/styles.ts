import styled from 'styled-components'

export const AffterBar = styled.div`
  position: fixed;
  height: 120px;
  width: 100%;
  bottom: 0;

  /* background: #0f0329; */
  background: transparent;
`
export const Span1 = styled.span`
  position: absolute;

  height: 120px;
  width: 100%;
  
  clip-path: ellipse(100% 38% at 51% 85%);

`
export const Span2 = styled.span`
  position: absolute;
  height: 120px;
  width: 100%;
  clip-path: ellipse(40% 50% at 50% 40%);
  background: #48E5C2ed;


`


export const  Bardiv = styled.div`
  position: fixed;
  display:flex;
  align-items: flex-end;
  justify-content: space-between;
  bottom: 0;
  height: 100px;
  width: 100vw;
  background: #0B021E;
  padding: 0 20px;


  .icons{
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .icons i{
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 5px;

    font-size: 2.5rem;
    color: #FCFAF9;
    cursor: pointer;

  }

  .discord i{
    display: flex;
    color: #4035C0;
    align-items: center;
    margin-left: 0;

  }

  .discord i::before{
    background: #0B021E;
    padding-left: 15px;
    margin-left: -20px;
    margin-bottom: 5px;
    
    background-position-x: 100px;
    z-index: 1;
  }

  .discord i::after{
    content: "kelwin#8179";
    font-family: "Roboto",sans-serif;
    margin-left: -120px;
    color: #FCFAF9;
    font-weight: bold;
    font-size: 1.2rem;
    transition: 0.7s;

  }

  .discord i:hover::after{
    margin-left: 5px;
  }

  .discord i:active::after{
    content: "copied";
  }
`

