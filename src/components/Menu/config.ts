import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.universalfloki.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.universalfloki.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.universalfloki.com/farms',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://babyschrodinger.com/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://babyschrodinger.com/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://babyschrodinger.com/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://babyschrodinger.com/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://babyschrodinger.com/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://babyschrodinger.com/ifo',
  // },
   {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/universalflokichat',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/universalfloki',
      },
      {
        label: 'Disclaimer',
        href: 'https://universalfloki.com/disclaimer',
      },
      {
        label: 'litePaper',
        href: 'https://universal-floki.gitbook.io/universal-floki-litepaper/',
      },
    ],
  },
];

export const footerLinks: any = {
  'column1': [
    {
      label: 'Website',
      href: 'https://www.universalfloki.com',
    },
    {
      label: 'Documentation',
      href: 'https://www.universalfloki.com',
    },
    {
      label: 'Token',
      href: 'https://universalfloki.com',
    },
  ],
  'column2': [
    {
      label: 'Telegram',
      href: 'https://pancakeswap.info',
    },
    {
      label: 'Twitter',
      href: 'https://pancakeswap.info',
    },
    {
      label: 'Instagram',
      href: 'https://pancakeswap.info',
    },
  ],
  // 'column3': [
  //   {
  //     label: 'Link 1',
  //     href: 'https://pancakeswap.info',
  //   },
  //   {
  //     label: 'Link 2',
  //     href: 'https://pancakeswap.info',
  //   },
  //   {
  //     label: 'Link 2',
  //     href: 'https://pancakeswap.info',
  //   },
  // ]
};

export default config
