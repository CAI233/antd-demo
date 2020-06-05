import React from 'react';
import waite from './../../assets/images/waite.png';
class ErrorComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }
    
    // 定义静态函数: 专门抓取错误, 出现错误errorState: true
    static getDerivedStateFromError( error ){
        return {
            hasError:  true 
        };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        console.log(error);
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render(){
        if(this.state.hasError){
            return (
                // <div id="waite">
                //     <div className="waite">
                //         <img src={waite} className="waite-error" alt="error" />
                //     </div>
                // </div>
                <div id="waite">
                    这是错误页面
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorComponent