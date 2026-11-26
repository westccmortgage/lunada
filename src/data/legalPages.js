/*
 * Privacy Policy and Terms of Use (EN + ZH).
 * Paragraph strings may contain [label](url) links — rendered by LegalPage.
 * Company facts mirror siteConfig / the footer; keep them in sync.
 */
const OPERATOR_EN =
  'This website, Lunada Bay Mortgage (lunadabaymortgage.com), is operated by West Coast Capital Mortgage — CA DRE Corporation License #02440065, NMLS #2817729 — 150 E Olive Ave, Unit 112, Burbank, CA 91502.'
const OPERATOR_ZH =
  '本网站 Lunada Bay Mortgage（lunadabaymortgage.com）由 West Coast Capital Mortgage 运营——CA DRE 公司牌照 #02440065，NMLS #2817729——地址：150 E Olive Ave, Unit 112, Burbank, CA 91502。'

export const LEGAL_UPDATED = '2026-11-25'

export const legalPages = {
  privacy: {
    en: {
      title: 'Privacy Policy | Lunada Bay Mortgage',
      description:
        'How Lunada Bay Mortgage, operated by West Coast Capital Mortgage, handles information you send through this website.',
      h1: 'Privacy Policy',
      updated: 'Last updated: November 25, 2026',
      sections: [
        { h: 'Who we are', p: [OPERATOR_EN] },
        {
          h: 'What the request form collects',
          p: [
            'When you send a review request we receive what you type: your name, phone number, email address, preferred language, property location or ZIP code, estimated purchase price or value, estimated loan amount, loan purpose, employment type, and your message. All fields except name, phone and email are optional.',
            'We also receive the page you were on when you sent the request, the first page you visited on this site, the site language and, if you arrived from an ad or a tagged link, the campaign details in that link (for example utm_source or an ad click ID). Those details are kept in your browser’s local storage so they can be sent with your request.',
          ],
        },
        {
          h: 'How we use it',
          p: [
            'We use your information to follow up with you by phone and email about your request and to prepare a review of your scenario. This website is informational; sending a request does not create any obligation for you or a commitment to lend.',
          ],
        },
        {
          h: 'Advertising and analytics',
          p: [
            'Google Ads tags on this site measure visits and conversions and may show our ads to you on other sites. You can opt out of personalized ads at [adssettings.google.com](https://adssettings.google.com).',
            'Cloudflare Web Analytics counts visits to this site without using cookies.',
          ],
        },
        {
          h: 'California residents',
          p: [
            'If you live in California, you may ask us for access to the personal information we hold about you, or ask us to delete it, by calling (310) 654-1577 or emailing westccmortgage@gmail.com.',
          ],
        },
        {
          h: 'Our full policy',
          p: [
            'West Coast Capital Mortgage’s full privacy policy is at [westcoastcapitalmortgage.com/privacy-policy](https://westcoastcapitalmortgage.com/privacy-policy).',
          ],
        },
        {
          h: 'Contact',
          p: ['West Coast Capital Mortgage, 150 E Olive Ave, Unit 112, Burbank, CA 91502 · (310) 654-1577 · westccmortgage@gmail.com'],
        },
      ],
    },
    zh: {
      title: '隐私政策 | Lunada Bay Mortgage',
      description: '说明由 West Coast Capital Mortgage 运营的 Lunada Bay Mortgage 如何处理您通过本网站提交的信息。',
      h1: '隐私政策',
      updated: '最后更新：2026 年 11 月 25 日',
      sections: [
        { h: '我们是谁', p: [OPERATOR_ZH] },
        {
          h: '申请表单收集的信息',
          p: [
            '当您提交评估申请时，我们会收到您填写的内容：姓名、电话、电子邮箱、首选语言、房产所在地或邮编、预计购买价格或房产价值、预计贷款金额、贷款用途、就业类型以及留言。除姓名、电话和邮箱外，其余均为选填。',
            '我们还会收到您提交申请时所在的页面、您在本站访问的第一个页面以及网站语言；如果您是通过广告或带标记的链接进入本站，也会收到该链接中的推广信息（例如 utm_source 或广告点击 ID）。这些信息会保存在您浏览器的本地存储中，以便随申请一并发送。',
          ],
        },
        {
          h: '我们如何使用这些信息',
          p: [
            '我们使用您的信息，通过电话和电子邮件就您的申请与您联系，并为您的情况准备评估。本网站仅供参考；提交申请不会对您产生任何义务，也不构成贷款承诺。',
          ],
        },
        {
          h: '广告与统计',
          p: [
            '本站的 Google Ads 标签用于衡量访问和转化，并可能在其他网站向您展示我们的广告。您可以在 [adssettings.google.com](https://adssettings.google.com) 关闭个性化广告。',
            'Cloudflare Web Analytics 在不使用 Cookie 的情况下统计本站访问量。',
          ],
        },
        {
          h: '加州居民',
          p: [
            '如果您居住在加州，您可以致电 (310) 654-1577 或发送邮件至 westccmortgage@gmail.com，要求查阅我们持有的您的个人信息，或要求删除这些信息。',
          ],
        },
        {
          h: '完整政策',
          p: [
            'West Coast Capital Mortgage 的完整隐私政策见 [westcoastcapitalmortgage.com/privacy-policy](https://westcoastcapitalmortgage.com/privacy-policy)。',
          ],
        },
        {
          h: '联系方式',
          p: ['West Coast Capital Mortgage，150 E Olive Ave, Unit 112, Burbank, CA 91502 · (310) 654-1577 · westccmortgage@gmail.com'],
        },
      ],
    },
  },

  terms: {
    en: {
      title: 'Terms of Use | Lunada Bay Mortgage',
      description:
        'Terms for using the Lunada Bay Mortgage website: educational information only, not a loan offer or commitment to lend.',
      h1: 'Terms of Use',
      updated: 'Last updated: November 25, 2026',
      sections: [
        { h: 'Who operates this site', p: [OPERATOR_EN] },
        {
          h: 'Educational information only',
          p: [
            'Everything on this website — guides, local pages, and the estimate calculator — is general educational information. It is not a loan offer, a rate quote, or a commitment to lend. Calculator results are estimates only.',
            'All loans are subject to borrower qualification, credit approval, income, assets, property review, lender guidelines, and underwriting approval. Loan programs, rates, terms, and conditions are subject to change without notice.',
          ],
        },
        {
          h: 'Your requests',
          p: [
            'Sending a request through this site does not create an obligation for you and is not an application for credit. We will contact you about your request by phone and email, as described in our [Privacy Policy](/privacy).',
          ],
        },
        {
          h: 'Links to other sites',
          p: ['Links to other websites, including our related sites, are provided for convenience. Those sites have their own terms and policies.'],
        },
        {
          h: 'Equal Housing Opportunity',
          p: ['We are committed to Equal Housing Opportunity.'],
        },
        {
          h: 'Our full terms',
          p: [
            'West Coast Capital Mortgage’s terms are also published at [westcoastcapitalmortgage.com/terms.html](https://westcoastcapitalmortgage.com/terms.html).',
          ],
        },
      ],
    },
    zh: {
      title: '使用条款 | Lunada Bay Mortgage',
      description: '使用 Lunada Bay Mortgage 网站的条款：仅为教育性信息，不构成贷款要约或贷款承诺。',
      h1: '使用条款',
      updated: '最后更新：2026 年 11 月 25 日',
      sections: [
        { h: '本网站的运营方', p: [OPERATOR_ZH] },
        {
          h: '仅供教育参考',
          p: [
            '本网站上的所有内容——贷款指南、本地区域页面和费用估算工具——均为一般性教育信息，不构成贷款要约、利率报价或贷款承诺。估算工具的结果仅为估算。',
            '所有贷款均需符合借款人资格、信用审批、收入、资产、房产审核、贷款机构规定及最终承保审批。贷款项目、利率、条款和条件可能随时变更，恕不另行通知。',
          ],
        },
        {
          h: '您提交的申请',
          p: [
            '通过本网站提交申请不会对您产生任何义务，也不是信贷申请。我们将按照[隐私政策](/zh/privacy)所述，通过电话和电子邮件就您的申请与您联系。',
          ],
        },
        {
          h: '其他网站的链接',
          p: ['指向其他网站（包括我们的相关网站）的链接仅为方便而提供。这些网站有各自的条款和政策。'],
        },
        {
          h: 'Equal Housing Opportunity（平等住房机会）',
          p: ['我们致力于践行平等住房机会（Equal Housing Opportunity）。'],
        },
        {
          h: '完整条款',
          p: [
            'West Coast Capital Mortgage 的条款也发布于 [westcoastcapitalmortgage.com/terms.html](https://westcoastcapitalmortgage.com/terms.html)。',
          ],
        },
      ],
    },
  },
}
