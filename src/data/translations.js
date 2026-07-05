/*
 * ============================================================================
 *  SITE CONFIG — EDIT ALL LICENSE, NMLS & CONTACT DETAILS HERE
 * ----------------------------------------------------------------------------
 *  This is the single source of truth for compliance-sensitive information.
 *  Items marked `verifyBeforePublishing: true` render a small reminder in the
 *  footer during development. Verify each one, then set the flag to false.
 * ============================================================================
 */
export const siteConfig = {
  brandName: 'Lunada Bay Mortgage',
  domain: 'lunadabaymortgage.com',
  company: 'West Coast Capital Mortgage Inc.',
  founderName: 'Anatoliy Kanevsky',

  // --- Licensing ---
  broker: {
    dreBrokerLicense: '01385024', // CA DRE Broker License (individual)
    corporationDreLicense: '02440065', // West Coast Capital Mortgage Inc. CA DRE Corporation License
  },

  // --- NMLS (VERIFY before going live) ---
  nmls: {
    company: {
      number: '2817729',
      verifyBeforePublishing: true, // West Coast Capital Mortgage Inc. NMLS
    },
    individual: {
      number: '2775380',
      verifyBeforePublishing: true, // Anatoliy Kanevsky MLO / NMLS
    },
  },

  // --- Contact (placeholders — confirm before publishing) ---
  contact: {
    officePhone: '310-654-1577',
    directPhone: '310-686-5053',
    email: 'westccmortgage@gmail.com',
  },

  // --- Related web properties ---
  links: [
    { label: 'westcoastcapitalmortgage.com', href: 'https://westcoastcapitalmortgage.com' },
    { label: 'wcci.online', href: 'https://wcci.online' },
  ],
}

/*
 * ============================================================================
 *  TRANSLATIONS — ALL COPY IN ENGLISH (en) AND SIMPLIFIED CHINESE (zh)
 * ============================================================================
 */
