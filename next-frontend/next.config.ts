import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // 如果需要添加 markdown 插件,在这里配置
  extension: /\.(md|mdx)$/,
  // 例如:options: { remarkPlugins: [], rehypePlugins: [] }
})



export default withMDX(nextConfig);
