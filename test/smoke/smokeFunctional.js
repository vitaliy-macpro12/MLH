import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Required fields and story corrected', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1...4 filled with valid values', function () {
        $(sel.name).setValue('GroundSquirrel21804');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('0123456789');
        $(sel.storyType).click();
        $$(sel.styoryList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();
        $(sel.name).setValue('GroundSquirrel21804');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('0123456789');
        $(sel.storyType).click();
        $$(sel.styoryList)[6].click();
        $(sel.submit).click();

        browser.pause(2000);
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });
});