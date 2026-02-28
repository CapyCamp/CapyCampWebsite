// CapyCamp Content Configuration
// Edit this file to update all site copy across pages

export const siteConfig = {
  name: "CapyCamp",
  description: "The Scout Universe on Abstract",
  url: "https://capycamp.xyz",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://x.com/CapyCamp",
    discord: "https://discord.gg/capycamp",
    opensea: "https://opensea.io/collection/capycamp",
  },
}

export const navConfig = [
  { label: "Home", href: "/" },
  { label: "Brand", href: "/brand" },
  { label: "Story", href: "/story" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "FAQ", href: "/faq" },
  { label: "WL Signup", href: "/wl-signup" },
]

export const heroSection = {
  title: "Welcome to CapyCamp",
  subtitle: "3,333 Scouts. One Universe. Real Experiences.",
  cta1: "Enter the Camp",
  cta2: "Mint a Scout",
  ctaLink1: "/story",
  ctaLink2: "/mint",
}

export const trustRow = {
  chain: "Abstract",
  supply: "3,333",
  status: "Mint: Coming Soon",
  contractAddress: "0x",
}

export const whatIsCapyCamp = [
  {
    title: "Hilarious Scout Universe",
    description: "Premium lore meets playful storytelling in the world of CapyCamp.",
  },
  {
    title: "Real-World Experiences",
    description: "IRL glamping retreats, events, and activities for Scouts.",
  },
  {
    title: "Onchain Identity",
    description: "Your Scout NFT is your key to community, quests, and exclusive access.",
  },
  {
    title: "Premium Community",
    description: "Join a curated group of 3,333 Scouts building something special.",
  },
  {
    title: "Exclusive Utility",
    description: "Access holder benefits, collabs, and future expansions.",
  },
]

export const scoutPerks = [
  {
    icon: "🏕️",
    title: "IRL Glamping Access",
    description: "Priority access to CapyCamp weekend retreats and city pop-ups.",
  },
  {
    icon: "🎯",
    title: "Quest & Badge System",
    description: "Unlock badges and rewards through community activities.",
  },
  {
    icon: "👥",
    title: "Scout Squad Roles",
    description: "Join squads with special roles and responsibilities.",
  },
  {
    icon: "🗳️",
    title: "Community Votes",
    description: "Help shape the future of CapyCamp with lightweight governance.",
  },
  {
    icon: "🤝",
    title: "Collab Allowlists",
    description: "Access to exclusive partner projects and opportunities.",
  },
  {
    icon: "🎁",
    title: "Merch & Drops",
    description: "Exclusive merchandise and limited edition drops.",
  },
]

export const roadmapPhases = [
  {
    phase: "Phase 0",
    title: "Foundations",
    status: "In Progress",
    description: "Building the core: smart contract, community setup, brand launch.",
    objectives: [
      "Deploy verified smart contract on Abstract",
      "Establish Discord and community channels",
      "Complete brand guidelines and assets",
    ],
    deliverables: "Contract transparency dashboard, Community hub, Brand kit",
    holderBenefit: "Early access and whitelisting opportunities",
  },
  {
    phase: "Phase 1",
    title: "Recruit Scouts",
    status: "Planned",
    description: "Mint opening and Scout onboarding.",
    objectives: [
      "Launch public mint with whitelist phases",
      "Onboard 3,333 Scout holders",
      "Deploy holder portal beta",
    ],
    deliverables: "Live mint page, Onboarding flow, Portal v1",
    holderBenefit: "Initial Scout identity and portal access",
  },
  {
    phase: "Phase 2",
    title: "Camp Systems",
    status: "Planned",
    description: "Quests, roles, and gamification launch.",
    objectives: [
      "Deploy quest system with badges",
      "Activate Scout squad roles",
      "Launch community voting",
    ],
    deliverables: "Quest system, Badge NFTs, Voting interface",
    holderBenefit: "Earn rewards through participation",
  },
  {
    phase: "Phase 3",
    title: "IRL Campgrounds",
    status: "Planned",
    description: "First glamping events and real-world activation.",
    objectives: [
      "Host first CapyCamp glamping weekend",
      "Launch city pop-up events",
      "Activate merchandise drops",
    ],
    deliverables: "Event platform, RSVP system, Merch store",
    holderBenefit: "Exclusive event access and IRL experiences",
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    status: "Planned",
    description: "Collaborations, partnerships, and media.",
    objectives: [
      "Launch strategic collaborations",
      "Expand merchandise and collectibles",
      "Launch CapyCamp media and content",
    ],
    deliverables: "Collab NFTs, Media library, Expanded merch",
    holderBenefit: "Exclusive partnership benefits",
  },
  {
    phase: "Phase 5",
    title: "Long-term IP",
    status: "Planned",
    description: "Story seasons, games, and licensing.",
    objectives: [
      "Deploy mini-games and experiences",
      "Launch Season 1 of CapyCamp story",
      "Explore creative licensing",
    ],
    deliverables: "Games, Story content, Licensing framework",
    holderBenefit: "Deep engagement and creative ownership",
  },
]

