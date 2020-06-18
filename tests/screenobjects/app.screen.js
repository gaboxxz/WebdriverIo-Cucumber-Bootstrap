import { DEFAULT_TIMEOUT } from '../constants';

const SELECTORS = {
    TOOL_BAR: 'id=vTextViewToolbar',
    PROFILE_BUTTON: '~Profile',
    BACK_BUTTON: '~Back'
};

export default class AppScreen {
    constructor (selector) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown (isShown = true) {
        return $(this.selector).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    get toolBar () {
        return $(SELECTORS.TOOL_BAR);
    }

    get profileButton () {
        return $(SELECTORS.PROFILE_BUTTON);
    }

    get backButton () {
        return $(SELECTORS.BACK_BUTTON);
    }
}
