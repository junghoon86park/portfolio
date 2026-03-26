import { ASSETS } from '../assets.js'

const LINKS = [
  { id: "Home", label: "홈" },
  { id: "Projects", label: "프로젝트" },
  { id: "Stack", label: "스택" },
  { id: "Contact", label: "연락처" }
]

export default function NavBar({ page, setPage }) {
  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setPage("Home")}
          className="gradient-text font-grotesk font-bold text-xl tracking-tight bg-transparent border-none cursor-pointer p-0"
        >
          Dev.Terminal
        </button>

        {/* Links */}
        <div className="flex gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => setPage(l.id)}
              className={[
                "font-grotesk font-bold text-base tracking-tight bg-transparent border-none cursor-pointer transition-colors pb-1",
                page === l.id
                  ? "text-[#38bdf8] border-b-2 border-[#38bdf8]"
                  : "text-text-soft hover:text-text",
              ].join(" ")}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Menu icon */}
        <div className="w-8 h-6 opacity-60 cursor-pointer">
          <img src={ASSETS.menuIcon} alt="menu" className="w-full h-full object-contain" />
        </div>
      </div>
    </nav>
  )
}
