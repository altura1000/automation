import { WhatsappIcon } from '@/components/brand-icons'
import { CONTACT } from '@/lib/content'

export function WhatsappSticky() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform active:translate-y-px md:hidden"
      aria-label="דברו איתי בוואטסאפ"
    >
      <WhatsappIcon className="size-5" />
      דברו איתי בוואטסאפ
    </a>
  )
}
