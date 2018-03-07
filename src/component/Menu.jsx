import "../css/bootstrap-vertical-menu.css";
import {Component} from "rainbowui-core";
import PropTypes from 'prop-types';

export default class Menu extends Component {

    renderComponent() {
        let styleClass = 'navbar navbar-vertical-left '+ this.props.styleClass;
        return (
            <nav className={styleClass} style={this.props.style} id={this.props.id} >
                <ul className="nav navbar-nav">
                    {this.renderMenuBar(this)}
                </ul>
            </nav>
        );
    }

    renderMenuBar(component) {
        const {children} = component.props;
        if (children != null) {
            if(children.length>1){
                return children.map(function(child){
                    return child;
                });
            }else{
                return children;
            }           
        }
    }
};


Menu.propTypes = $.extend({}, Component.propTypes, {

});


Menu.defaultProps = $.extend({}, Component.defaultProps, {

});