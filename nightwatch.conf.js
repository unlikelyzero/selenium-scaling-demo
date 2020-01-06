const {
  EXTERNAL_SELENIUM_HOST,
  EXTERNAL_SELENIUM_PORT
} = require('./settings.js');

module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "test_workers": { "enabled": false},
  "test_settings" : {
    "default" : {
      "silent": false,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions": {
          "w3c": false
        }
      }
    },
    "local" : {
      "selenium" : {
        "start_process" : true,
        "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar",
        "log_path" : "logs",
        "host" : "127.0.0.1",
        "port" : 4444,
        "cli_args" : {
          "webdriver.chrome.driver" : "./node_modules/chromedriver/bin/chromedriver"
        }
      },
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
    },
    "local-parallel" : { 
        "selenium" : {
        "start_process" : true,
        "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar",
        "log_path" : "logs",
        "host" : "127.0.0.1",
        "port" : 4444,
        "cli_args" : {
          "webdriver.chrome.driver" : "./node_modules/chromedriver/bin/chromedriver"
        }
      },
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "test_workers" : { "enabled": true, "workers": 100 },
    },
    "serial" : {
      "test_workers": { "enabled": false },
    },
    "edge" : {
      "desiredCapabilities": {
        "browserName": 'MicrosoftEdge',
        "browserVersion": 'latest',
        "platformName": 'Windows 10',
      },
      "launch_url" : "http://localhost",
      "test_workers": { "enabled": false, "workers": 1 },
      "selenium_host" : "<here>",
      "selenium_port" : 80,
      "default_path_prefix" : '/wd/hub'
    },
    "zalenium" : {
      "launch_url" : "http://localhost",
      "test_workers": { "enabled": true, "workers": 100 },
      "selenium_host" : "<here>",
      "selenium_port" : 80,
      "default_path_prefix" : '/wd/hub'
    },
    "selenoid" : {
      "launch_url" : "http://localhost",
      "test_workers": { "enabled": false, "workers": 100 },
      "selenium_host" : "<here>",
      "selenium_port" : 4444,
      "default_path_prefix" : '/wd/hub'
    },
    "moon" : {
      "launch_url" : "http://localhost",
      "test_workers": { "enabled": true, "workers": 4 },
      "selenium_host" : "<here>",
      "selenium_port" : 4444,
      "default_path_prefix" : '/wd/hub',
      "desiredCapabilities": {
        "enableVNC": true,
        "enableVideo": true
      }
    },
    "chromecomp" : {
      "desiredCapabilities": {
        "browserName": 'chrome',
        "browserVersion": '77.0',
        "platformName": 'Windows 10',
      },
      "launch_url" : "http://localhost",
      "test_workers": { "enabled": false, "workers": 1 },
      "selenium_host" : "<here>",
      "selenium_port" : 80,
      "default_path_prefix" : '/wd/hub'
    },
  }
};