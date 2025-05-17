import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

import 'highlight.js/styles/github.css';

const MDStyleResponse = ({ markdown }) => {
  return (
    <div className="space-y-4 px-4 md-content">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />
          ),
          img: ({ node, ...props }) => (
            <img {...props} className="max-w-full h-auto rounded-md shadow" alt={props.alt || ''} />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            return !inline ? (
              <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-gray-200 rounded px-1">{children}</code>
            );
          },
        }}
      />
    </div>
  );
};

export default MDStyleResponse;