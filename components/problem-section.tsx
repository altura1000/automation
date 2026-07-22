import { ArrowUpLeft } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { PROBLEMS } from '@/lib/content'

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden border-b border-[#d8d4ca] bg-[#f3f0e9] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <ProblemIntro />

          <div className="border-t border-[#c8c2b7]">
            {PROBLEMS.map((problem, index) => {
              const Icon = problem.icon

              return (
                <Reveal key={problem.title} delay={index * 80}>
                  <article className="group grid gap-5 border-b border-[#c8c2b7] py-7 transition-colors duration-300 hover:bg-[#ebe7de] sm:grid-cols-[70px_1fr_auto] sm:items-start sm:px-4 lg:py-9">
                    <div className="flex items-center gap-3 sm:block">
                      <span className="font-mono text-xs tracking-[0.16em] text-[#9a7444]">
                        0{index + 1}
                      </span>

                      <span className="mt-3 hidden size-8 items-center justify-center border border-[#b9b2a6] text-[#24344f] sm:flex">
                        <Icon className="size-4" strokeWidth={1.7} />
                      </span>
                    </div>

                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#172338] transition-transform duration-300 group-hover:-translate-x-1 sm:text-2xl">
                        {problem.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#667085] sm:text-base">
                        {problem.description}
                      </p>
                    </div>

                    <div className="hidden pt-1 sm:block">
                      <ArrowUpLeft
                        className="size-5 text-[#9a9286] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#172338]"
                        strokeWidth={1.5}
                      />
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      <BackgroundNumber />
    </section>
  )
}

function ProblemIntro() {
  return (
    <div className="relative z-10 lg:sticky lg:top-32 lg:self-start">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#9a7444]" />

          <p className="text-sm font-semibold text-[#9a7444]">
            איפה הזמן נעלם
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#172338] sm:text-5xl lg:text-6xl">
          העסק שלכם לא אמור לעבוד
          <span className="block text-[#9a7444]">בצורה ידנית.</span>
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-7 max-w-md text-base leading-8 text-[#667085] sm:text-lg">
          עבודה ידנית אולי מרגישה קטנה בכל פעם, אבל לאורך שבוע היא הופכת
          לשעות של טיפול, מעקב, העתקה ותיקון טעויות.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 border-t border-[#c8c2b7] pt-6">
          <p className="max-w-sm text-sm leading-7 text-[#7a746b]">
            בדרך כלל הבעיה אינה שאין מספיק עובדים. הבעיה היא שתהליכים
            פשוטים עדיין דורשים התערבות אנושית בכל שלב.
          </p>
        </div>
      </Reveal>
    </div>
  )
}

function BackgroundNumber() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-[#172338]/[0.025] sm:text-[22rem] lg:text-[30rem]"
    >
      02
    </div>
  )
}