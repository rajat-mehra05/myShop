import styled from "styled-components/macro";

export const Container = styled.div`
  background: #000;
  display: flex;
  padding: 40px 50px;
  margin: auto;
  max-width: 100%;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;