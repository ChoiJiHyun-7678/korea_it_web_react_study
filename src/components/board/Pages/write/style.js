export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  background-color: beige;

  & > input {
    border: 1px solid #dbdbdb;
    background-color: transparent;
    border-radius: 15px;
    padding: 15px;
    width: 100%;
    outline: none;
    color: #333;
  }
`

export const btnBox = css`
  display: flex;
  justify-content: flex-end;
  align-content: center;


  & > button {
    flex: 1;
    padding: 12px 0;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;
  }
`;