this.state={
	name:"未变的名字",
	list:[{name:"sunming",age:13}]
}
clickMe(obj){
	console.log(obj)
	this.setState({
		list:[...this.state.list,obj]
	})
}
render()
{
	return(
		<div onClick={this.clickme.bind(this,{"name":"马明辉"})} className="test"></div>
	)
}
