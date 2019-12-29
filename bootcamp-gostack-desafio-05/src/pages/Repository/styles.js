import styled, { keyframes } from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Create the keyframes rotate
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #eee;
  opacity: 0.5;
  padding: 5px;

  svg {
    animation: ${rotate} 1.5s linear infinite;
    animation-delay: -0.252s;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;

  a {
    text-decoration: none;
    color: #7159c1;
    font-size: 14px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #667;
    line-height: 1.4;
    max-width: 400px;
  }
`;
export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
export const FormControl = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  padding: 5px;
  margin-bottom: 7px;
  border-radius: 4px;

  select {
    width: 80px;
    border: 1px solid #eee;
    font-size: 16px;
    font-weight: 500;
    background: #f8f8f8;
  }
`;
export const InputLabel = styled.label`
  margin-right: 5px;
`;
