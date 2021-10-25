import { work as mockedWork, createCustomWork } from '__mocks__';

describe('create custom mocked work', () => {
  it('return mocked work with custom arguments', async () => {
    const work = createCustomWork({
      role: 'SR mock developer',
      date: '2021'
    });

    expect(work).toMatchObject({
      ...mockedWork,
      ...work
    });
  });
});
