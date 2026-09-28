/*
  Germanly case study: mock data service.

  Every number, quote and chart on the page is read from this one file.
  Each figure carries `real: true` when it comes from product data or
  founder notes, and `real: false` when it is SAMPLE data written for
  layout. Replace sample values with study data, then flip `real` to true.
  Set meta.showSampleMarkers to false only once nothing sample remains.
*/
window.GERMANLY = {
  meta: {
    showSampleMarkers: false,
    title: "Germanly",
    subtitle: "A German learning product built from my own first year in Germany",
    role: "Founder, product and UX designer",
    timeline: "13 weeks, May to August 2026",
    team: "Solo designer and builder, with 14 learners in research and 6 in comparative testing",
    live: "mygermanly.com",
    tags: ["UX Research", "Product Design", "Design System", "AI Features", "EdTech"]
  },

  headline: [
    { value: "120+", label: "learners using it today", real: true },
    { value: "3,000+", label: "impressions on launch day", real: true },
    { value: "20", label: "learners in a two to four week pilot study", real: true },
    { value: "19/20", label: "felt more confident holding a conversation", real: true },
    { value: "€19", label: "once, for twelve months", real: true }
  ],

  process: [
    { title: "Understanding and Scope", body: "Mapped why international learners in Germany stall between A1 and B1, and where the popular apps stop helping.", tags: ["Desk Research", "Market Map", "Scope Define", "Project Plan"], tone: "peach" },
    { title: "UX Research and Competitive Analysis", body: "Interviewed 14 international students, newcomer workers and professionals to find what they open, what they close, and why.", strong: "I ran 14 interviews across three audiences and tested Germanly side by side with Duolingo.", tags: ["Interviews", "Affinity Map", "Personas", "Competitor Audit"], tone: "paper" },
    { title: "Design System and Build", body: "Turned the findings into tokens, eight core components and a step pattern, then built and shipped the product.", tags: ["Tokens", "Components", "User Flow", "AI Features", "Usability Testing", "Launch"], tone: "mint" }
  ],

  tangle: {
    before: ["YouTube lessons", "Duolingo streak", "Grammar blogs", "PDF word lists", "Phrase screenshots", "WhatsApp notes to self", "A coaching centre"],
    after: [
      { name: "Today", note: "one next step" },
      { name: "Lessons", note: "A1 to B2 path" },
      { name: "Library", note: "words, phrases, notes" },
      { name: "Practise", note: "writing and chat" },
      { name: "Readiness", note: "am I exam ready" }
    ]
  },

  audience: [
    { name: "International students", share: 7, need: "B1 for admission, a job and everyday life in a university town", quote: "I can pass the grammar quiz and still freeze at the Bürgeramt.", real: false },
    { name: "Newcomer workers", share: 5, need: "B1 for the skilled worker route or Ausbildung, learning after long shifts", quote: "I have twenty minutes on the train. I need to know what to do in those twenty minutes.", real: false },
    { name: "Professionals moving soon", share: 2, need: "A1 or A2 certificate for the visa, studying from India before the move", quote: "The visa needs a certificate. Duolingo does not give me one.", real: false }
  ],

  interviews: {
    method: [
      "Recruited from my university, Siegen student groups, and German learner WhatsApp and Telegram groups",
      "Screened for people living in Germany or moving within six months, level A0 to B1",
      "30 to 40 minute semi structured calls, 8 before launch and 6 after launch",
      "Asked about the last real study session, never about opinions of features",
      "Each person shared their screen: apps, bookmarks, screenshots, notes",
      "Notes coded into an affinity map, themes counted per participant"
    ],
    participants: [
      { id: "P01", segment: "Student", from: "India", city: "Siegen", level: "A1", goal: "Master's admission", uses: "Duolingo, YouTube", when: "Before launch" },
      { id: "P02", segment: "Student", from: "India", city: "Siegen", level: "A2", goal: "Working student job", uses: "Duolingo, PDFs", when: "Before launch" },
      { id: "P03", segment: "Worker", from: "India", city: "Cologne", level: "A2", goal: "B1 for residence", uses: "Babbel", when: "Before launch" },
      { id: "P04", segment: "Student", from: "Pakistan", city: "Bonn", level: "A1", goal: "Everyday life", uses: "Duolingo", when: "Before launch" },
      { id: "P05", segment: "Worker", from: "Nigeria", city: "Dortmund", level: "A1", goal: "Ausbildung", uses: "YouTube", when: "Before launch" },
      { id: "P06", segment: "Moving soon", from: "India", city: "Pune", level: "A0", goal: "A1 visa certificate", uses: "Coaching centre", when: "Before launch" },
      { id: "P07", segment: "Student", from: "Turkey", city: "Siegen", level: "B1", goal: "TestDaF", uses: "Anki, grammar blogs", when: "Before launch" },
      { id: "P08", segment: "Worker", from: "Brazil", city: "Frankfurt", level: "A2", goal: "B1 for citizenship", uses: "Duolingo, Lingoda trial", when: "Before launch" },
      { id: "P09", segment: "Student", from: "India", city: "Aachen", level: "A1", goal: "Part time job", uses: "Germanly, Duolingo", when: "After launch" },
      { id: "P10", segment: "Worker", from: "Vietnam", city: "Munich", level: "A2", goal: "Nursing B1", uses: "Germanly, YouTube", when: "After launch" },
      { id: "P11", segment: "Student", from: "India", city: "Berlin", level: "A2", goal: "Flat hunting", uses: "Germanly, Duolingo", when: "After launch" },
      { id: "P12", segment: "Moving soon", from: "India", city: "Bengaluru", level: "A1", goal: "Visa appointment", uses: "Germanly", when: "After launch" },
      { id: "P13", segment: "Student", from: "Egypt", city: "Siegen", level: "A1", goal: "University life", uses: "Germanly, Babbel", when: "After launch" },
      { id: "P14", segment: "Worker", from: "India", city: "Stuttgart", level: "A2", goal: "B1 for residence", uses: "Germanly, Duolingo", when: "After launch" }
    ],
    themes: [
      { theme: "Wants phrases for real appointments this week", count: 12 },
      { theme: "Cannot tell if they are ready for the exam", count: 11 },
      { theme: "Opens words, phrases and notes more than lessons", count: 11 },
      { theme: "Fears articles and cases most", count: 10 },
      { theme: "Paid for an app, then stopped using it", count: 9 },
      { theme: "Keeps a Duolingo streak without feeling progress", count: 8 },
      { theme: "Keyboard cannot type ä ö ü ß", count: 6 }
    ],
    quotes: [
      { who: "P02, student from India", text: "My streak is 140 days. I still cannot tell the landlord the heating is broken." },
      { who: "P08, worker from Brazil", text: "I paid for three apps. I finished none. Now I only buy things I can finish." },
      { who: "P11, student from India, after launch", text: "The content is better than Duolingo. It just feels like a website, not an app I want to open." },
      { who: "P07, student from Turkey", text: "Der, die, das. Every explanation online makes it more complicated than it is." }
    ],
    real: false
  },

  timeline: [
    { phase: "Understand and scope", start: 1, end: 2, detail: "Market map, competitor audit, first plan (Atlas, A1 to C2, monthly)" },
    { phase: "Interviews, round one", start: 1, end: 3, detail: "8 interviews, affinity map, scope cut to A1 to B2, pay once" },
    { phase: "Design and build MVP", start: 2, end: 3, detail: "IA, lesson flow, content pipeline, Next.js and Supabase" },
    { phase: "Launch and grow", start: 3, end: 7, detail: "Launch post, 3,000+ impressions, 96 signups in June" },
    { phase: "Post launch research", start: 8, end: 9, detail: "Signups fell to 13, 6 more interviews, screen audit, data review" },
    { phase: "Design system and redesign", start: 9, end: 13, detail: "Tokens, 8 components, step flows, new layout live 18 August" }
  ],

  decisions: [
    {
      id: "D1",
      title: "Let people learn a word within five seconds",
      summary: "The landing page teaches one real word before it asks for anything.",
      media: { type: "video", src: "motion/landing.mp4", poster: "motion/landing_poster.webp", caption: "A cold visitor learns das Haus in three taps." },
      why: "After launch, signups fell from 96 in June to 13 in July. Learners told me Germanly felt like a website with details, not a thing they wanted to touch. Visitors arrive from a WhatsApp group on a phone and decide in seconds. Reading does not hook them. Doing does.",
      brand: ["Headline in the display face at the largest step of the type scale, nothing competing in the first fold", "The demo card uses the same card, pill button and speaker icon as the real lesson, so the promise matches the product", "The three steps (learn the word, see the rule, use it) are labelled exactly as they are inside lessons"],
      ai: ["Prototyped three hook concepts in Google Stitch from written prompts, then chose one by testing with 4 learners", "Used Claude Code to build the interactive card from the existing lesson components instead of drawing a new one"],
      api: ["The demo runs fully on the client with no account, so it never waits on the network", "Signup uses Supabase Auth with Google, one tap, because every extra field costs visitors on a phone"],
      system: "Step 1 of the system, reuse before invent: the hook is assembled from lesson components, which proved the components were general enough.",
      micro: ["The word is das Haus because it is short, looks like English house, and makes the article rule obvious", "The meaning is hidden behind a button so the visitor makes a guess first", "Stats (120+ learners, 4,000+ words) sit after the demo, as proof once interest exists"],
      test: { versus: "Duolingo and Babbel ask for a goal, a level and an account before any learning. Germanly gives a small win first.", who: "Cold visitors from learner communities, mostly on phones", result: "Demo interaction 64% of visitors, landing signup rate 3.1% to 7.4%", real: false }
    },
    {
      id: "D2",
      title: "One obvious next step on the home screen",
      summary: "Today answers what should I do now with one primary action.",
      media: { type: "video", src: "motion/today.mp4", poster: "motion/today_poster.webp", caption: "The review queue is the one filled card on the screen." },
      why: "Only 8 of 101 learners had ever finished a lesson, yet nearly everyone who finished one paid. The content worked. The product was failing to point people at the next thing to do.",
      brand: ["Exactly one filled surface per screen; everything else is an outline card", "Numbers use tabular figures so progress reads as a steady column", "Copy explains the why in plain words: scheduled for today because today is when you are about to forget them"],
      ai: ["Used Claude Code to measure every screen: controls, primary actions, progress, response to input", "That audit turned a feeling (it is messy) into a ranked list of fixes"],
      api: ["The due count comes from the flashcard progress table, already computed per user, so the band costs no extra request", "Row Level Security in Supabase means each learner only ever reads their own rows"],
      system: "Step 2, audit before tokens: measuring screens showed which pattern to standardise first.",
      micro: ["The activity chart shows four weeks of dots, not a streak, so a missed day does not look like failure", "Speaking practice appears as a waitlist band above the review only after a first lesson is done", "Welcome back uses the first name only"],
      test: { versus: "Duolingo shows one path but hides what you are forgetting. Anki shows what is due and nothing else. Today shows both.", who: "Returning learners with a few minutes between classes or shifts", result: "Only 8 of 101 learners had finished a lesson before the redesign. In the pilot, 4 of 20 dropped every other tool and the median agreed they now use fewer tools: 6 of 7", real: true }
    },
    {
      id: "D3",
      title: "One thing at a time, and every tap answers back",
      summary: "Lessons move one card at a time, with calm feedback for wrong answers.",
      media: { type: "video", src: "motion/lesson.mp4", poster: "motion/lesson_poster.webp", caption: "A wrong answer gets a calm hint; the right one explains the rule." },
      why: "Learners asked for something not like Duolingo. They did not mean less fun. They meant no lives, no guilt, no leaderboards. I kept the three rules that work (one clear action, an instant response, visible progress) and removed the pressure.",
      brand: ["Try again is soft coral, never error red, and the copy says look at the examples again", "Correct is green with the rule underneath, so success also teaches", "Progress is a thin bar and a count (3 of 9) at the top of every step"],
      ai: ["The explain mistake endpoint gives a short reason in plain English when a learner is wrong twice", "Prompts are limited to learned vocabulary so explanations never introduce new words"],
      api: ["Answers are checked on the client for instant feedback, then saved in the background so a slow network never blocks the next card", "Explanations are cached, so the second learner with the same mistake gets an instant answer"],
      system: "Step 3, the Stepper pattern: one visible step, a bar and a back link, reused by lessons, writing, chat and tests.",
      micro: ["Leave sits top left, away from the answer buttons, to prevent accidental exits", "Answer options are full width rows for thumbs", "Skip to exercises exists for learners who already know the words"],
      test: { versus: "The lesson had 19 controls and 1 primary action and learners called it the part that feels like an app. The old words page had 431 controls and 0 primary actions.", who: "A1 beginners, the group most likely to quit after a mistake", result: "Finish rate after a wrong answer 41% to 68%", real: false }
    },
    {
      id: "D4",
      title: "Spaced repetition that shows the article",
      summary: "Cards return right before you would forget them, with der, die, das in colour.",
      media: { type: "video", src: "motion/flashcards.mp4", poster: "motion/flashcards_poster.webp", caption: "Rate a card and it leaves today's queue." },
      why: "Ten of fourteen learners said articles and cases were what they feared most, and most said words from other apps were gone within a week. The review queue already existed in the data but was invisible.",
      brand: ["Articles always carry their colour: der cobalt, die red, das green, on every card, list and note", "Hard sounds are split under the word (sch, ü) in the mono face", "Rating buttons are Hard, Good, Easy with a plain explanation under each"],
      ai: ["Example sentences were generated in a batch, then validated with LanguageTool before they entered the database", "Nothing generated reaches a learner without a validation pass"],
      api: ["Scheduling is a simplified SM 2 algorithm: again returns today, good grows the gap from 1 to 6 days and beyond, easy grows it faster", "Each rating writes one row, so the due count updates without reloading"],
      system: "Step 4, semantic tokens: der, die and das became tokens, not colours, so every component uses the same meaning.",
      micro: ["Flip is a real button, not only a tap on the card, for keyboard and screen reader users", "The queue shows 3 of 12 so learners know the session is short", "Listen plays the word before the meaning is revealed"],
      test: { versus: "Duolingo is excellent at bringing people back every day. Germanly puts the effort into recall: cards come back right before you would forget them, with the article always in colour.", who: "Learners preparing for A1 and B1 exams with a fixed word list", result: "Confidence holding a basic conversation rose from 3 to 4 of 7 in the pilot; 19 of 20 learners improved", real: true }
    },
    {
      id: "D5",
      title: "Keep the library, give it a front door",
      summary: "Words, phrases and notes keep full browsing, with one suggested action on top.",
      media: { type: "video", src: "motion/words.mp4", poster: "motion/words_poster.webp", caption: "Search a word and open its card with forms, audio and plural." },
      why: "I come for the words and the phrases was the most repeated line in research (11 of 14). Turning the library into lessons would remove the reason people came. One action on top leads them into the system without taking anything away.",
      brand: ["The front door band uses the same layout on every library page: what it is, one action, one secondary link", "Filters are pills in one row above results", "Locked items show a count (291 of 341 open), never a blurred wall"],
      ai: ["Word Dive gives a deeper explanation of any word on request: usage, collocations and a common mistake", "It only runs when a learner asks, which keeps AI cost tied to real interest"],
      api: ["Search runs on data already on the page, so results appear as you type", "The paywall state comes from the profile row, checked on the server so paid content never leaks through the client"],
      system: "Step 5, the UpgradeBand component: two paywall components and five inline versions became one.",
      micro: ["Every word card shows level and article before the meaning", "Save is a star in the corner, the same place on every card", "An article legend sits at the bottom of the list as a quiet reminder"],
      test: { versus: "Free phrase lists and PDFs have the same words but no memory. Germanly knows which ones you met, which are due and which your chapter needs.", who: "Almost everyone; the library is the most visited area", result: "Library visits that lead to a review or lesson 9% to 31%", real: false }
    },
    {
      id: "D6",
      title: "Writing that never punishes your keyboard",
      summary: "A three step writing flow with an umlaut bar on every text field.",
      media: { type: "video", src: "motion/writing.mp4", poster: "motion/writing_poster.webp", caption: "The ß comes from the umlaut bar, inserted at the cursor." },
      why: "A blank box at A1 tests recall under pressure, not writing. In testing, learners on US and Indian keyboards could not type ß or ü at all and were marked wrong for a reason that had nothing to do with German.",
      brand: ["Step one picks the task from your chapter and shows the phrases you will need", "The umlaut bar is part of the Field component, so no text box can ship without it", "Feedback is a marked up sentence and at most two rules, not an essay"],
      ai: ["The grade writing endpoint returns structured JSON: corrected sentence, changes and rules", "The interface renders that JSON as a diff instead of printing it as prose"],
      api: ["Structured output let me design the feedback screen before the AI was final, using mock responses", "Rate limits on the AI shaped the free tier: 20 AI exercises a day"],
      system: "Step 6, the Field component: nine hand built inputs became one, always with the umlaut bar.",
      micro: ["A live word count (12 words, 8 to go) replaces a minimum length error", "Or write about something else is a quiet link, not a second primary button", "Keys insert at the caret, not at the end of the text"],
      test: { versus: "Most apps test writing with word tiles and never ask for a sentence. Tutors correct writing, but for €300 or more a month.", who: "Learners preparing for the Goethe or telc writing section, and anyone writing to a landlord", result: "Answers marked wrong because of missing characters fell from 18% to under 1%", real: false }
    },
    {
      id: "D7",
      title: "A conversation partner who speaks first",
      summary: "Pick a real situation, warm up with three phrases, and the partner opens.",
      media: { type: "video", src: "motion/chat.mp4", poster: "motion/chat_poster.webp", caption: "In a café: three phrases first, then the conversation." },
      why: "An empty chat with a blinking cursor is the blank box again, and at A1 that is where people freeze. Learners said they were scared of making mistakes out loud, so the page says it plainly: nothing you say here is wrong, it is practice.",
      brand: ["Scenario cards show the situation, what you will practise and the length (6 exchanges)", "Suggested replies stay visible under the conversation", "Every scenario ends with what you managed and two things to fix"],
      ai: ["The chat partner endpoint is prompted to stay at the learner's level and open the conversation", "Hints are generated as three short replies the learner can tap or adapt"],
      api: ["Six exchanges is also a cost boundary: every conversation has a known maximum number of AI calls", "Replies stream in so the partner feels present even on a slow connection"],
      system: "Step 7, patterns over pages: chat reused the Stepper from step 3, so it took days, not weeks.",
      micro: ["The partner's first line is shown in the warm up so there is no surprise", "Audio buttons sit next to each phrase", "Back is always available and keeps what you typed"],
      test: { versus: "Open ended AI chats wait for you to start and never end. Germanly gives a situation, the words for it and a finish line.", who: "Newcomers preparing for cafés, appointments and small talk", result: "Conversations finished 22% to 64%", real: false }
    },
    {
      id: "D8",
      title: "Show readiness, not pressure",
      summary: "One number answers am I ready for the exam, with mock tests when you are close.",
      media: { type: "image", src: "images/readiness.webp", caption: "A1 readiness from vocabulary, grammar and units, with mock tests." },
      why: "Eleven of fourteen learners could not tell whether they were on track. A streak measures attendance. The exam measures ability. Readiness shows the part that matters to them.",
      brand: ["One ring, one number, one sentence (You are on track for the A1 test)", "The next unlocked test is the single filled card", "Bars below explain what the number is made of"],
      ai: ["Mock test items were drafted with AI in the Goethe format, then checked by hand against the official word list"],
      api: ["Readiness is computed from three tables (words, grammar topics, units) so it always matches what the learner has done", "Tests are marked on the server so the score can be trusted"],
      system: "The Readiness ring became a shared component used in the sidebar and on the progress page.",
      micro: ["Passed tests show the score (84%) and a retake button, never a trophy", "Tests list the topics they cover, so learners know what to revise"],
      test: { versus: "Duolingo does not map to Goethe levels. Exam prep sites have tests but no path. Germanly connects both.", who: "Anyone with a visa, admission or residence deadline", result: "Learners who took a mock test within 2 weeks: 6% to 23%", real: false }
    },
    {
      id: "D9",
      title: "Earn trust: pay once, honest emails",
      summary: "€19 once for twelve months, and emails tied to what the learner actually did.",
      media: { type: "emails" },
      why: "My first plan was €9.99 a month from A1 to C2. Research ended it: 9 of 14 had paid for an app and stopped. So the price became a promise (no auto renewal, no card kept) and the emails stopped nagging.",
      brand: ["The price appears the same way everywhere: €19 once, twelve months", "Email subject lines name a specific thing: a lesson, a count, a date", "Copy reassures (nothing expired, nothing resets) instead of guilt"],
      ai: ["I drafted email variants with Claude and rewrote each one by hand in the product voice"],
      api: ["Stripe Checkout in payment mode, not subscription mode, so there is nothing to cancel", "Resend sends lifecycle emails from a daily cron, and every send is logged so no one gets the same email twice"],
      system: "Voice is part of the system: a short list of words we use and words we never use sits beside the tokens.",
      micro: ["Unsubscribe is one click with no login", "Emails are signed by the founder and replies reach a real inbox", "Discount codes expire on a stated date, never a countdown timer"],
      test: { versus: "Babbel and Duolingo Super renew automatically. Lingoda costs €300 or more a month. €19 once is less than one textbook.", who: "Students on a budget and learners with a fixed deadline", result: "Before the pilot learners expected a subscription to motivate them more (5 vs 3). After living with one payment, most said a subscription would have made them use it less. Ownership predicted who kept going (r = .47); guilt did not", real: true }
    }
  ],

  pilotParticipants: [
      { id: "P01", age: 29, from: "Poland", background: "Graphic designer, Cologne; moved for partner" },
      { id: "P02", age: 34, from: "India", background: "Software engineer, Munich; relocated for work" },
      { id: "P03", age: 41, from: "Syria", background: "Resettled; integration course requirement" },
      { id: "P04", age: 23, from: "USA", background: "Exchange student, Berlin" },
      { id: "P05", age: 26, from: "Japan", background: "Design professional" },
      { id: "P06", age: 63, from: "UK", background: "Retiree, Bavaria" },
      { id: "P07", age: 22, from: "Nigeria", background: "University student" },
      { id: "P08", age: 31, from: "Australia", background: "Relocated; partner is German" },
      { id: "P09", age: 27, from: "Brazil", background: "Au pair" },
      { id: "P10", age: 38, from: "Morocco", background: "Blue card job seeker" },
      { id: "P11", age: 30, from: "Italy", background: "PhD student" },
      { id: "P12", age: 25, from: "UK", background: "Gamer" },
      { id: "P13", age: 28, from: "UK (Indian heritage)", background: "Moving to Berlin for a startup job" },
      { id: "P14", age: 45, from: "UAE", background: "Spouse of a diplomat" },
      { id: "P15", age: 35, from: "Ireland", background: "Freelance software consultant, Berlin" },
      { id: "P16", age: 24, from: "Nigeria", background: "Master's student, engineering" },
      { id: "P17", age: 40, from: "Portugal", background: "Restaurant owner opening a German branch" },
      { id: "P18", age: 33, from: "Turkey", background: "Married to a German for 10 years" },
      { id: "P19", age: 58, from: "USA", background: "Retiree, relocated with spouse" },
      { id: "P20", age: 21, from: "China", background: "International exchange student" }
  ],

  emails: [
    "34 words are ready for you",
    "You left Greetings and Introductions unfinished",
    "Your German is exactly where you left it",
    "€19 once. Not €19 a month.",
    "We are now 101 learners strong"
  ],

  brand: {
    colors: [
      { name: "Ink", hex: "#141414", use: "Headings and primary text" },
      { name: "Cream", hex: "#E3E2DE", use: "Page ground in light mode" },
      { name: "Cobalt", hex: "#1351AA", use: "The single accent, and der" },
      { name: "Die red", hex: "#8B1A1A", use: "Feminine nouns only" },
      { name: "Das green", hex: "#2A6B3A", use: "Neuter nouns and success" },
      { name: "Gold", hex: "#B8860B", use: "Focus points in grammar notes" }
    ],
    type: [
      { role: "Display and interface", face: "Space Grotesk, variable", sample: "Guten Morgen" },
      { role: "Sounds, counts, labels", face: "Space Mono 400 and 700", sample: "sch = sh · ü = üh" }
    ],
    rules: [
      "One filled primary action per screen",
      "Articles always carry their colour, everywhere",
      "Try again is coral and kind; error red is for system failures only",
      "Every action gets a visible response: a tick, a count, a moving bar",
      "Streaks count what happened and never take anything away",
      "Motion is for feedback and momentum, one focal move at a time",
      "Interface copy stays in English; German is always content",
      "Every text field carries the umlaut bar"
    ],
    components: [
      { name: "PageHeader", replaced: "7 hand built headers" },
      { name: "Field and TextArea", replaced: "9 inputs, now always with the umlaut bar" },
      { name: "Card", replaced: "about 30 inline card styles" },
      { name: "FlipCard", replaced: "3 drifting flip card versions" },
      { name: "SpeakButton", replaced: "6 versions across 9 files" },
      { name: "UpgradeBand", replaced: "2 components and 5 inline paywalls" },
      { name: "Stepper", replaced: "new, used by lessons, writing, chat, tests" },
      { name: "EmptyState", replaced: "4 hand built empty states" }
    ]
  },

  systemSteps: [
    { step: "Audit", detail: "Rendered every screen and counted controls, primary actions, progress and response. Found 431 controls on one page." },
    { step: "Tokens", detail: "Six colour tokens, grammar colours as semantic tokens, one type scale, one easing curve and one timing scale." },
    { step: "Primitives", detail: "Buttons, pills, cards and icons built from tokens only." },
    { step: "Components", detail: "Eight components that each replace something already duplicated." },
    { step: "Patterns", detail: "Stepper, front door band and review queue: the shapes screens are made from." },
    { step: "Rules", detail: "A page may not style an object that a component owns. This is what stops drift." },
    { step: "Documentation", detail: "Every decision lives next to the code in plain language, so the next screen follows it by default." }
  ],

  ai: [
    { area: "Research", items: ["Clustered 14 interview transcripts into first draft themes, then corrected every cluster by hand", "Summarised competitor reviews to find repeated complaints"] },
    { area: "Design", items: ["Explored layouts in Google Stitch from written prompts", "Used Claude Code to audit screens, measure controls and find duplicated components"] },
    { area: "Build", items: ["Built with Claude Code as a pair, guided by a CLAUDE.md that holds the design rules", "Every AI written change is reviewed against the system rules before merge"] },
    { area: "In the product", items: ["Eight AI endpoints on Groq: chat partner, writing grading, mistake explanations, word dive, grammar chat, exercise generation, vocabulary practice, paragraph tests", "Guard rails: level limited prompts, rate limits, validation before storage"] }
  ],

  architecture: {
    layers: [
      { name: "Learner", items: ["Phone or laptop", "Installable web app"] },
      { name: "Web app", items: ["Next.js and React on Vercel", "Tailwind tokens", "Framer Motion and anime.js"] },
      { name: "Edge", items: ["Session check on every request", "Static assets skip auth"] },
      { name: "API routes", items: ["AI endpoints", "Flashcards and progress", "Payments", "Email cron"] },
      { name: "Services", items: ["Supabase Auth and Postgres with RLS", "Groq LLM", "Stripe", "Resend", "Vercel Analytics"] }
    ]
  },

  endpoints: [
    {
      method: "GET", path: "/api/flashcards", label: "Due reviews",
      response: { due: 63, next: [{ word: "die Mutter", article: "die", intervalDays: 6, ease: 2.5, nextReview: "28 Sep 2026" }, { word: "der Schlüssel", article: "der", intervalDays: 1, ease: 2.3, nextReview: "28 Sep 2026" }] },
      lesson: "Knowing the due count is already computed let me design Today around it at no extra cost."
    },
    {
      method: "POST", path: "/api/groq/grade-writing", label: "Writing feedback",
      request: { text: "Hallo! Ich heisse Abhi. Ich komme aus Indien.", level: "A1" },
      response: { score: 8, corrected: "Hallo! Ich heiße Abhi. Ich komme aus Indien.", changes: [{ from: "heisse", to: "heiße", rule: "ß after a long vowel" }], tip: "Great start. Add where you live next." },
      lesson: "Structured JSON meant the feedback could be a diff, and I could design it with mock responses before the prompt was final."
    },
    {
      method: "POST", path: "/api/groq/chat-partner", label: "Conversation turn",
      request: { scenario: "cafe", level: "A1", turn: 1 },
      response: { reply: "Guten Tag! Was möchten Sie trinken?", suggestions: ["Einen Kaffee, bitte.", "Ein Wasser, bitte.", "Was kostet ein Tee?"], turn: 1, of: 6 },
      lesson: "A fixed number of turns gave every conversation an end for the learner and a cost ceiling for me."
    },
    {
      method: "GET", path: "/api/progress", label: "Readiness",
      response: { level: "A1", readiness: 0.69, streakDays: 3, wordsKnown: 59, grammarTopics: "6 of 10", units: "6 of 10" },
      lesson: "Readiness is derived from real rows, so the number can never promise more than the learner has done."
    },
    {
      method: "POST", path: "/api/stripe/checkout", label: "Pay once",
      request: { plan: "year" },
      response: { mode: "payment", price: "€19", access: "12 months", renews: false },
      lesson: "Payment mode instead of subscription mode made no auto renewal true in the system, not just in the copy."
    }
  ],

  pilot: {
    source: "One Payment, One Path (CHI 2027 submission). Pre and post questionnaires plus matched interviews, n = 20, Wilcoxon signed rank tests and Spearman correlations.",
    prepost: [
      { item: "Confidence holding a basic conversation", pre: 3, post: 4, p: "< .0001", note: "19 of 20 improved, none declined" },
      { item: "Learning because I want to, not because I have to", pre: 4, post: 5, p: ".0006", note: "Motivation became more self directed" }
    ],
    belief: { subscriptionBefore: 5, oneTimeBefore: 3, pBefore: ".004", sameUseAfter: 3 },
    correlations: [
      { item: "Feels like ownership, not renting", median: 6, r: 0.47, p: ".037" },
      { item: "Thought about money already spent", median: 5, r: 0.06, p: ".81" },
      { item: "Felt obligated because I had paid", median: 5, r: 0.05, p: ".82" }
    ],
    tools: { baselineMedian: 2, fewerToolsMedian: 6, droppedAll: 4, keptOne: 16 },
    real: true
  },

  growth: {
    points: [
      { date: "30 Jun", learners: 96, label: "Launch month" },
      { date: "23 Jul", learners: 101, label: "101 learners" },
      { date: "13 Aug", learners: 115, label: "Redesign ships" },
      { date: "28 Sep", learners: 120, label: "Today" }
    ],
    note: "Cumulative learners. 96 signups in June from learner communities, 13 in July, then steady growth after the redesign.",
    real: true
  },

  fieldwork: [
    { src: "images/research/workshop_intro.webp", caption: "Opening the workshop", note: "Setting the scene before the first activity" },
    { src: "images/research/workshop_cards.webp", caption: "Card sorting in small groups", note: "Participants grouped and ranked what they need from a learning tool" },
    { src: "images/research/workshop_timer.webp", caption: "Timed rounds", note: "Two minute rounds kept each group moving and every voice heard" },
    { src: "images/research/workshop_feedback.webp", caption: "Feedback on the live product", note: "What was confusing, if anything? asked with the product open on laptops" }
  ],

  toolkit: [
    { method: "Desk research and competitive audit", why: "To check whether my frustration was personal or structural, and where Duolingo, tutors and free content each fall short.", output: "B1 is a legal requirement; price decides for most; no product joins a path, practice and exam readiness" },
    { method: "Semi structured interviews", why: "Opinions are unreliable; the last real study session is not. I asked people to show me their setup.", output: "14 discovery interviews, then 40 pilot interviews (20 learners, before and after)" },
    { method: "Co design workshop", why: "To watch learners reason together instead of alone. Short timed rounds kept every voice in the room.", output: "Card sorting, group discussion and a feedback round on the live product" },
    { method: "Affinity mapping", why: "To turn interview notes into themes I could count instead of anecdotes I could cherry pick.", output: "Seven recurring themes, from fear of articles to abandoned subscriptions" },
    { method: "Personas", why: "To keep three different deadlines in view: students, newcomer workers and people about to move.", output: "Three audience profiles with the goal, the deadline and the constraint" },
    { method: "Information architecture", why: "Fourteen destinations had become a directory. Hick's law puts a readable nav at five to seven.", output: "Six destinations, reference grouped into tabs, every old URL kept" },
    { method: "User flows", why: "To design the path a person walks, not screens in isolation, and to find where they drop.", output: "Activation, daily loop, lesson loop and free to paid flows" },
    { method: "Prototyping", why: "To test ideas in hours instead of days, then build only the one that held up.", output: "Google Stitch explorations, Figma frames, then coded prototypes" },
    { method: "Usability testing", why: "To watch where people hesitate. Think aloud surfaced the missing umlaut keys and the blank box problem.", output: "Findings that became decisions (c), (f) and (g)" },
    { method: "Heuristic screen audit", why: "To replace it feels messy with numbers: controls, primary actions, progress, response.", output: "431 controls on one page versus 19 in the lesson" },
    { method: "Product analytics", why: "What people do beats what they say. The database showed who started and who finished.", output: "8 of 101 learners had finished a lesson before the redesign" },
    { method: "Pilot study", why: "To test the core bet, one payment and one path, with before and after measures.", output: "n = 20, Wilcoxon and Spearman, written up for CHI 2027" }
  ],

  ia: {
    before: ["Today", "Path", "Lessons", "Words", "Flashcards", "Saved", "Phrases", "Sounds", "Notes", "Grammar", "Listening", "Writing", "Chat", "Tests"],
    groups: [
      { name: "Today", why: "One next step: due reviews, continue, recommendation", children: [] },
      { name: "Lessons", why: "The A1 to B2 path", children: ["A1", "A2", "B1", "B2", "Units", "Lesson steps"] },
      { name: "Library", why: "What people come for, one door with tabs", children: ["Words", "Phrases", "Saved", "Sounds"] },
      { name: "Grammar", why: "Look up a rule twenty times", children: ["Topics", "Notes"] },
      { name: "Practise", why: "Where learning is produced", children: ["Flashcards", "Listening", "Write", "Chat", "Tests"] },
      { name: "Stories", why: "Reading for pleasure at your level", children: [] }
    ],
    corner: ["Profile", "Settings", "Upgrade", "Send feedback"],
    rules: [
      "Six destinations, down from fourteen. Past seven, people stop reading a nav and start hunting it.",
      "Nothing was deleted. Words, Phrases, Saved and Sounds are four ways of browsing the same reference, so they became one door with four tabs.",
      "Every URL stayed the same, so no link in an email, a lesson or onboarding broke.",
      "On phones the bar shows four plus More, because five slots is what fits at 360px. Grammar and Stories are reference, not daily practice.",
      "The nav hides during a lesson and returns at the end. Focus mode is part of the architecture."
    ]
  },

  flows: [
    { id: "first", name: "First visit to first win", who: "A cold visitor from a learner group", steps: ["Landing demo", "Learn one word", "Sign in with Google", "Why are you learning?", "Level and minutes a day", "Your plan", "Lesson 1", "Celebration", "Today"], note: "The corridor has one exit. The plan reveal leads into a lesson, never a dashboard, because a new learner needs the lesson, not the features." },
    { id: "daily", name: "The daily loop", who: "A returning learner with ten minutes", steps: ["Email or home screen", "Today", "Review due words", "Continue lesson", "Lesson complete", "Recommendation", "Back to Today"], note: "Today always offers one primary action. The reminder email names something specific the learner did, never a generic nudge." },
    { id: "lesson", name: "Inside a lesson", who: "Any learner, any level", steps: ["Words", "The rule", "Exercises", "Try again if wrong", "Write or say it", "Complete", "What next"], note: "A wrong answer loops back once with a hint, not a penalty. Complete offers three connections: shore up, go deeper, use it." },
    { id: "pay", name: "Free to paid", who: "A learner who has had a win", steps: ["Locked lesson or set", "Upgrade band", "€19 once", "Stripe checkout", "Success", "Today, unlocked"], note: "The ask lands after a win, never before one. Payment mode, not subscription mode, so there is nothing to cancel." }
  ],

  style: {
    colors: [
      { group: "Surfaces", items: [["Canvas", "#0A0908", "Dark mode ground, faint warmth"], ["Surface", "#161514", "Cards one step above"], ["Paper", "#FAF9F7", "Light mode ground"], ["Today sage", "#CDD6CC", "The one tinted card on Today"]] },
      { group: "Signal", items: [["Ink", "#FFFFFF", "Text on dark"], ["Blue", "#0099FF", "Links and focus only"], ["Success", "#30D158", "Correct answers"], ["Ember", "#FF3700", "Hero moments, from the ember gradient"]] },
      { group: "Activity", items: [["Lessons", "#E8845C", "Lesson dots and progress"], ["Words", "#7FB0E8", "Vocabulary activity"], ["Grammar", "#B39AE0", "Grammar activity"], ["Reading", "#6FC2A4", "Reading activity"]] }
    ],
    type: [
      { name: "Display XL", spec: "Satoshi 500 · 85 / 0.95 · tracking −4.25", size: 64, weight: 500, sample: "Guten Morgen" },
      { name: "Display MD", spec: "Satoshi 500 · 32 / 1.13 · tracking −1", size: 32, weight: 500, sample: "Four chapters to A1" },
      { name: "Headline", spec: "Switzer 700 · 22 / 1.2", size: 22, weight: 700, sample: "63 words are ready for review" },
      { name: "Body", spec: "Switzer 400 · 15 / 1.3", size: 15, weight: 400, sample: "These are scheduled for today because today is when you are about to forget them." },
      { name: "Caption", spec: "Switzer 500 · 13 / 1.2", size: 13, weight: 500, sample: "Last four weeks · 7 days" }
    ],
    spacing: [4, 8, 12, 15, 20, 30, 40, 96],
    radius: [["xs", 4], ["sm", 6], ["md", 10], ["lg", 15], ["xl", 20], ["xxl", 30], ["pill", 100]],
    motion: [
      { name: "Press", value: "160ms", use: "Buttons and taps" },
      { name: "Settle", value: "250ms", use: "Cards, reveals" },
      { name: "Reveal", value: "600ms", use: "Page and panel entrances" },
      { name: "Easing", value: "cubic bezier (0.23, 1, 0.32, 1)", use: "One curve for everything" }
    ],
    voice: [
      { do: "Nothing expired. Every word you learned is still marked as learned.", dont: "Don't lose your streak! Come back now." },
      { do: "34 words are ready for you.", dont: "Keep learning!" },
      { do: "Not that one. Look at the examples again.", dont: "Wrong answer." },
      { do: "€19 once. Not €19 a month.", dont: "Unlock Premium today, limited offer!" }
    ]
  },

  stack: [
    { layer: "Web app", tool: "Next.js on Vercel", why: "Server rendering for fast first loads and SEO on the free guides, one deploy per push" },
    { layer: "Auth", tool: "Supabase Auth with Google", why: "One tap sign in on a phone; every extra field cost visitors" },
    { layer: "Data", tool: "Supabase Postgres with Row Level Security", why: "Each learner can only read their own rows, enforced by the database, not by the interface" },
    { layer: "AI", tool: "Groq LLM behind eight API routes", why: "Fast enough for a conversation to feel live; rate limited so the free tier stays affordable" },
    { layer: "Payments", tool: "Stripe Checkout in payment mode", why: "No subscription object exists, so no auto renewal is true in the system, not just the copy" },
    { layer: "Email", tool: "Resend with a daily cron", why: "Lifecycle emails tied to what a learner did, logged so nobody gets the same email twice" },
    { layer: "Insight", tool: "Vercel Analytics and product tables", why: "Where people drop, measured instead of guessed" }
  ],

  request: ["You tap Get feedback", "The page sends your sentence and level", "The server checks your session and daily limit", "Groq returns structured JSON", "The page renders a diff with at most two rules", "Your attempt is saved to your history"],

  learnings: [
    { title: "Being the user is a head start, not research", body: "My first plan was built on my own assumptions. Fourteen conversations cut the scope in half and changed the business model." },
    { title: "Measure the interface", body: "Counting controls and primary actions turned it feels messy into a fix I could ship in a day." },
    { title: "Retention and learning are different goals", body: "Duolingo is built for coming back. I built Germanly for what sticks, and the pilot showed ownership, not guilt, is what keeps people going." },
    { title: "Know the API to design the state", body: "Rate limits, structured output and payment modes shaped the interface as much as any sketch." }
  ],

  next: ["Speaking practice with Lena, a partner who waits while you think", "Funnel tracking from signup to first finished lesson", "Hear it, then say it for the ten sounds English speakers get wrong", "Close the retention gap with Duolingo without adding pressure"]
};
