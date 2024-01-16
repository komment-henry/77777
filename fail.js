
/**
* @description This function defines a function `sample` that returns an object based
* on the input `id`. If `id` is 1 or 3 it returns an object with the `id` property
* set to the respective value.
* 
* @returns { object } The output returned by this function is `undefined`. The
* function `sample` only defines two possible return values: `{ id }` for `id ===
* 1`, and `{ id } with { data: {} }` for `id === 3`.
*/
const fails = () => {
/**
* @description The given function `sample` takes an `id` as input and returns an
* object with the specified properties based on the value of `id`.
* 
* @param { number } id - The `id` input parameter is passed to the function as an
* argument and is used within the function to determine which object to return based
* on the value of `id`.
* 
* @returns { object } The output returned by this function is an object with either
* only the `id` property or both `id` and `data` properties depending on the value
* of `id`.
*/
  const sample = (id) => {
    if (id === 1) return { id }
    if (id === 3) return { id, data: { } }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
