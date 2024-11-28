import { create } from 'zustand';
import { HospitalInfo } from '@/types';
import { HospitalRegister, getHospital, deleteHospital } from '@/app/actions/hospital-information';

interface hospitalListState {
  hospitals: HospitalInfo[];
  result: { success: boolean, message: string } | null;

  addHospital: (newHospital: HospitalInfo, onUpdate: boolean) =>
    Promise<{ success: boolean, message: string }>;

  updateHospital: (updateHospital: HospitalInfo, onUpdate: boolean) =>
    Promise<{ success: boolean, message: string }>;

  fetchHospital: () => Promise<void>;

  deleteHospital: (reminderId: number) => Promise<void>;
}

export const useHospitalStore = create<hospitalListState>((set) => ({
  hospitals: [],
  result: null,

  addHospital: async(newHospital, onUpdate) => {
    const newHospitals = { ...newHospital };
    try {
      const results = await HospitalRegister(newHospitals, onUpdate);
      set({result: results});

      if (results.success) {
        set((state) => ({
          hospitals: [...state.hospitals, newHospitals],
        }));
        
        console.log("API 저장 성공");
      } else {
        console.error("API 저장 실패");
      }
      return(results);
    } catch (error) {
      console.error("API 저장 중 에러 발생");
      return { success: false, message: "저장 중 오류 발생" };
    }
  },

  updateHospital: async (updateHospital, onUpdate) => {
    try {
      const results = await HospitalRegister(updateHospital, onUpdate);
      set({result: results});
      if (results.success) {
        set((state) => ({
          hospitals: state.hospitals.map((hospital) =>
            hospital.reminder_id === updateHospital.reminder_id ? updateHospital : hospital
          ),
        }));
      }
      console.log("업데이트할 내용 : ", updateHospital);

      return(results);
    } catch (error) {
      console.error("API 수정 중 에러 발생");
      return { success: false, message: "수정 중 오류 발생" };
    }
  },

  fetchHospital: async () => {
    try {
      const response = await getHospital();
      console.log("api 응답 : ", response);

      if (response.success) {
        set((state) => {
          const updateHospital = state.hospitals.map((hospital: HospitalInfo) => {
            const reminderId = response.message.find(
              (apiHospital: HospitalInfo) => apiHospital.content === hospital.content
            );

            if (reminderId && !hospital.reminder_id) {
              return { ...hospital, reminder_id: reminderId.reminder_id };
            }

            return hospital;
          });

          console.log("업데이트된 정보 : ", updateHospital);
          return({ hospitals: updateHospital });
        })

        console.log("정보 받아오기 성공");

      } else {
        console.log("정보 받아오기 실패");
      }
    } catch (error) {
      console.log("정보 받아오기 오류");
    }
  },

  deleteHospital: async (reminderId) => {
    try {
      const response = await deleteHospital(reminderId);

      if (response.success) {
        set((state) => {
          const removeHospital = state.hospitals.filter((medicine: HospitalInfo) => 
            medicine.reminder_id !== reminderId
          );

          console.log("삭제된 후 정보 : ", removeHospital);
          return { hospitals: removeHospital };
        });

        console.log("삭제 성공");
      } else {
        console.error("삭제 실패 : ", response.message);
      }
    } catch (error) {
      console.error("삭제 오류");
    }
  },
}));