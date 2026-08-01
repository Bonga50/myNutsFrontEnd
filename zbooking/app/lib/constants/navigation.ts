export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  },
  {
    label: "Bookings",
    href: "/dashboard/bookings",
    icon: "M17 1v2h-2V1h2zm2 0h4v4h-2V3h-2V1zM7 1v2H5v2H3V1h4zm10 6v6h4v4h-2v-2h-2v-4h-4V7h4zM5 7h2v4h4v2H5V7zm14 8h2v8h-4v-2h2v-6zM3 15h2v6h4v2H3v-8z",
  },
  {
    label: "Calendar",
    href: "/dashboard/calendar",
    icon: "M6 1h2v2h8V1h2v2h4v20H2V3h4V1zm-2 8v10h16V9H4zm2-6v2h12V3H6zm0 6h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z",
  },
  {
    label: "Clients",
    href: "/dashboard/clients",
    icon: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 5v2h14v-2c0-3-3-5-7-5zm9-3a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm1 3c-1.5 0-3 .5-4 1.3V20h8v-2c0-2-1.5-3.5-4-4z",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 4a9 9 0 0 0-.1-1.3l2-1.5-2-3.5-2.4 1a9 9 0 0 0-2.2-1.3L16 3h-4l-.3 2.4a9 9 0 0 0-2.2 1.3L7 5.7l-2 3.5 2 1.5a9 9 0 0 0 0 2.6l-2 1.5 2 3.5 2.4-1a9 9 0 0 0 2.2 1.3L12 21h4l.3-2.4a9 9 0 0 0 2.2-1.3l2.4 1 2-3.5-2-1.5c.06-.4.1-.8.1-1.3z",
  },
];
