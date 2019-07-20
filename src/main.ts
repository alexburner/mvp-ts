import { createElement } from 'react'
import { render } from 'react-dom'
import { Root } from './components/Root'

//
// Test React
//
render(createElement(Root), document.getElementById('root'))

//
// Test Dynamic Imports & Async/Await
//
setTimeout(async () => {
  const dynamic = await import('./util/dynamic')
  setTimeout(dynamic.foo, 1000)
}, 1000)

//
// Test Polyfills
//
const set = new Set([0, 1, 2, 2, 3])
console.log(set)

//
// Test Web Worker
//
const worker = new Worker('./worker.ts')
worker.addEventListener('message', e => {
  const data: unknown = JSON.parse(e.data)
  console.log('Main thread received message from worker:', data)
})
worker.postMessage(JSON.stringify({ foo: 'bar' }))
