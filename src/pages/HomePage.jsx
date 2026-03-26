import Footer from '../components/Footer.jsx'
import { ASSETS } from '../assets.js'

const CODE_LINES = [
  [["01","#475569"],["const","#ddb7ff"],["Project","#5cd5f6"],["=","#dae2fd"],["()","#005b83"],["=>","#ddb7ff"],["{","#005b83"]],
  [["02","#475569"],["  const","#ddb7ff"],["[data, setData] =","#dae2fd"],["useState","#61dafb"],["(null);","#005b83"]],
  [["03","#475569"],["  // Optimizing performance","#4a5568"]],
  [["04","#475569"],["  useEffect","#61dafb"],["(()","#005b83"],["=>","#ddb7ff"],["{","#005b83"]],
  [["05","#475569"],["    fetchApplicationMetrics","#5cd5f6"],["();","#005b83"]],
  [["06","#475569"],["  }, []);","#005b83"]],
  [["07","#475569"],["  return","#ddb7ff"],["(","#005b83"],["<MainCanvas />","#61dafb"],[");","#005b83"]],
  [["08","#475569"],["};","#005b83"]],
  [["09","#475569"]],
]

const TECH_STACK = ["React", "TypeScript", "Next.js", "Redux"]

const STATS = [
  { val: "08+",   label: "년의 경력" },
  { val: "40+",   label: "성공적인 배포" },
  { val: "99.9%", label: "핵심 웹 바이탈 점수" },
]

export default function HomePage({ setPage }) {
  return (
    <div className="bg-navy min-h-screen page-enter">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-8 pt-36 pb-0">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[700px]">

          {/* Left column */}
          <div className="col-span-7 flex flex-col gap-10">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="bg-cyan-light h-px w-8 shrink-0" />
              <span className="font-inter font-semibold text-cyan-light text-[11px] tracking-[2.2px] uppercase">
                고성능 프로젝트 작업 가능
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-grotesk font-bold text-[72px] leading-[1.1] tracking-[-1.8px] text-text m-0">
              <span className="hero-gradient">현대적이고</span>,
              <br />확장 가능한 웹
              <br />인터페이스 구축.
            </h1>

            {/* Sub-heading */}
            <p className="font-inter text-text-muted text-xl leading-relaxed m-0 max-w-[560px]">
              저는 고성능 애플리케이션에 집중하는 시니어 React 개발자입니다.
              복잡한 프론트엔드 생태계와 디자인 시스템 아키텍처를 전문으로 합니다.
            </p>

            {/* CTAs */}
            <div className="flex gap-6 items-center">
              <button
                onClick={() => setPage("Projects")}
                className="btn-primary font-inter font-bold text-base rounded-md px-8 py-4 flex items-center gap-3 cursor-pointer shadow-glow-cyan border-none"
              >
                프로젝트 보기
                <img src={ASSETS.arrowRight} alt="" className="w-4 h-4 object-contain" />
              </button>
              <button className="font-inter font-semibold text-text text-base px-8 py-4 rounded-md border border-[rgba(61,73,77,0.4)] cursor-pointer hover:border-[rgba(97,218,251,0.4)] transition-colors bg-transparent">
                이력서 다운로드
              </button>
            </div>

            {/* Core Technologies */}
            <div className="flex flex-col gap-4 pt-4">
              <span className="font-inter text-text-dim text-[11px] tracking-[1.1px] uppercase">
                핵심 기술
              </span>
              <div className="flex gap-6 items-center flex-wrap">
                {TECH_STACK.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="font-grotesk font-bold text-text text-lg">{t}</span>
                    <div className="bg-[rgba(97,218,251,0.3)] h-0.5 w-12" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — code card */}
          <div className="col-span-5 flex items-center justify-center relative">
            {/* Decorative backdrop */}
            <div className="absolute -top-8 -right-10 w-48 h-48 border border-[rgba(191,239,255,0.15)] rounded-xl blur-sm" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[rgba(97,218,251,0.07)] rounded-xl rotate-12" />

            {/* Tilted glass card */}
            <div className="rotate-1 relative z-10 w-full max-w-[480px]">
              <div className="glass rounded-lg shadow-card-lg">
                {/* Inner dark bg */}
                <div className="bg-[#060e20] rounded-md m-[3px] overflow-hidden">
                  <div className="p-6">
                    {/* Window dots */}
                    <div className="flex gap-2 mb-5">
                      <div className="w-3 h-3 rounded-full bg-[#ffb4ab]" />
                      <div className="w-3 h-3 rounded-full bg-[#ddb7ff]" />
                      <div className="w-3 h-3 rounded-full bg-cyan" />
                    </div>
                    {/* Code */}
                    <div className="font-mono text-[13px] flex flex-col gap-1">
                      {CODE_LINES.map((line, i) => (
                        <div key={i} className="flex gap-3 items-baseline leading-7">
                          {line.map(([text, color], j) => (
                            <span key={j} style={{ color }}>{text}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-8">
          {STATS.map(({ val, label }) => (
            <div
              key={label}
              className="bg-card border-l-2 border-[rgba(97,218,251,0.3)] rounded-lg px-10 py-10 flex flex-col gap-4"
            >
              <span className="font-grotesk font-bold text-[48px] leading-none text-text">{val}</span>
              <span className="font-inter text-text-muted text-base tracking-[1.6px] uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
