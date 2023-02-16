import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeContentCont from './components/homeContentCont';
import reportWebVitals from './reportWebVitals';

const services = [
  {
    id: 1,
    name: "GitHub",
    ops: ["DevOps", "Collaboration", "Compute", "Versioning"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/github"
  },
  {
    id: 2,
    name: "Websites",
    ops: ["Hosting", "Frameworks"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/websites"
  },
  {
    id: 3,
    name: "Apps",
    ops: ["AI", "ML"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/apps"
  },
  {
    id: 4,
    name: "IoT",
    ops: ["Template", "Custom"],
    imgUrl: "/public/1675430271622.jpeg",
    url: "/components/iot"
  },
  {
    id: 5,
    name: "Network",
    ops: ["Microservices", "VPN"],
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
