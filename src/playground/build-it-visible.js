//console.log('123');
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state={
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
            visibility: !prevState.visibility
            }
        });
    }
    render(){
        return(
            <div>
            <h1> Visibility Toggle </h1>
            <button onClick={handleToggleVisibility}> {this.state.visibility? 'Hide Details' : 'Show Details'} </button>
            {this.state.visibility && (
                <div>
                <p> Hey There are some details</p>
                </div>
            )}
            <button onClick={handleToggleVisibility}>  </button>
        
            </div>      
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));