import Footer from '../components/Footer.jsx'
import { ASSETS } from '../assets.js'

const CORE_SKILLS = [
  { label: "라이브러리",    name: "React",              pct: 95 },
  { label: "언어",   name: "JavaScript (ES6+)",  pct: 90 },
]
const TYPING_SKILL = { label: "슈퍼셋", name: "TypeScript", pct: 88 }

const STYLING_ITEMS = [
  { name: "Tailwind CSS",        badge: "유틸리티 우선",  active: true  },
  { name: "CSS-in-JS (Styled)",  badge: "런타임",        active: false },
  { name: "Sass/SCSS",           badge: "전처리",  active: false },
  { name: "Framer Motion",       badge: "애니메이션",      active: true  },
]

const TOOLS = ["Vite", "Jest", "Testing Library", "Redux Toolkit", "GitHub Actions", "Docker"]

const EXPERIENCE = [
  {
    side: "left",
    period: "현재",
    periodColor: "#61dafb",
    title: "시니어 리액트 아키텍트",
    company: "CloudNexus Systems",
    desc: "Vite와 React 서버 컴포넌트를 사용하여 기존 모놀리식 대시보드를 현대적인 마이크로 프론트엔드 아키텍처로 마이그레이션하는 작업을 리드하고 있습니다.",
    active: true,
  },
  {
    side: "right",
    period: "2021 — 2023",
    periodColor: "#bcc8cd",
    title: "프론트엔드 엔지니어",
    company: "FinTech Flow",
    desc: "재무 분석가를 위한 복잡한 데이터 시각화 도구를 개발했습니다. 개발 시간을 40% 단축하는 맞춤형 디자인 시스템을 구현했습니다.",
    active: false,
  },
  {
    side: "left",
    period: "2019 — 2021",
    periodColor: "#bcc8cd",
    title: "풀스택 개발자",
    company: "Pixel Perfect Agency",
    desc: "글로벌 브랜드를 위한 반응형 웹 경험을 제공했습니다. 접근성(WCAG) 및 성능 최적화에 중점을 두었습니다.",
    active: false,
  },
]

export default function StackPage() {
  return (
    <div className="bg-navy min-h-screen page-enter">
      <div className="max-w-[1280px] mx-auto px-8 pt-36 pb-24 flex flex-col gap-24">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-6 max-w-xl">
            <h1 className="font-grotesk font-bold text-[60px] leading-none tracking-[-1.5px] text-cyan-light m-0">
              기술 스택.
            </h1>
            <p className="font-inter text-text-muted text-lg leading-relaxed m-0">
              저수준 로직부터 고품질 스타일링까지, 고성능 React 애플리케이션을
              설계할 때 사용하는 최신 웹 기술 모음입니다.
            </p>
          </div>
          {/* Decorative pixel grid */}
          <div className="grid grid-cols-3 gap-2 opacity-20 w-32 h-32 shrink-0">
            {[
              "#bfefff","#2d3449","#2d3449",
              "#2d3449","#61dafb","#2d3449",
              "#2d3449","#2d3449","#ddb7ff",
            ].map((c, i) => (
              <div key={i} style={{ background: c }} className="rounded-sm" />
            ))}
          </div>
        </div>

        {/* ── Skills Section ─────────────────────────────────── */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-cyan h-px w-12" />
            <span className="font-inter text-[#b1ecff] text-sm tracking-[1.4px] uppercase">기술</span>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Core Tech */}
            <div className="col-span-7 glass rounded-lg p-8 flex flex-col gap-8">
              <h3 className="font-grotesk font-bold text-text text-2xl m-0">핵심 기술</h3>
              <div className="flex flex-col gap-4">
                {/* 2-column row */}
                <div className="grid grid-cols-2 gap-4">
                  {CORE_SKILLS.map(({ label, name, pct }) => (
                    <div key={name} className="bg-panel rounded p-6 flex flex-col gap-3">
                      <span className="font-inter text-cyan text-xs tracking-[1.2px] uppercase">{label}</span>
                      <span className="font-grotesk font-semibold text-text text-xl">{name}</span>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Full-width row */}
                <div className="bg-panel rounded p-6 flex flex-col gap-3">
                  <span className="font-inter text-cyan text-xs tracking-[1.2px] uppercase">{TYPING_SKILL.label}</span>
                  <span className="font-grotesk font-semibold text-text text-xl">{TYPING_SKILL.name}</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${TYPING_SKILL.pct}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Styling */}
            <div className="col-span-5 bg-card rounded-lg p-8 flex flex-col gap-8">
              <h3 className="font-grotesk font-bold text-text text-2xl m-0">스타일링</h3>
              <div className="flex flex-col gap-6">
                {STYLING_ITEMS.map(({ name, badge, active }) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="font-inter text-text-muted text-lg">{name}</span>
                    <span
                      className={`font-inter text-[10px] uppercase px-2 py-1 border ${
                        active
                          ? "border-cyan text-cyan"
                          : "border-[#3d494d] text-[#3d494d]"
                      }`}
                    >
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Ecosystem */}
            <div className="col-span-12 glass rounded-lg p-8 flex flex-col gap-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="font-grotesk font-bold text-text text-2xl m-0">도구</h3>
                <div className="flex gap-2 flex-wrap">
                  {TOOLS.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
              {/* Visual strip */}
              <div className="h-40 rounded overflow-hidden relative">
                <img
                  src={ASSETS.toolsBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, #0b1326, rgba(11,19,38,0) 50%, #0b1326)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Professional Experience ────────────────────────── */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-lavender h-px w-12" />
            <span className="font-inter text-[#f0dbff] text-sm tracking-[1.4px] uppercase">
              전문 경력
            </span>
          </div>

          <div className="relative flex flex-col gap-24">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(61,73,77,0.3)] -translate-x-1/2" />

            {EXPERIENCE.map(({ side, period, periodColor, title, company, desc, active }, idx) => (
              <div key={idx} className="relative flex items-center">
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-xl z-10 ${
                    active ? "dot-active" : "dot-inactive"
                  }`}
                />
                {/* Content */}
                <div
                  className={`w-1/2 ${
                    side === "left" ? "pr-16 text-right" : "ml-auto pl-16 text-left"
                  }`}
                >
                  <span className="font-inter text-xs uppercase tracking-wider" style={{ color: periodColor }}>
                    {period}
                  </span>
                  <h3 className="font-grotesk font-bold text-text text-2xl mt-2 mb-1">{title}</h3>
                  <p className="font-inter text-lavender text-lg mb-3 m-0">{company}</p>
                  <p className="font-inter text-text-muted text-base leading-relaxed m-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
