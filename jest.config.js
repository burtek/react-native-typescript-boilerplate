const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    preset: 'jest-expo',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/build/', '<rootDir>/node_modules/'],
    cacheDirectory: '.jest/cache',
    transform: {
        ...tsjPreset.transform,
        '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest'
    },
    globals: {
        'ts-jest': {
            babelConfig: true,
            tsConfig: 'tsconfig.jest.json'
        }
    }
};
