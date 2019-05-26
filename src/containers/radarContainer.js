import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/RadarAction"
import RadarDiagram from '../components/Radar.js';

class RadarContainer extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            loaded: false
          }
    }

    async componentDidMount() {
        await this.props.loadReviewData();
        this.setState({loaded: true})
        console.log(this.props.data);
    }
    
    content() {
        return (<RadarDiagram data={this.props.data}></RadarDiagram>
        )
    }

    render() {
        return (<div>
            {this.state.loaded ? this.content() : <div>Still Loading...</div>}
        </div>)
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state
};

export default connect(mapStateToProps, actionCreators)(RadarContainer);