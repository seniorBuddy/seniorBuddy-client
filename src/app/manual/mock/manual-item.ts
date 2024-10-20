import k1_1 from '../../assets/images/k1-1.png';
import k1_2 from '../../assets/images/k1-2.png';
import k1_3 from '../../assets/images/k1-3.png';
import k1_4 from '../../assets/images/k1-4.png';
import k1_5 from '../../assets/images/k1-5.png';
import k1_6 from '../../assets/images/k1-6.png';
import k1_7 from '../../assets/images/k1-7.png';
import k1_8 from '../../assets/images/k1-8.png';
import k2_1 from '../../assets/images/k2-1.png';
import k2_2 from '../../assets/images/k2-2.png';
import k2_3 from '../../assets/images/k2-3.png';
import k2_4 from '../../assets/images/k2-4.png';
import k2_5 from '../../assets/images/k2-5.png';
import k2_6 from '../../assets/images/k2-6.png';
import d1_1 from '../../assets/images/d1-1.png';
import d1_2 from '../../assets/images/d1-2.png';
import d1_3 from '../../assets/images/d1-3.png';
import d1_4 from '../../assets/images/d1-4.png';
import d2_1 from '../../assets/images/d2-1.png';
import d2_2 from '../../assets/images/d2-2.png';
import d2_3 from '../../assets/images/d2-3.png';
import d2_4 from '../../assets/images/d2-4.png';
import d3_1 from '../../assets/images/d3-1.png';
import d3_2 from '../../assets/images/d3-2.png';
import d3_3 from '../../assets/images/d3-3.png';
import d4_1 from '../../assets/images/d4-1.png';
import d4_2 from '../../assets/images/d4-2.png';
import d4_3 from '../../assets/images/d4-3.png';
import d4_4 from '../../assets/images/d4-4.png';
import d4_5 from '../../assets/images/d4-5.png';
import d4_6 from '../../assets/images/d4-6.png';

export const manualItems = [
    {
      id: "k1picture",
      title: "사진 보내기",
      category: "카카오톡",
      steps: [
        { id: 1, images: [{ src: k1_1, description: "1. 카카오톡 채팅방 접속 후 하단의 플러스 버튼을 누른다" }] },
        { id: 2, images: [{ src: k1_2, description: "2. 앨범을 누른다" }] },
        { id: 3, images: [{ src: k1_3, description: "3. 전송하고 싶은 이미지를 슬라이드 해서 선택한다" }] },
        { id: 4, images: [{ src: k1_4, description: "4. 우측 상단의 노란 화살표 버튼을 누른다" }] },
        { id: 5, images: [{ src: k1_5, description: "5. 여러 장의 이미지를 보내고 싶을 때는 좌측 하단의 전체 버튼을 누른다" }] },
        { id: 6, images: [{ src: k1_6, description: "6. 전송하고 싶은 이미지들을 슬라이드 해서 선택한다" }] },
        { id: 7, images: [{ src: k1_7, description: "7. 좌측 하단의 사진 묶어보내기를 선택한다" }] },
        { id: 8, images: [{ src: k1_8, description: "8. 우측 상단의 전송 버튼을 누른다" }] },
      ],
    },
    {
      id: "k2groupchat",
      title: "단톡 만들기",
      category: "카카오톡",
      steps: [
        { id: 1, images: [{ src: k2_1, description: "1. 카카오톡 채팅방 목록에서 우측 상단 중앙에 있는 아이콘을 누른다" }] },
        { id: 2, images: [{ src: k2_2, description: "2. 팀 채팅을 누른다" }] },
        { id: 3, images: [{ src: k2_3, description: "3. 단톡에 초대하고 싶은 친구를 여러 명 선택한다" }] },
        { id: 4, images: [{ src: k2_4, description: "4. 우측 상단의 다음 버튼을 누른다" }] },
        { id: 5, images: [{ src: k2_5, description: "5. 단톡의 이름을 적어 준다" }] },
        { id: 6, images: [{ src: k2_6, description: "6. 확인 버튼을 눌러 단톡을 생성한다" }] },
      ],
    },
    {
      id: "d1number",
      title: "전화번호 등록하기",
      category: "일상",
      steps: [
        { id: 1, images: [{ src: d1_1, description: "1. 연락처 아이콘을 누른다" }] },
        { id: 2, images: [{ src: d1_2, description: "2. 상단의 플러스 버튼을 눌러 연락처 저장 페이지로 이동한다" }] },
        { id: 3, images: [{ src: d1_3, description: "3. 이름과 전화번호 등 필요한 정보를 입력한다" }] },
        { id: 4, images: [{ src: d1_4, description: "4. 하단의 저장 버튼을 눌러 새 연락처를 저장한다" }] },
      ],
    },
    {
      id: "d2capture",
      title: "화면 캡처하기",
      category: "일상",
      steps: [
        { id: 1, images: [{ src: d2_1, description: "1. 휴대폰의 홈 버튼과 볼륨 버튼 중 아래 버튼을 동시에 짧게 누른다" }] },
        { id: 2, images: [{ src: d2_2, description: "2. 화면이 깜빡이며 캡처되는 걸 확인한다" }] },
        { id: 3, images: [{ src: d2_3, description: "3. 갤러리 아이콘을 누른다" }] },
        { id: 4, images: [{ src: d2_4, description: "4. 스크린샷 항목에서 캡처를 확인한다" }] },
      ],
    },
    {
      id: "d3light",
      title: "밝기 조절하기",
      category: "일상",
      steps: [
        { id: 1, images: [{ src: d3_1, description: "1. 톱니바퀴 모양의 설정 아이콘을 누른다" }] },
        { id: 2, images: [{ src: d3_2, description: "2. 설정 내의 디스플레이 항목을 누른다" }] },
        { id: 3, images: [{ src: d3_3, description: "3. 밝기 조절 바를 좌우로 움직여 원하는 밝기로 설정한다" }] },
      ],
    },
    {
      id: "d4livechat",
      title: "영상 통화하기",
      category: "일상",
      steps: [
        { id: 1, images: [{ src: d4_1, description: "1. 전화 아이콘을 눌러 연락처 페이지로 이동한다" }] },
        { id: 2, images: [{ src: d4_2, description: "2. 영상 통화를 하고 싶은 연락처를 선택한다" }] },
        { id: 3, images: [{ src: d4_3, description: "3. 연락처 상단에 있는 영상 통화 버튼을 눌러 통화를 시작한다" }] },
        { id: 4, images: [{ src: d4_4, description: "4. 카카오톡에서 페이스톡을 하려면 원하는 채팅방을 들어가 플러스 버튼을 누른다" }] },
        { id: 5, images: [{ src: d4_5, description: "5. 통화하기 버튼을 누른다" }] },
        { id: 6, images: [{ src: d4_6, description: "6. 페이스톡 버튼을 눌러 영상 통화를 시작한다" }] },
      ],
    },
  ];