import "testcafe";
import {myRequestHook} from './RequestHook';
import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .requestHooks(new myRequestHook())
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page
    

//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#remote-testing')
        .click('#reusing-js-code')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});