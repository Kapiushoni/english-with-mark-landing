import type { Dict } from './ua';

const en: Dict = {
  lang: 'en',
  meta: {
    title: 'English with Mark — conversational English from A2 to B2',
    description:
      'An online conversational English course: 3 lessons a week, live sessions every Sunday, reviewed homework and a community. Access via a Telegram bot, pay with Stars ⭐.',
    ogImage: '/og-en.png',
  },
  nav: { audience: 'Who it’s for', inside: 'Program', pricing: 'Pricing', faq: 'FAQ', cta: 'Get access' },
  hero: {
    badge: 'Conversational English · A2 → B2',
    title1: 'Speak English',
    title2: 'with confidence',
    title3: '— no cramming.',
    lead: 'Short lessons, live sessions with Mark and real speaking practice. Payment and access via a Telegram bot, learning in a private course channel.',
    cta: 'Get access',
    price: 'from 250 ⭐ a month',
    stickers: ["How's it going?", 'I used to think…', 'Fair enough!'],
    stats: [
      { n: '3', l: 'lessons a week' },
      { n: '1', l: 'live session every Sunday' },
      { n: '24/7', l: 'access in Telegram' },
    ],
  },
  audience: {
    kicker: 'Who it’s for',
    title: 'If you understand but stay silent — this is for you',
    items: [
      { t: 'Studied for years, still don’t speak', d: 'You know the grammar, but freeze in conversation. We turn knowledge into speech.' },
      { t: 'A2–B1 level', d: 'You read simple texts and want to finally keep a conversation going.' },
      { t: 'You need it for work', d: 'Calls, meetings and emails with international colleagues — without panic.' },
      { t: 'Travel and relocation', d: 'Everyday situations, small talk and confidence abroad.' },
    ],
  },
  inside: {
    kicker: 'What’s inside',
    title: 'A rhythm you can actually keep',
    items: [
      { icon: 'play', t: '3 lessons a week', d: '10–15 minute videos in the private channel: phrases, pronunciation and one grammar focus. Watch whenever you like.' },
      { icon: 'live', t: 'Live sessions on Sundays', d: 'A speaking club with Mark: mistake reviews, Q&A, practice in pairs.' },
      { icon: 'check', t: 'Reviewed homework', d: 'Voice and written tasks. Personal feedback within 48 hours.' },
      { icon: 'chat', t: 'Community', d: 'A private student chat: challenges, practice partners and support.' },
    ],
  },
  steps: {
    kicker: 'How it works',
    title: 'From the first click to your first conversation',
    items: [
      { t: 'Open the bot', d: 'Tap “Get access” — the bot opens in Telegram.' },
      { t: 'Pick a plan and pay', d: 'Pay with Telegram Stars ⭐ right in the chat — no cards, no third-party sites.' },
      { t: 'Get access', d: 'The bot sends you a personal invite link to the private course channel.' },
      { t: 'Learn', d: 'Lessons, homework and live sessions are in the channel. The bot reminds you when it’s time to renew.' },
    ],
  },
  author: {
    kicker: 'About the author',
    name: 'Mark',
    role: 'Conversational English teacher',
    bio: [
      'Mark is a fictional character made for this demo. Let’s imagine he has taught English to adults for 8 years and lived in London for a while.',
      'His approach is simple: fewer rules on the board, more real phrases you’ll use tomorrow.',
    ],
    facts: ['8 years of teaching', 'CELTA (fictional)', '1,200+ students (demo)'],
    quote: '“Mistakes are proof that you are trying.”',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'Pay with Telegram Stars',
    note: 'Prices in Telegram Stars ⭐. Payment happens inside the bot.',
    cta: 'Choose',
    plans: [
      { name: '1 month', price: '250', per: 'Try the format', features: ['12 lessons', '4 live sessions', 'Homework review', 'Community access'] },
      { name: '3 months', price: '600', per: '200 ⭐ / mo — save 20%', features: ['36 lessons', '12 live sessions', 'Homework review', 'Community access', 'All session recordings'], popular: 'Popular' },
      { name: 'Lifetime', price: '1500', per: 'One-time payment', features: ['All lessons and new modules', 'All sessions and recordings', 'Homework review', 'Lifetime community access'] },
    ],
  },
  reviews: {
    kicker: 'Reviews',
    title: 'What students say',
    demo: 'demo',
    disclaimer: 'These reviews are fictional and shown for design demonstration only.',
    items: [
      { name: 'Olena K.', meta: 'B1 → B2, marketer', t: 'After two months I ran a client call without notes for the first time. Sundays with Mark are the best part of my week.' },
      { name: 'Dmytro S.', meta: 'A2 → B1, developer', t: 'Love that it’s all in Telegram: watch a lesson on the subway, record a voice homework — and get feedback.' },
      { name: 'Iryna T.', meta: 'B1, moving to Canada', t: 'I finally stopped translating in my head. The community chat keeps me from giving up.' },
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Frequently asked questions',
    support: 'support',
    items: [
      { q: 'What are Telegram Stars ⭐ and how do I buy them?', a: 'Telegram Stars are Telegram’s in-app currency. Buy them right in the app (Settings → My Stars) or during checkout in the bot — Telegram will offer to top up your balance.' },
      { q: 'How do I get access after paying?', a: 'Right after payment the bot sends a personal invite link to the private course channel — lessons, homework and live sessions are there. No waiting.' },
      { q: 'Can I get a refund?', a: 'Yes. If the course isn’t for you, message the bot within 7 days of payment and we’ll refund your Stars. (Demo terms.)' },
      { q: 'What if I miss a live session?', a: 'Every session recording appears in the private channel the same day. On the 3-month and Lifetime plans, recordings are unlimited.' },
      { q: 'My level is below A2. Will it work for me?', a: 'The course is designed for A2–B2. If you’re just starting out, the first lessons may feel hard — message {support} before paying and we’ll tell you whether it’s a good fit.' },
      { q: 'Can I study from my phone?', a: 'Yes, all learning happens in Telegram — on your phone, tablet or computer.' },
    ],
  },
  final: {
    title: 'Your first English conversation — this Sunday',
    lead: 'Open the bot, pick a plan and start today.',
    cta: 'Get access',
  },
  footer: {
    demo: 'Demo project. Developed by',
    rights: 'English with Mark is a fictional course.',
  },
  switchTo: { label: 'UA', href: '/', aria: 'Перейти на українську' },
};

export default en;
