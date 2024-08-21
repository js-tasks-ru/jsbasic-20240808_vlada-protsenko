function factorial(n) {
  let m = 1;

  if (n == 0 || n == 1) {
    return 1;
  } else {
    while (n > 1) {
      m *= n;
      n--;
    }
    return m;
  }
}

