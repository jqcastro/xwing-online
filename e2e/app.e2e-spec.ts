import { XwingOnlinePage } from './app.po';

describe('xwing-online App', () => {
  let page: XwingOnlinePage;

  beforeEach(() => {
    page = new XwingOnlinePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to xwo!!'))
      .then(done, done.fail);
  });
});
