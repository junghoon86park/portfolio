const FOOTER_LINKS = [
  { id: "GitHub", label: "깃허브", link: "#none" },
  { id: "LinkedIn", label: "링크드인", link: "#none" },
  { id: "Twitter", label: "트위터", link: "#none" },
  { id: "Email", label: "이메일", link: "#none" }
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-[rgba(30,41,59,0.3)] px-8 py-12">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <span className="font-inter text-text-dim text-sm tracking-[0.35px] uppercase">
          © 2026 React Architect. Kinetic Design으로 구축됨.
        </span>
        <div className="flex gap-8">
          {FOOTER_LINKS.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className="font-inter text-text-dim text-sm tracking-[0.35px] uppercase hover:text-text-muted transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
