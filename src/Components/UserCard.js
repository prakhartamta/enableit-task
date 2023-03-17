import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        }

    }

    render() {
        const uservalue = this.props.users.map(item => (
            <div class="th-column">
                <div class="th-card">
                    <div class="th-card-container">
                        <h3><b>{item.FirstNameLastName}</b></h3>
                        <p style={{ marginBottom: 0, marginTop: 0 }}><b>Job Title:</b> {item.JobTitle}</p>
                        <p style={{ marginBottom: 0, marginTop: 0 }}><b>Company:</b> {item.Company}</p>
                        <p style={{ marginTop: 0 }}><b>Phone:</b> {item.Phone}</p>
                    </div>
                </div>
            </div>
        ))

        return (
            <div className="th-row">
                {uservalue}
            </div>
        );
    }
}
export default UserCard;