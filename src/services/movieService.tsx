export async function movieService() {
  return await fetch(`https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .catch((err) => {
        console.log(err.message);
      });
}
