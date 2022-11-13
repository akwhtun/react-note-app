import React from 'react';
import './Toolbar.css';
class Toolbar extends React.Component{
    render() {
        return (
            <div className='toolbar'>
                {this.props.children}
            </div>
        )
    }
}

export default Toolbar;