import Title from '../components/Title'
import {connect} from 'react-redux'

const mapStateToProps = function ({title}) {
    return {title: title}
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Title)