import React, {Component,Fragment} from 'react';
 
class Todolist extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			inputval:'',
			list:[]
		}
	}
render()
{
	return(
		<Fragment>
		<div>
		<input value={this.state.inputval} onChange={this.changhes.bind(this)} />
		<input />
		<button onClick={this.clicks.bind(this)}>提交</button>
			<ul>
				{
					this.state.list.map((item,index)=>{
						return <li key={index}>{item}</li>
					})
				}
			</ul>
			
		</div>
		</Fragment>
	)
}
changhes(e)
{
	console.log(e.target.value)
	this.setState({
		inputval:e.target.value
	})
	
}
clicks()
{
	this.setState({
		list:[...this.state.list,this.state.inputval],
		inputval:""
	})
	
}
}
export default Todolist