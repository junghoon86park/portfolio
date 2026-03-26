const FOOTER_LINKS = [
  { id: "GitHub", label: "깃허브" },
  { id: "LinkedIn", label: "링크드인" },
  { id: "Twitter", label: "트위터" },
  { id: "Email", label: "이메일" }
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-[rgba(30,41,59,0.3)] px-8 py-12">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <span className="font-inter text-text-dim text-sm tracking-[0.35px] uppercase">
          © 2024 React Architect. Kinetic Design으로 구축됨.
        </span>
        <div className="flex gap-8">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.id}
              href="#"
              className="font-inter text-text-dim text-sm tracking-[0.35px] uppercase hover:text-text-muted transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
