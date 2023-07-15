import { Suspense } from 'react'
import {Layout} from "../../../layout/Layout"
import Loading from './loading'
 
export default function Posts() {
   
  return (
    <section>
      <Suspense fallback={<Loading/>}>
       <Layout/>
      </Suspense>
   
    </section>
  )
}