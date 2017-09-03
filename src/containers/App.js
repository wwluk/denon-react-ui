import App from "../components/app";
import {connect} from "react-redux";
import {fetchData} from "../actions/index";

export default connect(null, {
    fetchData
})(App);
