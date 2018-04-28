import styled, { css } from "styled-components";
import { padding } from "../../global/constants";

const Wrapper = styled.div`
  max-width: 1260px;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  width: calc(100% - 20px);
  @media (min-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }

  ${props => props.medium && css`
    max-width: 900px;
  `}
  
  ${props => props.smaller && css`
    max-width: 600px;
  `} 
  
  ${props => props.small && css`
    max-width: 800px;
  `}
  
  ${props => props.smallest && css`
    max-width: 320px;
  `}

  ${props => props.w380 && css`
    max-width: 380px;
  `}

  ${props => props.w800 && css`
    max-width: 800px;
  `}
  
  ${props => props.full && css`
    max-width: 100%;
    @media (min-width: 1200px) {
      padding-left: 3%;
      padding-right: 3%;
    }
  `};
  
  ${props => props.tc && css`
    text-align: center;
  `};

  ${props => props.lh_copy && css`
    line-height: 1.5;
  `};
`;

export default Wrapper;
