import { urlForImage } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'

interface PortableImageProps {
  image?: SanityImage
  alt?: string
  width?: number
  height?: number
  classesImage?: string
  'data-sanity'?: string
}

const HeaderPortableImage = ({
  image,
  alt = 'Cover image',
  classesImage,
  height,
  width,
  ...props
}: PortableImageProps) => {
  const imageUrl = image && urlForImage(image)
  const fill = !width && !height
  // preflight's height:auto renders the real aspect ratio; match it so next/image doesn't warn
  const renderedHeight =
    image && width
      ? Math.round(width / getImageDimensions(image as any).aspectRatio)
      : height

  return (
    <>
      {imageUrl && (
        <Image
          className={classesImage}
          src={imageUrl}
          alt={alt || ' '}
          priority={true}
          // same output as the legacy layout/objectFit/objectPosition props
          fill={fill}
          sizes={fill ? '100vw' : undefined}
          style={
            fill ? { objectFit: 'cover', objectPosition: 'center' } : undefined
          }
          height={renderedHeight}
          width={width}
          {...props}
        />
      )}
    </>
  )
}

export default HeaderPortableImage
