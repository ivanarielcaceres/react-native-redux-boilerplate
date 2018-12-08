import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems, addItem } from '../actions/actions';
import MainScreen from '../screens/Main';

const mapStateToProps = state => ({ items: state.items });
const mapDispatchToProps = dispatch => ({
  fetchItems: bindActionCreators(fetchItems, dispatch),
  addItem: bindActionCreators(addItem, dispatch),
});

const MovesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);

export default MovesContainer;
