import {useState} from "react";
function Contribute({ issues }) {
  const [contributors, setContributors] = useState(0);

  const handleContribute = () => {
    setContributors(contributors + 1);
  };

  const handleClear = () => {
    setContributors(0);
  };

   const openIssues = Math.max(issues - contributors, 0);

  return (
    <div className="mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
        <h3 className="text-2xl font-bold">Want to contribute?</h3>
        <p className="text-lg">Fix an open issue on <a href="https://github.com/EthanJamesLSaranza/CSIT340-G5-Midterms-Saranza" target="_blank" onClick={handleContribute} className="underline font-bold">GitHub</a>.</p>
        <div className="flex items-center gap-8">
            <p className="text-xl">Contributors: <span className="font-bold">{contributors}</span></p>
            <p className="text-xl">Open issues: <span className="font-bold">{openIssues}</span></p>
        </div>
        <button className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold" onClick={handleClear}>Clear</button>    
    </div>
  )
}

export default Contribute   