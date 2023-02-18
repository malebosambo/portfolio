import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeContentCont from './components/homeContentCont';
import reportWebVitals from './reportWebVitals';

const services = [
  {
    id: 1,
    name: "GitHub",
    ops: ["DevOps"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/github"
  },
  {
    id: 2,
    name: "Websites",
    ops: ["Hosting"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/websites"
  },
  {
    id: 3,
    name: "Apps",
    ops: ["AI"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/apps"
  },
  {
    id: 4,
    name: "IoT",
    ops: ["Template"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/iot"
  },
  {
    id: 5,
    name: "Network",
    ops: ["Microservices"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/network"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeContentCont services={services} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
