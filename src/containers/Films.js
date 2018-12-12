import Films from '../components/Films'
import {connect} from 'react-redux'

const mapStateToProps = function ({randomFilms}) {
    return {films: randomFilms}
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Films)