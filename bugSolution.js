function myFunc(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values using strict equality
  }
  return a + b; 
}