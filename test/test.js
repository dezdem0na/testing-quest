var chai = require('chai');
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const mochaTimeOut = 35000;

describe('Link "Софт для быстрого создания скриншотов"', function () {
    var driver;
    before(function(){
        driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        chai.use(chaiAsPromised);
    });

    after(function(){
        driver.quit();
    });

    it('should lead to "http://monosnap.com"', function (done) {
        var url = 'http://blog.csssr.ru/qa-engineer';
        var expected_links = ['http://monosnap.com/', 'http://monosnap.com'];

        driver.get(url);
        driver.findElement(By.css('label[for=soft]>a')).getAttribute('href')
            .should.eventually.be.oneOf(expected_links).notify(done);
    });
});
