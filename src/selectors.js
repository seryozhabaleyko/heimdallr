export const getPosts = (state) => state.posts.posts;

export const getFetchedPosts = (state) => {
    const { posts } = state;
    const { isLoading, fetchedPosts, error } = posts;
    return { loading: isLoading, posts: fetchedPosts, error };
};
