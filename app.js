var foo = bar;

const a = (...arr) => {
  let b = 5;

  return arr.filter(x => x === b);
};

function something(arg1, arg2,) {
  if (true) {
    const c = 5;

    return 5 && c;
  }

  something(arg1 + 1, 4);
}

something();
