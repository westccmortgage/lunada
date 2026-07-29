/*
 * ============================================================================
 *  LOAN EDUCATION PAGES — plain-language, bilingual (EN / ZH).
 * ----------------------------------------------------------------------------
 *  These carry the detailed, card-heavy education that used to crowd the
 *  homepage. Each page explains one topic simply: what it means, who it may
 *  apply to, what lenders may review, documents, next step, and a short FAQ.
 *  Every mortgage term is explained in plain language the first time it is used.
 *
 *  Compliance: "may be available", "subject to lender guidelines / underwriting
 *  approval". No rates, no guarantees, no "best/lowest rate", no approval promises.
 * ============================================================================
 */

const P = [
  {
    slug: 'jumbo-loans',
    keywords: 'jumbo loans, Palos Verdes jumbo mortgage, what is a jumbo loan, high-value home financing',
    en: {
      title: 'Jumbo Loans, Explained | Lunada Bay Mortgage',
      description: 'A plain-language guide to jumbo loans: what they are, who they may apply to, what lenders review, and the documents you may need. English and 中文.',
      h1: 'Jumbo Loans, Explained',
      intro: [
        'A “jumbo loan” is simply a mortgage that is larger than the conforming loan limit — the maximum size a loan can be to follow the standard rules used by Fannie Mae and Freddie Mac (the two large agencies that back most home loans). Loans above that limit follow more detailed lender rules instead.',
        'In high-value areas like Lunada Bay and Palos Verdes, many homes sit above the limit, so jumbo financing is common. A jumbo loan is not riskier by nature — it simply involves a closer look at your income, assets, and the property.',
      ],
      meaning: [
        'The conforming limit changes each year and is higher in expensive counties. If your loan amount is above it, you are in “jumbo” territory. That mainly means the review is more detailed and the down payment, reserves, and documentation matter more.',
      ],
      who: [
        'Buyers of higher-value homes where the loan is above the county conforming limit',
        'Move-up buyers, second-home buyers, and refinancing homeowners with larger balances',
        'Borrowers with strong assets whose financing benefits from careful structure',
      ],
      review: [
        'Credit history — how you have managed past obligations',
        'Income documentation — tax returns, W-2s, bank statements, or other records',
        'Assets and reserves — funds for down payment and closing, plus savings left afterward',
        'The property — type, value, and occupancy (primary home, second home, or investment)',
      ],
      documents: [
        'Recent income records for your borrower type (W-2s and pay stubs, or tax returns)',
        'Two or more months of bank and asset statements',
        'Government-issued photo ID',
        'Details on the property and, for a refinance, your current mortgage statement',
      ],
      next: [
        'The clearest first step is a short, private conversation. Start Mortgage Path to answer a few simple questions, or request a private review and a licensed professional will follow up.',
      ],
      faq: [
        { q: 'Do jumbo loans require 20% down?', a: 'Not necessarily. Down payment requirements vary by lender, program, property, and borrower profile. Some scenarios may allow different structures, subject to lender guidelines and underwriting review.' },
        { q: 'Are jumbo rates always higher?', a: 'Not always. Pricing depends on the lender, program, and your profile. We do not quote rates here — the goal is to help you understand structure and options.' },
        { q: 'Can self-employed borrowers get a jumbo loan?', a: 'Yes, they may. The key is presenting income clearly, sometimes using alternative documentation such as bank statement or Non-QM options, subject to lender guidelines.' },
      ],
      related: ['self-employed-mortgage', 'interest-only-jumbo', 'mortgage-documents'],
    },
    zh: {
      title: '大额贷款详解 | Lunada Bay Mortgage',
      description: '用通俗语言讲解大额贷款：它是什么、可能适用于谁、贷款机构审阅哪些方面，以及您可能需要的文件。中英双语。',
      h1: '大额贷款详解',
      intro: [
        '“大额贷款”（Jumbo Loan）就是金额超过合规上限的房贷。合规上限，是指贷款要遵循房利美与房地美（支持大多数房贷的两大机构）标准规则时所能达到的最高额度。超过这一上限的贷款，则遵循更细致的贷款机构规则。',
        '在露娜达湾和帕洛斯弗迪斯这样的高价值地区，许多住宅都超过该上限，因此大额贷款很常见。大额贷款本身并非风险更高——只是需要对您的收入、资产与房产进行更细致的审阅。',
      ],
      meaning: [
        '合规上限每年调整，在高价区县更高。如果您的贷款金额超过它，就进入了“大额”范畴。这主要意味着审阅更细致，首付、储备金与文件也更为重要。',
      ],
      who: [
        '贷款金额超过所在县合规上限的高价值住宅买家',
        '换房买家、第二套住宅买家，以及贷款余额较大的再融资房主',
        '资产状况良好、需要细致结构设计的借款人',
      ],
      review: [
        '信用记录——您对以往债务的管理情况',
        '收入文件——税表、W-2、银行流水或其他记录',
        '资产与储备金——首付与交割资金，以及之后保留的存款',
        '房产——类型、价值与居住性质（自住、第二套或投资）',
      ],
      documents: [
        '与您借款人类型相符的近期收入证明（W-2 与工资单，或税表）',
        '两个月或以上的银行及资产对账单',
        '政府签发的带照片身份证件',
        '房产相关信息；再融资时还需现有贷款月结单',
      ],
      next: [
        '最清晰的第一步是一次简短、私密的沟通。点击“开始了解贷款路径”回答几个简单问题，或预约私人评估，持牌专业人士会与您联系。',
      ],
      faq: [
        { q: '大额贷款必须首付 20% 吗？', a: '不一定。首付要求因贷款机构、项目、房产及借款人情况而异。部分情形在符合机构规定与承保审核的前提下，可能采用不同结构。' },
        { q: '大额贷款的利率一定更高吗？', a: '不一定。定价取决于贷款机构、项目及您的情况。我们不在此报价——目的是帮助您理解结构与选择。' },
        { q: '自雇人士能获得大额贷款吗？', a: '有机会。关键在于清晰呈现收入，有时会采用银行流水或 Non-QM 等替代性文件方式，视机构规定而定。' },
      ],
      related: ['self-employed-mortgage', 'interest-only-jumbo', 'mortgage-documents'],
    },
  },

  {
    slug: 'foreign-national-mortgage',
    keywords: 'foreign national mortgage, foreign buyer financing, non-resident mortgage, international buyer home loan California, foreign national loan Florida, buy property in California and Florida, ITIN mortgage, buy US property as a foreign national, 外国买家房贷',
    en: {
      title: 'Foreign National Financing | Lunada Bay Mortgage',
      description: 'How international buyers may finance a home in California or Florida as a foreign national — often without a U.S. credit score or green card. Guidance in English and 中文.',
      h1: 'Financing for Foreign National Buyers',
      intro: [
        'A “foreign national” loan is a mortgage for a buyer who is not a U.S. citizen or permanent resident — often someone living abroad who wants to own property in the United States. You do not always need a U.S. credit score, a Social Security number, or a green card to be considered.',
        'International buyers are among the most active purchasers in California and Florida — two of the most sought-after U.S. markets. We help qualified foreign nationals finance a home in either state: from coastal Los Angeles near Palos Verdes and the South Bay to a purchase in Florida, subject to lender guidelines and underwriting approval.',
      ],
      meaning: [
        'Instead of relying on a U.S. credit report, lenders offering foreign national programs may review your income and assets from your home country, your source of funds, and international credit reference letters from your bank. In exchange for that flexibility, these programs typically expect a larger down payment and verified reserves.',
      ],
      who: [
        'Non-resident buyers purchasing a second home, vacation home, or investment property',
        'Buyers with no U.S. credit history, SSN, or green card (an ITIN or foreign documentation may be used)',
        'International investors seeking U.S. rental property — sometimes paired with a DSCR loan that qualifies on the property’s rent',
        'Visa holders and non-permanent residents who work or study in the U.S.',
      ],
      review: [
        'Down payment and equity — foreign national programs generally expect more money down',
        'Proof of funds and a clear source of funds for the purchase and reserves',
        'Income documentation from your home country, translated where needed',
        'International credit reference letters from your bank when a U.S. score is not available',
        'The property — its type, value, and how it will be used',
      ],
      documents: [
        'A valid passport, and a visa if you have one',
        'Proof of funds for the down payment, closing, and reserves (bank statements)',
        'Income documentation, which may be foreign and, where needed, translated',
        'Credit reference letters from your bank if you have no U.S. credit score',
        'Details on the property you plan to buy',
      ],
      next: [
        'International purchases benefit from clear guidance from the very start. Request a private review — or use Review My Scenario — and a licensed professional will explain, in English or 中文, what may be possible for your situation, subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'Which states can you help me buy in?', a: 'We work with foreign national buyers purchasing in California and Florida — two of the markets international buyers ask about most. Program availability still depends on the lender, the property, and underwriting.' },
        { q: 'Do I need a U.S. credit score or Social Security number?', a: 'Not always. Some foreign national programs use an ITIN or international credit reference letters from your bank instead of a U.S. credit score, subject to lender guidelines and underwriting review.' },
        { q: 'Can I buy without living in the United States?', a: 'Yes. Many programs allow non-resident foreign nationals to purchase a second home, vacation home, or investment property in the U.S.' },
        { q: 'How much down payment will I need?', a: 'Foreign national programs generally expect a larger down payment than standard loans. The exact amount depends on the lender, program, property, and your profile. We do not quote figures here.' },
        { q: 'Can I finance a rental or investment property?', a: 'Possibly. A foreign national purchase can sometimes be paired with a DSCR loan, which qualifies based on the property’s rental income rather than personal income — subject to guidelines.' },
        { q: 'Is guidance available in Chinese?', a: 'Yes. The entire process can be explained in English and 中文, with each step made clear.' },
      ],
      related: ['dscr-loans', 'jumbo-loans', 'mortgage-documents'],
    },
    zh: {
      title: '外国买家（Foreign National）融资 | Lunada Bay Mortgage',
      description: '海外买家如何作为外国买家（Foreign National）在加州或佛罗里达购房融资——在许多情况下无需美国信用分数或绿卡。提供中英双语指导。',
      h1: '外国买家融资方案',
      intro: [
        '“外国买家（Foreign National）”贷款，是为并非美国公民或永久居民的买家提供的房贷——通常是居住在海外、希望在美国拥有房产的人。在许多情况下，您不一定需要美国信用分数、社会安全号码（SSN）或绿卡。',
        '国际买家是加州与佛罗里达最活跃的购房群体之一——这两地都是最受青睐的美国置业市场。我们可以帮助符合条件的外国买家在这两个州购房融资：从帕洛斯弗迪斯与南湾（South Bay）所在的洛杉矶沿海地区，到佛罗里达的置业，具体视贷款机构规定及承保审批而定。',
      ],
      meaning: [
        '贷款机构在提供外国买家项目时，可能不依赖美国信用报告，而是审阅您在本国的收入与资产、资金来源，以及来自您银行的国际信用参考函。作为这种灵活性的交换，这类项目通常要求更高的首付与经核实的储备金。',
      ],
      who: [
        '购买第二套住宅、度假屋或投资房产的非居民买家',
        '没有美国信用记录、SSN 或绿卡的买家（可使用 ITIN 或外国文件）',
        '寻求美国出租房产的国际投资者——有时可与以房产租金审核资格的 DSCR 贷款结合',
        '在美国工作或学习的签证持有人与非永久居民',
      ],
      review: [
        '首付与净值——外国买家项目通常要求更高的首付',
        '资金证明，以及购房与储备金清晰的资金来源',
        '来自本国的收入文件，必要时附翻译件',
        '当无法提供美国信用分数时，来自您银行的国际信用参考函',
        '房产——其类型、价值及用途',
      ],
      documents: [
        '有效护照；如持有签证，还需签证',
        '首付、交割及储备金的资金证明（银行流水）',
        '收入文件，可能为外国文件，必要时附翻译件',
        '如无美国信用分数，则需银行出具的信用参考函',
        '您计划购买房产的相关信息',
      ],
      next: [
        '国际购房若从一开始就获得清晰的指导，会很有帮助。预约私人评估——或使用“在线预审我的情况”——持牌专业人士会以中文或英文，说明在您的情况下可能可行的方案，具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: '你们可以帮助我在哪些州购房？', a: '我们为在加州与佛罗里达购房的外国买家提供服务——这两地是国际买家询问最多的市场。具体项目能否提供，仍取决于贷款机构、房产与承保。' },
        { q: '我需要美国信用分数或社会安全号码（SSN）吗？', a: '不一定。部分外国买家项目会以 ITIN 或来自您银行的国际信用参考函，替代美国信用分数，具体视机构规定及承保审核而定。' },
        { q: '我可以在不居住于美国的情况下购房吗？', a: '可以。许多项目允许非居民外国买家在美国购买第二套住宅、度假屋或投资房产。' },
        { q: '我需要多少首付？', a: '外国买家项目通常要求高于标准贷款的首付。具体金额取决于贷款机构、项目、房产及您的情况。我们不在此给出具体数字。' },
        { q: '我可以为出租或投资房产融资吗？', a: '有可能。外国买家购房有时可与 DSCR 贷款结合——DSCR 以房产的租金收入（而非个人收入）审核资格，具体视规定而定。' },
        { q: '是否提供中文指导？', a: '提供。整个流程都可以用中英双语讲解，并让每一步都清晰明了。' },
      ],
      related: ['dscr-loans', 'jumbo-loans', 'mortgage-documents'],
    },
  },

  {
    slug: 'self-employed-mortgage',
    keywords: 'self-employed mortgage, business owner home loan, self-employed jumbo, income documentation',
    en: {
      title: 'Self-Employed Mortgage Options | Lunada Bay Mortgage',
      description: 'How self-employed and business-owner borrowers may qualify for a mortgage, what lenders review, and which documents may help. Plain language, English and 中文.',
      h1: 'Self-Employed Mortgage Options',
      intro: [
        'If you are self-employed or own a business, your income is real — it simply may not appear on a single pay stub. Lenders can still review it; the key is presenting it clearly and choosing the documentation path that fits your situation.',
        'That path might be standard tax returns, or an alternative-documentation option such as a bank statement loan (which reviews deposits instead of tax returns). Which one fits depends on your business and lender guidelines.',
      ],
      meaning: [
        'Self-employed simply means you work for yourself — as a sole proprietor, contractor, partner, or business owner — rather than receiving a W-2 from an employer. Lenders often average your income over time and look for consistency.',
      ],
      who: [
        'Sole proprietors, freelancers, and independent contractors',
        'Business owners and partners',
        'Professionals whose tax returns show strong deductions that reduce taxable income',
      ],
      review: [
        'How long you have been self-employed and how stable the income is',
        'Personal and, where relevant, business tax returns',
        'Bank deposits, for bank statement or Non-QM paths',
        'Assets, reserves, and overall credit profile',
      ],
      documents: [
        'Personal tax returns, often two years',
        'Business tax returns and a year-to-date profit and loss statement, if applicable',
        'Recent personal and business bank statements',
        'Business license or equivalent proof of the business',
      ],
      next: [
        'Every self-employed file is different. Start Mortgage Path or request a private review, and we will help present your income the way lenders are prepared to evaluate — subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'What if my tax returns do not show all of my income?', a: 'This is common. Alternative-documentation options such as bank statement loans may review income through business deposits instead of tax returns, subject to lender guidelines and underwriting approval.' },
        { q: 'How long do I need to be self-employed?', a: 'Many programs look for a track record, often around two years, but requirements vary by lender and program.' },
        { q: 'Can I still get a jumbo loan?', a: 'Yes, self-employed borrowers may qualify for jumbo financing. See our Jumbo Loans guide for how the review works.' },
      ],
      related: ['bank-statement-loans', 'non-qm-mortgage', 'jumbo-loans'],
    },
    zh: {
      title: '自雇人士房贷方案 | Lunada Bay Mortgage',
      description: '自雇及企业主借款人如何获批房贷、贷款机构审阅哪些方面，以及哪些文件可能有帮助。通俗语言，中英双语。',
      h1: '自雇人士房贷方案',
      intro: [
        '如果您是自雇人士或企业主，您的收入是真实存在的——只是未必体现在一张工资单上。贷款机构依然可以审阅它；关键在于清晰呈现，并选择适合您情况的文件方式。',
        '这种方式可能是标准税表，也可能是替代性文件方案，例如银行流水贷款（以存款而非税表审阅收入）。具体采用哪一种，取决于您的业务与贷款机构规定。',
      ],
      meaning: [
        '自雇，就是您为自己工作——作为个体经营者、承包商、合伙人或企业主——而非从雇主处领取 W-2。贷款机构通常会将您一段时间的收入取平均，并关注其稳定性。',
      ],
      who: [
        '个体经营者、自由职业者与独立承包商',
        '企业主与合伙人',
        '税表上有较多抵扣、从而降低应税收入的专业人士',
      ],
      review: [
        '您自雇的时间长短，以及收入的稳定程度',
        '个人税表；如相关，还包括企业税表',
        '银行存款（用于银行流水或 Non-QM 方式）',
        '资产、储备金及整体信用状况',
      ],
      documents: [
        '个人税表，通常为两年',
        '企业税表及本年度至今损益表（如适用）',
        '近期个人及企业银行流水',
        '营业执照或同等的业务证明',
      ],
      next: [
        '每一份自雇文件都不同。点击“开始了解贷款路径”或预约私人评估，我们会帮助以贷款机构认可的方式呈现您的收入——具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: '如果我的税表未能体现全部收入怎么办？', a: '这很常见。银行流水贷款等替代性文件方案，可能以企业存款而非税表审阅收入，具体视机构规定及承保审批而定。' },
        { q: '我需要自雇多久？', a: '许多项目希望看到一定的经营记录，通常约两年，但要求因机构与项目而异。' },
        { q: '我还能获得大额贷款吗？', a: '可以，自雇借款人有机会获批大额贷款。审阅方式请参见我们的《大额贷款详解》。' },
      ],
      related: ['bank-statement-loans', 'non-qm-mortgage', 'jumbo-loans'],
    },
  },

  {
    slug: 'bank-statement-loans',
    keywords: 'bank statement loans, self-employed income, alternative documentation mortgage, Non-QM',
    en: {
      title: 'Bank Statement Loans | Lunada Bay Mortgage',
      description: 'What a bank statement loan is, who it may help, and what lenders review — explained in plain language. English and 中文.',
      h1: 'Bank Statement Loans',
      intro: [
        'A bank statement loan is a type of mortgage where a lender reviews your income using your bank deposits instead of your tax returns. It is one of several “Non-QM” options — loans that use alternative ways to document income while still following lender rules.',
        'It can help self-employed borrowers and business owners whose tax returns, after deductions, do not fully reflect their real cash flow.',
      ],
      meaning: [
        'Instead of averaging the income on your tax return, the lender looks at deposits into your bank account over a period (often 12 or 24 months) to estimate income. Guidelines vary, and not every deposit counts.',
      ],
      who: [
        'Self-employed borrowers and business owners',
        'People whose tax returns show significant deductions',
        'Borrowers with steady deposits but complex tax filings',
      ],
      review: [
        'Personal or business bank statements over the required period',
        'Consistency and source of the deposits',
        'Credit profile, assets, and reserves',
        'The property type and occupancy',
      ],
      documents: [
        'Bank statements for the period the program requires',
        'Business license or proof of self-employment',
        'Photo ID and details on assets',
        'Property information; for a refinance, your current mortgage statement',
      ],
      next: [
        'A bank statement loan is not right for everyone. Start Mortgage Path or request a private review to see whether it may fit — subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'How many months of statements are needed?', a: 'Often 12 or 24 months, but the requirement varies by lender and program.' },
        { q: 'Is a bank statement loan a jumbo loan?', a: 'It can be. Bank statement documentation and jumbo loan size are two separate things that can be combined, subject to guidelines.' },
        { q: 'Will my rate be higher?', a: 'Pricing varies by lender and profile. We do not quote rates here — we focus on whether the structure fits.' },
      ],
      related: ['self-employed-mortgage', 'non-qm-mortgage', 'jumbo-loans'],
    },
    zh: {
      title: '银行流水贷款 | Lunada Bay Mortgage',
      description: '什么是银行流水贷款、可能帮助到谁，以及贷款机构审阅哪些方面——通俗语言讲解。中英双语。',
      h1: '银行流水贷款',
      intro: [
        '银行流水贷款是一种房贷，贷款机构以您的银行存款（而非税表）来审阅收入。它属于若干“Non-QM”方案之一——这类贷款在仍遵循机构规则的前提下，采用替代方式记录收入。',
        '它可以帮助那些税表在抵扣之后未能完整反映真实现金流的自雇借款人与企业主。',
      ],
      meaning: [
        '贷款机构不再对税表上的收入取平均，而是查看您在一段时期（通常 12 或 24 个月）内进入银行账户的存款，以估算收入。规定各有不同，并非每笔存款都计入。',
      ],
      who: [
        '自雇借款人与企业主',
        '税表上抵扣较多的人士',
        '存款稳定但报税较复杂的借款人',
      ],
      review: [
        '规定期限内的个人或企业银行流水',
        '存款的稳定性与来源',
        '信用状况、资产与储备金',
        '房产类型与居住性质',
      ],
      documents: [
        '项目所要求期限的银行流水',
        '营业执照或自雇证明',
        '带照片身份证件及资产说明',
        '房产信息；再融资时需现有贷款月结单',
      ],
      next: [
        '银行流水贷款并非适合所有人。点击“开始了解贷款路径”或预约私人评估，了解它是否可能适合您——具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: '需要多少个月的流水？', a: '通常为 12 或 24 个月，但要求因机构与项目而异。' },
        { q: '银行流水贷款属于大额贷款吗？', a: '可以是。银行流水的文件方式与大额贷款的金额是两回事，在符合规定的前提下可以结合。' },
        { q: '我的利率会更高吗？', a: '定价因机构与个人情况而异。我们不在此报价——重点在于结构是否合适。' },
      ],
      related: ['self-employed-mortgage', 'non-qm-mortgage', 'jumbo-loans'],
    },
  },

  {
    slug: 'dscr-loans',
    keywords: 'DSCR loans, investment property financing, rental income mortgage, South Bay investors',
    en: {
      title: 'DSCR Loans for Investment Property | Lunada Bay Mortgage',
      description: 'DSCR loans explained simply: how rental income can support financing for an investment property, and what lenders review. English and 中文.',
      h1: 'DSCR Loans for Investment Property',
      intro: [
        'A DSCR loan is a way to finance an investment property based on the property’s rental income rather than your personal income. DSCR stands for “Debt-Service Coverage Ratio” — a simple comparison of the rent the property brings in to the loan payment it must cover.',
        'It can help real estate investors who want financing evaluated on the property’s numbers, subject to lender guidelines.',
      ],
      meaning: [
        'If a property’s rent comfortably covers its mortgage payment, its DSCR is strong. Lenders use this ratio to decide whether the property can carry the loan, which can simplify qualification for investors.',
      ],
      who: [
        'Real estate investors buying or refinancing rental property',
        'Borrowers who prefer qualification based on the property, not personal income',
        'Investors holding property in an LLC or other entity',
      ],
      review: [
        'The property’s rent — actual leases or a market rent estimate',
        'The property’s expenses and the resulting coverage ratio',
        'Credit profile, down payment or equity, and reserves',
        'Property type and condition',
      ],
      documents: [
        'Lease agreements or a market rent estimate',
        'Property details and operating expenses',
        'Recent bank statements and reserve documentation',
        'Entity documents if the property is held in an LLC',
      ],
      next: [
        'DSCR financing depends on the property and the numbers. Start Mortgage Path or request a private review to explore qualifying scenarios — subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'Do I need to prove personal income?', a: 'DSCR loans focus on the property’s cash flow rather than personal income, though credit, reserves, and down payment still matter, subject to guidelines.' },
        { q: 'Can I use an LLC?', a: 'Often yes. Many DSCR programs allow property to be held in an entity — entity documents are typically required.' },
        { q: 'What property types qualify?', a: 'It varies by lender and program. Single-family and small multi-unit rentals are common, subject to review.' },
      ],
      related: ['non-qm-mortgage', 'jumbo-loans', 'foreign-national-mortgage'],
    },
    zh: {
      title: 'DSCR 投资房产贷款 | Lunada Bay Mortgage',
      description: '通俗讲解 DSCR 贷款：如何以租金收入支持投资房产融资，以及贷款机构审阅哪些方面。中英双语。',
      h1: 'DSCR 投资房产贷款',
      intro: [
        'DSCR 贷款是一种以房产租金收入（而非您的个人收入）为基础，为投资房产融资的方式。DSCR 指“偿债覆盖率”——即将房产带来的租金与其需要偿还的贷款还款进行简单比较。',
        '它可以帮助希望以房产数字来评估融资的房地产投资者，具体视贷款机构规定而定。',
      ],
      meaning: [
        '如果一处房产的租金能够从容覆盖其月供，则其 DSCR 较强。贷款机构以这一比率判断房产能否承担贷款，从而可能简化投资者的资格审核。',
      ],
      who: [
        '购买或再融资出租房产的房地产投资者',
        '倾向于以房产（而非个人收入）来评估资格的借款人',
        '以 LLC 或其他实体持有房产的投资者',
      ],
      review: [
        '房产的租金——实际租约或市场租金估算',
        '房产的支出及由此得出的覆盖率',
        '信用状况、首付或净值，以及储备金',
        '房产类型与状况',
      ],
      documents: [
        '租约或市场租金估算',
        '房产详情与运营支出',
        '近期银行流水及储备金证明',
        '如以 LLC 持有房产，还需实体文件',
      ],
      next: [
        'DSCR 融资取决于房产与相关数字。点击“开始了解贷款路径”或预约私人评估，探讨符合条件的情形——具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: '我需要证明个人收入吗？', a: 'DSCR 贷款关注房产的现金流而非个人收入，但信用、储备金与首付仍然重要，具体视规定而定。' },
        { q: '我可以用 LLC 吗？', a: '通常可以。许多 DSCR 项目允许以实体持有房产——一般需要提供实体文件。' },
        { q: '哪些房产类型符合条件？', a: '因机构与项目而异。独立屋及小型多单元出租房较为常见，具体视审核而定。' },
      ],
      related: ['non-qm-mortgage', 'jumbo-loans', 'foreign-national-mortgage'],
    },
  },

  {
    slug: 'interest-only-jumbo',
    keywords: 'interest-only jumbo, interest only mortgage, cash flow planning, jumbo loan options',
    en: {
      title: 'Interest-Only Jumbo Loans | Lunada Bay Mortgage',
      description: 'What an interest-only jumbo loan is, when it may make sense, and what to weigh — explained simply. English and 中文.',
      h1: 'Interest-Only Jumbo Loans',
      intro: [
        'An interest-only loan lets you pay only the interest for a set period — for example, the first several years — before payments switch to include principal (the amount you borrowed). During the interest-only period, the monthly payment is lower.',
        'On certain jumbo programs this structure may be available, and it can support cash-flow planning. It is not right for every situation.',
      ],
      meaning: [
        'Paying interest-only does not reduce your loan balance during that period. When the interest-only window ends, payments rise because you then repay principal over the remaining years. The trade-off is lower payments now for higher payments later.',
      ],
      who: [
        'Borrowers with uneven or seasonal income who value flexibility',
        'Buyers planning around bonuses, business cycles, or investments',
        'Borrowers who understand and plan for the later payment increase',
      ],
      review: [
        'Your income, assets, and reserves',
        'Credit profile and the property',
        'Whether the structure fits your longer-term plan',
        'Program availability and lender guidelines',
      ],
      documents: [
        'Income records for your borrower type',
        'Asset and reserve statements',
        'Photo ID and property details',
        'For a refinance, your current mortgage statement',
      ],
      next: [
        'Interest-only is a planning tool, not a default choice. Start Mortgage Path or request a private review to weigh it against your goals — subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'Will my payment go up later?', a: 'Yes. When the interest-only period ends, the payment increases because you begin repaying principal over the remaining term.' },
        { q: 'Is interest-only always available on jumbo loans?', a: 'No. It may be available on certain programs depending on lender guidelines and your profile.' },
        { q: 'Is this the same as a lower rate?', a: 'No. A lower payment during the interest-only period is about structure, not a rate we are offering.' },
      ],
      related: ['jumbo-loans', 'cash-out-refinance', 'self-employed-mortgage'],
    },
    zh: {
      title: '只还利息大额贷款 | Lunada Bay Mortgage',
      description: '什么是只还利息大额贷款、何时可能适合，以及需要权衡什么——通俗讲解。中英双语。',
      h1: '只还利息大额贷款',
      intro: [
        '只还利息贷款允许您在设定期限内（例如最初几年）只偿还利息，之后月供才转为包含本金（即您借入的金额）。在只还利息期间，月供较低。',
        '在某些大额贷款项目中，这种结构可能可以提供，并有助于现金流规划。它并非适合所有情况。',
      ],
      meaning: [
        '在只还利息期间，您的贷款余额不会减少。当只还利息期结束时，月供会上升，因为您需要在剩余年限内偿还本金。其取舍在于：现在月供更低，之后月供更高。',
      ],
      who: [
        '收入不均或有季节性、看重灵活性的借款人',
        '围绕奖金、经营周期或投资进行规划的买家',
        '理解并为日后月供上升做好规划的借款人',
      ],
      review: [
        '您的收入、资产与储备金',
        '信用状况与房产',
        '该结构是否契合您的长期规划',
        '项目可否提供及贷款机构规定',
      ],
      documents: [
        '与您借款人类型相符的收入证明',
        '资产与储备金对账单',
        '带照片身份证件及房产详情',
        '再融资时需现有贷款月结单',
      ],
      next: [
        '只还利息是一种规划工具，而非默认选择。点击“开始了解贷款路径”或预约私人评估，结合您的目标进行权衡——具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: '我的月供之后会上升吗？', a: '会。只还利息期结束后，月供会上升，因为您将在剩余期限内开始偿还本金。' },
        { q: '大额贷款一定能只还利息吗？', a: '不一定。是否可提供取决于贷款机构规定与您的情况。' },
        { q: '这和更低的利率是一回事吗？', a: '不是。只还利息期内的较低月供关乎结构，而非我们提供的利率。' },
      ],
      related: ['jumbo-loans', 'cash-out-refinance', 'self-employed-mortgage'],
    },
  },

  {
    slug: 'cash-out-refinance',
    keywords: 'cash-out refinance, home equity, refinance Palos Verdes, access equity',
    en: {
      title: 'Cash-Out Refinance | Lunada Bay Mortgage',
      description: 'What a cash-out refinance is, when it may make sense, and what lenders review — in plain language. English and 中文.',
      h1: 'Cash-Out Refinance',
      intro: [
        'A cash-out refinance replaces your current mortgage with a new, larger one and gives you the difference in cash. You are borrowing against your home’s equity — the part of the home’s value you already own.',
        'It may help you access funds for a specific purpose, or restructure your financing. Whether it makes sense depends on your goals, your current loan, and lender guidelines.',
      ],
      meaning: [
        'Equity is the home’s value minus what you still owe. In a cash-out refinance, you take a new loan for more than your current balance and receive the difference, less closing costs, as cash — while your home secures the larger loan.',
      ],
      who: [
        'Homeowners with meaningful equity and a clear purpose for the funds',
        'Owners consolidating or restructuring existing financing',
        'Borrowers evaluating equity against the current rate environment',
      ],
      review: [
        'Your home’s current value and your remaining loan balance',
        'Income, assets, and credit profile',
        'How much equity you keep after the cash-out',
        'Occupancy and property type',
      ],
      documents: [
        'Current mortgage statement',
        'Homeowners insurance and property tax details',
        'Income records for your borrower type',
        'Recent bank statements and an estimate of current value',
      ],
      next: [
        'A cash-out refinance should fit your longer-term plan. Start Mortgage Path or request a private review to weigh whether it aligns with your goals — subject to borrower qualification and underwriting approval.',
      ],
      faq: [
        { q: 'How much equity can I access?', a: 'It varies by lender, program, property, and profile. Lenders usually require you to keep some equity in the home.' },
        { q: 'Is a cash-out refinance a second loan?', a: 'No. It replaces your existing mortgage with one new, larger loan — different from a separate home equity line.' },
        { q: 'Can self-employed owners do a cash-out refinance?', a: 'Yes, they may, sometimes using alternative documentation, subject to lender guidelines and underwriting.' },
      ],
      related: ['interest-only-jumbo', 'dscr-loans', 'self-employed-mortgage'],
    },
    zh: {
      title: '套现再融资 | Lunada Bay Mortgage',
      description: '什么是套现再融资、何时可能适合，以及贷款机构审阅哪些方面——通俗语言。中英双语。',
      h1: '套现再融资',
      intro: [
        '套现再融资以一笔金额更大的新贷款取代您现有的房贷，并将差额以现金形式支付给您。您是在以房产净值（即房产价值中您已经拥有的部分）为抵押进行借款。',
        '它可能帮助您为特定用途取得资金，或重新调整融资结构。是否合适，取决于您的目标、现有贷款及贷款机构规定。',
      ],
      meaning: [
        '净值是房产价值减去您尚欠的金额。在套现再融资中，您取得一笔高于现有余额的新贷款，并在扣除交割费用后收到差额现金——同时您的房产为这笔更大的贷款作抵押。',
      ],
      who: [
        '拥有可观净值且对资金用途明确的房主',
        '整合或重新调整现有融资的房主',
        '在当前利率环境下权衡动用净值的借款人',
      ],
      review: [
        '您房产的当前价值与剩余贷款余额',
        '收入、资产与信用状况',
        '套现后您保留的净值',
        '居住性质与房产类型',
      ],
      documents: [
        '现有贷款月结单',
        '房屋保险与房产税信息',
        '与您借款人类型相符的收入证明',
        '近期银行流水及当前价值估算',
      ],
      next: [
        '套现再融资应契合您的长期规划。点击“开始了解贷款路径”或预约私人评估，权衡它是否与您的目标相符——需符合借款人资格及承保审批。',
      ],
      faq: [
        { q: '我能动用多少净值？', a: '因贷款机构、项目、房产及个人情况而异。贷款机构通常要求您在房产中保留一部分净值。' },
        { q: '套现再融资是第二笔贷款吗？', a: '不是。它以一笔更大的新贷款取代您现有的房贷——与单独的房屋净值信贷不同。' },
        { q: '自雇房主可以做套现再融资吗？', a: '有机会，有时会采用替代性文件，具体视机构规定及承保而定。' },
      ],
      related: ['interest-only-jumbo', 'dscr-loans', 'self-employed-mortgage'],
    },
  },

  {
    slug: 'non-qm-mortgage',
    keywords: 'Non-QM mortgage, alternative documentation, non qualified mortgage, flexible loan options',
    en: {
      title: 'Non-QM Mortgage Options | Lunada Bay Mortgage',
      description: 'What Non-QM means, who it may help, and what lenders review — explained in plain language. English and 中文.',
      h1: 'Non-QM Mortgage Options',
      intro: [
        '“Non-QM” stands for Non-Qualified Mortgage. It simply means a loan that does not fit the standard “qualified mortgage” checklist — usually because income is documented in a different way. These loans still follow lender rules and underwriting.',
        'Non-QM is an umbrella term. Bank statement loans and DSCR loans are both examples. They can help borrowers whose situation does not fit a conventional box.',
      ],
      meaning: [
        'A “qualified mortgage” follows a specific set of federal standards. A Non-QM loan sits outside those standards — often to allow alternative income documentation — but it is not unregulated. Lenders still review your ability to repay.',
      ],
      who: [
        'Self-employed borrowers and business owners',
        'Real estate investors (for example, using DSCR)',
        'Borrowers with complex income or recent life changes',
      ],
      review: [
        'How income is documented for the specific program',
        'Credit profile, assets, and reserves',
        'The property type and occupancy',
        'Overall ability to repay under the program’s guidelines',
      ],
      documents: [
        'The documentation the specific program requires (bank statements, leases, or returns)',
        'Asset and reserve statements',
        'Photo ID and property details',
        'For a refinance, your current mortgage statement',
      ],
      next: [
        'Non-QM covers many paths. Start Mortgage Path or request a private review to find the one that may fit — subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'Is Non-QM risky or unregulated?', a: 'No. Non-QM loans still require the lender to review your ability to repay and follow underwriting guidelines. They simply document income differently.' },
        { q: 'Are bank statement and DSCR loans Non-QM?', a: 'Yes, both are common Non-QM examples. See their dedicated guides for details.' },
        { q: 'Can Non-QM be a jumbo loan?', a: 'Yes. Documentation type and loan size are separate and can be combined, subject to guidelines.' },
      ],
      related: ['bank-statement-loans', 'dscr-loans', 'self-employed-mortgage'],
    },
    zh: {
      title: 'Non-QM 房贷方案 | Lunada Bay Mortgage',
      description: 'Non-QM 是什么意思、可能帮助到谁，以及贷款机构审阅哪些方面——通俗语言讲解。中英双语。',
      h1: 'Non-QM 房贷方案',
      intro: [
        '“Non-QM”指非合格房贷（Non-Qualified Mortgage）。它的意思很简单：这类贷款不符合标准的“合格房贷”清单——通常是因为收入以不同方式记录。这类贷款仍遵循贷款机构规则与承保。',
        'Non-QM 是一个统称。银行流水贷款与 DSCR 贷款都是其中的例子。它们可以帮助那些情况不符合传统框架的借款人。',
      ],
      meaning: [
        '“合格房贷”遵循一套特定的联邦标准。Non-QM 贷款处于这些标准之外——通常是为了允许替代性的收入文件——但它并非不受监管。贷款机构仍会审阅您的还款能力。',
      ],
      who: [
        '自雇借款人与企业主',
        '房地产投资者（例如使用 DSCR）',
        '收入较复杂或近期生活状况有变化的借款人',
      ],
      review: [
        '在具体项目中收入的记录方式',
        '信用状况、资产与储备金',
        '房产类型与居住性质',
        '在项目规定下的整体还款能力',
      ],
      documents: [
        '具体项目所要求的文件（银行流水、租约或税表）',
        '资产与储备金对账单',
        '带照片身份证件及房产详情',
        '再融资时需现有贷款月结单',
      ],
      next: [
        'Non-QM 涵盖多种路径。点击“开始了解贷款路径”或预约私人评估，找到可能适合您的那一种——具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: 'Non-QM 风险高或不受监管吗？', a: '不是。Non-QM 贷款仍要求贷款机构审阅您的还款能力并遵循承保规定，只是收入的记录方式不同。' },
        { q: '银行流水与 DSCR 贷款属于 Non-QM 吗？', a: '是的，两者都是常见的 Non-QM 例子。详情请参见各自的指南。' },
        { q: 'Non-QM 可以是大额贷款吗？', a: '可以。文件方式与贷款金额是分开的，在符合规定的前提下可以结合。' },
      ],
      related: ['bank-statement-loans', 'dscr-loans', 'self-employed-mortgage'],
    },
  },

  {
    slug: 'mortgage-documents',
    keywords: 'mortgage documents, what documents needed for mortgage, loan paperwork checklist',
    en: {
      title: 'Documents You May Need | Lunada Bay Mortgage',
      description: 'A simple starting checklist of mortgage documents by borrower type — W-2, self-employed, business owner, investor, and refinance. English and 中文.',
      h1: 'Documents You May Need',
      intro: [
        'Gathering paperwork is often the part that feels overwhelming — but it does not need to be. Requirements vary by program and lender, and nothing here is required just to begin. This is a general starting point so you can prepare with confidence.',
        'A licensed professional will tell you exactly what applies to your situation once you talk. The lists below are organized by borrower type.',
      ],
      meaning: [
        'Lenders ask for documents to confirm three things in plain terms: your income (can you repay), your assets (do you have the funds), and the property (what secures the loan). Everything on these lists supports one of those.',
      ],
      who: [
        'W-2 borrower — recent W-2s, recent pay stubs, two months of bank statements, photo ID, details on assets and reserves',
        'Self-employed — personal tax returns (often two years), business returns if applicable, year-to-date profit and loss, bank statements, business license',
        'Business owner — business and personal tax returns, profit and loss and balance sheet, business bank statements, proof of ownership percentage',
        'Investor / DSCR — lease agreements or market rent estimate, property details and expenses, bank statements, entity documents if held in an LLC',
        'Refinance — current mortgage statement, homeowners insurance and property tax details, proof of income for your type, estimate of current value',
      ],
      review: [
        'Income — how you earn and how steady it is',
        'Assets and reserves — funds for down payment, closing, and savings afterward',
        'The property — value, type, and occupancy',
        'Credit history and overall ability to repay',
      ],
      documents: [
        'Start with photo ID and two months of bank statements',
        'Add income records for your borrower type (from the lists above)',
        'For a purchase, details on the property; for a refinance, your current mortgage statement',
        'Anything else the specific program requests',
      ],
      next: [
        'You do not need everything ready to start. Start Mortgage Path or request a private review, and we will tell you exactly what applies to you — subject to lender guidelines and underwriting approval.',
      ],
      faq: [
        { q: 'Do I need all of this before I reach out?', a: 'No. Nothing is required to begin. The lists simply help you prepare; a professional will confirm what applies once you talk.' },
        { q: 'What if I am self-employed?', a: 'You may use tax returns or, in some cases, alternative documentation such as bank statements. See our Self-Employed and Bank Statement guides.' },
        { q: 'Are documents kept private?', a: 'Your information is treated with discretion and reviewed by a licensed professional.' },
      ],
      related: ['self-employed-mortgage', 'jumbo-loans', 'before-you-make-an-offer'],
    },
    zh: {
      title: '您可能需要的文件 | Lunada Bay Mortgage',
      description: '按借款人类型列出的房贷文件简易起点清单——W-2、自雇、企业主、投资者及再融资。中英双语。',
      h1: '您可能需要的文件',
      intro: [
        '整理文件往往是让人感到最有压力的部分——但其实不必如此。要求因项目与贷款机构而异，开始时也无需备齐任何文件。这只是一个大致起点，帮助您从容准备。',
        '在您沟通之后，持牌专业人士会明确告诉您具体适用哪些文件。以下清单按借款人类型整理。',
      ],
      meaning: [
        '用最简单的话说，贷款机构索取文件是为了确认三件事：您的收入（能否偿还）、您的资产（是否有资金）以及房产（以什么作抵押）。这些清单上的每一项都对应其中之一。',
      ],
      who: [
        'W-2 雇员——近期 W-2、近期工资单、两个月银行流水、带照片身份证件、资产与储备金说明',
        '自雇人士——个人税表（通常两年）、企业税表（如适用）、本年度至今损益表、银行流水、营业执照',
        '企业主——企业及个人税表、损益表与资产负债表、企业银行流水、持股比例证明',
        '投资者 / DSCR——租约或市场租金估算、房产详情与支出、银行流水、如以 LLC 持有则需实体文件',
        '再融资——现有贷款月结单、房屋保险与房产税信息、与您类型相符的收入证明、当前价值估算',
      ],
      review: [
        '收入——您如何赚取以及是否稳定',
        '资产与储备金——首付、交割及之后保留的资金',
        '房产——价值、类型与居住性质',
        '信用记录与整体还款能力',
      ],
      documents: [
        '先准备好带照片身份证件与两个月银行流水',
        '再补充与您借款人类型相符的收入证明（见上方清单）',
        '购房需房产相关信息；再融资需现有贷款月结单',
        '具体项目所要求的其他材料',
      ],
      next: [
        '开始时并不需要备齐一切。点击“开始了解贷款路径”或预约私人评估，我们会明确告诉您具体适用哪些——具体视机构规定及承保审批而定。',
      ],
      faq: [
        { q: '联系之前需要备齐这些吗？', a: '不需要。开始时无需任何文件。清单只是帮助您准备；沟通之后专业人士会确认具体适用哪些。' },
        { q: '如果我是自雇人士怎么办？', a: '您可以使用税表，或在某些情况下使用银行流水等替代性文件。请参见我们的《自雇》与《银行流水》指南。' },
        { q: '文件会被保密吗？', a: '您的信息将被审慎对待，并由持牌专业人士审阅。' },
      ],
      related: ['self-employed-mortgage', 'jumbo-loans', 'before-you-make-an-offer'],
    },
  },

  {
    slug: 'before-you-make-an-offer',
    keywords: 'before making an offer, home buying preparation, financing before offer, pre-approval',
    en: {
      title: 'Before You Make an Offer | Lunada Bay Mortgage',
      description: 'What to understand about financing before you make an offer on a Lunada Bay or Palos Verdes home. Plain language, English and 中文.',
      h1: 'Before You Make an Offer',
      intro: [
        'Before making an offer on a Lunada Bay or Palos Verdes home, it helps to understand the financing behind the property — not just the price. That means the loan amount, the down payment, reserves, documentation, and whether a jumbo or alternative loan path may apply.',
        'Understanding these early can make your offer stronger and the process calmer.',
      ],
      meaning: [
        'An offer is more convincing when your financing is understood in advance. Knowing your likely loan amount, down payment, and the cash you would need to close means fewer surprises once you are in contract.',
      ],
      who: [
        'Buyers preparing to make an offer in a competitive market',
        'First-time high-value buyers who want to understand the full picture',
        'Anyone weighing what they can comfortably plan for',
      ],
      review: [
        'Your income, assets, and reserves',
        'The likely loan amount and down payment for the target price',
        'The cash needed to close beyond the down payment',
        'Which loan path may fit — jumbo, self-employed, or another option',
      ],
      documents: [
        'Income records for your borrower type',
        'Two months of bank and asset statements',
        'Photo ID',
        'Details on the property you are considering',
      ],
      next: [
        'The best time to understand financing is before you make an offer. Start Mortgage Path or request a private review, and use our estimate tool to see a payment and cash-to-close range — educational only, not a quote.',
      ],
      faq: [
        { q: 'What is pre-approval?', a: 'Pre-approval is a lender’s review of your information indicating what you may qualify for, subject to full underwriting. It is not a commitment to lend.' },
        { q: 'How much cash do I need beyond the down payment?', a: 'Closing costs and prepaids are in addition to the down payment. Our estimate tool shows an educational range — actual figures depend on your file.' },
        { q: 'Can you explain the process in Chinese?', a: 'Yes. Guidance is available in English and 中文, with clear explanation of each step.' },
      ],
      related: ['jumbo-loans', 'mortgage-documents', 'self-employed-mortgage'],
    },
    zh: {
      title: '在您出价之前 | Lunada Bay Mortgage',
      description: '在为 Lunada Bay 或 Palos Verdes 的房产出价之前，应了解哪些关于融资的内容。通俗语言，中英双语。',
      h1: '在您出价之前',
      intro: [
        '在为 Lunada Bay 或 Palos Verdes 的房产出价之前，先了解房产背后的融资——而不仅是价格——会很有帮助。这包括贷款金额、首付、储备金、文件，以及是否可能需要大额贷款或其他贷款路径。',
        '提前理解这些，能让您的出价更有力，流程也更从容。',
      ],
      meaning: [
        '当您的融资情况提前被理解时，出价会更有说服力。清楚自己大致的贷款金额、首付，以及交割所需的现金，意味着进入合同后更少意外。',
      ],
      who: [
        '准备在竞争激烈市场中出价的买家',
        '希望了解全貌的首次高价值住宅买家',
        '任何在权衡自己能从容规划到何种程度的人',
      ],
      review: [
        '您的收入、资产与储备金',
        '目标价格对应的大致贷款金额与首付',
        '首付之外交割所需的现金',
        '哪条贷款路径可能适合——大额、自雇或其他方案',
      ],
      documents: [
        '与您借款人类型相符的收入证明',
        '两个月的银行及资产对账单',
        '带照片身份证件',
        '您所考虑房产的相关信息',
      ],
      next: [
        '了解融资的最佳时机，是在出价之前。点击“开始了解贷款路径”或预约私人评估，并使用我们的估算工具查看月供与交割现金的区间——仅供参考，并非报价。',
      ],
      faq: [
        { q: '什么是预批（pre-approval）？', a: '预批是贷款机构对您信息的审阅，表明您可能符合的条件，具体仍需完整承保。它不构成贷款承诺。' },
        { q: '首付之外我需要多少现金？', a: '交割费用与预付款在首付之外。我们的估算工具会显示一个参考区间——实际金额取决于您的文件。' },
        { q: '你们能用中文讲解流程吗？', a: '可以。我们提供中英双语指导，并清晰讲解每一个步骤。' },
      ],
      related: ['jumbo-loans', 'mortgage-documents', 'self-employed-mortgage'],
    },
  },
]

export const educationPages = P.map((p) => ({ ...p, path: `/${p.slug}` }))
export const educationSlugs = educationPages.map((p) => p.slug)
export function getEducationPage(slug) {
  return educationPages.find((p) => p.slug === slug)
}
