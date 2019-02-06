module.exports = {
    'Go To google': (browser) => {
        browser
            .init()
            .url('https://www.google.com')
            .waitForElementVisible('body', 100)
            //.pause(5000)
            .click('input[name="q"]')
            .setValue('input[name="q"]', "google")
            .click('input[name="q"]')
            .click('input[name="btnK"]');
    },
    
    after: (browser) => {
        browser.end();
    }
};