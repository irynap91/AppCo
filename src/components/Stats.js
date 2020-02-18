import React from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';


import AppcoHeader from './AppcoHeader';
import AppcoFooter from './AppcoFooter';

export default class Stats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: null,
            historyPage: this.props.page,
            page: <Link to='/stats'>User statistics</Link>
        }
    }

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ users: res}))
          .catch(err => console.log(err));
      }
      callApi = async () => {
        const response = await fetch('/api/users');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      };

      renderTableHeader = () => {
        if (this.state.users !== null) {
          let header = Object.keys(this.state.users[0]);
          return header.map((key, index) => {
            let result = key.replace(key[0], key[0].toUpperCase());
            result = result.split('_').join(' ');
            return <th key={index}>{result}</th>
            })
          }
        }

      renderTable = () => {
        if (this.state.users !== null) {
          return this.state.users.map((user) => {
            return (
                <tr key={user.id} onClick={this.handleRowClick}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>user.ip_address</td>
                    <td>user.total_clicks</td>
                    <td>user.total_page_views</td>
                </tr>
              )
            })
          }
        }


        handleRowClick = () => {
          this.props.history.push('/charts')
        }

    render() {
    return (
        <div className='Stats'>
          {console.log(this.props)}
          <AppcoHeader/>
          <div className="container">
            <div style={{color: 'red'}}>{this.state.historyPage} > {this.state.page}</div>
                <table className="table">
                    <tbody>
                      <tr>{this.renderTableHeader()}</tr>
                      {this.renderTable()}
                    </tbody>
                </table>
              </div>
          <AppcoFooter/>
      </div>
    )
}
}