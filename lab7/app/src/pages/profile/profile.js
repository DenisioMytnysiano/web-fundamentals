import React from 'react';
import Content from '../../components/profile/content';
import Header from '../../components/profile/header';

class Profile extends React.Component{
    
    render(){
        return (
            <div>
                <Header text="Митник Денис Олександрович"/>
                <Content />
            </div>
        )
    }
}

export default Profile;