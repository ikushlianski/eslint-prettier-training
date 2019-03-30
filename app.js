var fooBar = bar;

const a = (...arr) => {
    let b = 5;

    return arr.filter(x => x === b);
};

function something(arg1, arg2) {
    if (fooBar == 9) {
        let c = fooBar === 3 ? 4 : 3;

        console.warn("something");

        const arr = [
            "something",
            "someone",
            "someone else",
            "some long string here too",
        ];

        return {
            line: 5 && c,
            flagged: true,
        };
    }

    something(
        "some very long string argument",
        "some very very very long string argument 2"
    );
}

something();
