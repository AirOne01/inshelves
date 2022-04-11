import os from 'os';
import React from 'react';

import SideBar from './ui/SideBar';
import TitleBar from './ui/TitleBar';

class UI extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <>
        <SideBar />
        <div className='w-full h-screen pl-12'>
          {os.platform() === 'win32' && <TitleBar />}
          {this.props.children}
        </div>
      </>
    )
  }
}

export default UI;