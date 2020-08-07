import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import 'antd/dist/antd.css';

const Test = () => {
    const [state, setState] = useState({visible: false});
       const showDrawer = () => {
        setState({visible:true})
    }
    
    const onClose = () => {
        setState({visible:false})
    }
    return (
        
        <div>
        <div style={{ marginTop: 16 }}>
          <Button onClick={showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
};

export default Test;