import Footer from '../components/Footer.jsx'
import { ASSETS } from '../assets.js'

const PROJECTS = [
  {
    size: "large",
    label: null,
    title: "프로젝트 알파 (대시보드)",
    desc: "React와 WebWorker를 사용하여 초당 수백만 개의 데이터 포인트를 처리하는 실시간 분석 엔진입니다.",
    tags: ["React", "D3.js", "TypeScript"],
    img: ASSETS.dashboardPreview,
    cta: { label: "프로젝트 보기", primary: true },
  },
  {
    size: "small",
    title: "프로젝트 베타 (이커머스)",
    desc: "프리미엄 패션 브랜드를 위한 Next.js 및 Stripe API 활용 헤드리스 커머스 연동.",
    tags: ["Next.js", "Tailwind"],
    icon: ASSETS.shopIcon,
    cta: { label: "상세 보기", primary: false },
  },
  {
    size: "small",
    title: "프로젝트 감마 (SaaS)",
    desc: "OpenAI GPT-4 API와 복잡한 상태 관리를 사용한 멀티 테넌트 AI 작문 어시스턴트.",
    tags: ["Redux", "Firebase"],
    icon: ASSETS.saasIcon,
    cta: { label: "상세 보기", primary: false },
  },
  {
    size: "medium-split",
    title: "프로젝트 델타 (핀테크)",
    desc: "생체 인증 시뮬레이션 및 실시간 원장 동기화를 갖춘 안전한 암호화폐 지갑 인터페이스.",
    tags: ["Zustand", "Ethers.js"],
    img: ASSETS.systemInterface,
    cta: { label: "탐색하기", primary: false },
  },
  {
    size: "half",
    category: "내부 도구",
    categoryColor: "#ddb7ff",
    title: "프로젝트 엡실론 (컴포넌트 라이브러리)",
    desc: "40개 이상의 마이크로 프론트엔드 전반에서 엔터프라이즈급 일관성을 제고하기 위한 디자인 시스템 아키텍처.",
    tags: ["Storybook", "SCSS"],
  },
  {
    size: "half",
    category: "실험적",
    categoryColor: "#d2eaff",
    title: "프로젝트 제타 (PWA)",
    desc: "충돌 없는 복제 데이터 타입(CRDT)이 있는 오프라인 우선 작업 관리 시스템.",
    tags: ["PWA", "IndexedDB"],
  },
]

