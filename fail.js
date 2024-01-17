
/**
* @description The function `sample` is a mock function that returns an object with
* a single property `id`. If `id` is equal to 1 or 3 it returns an object with the
* respective id value. Otherwise it returns an object with `id` and `data` properties.
* 
* In the code snippet provided it tries to call `sample(2)` which does not match any
* of the `if` conditions and thus no object is returned.
* 
* @returns { object } The function `sample` is not defined for the input `2`, so it
* returns `undefined`. Attempting to access properties of `undefined` will resultin
* a TypeError.
*/
const fails = () => {
/**
* @description This function takes an `id` parameter and returns an object with the
* `id` property or an object with both `id` and `data` properties depending on the
* value of `id`.
* 
* @param { number } id - The `id` input parameter passes a value to the function and
* determines which object will be returned based on the `id` value.
* 
* @returns { object } The function `sample` takes an `id` parameter and returns an
* object with a property named `id` that has the value of `id`. If `id` is 1 or 3.
*/
  const sample = (id) => {
    if (id === 1) return { id }
    if (id === 3) return { id, data: { } }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
