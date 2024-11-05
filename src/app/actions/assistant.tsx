'use server';

export async function sendMessage(formData: FormData, token: string) {
    const content = formData.get('content') as string;
    
    console.log(content, token);
    if(!content) {
        return { success: false, message: '음성을 다시 시도하세요'}
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/assistant/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({content: content}),
            credentials: 'include',
        })

        const resData = await res.json();

        if(!res.ok) {
            return { success: false, message: resData.detail || '메시지 전송 실패' };
        }

        return {
            success: true, 
            message: '메시지 전송 완료', 
         }
    } catch(error){
        return { success: false, message: '서버 오류가 발생했습니다.' };
    }
}

export async function getMessage(token: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/assistant/messages/latest`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        
        if(!res.ok) {
            return { success: false, message: '메시지 불러오기 실패'}
        }
        const resData = await res.json();
        return resData;
  
    } catch(error){
        return { success: false, message: '서버 오류가 발생했습니다.' };
    }
}