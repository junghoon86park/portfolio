# Dev.Terminal — Portfolio

Figma 디자인을 기반으로 만든 React 포트폴리오 사이트입니다.

## 기술 스택

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **JetBrains Mono / Space Grotesk / Inter** (Google Fonts)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 폴더 구조

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx          # 진입점
│   ├── App.jsx           # 라우팅
│   ├── index.css         # 전역 스타일 + Tailwind
│   ├── assets.js         # Figma 에셋 URL 모음
│   ├── components/
│   │   ├── NavBar.jsx
│   │   └── Footer.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── ProjectsPage.jsx
│       ├── StackPage.jsx
│       └── ContactPage.jsx
```

## 주의사항

`src/assets.js`의 Figma 에셋 URL은 **7일** 후 만료됩니다.
프로덕션 배포 시에는 이미지를 직접 다운로드하여 `public/` 폴더에 넣고 경로를 변경하세요.