export const translations = {
  en: {
    langLabel: 'EN',

    startHere: {
      eyebrow: 'Start Here',
      title: 'Not Sure Where to Begin?',
      copy: 'Buying or refinancing a high-value home can feel complicated. Start with a few simple questions and understand which mortgage path may need to be reviewed.',
      cta: 'Start Mortgage Path',
      hint: '6 short questions · about a minute',
    },

    wizard: {
      stepLabel: 'Step',
      of: 'of',
      back: 'Back',
      next: 'Next',
      finish: 'See my path',
      restart: 'Start over',
      steps: [
        {
          key: 'purpose',
          type: 'choice',
          question: 'Are you buying, refinancing, cashing out, investing, or purchasing a second home?',
          options: ['Buying', 'Refinancing', 'Cash-out', 'Investing', 'Second home'],
        },
        {
          key: 'location',
          type: 'text',
          question: 'Where is the property located?',
          placeholder: 'City or ZIP — e.g. Lunada Bay or 90274',
        },
        {
          key: 'price',
          type: 'choice',
          question: 'What is the estimated purchase price or property value?',
          options: ['Under $1M', '$1M – $2M', '$2M – $3M', '$3M – $5M', '$5M+'],
        },
        {
          key: 'loan',
          type: 'choice',
          question: 'What is the estimated loan amount?',
          options: ['Under $800K', '$800K – $1.5M', '$1.5M – $2.5M', '$2.5M – $4M', '$4M+', 'Not sure yet'],
        },
        {
          key: 'income',
          type: 'choice',
          question: 'What is your income type?',
          options: ['W-2', 'Self-employed', 'Business owner', 'Investor', 'Other'],
        },
        {
          key: 'language',
          type: 'choice',
          question: 'Preferred language?',
          options: ['English', '中文', 'Both'],
        },
      ],
      result: {
        eyebrow: 'Your Path',
        title:
          'Based on your answers, your scenario may benefit from a private jumbo mortgage strategy review.',
        body:
          'Every situation is different. A short, private conversation is the best way to understand which loan structures and documentation may apply to your goals — with no obligation.',
        summaryTitle: 'Your answers',
        nextTitle: 'Next step',
        nextBody: 'Request a private review with a licensed mortgage professional.',
        nextCta: 'Request a Private Review',
        disclaimer:
          'This is general guidance only — not a loan decision, pre-qualification, or commitment to lend.',
      },
    },

    guide: {
      whatIsJumbo: {
        eyebrow: 'The Basics',
        title: 'What Makes a Loan Jumbo?',
        paras: [
          'A mortgage is called “jumbo” when the loan amount is larger than the conforming loan limit set for the county each year. Loans at or below that limit follow standard Fannie Mae or Freddie Mac guidelines; loans above it do not, so they follow more detailed lender guidelines.',
          'In high-value areas like Lunada Bay and Palos Verdes, many homes sit above that limit — which is why jumbo financing is common here. A jumbo loan is not riskier by nature; it simply involves a closer look at income, assets, and the property.',
        ],
        glossaryTitle: 'Plain-language glossary',
        glossary: [
          { term: 'Conforming limit', def: 'The maximum loan amount that follows standard Fannie Mae / Freddie Mac guidelines. Above it, a loan is “jumbo.”' },
          { term: 'Reserves', def: 'Savings or assets left after closing — often measured in months of payments — that show you can carry the loan.' },
          { term: 'Non-QM', def: '“Non-Qualified Mortgage.” Loans that use alternative ways to document income while still following lender rules.' },
          { term: 'Bank statement loan', def: 'A Non-QM option where income is reviewed using bank deposits instead of tax returns — often for self-employed borrowers.' },
          { term: 'DSCR', def: '“Debt-Service Coverage Ratio.” For investment property, it compares the rental income to the loan payment.' },
          { term: 'Interest-only', def: 'A structure where payments cover interest for a set period, which can lower the payment during that time.' },
        ],
      },
      lenderReview: {
        eyebrow: 'How Review Works',
        title: 'What Lenders May Review',
        intro:
          'A jumbo file is reviewed as a full picture. These are the areas a lender may consider. Every program and borrower is different, and all are subject to lender guidelines and underwriting.',
        cards: [
          { title: 'Credit profile', body: 'Your credit history and how you have managed prior obligations.' },
          { title: 'Income documentation', body: 'How income is shown — tax returns, W-2s, bank statements, or other records.' },
          { title: 'Assets and reserves', body: 'Funds for down payment and closing, plus savings left over afterward.' },
          { title: 'Property type', body: 'Single-family, condo, multi-unit, or second home — each can have different rules.' },
          { title: 'Occupancy', body: 'Whether the home is a primary residence, second home, or investment.' },
          { title: 'Loan amount', body: 'The size of the loan relative to property value and county limits.' },
          { title: 'Down payment or equity', body: 'How much you put down, or the equity you hold when refinancing.' },
          { title: 'Underwriting guidelines', body: 'The specific lender’s rules that a complete file must meet.' },
        ],
      },
      beforeOffer: {
        eyebrow: 'Before You Buy',
        title: 'Before You Make an Offer',
        copy:
          'Before making an offer on a Lunada Bay or Palos Verdes home, it may help to understand the financing behind the property — loan amount, down payment, reserves, documentation, and whether a jumbo or alternative loan path may be appropriate.',
        cta: 'Start Mortgage Path',
      },
    },

    documents: {
      eyebrow: 'Preparation',
      title: 'Documents You May Need',
      intro:
        'Requirements vary by program and lender, but here is a general starting point by borrower type. Nothing here is required to begin — it simply helps you prepare.',
      note: 'Documents are reviewed subject to lender guidelines and underwriting approval.',
      tabs: [
        {
          label: 'W-2 Borrower',
          items: [
            'Recent W-2 forms (typically two years)',
            'Recent pay stubs',
            'Two months of bank statements',
            'Government-issued photo ID',
            'Details on assets and reserves',
          ],
        },
        {
          label: 'Self-Employed',
          items: [
            'Personal tax returns (often two years)',
            'Business tax returns, if applicable',
            'Year-to-date profit and loss',
            'Recent bank statements',
            'Business license or equivalent',
          ],
        },
        {
          label: 'Business Owner',
          items: [
            'Business and personal tax returns',
            'Profit and loss and balance sheet',
            'Business bank statements',
            'Proof of ownership percentage',
            'Details on assets and reserves',
          ],
        },
        {
          label: 'Investor / DSCR',
          items: [
            'Lease agreements or market rent estimate',
            'Property details and operating expenses',
            'Recent bank statements',
            'Portfolio summary, if applicable',
            'Entity documents, if held in an LLC',
          ],
        },
        {
          label: 'Refinance',
          items: [
            'Current mortgage statement',
            'Homeowners insurance and property tax details',
            'Proof of income for your borrower type',
            'Recent bank statements',
            'Estimate of current property value',
          ],
        },
      ],
    },

    privateReview: {
      eyebrow: 'The Engagement',
      title: 'The Private Review',
      intro: 'A calm, confidential way to understand your options — before you commit to anything.',
      points: [
        { label: 'By request', text: 'Access is by request — a private conversation, not an automated quote.' },
        { label: 'Confidential', text: 'Your information is handled with discretion and reviewed by a licensed professional.' },
        { label: 'No obligation', text: 'No commitment to lend, no rate quote, no pressure — only clear guidance.' },
        { label: 'Strategy first', text: 'We focus on structure, documentation, and timing — not just a number.' },
      ],
      cta: 'Request a Private Review',
    },

    nav: {
      start: 'Start Here',
      strategy: 'Jumbo Strategy',
      guide: 'Guide',
      about: 'About',
      markets: 'Local Markets',
      programs: 'Loan Programs',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Request a Review',
    },

    hero: {
      eyebrow: 'Private Jumbo Mortgage Advisory',
      headline: 'Jumbo Mortgage Strategy for Lunada Bay & Coastal Los Angeles',
      subhead:
        'Private mortgage guidance for luxury homebuyers, investors, business owners, and high-net-worth borrowers seeking financing beyond standard loan limits.',
      primaryCta: 'Request a Private Mortgage Review',
      secondaryCta: 'Explore Jumbo Options',
      trustLine:
        'Serving Lunada Bay, Palos Verdes, South Bay, Los Angeles County, and select California luxury markets.',
    },

    localPositioning: 'Local jumbo mortgage strategy for Lunada Bay, Palos Verdes, and coastal Los Angeles.',
    localTrust:
      'Guidance from a mortgage professional who lives in the Palos Verdes community and understands the local luxury residential market.',

    localAuthority: {
      eyebrow: 'Local Authority',
      title: 'Built for This Market, Not for Every Market',
      intro:
        'Lunada Bay and Palos Verdes are not standard mortgage markets. Many homes may require jumbo financing, complex asset review, business-owner income analysis, reserve planning, and careful loan structure. Lunada Bay Mortgage was created for local borrowers who want a more thoughtful mortgage strategy.',
      cards: [
        {
          title: 'Local Palos Verdes Knowledge',
          body: 'Guidance from a professional who lives in the Palos Verdes community and understands the local luxury residential market.',
        },
        {
          title: 'Jumbo Loan Strategy',
          body: 'Structure, documentation, and reserve planning for homes that exceed standard conforming loan limits.',
        },
        {
          title: 'Business Owner & Self-Employed Borrowers',
          body: 'Bank statement and Non-QM paths that may present income the way lenders are prepared to evaluate.',
        },
        {
          title: 'Chinese / English Guidance',
          body: 'Bilingual support in English and 中文, with clear explanation of the U.S. mortgage process.',
        },
        {
          title: 'Investment & DSCR Options',
          body: 'Property-cash-flow-based financing for qualifying investment properties, subject to lender guidelines.',
        },
        {
          title: 'High-Value Property Experience',
          body: 'Experience with luxury coastal homes, complex borrowers, and high-value transactions.',
        },
      ],
    },

    insights: {
      eyebrow: 'Insights',
      title: 'Mortgage Insights for Palos Verdes & Coastal Los Angeles',
      intro:
        'Educational guidance on jumbo strategy, self-employed financing, and coastal property. Informational only — not a commitment to lend.',
      readMore: 'Read guidance',
    },

    localPage: {
      home: 'Home',
      exploreTitle: 'Explore Other Areas',
      ctaTitle: 'Request a Private Mortgage Review',
      ctaBody:
        'Share a few details and a licensed mortgage professional will review your information and follow up.',
      ctaButton: 'Request a Private Review',
      disclaimerShort:
        'Informational only. Not a commitment to lend. All loans subject to borrower qualification, lender guidelines, and underwriting approval.',
      backHome: '← Back to home',
    },

    strategy: {
      eyebrow: 'Jumbo Strategy',
      title: 'Structure Can Matter as Much as the Rate',
      intro:
        'A jumbo loan is generally used when the loan amount exceeds standard county conforming loan limits. For luxury coastal homes, the financing structure can matter as much as the rate — how a loan is documented, positioned, and timed often shapes the outcome more than a single number.',
      cards: [
        {
          title: 'Loan Amount Strategy',
          body: 'Aligning loan size with property value, county limits, and long-term goals rather than a single threshold.',
        },
        {
          title: 'Down Payment Planning',
          body: 'Weighing liquidity, reserves, and structure to find a down payment approach that fits the broader picture.',
        },
        {
          title: 'Asset & Reserve Review',
          body: 'Reviewing assets and required reserves early, so documentation supports the file before it reaches underwriting.',
        },
        {
          title: 'Business-Owner Income',
          body: 'Presenting self-employed and business-owner income clearly, in the way lenders are prepared to evaluate.',
        },
        {
          title: 'Interest-Only Options',
          body: 'Understanding where interest-only structures may be available and how they affect cash flow and planning.',
        },
        {
          title: 'Bank Statement / Non-QM',
          body: 'Exploring alternative documentation paths for borrowers whose income is not fully reflected on tax returns.',
        },
        {
          title: 'DSCR Investment Options',
          body: 'Considering property-cash-flow-based financing for qualifying investment scenarios, subject to guidelines.',
        },
        {
          title: 'Cash-Out Refinance Strategy',
          body: 'Evaluating whether accessing equity aligns with rate environment, goals, and long-term positioning.',
        },
        {
          title: 'Second Home Financing',
          body: 'Structuring financing for coastal second homes with attention to occupancy and lender requirements.',
        },
      ],
    },

    about: {
      eyebrow: 'About Anatoliy',
      title: 'Guidance Beyond the Rate',
      lead:
        'Lunada Bay Mortgage is led by Anatoliy Kanevsky, founder of West Coast Capital Mortgage Inc. and a California real estate and mortgage professional with experience across lending, brokerage, luxury residential development, and complex borrower strategy. Anatoliy’s background allows him to look beyond the rate and help clients understand structure, documentation, timing, property value, loan purpose, and long-term financing options.',
      body:
        'Clients are not simply receiving a loan quote. They are receiving guidance from someone who understands lending, real estate, development, and complex property decisions — and who can translate that experience into a clear, considered plan.',
      credentialsTitle: 'Credentials & Background',
      credentials: [
        'Founder, West Coast Capital Mortgage Inc.',
        'California Real Estate Broker',
        'Designated Officer, West Coast Capital Mortgage Inc.',
        'CEO / Principal, California Residential Development Partners',
        'Decades of experience across residential lending and real estate brokerage',
        'Experience with jumbo, Non-QM, DSCR, bank statement, and self-employed borrowers',
        'Practical luxury residential development experience — not just mortgage theory',
      ],
    },

    markets: {
      eyebrow: 'Local Markets',
      title: 'Coastal Los Angeles & the South Bay',
      intro:
        'High-value coastal homes often require financing strategies beyond standard loan structures. We focus on the communities we know well.',
      note: 'High-value coastal homes often require financing strategies beyond standard loan structures.',
      items: [
        { name: 'Lunada Bay', note: 'Bluff-side estates and established coastal luxury.' },
        { name: 'Palos Verdes Estates', note: 'Master-planned peninsula living and premium properties.' },
        { name: 'Rancho Palos Verdes', note: 'Ocean-view homes and hillside estates.' },
        { name: 'Rolling Hills', note: 'Private, gated equestrian and estate community.' },
        { name: 'Rolling Hills Estates', note: 'Refined peninsula neighborhoods and family estates.' },
        { name: 'Manhattan Beach', note: 'Sought-after beach-close and strand properties.' },
        { name: 'Redondo Beach', note: 'Coastal residences and multi-unit opportunities.' },
        { name: 'Torrance', note: 'Established South Bay neighborhoods and value.' },
        { name: 'South Bay Luxury Market', note: 'Select high-value coastal and hillside properties.' },
      ],
    },

    programs: {
      eyebrow: 'Loan Programs',
      title: 'Financing Options for High-Value Property',
      intro:
        'Programs may be available depending on borrower profile, lender guidelines, credit, income, assets, property type, occupancy, and underwriting review.',
      disclaimer:
        'May be available depending on borrower profile, lender guidelines, credit, income, assets, property type, occupancy, and underwriting review.',
      items: [
        { title: 'Jumbo Purchase Loans', body: 'Financing for high-value primary and coastal residences above conforming limits.' },
        { title: 'Jumbo Refinance', body: 'Refinance options for existing high-value property, subject to review.' },
        { title: 'Interest-Only Jumbo', body: 'Interest-only structures that may support cash-flow planning where available.' },
        { title: 'Asset-Based / High-Net-Worth Options', body: 'Approaches that may consider substantial assets in the qualification picture.' },
        { title: 'Bank Statement Loans', body: 'Alternative-documentation options for qualifying self-employed borrowers.' },
        { title: 'DSCR Investment Loans', body: 'Property-cash-flow-based financing for qualifying investment properties.' },
        { title: 'Second Home Financing', body: 'Financing structured for coastal and vacation second homes.' },
        { title: 'Cash-Out Refinance', body: 'Access to equity where it aligns with goals and guidelines.' },
        { title: 'Non-QM Mortgage Options', body: 'Flexible programs for borrowers outside conventional qualification.' },
      ],
    },

    clients: {
      eyebrow: 'Who We Serve',
      title: 'Guidance Tailored to Complex Profiles',
      intro:
        'Every high-value transaction is different. We work closely with clients whose financing benefits from a considered, individual approach.',
      items: [
        {
          title: 'Luxury Homebuyer',
          body: 'Buyers of high-value coastal and hillside homes who value discretion, clarity, and a financing plan matched to the property.',
        },
        {
          title: 'Business Owner / Self-Employed Borrower',
          body: 'Owners and self-employed professionals whose income deserves to be presented accurately and in the way lenders evaluate it.',
        },
        {
          title: 'Real Estate Investor',
          body: 'Investors weighing DSCR, cash-out, and portfolio strategies for qualifying properties, subject to lender guidelines.',
        },
        {
          title: 'Chinese-Speaking Buyer / International Family',
          body: 'Bilingual guidance with clear explanation of the U.S. mortgage process, help understanding documentation, and support with purchase, refinance, and investment property decisions.',
        },
      ],
    },

    process: {
      eyebrow: 'Our Process',
      title: 'Private Mortgage Review Process',
      intro:
        'A calm, structured path from first conversation to closing — designed to bring clarity at every step.',
      steps: [
        { title: 'Property & Loan Goal', body: 'We start with your property, purpose, and objectives to frame the right approach.' },
        { title: 'Income / Asset Review', body: 'We review income and assets early, so the file is well-positioned before underwriting.' },
        { title: 'Jumbo Strategy Comparison', body: 'We compare structures — term, documentation, and options — against your goals.' },
        { title: 'Lender Match', body: 'We identify lenders whose guidelines fit your profile and property.' },
        { title: 'Pre-Approval or Refinance Path', body: 'We move toward pre-approval or a clear refinance path with defined next steps.' },
        { title: 'Closing Support', body: 'We stay engaged through underwriting and closing to keep the process on track.' },
      ],
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, Answered Clearly',
      items: [
        {
          q: 'What is a jumbo loan?',
          a: 'A jumbo loan is generally a mortgage that exceeds the standard conforming loan limits set for a county. High-value coastal homes often fall into this category, which can call for a more considered financing structure.',
        },
        {
          q: 'Do I need 20% down?',
          a: 'Not necessarily. Down payment requirements vary by lender, program, property, and borrower profile. Some scenarios may allow for different structures, subject to lender guidelines and underwriting review.',
        },
        {
          q: 'What if I am self-employed?',
          a: 'Self-employed borrowers may qualify. The key is presenting income clearly and choosing documentation paths — such as bank statement or Non-QM options — that align with lender guidelines. We help position the file accurately and early.',
        },
        {
          q: 'What if my tax returns do not show all of my income?',
          a: 'This is common for self-employed and business-owner borrowers. Alternative-documentation options — such as bank statement loans — may review income through business deposits instead of tax returns, subject to lender guidelines and underwriting approval.',
        },
        {
          q: 'Can business owners qualify?',
          a: 'Yes, business owners may qualify. Lenders may review business and personal documentation to understand income. The goal is to present it in the way lenders are prepared to evaluate — subject to lender guidelines and underwriting review.',
        },
        {
          q: 'Can investors use DSCR?',
          a: 'For qualifying investment properties, DSCR (Debt-Service Coverage Ratio) financing looks at the property’s rental income relative to the loan payment rather than personal income. Availability is subject to property type, lender guidelines, and underwriting.',
        },
        {
          q: 'Can I use interest-only?',
          a: 'Interest-only structures may be available on certain jumbo programs, depending on lender guidelines and borrower profile. They can support cash-flow planning but are not suited to every situation.',
        },
        {
          q: 'Can I refinance a high-value property?',
          a: 'Yes. Refinancing may help adjust your loan structure, access equity through a cash-out refinance, or move between interest-only and amortizing options where available — subject to borrower qualification and underwriting approval.',
        },
        {
          q: 'Can you explain the process in Chinese?',
          a: 'Yes. We provide bilingual guidance in English and Simplified Chinese (中文), with clear explanation of the U.S. mortgage process and help understanding documentation for purchase, refinance, and investment scenarios.',
        },
        {
          q: 'Is this a commitment to lend?',
          a: 'No. This website is informational and is not a commitment to lend. All loans are subject to borrower qualification, credit approval, income, assets, property review, lender guidelines, and underwriting approval.',
        },
        {
          q: 'What happens after I submit my information?',
          a: 'A licensed mortgage professional will review what you share and follow up privately to understand your goals. There is no obligation — the first step is simply a clear, confidential conversation.',
        },
        {
          q: 'Why work with someone who also has real estate and development experience?',
          a: 'Experience across lending, brokerage, and luxury residential development means guidance that considers structure, documentation, timing, property value, and long-term options — not just a single rate quote.',
        },
      ],
    },

    contact: {
      eyebrow: 'Request a Review',
      title: 'Request a Private Mortgage Review',
      intro:
        'Share a few details and a licensed mortgage professional will review your information and follow up. Your information is treated with discretion.',
      fields: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        preferredLanguage: 'Preferred Language',
        location: 'Property Location or ZIP Code',
        purchasePrice: 'Estimated Purchase Price or Property Value',
        loanAmount: 'Estimated Loan Amount',
        loanPurpose: 'Loan Purpose',
        employmentType: 'Employment Type',
        message: 'Message',
      },
      placeholders: {
        name: 'Full name',
        phone: '(310) 000-0000',
        email: 'you@email.com',
        location: 'e.g. Lunada Bay or 90274',
        purchasePrice: 'Optional',
        loanAmount: 'Optional',
        message: 'How can we help?',
      },
      options: {
        preferredLanguage: ['English', '中文', 'Both'],
        loanPurpose: ['Purchase', 'Refinance', 'Cash-Out', 'Investment', 'Second Home'],
        employmentType: ['W-2', 'Self-employed', 'Business owner', 'Investor', 'Other'],
        select: 'Please select',
      },
      submit: 'Request Private Review',
      success:
        'Thank you. Your request has been received. A licensed mortgage professional will review your information and contact you.',
      required: 'Required',
    },

    footer: {
      tagline: 'Private jumbo mortgage strategy for Lunada Bay, Palos Verdes, and coastal Los Angeles.',
      contactTitle: 'Contact',
      office: 'Office',
      direct: 'Direct',
      email: 'Email',
      linksTitle: 'Related',
      licensingTitle: 'Licensing',
      verifyNote: 'verify before publishing',
      equalHousing: 'Equal Housing Opportunity',
      disclosure:
        'Lunada Bay Mortgage is a marketing website operated by West Coast Capital Mortgage Inc. Equal Housing Opportunity. This is not a commitment to lend. All loans are subject to borrower qualification, credit approval, income, assets, property review, lender guidelines, and underwriting approval. Loan programs, rates, terms, and conditions are subject to change without notice.',
      rights: 'All rights reserved.',
    },
  },

  zh: {
    langLabel: '中文',

    startHere: {
      eyebrow: '从这里开始',
      title: '不确定从哪里开始？',
      copy: '购买或再融资高价值住宅可能会涉及许多贷款规则。您可以先回答几个简单问题，了解哪些贷款路径可能需要进一步评估。',
      cta: '开始了解贷款路径',
      hint: '6 个简短问题 · 约一分钟',
    },

    wizard: {
      stepLabel: '第',
      of: '步，共',
      back: '上一步',
      next: '下一步',
      finish: '查看我的路径',
      restart: '重新开始',
      steps: [
        {
          key: 'purpose',
          type: 'choice',
          question: '您此次的目的是购买、再融资、套现、投资，还是购买第二套住宅？',
          options: ['购买', '再融资', '套现', '投资', '第二套住宅'],
        },
        {
          key: 'location',
          type: 'text',
          question: '房产位于何处？',
          placeholder: '城市或邮编——例如：露娜达湾 或 90274',
        },
        {
          key: 'price',
          type: 'choice',
          question: '预计购买价格或房产价值？',
          options: ['100万美元以下', '100万–200万美元', '200万–300万美元', '300万–500万美元', '500万美元以上'],
        },
        {
          key: 'loan',
          type: 'choice',
          question: '预计贷款金额？',
          options: ['80万美元以下', '80万–150万美元', '150万–250万美元', '250万–400万美元', '400万美元以上', '尚未确定'],
        },
        {
          key: 'income',
          type: 'choice',
          question: '您的收入类型？',
          options: ['W-2 雇员', '自雇', '企业主', '投资者', '其他'],
        },
        {
          key: 'language',
          type: 'choice',
          question: '首选语言？',
          options: ['English', '中文', '两者皆可'],
        },
      ],
      result: {
        eyebrow: '您的路径',
        title: '根据您的回答，您的情况可能适合进行私人化的大额房贷策略评估。',
        body:
          '每个人的情况都不同。一次简短、私密的沟通，是了解哪些贷款结构与文件可能适合您目标的最佳方式——且没有任何义务。',
        summaryTitle: '您的回答',
        nextTitle: '下一步',
        nextBody: '与持牌房贷专业人士预约一次私人评估。',
        nextCta: '预约私人评估',
        disclaimer: '以上仅为一般性指导——并非贷款决定、预先资格审核或贷款承诺。',
      },
    },

    guide: {
      whatIsJumbo: {
        eyebrow: '基础知识',
        title: '什么样的贷款属于“大额贷款”？',
        paras: [
          '当贷款金额超过所在县当年设定的合规贷款上限时，这笔房贷即被称为“大额贷款”（Jumbo）。等于或低于该上限的贷款遵循标准的房利美或房地美规定；超过上限的贷款则不适用，因此需遵循更细致的贷款机构规定。',
          '在露娜达湾和帕洛斯弗迪斯这样的高价值地区，许多住宅的价值都超过该上限——这正是大额贷款在此地常见的原因。大额贷款本身并非风险更高，只是需要对收入、资产与房产进行更细致的审阅。',
        ],
        glossaryTitle: '通俗词汇表',
        glossary: [
          { term: '合规上限（Conforming limit）', def: '遵循标准房利美 / 房地美规定的最高贷款金额。超过该上限，贷款即为“大额贷款”。' },
          { term: '储备金（Reserves）', def: '交割后仍保留的存款或资产——通常以可覆盖的月供数衡量——用以证明您有能力承担贷款。' },
          { term: 'Non-QM', def: '“非合格房贷”。在仍遵循机构规定的前提下，采用替代方式记录收入的贷款。' },
          { term: '银行流水贷款', def: '一种 Non-QM 方案，以银行存款而非税表来审阅收入——常见于自雇借款人。' },
          { term: 'DSCR', def: '“偿债覆盖率”。针对投资房产，将租金收入与贷款还款进行比较。' },
          { term: '只还利息', def: '在设定期限内仅偿还利息的结构，可在此期间降低月供。' },
        ],
      },
      lenderReview: {
        eyebrow: '审阅方式',
        title: '贷款机构可能审阅哪些方面',
        intro:
          '大额贷款文件会作为一个整体来审阅。以下是贷款机构可能考量的方面。每个项目与借款人都不同，均需符合机构规定及承保。',
        cards: [
          { title: '信用状况', body: '您的信用记录，以及您对以往债务的管理情况。' },
          { title: '收入文件', body: '收入的呈现方式——税表、W-2、银行流水或其他记录。' },
          { title: '资产与储备金', body: '用于首付与交割的资金，以及之后保留的存款。' },
          { title: '房产类型', body: '独立屋、公寓、多单元或第二套住宅——各自规定可能不同。' },
          { title: '居住性质', body: '房产是自住、第二套住宅还是投资用途。' },
          { title: '贷款金额', body: '贷款金额相对于房产价值及县级上限的大小。' },
          { title: '首付或净值', body: '您的首付金额，或再融资时已持有的房产净值。' },
          { title: '承保规定', body: '完整文件须满足的特定贷款机构规则。' },
        ],
      },
      beforeOffer: {
        eyebrow: '出价之前',
        title: '在您出价之前',
        copy:
          '在为 Lunada Bay 或 Palos Verdes 的房产出价之前，先了解房产背后的贷款结构可能非常重要，包括贷款金额、首付、储备金、文件要求，以及是否可能需要大额贷款或其他贷款路径。',
        cta: '开始了解贷款路径',
      },
    },

    documents: {
      eyebrow: '准备工作',
      title: '您可能需要的文件',
      intro:
        '具体要求因项目与贷款机构而异，以下是按借款人类型列出的一般起点。开始时无需备齐这些文件——它只是帮助您做好准备。',
      note: '所提供的文件将在符合贷款机构规定及承保审批的前提下审阅。',
      tabs: [
        {
          label: 'W-2 雇员',
          items: [
            '近期 W-2 表格（通常为两年）',
            '近期工资单',
            '两个月的银行流水',
            '政府签发的带照片身份证件',
            '资产与储备金说明',
          ],
        },
        {
          label: '自雇人士',
          items: [
            '个人税表（通常为两年）',
            '企业税表（如适用）',
            '本年度至今的损益表',
            '近期银行流水',
            '营业执照或同等证明',
          ],
        },
        {
          label: '企业主',
          items: [
            '企业及个人税表',
            '损益表与资产负债表',
            '企业银行流水',
            '持股比例证明',
            '资产与储备金说明',
          ],
        },
        {
          label: '投资者 / DSCR',
          items: [
            '租约或市场租金估算',
            '房产详情与运营支出',
            '近期银行流水',
            '资产组合概览（如适用）',
            '实体文件（如以 LLC 持有）',
          ],
        },
        {
          label: '再融资',
          items: [
            '现有贷款月结单',
            '房屋保险与房产税信息',
            '与您借款人类型相符的收入证明',
            '近期银行流水',
            '当前房产价值估算',
          ],
        },
      ],
    },

    privateReview: {
      eyebrow: '合作方式',
      title: '私人评估',
      intro: '在您做出任何承诺之前，以从容、私密的方式了解您的选择。',
      points: [
        { label: '预约制', text: '以预约方式进行——一次私人沟通，而非自动报价。' },
        { label: '保密', text: '您的信息将被审慎对待，并由持牌专业人士审阅。' },
        { label: '无义务', text: '不构成贷款承诺、不提供利率报价、不施加压力——只提供清晰指导。' },
        { label: '策略优先', text: '我们关注结构、文件与时机——而不仅是一个数字。' },
      ],
      cta: '预约私人评估',
    },

    nav: {
      start: '从这里开始',
      strategy: '大额贷款策略',
      guide: '贷款指南',
      about: '关于我们',
      markets: '本地市场',
      programs: '贷款项目',
      process: '服务流程',
      faq: '常见问题',
      contact: '联系我们',
      cta: '预约评估',
    },

    hero: {
      eyebrow: '私人大额房贷咨询',
      headline: '露娜达湾及洛杉矶海岸高端住宅大额贷款策略',
      subhead:
        '为购买、再融资或投资高价值住宅的客户提供专业、私密、清晰的大额房贷方案指导。',
      primaryCta: '预约私人贷款评估',
      secondaryCta: '了解大额贷款方案',
      trustLine:
        '服务露娜达湾、帕洛斯弗迪斯、南湾、洛杉矶县及加州精选高端住宅市场。',
    },

    localPositioning: '为露娜达湾、帕洛斯弗迪斯及洛杉矶海岸地区提供本地大额房贷策略。',
    localTrust:
      '由居住在帕洛斯弗迪斯本地社区的房贷专业人士提供指导，了解当地高端住宅市场及大额贷款需求。',

    localAuthority: {
      eyebrow: '本地专业',
      title: '专为这个市场而建，而非面向所有市场',
      intro:
        '露娜达湾和帕洛斯弗迪斯并不是普通的房贷市场。许多高价值住宅可能需要大额贷款、资产审核、企业主收入分析、储备金规划以及更细致的贷款结构设计。Lunada Bay Mortgage 专为希望获得更清晰、更专业融资策略的本地客户而建立。',
      cards: [
        {
          title: '本地帕洛斯弗迪斯专业知识',
          body: '由居住在帕洛斯弗迪斯本地社区的专业人士提供指导，熟悉当地高端住宅市场。',
        },
        {
          title: '大额贷款策略',
          body: '为超过标准合规上限的住宅提供结构设计、文件整理与储备金规划。',
        },
        {
          title: '企业主与自雇借款人',
          body: '银行流水及 Non-QM 方式，可能以贷款机构认可的方式呈现收入。',
        },
        {
          title: '中英双语指导',
          body: '提供中英双语支持，清晰讲解美国房贷流程。',
        },
        {
          title: '投资与 DSCR 方案',
          body: '为符合条件的投资房产提供以现金流为基础的融资，视机构规定而定。',
        },
        {
          title: '高价值房产经验',
          body: '熟悉高端海岸住宅、复杂借款人情况及高价值交易。',
        },
      ],
    },

    insights: {
      eyebrow: '专业洞见',
      title: '帕洛斯弗迪斯及洛杉矶海岸房贷洞见',
      intro:
        '关于大额贷款策略、自雇融资及海岸房产的教育性内容。仅供参考，不构成贷款承诺。',
      readMore: '阅读指导',
    },

    localPage: {
      home: '首页',
      exploreTitle: '探索其他区域',
      ctaTitle: '预约私人贷款评估',
      ctaBody: '请留下部分信息，持牌房贷专业人士将审核您的资料并与您联系。',
      ctaButton: '提交私人评估申请',
      disclaimerShort:
        '仅供参考，不构成贷款承诺。所有贷款均需符合借款人资格、贷款机构规定及承保审批。',
      backHome: '← 返回首页',
    },

    strategy: {
      eyebrow: '大额贷款策略',
      title: '贷款结构与利率同样重要',
      intro:
        '当贷款金额超过所在县的常规合规贷款上限时，通常需要采用大额贷款（Jumbo Loan）。对于高价值的海岸住宅而言，融资结构往往与利率同等重要——贷款如何呈现、如何规划、如何把握时机，常常比单一数字更能影响最终结果。',
      cards: [
        { title: '贷款金额策略', body: '结合房产价值、县级上限与长期目标合理规划贷款规模，而非仅看单一门槛。' },
        { title: '首付规划', body: '综合考量流动性、储备金与结构，找到与整体规划相匹配的首付方案。' },
        { title: '资产与储备金审阅', body: '提前审阅资产与所需储备金，使文件在进入承保前得到充分支撑。' },
        { title: '企业主收入', body: '以贷款机构认可的方式，清晰呈现自雇及企业主的收入情况。' },
        { title: '只还利息方案', body: '了解在何种情况下可能提供只还利息结构，及其对现金流与规划的影响。' },
        { title: '银行流水 / Non-QM', body: '为收入无法在税表中完整体现的借款人，探索替代性文件路径。' },
        { title: 'DSCR 投资方案', body: '为符合条件的投资场景，考虑以房产现金流为基础的融资，视机构规定而定。' },
        { title: '套现再融资策略', body: '评估动用房产净值是否与利率环境、目标及长期规划相匹配。' },
        { title: '第二套住宅融资', body: '针对海岸第二套住宅规划融资，并关注居住性质与机构要求。' },
      ],
    },

    about: {
      eyebrow: '关于 Anatoliy',
      title: '超越利率的专业指导',
      lead:
        'Lunada Bay Mortgage 由 West Coast Capital Mortgage Inc. 创始人 Anatoliy Kanevsky 负责。Anatoliy 是加州房地产及房贷专业人士，拥有房地产经纪、住宅贷款、高端住宅开发以及复杂贷款方案分析经验。他的服务不仅仅是提供利率报价，而是帮助客户从贷款结构、资产文件、收入情况、房产价值、贷款目的和长期策略等角度，清楚理解适合自己的融资路径。',
      body:
        '客户获得的不仅是一份贷款报价，而是来自一位同时精通贷款、房地产、开发及复杂房产决策专业人士的指导——并能将这些经验转化为清晰、周全的方案。',
      credentialsTitle: '资历与背景',
      credentials: [
        'West Coast Capital Mortgage Inc. 创始人',
        '加州房地产经纪人（Broker）',
        'West Coast Capital Mortgage Inc. 指定负责人（Designated Officer）',
        'California Residential Development Partners 首席执行官 / 负责人',
        '数十年住宅贷款与房地产经纪经验',
        '熟悉大额贷款、Non-QM、DSCR、银行流水及自雇借款人方案',
        '拥有实际高端住宅开发经验，而非仅停留在贷款理论',
      ],
    },

    markets: {
      eyebrow: '本地市场',
      title: '洛杉矶海岸与南湾地区',
      intro:
        '高价值的海岸住宅往往需要超越常规贷款结构的融资策略。我们专注于自己深入了解的社区。',
      note: '高价值的海岸住宅往往需要超越常规贷款结构的融资策略。',
      items: [
        { name: '露娜达湾 Lunada Bay', note: '临崖庄园与成熟的海岸高端住宅。' },
        { name: '帕洛斯弗迪斯庄园 Palos Verdes Estates', note: '规划完善的半岛生活与优质房产。' },
        { name: '兰乔帕洛斯弗迪斯 Rancho Palos Verdes', note: '海景住宅与山坡庄园。' },
        { name: '罗林山 Rolling Hills', note: '私密封闭式马术与庄园社区。' },
        { name: '罗林山庄园 Rolling Hills Estates', note: '精致的半岛社区与家庭庄园。' },
        { name: '曼哈顿海滩 Manhattan Beach', note: '备受青睐的近海与海滨步道房产。' },
        { name: '雷东多海滩 Redondo Beach', note: '海岸住宅与多单元房产机会。' },
        { name: '托伦斯 Torrance', note: '成熟的南湾社区与价值之选。' },
        { name: '南湾高端市场 South Bay', note: '精选高价值海岸与山坡房产。' },
      ],
    },

    programs: {
      eyebrow: '贷款项目',
      title: '面向高价值房产的融资方案',
      intro:
        '具体方案是否可行，取决于借款人情况、贷款机构规定、信用、收入、资产、房产类型、居住性质及承保审核。',
      disclaimer:
        '是否可提供，取决于借款人情况、贷款机构规定、信用、收入、资产、房产类型、居住性质及承保审核。',
      items: [
        { title: '大额购房贷款', body: '为超过合规上限的高价值自住及海岸住宅提供融资。' },
        { title: '大额再融资', body: '为现有高价值房产提供再融资方案，视审核而定。' },
        { title: '只还利息大额贷款', body: '在可提供的情况下，以只还利息结构支持现金流规划。' },
        { title: '资产型 / 高净值借款人方案', body: '在资格审核中可考虑充足资产状况的方案。' },
        { title: '银行流水贷款', body: '为符合条件的自雇借款人提供替代性文件方案。' },
        { title: 'DSCR 投资贷款', body: '为符合条件的投资房产提供以房产现金流为基础的融资。' },
        { title: '第二套住宅融资', body: '针对海岸及度假第二套住宅设计的融资方案。' },
        { title: '套现再融资', body: '在符合目标与规定的前提下动用房产净值。' },
        { title: 'Non-QM 房贷方案', body: '为不符合传统资格标准的借款人提供灵活方案。' },
      ],
    },

    clients: {
      eyebrow: '服务对象',
      title: '为复杂情况量身定制的指导',
      intro:
        '每一笔高价值交易都各不相同。我们与那些需要周全、个性化融资方案的客户紧密合作。',
      items: [
        {
          title: '高端住宅买家',
          body: '注重私密性与清晰度、希望获得与房产相匹配融资方案的高价值海岸及山坡住宅买家。',
        },
        {
          title: '企业主 / 自雇借款人',
          body: '收入应以贷款机构认可的方式被准确呈现的企业主与自雇专业人士。',
        },
        {
          title: '房地产投资者',
          body: '在符合机构规定的前提下，权衡 DSCR、套现及资产组合策略的投资者。',
        },
        {
          title: '华语买家 / 国际家庭',
          body: '提供中英双语指导，清晰讲解美国房贷流程，协助理解所需文件，并在购房、再融资及投资房产决策方面提供支持。',
        },
      ],
    },

    process: {
      eyebrow: '服务流程',
      title: '私人贷款评估流程',
      intro:
        '从初次沟通到最终交割，我们以从容、有序的方式，在每一步为您带来清晰的方向。',
      steps: [
        { title: '房产与贷款目标', body: '从您的房产、贷款目的与目标出发，确定合适的方案方向。' },
        { title: '收入 / 资产审阅', body: '提前审阅收入与资产，使文件在进入承保前处于有利位置。' },
        { title: '大额贷款方案比较', body: '就期限、文件方式及各类方案与您的目标进行比较。' },
        { title: '匹配贷款机构', body: '筛选出规定与您的情况及房产相匹配的贷款机构。' },
        { title: '预批或再融资路径', body: '推进至预批或明确的再融资路径，并制定清晰的后续步骤。' },
        { title: '交割支持', body: '在承保与交割过程中持续跟进，确保流程顺利推进。' },
      ],
    },

    faq: {
      eyebrow: '常见问题',
      title: '为您清晰解答',
      items: [
        {
          q: '什么是大额贷款（Jumbo Loan）？',
          a: '大额贷款通常指超过所在县合规贷款上限的房贷。高价值的海岸住宅常属于这一类别，往往需要更为周全的融资结构。',
        },
        {
          q: '我必须首付 20% 吗？',
          a: '不一定。首付要求因贷款机构、项目、房产及借款人情况而异。部分情形在符合机构规定与承保审核的前提下，可能采用不同结构。',
        },
        {
          q: '如果我是自雇人士怎么办？',
          a: '自雇借款人有机会获批。关键在于清晰呈现收入，并选择符合机构规定的文件路径，例如银行流水或 Non-QM 方案。我们会协助尽早、准确地整理文件。',
        },
        {
          q: '如果我的税表未能体现全部收入怎么办？',
          a: '这在自雇及企业主借款人中很常见。替代性文件方案（例如银行流水贷款）可能以企业存款而非税表来审阅收入，具体视机构规定及承保审批而定。',
        },
        {
          q: '企业主能否获批？',
          a: '可以。贷款机构可能审阅企业及个人文件以了解收入。目标是以机构认可的方式呈现收入——具体视机构规定及承保审核而定。',
        },
        {
          q: '投资者能否使用 DSCR？',
          a: '对于符合条件的投资房产，DSCR（偿债覆盖率）融资关注房产的租金收入相对于贷款还款，而非个人收入。是否适用取决于房产类型、机构规定及承保。',
        },
        {
          q: '我能否使用只还利息方案？',
          a: '在部分大额贷款项目中可能提供只还利息结构，具体视机构规定与借款人情况而定。此类结构有助于现金流规划，但并非适合所有情况。',
        },
        {
          q: '我能否为高价值房产再融资？',
          a: '可以。再融资可能有助于调整贷款结构、通过套现动用房产净值，或在可提供时在只还利息与本息摊还之间转换——需符合借款人资格及承保审批。',
        },
        {
          q: '你们能用中文讲解流程吗？',
          a: '可以。我们提供中英双语指导，清晰讲解美国房贷流程，并协助理解购房、再融资及投资场景中所需的文件。',
        },
        {
          q: '本网站是否构成贷款承诺？',
          a: '不构成。本网站仅供参考，不构成贷款承诺。所有贷款均需符合借款人资格、信用审批、收入、资产、房产审核、机构规定及承保审批。',
        },
        {
          q: '提交信息之后会发生什么？',
          a: '持牌房贷专业人士将审阅您分享的信息，并私下与您联系以了解您的目标。没有任何义务——第一步只是一次清晰、私密的沟通。',
        },
        {
          q: '为何选择一位同时具备房地产与开发经验的顾问？',
          a: '跨越贷款、经纪及高端住宅开发的经验，意味着所提供的指导会综合考量结构、文件、时机、房产价值与长期方案——而不仅是单一利率报价。',
        },
      ],
    },

    contact: {
      eyebrow: '预约评估',
      title: '预约私人贷款评估',
      intro:
        '请留下部分信息，持牌房贷专业人士将审核您的资料并与您联系。您的信息将被审慎对待。',
      fields: {
        name: '姓名',
        phone: '电话',
        email: '电子邮箱',
        preferredLanguage: '首选语言',
        location: '房产所在地或邮编',
        purchasePrice: '预计购买价格或房产价值',
        loanAmount: '预计贷款金额',
        loanPurpose: '贷款用途',
        employmentType: '就业类型',
        message: '留言',
      },
      placeholders: {
        name: '您的姓名',
        phone: '(310) 000-0000',
        email: 'you@email.com',
        location: '例如：露娜达湾 或 90274',
        purchasePrice: '选填',
        loanAmount: '选填',
        message: '我们能如何帮助您？',
      },
      options: {
        preferredLanguage: ['English', '中文', 'Both / 两者皆可'],
        loanPurpose: ['购买', '再融资', '套现', '投资', '第二套住宅'],
        employmentType: ['W-2 雇员', '自雇', '企业主', '投资者', '其他'],
        select: '请选择',
      },
      submit: '提交私人评估申请',
      success:
        '谢谢。我们已收到您的申请。持牌房贷专业人士将审核您的信息并与您联系。',
      required: '必填',
    },

    footer: {
      tagline: '为露娜达湾、帕洛斯弗迪斯及洛杉矶海岸地区提供私人大额房贷策略。',
      contactTitle: '联系方式',
      office: '办公室',
      direct: '直线',
      email: '邮箱',
      linksTitle: '相关网站',
      licensingTitle: '牌照信息',
      verifyNote: '发布前请核实',
      equalHousing: 'Equal Housing Opportunity（平等住房机会）',
      disclosure:
        'Lunada Bay Mortgage 是由 West Coast Capital Mortgage Inc. 运营的市场推广网站。Equal Housing Opportunity。本网站内容不构成贷款承诺。所有贷款均需符合借款人资格、信用审批、收入、资产、房产审核、贷款机构规定及最终承保审批。贷款项目、利率、条款和条件可能随时变更，恕不另行通知。',
      rights: '版权所有。',
    },
  },
}
