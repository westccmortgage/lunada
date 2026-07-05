/*
 * ============================================================================
 *  LOCAL SEO PAGES — bilingual (EN / ZH) content for each service area.
 * ----------------------------------------------------------------------------
 *  Each page renders: breadcrumb, H1, unique local intro, local highlights,
 *  a unique local-context block, shared (city-interpolated) educational
 *  sections, and a CTA back to the private mortgage review form.
 *
 *  Content is intentionally useful and location-specific — NOT thin doorway
 *  pages. Shared educational sections are interpolated with the city name so
 *  every page reads naturally for its market.
 *
 *  Compliance language throughout: "may be available", "subject to lender
 *  guidelines", "subject to borrower qualification", "subject to underwriting
 *  approval". No rates, no guarantees, no "best/lowest rate".
 * ============================================================================
 */

// ---- Shared educational sections (English), interpolated by city ----
const sharedEn = (city) => [
  {
    heading: `Jumbo loans in ${city}`,
    paras: [
      `A jumbo loan is generally a mortgage that exceeds the conforming loan limits set for the county. In a high-value market like ${city}, many homes fall above those limits, so financing often calls for a jumbo strategy rather than a standard conforming loan.`,
      `The structure of a jumbo loan — how income and assets are documented, how reserves are positioned, and how the file is presented to underwriting — can influence the outcome as much as the rate itself. Jumbo financing may be available depending on borrower qualification, credit, income, assets, property type, occupancy, and lender guidelines.`,
    ],
  },
  {
    heading: 'Self-employed and business-owner borrowers',
    paras: [
      `Many ${city} buyers are business owners, founders, and self-employed professionals whose income is real but not always straightforward on a tax return. Bank statement and other Non-QM documentation paths may be available for qualifying borrowers, allowing income to be presented in a way lenders are prepared to evaluate.`,
      `The goal is to position the file accurately and early — subject to lender guidelines and underwriting approval.`,
    ],
  },
  {
    heading: `Refinancing in ${city}`,
    paras: [
      `If you already own in ${city}, refinancing may help you adjust your loan structure, access equity through a cash-out refinance, or move between interest-only and amortizing options where available.`,
      `Whether a refinance makes sense depends on your goals, your current loan, the rate environment, and lender guidelines. We review the full picture before recommending a path — refinancing is subject to borrower qualification and underwriting approval.`,
    ],
  },
  {
    heading: 'Bilingual guidance for Chinese-speaking clients',
    paras: [
      `For Chinese-speaking buyers and international families, we provide guidance in both English and Simplified Chinese (中文) — including a clear explanation of the U.S. mortgage process, help understanding documentation, and support with purchase, refinance, and investment property decisions.`,
    ],
  },
]

// ---- Shared educational sections (Chinese), interpolated by city ----
const sharedZh = (cityZh) => [
  {
    heading: `${cityZh}的大额贷款`,
    paras: [
      `大额贷款（Jumbo Loan）通常指超过所在县合规贷款上限的房贷。在${cityZh}这样的高价值市场，许多住宅的价值都超过这一上限，因此融资往往需要采用大额贷款策略，而非标准合规贷款。`,
      `大额贷款的结构——收入与资产如何记录、储备金如何安排、文件如何呈递给承保部门——对最终结果的影响可能与利率同样重要。是否可提供大额贷款，取决于借款人资格、信用、收入、资产、房产类型、居住性质及贷款机构规定。`,
    ],
  },
  {
    heading: '自雇与企业主借款人',
    paras: [
      `许多${cityZh}的买家是企业主、创始人及自雇专业人士，他们的收入真实存在，但在税表上未必一目了然。对于符合条件的借款人，可能提供银行流水及其他 Non-QM 文件方式，使收入能以贷款机构认可的方式呈现。`,
      `目标是尽早、准确地整理文件——具体视贷款机构规定及承保审批而定。`,
    ],
  },
  {
    heading: `在${cityZh}再融资`,
    paras: [
      `如果您已在${cityZh}拥有房产，再融资可能有助于调整贷款结构、通过套现再融资动用房产净值，或在可提供的情况下在只还利息与本息摊还方案之间转换。`,
      `再融资是否合适，取决于您的目标、现有贷款、利率环境及贷款机构规定。我们会在建议方案前全面审阅——再融资需符合借款人资格及承保审批。`,
    ],
  },
  {
    heading: '为华语客户提供的双语指导',
    paras: [
      `对于华语买家及国际家庭，我们提供中英双语指导——包括清晰讲解美国房贷流程、协助理解所需文件，并在购房、再融资及投资房产决策方面提供支持。`,
    ],
  },
]

