# 프로젝트 리팩토링 및 코드 축소 제안

소스 코드를 전체적으로 검토한 결과, 다음과 같은 부분에서 중복을 줄이고 코드를 더 깔끔하게 개선할 수 있습니다.

## 1. 아키텍처 및 레이아웃 개선 (중복 제거)

### Footer 컴포넌트 중복 제거
현재 `HomePage`, `ProjectsPage`, `StackPage`, `ContactPage` 등 모든 페이지 하단에 `<Footer />`가 각각 임포트되어 사용되고 있습니다. 
이를 개별 페이지에서 제거하고 최상위 라우팅을 담당하는 `App.jsx`로 이동시키면 각 페이지의 코드를 줄일 수 있습니다.

**변경 전 (각 페이지):**
```jsx
export default function SomePage() {
  return (
    <div className="...">
      {/* 콘텐츠 */}
      <Footer />
    </div>
  )
}
```

**변경 후 (`App.jsx`):**
```jsx
export default function App() {
  // ...
  return (
    <div className="bg-navy min-h-screen flex flex-col">
      <NavBar page={page} setPage={setPage} />
      <main className="flex-1">
        <Page key={page} setPage={setPage} />
      </main>
      <Footer />
    </div>
  )
}
```

### 공통 Page Wrapper (Layout) 도입
모든 페이지가 `<div className="bg-navy min-h-screen page-enter">` 및 `<div className="max-w-[1280px] mx-auto px-8...">`와 유사한 래퍼를 가지고 있습니다.
이를 공통 `Layout` 컴포넌트로 만들거나 `App.jsx` 구조 안으로 통합하여 개별 페이지 컴포넌트의 가시성을 높이고 반복을 줄일 수 있습니다.

## 2. 데이터 분리 (관심사 분리)

각 페이지 상단에 정의된 하드코딩된 정적 배열과 객체들이 컴포넌트 파일의 길이를 크게 늘리고 있습니다. 이를 별도의 상수(`constants` 또는 `data`) 폴더로 분리하는 것을 권장합니다.
- **HomePage.jsx:** `CODE_LINES`, `TECH_STACK`, `STATS`
- **ProjectsPage.jsx:** `PROJECTS`
- **StackPage.jsx:** `CORE_SKILLS`, `TYPING_SKILL`, `STYLING_ITEMS`, `TOOLS`, `EXPERIENCE`

**예시 (`src/data/projectsData.js` 생성):**
```js
export const PROJECTS = [
  // ... 프로젝트 데이터
];
```
이렇게 하면 컴포넌트 파일은 순수하게 UI 렌더링 로직에만 집중할 수 있습니다.

## 3. UI 컴포넌트 재사용성 강화

### Button 컴포넌트 모듈화
각 페이지에서 반복적으로 쓰이는 비슷한 스타일의 버튼들을 공통 `<Button />` 컴포넌트로 분리할 수 있습니다. 
- Primary 버튼: `<button className="btn-primary ...">`
- Outline 버튼: `<button className="border border-[#3d494d] ...">`

이러한 버튼을 `src/components/Button.jsx` 하나로 만들어 재사용성을 높이고 Tailwind 클래스 중복을 줄이세요.

### TagList 컴포넌트 분리
`ProjectsPage.jsx` 내부에 선언된 `TagList` 컴포넌트는 다른 페이지나 추후 확장될 경우에도 쓰일 수 있으므로 `src/components/TagList.jsx` 로 분리하는 것이 좋습니다.

## 4. 로직 단순화

- `ContactPage.jsx`의 폼 핸들러 로직은 현재도 직관적이지만, 만약 인풋 필드가 많아진다면 `react-hook-form` 라이브러리를 도입하거나 커스텀 훅(`useForm` 등)을 만들어 뷰와 로직을 완전히 분리할 수 있습니다.
- 현재는 파일 크기가 작기 때문에 필수 요소는 아닙니다.

---

**결론적으로,**
1. `App.jsx`에 `Footer`와 기본 레이아웃 래퍼 통합
2. 상수/Mock 데이터(`PROJECTS`, `STATS` 등)를 `src/data` 폴더로 이동
3. 공통 UI(버튼 등)를 `components` 폴더에 분리

위 3가지 방향으로 리팩토링을 진행하면, 불필요한 코드 중복을 획기적으로 줄이고 유지보수하기 쉬운 프로젝트 구조를 갖출 수 있습니다.
