"use client"
import React from "react";
import Image from "next/image";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import {articles} from "./articledemo";
import { Clock, User } from "lucide-react";

function Page() {
  const [selectedArticle, setSelectedArticle] = React.useState(articles[0]);

  // 渲染文章内容,支持简单的 Markdown 风格
  // 重要:这个函数会给每个标题添加 id 属性,这是实现锚点定位的关键
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.JSX.Element[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        const text = line.substring(2);
        // 从文章的 sections 数组中找到对应的章节 id
        const section = selectedArticle.sections.find(s => s.title === text);
        const sectionId = section?.id || `section-${index}`;

        elements.push(
          <h1
            key={index}
            id={sectionId}
            className="text-3xl font-bold text-foreground mb-4 mt-8 first:mt-0 scroll-mt-8"
          >
            {text}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        const text = line.substring(3);
        const section = selectedArticle.sections.find(s => s.title === text);
        const sectionId = section?.id || `section-${index}`;

        elements.push(
          <h2
            key={index}
            id={sectionId}
            className="text-2xl font-body text-foreground mb-3 mt-6 scroll-mt-8"
          >
            {text}
          </h2>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={index} className="text-foreground leading-relaxed mb-4">
            <strong>{line.slice(2, -2)}</strong>
          </p>
        );
      } else if (line.trim() !== '') {
        elements.push(
          <p key={index} className="text-foreground leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    return elements;
  };


  return (
    <div className="flex mt-32 mb-60">
      {/* Left Sidebar - Article List */}
      <aside className="w-64 border-r  ">
        <div className="sticky top-20 self-start">
          <div className="p-6 ">
            <h2 className="text-md text-muted-foreground tracking-wide mb-4 font-heading"> Blog Article</h2>
          </div>
        </div>

      </aside>
      {/*Main Content*/}
      <main className="flex-1 ">
        <div className="flex h-50 lg:h-80 xl:h-102 2xl:h-140 justify-center ">
          <div className="relative w-4/5 lg:max-w-5xl sm:max-w-3xl md:max-w-4xl h-64">
            {/*Hero Pages*/}
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/hero1.jpg" // 确保文件放在 public/hero1.jpg
                alt="Aki Wayne's Portfolio"
                fill
                className="rounded-md "
                sizes="(max-width: 1024px) 100vw, 1024px" // 可选：优化加载
              />
            </AspectRatio>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-8 py-12 ">
          <header className="mb-8 pb-8 border-b border-white">
            <h1 className="h1 text-4xl font-heading text-purple-900 pb-3">{selectedArticle.title}</h1>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedArticle.readTime}</span>
              </div>
              <time>{selectedArticle.date}</time>
            </div>
          </header>

          {/* 文章正文 */}
          <div className="prose prose-lg max-w-none">
            {(renderContent(selectedArticle.content))}
          </div>

        </article>
      </main>

      <aside className="w-64 border-l flex-shrink-0">
        <div className="p-4 sticky top-20 self-strart">
          <h3 className="text-md text-muted-foreground tracking-wide mb-4">
            On This Page
          </h3>
          <nav>
            {selectedArticle.sections.map((section) => (
              <div className="flex items-center" key={section.id}>
                <span className="text-sm text-muted-foreground hover:text-foreground pl-4 py-1 border-l-1 border-muted-foreground hover:border-foreground">{section.title}</span>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
export default Page;