export const irlGlamping = {
  title: "CapyCamp IRL",
  subtitle: "Premium Glamping Experiences for Scouts",
  description: "From weekend retreats to city pop-ups, CapyCamp brings the universe to life.",
  formats: [
    {
      title: "Weekend Glamp Retreat",
      description: "Multi-day premium camping experience with activities, community, and campfire stories.",
      location: "Rotating seasonal locations",
      capacity: "50-100 Scouts",
    },
    {
      title: "Day Pass Camp Activities",
      description: "Local day events featuring quests, workshops, games, and Scout gatherings.",
      location: "City locations",
      capacity: "20-50 per event",
    },
    {
      title: "Scout Station Pop-Ups",
      description: "Flash meet-ups and mini-experiences in major cities.",
      location: "Major cities",
      capacity: "10-25 per pop-up",
    },
  ],
  activities: [
    {
      title: "Badge Quests",
      description: "Complete themed quests to earn exclusive Scout badges.",
      icon: "🎯",
    },
    {
      title: "Scavenger Hunts",
      description: "Adventure-based hunts with prizes and clues from CapyCamp lore.",
      icon: "🔍",
    },
    {
      title: "Camp Games",
      description: "Team competitions, outdoor games, and Scout challenges.",
      icon: "🎮",
    },
    {
      title: "Creative Workshops",
      description: "Art, storytelling, photography, and community creation sessions.",
      icon: "🎨",
    },
    {
      title: "Wellness Zones",
      description: "Yoga, meditation, and chill-out spaces for Scout relaxation.",
      icon: "🧘",
    },
    {
      title: "Memory Capture",
      description: "Professional photo ops and merchandise creation from your Scout journey.",
      icon: "📸",
    },
  ],
  ticketingModel: {
    title: "Scout Ticketing",
    description: "Flexible access tiers based on community contribution.",
    tiers: [
      {
        name: "Scout",
        requirement: "1+ Scouts",
        discount: "Standard pricing",
      },
      {
        name: "Senior Scout",
        requirement: "3+ Scouts",
        discount: "15% discount",
      },
      {
        name: "Scout Leader",
        requirement: "5+ Scouts",
        discount: "25% discount",
      },
      {
        name: "Camp Counselor",
        requirement: "Verified community role",
        discount: "Free access",
      },
    ],
  },
}

export const utilities = {
  title: "Scout Perks & Utilities",
  digital: [
    "Holder portal with profile and stats",
    "Access to exclusive quests and challenges",
    "Participation in community governance votes",
    "Early access to partner projects",
  ],
  community: [
    "Scout squad roles and responsibilities",
    "Community-driven mission coordination",
    "Exclusive Discord channels and roles",
    "Community treasury participation",
  ],
  irl: [
    "Priority access to glamping weekends",
    "Holder-exclusive event pricing",
    "VIP experiences at Scout gatherings",
    "First access to merchandise drops",
  ],
  creative: [
    "Scout art gallery featuring holder creations",
    "Opportunity to contribute to CapyCamp story",
    "Licensing guidance for creative projects",
    "Attribution and credit in CapyCamp media",
  ],
}

