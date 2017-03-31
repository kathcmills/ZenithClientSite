import { ZenithSocietyClientPage } from './app.po';

describe('zenith-society-client App', function() {
  let page: ZenithSocietyClientPage;

  beforeEach(() => {
    page = new ZenithSocietyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
