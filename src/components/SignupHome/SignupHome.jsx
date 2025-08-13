import { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const OnChangeEmailHendler = (e) => {
    const writeEmail = (e.target.value)
    setEmail(writeEmail)
    if (!writeEmail.includes("@")) {
      setEmailError("이메일 형식에 맞게 입력해 주세요.")
    } else {
      setEmailError("")
    }
  }

  const OnChangePasswordHandler = (e) => {
    const writePassword = (e.target.value)
    setPassword(writePassword)

    if(!writePassword.length<8) {
      setPasswordError("8자리 이상 입력해주세요")
    } else {
      setPasswordError("")
    }
  }

  return (
    <div>
      <div>
        <input type="email" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button>가입하기</button>
    </div>
  );
}

// 이메일 인풋에 입력이 될때 유효성 검사실시
// 골뱅이 포함 여부에 따라서 없으면 에러메세지
// "이메일을 형식에 맞게 입력해주세료" 출력
// 비밀번호 인풋에 입력이될때 유효성 검사실시
// 8자리 이상인지 여부에 따라서 안되면 에러메세지 출력
// "비밀번호는 8자리 이상이어야합니다. "출력
// 에러메세지가 아예없으면 버튼 활성화하나라도 있으면 비활성화

export default SignupForm;
