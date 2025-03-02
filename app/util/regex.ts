export const boldPattern = (inputString: string) => {
  const pattern1 = /\*{2}<([^>]+)>\\n/g;
  const pattern2 = /\*{3}<([^>]+)>\*{2}/g; // Matches ***<anything>** pattern
  return inputString.replace(pattern1, '$1</br>').replace(pattern2, '<b>$1</b>');
}