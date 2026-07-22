import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { SolutionsSection } from '@/components/solutions-section'
import { WorkflowSection } from '@/components/workflow-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { BenefitsSection } from '@/components/benefits-section'
import { AboutSection } from '@/components/about-section'
import { AudienceSection } from '@/components/audience-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappSticky } from '@/components/whatsapp-sticky'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <WorkflowSection />
        <HowItWorksSection />
        <BenefitsSection />
        <AboutSection />
        <AudienceSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsappSticky />
    </>
  )
}
