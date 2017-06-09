import React, { Component } from 'react';
import sr from '../js/scrollreveal.js';
import Header from './Header.js';
import Timeline from './Timeline.js';
class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount = () => {

    if (window.innerWidth < 768) {

      let list = window.document.querySelectorAll('.timeline-content.js--fadeInLeft')
      list.forEach((l) => {
        l.classList.remove('js--fadeInLeft')
        l.classList.add('js--fadeInRight')
      })

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      })
    }
    else {

      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      })

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      })
    }
  }

  render() {

    const workData = this.props.jsonObj.work;
    const headerData = this.props.jsonObj.header;
    const compItems = [];
    workData.forEach((val, index) => {
      compItems.push(<Timeline timelineData={val} key={index} position={(index % 2 === 0) ? 'left' : 'right'} />);
    })
    return (

      <div>
        <Header headerData={headerData} />
        <section className="timeline">
          <div className="container">
            {compItems}
          </div>
        </section>
      </div>
    );
  }
}
export default App;
