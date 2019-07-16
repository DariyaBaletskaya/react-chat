import React from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            isShown: !this.state.isShown
        });
    }

    render() {
        const props = this.props;
        const inputType = this.state.isShown ? 'text' : 'password';

        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">{ props.label }</label>
                <input
                    className="col-sm-7"
                    value={ props.text }
                    type={ inputType }
                    onChange={ e => props.onChange(e, props.keyword) }
                />
                <button className="col-sm-2" onClick={ this.onClick }>&#x1f441;</button>
            </div>
        );
    }
}

PasswordInput.propTypes = {
    text: PropTypes.string,
    keyword: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
};

export default PasswordInput;