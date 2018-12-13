import Films from '../components/Films'
import {connect} from 'react-redux'
import {GetFilms} from '../actions'

const mapStateToProps = function ({randomFilms}) {
    return {films: randomFilms}
}

const mapDispatchToProps = dispatch => ({
    refresh: () => dispatch(GetFilms())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Films)




