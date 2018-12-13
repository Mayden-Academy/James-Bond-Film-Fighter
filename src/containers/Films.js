import Films from '../components/Films'
import {connect} from 'react-redux'
import {GetFilms, SendPlays} from '../actions'


const mapStateToProps = function ({randomFilms}) {
    return {films: randomFilms}
}

const mapDispatchToProps = dispatch => ({
    refreshSubmit: (data, films) => dispatch(SendPlays(data, films))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Films)

