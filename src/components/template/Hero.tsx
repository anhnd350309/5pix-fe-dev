import { Card } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'

import EventCard from '../shared/EventCard'

const Hero = () => {
  const { t } = useTranslation('common')
  // const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='flex flex-col space-y-5 mx-16 mt-4 px-8 xl:px-16 center' id='about'>
      <div className='flex flex-col justify-center items-center space-y-5 row-start-2 sm:row-start-1'>
        <h1 className='font-bold text-3xl text-center text-white lg:text-4xl xl:text-5xl leading-normal'>
          {t('Nhiếp ảnh')}
          <br /> {t('mang lại trải nghiệm khác biệt')}
        </h1>
        <div className='flex items-center gap-4 sm:gap-0 space-x-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-white shadow p-2 rounded-full'>
          <Select>
            <SelectTrigger className='bg-white border-none rounded-full w-full text-center'>
              <span className='text-gray-700'>GIẢI CHẠY VIỆT NAM FAMILY MARATHON...</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Option 1</SelectItem>
              <SelectItem value='2'>Option 2</SelectItem>
              <SelectItem value='3'>Option 3</SelectItem>
            </SelectContent>
          </Select>
          <div className='flex flex-1'>
            <div className='flex bg-white border-l-2 w-64'>
              <Input placeholder='Nhập số BIB' className='!ml-0 border-none w-48 !important' />
            </div>
            <Button className='flex items-center bg-blue-500 rounded-full w-[200px] text-white'>
              Tìm ảnh
            </Button>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center w-full'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-[100%]'
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/3'>
                <div className='p-1'>
                  <EventCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className=''>
        <h2 className='m-4 font-bold text-3xl text-center'>Danh sách sự kiện</h2>
        <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index}>
              <EventCard />
            </Card>
          ))}
        </div>
        <div className='flex justify-center mt-4 border-blue-500'>
          <Button className='bg-transparent hover:bg-blue-500 mb-8 border border-blue-500 rounded-full text-blue-500 hover:text-white'>
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
