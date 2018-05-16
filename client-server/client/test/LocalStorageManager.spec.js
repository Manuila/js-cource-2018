import chai from 'chai';
import sinon from 'sinon';
import LocalStorageManager from '../src/fileManager/LocalStorageManager';
import LocalStorage from '../src/utils/LocalStorageMock';
const expect = chai.expect;


describe('LocalStorageManager', () => {
    let localStorageManager;
    beforeEach(() => {
        localStorageManager = new LocalStorageManager('testName');
    });

    describe('"#write"', () => {
        it('"localStorage.setItem" should be only once', () => {
            const localStorageSetItemSpy = sinon.spy(localStorage, "setItem");
            const saveDone = sinon.spy();
            localStorageManager.write(saveDone);
            //localStorageManager.write([]);
            sinon.assert.calledOnce(localStorageSetItemSpy);
            localStorage.setItem.restore();
        });
    });

    describe('"#read"', () => {
        it('"localStorage.getItem" should be only once', () => {
            const localStorageGetItemSpy = sinon.spy(localStorage, "getItem");
            localStorageManager.read();
            sinon.assert.calledOnce(localStorageGetItemSpy);
            localStorage.getItem.restore();
        });
    });
  });
