module.exports = {
    'Go To google': (browser) => {
        browser
            .init()
            .url('https://www.google.com')
            .waitForElementVisible('body', 100)
            .pause(10)
            .click('input[name="q"]')
            .setValue('input[name="q"]', "")
    },
    
    after: (browser) => {
        browser.end();
    }
};