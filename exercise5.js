fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((total, todo, index, array) =>{
      if(todo.completed === true) total.push({userId : todo.userId, title : todo.title})
      return total;
    }, []);
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });