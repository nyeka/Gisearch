import React from "react";
import styled from "styled-components";
export default function ReposUser({ data, repos, loading }) {
  return (
    <Container>
      {data && repos
        ? repos.map((item, index) => {
            return (
              <div key={index} data-aos="zoom-in-left" data-aos-duration="1000">
                <a href={item.html_url}>
                  {" "}
                  {item.language && (
                    <div className="item-card hvr-grow ">
                      <h3>{item.name}</h3>
                      {item.description && <p>{item.description}</p>}
                      {<p>Language: {item.language}</p>}
                      <span>Created at: {item.created_at}</span>
                    </div>
                  )}
                </a>
              </div>
            );
          })
        : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 10px;

  .item-card {
    margin: 20px;
    width: 350px;
    height: 240px;
    border-radius: 20px;
    background: wheat;
    box-shadow: 5px 5px 10px #c3c3c3, -5px -5px 10px #fdfdfd;
    padding: 20px;
  }

  @media screen and (max-width: 760px) {
    .item-card {
      width: 250px;
      height: fit-content;
    }
  }

  @media screen and (max-width: 320px) {
    .item-card {
      width: fit-content;
    }
  }
`;
