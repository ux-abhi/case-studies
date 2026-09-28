/* Oncarea case study content.
   Every fact here comes from the Oncarea Figma deck (research, personas, architecture,
   feature flows, style and screens). Nothing is a measured result unless it says so. */
window.ONCAREA = {
  meta: {
    project: "Oncarea",
    tagline: "Cancer care ecosystem",
    fellowship: "Chanakya UG Fellowship 2023",
    host: "iHub Divya Sampark, IIT Roorkee",
    duration: "24 weeks",
    role: "Interaction Designer and Research Lead",
    type: "Fellowship research, UX research and design"
  },

  stats: [
    { n: "24", unit: "weeks", t: "<b>From first interview to final screens</b>, under the Chanakya UG Fellowship at IIT Roorkee." },
    { n: "14", unit: "", t: "<b>Semi structured interviews</b>: 4 doctors and 10 patients from rural regions." },
    { n: "3", unit: "", t: "<b>Surfaces delivered</b>: a website, a doctor and patient app, and a clinic dashboard." },
    { n: "18+", unit: "", t: "<b>Articles and earlier surveys</b> read, and 12+ companies in the same space studied." }
  ],

  /* Chapter 02: the four places screening breaks */
  breaks: [
    { k: "Capture", t: "The photo is unusable", p: "Phone cameras, dim rooms and no guidance on angle. Poor image quality was the biggest barrier doctors named for screening in the field." },
    { k: "Context", t: "The image arrives alone", p: "A lesion means little without habits, symptoms and history. Doctors told us they cannot judge an isolated picture." },
    { k: "Review", t: "The machine decides", p: "Fully automated diagnosis asks a doctor to sign off on something they did not see. The doctors we spoke to did not trust it." },
    { k: "Result", t: "The patient panics", p: "A raw report on a phone, with no doctor beside it, frightens more than it helps. Patients asked for guidance, not conclusions." }
  ],

  methods: [
    { k: "01", t: "Industry analysis", p: "12+ companies in oral screening and telehealth. What they automate, who sees results, how images are captured.", o: "Mapped what others automate and who sees the result." },
    { k: "02", t: "Desk research", p: "18+ articles and earlier survey insights on rural oral cancer screening and outreach camps.", o: "Framed the rural screening context and its gaps." },
    { k: "03", t: "Semi structured interviews", p: "4 doctors on clinical workflow, risk and liability. 10 patients from rural regions on trust and fear.", o: "The four insights that shaped the system." }
  ],

  numbers: [
    { n: "4", t: "Semi structured interviews with doctors" },
    { n: "10", t: "Patients from rural regions interviewed" },
    { n: "18+", t: "Articles and previous survey insights" },
    { n: "12+", t: "Companies in the same domain" }
  ],

  questions: [
    { who: "Healthcare providers", q: "How critical is capturing the broader medical context, like patient history, versus just looking at an image of a lesion?" },
    { who: "Healthcare providers", q: "What are the primary barriers you face when you try to run oral cancer screenings in the field?" },
    { who: "Healthcare providers", q: "What information or disclaimers would you need to feel legally and professionally secure using an AI assisted tool?" },
    { who: "Patients", q: "What features would make you feel safer while using a digital health tool for something as sensitive as cancer screening?" },
    { who: "Patients", q: "Does receiving a preliminary medical report through an app make you feel more empowered, or more anxious?" }
  ],

  insights: [
    { t: "Poor image quality is the biggest screening barrier", to: "Readiness checks and a guided scan before anything else" },
    { t: "Medical context is essential for interpretation", to: "Habits, symptoms and notes captured with every case" },
    { t: "Doctors do not trust fully automated diagnosis", to: "AI only assists; the doctor makes the final call" },
    { t: "Patients prefer guidance, not medical conclusions", to: "Patients never see raw reports or AI output" }
  ],

  niche: [
    { t: "Oral care doctors", p: "Screening specialists and doctors who run on site camps and outreach programmes." },
    { t: "Rural people, age 30 to 60", p: "The group most exposed to tobacco and least served by specialist clinics." }
  ],

  personas: [
    {
      name: "Dr. Arya", role: "Screening specialist, 42", tone: "dark",
      about: "Wants to run early oral cancer screenings efficiently without lowering medical standards. Wants less effort per case while keeping full clinical authority over the final diagnosis.",
      says: "I need full patient context, not just isolated images, to assess accurately.",
      thinks: "AI should support my judgment.",
      feels: "Secure only with legal safeguards.",
      does: "Runs screenings, reviews cases with AI assistance, makes the final decision.",
      pain: ["Distrusts fully automated systems", "Poor image quality", "Time intensive traditional workflows"],
      needs: ["AI pattern assistance strictly as decision support", "A structured way to capture history and medical context"]
    },
    {
      name: "Rohan", role: "Outreach patient, 27", tone: "light",
      about: "Takes part in a community outreach or on site screening camp. In a human in the loop system, his role is limited to giving good data for a doctor to review.",
      says: "Guide me to a doctor instead of showing frightening AI results.",
      thinks: "Is this image clear enough for the doctor to use?",
      feels: "Safe and calm without access to diagnoses or reports.",
      does: "Follows guided overlays and capture checks in a restricted interface.",
      pain: ["Fear of self diagnosis", "Anxiety from medical data", "Difficulty capturing clear oral images"],
      needs: ["Guided overlays and scan readiness checks", "Assurance that a human doctor verifies his data"]
    }
  ],

  /* Chapter 04: what the system changes */
  shifts: [
    { from: "AI tells the patient what it sees", to: "AI assists the doctor, who decides", why: "Doctors keep clinical authority and professional responsibility." },
    { from: "Take any photo and upload it", to: "A guided scan with readiness checks", why: "Camera, lighting, overlay and angles are checked before a case exists." },
    { from: "An image on its own", to: "An image with habits, symptoms and notes", why: "Every case carries the context a doctor needs to interpret it." },
    { from: "The patient opens a raw report", to: "The patient gets guidance and a next step", why: "No self diagnosis on a phone, and less fear." },
    { from: "One app for everyone", to: "Clear roles for doctor, patient, AI and clinic", why: "Each role sees only what it needs to act." }
  ],

  /* Chapter 05: clinical architecture, rebuilt from the Figma diagram */
  architecture: [
    { k: "01", t: "Data capture and AI quality check", items: ["Clinical image capture", "Realtime AI scan check", "Error prevention", "Submission processing"] },
    { k: "02", t: "Clinical contextualisation", items: ["Medical history", "Structured screening questions", "Sync to the dashboard"] },
    { k: "03", t: "AI assisted review and decision", items: ["AI image pattern assistance", "Decision support", "Final clinical decision", "Doctor's professional responsibility"] },
    { k: "04", t: "Results and patient guidance", items: ["Restricted access to raw reports", "Prevents patient anxiety", "Personalised care advice", "Educational resources"] },
    { k: "05", t: "Consultation and follow up", items: ["Appointments and availability", "Video consultation", "Direct contact with the doctor"] }
  ],
  principles: ["Human in the loop", "Clear role separation", "Doctor as the primary decision maker"],

  /* Role matrix: who can do what. 2 = owns it, 1 = takes part, 0 = cannot */
  roles: ["Doctor", "Patient", "AI", "Clinic"],
  matrix: [
    ["Add a patient and record history", 2, 0, 0, 0],
    ["Capture oral images", 1, 2, 0, 0],
    ["Check image quality in real time", 0, 0, 2, 0],
    ["Point out patterns in an image", 0, 0, 1, 0],
    ["Make the clinical decision", 2, 0, 0, 0],
    ["Open the raw report", 2, 0, 0, 1],
    ["Receive care guidance", 0, 2, 0, 0],
    ["Verify doctors and samples", 0, 0, 0, 2]
  ],

  /* Chapter 06: blueprint */
  deliveries: [
    { t: "Doctor app", p: "Onboarding, patient management, guided screening, appointments, availability and wallet." },
    { t: "Patient flow", p: "A restricted, guided capture flow. No diagnosis, no raw report, clear confirmation." },
    { t: "Clinic dashboard and website", p: "Doctor and sample verification, doctor boards, sample review and coin payouts." }
  ],

  doctorModules: [
    { t: "Onboarding and verification", items: ["Google login", "Terms and privacy acceptance", "Medical ID, optional, verified later"] },
    { t: "Patient management", items: ["Add patient, on site or remote", "Patient list", "Patient reports"] },
    { t: "Clinical data collection", items: ["Habits: tobacco, alcohol, smoking", "Symptoms: pain, trismus", "Additional notes"] },
    { t: "Oral scan supervision", items: ["Scan readiness check", "Guided capture"] },
    { t: "Appointments", items: ["Schedule", "Reschedule or cancel", "Join session"] },
    { t: "Availability", items: ["Weekly slots", "Multiple time windows"] },
    { t: "Wallet and incentives", items: ["Coins", "Locked withdrawals", "Rewards after onboarding"] },
    { t: "Second participant", items: ["Guided interaction only", "Follows scan instructions", "No diagnosis or feedback"] }
  ],

  ia: {
    root: { t: "Oncarea doctor app", s: "Bottom navigation, four tabs" },
    cols: [
      { t: "Home", s: "Today at a glance", items: ["Next session", "Patient totals", "Add patient", "Availability nudge"] },
      { t: "Appointments", s: "By date", items: ["Upcoming", "Pending", "Cancelled", "Completed"] },
      { t: "Availability", s: "Weekly", items: ["Day toggles", "Time windows", "Add more hours"] },
      { t: "Menu", s: "Account", items: ["Wallet", "Profile settings", "Terms and conditions", "Support", "Log out"] }
    ],
    deep: ["Patient list", "Patient details (3 steps)", "Scan readiness", "Guided scan", "Case created", "Patient report"]
  },

  flows: [
    {
      id: "screen", label: "Screen a patient", who: "Doctor with patient, on site",
      steps: ["Add patient", "Habits", "Symptoms", "Notes", "Camera check", "Guided scan", "Case created"],
      note: "<b>Why this order.</b> Context comes before the camera, so the doctor never forgets it after the patient leaves. The camera check comes right before the scan, when the phone and the light are already in place."
    },
    {
      id: "onboard", label: "Join as a doctor", who: "Doctor, first launch",
      steps: ["Continue with Google", "Read terms", "Upload medical ID (optional)", "Accept", "Home"],
      note: "<b>Why this order.</b> A doctor at a camp should not wait days for verification before helping anyone. Terms are accepted first; the ID is checked later and payouts stay locked until it is."
    },
    {
      id: "review", label: "Review a case", who: "Doctor, on the dashboard",
      steps: ["New sample", "AI quality and pattern cues", "Doctor review", "Final decision", "Guidance to patient"],
      note: "<b>Why this order.</b> The AI speaks first only to the doctor. What reaches the patient is guidance and a next step, written after a human decision."
    },
    {
      id: "follow", label: "Follow up", who: "Doctor and patient",
      steps: ["Set availability", "Appointment request", "Accept or reschedule", "Join video session", "Completed"],
      note: "<b>Why this order.</b> Availability is set once, as weekly windows, so every request lands in a slot the doctor already chose."
    }
  ],

  /* Chapter 07: design decisions */
  decisions: [
    {
      id: "d1", short: "Doctor led screening", title: "The doctor starts every case",
      why: [
        "Doctors told us they would not trust a diagnosis they did not make, and patients told us they did not want one from an app. So the case lives in the doctor's app, not the patient's.",
        "The doctor adds the patient, on site or remotely, records the context and supervises the scan. The patient never has to navigate the product alone."
      ],
      screens: ["d_home", "p_list", "p_details"],
      caption: "Home, patient list and the first of three patient steps",
      does: ["Add a patient with name, email and phone", "A patient list with a report for every case", "Home shows the next session, patient totals and a nudge to set availability"],
      link: "Doctors do not trust fully automated diagnosis. Patients prefer guidance, not conclusions.",
      trade: "Patients cannot self screen at home, so reach depends on camps and doctors. We chose accountability over scale."
    },
    {
      id: "d2", short: "Context first", title: "Context before the camera",
      why: [
        "“I need full patient context, not just isolated images.” Doctors kept coming back to this. An image without habits and symptoms is a guess.",
        "So the doctor records tobacco, alcohol and smoking habits, pain when opening the mouth, the 3 finger trismus test and free notes before the scan. Checkboxes and yes or no answers, three short steps, one visible progress bar."
      ],
      screens: ["p_habits", "p_notes", "p_report"],
      caption: "Habits and symptoms, extra notes, and the report that carries them",
      does: ["Habits named the way patients say them: gutka, khaini, betel nut, beedi", "Two clinical checks as simple yes or no", "Everything lands in the patient report next to the images"],
      link: "Medical context is essential for interpretation.",
      trade: "More steps before the scan. Three short screens with a progress bar keep the effort visible and bounded."
    },
    {
      id: "d3", short: "Scan readiness", title: "Check the camera before the scan",
      why: [
        "Poor image quality was the biggest barrier doctors named. A blurry photo found later means a patient who has already gone home.",
        "One screen before the camera opens asks for an 8MP camera and proper lighting. It is the cheapest moment to fix a problem: the phone is in hand and the patient is still in the chair."
      ],
      screens: ["p_camera", "p_scan"],
      caption: "Readiness check, then the live scan",
      does: ["Camera of 8MP or more", "Proper lighting before capture", "Realtime AI quality check during the scan"],
      link: "Poor image quality is the biggest screening barrier.",
      trade: "One extra screen on every case. Much cheaper than a rejected sample."
    },
    {
      id: "d4", short: "Guided oral scan", title: "An overlay that shows where to look",
      why: [
        "Rohan's question was “Is this image clear enough for the doctor to use?” People do not know what a useful oral image looks like, and they should not have to.",
        "A mouth overlay frames every capture the same way. A strip of thumbnails shows which regions and angles are done, so coverage is visible, not remembered."
      ],
      screens: ["p_scan_guide", "p_scan"],
      caption: "The overlay alone, and over a live camera",
      does: ["Mouth overlay for consistent framing", "Multiple angles per case", "Region coverage shown as a thumbnail strip"],
      link: "Patients need guided overlays and scan readiness checks.",
      trade: "A fixed overlay cannot fit every mouth. Multiple angles cover what one frame misses."
    },
    {
      id: "d5", short: "No diagnosis on the phone", title: "The patient never sees a diagnosis",
      why: [
        "“Guide me to a doctor instead of showing frightening AI results.” Patients were clear that a raw report on a phone made them anxious, not empowered.",
        "So the patient side is a restricted capture flow. It ends with a calm confirmation that the details were saved, and results come back as guidance from a doctor."
      ],
      screens: ["p_added"],
      caption: "The confirmation that ends the flow",
      split: {
        yes: ["Guided capture with overlay", "Readiness checks", "A clear confirmation", "Care advice and a next step from a doctor", "Educational resources"],
        no: ["AI output", "Raw reports", "Risk scores", "A diagnosis without a doctor"]
      },
      does: ["Restricted access to raw reports", "Confirmation that tells people what happens next", "Personalised care advice after review"],
      link: "Patients prefer guidance, not medical conclusions.",
      trade: "Less transparency for the patient in the moment. We chose calm and a human conversation over instant data."
    },
    {
      id: "d6", short: "Human in the loop AI", title: "AI as a second opinion, not the verdict",
      why: [
        "Doctors asked what disclaimers they would need to feel legally safe using AI. The honest answer was a system where the AI never makes the decision.",
        "On the dashboard, the AI adds quality cues and pattern assistance to each sample. The doctor reviews, decides and carries the professional responsibility."
      ],
      web: ["web_doctor_dash", "web_samples"],
      caption: "Doctor dashboard and sample review on the web",
      does: ["AI image pattern assistance as decision support", "The final clinical decision always sits with a doctor", "Samples sync from the app to the dashboard"],
      link: "AI should support my judgment. Secure only with legal safeguards.",
      trade: "Slower than automatic triage. Doctors will only use what they can stand behind."
    },
    {
      id: "d7", short: "Trust first onboarding", title: "Terms first, paperwork later",
      why: [
        "A doctor who joins at a camp should be able to help someone that day. Blocking the app until a medical ID is verified would lose them.",
        "So sign in is one Google tap. The terms spell out the doctor's responsibilities in three plain lines, and Continue stays disabled until they are accepted. The medical ID is optional at first and verified later."
      ],
      screens: ["s_login", "s_terms", "s_terms_ok"],
      caption: "Sign in, terms not yet accepted, terms accepted",
      does: ["Continue with Google", "Three plain terms: privacy, quality based payment, no duplicate patients", "Medical ID optional, verified later by the clinic"],
      link: "Doctors feel secure only with legal safeguards.",
      trade: "Unverified doctors can start. Payouts stay locked and the clinic verifies every doctor on the dashboard."
    },
    {
      id: "d8", short: "Pay for quality", title: "Pay for good images, not many images",
      why: [
        "If doctors are paid per upload, the system rewards volume and gets blurry photos and repeat patients. The terms say it plainly: payment follows images found to be of good quality after inspection, and the same patient is not uploaded twice.",
        "The wallet shows a coin balance, and a clear message explains that withdrawals open after successful onboarding."
      ],
      screens: ["d_wallet", "d_menu"],
      web: ["web_admin"],
      caption: "Wallet, menu, and the clinic view of verified samples and doctors",
      does: ["Coins per verified sample (10 coins to 1 rupee in the dashboard design)", "Withdrawals locked until onboarding is complete", "Clinic dashboard tracks verified samples and doctors"],
      link: "Poor image quality is the biggest screening barrier, so quality is what gets paid.",
      trade: "Delayed rewards can put doctors off. The wallet says why, instead of just showing a grey button."
    },
    {
      id: "d9", short: "Follow up", title: "Follow up without a second trip",
      why: [
        "A screening camp is one day. What happens after it decides whether early detection turns into care.",
        "Doctors set weekly availability once, with several windows per day. Patients book into those slots, and the doctor can accept, reschedule or join a video session from the same list."
      ],
      screens: ["d_appts", "d_avail", "o_2"],
      caption: "Appointments by status, weekly availability, and video meets in onboarding",
      does: ["Status chips: upcoming, pending, cancelled, completed", "Weekly slots with multiple time windows", "Join a video session straight from the card"],
      link: "Consultation and follow up is a layer of the clinical architecture.",
      trade: "Video needs a stable connection, which rural areas do not always have. Rescheduling is one tap for that reason."
    }
  ],

  screenGroups: [
    { t: "Onboarding, login and verification", s: ["s_splash", "s_login", "o_1", "o_2", "o_3", "s_terms_ok"] },
    { t: "Home utility", s: ["d_home", "d_appts", "d_avail", "d_menu", "d_wallet", "d_profile"] },
    { t: "Patient screening", s: ["p_list", "p_details", "p_habits", "p_notes", "p_camera", "p_scan"] },
    { t: "Details and completion", s: ["p_scan_guide", "p_added", "p_report"] }
  ],
  web: [
    { img: "web_admin", url: "Oncarea · Clinic admin", t: "Clinic overview: samples and doctors verified this month" },
    { img: "web_doctors", url: "Oncarea · Doctors", t: "Doctors list and doctor boards" },
    { img: "web_doctor_dash", url: "Oncarea · Doctor dashboard", t: "Doctor dashboard with samples and coins" },
    { img: "web_samples", url: "Oncarea · Samples", t: "Image sample review" }
  ],

  /* Chapter 08: style guide, sampled from the Figma style page */
  style: {
    primary: [["100", "#6C63FF"], ["80", "#8982FF"], ["60", "#A7A1FF"], ["40", "#C4C1FF"], ["20", "#E2E0FF"]],
    neutral: [["100", "#333333"], ["90", "#474747"], ["80", "#5C5C5C"], ["70", "#707070"], ["60", "#858585"], ["50", "#999999"], ["40", "#ADADAD"], ["30", "#C2C2C2"], ["20", "#D6D6D6"], ["10", "#EBEBEB"]],
    semantic: [["Success", "#21B619", "Completed sessions, verified"], ["Warning", "#FFCC00", "Needs attention soon"], ["Error", "#FF7171", "Cancelled, blocking alerts"], ["Info", "#0D8CE9", "Neutral system messages"]],
    type: [["Extra bold", 800, 48, "Oncarea"], ["Bold", 700, 36, "Patient report"], ["Semibold", 600, 24, "Your balance"], ["Medium", 500, 20, "Patient details added"], ["Regular", 400, 16, "Ensure your camera is 8MP and proper lighting"], ["Light", 300, 16, "Patient details have been saved. You can view them in the patient list."]],
    rules: [
      ["Purple means act", "Primary actions only: Next, Continue, Join session, Accept. Never decoration."],
      ["Coral means stop", "Cancelled states and blocking alerts, like availability not set or rewards locked."],
      ["One question per card", "Each clinical question sits in its own card with large tap targets for yes and no."],
      ["Say what happens next", "Every end state, like a saved case or a locked wallet, tells people the next step."]
    ]
  },

  outcome: {
    delivered: [
      { t: "Website", p: "Public face of the project and entry to the clinic dashboard." },
      { t: "App design", p: "Doctor app and the restricted patient flow." },
      { t: "Clinic dashboard", p: "Verification, doctor boards, sample review and payouts." }
    ],
    iterations: ["Simplified patient interactions", "Added scan readiness checks", "Improved confirmation feedback", "Reduced overall cognitive load"],
    measure: [
      ["First attempt scan acceptance", "Share of cases whose images pass review without a retake"],
      ["Retakes per case", "Whether the readiness check and overlay actually prevent bad images"],
      ["Time to case created", "From add patient to confirmation, per case in a camp"],
      ["Doctor review time", "Minutes per sample with and without AI cues"],
      ["Follow up attendance", "Share of flagged patients who join a consultation"]
    ]
  },

  learnings: [
    ["In healthcare, restraint is a feature", "The most important design work was deciding what the patient should not see, and what the AI should not decide."],
    ["Fix quality at the source", "A check before the camera costs a few seconds. A bad image found later costs a patient who has already gone home."],
    ["Incentives are interface", "How doctors get paid shapes the images they take. The terms screen is as much design as the scan screen."],
    ["Design the roles before the screens", "The role matrix settled arguments that wireframes could not. Once roles were clear, most screens followed."]
  ]
};
