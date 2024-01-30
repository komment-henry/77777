/**
* @description This function `sample` is a curried function that returns an object
* based on the `id` parameter. It takes an `id` and returns an object with the `id`
* property or an object with `id` and `data` properties if `id` is 3. The code crashes
* the app because it tries to access `id` from a object returned from `sample(2)`
* that doesn't have an `id` property.
* 
* @returns { object } The output returned by the `sample` function is undefined for
* the input `2`. The function only returns a defined value when `id` is `1` or `3`,
* and `2` does not match either condition. Therefore returning nothing (or `undefined`)
* is the default behavior of the function.
*/
const fails = () => {
/**
* @description This function takes an `id` as input and returns an object with the
* specified `id` and additional data based on the value of `id`. If `id` is 1 or 3
* specifically set values will be returned; otherwise {} will be returned for any
* other id value.
* 
* @param { number } id - In the given function `sample`, the `id` input parameter
* is used to determine which object to return based on the value of `id`.
* 
* @returns { object } The function `sample` takes an integer `id` as input and returns
* an object based on the value of `id`. For `id` equal to 1`, the function returns
* an object with a single property `'id'`. For `id` equal to 3`, the function returns
* an object with two properties: `'id'` and `'data'`. The value of `'data'` is an
* empty object (`{}`).
* 
* In other words:
* 
* 	- For `id` = 1: { 'id': 1 }
* 	- For `id` = 3: { 'id': 3 , 'data': {} }
*/
  const sample = (id) => {
    if (id === 1) return { id }
    if (id === 3) return { id, data: { } }
  }

  // why does this crash the app?
  const { id } = sample(2);
}
