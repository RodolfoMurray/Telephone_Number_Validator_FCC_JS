function telephoneCheck(str) {
  const validPath = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,    
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}/
  ];

  return validPath.some((path) => path.test(str));
}

telephoneCheck("555-555-5555");