import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/RadarAction"
import RadarDiagram from '../components/Radar.js';

class RadarContainer extends React.Component {
    componentDidMount() {
        this.props.loadReviewData();
        console.log(this.props.data);
    }
    render() {
        return <RadarDiagram data={this.props.data}></RadarDiagram>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state
};

export default connect(mapStateToProps, actionCreators)(RadarContainer);