import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.newRepoError ? '#ee5253' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  span {
    position: absolute;
    width: 250px;
    height: 25px;
    border-radius: 4px;
    background: #eee;
    font-size: 16px;
    color: #ee5253;
    top: 205px;
    left: 50%;
    margin-left: -155px;
    display: ${props => (props.newRepoError ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
  error: props.newRepoError,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;

export const RepoOpt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .edit {
    margin-left: 10px;
    margin-right: 3px;
    color: #3498db;
    cursor: pointer;
  }

  .delete {
    color: #ff7675;
    cursor: pointer;
  }
`;
