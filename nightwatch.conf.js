module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "test_workers": { "enabled": true, "workers": 100 },
  "test_settings" : {
    "default" : {
      "selenium" : {
        "start_process" : true,
        "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar",
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
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      } 
    },
    "serial" : {
      "test_workers": { "enabled": false },
    },
    "zalenium" : {
      "test_workers": { "enabled": true, "workers": 100 },
      "selenium_host" : "externalhost",
      "selenium_port" : 4444,
      "default_path_prefix" : '/wd/hub'
    }
  }
}