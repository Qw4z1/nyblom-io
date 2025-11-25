import { GetStaticProps, NextPage } from "next";
import { Head } from "../../components/Head";
import Card from "../../components/Card";
import { getPostFrontMatter } from "../../helpers/getFrontMatter";
import { PostFrontMatter } from "../../types/posts";
import InlineNewsletterForm from "../../components/InlineNewsletterForm";
import { useMemo, useState } from "react";
import { RssIcon } from "../../components/icons/RssSvg";

interface BlogListProps {
  posts: PostFrontMatter[];
}

const BlogList: NextPage<BlogListProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearTags = () => setSelectedTags([]);
  const toggleFilters = () => setFiltersOpen((prev) => !prev);

  const filteredPosts = posts.filter(
    (post) =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (selectedTags.length === 0 ||
        post.tags?.some((tag) => selectedTags.includes(tag)))
  );

  return (
    <>
      <Head
        title={"Blog"}
        description={"Thoughts on people, leadership and tech"}
      />
      <div className="w-full pb-11">
        <h1 className="text-black text-opacity-80 px-4">
          Thoughts on people, leadership and tech
        </h1>
        <p className="text-xl font-medium p-4">
          Each Friday, I share frameworks, stories, and actionable lessons from
          my 20 years of leading teams and companies. Get better at navigating
          hiring, delegation, and startup chaos to learn how to become effective
          leaders.
        </p>
        <div className="flex flex-row justify-between">
          <h2 className="p-4">All Posts</h2>
          <a
            className="w-10 h-10 hover:bg-yellow rounded-full no-underline hover:no-underline p-0 m-0 hover:p-0 hover:m-0"
            target="_blank"
            href="https://www.nyblom.io/rss.xml"
            rel="noopener noreferrer"
            aria-label="RSS feed"
          >
            <RssIcon />
          </a>
        </div>
        <div className="px-4 mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:flex-1"
          />
          {uniqueTags.length > 0 && (
            <button
              type="button"
              onClick={toggleFilters}
              aria-expanded={filtersOpen}
              aria-controls="blog-tag-filter-panel"
              className="w-full sm:w-auto rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-black text-opacity-80 hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filtersOpen ? "Hide filters" : "Show filters"}
              {selectedTags.length > 0 && ` (${selectedTags.length})`}
            </button>
          )}
        </div>
        {selectedTags.length > 0 && (
          <div className="px-4 mb-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-black text-opacity-60">Active filters:</span>
            {selectedTags.map((tag) => (
              <button
                key={`active-${tag}`}
                type="button"
                onClick={() => toggleTag(tag)}
                className="rounded-full border border-black bg-black px-3 py-1 text-white hover:bg-white hover:text-black transition"
                aria-label={`Remove filter ${tag}`}
              >
                {tag} ×
              </button>
            ))}
            <button
              type="button"
              onClick={clearTags}
              className="rounded-full border border-gray-300 px-3 py-1 text-black text-opacity-80 hover:border-black hover:text-black transition"
            >
              Clear all
            </button>
          </div>
        )}
        {filtersOpen && uniqueTags.length > 0 && (
          <div
            id="blog-tag-filter-panel"
            className="px-4 mb-6 flex flex-wrap gap-2"
          >
            {uniqueTags.filter((tag) => !selectedTags.includes(tag)).map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-3 py-1 text-sm transition ${
                    isSelected
                      ? "bg-black text-white border-black"
                      : "text-black text-opacity-80 border-gray-300 hover:border-black hover:text-black"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            {selectedTags.length > 0 && (
              <button
                type="button"
                onClick={clearTags}
                className="rounded-full border px-3 py-1 text-sm text-black text-opacity-80 border-gray-300 hover:border-black hover:text-black"
              >
                Clear
              </button>
            )}
          </div>
        )}
        {filteredPosts.map((it) => (
          <Card
            title={it.title}
            key={it.slug}
            subtitle={it.excerpt}
            publishedDate={it.firstPublished}
            slug={it.slug}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const posts = await getPostFrontMatter();
  const publishedPosts = posts.filter((it) => it.published == true);
  return { props: { posts: publishedPosts }, revalidate: 60 };
};

export default BlogList;
