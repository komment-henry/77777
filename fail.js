
const fails = () => {
  const sample = (id) => {
    if (id === 1) return { id }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
