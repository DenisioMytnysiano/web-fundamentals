import React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Navigate } from 'react-router-dom';
import { UserService } from '../services/userService';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          isAuthenticated: localStorage.getItem("currentUser"),
          user: {
            email: "",
            location: "",
            phone: "",
            name: "",
            surname: ""
          }
        }
    }

    componentDidMount(){
      if(this.state.isAuthenticated){
        UserService.getUserInfo()
          .then(user => {
            this.setState({user: user})
          })
      }
    }

    render() {
        const {email, location, phone, name, surname} = this.state.user;
        const { isAuthenticated } = this.state
        if(!isAuthenticated){
          return (<Navigate to="/login" />)
        }
        return (
            <Card variant="outlined"style={{ display: "inline-block", fontSize: "70px", height: 400, width: 400 }}>
              <CardMedia align="center" style={{ height: "30%" }}>
                <Avatar alt={name + " " + surname}/>
              </CardMedia>
              <CardContent>
                <Typography color="textSecondary" variant="h6" align="center">{name + surname}</Typography>
                <Typography color="textSecondary" variant="subtitle1" align="center">{email}</Typography>
                <Typography color="textSecondary" variant="subtitle1" align="center">{phone}</Typography>{" "}
                <Typography color="textSecondary" variant="subtitle1" align="center">{location}</Typography>{" "}
              </CardContent>
            </Card>
        );
    }
}

export {HomePage};