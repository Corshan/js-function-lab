fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((total, todo, index, array) =>{
      if(todo.completed) {
        total[todo.userId] === undefined ? (total[todo.userId] = 1) : (total[todo.userId] += 1);
      }
      return total;
    }, []);
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });