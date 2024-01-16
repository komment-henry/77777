
const fails = () => {
  const sample = (id) => {
    if (id === 1) return { id }
    if (id === 3) return { id, data: { } }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
