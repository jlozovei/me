import { academic as mockedAcademic, createCustomAcademic } from '__mocks__';

describe('create custom mocked academic', () => {
  it('return mocked academic with custom arguments', async () => {
    const academic = createCustomAcademic({
      key: 'academic',
      date: '2021',
      lang: 'pt-br'
    });

    expect(academic).toMatchObject({
      ...mockedAcademic,
      ...academic
    });
  });
});
