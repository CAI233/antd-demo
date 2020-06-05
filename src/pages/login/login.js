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
@connect(state => state.puplic,{ ...actions})

class login extends React.Component{
    constructor (props) {
        super(props)
    }
    state ={
        isShow:false,
        SellerData:[],
        SellerName:'',
        SellerNo:'',
    }
    async componentDidMount(){
        await this.props.dispatchSeller();
        const {sellerList} = this.props
        this.setState({
          SellerData:sellerList,
          SellerName:sellerList[0].title,
          SellerNo:sellerList[0].title
        })
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
      const nowSelect = SellerData.find( item => {return item.title == nowVal});
      this.setState({
        SellerName:nowSelect.title,
        SellerNo:nowSelect.title
      })
    }
    ModalClose(){//关闭弹窗
      this.setState({
        isShow:false
      })
    }

    async Login(e){//登录
        const {form: {UserPhone, PassWord}, formValid} = this.props;
        const {SellerNo} = this.state;
        // if(!UserPhone.valid){
        //   Toast.info(UserPhone.error);
        //   return;
        // }
        // if(!PassWord.valid){
        //   Toast.info(PassWord.error);
        //   return;
        // }
        const param = {
          PassWord:'',
          UserPhone:UserPhone.value,
          SellerNo:SellerNo,
          OpenId:''
        };
        this.props.history.push('/home')
    }
    render() {
        const {form: {UserPhone, PassWord}, handleChange,} = this.props;
        const {isShow,SellerName,SellerNo,SellerData} = this.state;
        const newData = [...SellerData];
        newData.map((item)=> {item['label'] = item.title;item['value'] = item.title});
        return (
            <div id="container">
              <div className="cont">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="cont">
                    <List>
                        <div onClick={() => this.handlClick()}><InputItem placeholder="选择渠道品牌" disabled value={SellerName}>渠道品牌</InputItem></div>
                        <InputItem clear placeholder="手机号/微信号" onChange={(e) => handleChange('UserPhone', e)} value={UserPhone.value}>账号</InputItem>
                        <InputItem type="PassWord" placeholder="输入密码" onChange={(e) => handleChange('PassWord', e)} value={PassWord.value} >密码</InputItem>
                    </List>
                    <WingBlank>
                        <Button onClick={() => this.Login()}>登录</Button><WhiteSpace />
                    </WingBlank>
                </div>
              </div>
              {/* afterClose={() => { alert('afterClose'); }} */}
              <Modal popup visible={isShow} onClose={() =>this.ModalClose()} maskClosable={true} animationType="slide-up" >
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
connect(state => state.puplic,{...actions});

const Login = formProvider({
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

  export default Login