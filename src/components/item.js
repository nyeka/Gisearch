import { React } from "react";
import Testing from "./utils/data";
import styled from "styled-components";
import CardUser from "./card/cardUser";
import ReposUser from "./Repos/ReposUser";
import "./search.css";
import loadinggif from "./images/Loading.gif";
import { Link } from "react-router-dom";

export default function Item() {
  const { data, loading, refet, error, repos, name, setName } = Testing();

  const handlecode = (e) => {
    if (e.key === "Enter") {
      refet(name);
    }
  };

  if (error) {
    return (
      <Wrap>
        <h2>Username Not Found</h2>
        <Link to="/">
          <p>Go Back</p>
        </Link>
      </Wrap>
    );
  }

  return (
    <Container className="card">
      <div className="header-card">
        <h2>Nyoman Eka Swardita</h2>
        <p>Github User Searcher / Gisearch</p>
      </div>
      <div className="searchBar-wrap">
        <input
          onKeyDown={handlecode}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="input username"
        />
        <button
          onClick={refet}
          style={{ cursor: "pointer" }}
          disabled={name ? false : true}
        >
          Search
        </button>
      </div>

      {loading ? null : (
        <CardUser data={data} loading={loading} repos={repos} />
      )}

      {loading ? (
        <div className="loading">
          <img src={loadinggif} alt="loading" />
          <p>Loading...</p>
        </div>
      ) : (
        data &&
        repos && <ReposUser repos={repos} data={data} loading={loading} />
      )}
    </Container>
  );
}

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    position: absolute;
    top: -12px;
    width: 1900px;
    height: 300px;
    object-fit: cover;
  }

  h2 {
    margin-top: 3em;
  }

  span {
    color: wheat;
    position: absolute;
    top: 202px;
    z-index: 2;
    font-size: 35px;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 395px;
    }
    span {
      position: absolute;
      top: 190px;
      color: wheat;
      font-weight: bold;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
      border-radius: 10px;
    }
  }

  .header-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    h2 {
      font-size: 32px;
      font-weight: bold;
      color: skyblue;
    }
    p {
      margin-top: 0;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
