class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Title title="Register for an Account" />
                <Form firstName="First Name" lastName="Last Name" email="Email" password="Password" confirmPassword="Confirm Password" />
            </div>
        )
    }
}


/*
  Title
  <Title/>
*/

class Title extends React.Component {
    render() {
        return (
            <div className="page-header">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}


/*
  Form
  <Form/>
*/

class Form extends React.Component {
    render() {
        return (
            <div className="sign-up-form">
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder={this.props.firstName} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder={this.props.lastName} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder={this.props.email} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder={this.props.password} required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder={this.props.confirmPassword} required />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" /> I agree to the Terms and Conditions
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}


React.render(<App />, document.querySelector('#main'));