import type { LucideIcon } from "lucide-react";
import { BookOpen } from "lucide-react";

export type TopicHub = {
  slug: string;
  title: string;
  category: string;
  href: string;
  description: string;
  slogan: string;
  icon: LucideIcon;
  keywords: string[];
};

// Add your real topic hubs here. The home page and /topics routes
// will render whatever is in this array.
export const topicHubs: TopicHub[] = [
  {
    slug: "placeholder",
    title: "示例主题",
    category: "技术笔记",
    href: "/topics/placeholder",
    description: "替换 lib/topics.ts 中的 topicHubs 数组，填入你自己的主题聚合。",
    slogan: "从这里开始定义你自己的写作主线。",
    icon: BookOpen,
    keywords: ["示例"]
  }
];

export function getTopicBySlug(slug: string) {
  return topicHubs.find((topic) => topic.slug === slug);
}
