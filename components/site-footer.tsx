import { Workflow } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/components/brand-icons'
import { BUSINESS_NAME, NAV_LINKS, CONTACT } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Workflow className="size-5" />
              </span>
              <span className="text-lg font-bold text-foreground">{BUSINESS_NAME}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              פתרונות אוטומציה ו־AI לעסקים
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="ניווט בתחתית" className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">ניווט</span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">יצירת קשר</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {CONTACT.phone}
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              מדיניות פרטיות
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS_NAME}. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  )
}
