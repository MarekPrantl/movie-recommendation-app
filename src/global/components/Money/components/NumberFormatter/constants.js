// eslint-disable-next-line import/prefer-default-export
export const NUMBER_BASES = {
    DEFAULT: {
        translate: null,
        range: [0, 4],
        base: 1,
    },
    THOUSAND: {
        translate: 'thousand',
        range: [4, 7],
        base: 1000,
    },
    MILLION: {
        translate: 'million',
        range: [7, 10],
        base: 1000000,
    },
    BILLION: {
        translate: 'billion',
        range: [10, 13],
        base: 1000000000,
    },
    TRILLION: {
        translate: 'trillion',
        range: [13, 16],
        base: 1000000000000,
    },
}
