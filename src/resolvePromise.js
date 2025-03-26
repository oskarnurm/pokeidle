export function resolvePromise(promise, promiseState) {
  // Check if the promise is null or undefined
  if (!promise) return;

  promiseState.promise = promise;
  promiseState.data = null;
  promiseState.error = null;

  // Update data or error if promise resolves or rejects
  promise.then(setDataACB).catch(setErrorACB);

  function setErrorACB(result) {
    // Address race conditions
    if (promiseState.promise === promise) {
      promiseState.error = result;
    }
  }
  function setDataACB(result) {
    if (promiseState.promise === promise) {
      promiseState.data = result;
    }
  }
}
