import { urlForImage } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'

interface PortableImageProps {
  image?: SanityImage
  alt?: string
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

const PortableImage = ({
  image,
  alt = 'Cover image',
  size = '100vw',
  classesWrapper,
  ...props
}: PortableImageProps) => {
  const imageUrl = image && urlForImage(image)
  const { width, height } = getImageDimensions(image)

  return (
    <>
      <div
        className={`w-full overflow-hidden rounded-[3px] ${classesWrapper}`}
        data-sanity={props['data-sanity']}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={alt || ' '}
            loading="lazy"
            sizes={size}
            style={{
              // Avoid jumping around with aspect-ratio CSS property
              aspectRatio: width / height,
            }}
            width={width}
            height={height}
          />
        )}
      </div>
    </>
  )
}

export default PortableImage
