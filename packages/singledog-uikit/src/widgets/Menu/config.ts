import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.singledogswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.singledogswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://singledogswap.info",
      },
      {
        label: "Tokens",
        href: "https://singledogswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://singledogswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://singledogswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.singledogswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/singledogswap",
      },
      {
        label: "Docs",
        href: "https://docs.singledogswap.finance",
      },
      {
        label: "Blog",
        href: "https://singledogswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/singledogswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/SingledogSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/SingledogSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/SingledogSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/singledogswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/singledogswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/singledogswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/SingledogSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/SingledogswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/singledogswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/singledogswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/SingledogSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/SingledogSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/woshidansh",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
