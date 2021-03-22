import { connect } from "react-redux";
import SubNav from "./subnav";
import { fetchSearchResults, clearSearchResults } from "../../actions/search_actions";

const mSTP = (state) => {
    return {
        results: state.search
    }

}

const mDTP = (dispatch) => {
    return {
        clearSearchResults: () => dispatch(clearSearchResults()),
        fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
    }

}

export default connect(mSTP, mDTP)(SubNav)

