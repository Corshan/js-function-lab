fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completeNum = json.reduce((total, todo, index, array) => {
       return (todo.completed === false) ? total += 1 : total;
    }, 0)
     console.log(completeNum);
  })
  .catch(function(err) { 
    console.log(err);
  });