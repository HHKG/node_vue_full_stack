import react,{Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    submit=()=>{
        console.log('正在登录~~~')
    }
    render(){

        return(
        <div>
            登录页面
        </div>
        );
    }
}

export default Login;