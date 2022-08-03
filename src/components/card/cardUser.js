import React from "react";
import styled from "styled-components";

export default function CardUser({ data, loading, repos }) {
  return (
    <Container>
      <a href={data.html_url}>
        {data.html_url && (
          <div className="card-content hvr-grow">
            <img src={data.avatar_url} />
            <div className="card-text">
              <h2>{data.name}</h2>
              {data.company && <h4>{data.company}</h4>}
              {data.location && <p>Location: {data.location}</p>}
              {data.public_repos && <p>Current Repos: {data.public_repos}</p>}
            </div>
          </div>
        )}
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  img {
    height: 200px;
    border-radius: 50%;
  }

  .card-content {
    width: 500px;
    padding: 24px;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 20px 20px 78px #bebebe, -20px -20px 78px #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 760px) {
    .card-content {
      flex-direction: column;
      width: fit-content;
    }
  }
`;
