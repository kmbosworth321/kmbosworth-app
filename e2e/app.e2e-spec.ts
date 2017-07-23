import { KmbosworthAppPage } from './app.po';

describe('kmbosworth-app App', () => {
  let page: KmbosworthAppPage;

  beforeEach(() => {
    page = new KmbosworthAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
