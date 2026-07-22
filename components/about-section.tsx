import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import { SKILL_BADGES } from '@/lib/content'


import tomerImage from '@/public/tomer.jpeg'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#101b2d] py-24 text-white sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <AboutPortrait />
          <AboutContent />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-6 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[22rem] lg:text-[30rem]"
      >
        07
      </span>
    </section>
  )
}

function AboutPortrait() {
  return (
    <Reveal>
      <div className="relative">
        <div className="grid grid-cols-[1fr_42px] gap-4 sm:grid-cols-[1fr_56px]">
          <div className="relative overflow-hidden bg-[#172338]">
            <Image
              src={tomerImage}
              alt="תומר, מפתח Full-Stack ופתרונות אוטומציה"
              width={900}
              height={1100}
              className="aspect-[4/5] h-full w-full object-cover grayscale-[20%]"
              priority
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101b2d]/40 via-transparent to-transparent"
            />

            <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between border-t border-white/20 pt-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-white/45">
                  AUTOMATION STUDIO
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  תל אביב, ישראל
                </p>
              </div>

              <span className="font-mono text-xs text-[#d2a96b]">
                2026
              </span>
            </div>
          </div>

          <div className="flex items-end justify-center border-r border-white/15 pb-2">
            <p className="[writing-mode:vertical-rl] rotate-180 text-xs font-medium tracking-[0.22em] text-[#d2a96b]">
              TOMER / FULL-STACK / AUTOMATION
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs leading-5 text-white/35">
            מערכות שנבנות סביב תהליך אמיתי,
            <br />
            לא סביב תבנית מוכנה.
          </p>

          <span className="font-mono text-xs tracking-[0.14em] text-white/25">
            PROFILE / 01
          </span>
        </div>
      </div>
    </Reveal>
  )
}

function AboutContent() {
  return (
    <div className="lg:pt-4">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#d2a96b]" />

          <p className="text-sm font-semibold text-[#d2a96b]">
            מי עומד מאחורי התהליך
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          היי, אני תומר.
          <span className="block text-[#d2a96b]">
            אני בונה מערכות שעובדות בשביל העסק.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-base leading-8 text-[#a7b1c0] sm:text-lg">
          אני מפתח Full-Stack שמתמחה בבניית מערכות ופתרונות אוטומציה
          לעסקים. המטרה שלי היא להבין איך העסק עובד, לזהות איפה מתבזבז
          זמן ולבנות פתרון פשוט, ברור ומעשי.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#7f8da2] sm:text-lg">
          במקום להתחיל מטכנולוגיה או ממערכת מוכנה, אני מתחיל מהבעיה
          העסקית. רק לאחר שהתהליך ברור, בוחרים את הכלים והחיבורים
          שמתאימים אליו באמת.
        </p>
      </Reveal>

      <Reveal delay={280}>
        <div className="mt-12 border-t border-white/15">
          {SKILL_BADGES.map((badge, index) => (
            <div
              key={badge}
              className="group grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-white/10 py-5"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-[#d2a96b]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className="text-base font-medium text-white sm:text-lg">
                {badge}
              </p>

              <span className="h-px w-8 bg-white/15 transition-all duration-300 group-hover:w-12 group-hover:bg-[#d2a96b]" />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={360}>
        <div className="mt-10 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
              APPROACH
            </p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-[#8d99aa]">
              להבין את הבעיה לפני שכותבים קוד.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
              PRINCIPLE
            </p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-[#8d99aa]">
              פחות מורכבות, יותר תוצאה עסקית.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}