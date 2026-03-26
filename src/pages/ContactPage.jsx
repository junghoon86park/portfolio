import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import { ASSETS } from '../assets.js'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="bg-navy min-h-screen page-enter">
      <div className="max-w-[1280px] mx-auto px-8 pt-36 pb-24">
        <div className="flex gap-24">

          {/* ── Left column ──────────────────────────────────── */}
          <div className="w-[448px] shrink-0 flex flex-col gap-10">
            <span className="font-inter text-cyan-light text-[11px] tracking-[2.2px] uppercase">
              새로운 프로젝트 작업 가능
            </span>

            <h1 className="font-grotesk font-bold text-[72px] leading-none text-cyan-light m-0">
              협업<br />제안하기
            </h1>

            <p className="font-inter text-text-muted text-lg leading-relaxed m-0">
              확장 가능한 React 아키텍처와 고성능 디지털 경험을 구축합니다.
              기술적 비전을 논의하시거나 편하게 인사 남겨주세요.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-8">
              {[
                { icon: ASSETS.emailIcon, label: "이메일",  value: "hello@reactarchitect.dev" },
                { icon: ASSETS.locIcon,   label: "활동 지역",      value: "텍사스 오스틴 · 원격" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-panel rounded-xl flex items-center justify-center shrink-0">
                    <img src={icon} alt={label} className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <div className="font-inter text-text-dim text-[11px] tracking-[1.1px] uppercase mb-1">
                      {label}
                    </div>
                    <div className="font-inter font-medium text-text text-base">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-6 pt-8">
              <span className="font-inter text-text-dim text-[11px] tracking-[1.1px] uppercase">
                소셜 미디어
              </span>
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: "GitHub",   icon: ASSETS.githubIcon   },
                  { label: "LinkedIn", icon: ASSETS.linkedinIcon },
                  { label: "Twitter",  icon: ASSETS.twitterIcon  },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    className="bg-card border-b border-[rgba(61,73,77,0.2)] rounded px-6 py-3 flex items-center gap-2 cursor-pointer hover:bg-[#1e2a40] transition-colors border-none"
                  >
                    <img src={icon} alt={label} className="w-3 h-3 object-contain" />
                    <span className="font-grotesk font-medium text-text-muted text-base">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — form ───────────────────────────── */}
          <div className="flex-1 relative">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[rgba(97,218,251,0.05)] rounded-xl blur-[60px] pointer-events-none" />

            {/* Decoration card */}
            <div className="absolute -left-20 -bottom-12 -rotate-3 z-10 max-w-[300px]">
              <div
                className="rounded-lg p-6 shadow-[0_20px_25px_rgba(0,0,0,0.2)]"
                style={{
                  background: "rgba(45,52,73,0.7)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(61,73,77,0.25)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={ASSETS.avatarImg}
                    alt="Alex River"
                    className="w-12 h-12 rounded-xl object-cover grayscale"
                  />
                  <div>
                    <div className="font-grotesk font-bold text-text text-sm">Alex River</div>
                    <div className="font-inter text-cyan text-[10px] tracking-[1px] uppercase">리드 아키텍트</div>
                  </div>
                </div>
                <p className="font-inter text-text-muted text-xs leading-relaxed m-0">
                  "우리가 기술적으로 뛰어난 것을 구축할 수 있도록 모든 문의를 제가 직접 검토합니다."
                </p>
              </div>
            </div>

            {/* Main form card */}
            <div
              className="relative z-20"
              style={{
                background: "rgba(45,52,73,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(135,147,151,0.15)",
                borderRadius: 16,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              }}
            >
              <div className="p-12 pb-8">
                <h2 className="font-grotesk font-bold text-text text-2xl mb-2 m-0">연락하기</h2>
                <div className="bg-cyan h-1 w-12 rounded-full mb-10" />

                <div className="flex flex-col gap-6">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { name: "name",  label: "이름",     placeholder: "홍길동",           type: "text"  },
                      { name: "email", label: "이메일 주소", placeholder: "hong@example.com",   type: "email" },
                    ].map(({ name, label, placeholder, type }) => (
                      <div key={name}>
                        <label className="font-inter font-medium text-text-muted text-[11px] tracking-[1.1px] uppercase block mb-3">
                          {label}
                        </label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="input-field"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-inter font-medium text-text-muted text-[11px] tracking-[1.1px] uppercase block mb-3">
                      프로젝트 내용 / 메시지
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="프로젝트나 기술적 과제에 대해 알려주세요..."
                      rows={6}
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-5 flex items-center justify-center gap-3 rounded font-grotesk font-bold text-[#003641] text-lg cursor-pointer border-none transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #bfefff, #61dafb)" }}
                  >
                    {sent ? "메시지 전송 완료! ✓" : "메시지 보내기"}
                    {!sent && (
                      <img src={ASSETS.sendIcon} alt="" className="w-4 h-4 object-contain" />
                    )}
                  </button>
                </div>
              </div>

              {/* Footer stripe */}
              <div className="border-t border-[rgba(61,73,77,0.15)] mx-12 py-5 flex items-center gap-3">
                <img src={ASSETS.clockIcon} alt="" className="w-4 h-4 object-contain opacity-60" />
                <span className="font-inter text-text-muted text-sm">
                  평균 응답 시간: 24시간 이내
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
