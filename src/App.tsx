import React from 'react';
import './App.css';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const App = (): React.ReactNode => (
  <div className="App">
    <h1 className="text-4xl font-bold mb-6">Learn Flowbite React</h1>
    <div className="flex flex-col gap-4">
      <Alert color="info">
        <>Lorem ipsum dolor sit amet.</>
      </Alert>
      <Alert color="failure" icon={HiInformationCircle}>
        <>Lorem ipsum dolor sit amet, consectetur.</>
      </Alert>
      <Alert
        color="success"
        onDismiss={() => {
          alert('Alert dismissed!');
        }}
      >
        <>Lorem ipsum dolor sit amet, consectetur adipisicing.</>
      </Alert>
    </div>
  </div>
);

export default App;
