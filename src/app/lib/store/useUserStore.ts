import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, UserStore } from "@/types";

const UserInit: User = {
  name: '',
  phone_number: null,
  email: null,
  type: ''
};

const useUserStore = create<User & UserStore>()(
  persist(
    (set) => ({
      ...UserInit,

    // 유저 정보 setting
    // userUpdate는 User 타입의 일부를 갖는 인자
      setUser: (userUpdate: Partial<User>) => {
        set((state) => {
            // User 타입의 일부를 타입으로 갖는 Change 객체 생성
            const change: Partial<User> = {};
            Object.entries(userUpdate).forEach(([key, value]) => {
                if (state[key as keyof User] ! == value) {
                    change[key as keyof User] = value;
                }
            });
           return Object.keys(change).length > 0 ? change : {};

        })
      },
    // 유저 정보 fetching
      fetchUser: async (token: string) => {
        try {
          const res = await fetch(`/api/users/me`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`

            },
              credentials: 'include',
          });

          if (!res.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await res.json();
          set({
            name: data.user_real_name,
            phone_number: data.phone_number,
            email: data.email,
            type: data.user_type,
          });
        } catch (error) {
          console.error("유저 정보 패치 에러", error);
        }
      },
      // 유저 정보 초기화
      reset: () => {
        set(UserInit);
      },
    }),
    {
      name: "user-info",
      partialize: (state) => ({
        name: state.name,
        phone_number: state.phone_number,
        email: state.email,
        type: state.type,
      }),
    }
  )
);

export default useUserStore;