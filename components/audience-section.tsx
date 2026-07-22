import { ArrowUpLeft, Check } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { AUDIENCE } from '@/lib/content'

export function AudienceSection() {
  return (
    <section
      id="audience"
      className="relative overflow-hidden border-b border-[#d8d4ca] bg-[#f3f0e9] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <AudienceHeader />

        <div className="mt-16 grid border-t border-[#c8c2b7] lg:grid-cols-[1.15fr_0.85fr]">
          <AudienceList />
          <AudienceFit />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-[#172338]/[0.025] sm:text-[22rem] lg:text-[30rem]"
      >
        08
      </span>
    </section>
  )
}

function AudienceHeader() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9a7444]" />

            <p className="text-sm font-semibold text-[#9a7444]">
              קהל היעד
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#716b62]">
            השירות מתאים לעסקים שכבר עובדים, כבר מקבלים פניות וכבר מרגישים
            שהתהליך הידני מתחיל לעכב אותם.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#172338] sm:text-5xl lg:text-6xl">
          לא לכל עסק צריך אוטומציה.
          <span className="block text-[#9a7444]">
            אבל יש עסקים שכבר חייבים אותה.
          </span>
        </h2>
      </Reveal>
    </div>
  )
}

function AudienceList() {
  return (
    <div className="border-b border-[#c8c2b7] lg:border-b-0 lg:border-l">
      {AUDIENCE.map((item, index) => {
        const Icon = item.icon

        return (
          <Reveal key={item.title} delay={index * 80}>
            <article className="group grid gap-5 border-b border-[#c8c2b7] px-0 py-8 last:border-b-0 sm:grid-cols-[72px_1fr_auto] sm:px-6 lg:py-10">
              <div className="flex items-center gap-3 sm:block">
                <span className="font-mono text-xs tracking-[0.16em] text-[#9a7444]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="mt-4 hidden size-9 items-center justify-center border border-[#b9b2a6] text-[#172338] sm:flex">
                  <Icon className="size-4" strokeWidth={1.6} />
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.025em] text-[#172338] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716b62] sm:text-base">
                  {item.description}
                </p>
              </div>

              <ArrowUpLeft
                className="hidden size-5 text-[#9a9286] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#172338] sm:block"
                strokeWidth={1.5}
              />
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}

function AudienceFit() {
  const signals = [
    'יש משימה שחוזרת על עצמה כמעט כל יום',
    'מידע עובר ידנית בין כמה מערכות',
    'פניות של לקוחות מתפספסות או מתעכבות',
    'הצוות מבזבז זמן על העתקה, מעקב ועדכון',
  ]

  return (
    <Reveal delay={160}>
      <aside className="h-full bg-[#172338] px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="flex h-full flex-col">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-[#d2a96b]">
              FIT CHECK
            </p>

            <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              סימנים שהעסק שלכם
              <span className="block text-[#d2a96b]">
                כבר בשל לאוטומציה.
              </span>
            </h3>
          </div>

          <div className="mt-10 border-t border-white/15">
            {signals.map((signal) => (
              <div
                key={signal}
                className="grid grid-cols-[28px_1fr] gap-4 border-b border-white/10 py-5"
              >
                <span className="flex size-7 items-center justify-center border border-[#d2a96b]/50 text-[#d2a96b]">
                  <Check className="size-3.5" strokeWidth={2} />
                </span>

                <p className="text-sm leading-7 text-[#c2cad6] sm:text-base">
                  {signal}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-12">
            <p className="border-t border-white/15 pt-6 text-sm leading-7 text-white/45">
              בדרך כלל לא צריך להחליף את כל המערכות. מספיק לזהות תהליך אחד
              בעייתי ולבנות סביבו פתרון מדויק.
            </p>
          </div>
        </div>
      </aside>
    </Reveal>
  )
}