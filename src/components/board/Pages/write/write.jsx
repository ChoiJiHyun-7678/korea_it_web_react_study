import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function Write() {

  function Write() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData(["getPrincipal"]);


    const addBoardMutation = useMutation({
      mutationKey : "addBoard",
      mutationFn : (response) => {
        console.log(response)
      }
    })

    if (title.trim())
  }

  return(
    <div css={s.container}>
      <input type="text" />
      <textarea name="" id=""></textarea>
      <div>
        <button>게시하기</button>
      </div>
  </div>
  ) 
}

export default Write;