// ---- Per-page unique content ----
const PAGES = [
  {
    slug: 'lunada-bay-mortgage',
    city: 'Lunada Bay',
    cityZh: '露娜达湾',
    keywords:
      'Lunada Bay mortgage, Palos Verdes jumbo loans, luxury home financing Los Angeles, Lunada Bay home loan, 露娜达湾房贷, 帕洛斯弗迪斯房贷',
    en: {
      title: 'Lunada Bay Mortgage | Jumbo Loan Strategy in Palos Verdes',
      description:
        'Local jumbo mortgage strategy for Lunada Bay and the Palos Verdes Peninsula. Bilingual English and Chinese guidance for luxury homebuyers, investors, and self-employed borrowers.',
      h1: 'Lunada Bay Mortgage & Jumbo Loan Strategy',
      intro: [
        'Lunada Bay is one of the most distinctive coastal enclaves on the Palos Verdes Peninsula, known for its bluff-side estates, ocean views, and established luxury homes. Financing a home here is rarely a standard transaction. Property values in Lunada Bay frequently place a purchase above conforming loan limits, which means many buyers need a jumbo mortgage strategy rather than an off-the-shelf conforming loan.',
        'Lunada Bay Mortgage was built specifically for this market. Guidance comes from a mortgage professional who lives in the Palos Verdes community and understands the local luxury residential market — the property types, the buyer profiles, and the loan structures that tend to fit high-value coastal homes. The focus is on clarity: helping you understand structure, documentation, reserves, and timing, not just a single rate.',
      ],
      highlights: [
        'High-value bluff and ocean-view homes that often exceed conforming loan limits',
        'Jumbo, interest-only, and Non-QM options that may be available subject to guidelines',
        'Guidance from a professional based in the Palos Verdes community',
        'Bilingual English and 中文 support for local and international buyers',
      ],
      localContext: {
        heading: 'A market that rewards a thoughtful approach',
        paras: [
          'In a neighborhood like Lunada Bay, the difference between a smooth closing and a stalled one often comes down to preparation — how assets and reserves are documented, how self-employed income is presented, and how the loan is structured against the property. We take time to review the full picture before recommending a path.',
          'Whether you are purchasing a primary residence, financing a coastal second home, or considering a refinance, the goal is a strategy matched to the property and to your longer-term plans.',
        ],
      },
    },
    zh: {
      title: '露娜达湾房贷 | 帕洛斯弗迪斯大额贷款策略',
      description:
        '为露娜达湾及帕洛斯弗迪斯半岛提供本地大额房贷策略，中英双语，服务高端购房者、投资者及自雇借款人。',
      h1: '露娜达湾房贷与大额贷款策略',
      intro: [
        '露娜达湾是帕洛斯弗迪斯半岛上极具特色的海岸社区之一，以临崖庄园、海景住宅和成熟的高端房产而闻名。在这里购房很少是标准交易——露娜达湾的房产价值常常超过合规贷款上限，这意味着许多买家需要的是大额贷款策略，而非现成的合规贷款。',
        'Lunada Bay Mortgage 正是为这一市场而建立。指导来自一位居住在帕洛斯弗迪斯本地社区、了解当地高端住宅市场的房贷专业人士——熟悉房产类型、买家情况以及适合高价值海岸住宅的贷款结构。我们的重点是清晰：帮助您理解贷款结构、文件、储备金与时机，而不仅仅是一个利率。',
      ],
      highlights: [
        '价值常超合规上限的临崖及海景住宅',
        '在符合规定的前提下可能提供大额、只还利息及 Non-QM 方案',
        '由扎根帕洛斯弗迪斯社区的专业人士提供指导',
        '为本地及国际买家提供中英双语支持',
      ],
      localContext: {
        heading: '一个值得用心对待的市场',
        paras: [
          '在露娜达湾这样的社区，顺利交割与停滞不前之间的差别，往往取决于准备——资产与储备金如何记录、自雇收入如何呈现、贷款如何与房产相匹配。我们会在建议方案前，花时间全面审阅。',
          '无论您是购买自住房、为海岸第二套住宅融资，还是考虑再融资，目标都是一套与房产及长期规划相契合的策略。',
        ],
      },
    },
  },

  {
    slug: 'palos-verdes-jumbo-loans',
    city: 'Palos Verdes',
    cityZh: '帕洛斯弗迪斯',
    keywords:
      'Palos Verdes jumbo loans, Palos Verdes mortgage broker, luxury home financing Los Angeles, jumbo mortgage peninsula, 帕洛斯弗迪斯房贷, 大额房贷',
    en: {
      title: 'Palos Verdes Jumbo Loans | Luxury Home Mortgage Guidance',
      description:
        'Jumbo loan guidance across the Palos Verdes Peninsula — Palos Verdes Estates, Rancho Palos Verdes, Rolling Hills, and Lunada Bay. Bilingual, local, and strategy-focused.',
      h1: 'Palos Verdes Jumbo Loans',
      intro: [
        "The Palos Verdes Peninsula — including Palos Verdes Estates, Rancho Palos Verdes, Rolling Hills, Rolling Hills Estates, and Lunada Bay — is one of Southern California's premier luxury housing markets. Homes here frequently exceed county conforming loan limits, which places most purchases into jumbo loan territory.",
        'A jumbo loan is not simply a bigger mortgage. It often involves more detailed asset review, reserve planning, and careful structure. Lunada Bay Mortgage provides local, community-based guidance across the entire peninsula, helping buyers and homeowners understand the options that may fit their situation.',
      ],
      highlights: [
        'Coverage across the full Palos Verdes Peninsula',
        'Jumbo purchase, refinance, and interest-only options subject to lender guidelines',
        'Support for business owners, self-employed borrowers, and investors',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'Why peninsula financing is different',
        paras: [
          'Peninsula properties vary widely — from ocean-view estates to gated equestrian parcels — and each can carry its own financing considerations around value, occupancy, and documentation. A one-size approach rarely serves these homes well.',
          'Our role is to compare structures and lenders against your goals, so you can move forward with a clear, considered plan rather than a rushed quote.',
        ],
      },
    },
    zh: {
      title: '帕洛斯弗迪斯大额贷款 | 高端住宅房贷指导',
      description:
        '为帕洛斯弗迪斯半岛提供大额贷款指导，涵盖 Palos Verdes Estates、Rancho Palos Verdes、Rolling Hills 及露娜达湾，本地、双语、注重策略。',
      h1: '帕洛斯弗迪斯大额贷款',
      intro: [
        '帕洛斯弗迪斯半岛——包括 Palos Verdes Estates、Rancho Palos Verdes、Rolling Hills、Rolling Hills Estates 及露娜达湾——是南加州首屈一指的高端住宅市场之一。这里的住宅价值常常超过所在县的合规贷款上限，使大多数购房进入大额贷款范畴。',
        '大额贷款并不只是金额更大的房贷，通常还涉及更细致的资产审核、储备金规划与结构设计。Lunada Bay Mortgage 为整个半岛提供本地、扎根社区的指导，帮助买家与房主了解可能适合自身情况的方案。',
      ],
      highlights: [
        '覆盖整个帕洛斯弗迪斯半岛',
        '在符合机构规定的前提下提供大额购房、再融资及只还利息方案',
        '为企业主、自雇借款人及投资者提供支持',
        '中英双语指导',
      ],
      localContext: {
        heading: '为何半岛融资有所不同',
        paras: [
          '半岛房产差异很大——从海景庄园到封闭式马术地块，各自在价值、居住性质与文件方面都有独特考量。单一方案往往难以妥善服务这些住宅。',
          '我们的职责是就结构与贷款机构与您的目标进行比较，让您能带着清晰、周全的方案前行，而非仓促的报价。',
        ],
      },
    },
  },

  {
    slug: 'palos-verdes-estates-mortgage',
    city: 'Palos Verdes Estates',
    cityZh: 'Palos Verdes Estates',
    keywords:
      'Palos Verdes Estates mortgage, Palos Verdes jumbo loans, luxury home financing, Palos Verdes mortgage broker, 帕洛斯弗迪斯房贷, 大额房贷',
    en: {
      title: 'Palos Verdes Estates Mortgage | Jumbo Loan Guidance',
      description:
        'Local jumbo mortgage guidance for Palos Verdes Estates. Luxury home financing, self-employed and business-owner options, refinancing, and bilingual English & Chinese support.',
      h1: 'Palos Verdes Estates Mortgage & Jumbo Loans',
      intro: [
        'Palos Verdes Estates is a master-planned coastal city known for its architectural character, tree-lined streets, and premium residential properties. Home values here commonly place purchases above conforming loan limits, making jumbo financing a frequent part of the conversation.',
        'Lunada Bay Mortgage offers local Palos Verdes community-based mortgage guidance for buyers and homeowners in Palos Verdes Estates. The emphasis is on understanding the full structure of a loan — not just a rate — so decisions are made with clarity.',
      ],
      highlights: [
        'Premium properties that frequently require jumbo financing',
        'Detailed asset and reserve review for high-value purchases',
        'Options for self-employed and business-owner borrowers',
        'Bilingual English and 中文 guidance',
      ],
      localContext: {
        heading: 'Financing a Palos Verdes Estates home',
        paras: [
          'Because many homes in Palos Verdes Estates are held by professionals, business owners, and long-time residents, financing scenarios can be nuanced — from documenting complex income to planning reserves for a high-value purchase.',
          'We take the time to position a file well and to compare options that may fit, subject to lender guidelines and underwriting review.',
        ],
      },
    },
    zh: {
      title: 'Palos Verdes Estates 房贷 | 大额贷款指导',
      description:
        '为 Palos Verdes Estates 提供本地大额房贷指导：高端住宅融资、自雇与企业主方案、再融资及中英双语支持。',
      h1: 'Palos Verdes Estates 房贷与大额贷款',
      intro: [
        'Palos Verdes Estates 是一座规划完善的海岸城市，以其建筑特色、林荫街道和优质住宅而闻名。这里的房产价值常使购房超过合规贷款上限，大额贷款因此成为常见话题。',
        'Lunada Bay Mortgage 为 Palos Verdes Estates 的买家与房主提供扎根帕洛斯弗迪斯本地社区的房贷指导，重点在于理解贷款的整体结构——而不仅是利率——从而在清晰的基础上做出决策。',
      ],
      highlights: [
        '常需大额融资的优质房产',
        '为高价值购房进行细致的资产与储备金审核',
        '为自雇及企业主借款人提供方案',
        '中英双语指导',
      ],
      localContext: {
        heading: '为 Palos Verdes Estates 住宅融资',
        paras: [
          '由于 Palos Verdes Estates 的许多住宅由专业人士、企业主及长期居民持有，融资情况可能较为复杂——从记录复杂收入到为高价值购房规划储备金。',
          '我们会花时间妥善整理文件，并比较可能适合的方案，具体视贷款机构规定及承保审核而定。',
        ],
      },
    },
  },

  {
    slug: 'rancho-palos-verdes-mortgage',
    city: 'Rancho Palos Verdes',
    cityZh: 'Rancho Palos Verdes',
    keywords:
      'Rancho Palos Verdes mortgage, Palos Verdes jumbo loans, ocean view home financing, RPV mortgage broker, 帕洛斯弗迪斯房贷, 大额房贷',
    en: {
      title: 'Rancho Palos Verdes Mortgage | Jumbo Home Loan Guidance',
      description:
        'Jumbo mortgage guidance for Rancho Palos Verdes — ocean-view and hillside homes. Local, bilingual English & Chinese support for buyers, investors, and self-employed borrowers.',
      h1: 'Rancho Palos Verdes Mortgage & Jumbo Loans',
      intro: [
        'Rancho Palos Verdes is known for its dramatic ocean views, hillside homes, and open coastal landscape. Many of its properties carry values that exceed conforming loan limits, which is where a jumbo mortgage strategy becomes relevant.',
        'As a local, community-based mortgage resource, Lunada Bay Mortgage helps Rancho Palos Verdes buyers and homeowners understand loan structure, documentation, and the options that may be available for their situation.',
      ],
      highlights: [
        'Ocean-view and hillside homes often above conforming limits',
        'Jumbo purchase and refinance strategies subject to guidelines',
        'Second-home and investment considerations for coastal property',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'Coastal property, considered financing',
        paras: [
          'Hillside and view properties can involve particular attention to value and documentation. Getting ahead of those details early tends to make the process smoother.',
          'Whether buying, refinancing, or exploring a cash-out option, the goal is a plan that fits the property and your objectives.',
        ],
      },
    },
    zh: {
      title: 'Rancho Palos Verdes 房贷 | 大额住宅贷款指导',
      description:
        '为 Rancho Palos Verdes 的海景及山坡住宅提供大额房贷指导，本地、中英双语，服务买家、投资者及自雇借款人。',
      h1: 'Rancho Palos Verdes 房贷与大额贷款',
      intro: [
        'Rancho Palos Verdes 以壮丽的海景、山坡住宅和开阔的海岸风光而闻名。这里许多房产的价值超过合规贷款上限，大额贷款策略因此变得相关。',
        '作为本地、扎根社区的房贷资源，Lunada Bay Mortgage 帮助 Rancho Palos Verdes 的买家与房主理解贷款结构、文件，以及可能适合其情况的方案。',
      ],
      highlights: [
        '常超合规上限的海景与山坡住宅',
        '在符合规定的前提下提供大额购房与再融资策略',
        '海岸房产的第二套住宅与投资考量',
        '中英双语指导',
      ],
      localContext: {
        heading: '海岸房产，周全融资',
        paras: [
          '山坡与景观房产可能需要对价值与文件给予特别关注。提前处理好这些细节，往往能让流程更顺畅。',
          '无论是购买、再融资还是探索套现方案，目标都是一套契合房产与您目标的计划。',
        ],
      },
    },
  },

  {
    slug: 'rolling-hills-mortgage',
    city: 'Rolling Hills',
    cityZh: 'Rolling Hills',
    keywords:
      'Rolling Hills mortgage, estate home financing, Palos Verdes jumbo loans, private community mortgage, 大额房贷, 帕洛斯弗迪斯房贷',
    en: {
      title: 'Rolling Hills Mortgage | Private Estate Jumbo Loan Guidance',
      description:
        'Jumbo mortgage guidance for Rolling Hills, a private gated estate community. Local, discreet, bilingual English & Chinese support for luxury and self-employed borrowers.',
      h1: 'Rolling Hills Mortgage & Jumbo Loans',
      intro: [
        'Rolling Hills is a private, gated community known for its equestrian character, large parcels, and estate homes. Property values here are among the highest on the peninsula, and financing almost always involves a jumbo loan strategy.',
        'Lunada Bay Mortgage provides discreet, local guidance for Rolling Hills buyers and homeowners, with attention to the structure and documentation that high-value estate financing typically requires.',
      ],
      highlights: [
        'Estate properties and large parcels with high valuations',
        'Jumbo financing with careful asset and reserve review',
        'Discretion and local, community-based guidance',
        'English and 中文 support',
      ],
      localContext: {
        heading: 'Estate financing with discretion',
        paras: [
          'Estate purchases often involve substantial assets, complex income, and a need for privacy. We work to present these files clearly and to identify lenders whose guidelines fit.',
          'Every recommendation is subject to borrower qualification, lender guidelines, and underwriting approval.',
        ],
      },
    },
    zh: {
      title: 'Rolling Hills 房贷 | 私密庄园大额贷款指导',
      description:
        '为封闭式私密庄园社区 Rolling Hills 提供大额房贷指导，本地、审慎、中英双语，服务高端及自雇借款人。',
      h1: 'Rolling Hills 房贷与大额贷款',
      intro: [
        'Rolling Hills 是一个封闭式私密社区，以马术风情、大面积地块和庄园住宅而著称。这里的房产价值位居半岛前列，融资几乎总会涉及大额贷款策略。',
        'Lunada Bay Mortgage 为 Rolling Hills 的买家与房主提供审慎、本地的指导，关注高价值庄园融资通常所需的结构与文件。',
      ],
      highlights: [
        '估值较高的庄园房产与大面积地块',
        '配合细致资产与储备金审核的大额融资',
        '审慎且扎根本地社区的指导',
        '中英双语支持',
      ],
      localContext: {
        heading: '审慎的庄园融资',
        paras: [
          '庄园购置通常涉及大量资产、复杂收入以及对隐私的需求。我们致力于清晰呈现这些文件，并找到规定相符的贷款机构。',
          '每项建议均需符合借款人资格、贷款机构规定及承保审批。',
        ],
      },
    },
  },

  {
    slug: 'rolling-hills-estates-mortgage',
    city: 'Rolling Hills Estates',
    cityZh: 'Rolling Hills Estates',
    keywords:
      'Rolling Hills Estates mortgage, Palos Verdes jumbo loans, peninsula home financing, mortgage broker, 帕洛斯弗迪斯房贷, 大额房贷',
    en: {
      title: 'Rolling Hills Estates Mortgage | Jumbo Loan Guidance',
      description:
        'Local jumbo mortgage guidance for Rolling Hills Estates. Luxury home financing, refinancing, and bilingual English & Chinese support for peninsula buyers and owners.',
      h1: 'Rolling Hills Estates Mortgage & Jumbo Loans',
      intro: [
        'Rolling Hills Estates blends refined peninsula neighborhoods with a family-oriented, semi-rural character. Many homes here are valued above conforming loan limits, making jumbo financing a common part of the buying and refinancing process.',
        'Lunada Bay Mortgage offers local, community-based guidance for Rolling Hills Estates, focused on helping clients understand structure, documentation, and the options that may suit their goals.',
      ],
      highlights: [
        'Peninsula homes that frequently require jumbo loans',
        'Purchase and refinance strategies subject to guidelines',
        'Options for self-employed and business-owner borrowers',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'Guidance for peninsula families',
        paras: [
          'Families buying or refinancing in Rolling Hills Estates often value a calm, clear process. We aim to bring order to the details — income, assets, reserves, and structure — before they reach underwriting.',
          'The result is a strategy matched to your home and your longer-term plans.',
        ],
      },
    },
    zh: {
      title: 'Rolling Hills Estates 房贷 | 大额贷款指导',
      description:
        '为 Rolling Hills Estates 提供本地大额房贷指导：高端住宅融资、再融资及中英双语支持，服务半岛买家与房主。',
      h1: 'Rolling Hills Estates 房贷与大额贷款',
      intro: [
        'Rolling Hills Estates 将精致的半岛社区与注重家庭、半乡村的氛围融为一体。这里许多住宅的价值超过合规贷款上限，使大额融资成为购房与再融资过程中的常见环节。',
        'Lunada Bay Mortgage 为 Rolling Hills Estates 提供本地、扎根社区的指导，帮助客户理解结构、文件，以及可能契合其目标的方案。',
      ],
      highlights: [
        '常需大额贷款的半岛住宅',
        '在符合规定的前提下提供购房与再融资策略',
        '为自雇及企业主借款人提供方案',
        '中英双语指导',
      ],
      localContext: {
        heading: '为半岛家庭提供指导',
        paras: [
          '在 Rolling Hills Estates 购房或再融资的家庭，往往看重从容、清晰的流程。我们力求在文件进入承保前，把收入、资产、储备金与结构等细节梳理清楚。',
          '最终形成一套契合您住宅与长期规划的策略。',
        ],
      },
    },
  },

  {
    slug: 'manhattan-beach-jumbo-loans',
    city: 'Manhattan Beach',
    cityZh: '曼哈顿海滩',
    keywords:
      'Manhattan Beach jumbo loans, South Bay jumbo mortgage, luxury home financing Los Angeles, beach home mortgage, 大额房贷, 洛杉矶房贷',
    en: {
      title: 'Manhattan Beach Jumbo Loans | Luxury Coastal Mortgage Guidance',
      description:
        'Jumbo loan guidance for Manhattan Beach luxury and beach-close homes. Local South Bay mortgage strategy with bilingual English & Chinese support.',
      h1: 'Manhattan Beach Jumbo Loans',
      intro: [
        'Manhattan Beach is one of the most sought-after coastal markets in the South Bay, with beach-close and strand properties that command premium values. Purchases here almost always exceed conforming loan limits, which places them squarely in jumbo loan territory.',
        'Lunada Bay Mortgage brings local South Bay knowledge and a strategy-first approach to Manhattan Beach buyers and homeowners, with an emphasis on structure, documentation, and options that may fit.',
      ],
      highlights: [
        'Beach-close and strand properties with premium valuations',
        'Jumbo, interest-only, and Non-QM options subject to guidelines',
        'Support for business owners, self-employed borrowers, and investors',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'Financing in a competitive coastal market',
        paras: [
          'In a fast-moving market like Manhattan Beach, being well-prepared matters. A file that is documented and structured in advance can make a meaningful difference.',
          'Whether purchasing, refinancing, or considering an investment property, the goal is a clear plan you can act on with confidence.',
        ],
      },
    },
    zh: {
      title: '曼哈顿海滩大额贷款 | 高端海岸住宅房贷指导',
      description:
        '为曼哈顿海滩的高端及近海住宅提供大额贷款指导，本地南湾房贷策略，中英双语支持。',
      h1: '曼哈顿海滩大额贷款',
      intro: [
        '曼哈顿海滩是南湾最受追捧的海岸市场之一，近海及海滨步道房产价值不菲。这里的购房几乎总会超过合规贷款上限，明确属于大额贷款范畴。',
        'Lunada Bay Mortgage 以本地南湾知识和策略优先的方式，为曼哈顿海滩的买家与房主服务，重点关注结构、文件以及可能契合的方案。',
      ],
      highlights: [
        '价值不菲的近海与海滨步道房产',
        '在符合规定的前提下提供大额、只还利息及 Non-QM 方案',
        '为企业主、自雇借款人及投资者提供支持',
        '中英双语指导',
      ],
      localContext: {
        heading: '在竞争激烈的海岸市场融资',
        paras: [
          '在曼哈顿海滩这样节奏迅速的市场，充分准备至关重要。提前整理并设计好结构的文件，能带来实质性的差别。',
          '无论是购买、再融资还是考虑投资房产，目标都是一套您可以自信付诸行动的清晰计划。',
        ],
      },
    },
  },

  {
    slug: 'redondo-beach-mortgage',
    city: 'Redondo Beach',
    cityZh: '雷东多海滩',
    keywords:
      'Redondo Beach mortgage, South Bay jumbo mortgage, DSCR loans South Bay, coastal home financing, 大额房贷, 洛杉矶房贷',
    en: {
      title: 'Redondo Beach Mortgage | Jumbo & Coastal Home Loan Guidance',
      description:
        'Local mortgage guidance for Redondo Beach — coastal homes and multi-unit properties. Jumbo, refinance, DSCR investment, and bilingual English & Chinese support.',
      h1: 'Redondo Beach Mortgage & Jumbo Loans',
      intro: [
        'Redondo Beach offers a mix of coastal residences, townhomes, and multi-unit properties, appealing to both homebuyers and investors. Many transactions here involve jumbo financing, and investment scenarios may call for specialized structures.',
        'Lunada Bay Mortgage provides local South Bay guidance for Redondo Beach, from luxury home purchases to investment property financing, subject to lender guidelines and underwriting.',
      ],
      highlights: [
        'Coastal homes and multi-unit investment opportunities',
        'Jumbo purchase and refinance options subject to guidelines',
        'DSCR investment financing for qualifying properties',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'Homes and investment property',
        paras: [
          "Redondo Beach's range of property types means financing can vary — a primary-residence jumbo loan is a different conversation from a DSCR loan on a rental property.",
          'We help you understand which structures may apply and how to position the file, subject to qualification and underwriting.',
        ],
      },
    },
    zh: {
      title: '雷东多海滩房贷 | 大额及海岸住宅贷款指导',
      description:
        '为雷东多海滩的海岸住宅与多单元房产提供本地房贷指导：大额贷款、再融资、DSCR 投资及中英双语支持。',
      h1: '雷东多海滩房贷与大额贷款',
      intro: [
        '雷东多海滩汇集了海岸住宅、联排别墅与多单元房产，既吸引自住买家，也吸引投资者。这里许多交易涉及大额融资，而投资场景可能需要专门的结构。',
        'Lunada Bay Mortgage 为雷东多海滩提供本地南湾指导，从高端住宅购置到投资房产融资，具体视贷款机构规定及承保而定。',
      ],
      highlights: [
        '海岸住宅与多单元投资机会',
        '在符合规定的前提下提供大额购房与再融资方案',
        '为符合条件的房产提供 DSCR 投资融资',
        '中英双语指导',
      ],
      localContext: {
        heading: '自住与投资房产',
        paras: [
          '雷东多海滩房产类型多样，融资方式也因此不同——自住房的大额贷款与出租房的 DSCR 贷款是两种不同的讨论。',
          '我们帮助您理解可能适用的结构，以及如何整理文件，具体视资格与承保而定。',
        ],
      },
    },
  },

  {
    slug: 'torrance-mortgage',
    city: 'Torrance',
    cityZh: '托伦斯',
    keywords:
      'Torrance mortgage, South Bay mortgage broker, self-employed jumbo mortgage California, bank statement loans, 洛杉矶房贷, 大额房贷',
    en: {
      title: 'Torrance Mortgage | Jumbo, Refinance & Self-Employed Loan Guidance',
      description:
        'Local Torrance mortgage guidance — jumbo loans, refinancing, self-employed and business-owner options, and bilingual English & Chinese support in the South Bay.',
      h1: 'Torrance Mortgage Guidance',
      intro: [
        "Torrance is one of the South Bay's most established communities, with a wide range of neighborhoods and property values. While not every Torrance home requires a jumbo loan, higher-value properties and certain borrower profiles benefit from a more strategic approach.",
        'Lunada Bay Mortgage offers local, community-based guidance for Torrance buyers and homeowners across purchase, refinance, and self-employed borrower scenarios.',
      ],
      highlights: [
        'A broad range of neighborhoods and property values',
        'Jumbo and conventional-adjacent strategies where applicable',
        'Bank statement and Non-QM options for self-employed borrowers',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'Guidance across a diverse market',
        paras: [
          'Because Torrance spans many property types and price points, the right approach depends on your specific situation — the property, your income, and your goals.',
          'We review the full picture and outline options that may fit, subject to lender guidelines and underwriting approval.',
        ],
      },
    },
    zh: {
      title: '托伦斯房贷 | 大额、再融资及自雇贷款指导',
      description:
        '为托伦斯提供本地房贷指导——大额贷款、再融资、自雇与企业主方案，以及南湾地区中英双语支持。',
      h1: '托伦斯房贷指导',
      intro: [
        '托伦斯是南湾最成熟的社区之一，社区多样、房产价值区间广泛。虽然并非每套托伦斯住宅都需要大额贷款，但高价值房产及某些借款人情况会从更具策略性的方式中受益。',
        'Lunada Bay Mortgage 为托伦斯的买家与房主提供本地、扎根社区的指导，涵盖购房、再融资及自雇借款人场景。',
      ],
      highlights: [
        '社区与房产价值区间广泛',
        '在适用情况下提供大额及类常规策略',
        '为自雇借款人提供银行流水及 Non-QM 方案',
        '中英双语指导',
      ],
      localContext: {
        heading: '为多元市场提供指导',
        paras: [
          '由于托伦斯涵盖多种房产类型与价位，合适的方式取决于您的具体情况——房产、收入与目标。',
          '我们会全面审阅，并列出可能契合的方案，具体视贷款机构规定及承保审批而定。',
        ],
      },
    },
  },

  {
    slug: 'south-bay-jumbo-mortgage',
    city: 'the South Bay',
    cityZh: '南湾',
    keywords:
      'South Bay jumbo mortgage, luxury home financing Los Angeles, self-employed jumbo mortgage California, DSCR loans South Bay, 大额房贷, 洛杉矶房贷',
    en: {
      title: 'South Bay Jumbo Mortgage | Luxury Home Financing Guidance',
      description:
        'Jumbo mortgage guidance across the South Bay and coastal Los Angeles. Local, bilingual English & Chinese support for luxury buyers, investors, and self-employed borrowers.',
      h1: 'South Bay Jumbo Mortgage Guidance',
      intro: [
        "The South Bay — from the Palos Verdes Peninsula through Manhattan Beach, Redondo Beach, and Torrance — is home to some of coastal Los Angeles' most desirable properties. High values across much of the region mean jumbo financing is a frequent part of the process.",
        'Lunada Bay Mortgage provides local, strategy-first guidance across the South Bay, helping buyers, homeowners, and investors understand the loan structures that may fit high-value coastal real estate.',
      ],
      highlights: [
        'Coverage across the South Bay and coastal Los Angeles',
        'Jumbo, interest-only, Non-QM, and DSCR options subject to guidelines',
        'Support for luxury buyers, investors, and self-employed borrowers',
        'English and 中文 guidance',
      ],
      localContext: {
        heading: 'One region, many financing paths',
        paras: [
          "The South Bay's variety — luxury coastal homes, hillside estates, and investment properties — means there is no single right loan. The right structure depends on the property and the borrower.",
          'Our focus is on comparing those paths clearly, so you can choose with confidence.',
        ],
      },
    },
    zh: {
      title: '南湾大额房贷 | 高端住宅融资指导',
      description:
        '为南湾及洛杉矶海岸地区提供大额房贷指导，本地、中英双语，服务高端买家、投资者及自雇借款人。',
      h1: '南湾大额房贷指导',
      intro: [
        '南湾——从帕洛斯弗迪斯半岛延伸至曼哈顿海滩、雷东多海滩与托伦斯——拥有洛杉矶海岸一些最受青睐的房产。该地区大部分区域房价较高，意味着大额融资是流程中的常见环节。',
        'Lunada Bay Mortgage 为整个南湾提供本地、策略优先的指导，帮助买家、房主与投资者理解可能契合高价值海岸房产的贷款结构。',
      ],
      highlights: [
        '覆盖南湾及洛杉矶海岸地区',
        '在符合规定的前提下提供大额、只还利息、Non-QM 及 DSCR 方案',
        '为高端买家、投资者及自雇借款人提供支持',
        '中英双语指导',
      ],
      localContext: {
        heading: '同一地区，多种融资路径',
        paras: [
          '南湾的多样性——高端海岸住宅、山坡庄园与投资房产——意味着并不存在唯一正确的贷款。合适的结构取决于房产与借款人。',
          '我们专注于清晰地比较这些路径，让您能自信地做出选择。',
        ],
      },
    },
  },

  {
    slug: 'chinese-mortgage-broker-los-angeles',
    city: 'Los Angeles',
    cityZh: '洛杉矶',
    keywords:
      'Chinese mortgage broker Los Angeles, 华人房贷顾问, 洛杉矶房贷, bilingual mortgage broker, 大额房贷, self-employed jumbo mortgage California',
    en: {
      title: 'Chinese Mortgage Broker Los Angeles | English & 中文 Mortgage Guidance',
      description:
        'Bilingual English and Chinese (中文) mortgage guidance in Los Angeles. Jumbo loans, self-employed options, and clear help understanding the U.S. mortgage process.',
      h1: 'Chinese Mortgage Broker in Los Angeles | 华人房贷顾问',
      intro: [
        'For Chinese-speaking buyers and international families, the U.S. mortgage process can feel unfamiliar — different documentation, different terminology, and different expectations than in other countries. Clear, bilingual guidance can make a meaningful difference.',
        'Lunada Bay Mortgage provides guidance in both English and Simplified Chinese (中文) across Los Angeles and the coastal South Bay. The goal is simple: help you understand the process, the documentation, and the options that may fit — whether you are buying, refinancing, or investing.',
      ],
      highlights: [
        'Guidance in English and 中文',
        'Clear explanation of the U.S. mortgage process and documentation',
        'Jumbo, self-employed, and investment options subject to guidelines',
        'Support for purchase, refinance, and investment property decisions',
      ],
      localContext: {
        heading: 'Bilingual support you can rely on',
        paras: [
          'Many of our clients are business owners, professionals, and investors whose situations call for careful documentation. We help present income and assets clearly, in the way lenders are prepared to evaluate.',
          'Every step is explained, and every recommendation is subject to borrower qualification, lender guidelines, and underwriting approval.',
        ],
      },
    },
    zh: {
      title: '洛杉矶华人房贷顾问 | 中英双语房贷指导',
      description:
        '在洛杉矶提供中英双语房贷指导：大额贷款、自雇方案，并清晰讲解美国房贷流程，帮助您理解所需文件。',
      h1: '洛杉矶华人房贷顾问 | Chinese Mortgage Broker in Los Angeles',
      intro: [
        '对于华语买家及国际家庭而言，美国房贷流程可能显得陌生——文件、术语与预期都与其他国家不同。清晰的双语指导能带来实质性的帮助。',
        'Lunada Bay Mortgage 在洛杉矶及海岸南湾地区提供中英双语指导。目标很简单：帮助您理解流程、文件，以及可能契合的方案——无论您是购房、再融资还是投资。',
      ],
      highlights: [
        '提供中英双语指导',
        '清晰讲解美国房贷流程与所需文件',
        '在符合规定的前提下提供大额、自雇及投资方案',
        '为购房、再融资及投资房产决策提供支持',
      ],
      localContext: {
        heading: '值得信赖的双语支持',
        paras: [
          '我们的许多客户是企业主、专业人士与投资者，他们的情况需要细致的文件整理。我们帮助以贷款机构认可的方式清晰呈现收入与资产。',
          '每一步都会解释清楚，每项建议均需符合借款人资格、贷款机构规定及承保审批。',
        ],
      },
    },
  },

  {
    slug: 'chinese-mortgage-broker-palos-verdes',
    city: 'Palos Verdes',
    cityZh: '帕洛斯弗迪斯',
    keywords:
      'Chinese mortgage broker Palos Verdes, 帕洛斯弗迪斯房贷, 华人房贷顾问, Palos Verdes jumbo loans, 大额房贷, 洛杉矶房贷',
    en: {
      title: 'Chinese Mortgage Broker Palos Verdes | 帕洛斯弗迪斯华人房贷顾问',
      description:
        'Bilingual English and Chinese (中文) jumbo mortgage guidance for Palos Verdes and the South Bay. Local support for luxury buyers, investors, and self-employed borrowers.',
      h1: 'Chinese Mortgage Broker for Palos Verdes | 华人房贷顾问',
      intro: [
        "Palos Verdes and the surrounding peninsula attract many Chinese-speaking buyers and international families drawn to the area's schools, coastline, and luxury homes. Financing a high-value peninsula home often involves a jumbo loan and careful documentation.",
        'Lunada Bay Mortgage offers bilingual guidance in English and Simplified Chinese (中文), combined with local, community-based knowledge of the Palos Verdes market. The aim is to make a complex process clear.',
      ],
      highlights: [
        'Bilingual English and 中文 guidance',
        'Local Palos Verdes and peninsula market knowledge',
        'Jumbo and self-employed borrower options subject to guidelines',
        'Support for purchase, refinance, and investment decisions',
      ],
      localContext: {
        heading: 'Local knowledge, bilingual clarity',
        paras: [
          "For families relocating or investing from abroad, understanding documentation and structure is often the biggest hurdle. We walk through each step in the language you're most comfortable with.",
          'All financing is subject to borrower qualification, lender guidelines, and underwriting approval.',
        ],
      },
    },
    zh: {
      title: '帕洛斯弗迪斯华人房贷顾问 | 中英双语大额贷款',
      description:
        '为帕洛斯弗迪斯及南湾提供中英双语大额房贷指导，本地服务高端买家、投资者及自雇借款人。',
      h1: '帕洛斯弗迪斯华人房贷顾问 | Chinese Mortgage Broker for Palos Verdes',
      intro: [
        '帕洛斯弗迪斯及周边半岛吸引着许多华语买家与国际家庭，他们看重这里的学校、海岸线与高端住宅。为高价值的半岛住宅融资，通常涉及大额贷款与细致的文件。',
        'Lunada Bay Mortgage 提供中英双语指导，并结合对帕洛斯弗迪斯市场本地、扎根社区的了解，力求让复杂的流程变得清晰。',
      ],
      highlights: [
        '提供中英双语指导',
        '熟悉帕洛斯弗迪斯及半岛本地市场',
        '在符合规定的前提下提供大额及自雇借款人方案',
        '为购房、再融资及投资决策提供支持',
      ],
      localContext: {
        heading: '本地专业，双语清晰',
        paras: [
          '对于从海外迁居或投资的家庭而言，理解文件与结构往往是最大的障碍。我们会用您最熟悉的语言，逐步讲解每一个环节。',
          '所有融资均需符合借款人资格、贷款机构规定及承保审批。',
        ],
      },
    },
  },
]

// Compose each page with its shared, city-interpolated educational sections.
export const localPages = PAGES.map((p) => ({
  ...p,
  path: `/${p.slug}`,
  en: { ...p.en, sections: sharedEn(p.city) },
  zh: { ...p.zh, sections: sharedZh(p.cityZh) },
}))

export const localPageSlugs = localPages.map((p) => p.slug)

export function getLocalPage(slug) {
  return localPages.find((p) => p.slug === slug)
}
