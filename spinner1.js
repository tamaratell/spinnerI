const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r-   ', '\r|  '];

const startSpinner = (spinner) => {
  let count = 0;
  for (const spin of spinner) {
    count += 100;
    setTimeout(() => {
      process.stdout.write(spin);
    }, count);
  }
};

startSpinner(spinner);