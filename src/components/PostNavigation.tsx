import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface PostNavigationProps {
  prevPost: { title: string; slug: string } | null;
  nextPost: { title: string; slug: string } | null;
}

export const PostNavigation: React.FC<PostNavigationProps> = ({ prevPost, nextPost }) => {
  return (
    <div className="flex justify-between my-12 py-6 border-t border-b border-gray-200">
      {prevPost ? (
        <Link href={`/blog/${prevPost.slug}`} className="group flex items-center text-gray-700 hover:text-yellow-600 transition-colors">
          <FiArrowLeft className="mr-2 text-4xl group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <div className="space-y-0">
            <p className="text-m font-medium mb-0">Read Previous</p>
            <p className="text-sm mt-0">{prevPost.title}</p>
          </div>
        </Link>
      ) : (
        <div className="invisible">Placeholder</div>
      )}
      
      {nextPost ? (
        <Link href={`/blog/${nextPost.slug}`} className="group flex items-center text-right text-gray-700 hover:text-yellow-600 transition-colors">
          <div className="space-y-0">
            <p className="text-m font-medium mb-0">Read Next</p>
            <p className="text-sm mt-0">{nextPost.title}</p>
          </div>
          <FiArrowRight className="ml-2 text-4xl group-hover:transform group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <div className="invisible">Placeholder</div>
      )}
    </div>
  );
};

export default PostNavigation; 