import React from 'react';
import renderer, {create} from 'react-test-renderer';
import HeaderComponent from '../app/component/header/headerComponent'

jest.unmock('react-native');

describe('Header Component', () => {
    test('All empty field', () => {
        const header = renderer.create(<HeaderComponent title={"Home"}/>).toJSON()
        expect(header).toMatchSnapshot
    })
})
