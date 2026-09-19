export const en = {
  code: "en",
  label: "English",
  short: "EN",

  nav: {
    home: "Home",
    domains: "Prizes",
    winners: "Laureates",
    bulletin: "Gazette",
    committee: "Committee",
    charter: "Charter",
    apply: "Apply",
    switchTo: "中文",
  },

  common: {
    loading: "Retrieving the record…",
    loadFailed: "Failed to retrieve the record",
    all: "All",
    menu: "Menu",
    close: "Close",
  },

  home: {
    // 站点标语。sloganLatin 显示的是「另一种语言」的标语，
    // 所以英文页上是 Interesting is enough. + 有趣足矣，中文页反过来。
    slogan: "Interesting is enough.",
    sloganLatin: "「有趣足矣」",
    heroSubtitle:
      "For people, animals, artificial intelligences and objects whose days are going rather well.",

    originEyebrow: "Origin",
    originTitle: "Why this prize exists",
    origin: `Merit has no shortage. Every year brings enough prizes, enough rankings, enough performance reviews, enough "best of the year." A prize for merit does not lack company.

So this prize does not reward merit. It rewards interesting.

The Committee does not define "interesting." It states only what is not:

- comparable
- accumulable
- displayable
- optimisable
- fit for a CV

The Committee holds that interesting is the one quality that cannot be optimised. You may deliberately use less AI, or deliberately eat in the canteen more often — the Committee does not check, and does not mark you down for it. It is only that people who do so tend not to win.

**On money.** The prize comes entirely from the personal savings of halface. The Committee accumulates no capital, conducts no investment, and returns the account to zero after every drawing. The explanation: money left in an account does not become more interesting.

**On the Committee.** The Prize was founded by one person, and the Committee began as that person alone. One person opposing meritocracy is like one person opposing the weather.`,
    originClosing: "do something interesting.",

    domainsEyebrow: "Domains",
    domainsTitle: "Seven Domains and a Special Prize",
    domainsDesc:
      "The domains are set at the level of the Charter and may not be added to, removed, merged or renamed except by the amendment procedure of Chapter 7. Individual awards are unrestricted and are created freely by the Committee at each drawing.",
    viewAllAwards: "View all awards →",
    latestEyebrow: "Latest",
    latestTitle: "Most recent drawing",
    viewAllDraws: "Archive of past drawings →",
    ctaEyebrow: "Application",
    ctaTitle: "This prize is by application",
    ctaDesc:
      "No nomination, no credentials, no fee. Send one email to the Committee and the application is complete. The Committee may also confer an award on its own initiative where no application has been made.",
    ctaButton: "See the application format",
    applyButton: "How to apply",
    charterButton: "Read the Charter",
  },

  fund: {
    balanceLabel: "Current balance of the prize account",
    asOf: "As of",
    note1:
      "The total prize for each drawing equals the entire balance of the account at the moment of the drawing, divided equally among that drawing's laureates.",
    note1Strong: "The account returns to zero after every drawing.",
    charterRef: "Under Chapter 2 of the Charter, “The Prize” →",
  },

  countdown: {
    toNext: "Until the next round opens",
    days: "days",
    hours: "hrs",
    minutes: "min",
    seconds: "sec",
    nextAt: "Next round opens",
    beijingTime: " (Beijing time)",
    judging: "Under adjudication",
    judgingNote:
      "The Committee is considering this round's laureates. Results are published once adjudication closes.",
  },

  domains: {
    pageTitle: "Prizes",
    title: "Seven Domains and a Special Prize",
    desc:
      "The domains are set at the level of the Charter. They are drawn on three criteria: exhaustiveness — anything in a life can be placed somewhere; mutual exclusivity — no overlap; and resistance to obsolescence — the domain still holds a hundred years from now.",
    covers: "Covers",
    awardCount: (n) => (n > 0 ? `${n} award${n === 1 ? "" : "s"}` : "No awards yet"),
    createdIn: (n) => `Created at round ${n}`,
    noAwards:
      "No award exists in this domain yet. The Committee may create one at any drawing.",
    moreAwards: (n) => `${n} more`,
    back: "← Back to the Prizes",
    viewDomain: "View all →",
    awardsCount: "Awards in the library",
    awardsCountNote:
      "This number only rises. The Committee may create awards as it sees fit, but never withdraws one already in the library — withdrawal would leave past drawings without foundation.",
  },

  winners: {
    pageTitle: "Laureates",
    title: "Laureates",
    desc:
      "A round opens every Friday after the A-share market closes, with no limit on the number of laureates. A published record is not amended; where an error has genuinely occurred it is listed separately as an erratum, without overwriting the original.",
    empty: "No drawings on record yet.",
    count: (n) => `${n} drawing${n === 1 ? "" : "s"}`,
    back: "← Back to the Laureates",
    vacancyTitle: "On vacancies",
    vacancyDesc:
      "Where a drawing receives no application, or none sufficient to constitute grounds for an award, the Committee may declare that drawing “vacant.” A vacancy is numbered in sequence and is neither postponed nor merged. The vacancy is itself the result of that drawing.",
  },

  bulletin: {
    pageTitle: "Gazette",
    title: "Gazette",
    desc: "Every formal text of the Prize is published here: notices of forthcoming drawings, declarations of vacancy, errata, records of amendments to the Charter, statements of the Committee, and dispatches on laureates — conversations and profiles alike.",
    filterAll: "All",
    kindNotice: "Notices",
    kindDispatch: "Dispatches",
    empty: "Nothing published yet.",
    emptyFiltered: "Nothing of this kind yet.",
    back: "← Back to the Gazette",
    count: (n) => `${n} item${n === 1 ? "" : "s"}`,
  },

  draw: {
    period: (n) => `No. ${n}`,
    drawnOn: "drawn",
    laureates: "Laureates",
    laureatesCount: (n) => `${n} in total`,
    grounds: "Grounds",
    placeholder: "SAMPLE · not a real result",
    vacant: "Vacant",
    vacantNote:
      "No laureate this drawing. A vacancy is numbered in sequence and is neither postponed nor merged.",
    pool: "Prize pool",
    perWinnerLabel: "each",
    winnerCountBadge: (n) => `${n} laureate${n === 1 ? "" : "s"}`,
    viewDetail: "View record →",
    metricDefault: "Published figure",
    winnersCount: (n) => `${n} laureate${n === 1 ? "" : "s"} this drawing · each receives`,
    balanceAfter: "Balance after the drawing",
  },

  committee: {
    pageTitle: "The Committee",
    title: "The Halface Prize Selection Committee",
    desc: "The Selection Committee is the Prize's sole adjudicating body. It decides who wins, writes the grounds, and confers awards on its own initiative where no application has been made. It decides for itself how many members it has.",
    historyTitle: "History",
    markTitle: "Mark",
    markBody:
      "The Prize and its Committee share one mark: a circle, gold on the left half and navy on the right.\n\n「半面」 — half a face — names the half this prize looks at: not merit, but interesting.",
    markGold: "Gold",
    markNavy: "Navy",
    membersTitle: "Members",
    memberCount: (n) => `${n} member${n === 1 ? "" : "s"}`,
    termLabel: "Term",
    sinceLabel: "Since",
    workTitle: "How the Committee works",
    workBody: `The Committee is the Prize's sole adjudicating body. At each drawing it places applications into one of the seven domains, decides who wins and who does not, and writes the grounds. Where no application has been made, it may confer an award on the basis of public information.

There is no fixed list of awards. The Committee may create a new award at any drawing; once created it enters the award library, may be reused in later drawings, and may not be withdrawn.

Members are unpaid. The prize money comes entirely from the personal savings of the founder. The Prize accumulates no capital, conducts no investment, accepts no donation from any source, and has no funds to draw on.

No member may collect any payment, raise funds, or make any financial commitment in the name of the Halface Prize.

The Committee does not publish its deliberations, and is under no duty to give reasons for any decision.`,
    contactTitle: "Contact",
    contactNote: "Applications and objections both go to this address.",
  },

  notFound: {
    code: "404",
    title: "Page not found",
    desc: "This page does not exist, or has been removed. Article 17 guarantees only that an award, once in the library, may not be withdrawn. It says nothing about web pages.",
    back: "Back to the front page",
  },

  charter: {
    pageTitle: "Charter",
    title: "Charter of the Halface Prize",
    desc: (committee) => `This Charter is made and construed by the ${committee}.`,
    footnote:
      "The interpretation of these articles rests with the Committee. The Committee's understanding may change over time, but never retroactively as to drawings already published.",
    refArticle: (n) => `Charter, Article ${n} →`,
  },

  apply: {
    pageTitle: "Apply",
    title: "Apply",
    desc:
      "This prize is by application. No nomination, no credentials, no fee of any kind. Send one email to the Committee and the application is complete. The Committee may also confer an award on its own initiative where no application has been made.",
    emailLabel: "Committee email",
    openMail: "Open in your mail client",
    templateEyebrow: "Template",
    templateTitle: "Application email format",
    copy: "Copy template",
    copied: "Copied",
    copyFailed: "Copy failed — please select manually",
    templateNote:
      "The template is a suggestion only. Emails in any language, any format and any length are accepted; the Committee does not reject an application on grounds of format.",
    notice: `## Notes on applying

**1. Applications are free.** No fee of any kind is charged, and no applicant is asked to pay postage, materials, review costs or any other sum.

**2. You may apply repeatedly.** The same grounds may be submitted in different drawings. Unsuccessful applications are not notified and do not prejudice later ones.

**3. Figures are self-declared.** There is no third-party audit. Figures reported by an applicant are asserted by the applicant; the Committee does not verify them and bears no duty to verify them.

**4. You may apply for yourself or for another.** Where the subject is an animal, an object or an artificial intelligence, the application should be made by someone acquainted with it.

**5. The Committee may act on its own initiative.** Where no application has been made, the Committee may confer an award on the basis of public information.

**6. Names.** A laureate is published under the name given in the application. Where an applicant asks to be published under a pseudonym only, the Committee does not disclose their identity.

**7. Withdrawal.** An applicant may withdraw at any time before the drawing. Withdrawal is not possible after the drawing — by then the record has entered the archive.`,
    noDonationTitle: "No donations accepted",
    noDonationBefore:
      "The prize is funded entirely from the personal savings of halface. This prize",
    noDonationStrong: "accepts no donation from any source",
    noDonationAfter:
      " and maintains no channel for receiving funds. Any fundraising conducted under the name of the Halface Prize has nothing to do with it.",
  },

  footer: {
    subtitle: "HALFACE PRIZE · 半面奖",
    blurb:
      "Founded by halface as an individual. Affiliated with no government, company, university or international organisation.",
    menu: "Menu",
    contact: "Contact",
    mailOnly: "Applications are accepted by email only",
    meta: (year, committee, founded, size) =>
      `© ${year} ${committee} · Founded ${founded} · ${size} member${size === 1 ? "" : "s"}`,
    disclaimer:
      "This prize is an honour. It constitutes no academic, professional or moral assessment.",
  },

  emailTemplate: `Subject: [Halface Prize Application] ____ (name of applicant)

To the Halface Prize Selection Committee:

I, ____, apply for the Halface Prize under Chapter 4 of the Charter.

1. Name of applicant
____ (a real name, a pseudonym or an institution; for animals and objects, the name by which they are generally known)

2. Award applied for
____ (may be left blank — the Committee assigns the domain)

3. Grounds
(State them concretely. No format is required, but the more concrete the statement, the more accurate the classification.)

4. Figure to be published
(One figure suitable for publication — a count, a duration, a number of years, a weight. It need not be precise, but must be honestly asserted by the applicant.)

5. Publication of name
[ ] Publish my real name
[ ] Publish under a pseudonym only

6. Further remarks
(May be left blank)

Yours,

____
____ / ____ / ________`,
};
