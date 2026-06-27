import Link from "next/link";
import { GlobalSearch } from "@/components/GlobalSearch";
import { MobileNav } from "@/components/MobileNav";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, siteConfig } from "@/lib/site";
import { topicHubs } from "@/lib/topics";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full overflow-x-clip border-b border-border bg-surface backdrop-blur-xl">
      <div className="border-b border-border bg-ink-800 text-signal-100 dark:bg-ink-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs sm:px-6">
          <p className="truncate font-semibold tracking-[0.22em] text-signal-200 uppercase">
            用 AI 重构复杂工程问题的建模、仿真与决策
          </p>
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {topicHubs.map((topic) => (
              <Link
                key={topic.slug}
                href={topic.href}
                className="rounded-md px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-signal-200 transition hover:bg-signal-700/30 hover:text-signal-50"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link
          href="/"
          className="shrink-0 rounded-md font-semibold tracking-normal text-primary transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {siteConfig.author}
        </Link>

        <nav className="hidden min-w-0 shrink-0 items-center gap-1 xl:flex" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <GlobalSearch className="hidden min-w-[18rem] flex-1 lg:block xl:max-w-[34rem] 2xl:max-w-[38rem]" />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-3 sm:px-6 xl:hidden">
        <GlobalSearch />
      </div>
    </header>
  );
}
