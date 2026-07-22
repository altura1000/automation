import { ArrowUpLeft, Check } from 'lucide-react'

import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const highlights = [
  'מענה אוטומטי ללקוחות',
  'חיבור בין מערכות',
  'תהליכים עסקיים חכמים',
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 bg-[#101b2d] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[760px] grid-cols-1 lg:grid-cols-[160px_1fr]">
          <HeroRail />

          <div className="relative flex flex-col justify-between border-white/10 py-28 lg:border-r lg:px-14 lg:py-32">
            <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />

            <div className="grid items-start gap-14 xl:grid-cols-[1fr_320px] xl:gap-20">
              <div>
                <Reveal immediate>
                  <p className="mb-8 flex items-center gap-3 text-sm font-medium text-[#b8c3d4]">
                    <span className="h-px w-12 bg-[#d2a96b]" />
                    פיתוח ואוטומציה לעסקים
                  </p>
                </Reveal>

                <Reveal immediate delay={80}>
                  <h1 className="max-w-[900px] text-[clamp(3.6rem,7.5vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                    פחות לנהל
                    <span className="block text-[#d2a96b]">משימות.</span>
                    יותר לנהל
                    <span className="block">עסק.</span>
                  </h1>
                </Reveal>

                <Reveal immediate delay={160}>
                  <div className="mt-10 grid max-w-3xl gap-8 border-t border-white/15 pt-8 sm:grid-cols-[1fr_auto]">
                    <p className="max-w-xl text-base leading-8 text-[#aeb8c8] sm:text-lg">
                      אני מתכנן ובונה מערכות שמורידות עבודה ידנית מהיום־יום של
                      העסק — בלי להחליף את כל מה שכבר עובד ובלי להעמיס עוד כלי.
                    </p>

                    <div className="flex items-start sm:justify-end">
                      <CtaButton href="#contact" variant="primary" size="lg">
                        בואו נבדוק מה אפשר לייעל
                        <ArrowUpLeft className="size-4" />
                      </CtaButton>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal immediate delay={220}>
                <aside className="border-t border-white/15 pt-6 xl:border-t-0 xl:border-r xl:pr-8 xl:pt-0">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#718098]">
                    תחומי פתרון
                  </p>

                  <div className="space-y-5">
                    {highlights.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border-b border-white/10 pb-5"
                      >
                        <span className="mt-0.5 font-mono text-xs text-[#d2a96b]">
                          0{index + 1}
                        </span>

                        <p className="text-sm font-medium leading-6 text-[#d7deea]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </aside>
              </Reveal>
            </div>

            <Reveal immediate delay={300}>
              <div className="mt-20 grid gap-8 border-t border-white/15 pt-7 md:grid-cols-[1fr_auto] md:items-end">
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  <TrustItem text="שיחה ראשונית ללא התחייבות" />
                  <TrustItem text="פתרון מותאם לתהליך הקיים" />
                  <TrustItem text="ליווי אישי משלב האפיון" />
                </div>

                <p className="max-w-[260px] text-sm leading-6 text-[#78869b] md:text-left">
                  לא מתחילים מטכנולוגיה.
                  <br />
                  מתחילים ממה שגוזל לכם זמן.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 size-[520px] rounded-full bg-[#d2a96b]/[0.06] blur-[100px]"
      />
    </section>
  )
}

function HeroRail() {
  return (
    <aside className="hidden border-x border-white/10 lg:flex lg:flex-col lg:justify-between lg:py-32">
      <div className="flex justify-center">
        <span className="font-mono text-xs tracking-[0.25em] text-[#66758c]">
          TOMER / 01
        </span>
      </div>

      <div className="flex justify-center">
        <p className="[writing-mode:vertical-rl] rotate-180 text-xs tracking-[0.18em] text-[#66758c]">
          AUTOMATION · SYSTEMS · DEVELOPMENT
        </p>
      </div>
    </aside>
  )
}

function TrustItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#99a6b8]">
      <Check className="size-3.5 text-[#d2a96b]" />
      {text}
    </span>
  )
}