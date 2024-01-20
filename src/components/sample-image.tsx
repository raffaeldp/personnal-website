import { urlForImage } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import Image from 'next/image'

const SampleImageComponent = ({ value }: { value: any }) => {
  const { width, height } = getImageDimensions(value)

  const imageUrl = urlForImage(value)

  return (
    <>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={value.alt || ' '}
          loading="lazy"
          style={{
            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
          width={width}
          height={height}
        />
      )}
    </>
  )
}

export default SampleImageComponent
