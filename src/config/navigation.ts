interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = [
  "guide",
  "mechanics",
  "items",
  "characters",
  "maps",
  "codes",
  "community",
] as const;
