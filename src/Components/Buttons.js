import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div className="th-btn-container">
                <button type='button' className="th-button" disabled={this.props.id <= 0} onClick={() => this.props.onNext(this.props.id - 12)}>Prev</button>
                <button type='button' className="th-button" onClick={() => this.props.onNext(this.props.id + 12)}>Next</button>
            </div>
        );
    }
}
export default Buttons;