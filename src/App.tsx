import React from 'react'
import { Layout } from './components/Layout'

function App() {
  const data = [
    {
      id: 1,
      title: "Fantastic Gains and Where to Find Them: On the Existence and Prospect of General Knowledge Transfer between Any Pretrained Model",
      published: "2021-06-01",
      entry_id: "http://arxiv.org/abs/2310.17653v1",
      abstract: "Training deep networks requires various design decisions regarding for\ninstance their architecture, data augmentation, or optimization. In this work,\nwe find these training variations to result in networks learning unique feature\nsets from the data. Using public model libraries comprising thousands of models\ntrained on canonical datasets like ImageNet, we observe that for arbitrary\npairings of pretrained models, one model extracts significant data context\nunavailable in the other -- independent of overall performance. Given any\narbitrary pairing of pretrained models and no external rankings (such as\nseparate test sets, e.g. due to data privacy), we investigate if it is possible\nto transfer such \"complementary\" knowledge from one model to another without\nperformance degradation -- a task made particularly difficult as additional\nknowledge can be contained in stronger, equiperformant or weaker models. Yet\nfacilitating robust transfer in scenarios agnostic to pretrained model pairings\nwould unlock auxiliary gains and knowledge fusion from any model repository\nwithout restrictions on model and problem specifics - including from weaker,\nlower-performance models. This work therefore provides an initial, in-depth\nexploration on the viability of such general-purpose knowledge transfer. Across\nlarge-scale experiments, we first reveal the shortcomings of standard knowledge\ndistillation techniques, and then propose a much more general extension through\ndata partitioning for successful transfer between nearly all pretrained models,\nwhich we show can also be done unsupervised. Finally, we assess both the\nscalability and impact of fundamental model properties on successful\nmodel-agnostic knowledge transfer.",
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
        {data.map((item) => (
          <div key={item.id} className='shadow-sm bg-white rounded my-8 px-8 py-4'>
            <p className='py-4 text-l'>{item.published}</p>
            <a className='py-4 text-lg underline' href={item?.entry_id}>{item.title}</a>
            <p className='py-4'>{item?.abstract}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default App
