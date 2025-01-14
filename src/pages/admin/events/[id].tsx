import React from 'react'
import SEOHead from '@/components/seo'
import LayoutAdmin from '@/components/layout/LayoutAdmin'
import ListEventsDetailAdmin from '@/components/event/ListItemDetailAdmin'
import { useRouter } from 'next/router'

const EventAdmin = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <SEOHead title='5PIX' />
      <LayoutAdmin>
        {id && <ListEventsDetailAdmin id={Array.isArray(id) ? id[0] : id} />}
      </LayoutAdmin>
    </>
  )
}

export default EventAdmin
