import { ArrowUpLeft } from 'lucide-react'

import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#c8c2b7] bg-[#f3f0e9] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24">
          <CtaIntro />
          <CtaContent />
        </div>

        <Reveal delay={220}>
          <div className="mt-20 flex flex-col gap-6 border-t border-[#c8c2b7] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#9a7444]">
                FIRST STEP
              </p>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#716b62]">
                לא צריך להגיע עם מסמך אפיון, תקציב סגור או פתרון טכנולוגי.
                מספיק לתאר את המשימה שחוזרת על עצמה.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#9a9286]">
              <span className="size-2 bg-[#9a7444]" />
              שיחת היכרות ללא התחייבות
            </div>
          </div>
        </Reveal>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-[#172338]/[0.025] sm:text-[22rem] lg:text-[30rem]"
      >
        10
      </span>
    </section>
  )
}

function CtaIntro() {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#9a7444]" />

          <p className="text-sm font-semibold text-[#9a7444]">
            מתחילים ממשימה אחת
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-7 max-w-sm text-sm leading-7 text-[#716b62]">
          לפעמים השיפור הכי משמעותי בעסק מתחיל מתהליך קטן שאף אחד כבר לא
          שם לב כמה זמן הוא גוזל.
        </p>
      </Reveal>
    </div>
  )
}

function CtaContent() {
  return (
    <div>
      <Reveal delay={100}>
        <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#172338] sm:text-5xl lg:text-7xl">
          יש משימה בעסק
          <span className="block text-[#9a7444]">
            שאתם עושים שוב ושוב?
          </span>
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-10 grid gap-8 border-t border-[#c8c2b7] pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-2xl text-base leading-8 text-[#716b62] sm:text-lg">
            ספרו לי מה גוזל לכם זמן, מה מתפספס ומה הייתם רוצים שיקרה לבד.
            נבדוק יחד אם אפשר להפוך את התהליך לפשוט, מסודר ואוטומטי יותר.
          </p>

          <div className="sm:pb-1">
            <CtaButton
              href="#contact-form"
              variant="accent"
              size="lg"
              className="group min-w-[210px] justify-between gap-8 rounded-none px-6"
            >
              <span>קבעו שיחת היכרות</span>

              <ArrowUpLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.6}
              />
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </div>
  )
}