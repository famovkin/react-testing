const Page = require('./page');

class HelloPage extends Page {
  get toogleBtn() {
    return $('#toggle');
  }

  get searchInput() {
    return $('#search');
  }

  get toogleBtn() {
    return $('#toggle');
  }

  get helloTitle() {
    return $('#hello');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toogleBtn.click();
  }

  open() {
    return super.open('/hello');
  }
}

module.exports = new HelloPage();
