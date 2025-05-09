import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Highlight, themes } from 'prism-react-renderer';
import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogPostData {
  content: string;
  metadata: {
    title: string;
    date: string;
    author: string;
    coverImage?: string;
  };
}

const MODAL_CONTAINER_WIDTH = 500;
const MODAL_CONTAINER_HEIGHT = 400;
const FIXED_IMAGE_SIZE = 400; // ideal size for blog images

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const loadPost = () => {
      if (!slug) return;

      try {
        const blogPost = blogPosts.find(post => post.slug === slug);
        
        if (!blogPost) {
          throw new Error('Blog post not found');
        }

        const parsed = matter(blogPost.content);
        const { data, content } = parsed;
        
        if (!data.title || !data.date || !data.author) {
          throw new Error('Missing required frontmatter fields (title, date, or author)');
        }
        
        setPost({
          content,
          metadata: {
            title: data.title,
            date: data.date,
            author: data.author,
            coverImage: data.coverImage,
          }
        });
        setError(null);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError(error instanceof Error ? error.message : 'Failed to load blog post');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-2xl text-gray-600 mb-4">Error Loading Post</h1>
        <p className="text-gray-500">{error || 'Unable to load the blog post'}</p>
        <Link to="/" className="mt-4 text-blue-500 hover:text-blue-600">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-12">
          <button
            type="button"
            onClick={() => {
              navigate('/blogs');
            }}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blogs
          </button>
        </div>

        {post.metadata.coverImage && (
          <div className="mb-8 rounded-lg overflow-hidden max-w-fit mx-auto shadow-lg flex justify-center">
            <img
              src={post.metadata.coverImage}
              alt={post.metadata.title}
              style={{ maxWidth: FIXED_IMAGE_SIZE, maxHeight: FIXED_IMAGE_SIZE, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', cursor: 'default' }}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.metadata.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <span>{post.metadata.author}</span>
          <span>•</span>
          <time>{new Date(post.metadata.date).toLocaleDateString()}</time>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <div className="flex justify-center my-8">
                  <img
                    {...props}
                    style={{
                      maxWidth: FIXED_IMAGE_SIZE,
                      maxHeight: FIXED_IMAGE_SIZE,
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      cursor: 'default',
                      display: 'block',
                    }}
                    className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg"
                  />
                </div>
              ),
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                const code = String(children).replace(/\n$/, '');

                return match ? (
                  <Highlight
                    theme={themes.nightOwl}
                    code={code}
                    language={language}
                  >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre className={className} style={{ ...style, padding: '1rem', borderRadius: '0.5rem' }}>
                        {tokens.map((line, i) => (
                          <div key={i} {...getLineProps({ line })}>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 