import {IArticle} from "@/lib/models/article";

export const articles: IArticle[] = [
  {
    id: 1,
    previewImageUrl: "https://i.pinimg.com/474x/01/cf/f2/01cff2c4e6b331acb41c654992a64b90.jpg",
    title: "The Future of Artificial Intelligence",
    content: `Artificial intelligence is transforming industries, from healthcare to finance. With advancements in deep learning, we are seeing AI applications that surpass human capabilities in certain tasks. However, ethical concerns and bias in AI remain pressing issues. Experts predict that AI will continue to revolutionize our daily lives, making automation and smart assistants more sophisticated than ever.`,
    publishedAt: new Date("2025-02-01")
  },
  {
    id: 2,
    previewImageUrl: "https://i.pinimg.com/474x/66/25/d9/6625d905ad88d15dc096f9de5cd66237.jpg",
    title: "How Remote Work is Changing the Workplace",
    content: `Remote work has become a standard practice for many companies worldwide. Studies show that employees working remotely are often more productive and have better work-life balance. However, challenges such as communication gaps and lack of social interaction persist. Organizations are adopting hybrid models to maximize efficiency while ensuring team collaboration remains strong.`,
    publishedAt: new Date("2025-02-02")
  },
  {
    id: 3,
    previewImageUrl: "https://i.pinimg.com/474x/e6/9a/e5/e69ae5d58acc76aaf7407d983aed4dda.jpg",
    title: "Top Programming Trends in 2025",
    content: `The software development landscape is evolving rapidly. Technologies like WebAssembly, AI-powered coding assistants, and low-code platforms are gaining traction. Developers are also focusing more on cybersecurity as threats become increasingly sophisticated. Additionally, Rust continues to grow in popularity for system-level programming, while JavaScript frameworks like Next.js are dominating web development.`,
    publishedAt: new Date("2025-02-03")
  }
]
