import { useState } from "react";


const useAiCustom = () => {
    const [profile, setProfile] = useState('');
    const getAiProfile = async (token: string) => {

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/users/me/ai_profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
            });
            if(!res.ok) {
                throw new Error('이미지 불러오기 실패');
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return { getAiProfile, setProfile, profile };
}

export default useAiCustom;