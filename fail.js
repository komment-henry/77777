/**
* @description This function defines a `sample` function that returns an object with
* an `id` property based on the input `id`. It then attempts to access the `id`
* property of the returned object from `sample(2)`, which is undefined because
* `sample(2)` does not return any object.
* 
* Therefore the code crashes the app because it is trying to access the `id` property
* of an undefined object.
* 
* @returns { object } The function `sample` is not defined for input `2`, so attempting
* to access its property `id` will result an exception and crash the app. Therefore
* the output returned by the function is undefined.
*/
const fails = () => {
/**
* @description This function takes an `id` parameter and returns an object based on
* the value of `id`. If `id` is 1 or 3 it will contain only that `id`, but if `id`
* is 3 it will also include a property named `data` with an empty object.
* 
* @param { string } id - The `id` input parameter is passed to the function and can
* have the value of either 1 or 3. It determines which object the function returns
* based on the current value.
* 
* @returns { object } The output returned by the given function `sample` is an object
* that contains either `id` only for `id===1`, or `id` and a `data` property with
* an empty object for `id===3`. In other words:
* 
* 	- For `id=1`, the function returns `{ id }`.
* 	- For `id=3`, the function returns `{ id: 3 data: {} }`.
*/
  const sample = (id) => {
    if (id === 1) return { id }
    if (id === 3) return { id, data: { } }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
