import { useState } from "react";


const useAiCustom = () => {
    const [profile, setProfile] = useState('');
    
    const getAiProfile = async (token: string) => {
    let res;

        try {
            const res = await fetch(`/api/users/me/ai_profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
            });
            if(!res.ok) {
                console.log('미지 불러오기 실패', res);
            }
            console.log('이미지 불러오기 성공', res);
        } catch (error) {
            console.log(error);
        }
    }
    return { getAiProfile, setProfile, profile };
}

export default useAiCustom;