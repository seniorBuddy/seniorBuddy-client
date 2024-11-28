import { create } from 'zustand';
import { MedicineInfo } from '@/types';
import { MedicineRegister, getMedicine, deleteMedicine } from '@/app/actions/medicine-information';

interface medicineListState {
  medicines: MedicineInfo[];  // 약 정보 배열
  result: {success: boolean, message: string} | null;  // API 요청 결과

  addMedicine: (newMedicine: MedicineInfo, onUpdate: boolean) =>
    Promise<{ success: boolean; message: string }>;  // 약 추가 메서드

  updateMedicine: (updateMedicine: MedicineInfo, onUpdate: boolean) =>
    Promise<{ success: boolean; message: string }>;

  fetchMedicine: () => Promise<void>;

  deleteMedicine: (reminderId: number) => Promise<void>;
}

export const useMedicineStore = create<medicineListState>((set) => ({
  medicines: [],
  result: null,

  addMedicine: async (newMedicine, onUpdate) => {
    const newMedicines = { ...newMedicine };  // 새로운 약 정보 추가
    try {
      const results = await MedicineRegister(newMedicines, onUpdate);  // 서버에 약 정보 저장
      set({result: results});

      if (results.success) {
        set((state) => ({
          medicines: [...state.medicines, newMedicines],
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

  updateMedicine: async (updateMedicine, onUpdate) => {
    try {
      const results = await MedicineRegister(updateMedicine, onUpdate);
      set({result: results});
      if (results.success) {
        set((state) => ({
          medicines: state.medicines.map((medicine) =>
            medicine.reminder_id === updateMedicine.reminder_id ? updateMedicine : medicine
          ),
        }));
      }
      console.log("업데이트할 내용 : ", updateMedicine);

      return(results);
    } catch (error) {
      console.error("API 수정 중 에러 발생");
      return { success: false, message: "수정 중 오류 발생" };
    }
  },

  fetchMedicine: async () => {
    try {
      const response = await getMedicine();
      console.log("api 응답 : ", response);

      if (response.success) {
        set((state) => {
          const updateMedicines = state.medicines.map((medicine: MedicineInfo) => {
            const reminderId = response.message.find(
              (apiMedicine: MedicineInfo) => apiMedicine.content === medicine.content
            );

            if (reminderId && !medicine.reminder_id) {
              return { ...medicine, reminder_id: reminderId.reminder_id };
            }

            return medicine;
          });

          console.log("업데이트된 정보 : ", updateMedicines);
          return({ medicines: updateMedicines });
        })

        console.log("정보 받아오기 성공");
        
      } else {
        console.error("정보 받아오기 실패");
      }
    } catch (error) {
      console.error("정보 받아오기 오류");
    }
  },

  deleteMedicine: async (reminderId) => {
    try {
      const response = await deleteMedicine(reminderId);

      if (response.success) {
        set((state) => {
          const deleteInformation = state.medicines.filter((medicine: MedicineInfo) => 
            medicine.reminder_id !== reminderId
          );

          console.log("삭제된 후 정보 : ", deleteInformation);
          return { medicines: deleteInformation };
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