import { ArrowDownLeft, Check } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { WORKFLOW_RESULTS, WORKFLOW_STEPS } from '@/lib/content'

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#d8d4ca] bg-[#f3f0e9] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <WorkflowHeader />

        <div className="mt-16 grid border-t border-[#c8c2b7] lg:grid-cols-[1.25fr_0.75fr]">
          <WorkflowProcess />

          <WorkflowOutcome />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-[#172338]/[0.025] sm:text-[22rem] lg:text-[30rem]"
      >
        04
      </span>
    </section>
  )
}

function WorkflowHeader() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9a7444]" />

            <p className="text-sm font-semibold text-[#9a7444]">
              דוגמה מהשטח
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#716b62]">
            תהליך אחד שחוזר על עצמו יכול לעבור מהודעה ידנית למערכת שמטפלת,
            מתעדת ומעדכנת באופן אוטומטי.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#172338] sm:text-5xl lg:text-6xl">
          כך פנייה אחת הופכת
          <span className="block text-[#9a7444]">
            לתהליך שעובד לבד.
          </span>
        </h2>
      </Reveal>
    </div>
  )
}

function WorkflowProcess() {
  return (
    <Reveal className="border-b border-[#c8c2b7] lg:border-b-0 lg:border-l">
      <div className="px-0 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7444]">
              תהליך אוטומטי
            </p>

            <p className="mt-2 text-sm text-[#7a746b]">
              מהרגע שהלקוח פונה ועד שהמידע נשמר
            </p>
          </div>

          <span className="font-mono text-xs tracking-[0.16em] text-[#9a9286]">
            FLOW / 01
          </span>
        </div>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute top-5 right-[19px] h-[calc(100%-40px)] w-px bg-[#c8c2b7]"
          />

          {WORKFLOW_STEPS.map((step, index) => {
            const isLast = index === WORKFLOW_STEPS.length - 1

            return (
              <li
                key={step}
                className="group relative grid grid-cols-[40px_1fr] gap-6 border-b border-[#d5d0c7] py-7 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="relative z-10">
                  <span
                    className={[
                      'flex size-10 items-center justify-center border font-mono text-xs transition-colors duration-300',
                      isLast
                        ? 'border-[#172338] bg-[#172338] text-white'
                        : 'border-[#b8b1a5] bg-[#f3f0e9] text-[#9a7444] group-hover:border-[#172338]',
                    ].join(' ')}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="max-w-xl text-lg font-medium leading-7 tracking-[-0.015em] text-[#172338] sm:text-xl">
                      {step}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#7a746b]">
                      {getStepMeta(index)}
                    </p>
                  </div>

                  {!isLast && (
                    <ArrowDownLeft
                      className="mt-1 hidden size-4 text-[#a59d91] transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1 sm:block"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Reveal>
  )
}

function WorkflowOutcome() {
  return (
    <Reveal delay={120}>
      <aside className="relative h-full bg-[#172338] px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d2a96b]">
                התוצאה
              </p>

              <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                פחות טיפול ידני.
                <span className="block text-[#d2a96b]">
                  פחות דברים שמתפספסים.
                </span>
              </h3>
            </div>

            <span className="font-mono text-xs text-white/30">
              04
            </span>
          </div>

          <div className="my-10 h-px bg-white/15" />

          <ul className="space-y-0">
            {WORKFLOW_RESULTS.map((result, index) => (
              <li
                key={result}
                className="grid grid-cols-[32px_1fr] gap-4 border-b border-white/10 py-5 first:pt-0 last:border-b-0"
              >
                <span className="flex size-7 items-center justify-center border border-[#d2a96b]/50 text-[#d2a96b]">
                  <Check className="size-3.5" strokeWidth={2} />
                </span>

                <p className="text-sm leading-7 text-[#c2cad6] sm:text-base">
                  {result}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-12">
            <div className="border-t border-white/15 pt-6">
              <p className="max-w-sm text-xs leading-6 text-white/40">
                התוצאות משתנות בהתאם לאופי העסק, להיקף הפעילות ולתהליך
                שנבחר להפוך לאוטומטי.
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-[#d2a96b]/[0.05] blur-3xl"
        />
      </aside>
    </Reveal>
  )
}

function getStepMeta(index: number) {
  const descriptions = [
    'הפנייה נכנסת דרך וואטסאפ, טופס באתר או ערוץ אחר.',
    'המערכת מבינה מה הלקוח צריך ומסווגת את הפנייה.',
    'נשלח ללקוח מענה ראשוני בהתאם לסוג הבקשה.',
    'המידע נכנס ל־CRM או למערכת שבה העסק כבר משתמש.',
    'בעל העסק מקבל התראה רק כשנדרש טיפול אנושי.',
  ]

  return descriptions[index] ?? 'השלב מתבצע באופן אוטומטי.'
}