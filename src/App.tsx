import React from 'react'
import { Layout } from './components/Layout'
import Button from './components/Button'
import InputUnit from './components/InputUnit'

function App() {
  const data = [
    {
      id: 1,
      title: "Fantastic Gains and Where to Find Them: On the Existence and Prospect of General Knowledge Transfer between Any Pretrained Model",
      published: "2021-06-01",
      entry_id: "http://arxiv.org/abs/2310.17653v1",
      purpose: "mokuteki wo kokode syuturyoku",
      method: "houhou wo kokode syuturyoku",
      novelty: "sinnkisei wo kokode syutusyoku",
    },
    {
      id: 2,
      title: 'title 2',
    },
    {
      id: 3,
      title: 'title 3',
    },
  ]

  return (
    <Layout>
      <div className='max-w-6xl mx-auto p-7'>
        <div className='bg-white p-6 rounded shadow my-8 px-8 py-4'>
          <form action="" className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <InputUnit containerClassName='flex flex-col' labelName='Key word' type="text" placeholder='Key word'/>
              <div className='flex flex-col'>
                <label className='pb-2 px-2'>Category</label>
                <select name="" id="" className='text-gray-600 shadow border py-2 px-2 rounded focus:outline-none'>
                  <option value="">All</option>
                  <option value="">Category 1</option>
                  <option value="">Category 2</option>
                  <option value="">Category 3</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='pb-2 px-2'>Number</label>
                <select name="" id="" className='text-gray-600 shadow border py-2 px-2 rounded focus:outline-none'>
                  <option value="">5</option>
                  <option value="">10</option>
                  <option value="">20</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='pb-2 px-2'>Language</label>
                <select name="" id="" className='text-gray-600 shadow border py-2 px-2 rounded focus:outline-none'>
                  <option value="">English</option>
                  <option value="">Japanese</option>
                </select>
              </div>
            </div>
            <Button className='mt-8 mb-4'>Search</Button>
          </form>
        </div>
        <h1 className='text-xl text-slate-800 font-bold px-2'>検索結果</h1>
        {data.map((item) => (
          <div key={item.id} className='shadow-sm bg-white rounded my-8 px-8 py-4'>
            <p className='py-4 text-l'>{item.published}</p>
            <a className='py-4 text-lg underline' href={item?.entry_id}>{item.title}</a>
            <p className='py-4'><span className='font-bold text-lg'>Purpose: </span>{item?.purpose}</p>
            <p className='py-4'><span className='font-bold text-lg'>Method: </span>{item?.method}</p>
            <p className='py-4'><span className='font-bold text-lg'>Novelty: </span>{item?.novelty}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default App
