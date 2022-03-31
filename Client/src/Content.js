function Content() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div></div>;
}
export default Content;
