import { ArrowUpLeft } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SOLUTIONS } from '@/lib/content'

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-20 overflow-hidden bg-[#101b2d] py-24 text-white sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <SolutionsIntro />

          <div className="grid border-t border-white/15 md:grid-cols-2">
            {SOLUTIONS.map((solution, index) => {
              const Icon = solution.icon
              const isLeftColumn = index % 2 === 0

              return (
                <Reveal
                  key={solution.title}
                  delay={(index % 3) * 80}
                >
                  <article
                    className={[
                      'group relative min-h-[280px] border-b border-white/15 px-0 py-8 transition-colors duration-300',
                      'hover:bg-white/[0.025] sm:px-6 sm:py-10',
                      isLeftColumn ? 'md:border-l' : '',
                    ].join(' ')}
                  >
                    <div className="flex h-full flex-col justify-between gap-12">
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-xs tracking-[0.18em] text-[#d2a96b]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <Icon
                          className="size-5 text-white/30 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#d2a96b]"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>
                        <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                          {solution.title}
                        </h3>

                        <p className="mt-5 max-w-md text-sm leading-7 text-[#98a6ba] sm:text-base">
                          {solution.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-xs font-medium text-white/35">
                          פתרון מותאם אישית
                        </span>

                        <ArrowUpLeft
                          className="size-4 text-white/30 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 right-0 w-px origin-top scale-y-0 bg-[#d2a96b] transition-transform duration-500 group-hover:scale-y-100"
                    />
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      <BackgroundDecoration />
    </section>
  )
}

function SolutionsIntro() {
  return (
    <div className="relative z-10 lg:sticky lg:top-32 lg:self-start">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#d2a96b]" />

          <p className="text-sm font-semibold text-[#d2a96b]">
            מה אפשר לבנות
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          לא עוד מערכת
          <span className="block text-[#d2a96b]">
            שלא מתאימה לעסק.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-7 max-w-md text-base leading-8 text-[#9ba8ba] sm:text-lg">
          הפתרון מתחיל בתהליך הקיים שלכם — ורק אחר כך בוחרים את הכלים,
          החיבורים והטכנולוגיה שיחסכו באמת עבודה.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 max-w-sm border-t border-white/15 pt-6">
          <p className="text-sm leading-7 text-[#6f7d91]">
            לפעמים הפתרון הוא אוטומציה קטנה. לפעמים זו מערכת שלמה.
            המטרה היא לא להוסיף מורכבות — אלא להסיר אותה.
          </p>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-12 flex items-center gap-4">
          <span className="font-mono text-5xl font-light tracking-[-0.08em] text-white">
            06
          </span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d2a96b]">
              תחומי פתרון
            </p>
            <p className="mt-1 text-sm text-[#77859a]">
              מותאמים לתהליך העסקי
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

function BackgroundDecoration() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[520px] rounded-full bg-[#d2a96b]/[0.045] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-0 select-none font-mono text-[14rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.018] sm:text-[22rem] lg:text-[30rem]"
      >
        03
      </div>
    </>
  )
}