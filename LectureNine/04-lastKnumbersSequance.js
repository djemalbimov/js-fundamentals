function generateSequence(n, k) {
  let sequence = [1];

  for (let i = 1; i < n; i++) {
    let nextElement = 0;
    let startIndex = Math.max(0, i - k);

    for (let j = startIndex; j < i; j++) {
      nextElement += sequence[j];
    }

    sequence.push(nextElement);
  }

  console.log(sequence.join(' '));
}

generateSequence(6, 3);
generateSequence(8, 2);