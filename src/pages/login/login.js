import React from 'react';
// import {get,post} from '../../HttpClientRequest/Api';
import { connect } from 'react-redux'
import * as actions from './../../actions/puplic'
import formProvider from '../../utils/formProvider';
import { List, InputItem, WhiteSpace ,Button,WingBlank,PickerView,Modal,Toast} from 'antd-mobile';
// import { createForm } from 'rc-form';//金额键盘 受控组件建议使用rc-form
// import { async } from 'q';

import logo from '../../logo.svg';
import './login.css';
// @connect
// @connect(state => state.puplic,{ ...actions})

class login extends React.Component{
    constructor (props) {
        super(props)
    }
    state ={
        isShow:false,
        SellerData:[],
        SellerName:'',
        SellerNo:''
    }
    componentDidMount(){
        // get('API/GetSellerList').then((res) => {
          
        //   let dataList = res.data;
        //   if(dataList.length>0){
        //     this.setState({
        //       SellerName:dataList[0].SellerName,
        //       SellerNo:dataList[0].SellerNo
        //     })
        //   }
        //   this.setState({
        //     SellerData:dataList
        //   })
        // }).catch((error)=>{

        // })
        // console.log(actions)
        console.log(this.props)

    }
    handlClick(){//开启弹窗  
      const {isShow} = this.state;
      this.setState({
        isShow:!isShow
      })
    }
    pickerChange(val){//渠道改变
      let nowVal = val.join("");
      const {SellerData} = this.state;
      // let now = SellerData.filter(item => item.SellerNo== nowVal)
      let newSell = SellerData.find((value,index,arr)=>{
        return value.SellerNo == nowVal
      });
      this.setState({
        SellerName:newSell.SellerName,
        SellerNo:newSell.SellerNo
      })
    }
    ModalClose(e){//关闭弹窗
      this.setState({
        isShow:false
      })
    }

    async Login(e){//登录
        const {form: {UserPhone, PassWord}, formValid} = this.props;
        const {SellerNo} = this.state;
        console.log(UserPhone);
        if(!UserPhone.valid){
          Toast.info(UserPhone.error);
          return;
        }
        if(!PassWord.valid){
          Toast.info(PassWord.error);
          return;
        }
        let param = {
          PassWord:'',
          UserPhone:UserPhone.value,
          SellerNo:SellerNo,
          OpenId:''
        };

        // let open = await post('API/PostEn',{Content:PassWord.value}).then((res) => {
        //   console.log(res);
        // }).catch((error)=>{
        //     // error something
        // })

      //  await post('API/PostEn',{Content:PassWord.value}).then((res) => {
      //     console.log(res);
      //     let enPass = res.details;
      //     param.PassWord = enPass;
      //   }).catch((error)=>{
      //       // error something
      //   })
      //   post('API/SetLogin',param).then((res) => {
      //     console.log(res);
      //     this.props.history.push('/home')
      //   }).catch((error)=>{
      //       // error something
      //   })    
    }
    render() {
        console.log(this.props)
        const {form: {UserPhone, PassWord}, handleChange} = this.props;
        const {SellerData,isShow,SellerName,SellerNo} = this.state;
        let newData = [...SellerData];
        newData.map((item)=> {item['label'] = item.SellerName;item['value'] = item.SellerNo});
        return (
            <div id="container">
              <div className="cont">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="cont">
                    <List>
                      {/*  */}
                        <div onClick={() => this.handlClick()}><InputItem placeholder="选择渠道品牌" disabled value={SellerName}>渠道品牌</InputItem></div>
                        {/* <div onClick={() => isShow = !isShow}><InputItem placeholder="选择渠道品牌" disabled value={SellerName}>渠道品牌</InputItem></div> */}
                        <InputItem clear placeholder="手机号/微信号" onChange={(e) => handleChange('UserPhone', e)} value={UserPhone.value}>账号</InputItem>
                        <InputItem type="PassWord" placeholder="输入密码" onChange={(e) => handleChange('PassWord', e)} value={PassWord.value} >密码</InputItem>
                    </List>
                    <WingBlank>
                        <Button onClick={() => this.Login()}>登录</Button><WhiteSpace />
                    </WingBlank>
                    {/* <div className="cont-foot">
                        <p onClick={() => this.props.history.push('/forgetPass')}>忘记密码？</p>
                    </div> */}
                </div>
              </div>
              {/* afterClose={() => { alert('afterClose'); }} */}
              <Modal popup visible={isShow} onClose={() =>this.ModalClose()} animationType="slide-up" >
                <PickerView data={newData} cascade={false} value={[SellerNo]} onChange={(e) =>this.pickerChange(e)} />
              </Modal>
           </div>
       );
   }
}
// 必须给UserAdd定义一个包含router属性的contextTypes
// 使得组件中可以通过this.context.router来使用React Router提供的方法
// this.context.router.push('/user') 跳转
// UserAdd.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };
connect(state => state.puplic,{...actions})(login);
login = formProvider({
  UserPhone: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length > 0;
          },
          error: '请输入用户名'
        },
        {
          pattern: /^.{1,11}$/,
          error: '用户名最多11个字符'
        }
      ]
    },
    PassWord: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length>=6;
          },
          error: '密码最少6个字符'
        }
      ]
    }
  })(login);
  // login = createForm()(login);

  export default login