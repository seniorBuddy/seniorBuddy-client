// 액션 함수를 정의합니다.
export default async function registerUser(data: any) {
  console.log(data);
  /*
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // 입력된 데이터를 JSON 형식으로 변환하여 보냅니다.
    });

    if (!response.ok) {
      throw new Error('회원가입 실패: ' + response.statusText);
    }

    const result = await response.json();
    console.log("회원가입 성공:", result);
    return result; // 회원가입 결과 반환
  } catch (error) {
    console.error("회원가입 중 오류 발생:", error);
    throw error; // 오류를 발생시킵니다.
  }
    */
}