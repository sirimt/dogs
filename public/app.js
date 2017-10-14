class DogList extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        dogs: []
      };
    }
  
    componentWillMount() {
      axios.get('/api/beers')
        .then((response) => {
          console.log(response)
          this.setState({
            dogs: response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      let dognames = this.state.dogs.map( (dog) => {
        return <li>{ dog.name }</li>
      });
      
      return (
        <ul>
          { dognames }
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <DogList />,
    document.getElementById('root')
  );