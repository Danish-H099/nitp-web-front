import styled from "styled-components"

export const NavigateStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  margin: 0 0 0 6vw;
  background: ${props => props.theme.backgroundColor};
  .childLink {
    margin-top: 0;
    width: 120px;
    max-height: 90px;
    max-height: 10vh;
    border: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0.2rem 0;
    transition: all 0.3s ease;
    background: white;
    cursor: pointer;
    outline: none;
    background-color: ${props => props.theme.backgroundSecColor};
    p {
      font-size: 14px;
      font-weight: 600;
      color: ${props => props.theme.primaryTextColor};
      text-align: center;
      transition: all 1s ease;
      text-rendering: optimizeLegibility;
      font-family: Source Sans Pro;
      margin: 0;
      padding: 0 0.2rem;
    }
    &:focus {
      background-color: ${props => props.theme.primaryColor};
      padding: 10px 0px 10px 0px;
      p {
        color: white;
      }
      .image {
        color: white;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
          brightness(200%) contrast(200%);
      }
    }
    &:hover {
      background-color: ${props => props.theme.primaryColor};
      padding: 10px 0px 10px 0px;
      p {
        color: white;
      }
      .image {
        color: white;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
          brightness(200%) contrast(200%);
      }
    }
    .image {
      max-height: 3vh;
      width: auto;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    top: 0%;
    position: relative;
    justify-content: center;
    margin: 0;
    .childLink {
      width: 125px;
      min-height: 35px;
      height: 35px;
      padding: 0 0.5rem;
      margin: 0.2rem 0.2rem;
      background-color: ${props => props.theme.primaryColor};
      border-radius: 2rem;
      p {
        font-size: 12px;
        color: white;
        font-weight: normal;
        padding: 0;
      }
      &:focus {
        background-color: white;
        transform: scale(1.05);
        margin: 0 0.15rem;
        p {
          color: ${props => props.theme.primaryColor};
        }
      }
      .image {
        max-height: 50%;
        width: auto;
        display: none;
      }
    }
  }
`