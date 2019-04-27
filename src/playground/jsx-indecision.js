//console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };
  
  const onFormSubmit= (e) =>{
    //console.log('form');
    e.preventDefault();
    const option= e.target.elements.option.value;
  
    if (option){
      app.options.push(option);
      e.target.elements.option.value= '';
      renderOptions();
    }
  }
  const remove= () =>{
    app.options=[];
    renderOptions();
  }
  const onMakeDecision=() =>{
    const randomNum = Math.floor(Math.random()* app.options.length);
    const option= app.options[randomNum];
    alert(option);
  }
  
  const renderOptions=()=>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled= {app.options.length===0} onClick={onMakeDecision}> What should I do?</button>
  
        <button onClick={remove}> Remove All</button>
  
  
        <ol>{
        app.options.map((option)=> <li key= {option}> Option: {option}</li> 
        )}
        </ol>
  
      <form onSubmit={onFormSubmit}> 
      <input type= 'text' name='option'/>
      <button> Add Opption </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
  
  //console.log(template);
  }
  const appRoot = document.getElementById('app');
  renderOptions();