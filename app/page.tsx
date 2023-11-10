import Image from 'next/image'
import { Button } from './components/ui/button/Button'
import { Input } from './components/ui/input/Input'
import { SearchText } from './components/ui/search-text/SearchText'
import { Tag } from './components/ui/tags/tag/Tag'
import { CloseBtn } from './components/ui/close-button/CloseBtn'
import { Htag } from '@/app/components/ui/tags/h-tag/Htag'
import {Ptag} from "@/app/components/ui/tags/p-tag/Ptag";

export default function Home() {
  return (
    <>
    <Button size='default'>Change plan</Button>
    <Input type='text' placeholder='Search by job title' className='mt-6'></Input>
    <SearchText type='job'>Job title</SearchText>
    <Tag type='km'>KM</Tag>
    <CloseBtn></CloseBtn>
    <Htag type='subtitle'>LOGO</Htag>
      <Ptag type={"bold"}>Hello</Ptag>
    </>
  )
}
