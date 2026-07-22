'use client'

import { useState, type FormEvent } from 'react'
import {
  ArrowUpLeft,
  Check,
  Mail,
  Phone,
  RotateCcw,
  Send,
  Video,
} from 'lucide-react'

import { WhatsappIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/content'
import { cn } from '@/lib/utils'

type FormValues = {
  name: string
  business: string
  phone: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type Field = {
  name: keyof FormValues
  label: string
  type: string
  full?: boolean
  textarea?: boolean
  placeholder?: string
  autoComplete?: string
}

const EMPTY: FormValues = {
  name: '',
  business: '',
  phone: '',
  email: '',
  message: '',
}

const fields: Field[] = [
  {
    name: 'name',
    label: 'שם מלא',
    type: 'text',
    autoComplete: 'name',
  },
  {
    name: 'business',
    label: 'שם העסק',
    type: 'text',
    autoComplete: 'organization',
  },
  {
    name: 'phone',
    label: 'טלפון',
    type: 'tel',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    label: 'כתובת אימייל',
    type: 'email',
    autoComplete: 'email',
  },
  {
    name: 'message',
    label: 'מה הייתם רוצים להפוך לאוטומטי?',
    type: 'text',
    full: true,
    textarea: true,
    placeholder:
      'לדוגמה: אנחנו מקבלים עשרות פניות ביום ומעדכנים כל לקוח באופן ידני…',
  },
]

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(formValues: FormValues) {
    const next: FormErrors = {}

    if (!formValues.name.trim()) {
      next.name = 'נא למלא שם מלא'
    }

    if (!formValues.phone.trim()) {
      next.phone = 'נא למלא מספר טלפון'
    } else if (!/^[0-9+\-\s()]{7,}$/.test(formValues.phone.trim())) {
      next.phone = 'מספר הטלפון אינו תקין'
    }

    if (!formValues.email.trim()) {
      next.email = 'נא למלא כתובת אימייל'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())
    ) {
      next.email = 'כתובת האימייל אינה תקינה'
    }

    if (!formValues.message.trim()) {
      next.message = 'נא לכתוב מה תרצו להפוך לאוטומטי'
    }

    return next
  }

  function updateField(name: keyof FormValues, value: string) {
    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    // כרגע זו הדמיה בלבד.
    // כאן ניתן לחבר Server Action, API Route, Formspree או שירות דיוור.
    setSubmitted(true)
    setValues(EMPTY)
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#101b2d] py-24 text-white sm:py-28 lg:py-36"
    >
      <div
        id="contact-form"
        className="scroll-mt-24"
      />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <ContactHeader />

        <div className="mt-16 grid border-t border-white/15 lg:grid-cols-[0.72fr_1.28fr]">
          <ContactDetails />

          <Reveal delay={120}>
            <div className="border-t border-white/15 py-10 lg:border-t-0 lg:border-r lg:py-14 lg:pr-12">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <ContactForm
                  values={values}
                  errors={errors}
                  onChange={updateField}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </Reveal>
        </div>

        <ContactFooter />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-8 select-none font-mono text-[15rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[22rem] lg:text-[30rem]"
      >
        11
      </span>
    </section>
  )
}

function ContactHeader() {
  return (
    <div className="grid gap-10 pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d2a96b]" />

            <p className="text-sm font-semibold text-[#d2a96b]">
              יצירת קשר
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-sm text-sm leading-7 text-[#7f8da2]">
            לא צריך לדעת איזו מערכת צריך לבנות. מתחילים מהמשימה שחוזרת על
            עצמה ומהתוצאה שהייתם רוצים להשיג.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
          בואו נבין מה
          <span className="block text-[#d2a96b]">
            גוזל לכם זמן.
          </span>
        </h2>
      </Reveal>
    </div>
  )
}

function ContactDetails() {
  const details = [
    {
      icon: Mail,
      label: 'אימייל',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Phone,
      label: 'טלפון',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: WhatsappIcon,
      label: 'וואטסאפ',
      value: 'שליחת הודעה ישירה',
      href: `https://wa.me/${CONTACT.whatsapp}`,
      external: true,
    },
    {
      icon: Video,
      label: 'שיחת וידאו',
      value: 'בתיאום מראש',
      href: '#contact-form',
    },
  ]

  return (
    <Reveal>
      <aside className="py-10 lg:py-14 lg:pl-12">
        <p className="font-mono text-xs tracking-[0.18em] text-[#d2a96b]">
          DIRECT CONTACT
        </p>

        <h3 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
          מעדיפים לדבר ישירות?
        </h3>

        <p className="mt-5 max-w-md text-sm leading-7 text-[#8895a8]">
          אפשר לפנות באימייל, בטלפון או בוואטסאפ ולתאר בקצרה את התהליך
          שתרצו לשפר.
        </p>

        <div className="mt-10 border-t border-white/15">
          {details.map((detail) => {
            const Icon = detail.icon

            return (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.external ? '_blank' : undefined}
                rel={detail.external ? 'noopener noreferrer' : undefined}
                className="group grid grid-cols-[34px_1fr_auto] items-center gap-4 border-b border-white/10 py-5"
              >
                <span className="flex size-8 items-center justify-center text-[#d2a96b]">
                  <Icon className="size-4" />
                </span>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.16em] text-white/30">
                    {detail.label}
                  </p>

                  <p className="mt-1 text-sm text-[#c5cdd8]">
                    {detail.value}
                  </p>
                </div>

                <ArrowUpLeft
                  className="size-4 text-white/25 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d2a96b]"
                  strokeWidth={1.5}
                />
              </a>
            )
          })}
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex items-center gap-3 text-sm text-[#8d99aa]">
            <span className="size-2 bg-[#d2a96b]" />
            בדרך כלל חוזר בתוך יום עסקים אחד
          </div>
        </div>
      </aside>
    </Reveal>
  )
}

type ContactFormProps = {
  values: FormValues
  errors: FormErrors
  onChange: (name: keyof FormValues, value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function ContactForm({
  values,
  errors,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-[#d2a96b]">
              PROJECT INQUIRY
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
              ספרו לי קצת על העסק
            </h3>
          </div>

          <span className="hidden font-mono text-xs text-white/25 sm:block">
            01 — 05
          </span>
        </div>
      </div>

      {fields.map((field, index) => {
        const error = errors[field.name]
        const errorId = `${field.name}-error`

        return (
          <div
            key={field.name}
            className={cn(
              'group',
              field.full && 'sm:col-span-2',
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-[#d8dee7]"
              >
                {field.label}
              </label>

              <span className="font-mono text-[10px] tracking-[0.14em] text-white/20">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {field.textarea ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={5}
                value={values[field.name]}
                placeholder={field.placeholder}
                onChange={(event) =>
                  onChange(field.name, event.target.value)
                }
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={cn(
                  'mt-3 w-full resize-none border-0 border-b bg-transparent px-0 py-4 text-base leading-7 text-white outline-none transition-colors placeholder:text-white/25',
                  'border-white/20 focus:border-[#d2a96b]',
                  error && 'border-red-400 focus:border-red-400',
                )}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={values[field.name]}
                autoComplete={field.autoComplete}
                onChange={(event) =>
                  onChange(field.name, event.target.value)
                }
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={cn(
                  'mt-3 h-14 w-full border-0 border-b bg-transparent px-0 text-base text-white outline-none transition-colors placeholder:text-white/25',
                  'border-white/20 focus:border-[#d2a96b]',
                  error && 'border-red-400 focus:border-red-400',
                )}
              />
            )}

            <div className="min-h-6 pt-2">
              {error && (
                <p
                  id={errorId}
                  className="text-xs text-red-300"
                >
                  {error}
                </p>
              )}
            </div>
          </div>
        )
      })}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group flex min-h-14 w-full items-center justify-between border border-[#d2a96b] bg-[#d2a96b] px-6 text-base font-semibold text-[#101b2d] transition-colors duration-300 hover:bg-transparent hover:text-[#d2a96b] sm:w-auto sm:min-w-[240px]"
        >
          <span>שליחת הפרטים</span>

          <Send
            className="size-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.7}
          />
        </button>

        <p className="mt-4 text-xs leading-6 text-white/35">
          הפרטים ישמשו לצורך חזרה אליכם בלבד.
        </p>
      </div>
    </form>
  )
}

type SuccessStateProps = {
  onReset: () => void
}

function SuccessState({ onReset }: SuccessStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[520px] flex-col justify-center"
    >
      <span className="flex size-14 items-center justify-center border border-[#d2a96b] text-[#d2a96b]">
        <Check className="size-6" strokeWidth={1.8} />
      </span>

      <p className="mt-8 font-mono text-xs tracking-[0.18em] text-[#d2a96b]">
        MESSAGE RECEIVED
      </p>

      <h3 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
        הפרטים התקבלו.
        <span className="block text-[#d2a96b]">
          נדבר בקרוב.
        </span>
      </h3>

      <p className="mt-6 max-w-lg text-base leading-8 text-[#96a2b4]">
        תודה על הפנייה. אחזור אליכם כדי להבין את התהליך ולבדוק האם
        אוטומציה יכולה להתאים לו.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="group mt-10 flex w-fit items-center gap-3 border-b border-white/20 pb-2 text-sm text-white/60 transition-colors hover:border-[#d2a96b] hover:text-[#d2a96b]"
      >
        <RotateCcw
          className="size-4 transition-transform duration-300 group-hover:-rotate-45"
          strokeWidth={1.5}
        />
        שליחת פנייה נוספת
      </button>
    </div>
  )
}

function ContactFooter() {
  return (
    <Reveal delay={220}>
      <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xl text-sm leading-7 text-[#6f7d91]">
          שיחת ההיכרות נועדה להבין את המצב הקיים. אין צורך להתחייב לפרויקט
          או להגיע עם החלטה טכנולוגית מוכנה.
        </p>

        <p className="font-mono text-[10px] tracking-[0.18em] text-white/25">
          TOMER AUTOMATION / CONTACT
        </p>
      </div>
    </Reveal>
  )
}