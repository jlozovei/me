import { post as mockedPost, createCustomPost } from '__mocks__';

describe('create custom mocked post', () => {
  it('return mocked post with custom arguments', async () => {
    const post = createCustomPost({
      timeToRead: 5
    });

    expect(post).toMatchObject({
      ...mockedPost,
      ...post
    });
  });
});
