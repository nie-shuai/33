import React, { Component } from 'react'
import "./App.css"
import axios from 'axios'
export default class meishi extends Component {
  constructor(){
    super()
    this.state={
      list:[]
    }
  }
    clicks(){
      this.props.history.push("/xiang")
    }
    componentDidMount(){
          axios.get("data1.json").then((res)=>{
           
            this.setState({
              list:res.data.data
            })
          })
    }
    render() {
        return (
            <div className="App" >
      <header>
        <ul>
          <li>北京↓</li>
          <li>
            <input type="text" />
          </li>
          <li><img src="t1.jpg" alt="" /></li>
        </ul>

      </header>
      <section>
        <div className="top">
          <ul>
            <li>
              <span>美团</span>
            </li>
            <li>
              <p>省钱利器 购物超划算</p>
              <p>吃喝玩乐尽在美团</p>
            </li>
            <li>
              <span>去APP</span>
            </li>
          </ul>

        </div>
        <div className='lunbo'>
          <dl onClick={this.clicks.bind(this)}>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
          <dl>
            <dt>
              <img src="meishi.jpg" alt="" />
            </dt>
            <dd>美食</dd>
          </dl>
        </div>
        <div className="bom">
         <p className='like'>猜你喜欢</p>
          <div className='content'>
            {
              this.state.list.map((item=>{
                return        <dl key={item.id}>
                <dt>
                  <img src={item.imgs} alt=""/>
    
                </dt>
                <dd>
                  <p className='size'>{item.name}</p>
                  <p>{item.title}</p>
                  <p><span>{item.intro1}</span><span>{item.intro2}</span> <span>{item.num}</span></p>
                </dd>
              </dl>
              }))
            }
            
   
     
          </div>

        </div>
      </section>
     



    </div>
        )
    }
}
