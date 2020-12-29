export function loginUser(username, password) {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => "true"
  );
}
