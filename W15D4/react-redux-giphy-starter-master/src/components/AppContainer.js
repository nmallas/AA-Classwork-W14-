import { connect } from 'react-redux';
import { fetchGifs } from '../actions/gifActions';
import App from './App';

const mapStateToProps = state => {
  return {
    gifs: state.gifs.map(gif => gif.images.fixed_height.url)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGifs: (searchTerm) => dispatch(fetchGifs(searchTerm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
