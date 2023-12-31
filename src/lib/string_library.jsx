export function extractInitials(name) {
  if (!name) return "";
  const words = name.split(" ");
  const initials = words.map((word) => word[0].toUpperCase()).join("");
  return initials;
}

export function capitalizeFirstLetters(sentence) {
  if (!sentence) return "";

  const words = sentence.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedSentence = capitalizedWords.join(" ");
  return capitalizedSentence;
}
