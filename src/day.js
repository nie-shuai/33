import React,{Component} from 'react'
import Dolist from './Dolist'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import './style.css'

class Todolist extends Component{
	constructor(props){
		super(props)
		this.state={
			inputvalue:'',
			list:[],
			show:true,
			reactshow:true
		}
		this.toggle = this.toggle.bind(this)
	}
	render(){
		return(
			<div>
				{/* <label htmlFor="ju">聚焦鼠标区</label>
				<input value={this.state.inputvalue} onChange={this.change.bind(this)} id="ju"/>
				<button onClick={this.add.bind(this)}>提交<tton>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return <li key={index}  onClick={this.del.bind(this,index)}  dangerouslySetInnerHTML={{__html:item}} ><>
						})
					}
				</ul> */}
				<h1>父子组件传值</h1>
				<input value={this.state.inputvalue} onChange={this.change.bind(this)}/>
				<button onClick={this.add.bind(this)}>提交<tton>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return(
								<div key={index}>
									<Dolist 
									content={item} 
									index={index} 
									del={this.del.bind(this)}>
									</Dolist>
								</div>
							)	
						})
					}
				</ul>
				<div className={this.state.show ? 'show': 'hide'}>hellow world</div>
				<button onClick={this.toggle}>toggle<tton>
				<h1>react-transiton-group实现动画</h1>
				<CSSTransition
				in={this.state.show}
				timeout={1000}
				classNames='fade'
				unmountOnExit
				onEntered={(el) => {el.style.color='blue'}}
				>
					<div>hellow wyq</div>
				</CSSTransition>
				<button onClick={this.toggle}>toggle<tton>
			</div>
		)
	}
	
	
	toggle(){
		this.setState({
			show: this.state.show ? false : true
		})
	}
	change(e){
		this.setState({
			inputvalue:e.target.value
		})
	}
	add(){
		this.setState({
			list:[...this.state.list, this.state.inputvalue],
			inputvalue:''
		})
	}
	del(index){
		var list=[...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
}
export default Todolist