export const faqItems = [
  {
    question: "What is CapyCamp?",
    answer: "CapyCamp is a premium Web3 community of 3,333 Scout NFTs on Abstract chain. It combines hilarious lore, real-world experiences, onchain identity, and exclusive utilities for a unique IP universe.",
  },
  {
    question: "Why 3,333 Scouts?",
    answer: "3,333 represents the perfect balance: large enough for a thriving community, small enough to remain premium and exclusive. Plus, the number has significance in CapyCamp lore.",
  },
  {
    question: "What chain is CapyCamp on?",
    answer: "CapyCamp Scouts are NFTs minted on Abstract, an EVM-compatible Layer 2 blockchain providing fast, affordable, and secure transactions.",
  },
  {
    question: "When is the mint?",
    answer: "Mint details and dates will be announced on our Discord and Twitter. Subscribe to our newsletter for updates.",
  },
  {
    question: "How does the whitelist work?",
    answer: "We have multiple mint phases: Community Whitelist → Friends & Family → Public. Whitelist spots are earned through community participation and Discord activity.",
  },
  {
    question: "Can I see the Scout art before mint?",
    answer: "Scouts are initially unrevealed, adding mystery and excitement. Reveal will happen post-mint or through community voting. This ensures fairness and fun.",
  },
  {
    question: "What do I actually get when I mint?",
    answer: "You receive: A Scout NFT, access to the holder portal, eligibility for all community utilities, IRL event access, quest participation, and more.",
  },
  {
    question: "Do I need to attend IRL events?",
    answer: "No! IRL events are optional. You get full digital utility through the portal, quests, and community participation even if you never attend in person.",
  },
  {
    question: "Can I buy/sell my Scout on secondary markets?",
    answer: "Yes! Once minted, Scouts are tradeable on OpenSea, Magic Eden, and other EVM marketplaces. Keep in mind that utility may be tied to holder status.",
  },
  {
    question: "How do I know the contract is safe?",
    answer: "We provide full contract transparency: audited smart contract, verified contract address, publicly available source code, and safety documentation.",
  },
  {
    question: "What does it cost to mint?",
    answer: "Mint price will be announced during phases. Gas fees depend on network activity but Abstract is designed to be low-cost.",
  },
  {
    question: "What's the max per wallet?",
    answer: "Mint limits vary by phase. Public phase typically allows 5-10 per wallet. Check the mint page for current limits.",
  },
  {
    question: "How do quests work?",
    answer: "Quests are community challenges that earn badges and rewards. They can be online (Discord tasks, votes) or IRL (event participation).",
  },
  {
    question: "What about royalties?",
    answer: "Secondary sales include royalties that fund community initiatives and future development.",
  },
  {
    question: "Is there a Discord?",
    answer: "Yes! Join our Discord for community chat, announcements, and exclusive events. Link in the header.",
  },
  {
    question: "How do I connect my wallet to the portal?",
    answer: "Visit the Portal page and click 'Connect Wallet'. We support all EVM wallets compatible with Abstract.",
  },
  {
    question: "What if I lose access to my wallet?",
    answer: "Your Scouts are stored on the blockchain. As long as you have your seed phrase and can access your wallet, you can always recover them.",
  },
  {
    question: "Can I get a refund after minting?",
    answer: "No refunds on NFT mints. However, you can sell your Scout on secondary markets anytime.",
  },
  {
    question: "How often are new perks added?",
    answer: "New utilities and perks are added regularly during each roadmap phase. Scout holder status grants access automatically.",
  },
  {
    question: "Who created CapyCamp?",
    answer: "CapyCamp is built by a team of Web3 enthusiasts, creatives, and developers passionate about building real IP with community at the core.",
  },
]

export const safetyTips = [
  {
    title: "Verify the Official Links",
    description: "Only mint from capycamp.xyz. Bookmark this site. Never click links from unverified sources.",
    icon: "🔗",
  },
  {
    title: "Check the Contract Address",
    description: "Verify the contract address on the mint page matches our official documentation before approving any transaction.",
    icon: "✓",
  },
  {
    title: "Never Share Your Seed Phrase",
    description: "Keep your wallet seed phrase private. CapyCamp will never ask for it. Ever.",
    icon: "🔐",
  },
  {
    title: "Use a Hardware Wallet",
    description: "For extra security, consider using a hardware wallet like Ledger or Trezor.",
    icon: "💳",
  },
  {
    title: "Watch Out for Scams",
    description: "Beware of fake Discord invites, phishing emails, and impostor accounts. Always verify official channels.",
    icon: "⚠️",
  },
  {
    title: "Test with Small Amount First",
    description: "If it's your first time, test with a small transaction to ensure everything works.",
    icon: "🧪",
  },
  {
    title: "Check Network Settings",
    description: "Confirm you're connected to Abstract network (not Ethereum or other chains) before minting.",
    icon: "🌐",
  },
  {
    title: "Know Common Scams",
    description: "Fake mints, impersonators, gas token scams, and malicious contracts are common. When in doubt, ask in Discord.",
    icon: "🚨",
  },
]

export const teamMembers = [
  {
    name: "Scout Creator",
    role: "Founder & Vision",
    bio: "Creative visionary behind the CapyCamp universe.",
  },
  {
    name: "Camp Counselor",
    role: "Community Lead",
    bio: "Keeps the camp organized and the community thriving.",
  },
  {
    name: "Dev Scout",
    role: "Smart Contract Engineer",
    bio: "Builds the onchain infrastructure for CapyCamp.",
  },
  {
    name: "Story Scout",
    role: "Lore & Narrative",
    bio: "Crafts the hilarious CapyCamp story and lore.",
  },
]

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Story", href: "/story" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "FAQ", href: "/faq" },
  { label: "Safety", href: "/safety" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Brand Kit", href: "/brand" },
]
