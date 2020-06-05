import React,{Component} from 'react'

import Tabbar from '../tabbar'
import './index.css'

class Contain extends Component{

    render() {
        const {children,isFoot,patch} = this.props;
        console.log('Contain',this.props)
        return (
            <div className='container'>
                {children}
                <Tabbar path={patch} />
            </div>
        )
    }
}
export default Contain