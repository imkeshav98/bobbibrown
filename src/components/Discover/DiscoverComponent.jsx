import styled from "styled-components";

export const DiscoverComp = (props) => {
  const DiscoverStyling = styled.div`
    .img {
      width: 100%;
    }
    .title {
      font-size: 22px;
      font-family: sans-serif;
    }
  `;
  return (
    <>
      <DiscoverStyling>
        <div className="maindiv">
          <br />
          <div className="d1">
            <img className="img" src={props.Image} alt="discover" />
            <h2 className="title">{props.title}</h2>
            <p>{props.details}</p>
            <p>Learn More</p>
          </div>
        </div>
      </DiscoverStyling>
    </>
  );
};
