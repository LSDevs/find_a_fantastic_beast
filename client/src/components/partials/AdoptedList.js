import React, {Component} from 'react';

class adoptList extends Component {
  // constructor() {
  //   super()

  // }
  // componentDidMount() {
  //   axios('http://localhost3001/api')
  // }
    render() {
        return (
          <div>
            <p> Made with love by LSDevs </p>
            <h3> ACCOUNT </h3>

                            <button className="inputBtn" onClick={this.deleteAcct}>
                                DELETE ACCT
                            </button>



          </div>
        )
    }
}

export default adoptList;
