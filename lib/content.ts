import {
  MessagesSquare,
  Repeat2,
  Cable,
  Clock,
  MessageCircle,
  Send,
  FileInput,
  LayoutDashboard,
  Sparkles,
  Users,
  Building2,
  Store,
  Stethoscope,
  Briefcase,
  Inbox,
  type LucideIcon,
} from 'lucide-react'

export const BUSINESS_NAME = 'Tomer Automation'

// Placeholders — קל להחליף בהמשך
export const CONTACT = {
  email: 'hello@example.com',
  phone: '050-000-0000',
  whatsapp: '972500000000',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
}

export const NAV_LINKS = [
  { label: 'ראשי', href: '#hero' },
  { label: 'פתרונות', href: '#solutions' },
  { label: 'איך זה עובד', href: '#how-it-works' },
  { label: 'אודות', href: '#about' },
  { label: 'שאלות נפוצות', href: '#faq' },
]

export type Card = {
  title: string
  description: string
  icon: LucideIcon
}

export const PROBLEMS: Card[] = [
  {
    title: 'עומס של הודעות',
    description:
      'לקוחות שולחים הודעות בוואטסאפ, במייל ובאתר — וקשה להספיק לענות לכולם.',
    icon: Inbox,
  },
  {
    title: 'משימות שחוזרות על עצמן',
    description:
      'העתקת פרטים, שליחת תזכורות, עדכון טבלאות והזנת מידע ידנית.',
    icon: Repeat2,
  },
  {
    title: 'מערכות שלא מדברות זו עם זו',
    description:
      'מידע מפוזר בין טפסים, מיילים, CRM, יומן ומערכות נוספות.',
    icon: Cable,
  },
  {
    title: 'זמן שמתבזבז',
    description:
      'במקום להתמקד בצמיחה ובלקוחות, אתם עסוקים בעבודה תפעולית.',
    icon: Clock,
  },
]

export const SOLUTIONS: Card[] = [
  {
    title: 'מענה אוטומטי ללקוחות',
    description:
      'מערכת שמבינה שאלות נפוצות, מספקת תשובות ראשוניות ומעבירה פניות מורכבות לנציג אנושי.',
    icon: MessageCircle,
  },
  {
    title: 'אוטומציה לוואטסאפ ולמייל',
    description:
      'שליחת הודעות, תזכורות, עדכונים ופולואפים באופן אוטומטי.',
    icon: Send,
  },
  {
    title: 'טפסים ותהליכי קליטת לקוחות',
    description:
      'איסוף פרטים, יצירת ליד, פתיחת משימה ועדכון הצוות ללא עבודה ידנית.',
    icon: FileInput,
  },
  {
    title: 'חיבור בין מערכות',
    description:
      'חיבור בין האתר, ה־CRM, המייל, היומן, Google Sheets ומערכות נוספות.',
    icon: Cable,
  },
  {
    title: 'דשבורדים ומערכות ניהול',
    description:
      'מערכת מותאמת לניהול לקוחות, פניות, משימות ותהליכים עסקיים.',
    icon: LayoutDashboard,
  },
  {
    title: 'פתרונות AI מותאמים',
    description:
      'שימוש ב־AI לסיכום מידע, סיווג פניות, יצירת תוכן, ניתוח נתונים ואוטומציה חכמה.',
    icon: Sparkles,
  },
]

export const WORKFLOW_STEPS = [
  'לקוח שולח הודעה',
  'המערכת מזהה את סוג הפנייה',
  'הלקוח מקבל תשובה ראשונית',
  'הפרטים נשמרים במערכת',
  'בעל העסק מקבל התראה רק כשצריך התערבות',
]

export const WORKFLOW_RESULTS = [
  'זמן תגובה: ממספר שעות למספר שניות',
  'פחות עבודה ידנית',
  'פחות פניות שמתפספסות',
  'חוויית שירות טובה יותר',
]

export type Step = {
  title: string
  description: string
}

export const HOW_IT_WORKS: Step[] = [
  {
    title: 'מבינים את הבעיה',
    description:
      'בשיחת היכרות קצרה נבין מה גוזל לכם זמן ואיפה נוצרים עומסים.',
  },
  {
    title: 'מתכננים פתרון',
    description:
      'נבנה תהליך ברור שמתאים לצורת העבודה הקיימת בעסק.',
  },
  {
    title: 'בונים ומחברים',
    description:
      'נפתח את המערכת ונחבר אותה לכלים שבהם אתם כבר משתמשים.',
  },
  {
    title: 'בודקים ומשפרים',
    description:
      'נוודא שהכול עובד בצורה יציבה ונבצע שיפורים לפי הצורך.',
  },
]

export const BENEFITS = [
  'יותר זמן לעבודה החשובה באמת',
  'מענה מהיר ועקבי יותר ללקוחות',
  'פחות טעויות אנוש ופחות מידע שמתפספס',
  'מערכת שיכולה לגדול יחד עם העסק',
]

export const AUDIENCE: Card[] = [
  { title: 'נותני שירות', description: 'שמנהלים לקוחות ותורים באופן שוטף.', icon: Briefcase },
  { title: 'משרדים מקצועיים', description: 'עורכי דין, רואי חשבון ויועצים.', icon: Building2 },
  { title: 'סוכנויות', description: 'שמנהלות לידים ופרויקטים במקביל.', icon: Users },
  { title: 'חנויות ועסקי איקומרס', description: 'עם הזמנות ופניות שירות רבות.', icon: Store },
  { title: 'מרפאות וקליניקות', description: 'שמנהלות תורים ותקשורת עם מטופלים.', icon: Stethoscope },
  { title: 'עסקים שמקבלים הרבה פניות', description: 'ורוצים לענות מהר ובעקביות.', icon: Inbox },
]

export const FAQ = [
  {
    question: 'האם אני צריך להבין בטכנולוגיה?',
    answer:
      'לא. התפקיד שלי הוא להבין את הצורך העסקי ולהפוך אותו לפתרון פשוט שקל להשתמש בו.',
  },
  {
    question: 'האם כל פתרון נבנה מאפס?',
    answer:
      'לא בהכרח. לעיתים ניתן לחבר כלים קיימים, ולעיתים נכון יותר לבנות מערכת מותאמת. הבחירה תלויה בצורך, בתקציב ובמורכבות.',
  },
  {
    question: 'כמה זמן לוקח לבנות אוטומציה?',
    answer:
      'אוטומציה פשוטה יכולה להיות מוכנה במהירות יחסית, בעוד שמערכת מורכבת דורשת תכנון ופיתוח ארוכים יותר. לאחר שיחת ההיכרות ניתן להעריך את היקף העבודה.',
  },
  {
    question: 'האם אפשר להתחיל בפתרון קטן?',
    answer:
      'כן. ברוב המקרים עדיף להתחיל מתהליך אחד שמבזבז זמן, לבדוק את התוצאה ורק לאחר מכן להרחיב.',
  },
  {
    question: 'באילו מערכות אפשר להשתמש?',
    answer:
      'ניתן לעבוד עם אתרים, טפסים, מערכות CRM, מייל, יומנים, Google Sheets, WhatsApp וכלים נוספים בהתאם לאפשרויות החיבור שלהם.',
  },
  {
    question: 'מה קורה אחרי שהמערכת עולה לאוויר?',
    answer:
      'לאחר ההשקה ניתן לבצע בדיקות, תיקונים, שיפורים ותחזוקה בהתאם לסוג הפרויקט.',
  },
]

export const SKILL_BADGES = ['React & TypeScript', 'Node.js & APIs', 'AI & Automation']
