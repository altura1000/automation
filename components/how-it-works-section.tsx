import { ArrowLeft } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { HOW_IT_WORKS } from '@/lib/content'

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10 bg-[#101b2d] py-24 text-white sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <HowItWorksHeader />

        <div className="mt-16">
          <DesktopTimeline />
          <MobileTimeline />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-0 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[22rem] lg:text-[30rem]"
      >
        05
      </span>
    </section>
  )
}

function HowItWorksHeader() {
  return (
    <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d2a96b]" />

            <p className="text-sm font-semibold text-[#d2a96b]">
              מהרעיון למערכת עובדת
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#7f8da2]">
            תהליך קצר, ברור ומסודר — כדי שלא תמצאו את עצמכם בתוך פרויקט
            טכנולוגי שלא נגמר.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          ארבעה שלבים.
          <span className="block text-[#d2a96b]">
            בלי הפתעות בדרך.
          </span>
        </h2>
      </Reveal>
    </div>
  )
}

function DesktopTimeline() {
  return (
    <div className="relative hidden lg:block">
      <div
        aria-hidden="true"
        className="absolute top-[34px] right-0 left-0 h-px bg-white/15"
      />

      <div className="grid grid-cols-4">
        {HOW_IT_WORKS.map((step, index) => {
          const isLast = index === HOW_IT_WORKS.length - 1

          return (
            <Reveal key={step.title} delay={index * 100}>
              <article
                className={[
                  'group relative min-h-[360px] border-white/10 px-7 pt-0 pb-8',
                  !isLast ? 'border-l' : '',
                ].join(' ')}
              >
                <div className="relative z-10 flex h-[68px] items-start">
                  <span className="flex size-[68px] items-center justify-center border border-white/20 bg-[#101b2d] font-mono text-sm text-[#d2a96b] transition-colors duration-300 group-hover:border-[#d2a96b]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="mt-12">
                  <p className="font-mono text-xs tracking-[0.18em] text-white/25">
                    STEP / {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="mt-5 max-w-xs text-2xl font-medium leading-tight tracking-[-0.025em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-7 text-[#93a0b3]">
                    {step.description}
                  </p>
                </div>

                {!isLast && (
                  <ArrowLeft
                    className="absolute top-[25px] -left-3 z-20 size-5 bg-[#101b2d] px-1 text-white/30 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#d2a96b]"
                    strokeWidth={1.5}
                  />
                )}

                <span
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 h-px w-0 bg-[#d2a96b] transition-all duration-500 group-hover:w-full"
                />
              </article>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

function MobileTimeline() {
  return (
    <div className="lg:hidden">
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-5 right-[19px] h-[calc(100%-40px)] w-px bg-white/15"
        />

        {HOW_IT_WORKS.map((step, index) => (
          <Reveal key={step.title} delay={index * 90}>
            <article className="relative grid grid-cols-[40px_1fr] gap-6 border-b border-white/10 py-8 first:pt-0 last:border-b-0">
              <span className="relative z-10 flex size-10 items-center justify-center border border-white/20 bg-[#101b2d] font-mono text-xs text-[#d2a96b]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-white/25">
                  STEP / {String(index + 1).padStart(2, '0')}
                </p>

                <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#93a0b3]">
                  {step.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}