import { DownloadOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'
import { Modal, Button } from 'antd'
import { useState } from 'react'

interface ImageViewerProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  extra: string
}

export default function ImageViewer({
  src,
  alt,
  width,
  height,
  className,
  extra,
}: ImageViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoom, setZoom] = useState(1)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => {
    setIsModalOpen(false)
    setZoom(1) // Reset zoom when modal is closed
  }

  const zoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)) // Max zoom level
  const zoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)) // Min zoom level

  return (
    <>
      {/* Thumbnail */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={openModal}
        className={`cursor-pointer ${className}`}
        style={{ objectFit: 'cover' }}
      />

      {/* Fullscreen Modal */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        width='80%'
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '0',
        }}
        closeIcon={<span style={{ fontSize: '18px', color: '#000000' }}>✕</span>}
        style={{ padding: '0' }}
        modalRender={(modal) => <div className='custom-modal-content'>{modal}</div>}
      >
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid #f0f0f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
          }}
          className='ejehhhe'
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>{alt}</h2>
            <div style={{ color: '#888', fontSize: '14px' }}>
              <span>Định dạng: </span>
              {' | '}
              <span>Dung lượng: </span>
              {' | '}
              <span>Kích thước: </span>
            </div>
          </div>
          <Button type='primary' icon={<DownloadOutlined />} href={extra} download={alt}>
            Tải về
          </Button>
        </div>
        <img
          src={extra}
          alt={alt}
          style={{
            transform: `scale(${zoom})`,
            transition: 'transform 0.3s',
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',
            borderTop: '1px solid #f0f0f0',
          }}
        >
          <Button
            shape='circle'
            icon={<ZoomOutOutlined />}
            onClick={zoomOut}
            disabled={zoom <= 1}
            style={{ marginRight: '10px' }}
          />
          <Button shape='circle' icon={<ZoomInOutlined />} onClick={zoomIn} disabled={zoom >= 3} />
        </div>
      </Modal>
      <style jsx global>{`
        .custom-modal-content .ant-modal-content {
          background-color: #333;
          border-radius: 10px;
          padding: 0 !important;
        }
      `}</style>
    </>
  )
}