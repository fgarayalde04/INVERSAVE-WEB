import { Metadata } from 'next';
import BlogArticleLayout from '@/components/blog/BlogArticleLayout';
import { BLOG_POSTS } from '@/data/blog';
import ArticleContent from './content';
import '../blog-article.css';

const post = BLOG_POSTS.find((p) => p.slug === '401k-incentivos-ahorro')!;

export const metadata: Metadata = {
  title: post.seo.title,
  description: post.seo.description,
};

export default function Page() {
  return (
    <BlogArticleLayout post={post}>
      <ArticleContent />
    </BlogArticleLayout>
  );
}
