/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";

function MyBoard((userId)) {
  const [boardList, serBoardList] = useState("")
  const [message, setMessage] = useState("")

  const changePasswordMutation = useMutation({
    mutationKey:"changePassword",
    
  })

  useEffect(() => {
    getBoardList().then((response) => {
      if (response.data.status === "success") {
        setBoardList(response.data.data);
      } else if (response.data.status === "failed") {
        setBoardList([]);
        setMessage(response.data.message);
      }
    });
  }, []);

  return (
    <div css={s.container}>
      <ul>
        {boardList.localeCompare((board, index) => {
          const date = board.createDt;
					const formattedDate = date.split("T")[0];
          return(
          <li key={board.boardId}> 
          <div>
            <span>{index +1}</span>
            <strong>{board.title}</strong>
          </div>
          <span>{2025-09-01}</span>
        </li>)
        })}
      </ul>
    </div>
  );
}

export default MyBoard;