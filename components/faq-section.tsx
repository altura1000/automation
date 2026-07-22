'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { FAQ } from '@/lib/content'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden bg-[#101b2d] py-24 text-white sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <FaqHeader />

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <FaqIntro />

          <Reveal>
            <ul className="border-t border-white/15">
              {FAQ.map((item, index) => {
                const isOpen = open === index
                const answerId = `faq-answer-${index}`
                const triggerId = `faq-trigger-${index}`

                return (
                  <li
                    key={item.question}
                    className="border-b border-white/15"
                  >
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className="group grid w-full grid-cols-[44px_1fr_32px] items-start gap-4 py-7 text-right sm:grid-cols-[64px_1fr_40px] sm:gap-6 sm:py-9"
                      >
                        <span className="pt-1 font-mono text-[11px] tracking-[0.16em] text-[#d2a96b]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span
                          className={cn(
                            'max-w-3xl text-xl font-medium leading-tight tracking-[-0.025em] transition-colors duration-300 sm:text-2xl lg:text-3xl',
                            isOpen
                              ? 'text-[#d2a96b]'
                              : 'text-white group-hover:text-[#d2a96b]',
                          )}
                        >
                          {item.question}
                        </span>

                        <span className="flex size-8 items-center justify-center border border-white/20 sm:size-10">
                          <Plus
                            className={cn(
                              'size-4 text-white/45 transition-all duration-300 sm:size-5',
                              isOpen && 'rotate-45 text-[#d2a96b]',
                            )}
                            strokeWidth={1.5}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={cn(
                        'grid transition-[grid-template-rows,opacity] duration-400 ease-out',
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-[44px_1fr_32px] gap-4 pb-8 sm:grid-cols-[64px_1fr_40px] sm:gap-6 sm:pb-10">
                          <span />

                          <p className="max-w-2xl text-sm leading-7 text-[#9aa7ba] sm:text-base sm:leading-8">
                            {item.answer}
                          </p>

                          <span />
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[22rem] lg:text-[30rem]"
      >
        09
      </span>
    </section>
  )
}

function FaqHeader() {
  return (
    <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d2a96b]" />

            <p className="text-sm font-semibold text-[#d2a96b]">
              שאלות נפוצות
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#7f8da2]">
            כמה תשובות ברורות לפני שמתחילים לדבר על אפיון, חיבורים
            וטכנולוגיה.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          דברים שכדאי לדעת
          <span className="block text-[#d2a96b]">
            לפני שמתחילים.
          </span>
        </h2>
      </Reveal>
    </div>
  )
}

function FaqIntro() {
  return (
    <div className="lg:sticky lg:top-32 lg:self-start">
      <Reveal>
        <p className="max-w-md text-base leading-8 text-[#a7b1c0] sm:text-lg">
          כל פרויקט מתחיל בהבנת התהליך הקיים, המטרה העסקית והמקום שבו
          העבודה הידנית מתחילה ליצור עומס.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="max-w-sm text-sm leading-7 text-[#6f7d91]">
            לא צריך להגיע עם מסמך אפיון מלא. מספיק לדעת מה חוזר על עצמו,
            מה מתפספס ומה הייתם רוצים שיקרה באופן אוטומטי.
          </p>
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-12 flex items-end gap-4">
          <span className="font-mono text-5xl font-light tracking-[-0.08em] text-white">
            {String(FAQ.length).padStart(2, '0')}
          </span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d2a96b]">
              שאלות
            </p>

            <p className="mt-1 text-sm text-[#77859a]">
              לפני השיחה הראשונה
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}