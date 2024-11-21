import { create } from 'zustand';
import { MedicineInfo } from '@/types';
import { MedicineRegister } from '@/app/actions/medicine-information';

interface medicineListState {
  medicines: MedicineInfo[];  // 약 정보 배열
  result: {success: boolean, message: string} | null;  // API 요청 결과
  addMedicine: (newMedicine: Omit<MedicineInfo, 'id'>, token: string) =>
    Promise<{ success: boolean; message: string }>;  // 약 추가 메서드
  updateMedicine: (updateMedicine: MedicineInfo, token: string) =>
    Promise<{ success: boolean; message: string }>;
}

export const useMedicineStore = create<medicineListState>((set) => ({
  medicines: [],
  result: null,

  addMedicine: async (newMedicine, token) => {
    const medicineId = { id: Date.now(), ...newMedicine };  // 새로운 약 정보에 고유 id 추가
    try {
      const results = await MedicineRegister(medicineId, token);  // 서버에 약 정보 저장
      set({result: results});
      if (results.success) {
        set((state) => ({
          medicines: [...state.medicines, medicineId],
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

  updateMedicine: async (updateMedicine, token) => {
    try {
      const results = await MedicineRegister(updateMedicine, token);
      set({result: results});
      if (results.success) {
        set((state) => ({
          medicines: state.medicines.map((medicine) =>
            medicine.id === updateMedicine.id ? updateMedicine : medicine
          ),
        }));
      }
      return(results);
    } catch (error) {
      console.error("API 수정 중 에러 발생");
      return { success: false, message: "수정 중 오류 발생" };
    }
  },
}));

// const useMedicineStore = create<MedicineInfo>((set) => ({
//     ...medicines,
//     setData: (medicine: Partial<MedicineInfo>) => {
//       set((state) => ({
//         ...state,                  // 기존 상태 유지
//         ...medicine,               // 업데이트할 medicine 필드 덮어쓰기
//       }));
//     },
// }));

// export default useMedicineStore;
