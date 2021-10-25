const post = {
  timeToRead: 10,
  fields: {
    slug: '/a-blog-post',
    langKey: 'en'
  },
  frontmatter: {
    date: '01/01/2021',
    title: 'A blog post',
    excerpt: 'An endless journey throughout blogging.',
    category: 'thoughts'
  }
};

const createCustomPost = (props) => ({
  ...post,
  ...props
});

export { post, createCustomPost };
