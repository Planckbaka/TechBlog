import React from "react";
import { articles } from "./oauth/articledemo";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Image from "next/image";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";

function Page() {
  return (
    <main className="blog-page mt-20 mb-10 grid grid-cols-4 gap-10">
      <div className="grid col-span-3 grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className={`col-span-1`}>
            <Link href={`/blog/${article.page}`}>
              <Card className={`border-0 bg-transparent `}>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src="/hero1.jpg" // 确保文件放在 public/hero1.jpg
                    alt="Aki Wayne's Portfolio"
                    fill
                    className="rounded-md "
                    sizes="(max-width: 1024px) 100vw, 1024px " // 可选：优化加载
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription></CardDescription>
                  <CardAction className={`text-xs`}>
                    {article.readTime}
                  </CardAction>
                </CardHeader>
                <CardContent>
                  {article.sections.map((tag) => (
                    <Badge
                      key={tag.id}
                      variant={`outline`}
                      className={`rounded-md mx-0.5 my-0.5`}
                    >
                      {tag.title}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter>
                  <p className={`text-muted-foreground text-xs`}>
                    {article.date}
                  </p>
                </CardFooter>
              </Card>
            </Link>

          </div>
        ))}
      </div>
      <div className="grid col-span-1 ml-5">
        <div className="w-full flex flex-col">
          <h1 className={`text-muted-foreground hover:text-foreground font-heading mb-2`}>Tags</h1>
          <p className={`text-muted-foreground font-body hover:text-foreground/80 py-1 pl-2 border-l-1 hover:border-foreground/80`}>why to choose Tailwind</p>
          <p className={`text-muted-foreground font-body hover:text-foreground/80 py-1 pl-2 border-l-1 hover:border-foreground/80`}>what is FlexBox</p>
          <p className={`text-muted-foreground font-body hover:text-foreground/80 py-1 pl-2 border-l-1 hover:border-foreground/80`}>响应式设计</p>
          <p className={`text-muted-foreground font-body hover:text-foreground/80 py-1 pl-2 border-l-1 hover:border-foreground/80`}>useState 详解</p>
          <p className={`text-muted-foreground font-body hover:text-foreground/80 py-1 pl-2 border-l-1 hover:border-foreground/80`}>自定义hook</p>
        </div>
      </div>
    </main>
  );
}
export default Page;
