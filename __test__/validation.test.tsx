import React from 'react';
import {validationPrice, validationTextOnlyInput} from "../app/config/validation";

describe('Validation Function', () => {

    describe('Text Validation', () => {
        test('Empty field', () => {
            expect(validationTextOnlyInput('')).toEqual(true)
        })
        test('Letter input', () => {
            expect(validationTextOnlyInput('Product')).toEqual(true)
        })
        test('Letter + numeric', () => {
            expect(validationTextOnlyInput('Product 1')).toEqual(true)
        })
        test('Letter + numeric + allowed chars', () => {
            expect(validationTextOnlyInput('Product_+%*#@!1')).toEqual(true)
        })
        test('Not allowed characters', () => {
            expect(validationTextOnlyInput('Product&')).toEqual(false)
        })
        test('Not allowed characters', () => {
            expect(validationTextOnlyInput('Product|')).toEqual(false)
        })
        test('Numeric Input', () => {
            expect(validationTextOnlyInput('123454')).toEqual(true)
        })
    })

    describe('Price Validation', () => {
        test('All empty field', () => {
            expect(validationPrice('')).toEqual(false)
        })

        test('Numeric Input', () => {
            expect(validationPrice('123454')).toEqual(true)
        })

        test('Numeric Input with decimal', () => {
            expect(validationPrice('123454.90')).toEqual(true)
        })

        test('Exceeded decimal', () => {
            expect(validationPrice('123454.890')).toEqual(false)
        })

        test('Invalid Input', () => {
            expect(validationPrice('abcD')).toEqual(false)
        })

        test('Exceeded value', () => {
            expect(validationPrice('12345667890.12')).toEqual(false)
        })

        test('Without value before decimal', () => {
            expect(validationPrice('.89')).toEqual(false)
        })
    })
})