function TagList({ tags }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="bg-navy min-h-screen page-enter relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute -left-32 -top-48 w-[512px] h-[776px] bg-[rgba(97,218,251,0.06)] rounded-xl blur-[60px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[640px] h-[970px] bg-[rgba(221,183,255,0.04)] rounded-xl blur-[60px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 pt-36 pb-24 relative z-10 flex flex-col gap-24">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex items-end justify-between gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-inter font-semibold text-cyan-light text-[11px] tracking-[2.2px] uppercase">
              선별된 작업물
            </span>
            <h1 className="font-grotesk font-bold text-[72px] leading-[1] tracking-[-3.6px] m-0">
              <span className="text-text">엔지니어링</span>
              <br />
              <span className="text-cyan">인터페이스.</span>
            </h1>
          </div>
          <div className="border-l border-[#3d494d] pl-6 max-w-[384px]">
            <p className="font-inter text-text-muted text-lg leading-relaxed m-0">
              복잡한 대시보드부터 유연한 이커머스 경험까지, 다양한 고성능 React 애플리케이션 모음입니다.
            </p>
          </div>
        </div>

        {/* ── Bento Grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-8">

          {/* Project 1 — Large */}
          <div className="col-span-8 glass rounded-lg overflow-hidden flex flex-col">
            <div className="h-[400px] relative overflow-hidden">
              <img
                src={ASSETS.dashboardPreview}
                alt="Dashboard preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-grotesk font-bold text-cyan-light text-2xl m-0">
                    프로젝트 알파 (대시보드)
                  </h3>
                  <p className="font-inter text-text-muted text-base m-0">
                    React와 WebWorker를 사용하여 초당 수백만 개의 데이터 포인트를 처리하는 실시간 분석 엔진입니다.
                  </p>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  {["React", "D3.js", "TypeScript"].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <button className="btn-primary w-fit font-grotesk font-bold text-base rounded px-6 py-3 flex items-center gap-2 cursor-pointer border-none">
                프로젝트 보기
                <img src={ASSETS.arrowRight} alt="" className="w-3 h-3 object-contain" />
              </button>
            </div>
          </div>

          {/* Project 2 — Small sidebar */}
          <div className="col-span-4 glass rounded-lg p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center shrink-0">
                <img src={ASSETS.shopIcon} alt="" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="font-grotesk font-bold text-text text-xl m-0">
                프로젝트 베타 (이커머스)
              </h3>
              <p className="font-inter text-text-muted text-sm leading-relaxed m-0">
                프리미엄 패션 브랜드를 위한 Next.js 및 Stripe API 활용 헤드리스 커머스 연동.
              </p>
              <TagList tags={["Next.js", "Tailwind"]} />
            </div>
            <button className="border border-[#3d494d] rounded font-grotesk font-bold text-text text-base py-3 text-center cursor-pointer hover:border-[rgba(97,218,251,0.4)] transition-colors bg-transparent w-full mt-6">
              상세 보기
            </button>
          </div>

          {/* Project 3 — Small */}
          <div className="col-span-4 glass rounded-lg p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center shrink-0">
                <img src={ASSETS.saasIcon} alt="" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="font-grotesk font-bold text-text text-xl m-0">
                프로젝트 감마 (SaaS)
              </h3>
              <p className="font-inter text-text-muted text-sm leading-relaxed m-0">
                OpenAI GPT-4 API와 복잡한 상태 관리를 사용한 멀티 테넌트 AI 작문 어시스턴트.
              </p>
              <TagList tags={["Redux", "Firebase"]} />
            </div>
            <button className="border border-[#3d494d] rounded font-grotesk font-bold text-text text-base py-3 text-center cursor-pointer hover:border-[rgba(97,218,251,0.4)] transition-colors bg-transparent w-full mt-6">
              상세 보기
            </button>
          </div>

          {/* Project 4 — Medium split */}
          <div className="col-span-8 glass rounded-lg overflow-hidden flex" style={{ minHeight: 380 }}>
            <div className="w-1/2 relative overflow-hidden">
              <img
                src={ASSETS.systemInterface}
                alt="System interface"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-8 flex flex-col justify-center gap-5">
              <h3 className="font-grotesk font-bold text-cyan-light text-2xl m-0">
                프로젝트 델타 (핀테크)
              </h3>
              <p className="font-inter text-text-muted text-base leading-relaxed m-0">
                생체 인증 시뮬레이션 및 실시간 원장 동기화를 갖춘 안전한 암호화폐 지갑 인터페이스.
              </p>
              <TagList tags={["Zustand", "Ethers.js"]} />
              <button className="bg-muted w-fit font-grotesk font-bold text-cyan text-base rounded px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-[#3d4d6a] transition-colors border-none">
                탐색하기
                <img src={ASSETS.arrowRight} alt="" className="w-3 h-3 object-contain" />
              </button>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col-span-6 glass rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="font-inter text-lavender text-base tracking-[1.6px] uppercase">
                내부 도구
              </span>
              <img src={ASSETS.extLinkIcon} alt="" className="w-5 h-4 object-contain opacity-60" />
            </div>
            <h3 className="font-grotesk font-bold text-text text-xl mb-3 m-0">
              프로젝트 엡실론 (컴포넌트 라이브러리)
            </h3>
            <p className="font-inter text-text-muted text-sm leading-relaxed mb-4 m-0">
              40개 이상의 마이크로 프론트엔드 전반에서 엔터프라이즈급 일관성을 제고하기 위한 디자인 시스템 아키텍처.
            </p>
            <TagList tags={["Storybook", "SCSS"]} />
          </div>

          {/* Project 6 */}
          <div className="col-span-6 glass rounded-lg p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="font-inter text-[#d2eaff] text-base tracking-[1.6px] uppercase">
                실험적
              </span>
              <img src={ASSETS.extLinkIcon} alt="" className="w-5 h-4 object-contain opacity-60" />
            </div>
            <h3 className="font-grotesk font-bold text-text text-xl mb-3 m-0">
              프로젝트 제타 (PWA)
            </h3>
            <p className="font-inter text-text-muted text-sm leading-relaxed mb-4 m-0">
              충돌 없는 복제 데이터 타입(CRDT)이 있는 오프라인 우선 작업 관리 시스템.
            </p>
            <TagList tags={["PWA", "IndexedDB"]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
