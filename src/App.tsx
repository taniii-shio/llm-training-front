import React from "react";
import axios from "axios";
import { Layout } from "./components/Layout";
import Button from "./components/Button";
import InputUnit from "./components/InputUnit";

type Data = {
  id: number;
  title: string;
  published: string;
  url: string;
  primary_category: string;
  purpose: string;
  method: string;
  novelty: string;
};

function App() {
  const [data, setData] = React.useState<Data[]>([]);
  const [keyword, setKeyword] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [number, setNumber] = React.useState(5);
  const [language, setLanguage] = React.useState(0);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumber(Number(e.target.value));
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(Number(e.target.value));
  };

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:8000/papers?keyword=${keyword}&category=${category}&num=${number}&lan=${language}`
      );
      setData(result.data);
    };
    fetchData();
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-7">
        <div className="bg-white p-6 rounded shadow my-8 px-8 py-4">
          <form onSubmit={handleSearch} className="flex flex-col">
            <div className="flex flex-row justify-between">
              <InputUnit
                onChange={handleKeywordChange}
                containerClassName="flex flex-col"
                labelName="Key word"
                type="text"
                placeholder="Key word"
              />

              <div className="flex flex-col">
                <label className="pb-2 px-2">Category</label>
                <select
                  onChange={handleCategoryChange}
                  name=""
                  id=""
                  className="text-gray-600 shadow border py-2 px-2 rounded focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="AI">Artificial Intelligence</option>
                  <option value="AR">Hardware Architecture</option>
                  <option value="CC">Computational Complexity</option>
                  <option value="CE">
                    Computational Engineering, Finance, and Science
                  </option>
                  <option value="CG">Computational Geometry</option>
                  <option value="CL">Computation and Language</option>
                  <option value="CR">Cryptography and Security</option>
                  <option value="CV">
                    Computer Vision and Pattern Recognition
                  </option>
                  <option value="CY">Computers and Society</option>
                  <option value="DB">Databases</option>
                  <option value="DC">
                    Distributed, Parallel, and Cluster Computing
                  </option>
                  <option value="DL">Digital Libraries</option>
                  <option value="DM">Discrete Mathematics</option>
                  <option value="DS">Data Structures and Algorithms</option>
                  <option value="ET">Emerging Technologies</option>
                  <option value="FL">
                    Formal Languages and Automata Theory
                  </option>
                  <option value="GL">General Literature</option>
                  <option value="GR">Graphics</option>
                  <option value="GT">Computer Science and Game Theory</option>
                  <option value="HC">Human-Computer Interaction</option>
                  <option value="IR">Information Retrieval</option>
                  <option value="IT">Information Theory</option>
                  <option value="LG">Machine Learning</option>
                  <option value="LO">Logic in Computer Science</option>
                  <option value="MA">Multiagent Systems</option>
                  <option value="MM">Multimedia</option>
                  <option value="MS">Mathematical Software</option>
                  <option value="NA">Numerical Analysis</option>
                  <option value="NE">Neural and Evolutionary Computing</option>
                  <option value="NI">
                    Networking and Internet Architecture
                  </option>
                  <option value="OH">Other Computer Science</option>
                  <option value="OS">Operating Systems</option>
                  <option value="PF">Performance</option>
                  <option value="PL">Programming Languages</option>
                  <option value="RO">Robotics</option>
                  <option value="SC">Symbolic Computation</option>
                  <option value="SD">Sound</option>
                  <option value="SE">Software Engineering</option>
                  <option value="SI">Social and Information Networks</option>
                  <option value="SY">Systems and Control</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="pb-2 px-2">Number</label>
                <select
                  onChange={handleNumberChange}
                  name=""
                  id=""
                  className="text-gray-600 shadow border py-2 px-2 rounded focus:outline-none"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="pb-2 px-2">Language</label>
                <select
                  onChange={handleLanguageChange}
                  name=""
                  id=""
                  className="text-gray-600 shadow border py-2 px-2 rounded focus:outline-none"
                >
                  <option value="0">English</option>
                  <option value="1">Japanese</option>
                </select>
              </div>
            </div>
            <Button className="mt-8 mb-4">Search</Button>
          </form>
        </div>
        <h1 className="text-xl text-slate-800 font-bold px-2">検索結果</h1>
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-sm bg-white rounded my-8 px-8 py-4"
          >
            <p className="py-4 text-l">{item.published}</p>
            <a className="py-4 text-lg underline" href={item?.url}>
              {item.title}
            </a>
            <p className="py-4">
              <span className="font-bold text-lg">Purpose: </span>
              {item?.purpose}
            </p>
            <p className="py-4">
              <span className="font-bold text-lg">Method: </span>
              {item?.method}
            </p>
            <p className="py-4">
              <span className="font-bold text-lg">Novelty: </span>
              {item?.novelty}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;
