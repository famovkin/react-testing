const HelloPage = require('../pages/hello.page');

describe('My hello page', () => {
  it('test exist title', async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput('hello');
    await expect(HelloPage.helloTitle).toBeExisting();
    await HelloPage.toogleBtn.click();
    await expect(HelloPage.helloTitle).not.toBeExisting();
  });

  it('test not exist title', async () => {
    await HelloPage.open();
    await HelloPage.toggleTitleWithInput('asdfasdf');
    await expect(HelloPage.helloTitle).not.toBeExisting();
  })
});
