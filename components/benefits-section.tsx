import { Reveal } from '@/components/reveal'
import { BENEFITS } from '@/lib/content'

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden border-b border-[#d8d4ca] bg-[#f3f0e9] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <BenefitsHeader />

        <div className="mt-16 border-t border-[#c8c2b7]">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 90}>
              <article className="group grid gap-6 border-b border-[#c8c2b7] py-8 sm:grid-cols-[90px_1fr_auto] sm:items-center sm:px-4 lg:py-10">
                <span className="font-mono text-xs tracking-[0.18em] text-[#9a7444]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] text-[#172338] transition-transform duration-300 group-hover:-translate-x-1 sm:text-3xl lg:text-4xl">
                  {benefit}
                </p>

                <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-[#9a9286] sm:block">
                  VALUE
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="mt-12 grid gap-8 border-t border-[#c8c2b7] pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-sm leading-7 text-[#716b62] sm:text-base">
              הערך האמיתי של אוטומציה לא נמצא רק במה שהמערכת עושה,
              אלא בכל מה שאתם והצוות כבר לא צריכים לעשות ידנית.
            </p>

            <p className="max-w-xs text-sm leading-7 text-[#9a7444] lg:text-left">
              פחות עומס.
              <br />
              פחות טעויות.
              <br />
              יותר שליטה.
            </p>
          </div>
        </Reveal>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-[#172338]/[0.025] sm:text-[22rem] lg:text-[30rem]"
      >
        06
      </span>
    </section>
  )
}

function BenefitsHeader() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9a7444]" />

            <p className="text-sm font-semibold text-[#9a7444]">
              הערך לעסק
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#716b62]">
            מערכת טובה לא רק חוסכת זמן. היא יוצרת תהליך מסודר יותר,
            שירות עקבי יותר ופחות תלות בעבודה ידנית.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#172338] sm:text-5xl lg:text-6xl">
          מה באמת משתנה
          <span className="block text-[#9a7444]">
            אחרי שהעסק מתייעל.
          </span>
        </h2>
      </Reveal>
    </div>
  )
}