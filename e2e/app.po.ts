import { browser, by, element } from 'protractor';

export class XwingOnlinePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xwo-root h1')).getText();
  }
}
