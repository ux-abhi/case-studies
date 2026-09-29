/* BNZ case study content.
   Screens, brief and navigation come from the BNZ Figma file (current dashboard analysis,
   redesigned desktop and mobile screens, components). Contrast ratios were measured from
   those screens. Outside facts carry a source id that points to `sources`. */
window.BNZ = {
  meta: [
    ["Product", "BNZ carbon marketplace, buyer and seller dashboard"],
    ["Brief", "Order management, invoices and transaction history"],
    ["Users", "Buyers and sellers of carbon credits and I-RECs"],
    ["My role", "Product designer: audit, information architecture, UI, components"],
    ["Scope", "10 existing screens audited, 5 desktop and 2 mobile screens redesigned"],
    ["Deliverables", "Redesigned screens, component set, mobile patterns"]
  ],

  stats: [
    { n: "10", t: "screens of the existing dashboard audited, one by one" },
    { n: "3", t: "states every order must show at a glance: pending, completed, settled" }
  ],

  market: [
    { n: "$723M", t: "value of the voluntary carbon market in 2023, down 61% in a year as buyers questioned credit quality", src: 1 },
    { n: "1 MWh", t: "of renewable electricity stands behind every single I-REC, the certificate traded next to credits", src: 3 },
    { n: "29%", t: "further drop in traded value in 2024, as buyers moved toward credits with verifiable benefits", src: 2 }
  ],

  brief: [
    { k: "01", t: "Order management", items: [
      ["Buyers", "View placed orders, track their status and open detailed order information."],
      ["Sellers", "See their transactions, including a credit settlement area to settle trades."]
    ] },
    { k: "02", t: "Invoices and transactions", items: [
      ["Both", "View invoices and transaction history in a place that is easy to reach and navigate."],
      ["Both", "Clearly distinguish pending, completed and settled transactions."]
    ] }
  ],

  /* Audit hotspots on the old Order Settlement screen (percent of image) */
  audit: [
    { x: 61, y: 15, t: "The title floats in the centre", p: "Page title sits far from the actions it controls. Eyes jump across the page before anything happens." },
    { x: 65, y: 21, t: "Green means five things", p: "Export, invoice, view items, active menu and paid status all use the same green. None of them stands out." },
    { x: 77, y: 21, t: "No way to see only pending orders", p: "Search, filter and sort, but no status tabs. The brief's main question needs three clicks." },
    { x: 37, y: 32, t: "A heavy blue header", p: "White text on #6B88B0 measures 3.64:1, below the 4.5:1 WCAG asks for normal text." },
    { x: 68, y: 37, t: "Loud status blocks", p: "Initiated and Paid use white text on saturated fills: 2.44:1 and 2.40:1. Status is the loudest thing and the hardest to read." },
    { x: 49, y: 27, t: "A key rule hidden in a line of red", p: "Settlement within T+2 days is the most useful sentence on the page, styled like an error." },
    { x: 51, y: 53, t: "Grey table inside grey table", p: "Expanded items have the same weight as the order around them. It is hard to tell where the order ends." },
    { x: 8, y: 72, t: "Work and utilities mixed", p: "Profile and Help sit in the same list as Portfolio and Settlements, at the same size." }
  ],

  principles: [
    { t: "Status first", p: "Every row answers one question before anything else: where is my order?", img: "0% 70%" },
    { t: "One green, one meaning", p: "Green is the single primary action and success. Everything else steps back.", img: "60% 40%" },
    { t: "Detail on demand", p: "Orders stay compact until you ask. Items open in place, without losing your spot.", img: "90% 85%" }
  ],

  decisions: [
    {
      id: "d1", short: "Status tabs", title: "Filter by status in one tap",
      call: "The brief asks to clearly distinguish pending, completed and settled transactions. In the old dashboard that answer was hidden behind a filter menu.",
      facts: [
        ["Recognition rather than recall: making options visible reduces the memory load of finding them in a menu.", 4],
        ["The brief names status as the thing buyers and sellers need to track.", 0]
      ],
      options: [
        ["Keep filter, search and sort only", "Rejected. The most common question stays three clicks deep."],
        ["A separate page per status", "Rejected. Splits one list into four places to check."],
        ["Tabs above the table", "Chosen. All, Initiated, Completed and Refunded on orders; Buy, Sale and Others on billing; Market, Bank and Registry on transactions."]
      ],
      img: "n_order", caption: "Order Settlement with status tabs, search and one primary action",
      trade: "Tabs cover the common states only. Rare combinations still need the filter."
    },
    {
      id: "d2", short: "Readable status", title: "Status you can read, not just see",
      call: "The old chips were the loudest things on the page and the hardest to read: white text on saturated orange and green measured about 2.4:1.",
      facts: [
        ["Visibility of system status is the first usability heuristic: people should always know what is going on.", 4],
        ["WCAG asks for at least 4.5:1 contrast for normal text.", 5],
        ["WCAG also asks that colour is not the only way information is shown.", 6]
      ],
      options: [
        ["Keep filled colour blocks", "Rejected. Loud, low contrast, and they compete with actions."],
        ["Icons only", "Rejected. Needs a legend and fails people who cannot tell the colours apart."],
        ["Soft chip with a dot and a word", "Chosen. Tinted background, coloured dot, plain label: Paid, Initiated, Rejected and Refunded."]
      ],
      img: "n_order_open", caption: "Paid, Initiated and Rejected chips, and delivery status written as words",
      trade: "Honest note: the new chip text still measures 2.6 to 3.6:1. The live components below use darker text that passes 4.5:1."
    },
    {
      id: "d3", short: "One green", title: "One green, one meaning",
      call: "In the old dashboard, green meant export, invoice, view items, the active menu and paid. When everything is green, nothing is.",
      facts: [
        ["Consistency and standards: the same visual signal should mean the same thing everywhere.", 4]
      ],
      options: [
        ["Keep green on every action", "Rejected. No hierarchy between download and view."],
        ["Different colour per action", "Rejected. More colours to learn, more noise."],
        ["Green for the one primary action and for success", "Chosen. Download .CSV is the only filled button. View items is text with a chevron; invoices are a single icon."]
      ],
      img: "n_billing", caption: "Billing: one filled action, quiet row actions",
      trade: "Less brand green on screen. The product feels calmer, and the primary action is easy to find."
    },
    {
      id: "d4", short: "Detail on demand", title: "Items open in place",
      call: "Buyers need to see what is inside an order without losing their place in the list. The old nested table blended into the rows around it.",
      facts: [
        ["Progressive disclosure keeps the first view simple and moves detail to a secondary view on request.", 7]
      ],
      options: [
        ["A new page per order", "Rejected. Loses the list and slows comparing orders."],
        ["A modal", "Rejected. Blocks the page and hides the other orders."],
        ["Expand the row in place", "Chosen. The opened order turns mint, its items sit in a raised card, and View items becomes View less."]
      ],
      img: "n_order_open", caption: "An expanded order with item, project, vintage, price and delivery",
      trade: "Long orders push the list down. Only one order opens at a time."
    },
    {
      id: "d5", short: "Transaction detail", title: "Two cards and a total",
      call: "The old detail page was one long list of labels under decorative icons. The amount a buyer actually paid sat at the bottom, among six tax lines.",
      facts: [
        ["Grouping related information and removing what does not support the task is part of aesthetic and minimalist design.", 4]
      ],
      options: [
        ["Keep one long list", "Rejected. Nothing stands out."],
        ["Tabs for project, log and payment", "Rejected. Hides the link between project and payment."],
        ["Project and transaction side by side", "Chosen. Total amount and tax sit in a highlighted row, and other transactions for the same project follow below."]
      ],
      img: "n_detail", caption: "Project details, transaction details and related transactions",
      trade: "The full tax breakdown (TCS, TDS, platform fee) is no longer in the default view. A next step is an expandable breakdown for finance teams."
    },
    {
      id: "d6", short: "Navigation", title: "Work on top, utilities below",
      call: "Profile and Help sat in the same list as Portfolio and Settlements, and the user's name lived in the top bar.",
      facts: [
        ["Match between system and the real world: grouping follows how people think about their tasks.", 4]
      ],
      options: [
        ["Keep one flat list", "Rejected. Everything competes for attention."],
        ["Move utilities to a top bar menu", "Rejected. Hides notifications and support."],
        ["Split the sidebar", "Chosen. Overview, Portfolio, Settlement, Billing, Retirement and Activity on top; Help, Notifications with badges, Settings, Logout and the user card at the bottom."]
      ],
      img: "n_txn", caption: "Transactions with the grouped sidebar and a nested Activity menu",
      trade: "A taller sidebar. On small laptop screens the bottom group sits close to the fold."
    },
    {
      id: "d7", short: "Page header", title: "Title, help and one action",
      call: "The old title floated in the centre, with export, search, filter and sort scattered on the right.",
      facts: [
        ["Help and documentation should be easy to find and focused on the task.", 4]
      ],
      options: [
        ["Centred title", "Rejected. Far from the actions it controls."],
        ["All actions in a toolbar", "Rejected. Equal weight for unequal actions."],
        ["Left title with a help mark and one primary action", "Chosen. A full width search with a hint, a filter, and a menu for the rest."]
      ],
      img: "n_order", caption: "Header: title, help, Download .CSV, search and filter",
      trade: "Sort moved into the menu. It is used less than search and filter."
    },
    {
      id: "d8", short: "Mobile", title: "Tables become cards on a phone",
      call: "Sellers and buyers check orders on the move. A wide table on a phone means sideways scrolling and missed columns.",
      facts: [
        ["Flexibility and efficiency of use: layouts should fit the context people are in.", 4]
      ],
      options: [
        ["Scroll the table sideways", "Rejected. Status and amount fall off screen."],
        ["A reduced table", "Rejected. Drops the columns people came for."],
        ["One card per order", "Chosen. Order ID on top, fields as label and value, invoice and items as two buttons, and the menu in a drawer."]
      ],
      mobile: ["m_order", "m_nav"], caption: "Order cards and the drawer menu on mobile",
      trade: "Fewer orders per screen. Tabs and search keep the list short."
    }
  ],

  ia: [
    { t: "Overview", s: "Home", items: [] },
    { t: "Portfolio", s: "Holdings", items: [] },
    { t: "Settlement", s: "Settle trades", items: ["Order", "Credit"], hot: true },
    { t: "Billing", s: "Invoices", items: ["Buy", "Sale", "Others"], hot: true },
    { t: "Retirement", s: "Retire credits", items: [] },
    { t: "Activity", s: "History", items: ["Transaction", "Activity log"], hot: true }
  ],
  utilities: ["Help and Support", "Notifications", "Settings", "Logout", "User card"],

  flows: [
    { id: "track", label: "Buyer tracks an order", steps: ["Settlement", "Order", "Initiated tab", "View items", "Delivery date", "Proforma invoice"] },
    { id: "bill", label: "Download an invoice", steps: ["Billing", "Buy tab", "View items", "Invoice icon", "PDF"] },
    { id: "txn", label: "Check a transaction", steps: ["Activity", "Transaction", "Market Txn", "Expand", "Project and transaction detail"] }
  ],

  style: {
    colors: [["Primary", "#0ACF83", "Primary action, success"], ["Ink", "#324054", "Table head, headings"], ["Mint", "#E9FFEF", "Open row, paid chip"], ["Surface", "#F9FAFC", "Sidebar, page"], ["Amber", "#FFF2DD", "Initiated chip"], ["Rose", "#FFDDDD", "Rejected chip"]],
    type: [["Heading", 600, 24, "Order Settlement"], ["Body", 400, 16, "Renewable Energy Solar Plant Project"], ["Table", 400, 14, "Obn..787 · 5/05/24 · $41.6"], ["Hint", 400, 12, "Search for order id, status or etc"]]
  },

  measure: [
    ["Time to find a pending order", "From landing on Settlement to opening an Initiated order", "D.01"],
    ["Status misreads", "Wrong answers when people are asked what state an order is in", "D.02"],
    ["Clicks to an invoice", "From Billing to a downloaded PDF", "D.03"],
    ["Support questions about settlement", "Tickets that ask when credits will arrive", "D.07"]
  ],

  learnings: [
    ["1.0", "Trust is a table problem", "In a market built on proof, the least glamorous screen, the order list, carries most of the trust."],
    ["2.0", "Loud is not clear", "The old statuses shouted and still could not be read. Quiet chips with words did more."],
    ["3.0", "Measure your own work too", "Checking contrast on my own redesign showed the chips still fall short. That is the next fix, not a footnote."],
    ["4.0", "Keep what already works", "The T+2 settlement note, copy buttons on IDs and dual currency stayed. Redesign is not replacement."]
  ],

  sources: [
    null,
    ["Ecosystem Marketplace: State of the Voluntary Carbon Market 2024", "https://www.ecosystemmarketplace.com/publications/2024-state-of-the-voluntary-carbon-markets-sovcm/"],
    ["Carbon Credits: voluntary carbon market in 2024, trading value down 29%", "https://carboncredits.com/vcm-voluntary-carbon-market-makeover-in-2024-carbon-credit-trading-drops-25-removals-soar-381/"],
    ["Ecohz: International Renewable Energy Certificates (I-RECs)", "https://www.ecohz.com/i-recs"],
    ["Nielsen Norman Group: 10 usability heuristics for user interface design", "https://www.nngroup.com/articles/ten-usability-heuristics/"],
    ["W3C WCAG 2.1: Understanding contrast (minimum), 1.4.3", "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"],
    ["W3C WCAG 2.1: Understanding use of color, 1.4.1", "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"],
    ["Nielsen Norman Group: Progressive disclosure", "https://www.nngroup.com/articles/progressive-disclosure/"]
  ]
};
