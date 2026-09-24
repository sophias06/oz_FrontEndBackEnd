import "./style.css";
import type { Profile, Skill } from "./types";
import { mountCard } from "./view";

// STEP 1: 이름, 이니셜, 소개글, GitHub 주소를 내 정보로 바꿉니다.
// skills 배열의 마지막에 스킬 하나를 더 넣어 보세요.
const me: Profile = {
  name: "서지은",
  initials: "SS",
  bio: "스터디에 참여중입니다.",
  github: "https://github.com/sophias06/oz_FrontEndBackEnd",
  skills: [
    { name: "HTML", status: "done" },
    { name: "CSS", status: "done" },
    { name: "TypeScript", status: "learning" },
    { name: "React", status: "learning" },
  ],
};

let onlyLearning = false;
onlyLearning = !onlyLearning;
render();

// STEP 2: 아래 고정 HTML을 map과 join("")으로 바꿉니다.
// 아직은 데이터에 스킬을 추가해도 이 고정 목록은 늘어나지 않습니다.
function renderSkills(skills: Skill[]): string {
  return skills
    .map((s) => `<li>${s.name} (${s.status})</li>`)
    .join("");
}

// STEP 3-A: filter로 status가 "learning"인 항목만 반환하세요.
// 시작 코드는 전체 배열을 반환하므로 버튼을 눌러도 목록이 그대로입니다.
function getLearning(skills: Skill[]): Skill[] {
  return skills.filter((s) => s.status === "learning");
}

// STEP 3-B: status가 "done"인 항목을 고른 뒤 개수를 반환하세요.
function countDone(skills: Skill[]): number {
  return skills.filter((s) => s.status === "done").length;
}

// 아래 render와 버튼 연결은 강사 제공 코드입니다.
// onlyLearning이 바뀌면 직접 render()를 불러 화면을 다시 그립니다.
function render(): void {
  const visible = onlyLearning ? getLearning(me.skills) : me.skills;
  mountCard(me, renderSkills(visible), countDone(me.skills), onlyLearning, () => {
    onlyLearning = !onlyLearning;
    render();
  });
}

render();
