import { useState, useEffect } from 'react';
import IssueItem from './issueitem';
import './latestIssues.css';

function LatestIssues() {
  const [issues, setIssues] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchIssues = () => {
    fetch("https://api.github.com/repos/malebosambo/portfolio/issues")
    .then((response) => response.json())
    .then((response) => { setIssues(response);
  setError(null);
})
  .catch(setError);
}

  useEffect(() => {
    fetchIssues()
  }, []);
  
  const filterIssues = name => {
    console.log('Filter button pressed:' + name);
  }
  
  return (
    <>
      <div className="Section">
        <h1>Latest Issues <span className="badge badge-primary">{this.state.issues.length}</span></h1>
          
        <div className="btn-group">
          <button className="btn btn-primary m-2" onClick={() => this.filterIssues("websites")}>Websites</button>
          <button className="btn btn-primary m-2" onClick={() => this.filterIssues("apps")}>Apps</button>
          <button className="btn btn-primary m-2" onClick={() => this.filterIssues("iot")}>IoT</button>
          <button className="btn btn-primary" onClick={() => this.filterIssues("network")}>Network</button>
        </div>
      
        <div className="TableResponse">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Collaborator</th>
                <th>Status</th>
                <th>Project</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {this.state.issues.map((issue) => (<IssueItem issue={issue} />))}
            </tbody>
          </table>
        </div>

      </div>
    </>  
  );
}

export default LatestIssues;
