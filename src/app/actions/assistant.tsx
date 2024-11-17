'use server';

import { getAccessToken } from "../lib/auth/token";

export async function sendMessage(formData: FormData) {
    const content = formData.get('content') as string;
    const token = getAccessToken();
    
    if(!content) {
        return { success: false, message: '음성을 다시 시도하세요'}
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/assistant/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({content: content}),
            credentials: 'same-origin',
        })

        const resData = await res.json();

        if(!res.ok) {
            return { success: false, message: resData.detail || '메시지 전송 실패' };
        }
        // if (res.status === 401) {
            // console.log("토큰 만료");
            // const newToken = await getRefreshToken(token);
            // await sendMessage(newToken);
        //   }
      

        return {
            success: true, 
            message: '메시지 전송 완료', 
         }
    } catch(error){
        return { success: false, message: 'POST: 서버 오류가 발생했습니다.' };
    }
}

export async function getMessage() {

    const token = getAccessToken();
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/assistant/messages/latest`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'same-origin',
        })
        
        if(!res.ok) {
            return { success: false, message: '메시지 불러오기 실패'}
        }
        const resData = await res.json();
        console.log(resData)
        return resData;
  
    } catch(error){
        return { success: false, message: 'GET: 서버 오류가 발생했습니다.' };
    }
}



// const getRefreshToken = async () => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/refresh`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//           });
//           if(!res.ok) {
//               throw new Error('토큰 갱신 실패');
//           }
//           const resData = await res.json();
//           return resData.access_token;

//     } catch (error) {
//         console.error(error);
//     }
   
//   }