/**
 * @description Takes an `id` parameter and returns an object based on its value. If
 * `id` is 1 or 3, it returns only that `id`, while if `id` is 3, it includes a
 * property named `data` with an empty object.
 *
 * @returns {object} Either { id: 2 } or { id: 3, data: {} } based on input parameter
 * value
 */
const fails = () => {
  /**
   * @description Takes an ID as input and returns different objects based on the ID
   * provided. For ID = 1, it returns an object with a single property "id". For ID =
   * 3, it returns an object with a single property "id" and an additional property "data".
   *
   * @param {number} id - Used to determine the value returned by the function based
   * on its value.
   *
   * @returns {any} An object containing a single property with an integer value or an
   * object with a property of type any and an empty data field.
   */
  const sample = (id) => {
    if (id === 1) return { id }
    if (id === 3) return { id, data: { } }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
