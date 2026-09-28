/* Oncarea case study content.
   Project facts come from the Oncarea Figma deck (research, personas, architecture,
   feature flows, style and screens). Outside facts carry a source id that points to
   `sources` at the bottom. Nothing here is a measured Oncarea result. */
window.ONCAREA = {
  meta: [
    ["Project", "Oncarea, a cancer care ecosystem"],
    ["Programme", "Chanakya UG Fellowship 2023"],
    ["Host", "iHub Divya Sampark, IIT Roorkee"],
    ["My role", "Interaction Designer and Research Lead"],
    ["Duration", "24 weeks"],
    ["Type", "Fellowship research, UX research and design"],
    ["Research", "4 doctors, 10 rural patients, 18+ articles, 12+ companies"],
    ["Delivered", "Website, doctor and patient app, clinic dashboard"],
    ["Skills", "User research, user mapping, wireframing, prototyping, usability testing, responsive design"]
  ],

  /* The world Oncarea was designed for. Every number has a source. */
  context: [
    { n: "70%", t: "of oral cancer patients in an Indian study were already at an advanced stage when diagnosed", src: 2 },
    { n: "80 to 90%", t: "five year survival when found early, against 50 to 60% when found late", src: 3 },
    { n: "24.6%", t: "of rural Indian adults use smokeless tobacco like gutka and khaini, against 15.2% in cities", src: 4 },
    { n: "79.5%", t: "shortfall of specialists at rural community health centres in India", src: 5 }
  ],

  /* The four places screening breaks (from the research) */
  breaks: [
    { k: "001", t: "Capture", p: "Phone cameras, dim rooms and no guidance on angle. Poor image quality was the biggest barrier doctors named.", icon: "capture" },
    { k: "002", t: "Context", p: "A lesion means little without habits, symptoms and history. Doctors said they cannot judge an isolated picture.", icon: "context" },
    { k: "003", t: "Review", p: "Fully automated diagnosis asks a doctor to sign off on something they did not see. The doctors we met did not trust it.", icon: "review" },
    { k: "004", t: "Result", p: "A raw report on a phone, with no doctor beside it, frightens more than it helps. Patients asked for guidance.", icon: "result" }
  ],

  numbers: [
    { n: "4", t: "Semi structured interviews with doctors" },
    { n: "10", t: "Interviews with patients from rural regions" },
    { n: "18+", t: "Articles and earlier survey insights" },
    { n: "12+", t: "Companies in the same domain" }
  ],

  methods: [
    { k: "1.0", t: "Industry analysis", p: "12+ companies in oral screening and telehealth: what they automate, who sees the result, how images are captured." },
    { k: "2.0", t: "Desk research", p: "18+ articles and earlier surveys on rural oral cancer screening, outreach camps and tobacco use." },
    { k: "3.0", t: "Doctor interviews", p: "4 semi structured interviews on clinical workflow, image quality, liability and what AI may and may not do." },
    { k: "4.0", t: "Patient interviews", p: "10 semi structured interviews with people from rural regions on trust, fear and what makes a tool feel safe." }
  ],

  questions: [
    { who: "Doctors", q: "How critical is the broader medical context, like patient history, versus just an image of a lesion?" },
    { who: "Doctors", q: "What are the primary barriers you face when you screen for oral cancer in the field?" },
    { who: "Doctors", q: "What information or disclaimers would you need to feel legally and professionally secure using AI?" },
    { who: "Patients", q: "What would make you feel safer using a digital tool for something as sensitive as cancer screening?" },
    { who: "Patients", q: "Would a preliminary report in an app make you feel more empowered, or more anxious?" }
  ],

  insights: [
    { t: "Poor image quality is the biggest screening barrier", to: "Readiness checks and a guided scan come before anything else" },
    { t: "Medical context is essential for interpretation", to: "Habits, symptoms and notes travel with every image" },
    { t: "Doctors do not trust fully automated diagnosis", to: "AI only assists. The doctor makes the call" },
    { t: "Patients prefer guidance, not medical conclusions", to: "Patients never see raw reports or AI output" }
  ],

  personas: [
    {
      n: "01", name: "Dr. Arya", role: "Screening specialist, 42",
      says: "I need full patient context, not just isolated images, to assess accurately.",
      about: "Wants to screen early and efficiently without lowering medical standards, and to keep full clinical authority over the final diagnosis.",
      map: [["Thinks", "AI should support my judgment."], ["Feels", "Secure only with legal safeguards."], ["Does", "Screens, reviews with AI assistance, decides."]],
      pain: ["Distrusts fully automated systems", "Poor image quality", "Time intensive workflows"],
      needs: ["AI strictly as decision support", "A structured way to capture history and context"]
    },
    {
      n: "02", name: "Rohan", role: "Outreach patient, 27",
      says: "Guide me to a doctor instead of showing frightening AI results.",
      about: "Attends a community outreach screening camp. In a human in the loop system his role is to give good data for a doctor to review.",
      map: [["Thinks", "Is this image clear enough for the doctor?"], ["Feels", "Calm without access to diagnoses."], ["Does", "Follows guided overlays and capture checks."]],
      pain: ["Fear of self diagnosis", "Anxiety from medical data", "Difficulty capturing clear images"],
      needs: ["Guided overlays and readiness checks", "Assurance that a doctor verifies his data"]
    }
  ],

  /* What changes: statement list with a screen for each */
  shifts: [
    { t: "Doctor led.", from: "AI tells the patient what it sees", p: "The AI assists the doctor, who decides and carries the responsibility.", img: "d_home" },
    { t: "Guided capture.", from: "Take any photo and upload it", p: "Camera, lighting, overlay and angles are checked before a case exists.", img: "p_scan" },
    { t: "Context first.", from: "An image on its own", p: "Every image travels with habits, symptoms and notes.", img: "p_habits" },
    { t: "Calm results.", from: "The patient opens a raw report", p: "Guidance and a next step from a doctor, never a diagnosis on a phone.", img: "p_added" },
    { t: "Clear roles.", from: "One app for everyone", p: "Doctor, patient, AI and clinic each see only what they need to act.", img: "p_list" }
  ],

  architecture: [
    { k: "01", t: "Capture and quality check", items: ["Clinical image capture", "Realtime AI scan check", "Error prevention", "Submission processing"] },
    { k: "02", t: "Clinical context", items: ["Medical history", "Structured screening questions", "Sync to dashboard"] },
    { k: "03", t: "AI assisted review", items: ["Image pattern assistance", "Decision support", "Final clinical decision", "Doctor's responsibility"] },
    { k: "04", t: "Results and guidance", items: ["Restricted raw reports", "Prevents patient anxiety", "Personalised care advice", "Education"] },
    { k: "05", t: "Consultation and follow up", items: ["Appointments and availability", "Video consultation", "Direct contact with the doctor"] }
  ],
  principles: ["Human in the loop", "Clear role separation", "Doctor as primary decision maker"],

  /* Role rules: action, the reason, who */
  roles: [
    ["Add a patient and record history", "Context is captured by the person who can interpret it", "Doctor"],
    ["Capture oral images", "Patient follows the overlay, doctor supervises", "Patient + Doctor"],
    ["Check image quality in real time", "Catch a bad image while the patient is still there", "AI"],
    ["Point out patterns in an image", "Decision support only, shown to the doctor", "AI, to doctor"],
    ["Make the clinical decision", "Telemedicine Practice Guidelines 2020: AI may only aid the practitioner", "Doctor only", 6],
    ["Open the raw report", "Patients see guidance, not raw output", "Doctor, Clinic"],
    ["Receive care guidance", "Written after a human decision", "Patient"],
    ["Verify doctors and samples", "Quality and identity checked before payouts", "Clinic"]
  ],

  deliveries: [
    { k: "001", t: "Doctor app", p: "Onboarding, patient management, guided screening, appointments, availability and wallet." },
    { k: "002", t: "Patient flow", p: "A restricted, guided capture flow. No diagnosis, no raw report, a clear confirmation." },
    { k: "003", t: "Clinic dashboard", p: "Doctor and sample verification, doctor boards, sample review and coin payouts." },
    { k: "004", t: "Website", p: "The public face of the project and the way into the dashboard." }
  ],

  ia: {
    root: { t: "Oncarea doctor app", s: "Bottom navigation, four tabs" },
    cols: [
      { t: "Home", s: "Today at a glance", items: ["Next session", "Patient totals", "Add patient", "Availability nudge"] },
      { t: "Appointments", s: "By date", items: ["Upcoming", "Pending", "Cancelled", "Completed"] },
      { t: "Availability", s: "Weekly", items: ["Day toggles", "Time windows", "Add more hours"] },
      { t: "Menu", s: "Account", items: ["Wallet", "Profile settings", "Terms and conditions", "Support", "Log out"] }
    ],
    deep: ["Patient list", "Patient details, 3 steps", "Scan readiness", "Guided scan", "Case created", "Patient report"]
  },

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

  flows: [
    { id: "screen", label: "Screen a patient", who: "Doctor with patient, on site",
      steps: ["Add patient", "Habits", "Symptoms", "Notes", "Camera check", "Guided scan", "Case created"],
      note: "Context comes before the camera so it is never forgotten after the patient leaves. The camera check sits right before the scan, when the phone and light are already in place." },
    { id: "onboard", label: "Join as a doctor", who: "Doctor, first launch",
      steps: ["Continue with Google", "Read terms", "Upload medical ID, optional", "Accept", "Home"],
      note: "A doctor at a camp should be able to help someone that day. Terms are accepted first; the ID is verified later and payouts stay locked until it is." },
    { id: "review", label: "Review a case", who: "Doctor, on the dashboard",
      steps: ["New sample", "AI quality and pattern cues", "Doctor review", "Final decision", "Guidance to patient"],
      note: "The AI speaks only to the doctor. What reaches the patient is guidance and a next step, written after a human decision." },
    { id: "follow", label: "Follow up", who: "Doctor and patient",
      steps: ["Set availability", "Appointment request", "Accept or reschedule", "Join video session", "Completed"],
      note: "Availability is set once as weekly windows, so every request lands in a slot the doctor already chose." }
  ],

  /* Design decisions. Each answers: what was the call, why, and why this way. */
  decisions: [
    {
      id: "d1", short: "Doctor led screening", title: "The doctor starts every case",
      call: "Doctors kept coming back to the same point: they would not stand behind a diagnosis they did not make. Patients told us they did not want one from an app either.",
      facts: [
        ["India's Telemedicine Practice Guidelines (2020) say AI platforms cannot counsel patients or prescribe. They may only aid the registered practitioner, who gives the final advice.", 6],
        ["Field programmes that work already split the job: frontline workers capture images with a phone, and a specialist diagnoses remotely. One such programme screened 5,025 people this way.", 9]
      ],
      options: [
        ["A self screening app for patients", "Rejected. It puts a medical conclusion in the patient's hands, which patients feared and the guidelines forbid for AI."],
        ["A shared app for doctor and patient", "Rejected. Two roles in one interface blurs who is responsible for the case."],
        ["The case lives in the doctor's app", "Chosen. The doctor adds the patient, records context and supervises the scan. The patient never navigates alone."]
      ],
      screens: ["d_home", "p_list", "p_details"],
      caption: "Home, patient list and the first of three patient steps",
      trade: "Patients cannot self screen at home, so reach depends on camps and doctors. We chose accountability over scale."
    },
    {
      id: "d2", short: "Context first", title: "Context before the camera",
      call: "Research showed medical context is essential for interpretation. Dr. Arya's persona puts it plainly: I need full patient context, not just isolated images.",
      facts: [
        ["When clinicians diagnosed oral lesions from smartphone photos alone, they matched the in person diagnosis in 76% of cases. One in four was off without more information.", 11],
        ["Tobacco is the biggest risk signal: 24.6% of rural adults use smokeless tobacco. The survey names the products people actually use, like gutka, khaini and beedi.", 4],
        ["Mouth opening measured by finger breadth is a recognised screening measure that non specialist staff can take, useful where trained personnel are scarce.", 14]
      ],
      options: [
        ["Free text notes only", "Rejected. Answers differ from doctor to doctor and cannot be compared across cases."],
        ["A full clinical intake form", "Rejected. Too long for a camp queue, and the doctor stops filling it after the tenth patient."],
        ["Three short steps with checkboxes and yes or no", "Chosen. Habits in the words patients use, two clinical checks, free notes, and one visible progress bar."]
      ],
      screens: ["p_habits", "p_notes", "p_report"],
      caption: "Habits and symptoms, extra notes, and the report that carries them",
      trade: "More steps before the scan. Three short screens with a progress bar keep the effort visible and bounded."
    },
    {
      id: "d3", short: "Scan readiness", title: "Check the camera before the scan",
      call: "Poor image quality was the barrier doctors named first. A blurry photo found days later means a patient who has already gone home.",
      facts: [
        ["Researchers building mobile oral imaging recommend a quality check at the moment of capture, so the user can retake the image while it still matters.", 10],
        ["Outreach screening camps typically run for only 3 to 5 days in a village, so there is rarely a second chance to photograph the same person.", 12]
      ],
      options: [
        ["Check quality after upload", "Rejected. By the time anyone looks, the camp has moved on."],
        ["Let the AI clean up bad images", "Rejected. No model can recover detail that was never captured."],
        ["A readiness gate plus a realtime check", "Chosen. One screen asks for an 8MP camera and proper lighting, then the AI checks each frame during the scan."]
      ],
      screens: ["p_camera", "p_scan"],
      caption: "Readiness check, then the live scan",
      trade: "One extra screen on every case. Much cheaper than a sample nobody can read."
    },
    {
      id: "d4", short: "Guided oral scan", title: "An overlay that shows where to look",
      call: "Rohan's persona question sums up what patients told us: Is this image clear enough for the doctor to use? People do not know what a useful oral image looks like.",
      facts: [
        ["Field programmes photograph several sites of the mouth for each person: 32,128 images for 5,025 people, about six each. Coverage matters as much as sharpness.", 9],
        ["Even a trained eye misses from photos: telediagnosis from smartphone images matched the in person diagnosis in 76% of cases, so every missing angle costs accuracy.", 11]
      ],
      options: [
        ["Written instructions before the camera opens", "Rejected. Literacy varies, and nobody rereads instructions mid capture."],
        ["Record a video instead of photos", "Rejected. Heavy uploads on rural networks and harder for a doctor to review."],
        ["A mouth overlay with a coverage strip", "Chosen. The overlay frames every capture the same way; thumbnails show which angles are done."]
      ],
      screens: ["p_scan_guide", "p_scan"],
      caption: "The overlay on its own, and over a live camera",
      trade: "A fixed overlay cannot fit every mouth. Multiple angles cover what one frame misses."
    },
    {
      id: "d5", short: "No diagnosis on the phone", title: "The patient never sees a diagnosis",
      call: "Patients were clear: a raw report on a phone made them anxious, not empowered. Guide me to a doctor instead of showing frightening results.",
      facts: [
        ["In a 2023 study of patients reading test results online, those who saw abnormal results before speaking to a clinician reported more worry.", 8],
        ["The Telemedicine Practice Guidelines (2020) do not allow AI to counsel patients directly.", 6]
      ],
      options: [
        ["Show AI results with a disclaimer", "Rejected. A disclaimer does not undo the fear of the word cancer on a screen."],
        ["Show results after a delay", "Rejected. Waiting for a number is its own anxiety, and the result still arrives alone."],
        ["Guidance after a doctor's review", "Chosen. The flow ends with a calm confirmation, and the next thing a patient hears comes from a person."]
      ],
      screens: ["p_added"],
      split: {
        yes: ["Guided capture with an overlay", "Readiness checks", "A clear confirmation", "Care advice from a doctor", "Educational resources"],
        no: ["AI output", "Raw reports", "Risk scores", "A diagnosis without a doctor"]
      },
      caption: "The confirmation that ends the patient flow",
      trade: "Less transparency in the moment. We chose calm and a human conversation over instant data."
    },
    {
      id: "d6", short: "Human in the loop AI", title: "AI as a second opinion, not the verdict",
      call: "Doctors asked what disclaimers they would need to feel legally safe. The honest answer was a system where the AI never makes the decision.",
      facts: [
        ["A phone based AI in a large Indian field study found suspicious lesions with 82% sensitivity, 87% in the cloud. Strong, but it still misses more than one in eight.", 9],
        ["A systematic review of clinical decision support found automation bias is consistent: people over rely on automated advice and accept wrong answers.", 7],
        ["The same review found bias drops when advice is presented so clinicians can judge its correctness themselves.", 7]
      ],
      options: [
        ["AI triage that sorts cases automatically", "Rejected. Invites the over reliance the evidence warns about, and doctors would not sign off on it."],
        ["No AI at all", "Rejected. Loses the realtime quality check and the pattern cues that save doctors time."],
        ["AI cues on the sample, doctor decides", "Chosen. Quality and pattern hints sit beside the image on the dashboard; the decision and the responsibility stay with the doctor."]
      ],
      web: ["web_doctor_dash", "web_samples"],
      caption: "Doctor dashboard and sample review on the web",
      trade: "Slower than automatic triage. Doctors only use what they can stand behind."
    },
    {
      id: "d7", short: "Trust first onboarding", title: "Terms first, paperwork later",
      call: "Doctors who join at a camp want to help someone that day. Blocking the app until a medical ID is checked would lose them, and there are few to lose.",
      facts: [
        ["Rural India has a 79.5% shortfall of specialists at community health centres. Every doctor who drops out of onboarding is hard to replace.", 5],
        ["India's Digital Personal Data Protection Act (2023) makes consent valid only when it follows a clear notice of what data is collected and why.", 15]
      ],
      options: [
        ["Verify the medical ID before any use", "Rejected. Days of waiting at the exact moment a doctor is most willing."],
        ["Skip terms to make sign up faster", "Rejected. Leaves the doctor and the project exposed on patient privacy."],
        ["Google sign in, plain terms, ID later", "Chosen. Three lines of responsibilities, Continue disabled until accepted, ID optional and verified by the clinic."]
      ],
      screens: ["s_login", "s_terms", "s_terms_ok"],
      caption: "Sign in, terms not yet accepted, terms accepted",
      trade: "Unverified doctors can start screening. Payouts stay locked until the clinic verifies them."
    },
    {
      id: "d8", short: "Pay for quality", title: "Pay for good images, not many images",
      call: "If doctors are paid per upload, the system rewards volume: blurry photos and the same patient twice. We had to pay for the thing we actually needed.",
      facts: [
        ["Remote screening only works if a specialist can read the images: the large field study counted success as the share of people who got a telediagnosis from their photos, 4,728 of 5,025.", 9],
        ["A sample that cannot be read means finding the patient again, and in one rural camp study only 22% of people with lesions reached the referral hospital.", 12]
      ],
      options: [
        ["Pay per upload", "Rejected. Rewards volume, not usable images."],
        ["A flat stipend", "Rejected. No signal at all about quality."],
        ["Coins after quality inspection", "Chosen. Paid only for images that pass inspection, no duplicate patients, withdrawals locked until onboarding is complete."]
      ],
      screens: ["d_wallet", "d_menu"],
      web: ["web_admin"],
      caption: "Wallet, menu, and the clinic view of verified samples and doctors",
      trade: "Delayed rewards can put doctors off. The wallet says why, instead of just greying out a button."
    },
    {
      id: "d9", short: "Follow up", title: "Follow up without a second trip",
      call: "A camp is one day. Whether early detection turns into care depends on what happens after the camp leaves.",
      facts: [
        ["In a rural Indian camp study, only 22% of people found with oral lesions reached the referral hospital. 78% did not go.", 12],
        ["The same study found camps of 3 to 5 days are too short to build the confidence people need to follow through.", 12],
        ["In a study of underserved patients screened for oral cancer risk in the US, 83% kept a telehealth specialist referral against 30% for in person.", 13]
      ],
      options: [
        ["A referral slip to a distant hospital", "Rejected. This is the status quo that loses most patients."],
        ["Ad hoc phone calls", "Rejected. Nothing is scheduled, nothing is tracked."],
        ["Weekly availability and video sessions", "Chosen. Doctors set weekly windows once; patients book into them and join a video session from the same card."]
      ],
      screens: ["d_appts", "d_avail", "o_2"],
      caption: "Appointments by status, weekly availability, and video meets in onboarding",
      trade: "Video needs a stable connection, which rural areas do not always have. Rescheduling is one tap for that reason."
    }
  ],

  screenGroups: [
    { t: "Onboarding", s: ["s_splash", "s_login", "o_1", "o_2", "o_3", "s_terms_ok"] },
    { t: "Home utility", s: ["d_home", "d_appts", "d_avail", "d_menu", "d_wallet", "d_profile"] },
    { t: "Screening", s: ["p_list", "p_details", "p_habits", "p_notes", "p_camera", "p_scan"] },
    { t: "Completion", s: ["p_scan_guide", "p_added", "p_report"] }
  ],
  web: [
    { img: "web_admin", url: "Oncarea · Clinic admin", t: "Clinic overview: samples and doctors verified" },
    { img: "web_doctors", url: "Oncarea · Doctors", t: "Doctors list and doctor boards" },
    { img: "web_doctor_dash", url: "Oncarea · Doctor dashboard", t: "Doctor dashboard with samples and coins" },
    { img: "web_samples", url: "Oncarea · Samples", t: "Image sample review" }
  ],

  style: {
    primary: [["100", "#6C63FF"], ["80", "#8982FF"], ["60", "#A7A1FF"], ["40", "#C4C1FF"], ["20", "#E2E0FF"]],
    neutral: [["100", "#333333"], ["90", "#474747"], ["80", "#5C5C5C"], ["70", "#707070"], ["60", "#858585"], ["50", "#999999"], ["40", "#ADADAD"], ["30", "#C2C2C2"], ["20", "#D6D6D6"], ["10", "#EBEBEB"]],
    semantic: [["Success", "#21B619", "Completed, verified"], ["Warning", "#FFCC00", "Needs attention soon"], ["Error", "#FF7171", "Cancelled, blocking alerts"], ["Info", "#0D8CE9", "Neutral system messages"]],
    type: [["Extra bold", 800, 48, "Oncarea"], ["Bold", 700, 36, "Patient report"], ["Semibold", 600, 24, "Your balance"], ["Medium", 500, 20, "Patient details added"], ["Regular", 400, 16, "Ensure your camera is 8MP and proper lighting"], ["Light", 300, 16, "Patient details have been saved. You can view them in the patient list."]],
    rules: [
      ["1.0", "Purple means act", "Primary actions only: Next, Continue, Join session, Accept. Never decoration."],
      ["2.0", "Coral means stop", "Cancelled states and blocking alerts, like availability not set or rewards locked."],
      ["3.0", "One question per card", "Each clinical question sits in its own card with large tap targets for yes and no."],
      ["4.0", "Say what happens next", "Every end state, like a saved case or a locked wallet, tells people the next step."]
    ]
  },

  outcome: {
    rows: [
      { n: "01", k: "Delivered", t: "Website, doctor and patient app, clinic dashboard" },
      { n: "02", k: "Recognition", t: "Completed under the Chanakya UG Fellowship 2023", big: "24", unit: "weeks", p: "iHub Divya Sampark, IIT Roorkee. Project certificate cum letter of recommendation." },
      { n: "03", k: "Iterations", t: "Simpler patient interactions, readiness checks, clearer confirmations, less cognitive load" }
    ],
    measure: [
      ["First attempt acceptance", "Share of cases whose images pass review without a retake", "D.03 D.04"],
      ["Retakes per case", "Whether the readiness check and overlay prevent bad images", "D.03"],
      ["Time to case created", "From add patient to confirmation, per case in a camp", "D.02"],
      ["Doctor review time", "Minutes per sample with and without AI cues", "D.06"],
      ["Follow up attendance", "Share of flagged patients who join a consultation", "D.09"]
    ]
  },

  faq: [
    ["Why not let the AI diagnose? It would scale faster.", "Because the evidence and the law point the same way. The best field AI still missed more than one in eight suspicious lesions, people over rely on automated advice, and India's telemedicine guidelines only allow AI to aid a registered practitioner. Scale without trust would not have been used by the doctors we met."],
    ["Doesn't hiding results from patients take away their autonomy?", "Patients keep the choice to see a doctor and ask anything. What they do not get is an unexplained machine output. Patients themselves asked for guidance over conclusions, and research on online test results shows abnormal results seen alone increase worry."],
    ["Was this tested with real users?", "Designs were iterated through testing and feedback with doctors to match clinical practice. The project ended at design, not a field rollout, so I have no field metrics. The pilot metrics I would track are listed above, each tied to a decision."],
    ["Why a dark interface for the app?", "It keeps the camera preview and the single purple action as the brightest things on the screen, so attention goes where the task is. It is a choice I would validate in a pilot."],
    ["What would you do differently?", "Bring a health worker persona in earlier. Much of the capture in real programmes is done by frontline workers, and designing for them first would have sharpened the scan flow."]
  ],

  learnings: [
    ["1.0", "In healthcare, restraint is a feature", "The most important work was deciding what the patient should not see, and what the AI should not decide."],
    ["2.0", "Fix quality at the source", "A check before the camera costs a few seconds. A bad image found later costs a patient who has already gone home."],
    ["3.0", "Incentives are interface", "How doctors get paid shapes the images they take. The terms screen is as much design as the scan screen."],
    ["4.0", "Design the roles before the screens", "The role rules settled arguments wireframes could not. Once roles were clear, most screens followed."]
  ],

  sources: [
    null,
    ["World Cancer Research Fund: mouth and oral cancer statistics, 2022", "https://www.wcrf.org/preventing-cancer/cancer-statistics/mouth-and-oral-cancer-statistics/"],
    ["Delay in the diagnosis of oral cancer in India, Indian Journal of Cancer, prospective observational study", "https://www.ovid.com/jnls/indianjcancer/fulltext/10.4103/ijc.ijc_44_22~delay-in-the-diagnosis-of-oral-cancer-in-india-time-to-focus"],
    ["Locally advanced oral squamous cell carcinomas: auditing and outcome appraisal", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10937854/"],
    ["Global Adult Tobacco Survey India, second round, 2016 to 2017 (GATS 2)", "https://ntcp.mohfw.gov.in/assets/document/surveys-reports-publications/Global-Adult-Tobacco-Survey-Second-Round-India-2016-2017.pdf"],
    ["Rural Health Statistics 2021 to 22, Ministry of Health and Family Welfare, as reported by ETV Bharat", "https://www.etvbharat.com/english/sukhibhava/sukhibhava-news/indias-rural-health-sector-facing-shortage-of-specialists-union-health-ministry-report/na20230113104327913913549"],
    ["Telemedicine Practice Guidelines 2020, India: FAQ by PSA Legal", "https://www.psalegal.com/telemedicine-guidelines-2020-faq/"],
    ["Goddard, Roudsari and Wyatt: Automation bias, a systematic review of frequency, effect mediators and mitigators (2012)", "https://pubmed.ncbi.nlm.nih.gov/21685142/"],
    ["Steitz et al.: Perspectives of patients about immediate access to test results through an online patient portal, JAMA Network Open (2023)", "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2802672"],
    ["Field validation of a deep learning point of care device for early detection of oral malignant and potentially malignant disorders, Scientific Reports (2022)", "https://www.nature.com/articles/s41598-022-18249-x"],
    ["Development and evaluation of an automated multimodal mobile detection of oral cancer imaging system", "https://pmc.ncbi.nlm.nih.gov/articles/PMC11959271/"],
    ["Telediagnosis of oral lesions using smartphone photography (2021)", "https://pubmed.ncbi.nlm.nih.gov/34289201/"],
    ["Reasons for non compliance of patients to attend referral hospital after screening for oral pre cancer lesions through camp approach in rural India", "https://pubmed.ncbi.nlm.nih.gov/24349853/"],
    ["Compliance with specialist referral for increased cancer risk in low resource settings: in person vs telehealth, Cancers (2023)", "https://doi.org/10.3390/cancers15102775"],
    ["Establishing a normal range for mouth opening: its use in screening for oral submucous fibrosis", "https://www.sciencedirect.com/science/article/abs/pii/S0266435697900073"],
    ["The Digital Personal Data Protection Act, 2023, Government of India", "https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf"]
  ]
};
